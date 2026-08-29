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
  process.env.GOOGLE_APPLICATION_CREDENTIALS || path.join(ROOT_DIR, "credentials.json");

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
  const res = await drive.files.get({ fileId, alt: "media" }, { responseType: "arraybuffer" });
  return Buffer.from(res.data);
}

async function main() {
  // --rewrite-only: pula a conexão/download do Drive e usa o manifest.json
  // que já foi gerado numa rodada anterior — útil quando o download já
  // funcionou e só a reescrita de products.ts/categories.ts falhou ou
  // precisa rodar de novo (ex: depois de um `npm run format`).
  if (process.argv.includes("--rewrite-only")) {
    console.log("Modo --rewrite-only: usando manifesto já salvo, sem baixar do Drive de novo.");
    const manifest = JSON.parse(await fs.readFile(MANIFEST_PATH, "utf-8"));
    await rewriteProducts(manifest);
    await rewriteCategories(manifest);
    console.log("\nConcluído. Rode `npm run build` para validar.");
    return;
  }

  console.log("Conectando ao Google Drive...");
  const drive = await getDriveClient();

  console.log("Listando pastas de marca...");
  const brandFolders = (await listChildren(drive, DRIVE_ROOT_FOLDER_ID)).filter(
    (f) => f.mimeType === "application/vnd.google-apps.folder",
  );

  console.log(`Encontradas ${brandFolders.length} pastas.`);

  const manifest = {};

  for (const folder of brandFolders) {
    // Algumas pastas do Drive têm espaço sobrando no nome (ex: "Bonés ", "Off White ").
    // O `brand` em products.ts/categories.ts não tem esse espaço — sem o trim() aqui,
    // a busca no manifesto abaixo falha silenciosamente pra essas marcas.
    const brandName = folder.name.trim();
    const brandSlug = slugify(brandName);
    const brandDir = path.join(PUBLIC_ASSETS_DIR, brandSlug);
    await fs.mkdir(brandDir, { recursive: true });

    const children = await listChildren(drive, folder.id);
    const images = children.filter((f) => f.mimeType?.startsWith(IMAGE_MIME_PREFIX));

    if (images.length === 0) {
      console.log(`  [${brandName}] sem imagens — pulando.`);
      manifest[brandName] = [];
      continue;
    }

    console.log(`  [${brandName}] ${images.length} imagem(ns)...`);
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

    manifest[brandName] = localPaths;
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
 *
 * Faz substituição pontual por regex (achando o bloco de cada produto pelo
 * `slug` e trocando só o campo `images` dele) em vez de `JSON.parse` no
 * arquivo inteiro — o formatador do projeto (prettier) pode reescrever
 * `"id": "001"` como `id: "001"` (sem aspas na chave), que é TypeScript
 * válido mas não é mais JSON válido. Essa abordagem funciona nos dois casos.
 */
async function rewriteProducts(manifest) {
  let src = await fs.readFile(PRODUCTS_PATH, "utf-8");

  const productBlockRegex = /\{[^{}]*?slug\s*:\s*["']([\w-]+)["'][^{}]*?\}/g;
  const brandCounters = {};
  let rewritten = 0;
  const skippedNoBrandImages = new Set();

  src = src.replace(productBlockRegex, (block) => {
    const brandMatch = block.match(/brand\s*:\s*["']((?:[^"'\\]|\\.)*)["']/);
    if (!brandMatch) return block;
    const brand = brandMatch[1];

    const pool = manifest[brand];
    if (!pool || pool.length === 0) {
      skippedNoBrandImages.add(brand);
      return block;
    }

    const imagesRegex = /images\s*:\s*\[[^\]]*\]/;
    if (!imagesRegex.test(block)) return block;

    const idx = (brandCounters[brand] ?? 0) % pool.length;
    brandCounters[brand] = idx + 1;
    rewritten++;
    return block.replace(imagesRegex, `images: ["${pool[idx]}"]`);
  });

  if (skippedNoBrandImages.size > 0) {
    console.warn(
      `  Sem imagens no Drive para: ${[...skippedNoBrandImages].join(", ")} — mantido path antigo.`,
    );
  }

  await fs.writeFile(PRODUCTS_PATH, src, "utf-8");
  console.log(`products.ts reescrito (${rewritten} produtos atualizados).`);
}

/**
 * Reescreve categories.ts usando a primeira imagem disponível de cada marca
 * como capa da categoria. Mesma técnica de substituição pontual por slug,
 * pelo mesmo motivo (não depender de o arquivo ser JSON estrito).
 */
async function rewriteCategories(manifest) {
  let src = await fs.readFile(CATEGORIES_PATH, "utf-8");

  const categoryBlockRegex = /\{[^{}]*?slug\s*:\s*["']([\w-]+)["'][^{}]*?\}/g;
  let rewritten = 0;
  const skipped = new Set();

  src = src.replace(categoryBlockRegex, (block) => {
    const nameMatch = block.match(/name\s*:\s*["']((?:[^"'\\]|\\.)*)["']/);
    if (!nameMatch) return block;
    const name = nameMatch[1];

    const pool = manifest[name];
    if (!pool || pool.length === 0) {
      skipped.add(name);
      return block;
    }

    const imageRegex = /image\s*:\s*(?:null|["'](?:[^"'\\]|\\.)*["'])/;
    if (!imageRegex.test(block)) return block;

    rewritten++;
    return block.replace(imageRegex, `image: "${pool[0]}"`);
  });

  if (skipped.size > 0) {
    console.warn(`  Sem imagens no Drive para: ${[...skipped].join(", ")} — mantido path antigo.`);
  }

  await fs.writeFile(CATEGORIES_PATH, src, "utf-8");
  console.log(`categories.ts reescrito (${rewritten} categorias atualizadas).`);
}

main().catch((err) => {
  console.error("Erro fatal:", err);
  process.exit(1);
});
