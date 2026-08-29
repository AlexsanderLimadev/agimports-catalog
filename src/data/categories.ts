/**
 * CATEGORIAS — AG IMPORTS (geradas a partir do Drive da loja)
 */

export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string | null;
};

export const categories: Category[] = [
  {
    id: "01",
    slug: "amiri",
    name: "Amiri",
    description: "Peças Amiri importadas.",
    image: "/__l5e/assets-v1/f36a034e-3e9d-409a-a0b3-3e4c1e01fc5e/amiri-01.jpg",
  },
  {
    id: "02",
    slug: "off-white",
    name: "Off White",
    description: "Seleção Off-White.",
    image: "/produtos/off-white/1.webp",
  },
  {
    id: "03",
    slug: "polo-ralph-lauren",
    name: "Polo Ralph Lauren",
    description: "Clássicos Polo Ralph Lauren.",
    image: "/produtos/polo-ralph-lauren/1.webp",
  },
  {
    id: "04",
    slug: "vilebrequin",
    name: "VILEBREQUIN",
    description: "Beachwear Vilebrequin.",
    image: "/__l5e/assets-v1/ad4dd058-e58f-4890-b90b-ad401ccfa9c9/vilebrequin-01.jpg",
  },
  {
    id: "05",
    slug: "casa-blanca",
    name: "Casa Blanca",
    description: "Casablanca selecionada.",
    image: "/__l5e/assets-v1/b52d8294-4a69-4569-945c-6a0ce246f4e0/casa-blanca-01.jpg",
  },
  {
    id: "06",
    slug: "birkenstocks",
    name: "Birkenstocks",
    description: "Birkenstock originais.",
    image: "/produtos/birkenstocks/1.webp",
  },
  {
    id: "07",
    slug: "tenis",
    name: "Tênis",
    description: "Tênis importados.",
    image: "/produtos/tenis/1.webp",
  },
  {
    id: "08",
    slug: "bones",
    name: "Bonés",
    description: "Bonés importados.",
    image: "/produtos/bones/1.webp",
  },
  {
    id: "09",
    slug: "bolsas-femininas",
    name: "BOLSAS FEMININAS 🎀",
    description: "Bolsas femininas.",
    image: "/produtos/bolsas-femininas/1.webp",
  },
  {
    id: "10",
    slug: "feminino",
    name: "FEMININO 🎀",
    description: "Seleção feminina.",
    image: "/__l5e/assets-v1/5a464ff8-2da7-4c63-85ca-18e4028c24ad/feminino-01.jpg",
  },
  {
    id: "11",
    slug: "f1",
    name: "F1",
    description: "Linha F1.",
    image: "/produtos/f1/1.webp",
  },
  {
    id: "12",
    slug: "oculos-blue-blocker",
    name: "Óculos Blue Blocker",
    description: "Óculos Blue Blocker.",
    image: "/produtos/oculos-blue-blocker/1.webp",
  },
  {
    id: "13",
    slug: "acessorios",
    name: "Acessórios",
    description: "Acessórios diversos.",
    image: "/produtos/acessorios/1.webp",
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

/** Mesma regra do catálogo de produtos: path do Lovable (/__l5e/...) nunca resolve fora da infra deles. */
export function hasValidCategoryImage(category: Pick<Category, "image">) {
  return Boolean(category.image) && !category.image!.startsWith("/__l5e/");
}
