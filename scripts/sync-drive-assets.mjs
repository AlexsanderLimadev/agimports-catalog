#!/usr/bin/env node
/**
 * Sincroniza as imagens do Google Drive (pastas por marca) para o repositório,
 * substituindo as referências quebradas do Lovable (/__l5e/assets-v1/...) por
 * arquivos locais reais em WebP.
 *
 * Uso:
 *   1. Coloque o JSON da Service Account em ./credentials.json (ou aponte
 *      GOOGLE_APPLICATION_CREDENTIALS para outro caminho).
 *   2. Compartilhe a pasta raiz do Drive com o e-mail da service account
 *      (client_email dentro do JSON) como Leitor.
 *   3. npm install googleapis sharp --save-dev
 *   4. node scripts/sync-drive-assets.mjs
 *
 * O que ele faz:
 *   - Lista as subpastas (marcas) da pasta raiz do Drive.
 *   - Para cada marca, baixa todas as imagens, converte pra WebP (qualidade 82,
 *     largura máxima 1600px) e salva em public/produtos/<slug-da-marca>/N.webp.
 *   - Gera manifest.json com o mapeamento marca -> lista de arquivos locais.
 *   - Reescreve src/data/products.ts e src/data/categories.ts trocando os paths
 *     /__l5e/assets-v1/... por arquivos locais, distribuindo as imagens de cada
 *     marca em sequência (round-robin) pelos produtos daquela marca.
 *
 * Nada aqui tenta casar arquivo específico com produto específico — os nomes
 * originais no Drive (IMG_xxxx.PNG, Captura de tela...) não carregam essa
 * informação, então a distribuição é por marca, não por peça.
 */

import { google } from "googleapis";
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "..");
const CREDENTIALS_PATH =
  process.env.GOOGLE_APPLICATION_CREDENTIALS ||
  path.join(ROOT_DIR, "credentials.json");

// ID da pasta raiz no Drive (a mesma usada nos prompts de especificação)
const DRIVE_ROOT_FOLDER_ID = "1kYT7rl6HrYUSotsXQ0qE2bSO_0SPqDYf";

const PUBLIC_ASSETS_DIR = path.join(ROOT_DIR, "public", "produtos");
const MANIFEST_PATH = path.join(ROOT_DIR, "src", "data", "drive-assets-manifest.json");
const PRODUCTS_PATH = path.join(ROOT_DIR, "src", "data", "products.ts");
const CATEGORIES_PATH = path.join(ROOT_DIR, "src", "data", "categories.ts");

const IMAGE_MIME_PREFIX = "image/";
const MAX_WIDTH = 1600;
const WEBP_QUALITY = 82;

function slugify(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^\w\s-]/g, "") // remove emojis/símbolos
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

async function getDriveClient() {
  const raw = await fs.readFile(CREDENTIALS_PATH, "utf-8");
  const credentials = JSON.parse(raw);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });
  return google.drive({ version: "v3", auth });
}

async function listChildren(drive, parentId) {
  const files = [];
  let pageToken;
  do {
    const res = await drive.files.list({
      q: `'${parentId}' in parents and trashed = false`,
      fields: "nextPageToken, files(id, name, mimeType, size)",
      pageSize: 200,
      pageToken,
    });
    files.push(...(res.data.files || []));
    pageToken = res.data.nextPageToken;
  } while (pageToken);
  return files;
}

async function downloadFile(drive, fileId) {
  const res = await drive.files.get(
    { fileId, alt: "media" },
    { responseType: "arraybuffer" }
  );
  return Buffer.from(res.data);
}

async function main() {
  console.log("Conectando ao Google Drive...");
  const drive = await getDriveClient();

  console.log("Listando pastas de marca...");
  const brandFolders = (await listChildren(drive, DRIVE_ROOT_FOLDER_ID)).filter(
    (f) => f.mimeType === "application/vnd.google-apps.folder"
  );

  console.log(`Encontradas ${brandFolders.length} pastas.`);

  const manifest = {};

  for (const folder of brandFolders) {
    const brandSlug = slugify(folder.name);
    const brandDir = path.join(PUBLIC_ASSETS_DIR, brandSlug);
    await fs.mkdir(brandDir, { recursive: true });

    const children = await listChildren(drive, folder.id);
    const images = children.filter((f) => f.mimeType?.startsWith(IMAGE_MIME_PREFIX));

    if (images.length === 0) {
      console.log(`  [${folder.name}] sem imagens — pulando.`);
      manifest[folder.name] = [];
      continue;
    }

    console.log(`  [${folder.name}] ${images.length} imagem(ns)...`);
    const localPaths = [];

    for (let i = 0; i < images.length; i++) {
      const file = images[i];
      try {
        const buffer = await downloadFile(drive, file.id);
        const outName = `${i + 1}.webp`;
        const outPath = path.join(brandDir, outName);

        await sharp(buffer)
          .resize({ width: MAX_WIDTH, withoutEnlargement: true })
          .webp({ quality: WEBP_QUALITY })
          .toFile(outPath);

        const publicPath = `/produtos/${brandSlug}/${outName}`;
        localPaths.push(publicPath);
        console.log(`    ✓ ${file.name} -> ${publicPath}`);
      } catch (err) {
        console.error(`    ✗ falha em ${file.name}: ${err.message}`);
      }
    }

    manifest[folder.name] = localPaths;
  }

  await fs.mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
  await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2), "utf-8");
  console.log(`\nManifesto salvo em ${path.relative(ROOT_DIR, MANIFEST_PATH)}`);

  await rewriteProducts(manifest);
  await rewriteCategories(manifest);

  console.log("\nConcluído. Rode `npm run build` para validar.");
}

/**
 * Reescreve products.ts trocando o array `images` de cada produto por fotos
 * reais da marca correspondente, distribuídas em round-robin.
 */
async function rewriteProducts(manifest) {
  const src = await fs.readFile(PRODUCTS_PATH, "utf-8");

  // Extrai o array de produtos via regex do bloco `export const products: Product[] = [...]`
  const match = src.match(/export const products: Product\[\] = (\[[\s\S]*\]);/);
  if (!match) {
    console.warn("Não encontrei o array `products` em products.ts — pulei a reescrita.");
    return;
  }

  const products = JSON.parse(match[1]);
  const brandCounters = {};

  for (const product of products) {
    const pool = manifest[product.brand];
    if (!pool || pool.length === 0) {
      console.warn(`  Sem imagens no Drive para a marca "${product.brand}" (produto ${product.slug}) — mantendo path antigo.`);
      continue;
    }
    const idx = (brandCounters[product.brand] ?? 0) % pool.length;
    brandCounters[product.brand] = idx + 1;
    product.images = [pool[idx]];
  }

  const newSrc = src.replace(
    match[0],
    `export const products: Product[] = ${JSON.stringify(products, null, 2)};`
  );
  await fs.writeFile(PRODUCTS_PATH, newSrc, "utf-8");
  console.log(`products.ts reescrito (${products.length} produtos).`);
}

/**
 * Reescreve categories.ts usando a primeira imagem disponível de cada marca
 * como capa da categoria.
 */
async function rewriteCategories(manifest) {
  const src = await fs.readFile(CATEGORIES_PATH, "utf-8");

  const match = src.match(/export const categories: Category\[\] = (\[[\s\S]*\]);/);
  if (!match) {
    console.warn("Não encontrei o array `categories` em categories.ts — pulei a reescrita.");
    return;
  }

  const categories = JSON.parse(match[1]);

  for (const category of categories) {
    const pool = manifest[category.name];
    if (!pool || pool.length === 0) {
      console.warn(`  Sem imagens no Drive para a categoria "${category.name}" — mantendo path antigo.`);
      continue;
    }
    category.image = pool[0];
  }

  const newSrc = src.replace(
    match[0],
    `export const categories: Category[] = ${JSON.stringify(categories, null, 2)};`
  );
  await fs.writeFile(CATEGORIES_PATH, newSrc, "utf-8");
  console.log(`categories.ts reescrito (${categories.length} categorias).`);
}

main().catch((err) => {
  console.error("Erro fatal:", err);
  process.exit(1);
});
