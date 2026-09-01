#!/usr/bin/env node
/**
 * Gera public/sitemap.xml lendo os slugs de src/data/products.ts e as rotas estáticas.
 * Executado automaticamente via `prebuild` antes de cada `npm run build`.
 *
 * Uso manual: node scripts/generate-sitemap.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "..");

// Lê SITE_URL do constants.ts por regex (evita importar TS direto no Node)
async function getSiteUrl() {
  const src = await fs.readFile(
    path.join(ROOT_DIR, "src", "lib", "constants.ts"),
    "utf-8",
  );
  const match = src.match(/SITE_URL\s*=\s*["']([^"']*)["']/);
  const url = match?.[1]?.trim() ?? "";
  return url || "https://agimports.com.br"; // fallback enquanto SITE_URL não for preenchido
}

// Extrai slugs do products.ts por regex (evita precisar do TypeScript runtime)
async function getSlugs() {
  const src = await fs.readFile(
    path.join(ROOT_DIR, "src", "data", "products.ts"),
    "utf-8",
  );
  const slugs = [];
  // Procura por linhas como: slug: "polo-ralph-lauren-01",
  for (const match of src.matchAll(/slug\s*:\s*["']([\w-]+)["']/g)) {
    slugs.push(match[1]);
  }
  return slugs;
}

function xmlEscape(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function urlEntry({ loc, priority, changefreq }) {
  return [
    "  <url>",
    `    <loc>${xmlEscape(loc)}</loc>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

async function main() {
  const siteUrl = await getSiteUrl();
  const slugs = await getSlugs();

  console.log(`Site URL: ${siteUrl}`);
  console.log(`Produtos encontrados: ${slugs.length}`);

  // Rotas estáticas
  const staticRoutes = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/catalogo", priority: "0.9", changefreq: "weekly" },
    { path: "/sobre", priority: "0.7", changefreq: "monthly" },
    { path: "/contato", priority: "0.7", changefreq: "monthly" },
  ];

  const entries = [
    // Páginas estáticas
    ...staticRoutes.map(({ path: p, priority, changefreq }) =>
      urlEntry({ loc: `${siteUrl}${p}`, priority, changefreq }),
    ),
    // Página de cada produto
    ...slugs.map((slug) =>
      urlEntry({
        loc: `${siteUrl}/produto/${slug}`,
        priority: "0.6",
        changefreq: "monthly",
      }),
    ),
  ];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries,
    "</urlset>",
    "", // newline final
  ].join("\n");

  const outPath = path.join(ROOT_DIR, "public", "sitemap.xml");
  await fs.writeFile(outPath, xml, "utf-8");
  console.log(
    `✓ Sitemap gerado: public/sitemap.xml (${staticRoutes.length} rotas + ${slugs.length} produtos = ${staticRoutes.length + slugs.length} URLs)`,
  );
}

main().catch((err) => {
  console.error("Erro ao gerar sitemap:", err);
  process.exit(1);
});
