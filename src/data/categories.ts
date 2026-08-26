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
    "id": "01",
    "slug": "amiri",
    "name": "Amiri",
    "description": "Peças Amiri importadas.",
    "image": "/__l5e/assets-v1/f36a034e-3e9d-409a-a0b3-3e4c1e01fc5e/amiri-01.jpg"
  },
  {
    "id": "02",
    "slug": "off-white",
    "name": "Off White",
    "description": "Seleção Off-White.",
    "image": "/__l5e/assets-v1/5c4673d4-a4ce-491b-be08-35ff868e72a5/off-white-01.jpg"
  },
  {
    "id": "03",
    "slug": "polo-ralph-lauren",
    "name": "Polo Ralph Lauren",
    "description": "Clássicos Polo Ralph Lauren.",
    "image": "/produtos/polo-ralph-lauren/1.webp"
  },
  {
    "id": "04",
    "slug": "vilebrequin",
    "name": "VILEBREQUIN",
    "description": "Beachwear Vilebrequin.",
    "image": "/__l5e/assets-v1/ad4dd058-e58f-4890-b90b-ad401ccfa9c9/vilebrequin-01.jpg"
  },
  {
    "id": "05",
    "slug": "casa-blanca",
    "name": "Casa Blanca",
    "description": "Casablanca selecionada.",
    "image": "/__l5e/assets-v1/b52d8294-4a69-4569-945c-6a0ce246f4e0/casa-blanca-01.jpg"
  },
  {
    "id": "06",
    "slug": "birkenstocks",
    "name": "Birkenstocks",
    "description": "Birkenstock originais.",
    "image": "/produtos/birkenstocks/1.webp"
  },
  {
    "id": "07",
    "slug": "tenis",
    "name": "Tênis",
    "description": "Tênis importados.",
    "image": "/produtos/tenis/1.webp"
  },
  {
    "id": "08",
    "slug": "bones",
    "name": "Bonés",
    "description": "Bonés importados.",
    "image": "/__l5e/assets-v1/3e226647-b688-4548-9856-7ca7ada5fb39/bones-01.jpg"
  },
  {
    "id": "09",
    "slug": "bolsas-femininas",
    "name": "BOLSAS FEMININAS 🎀",
    "description": "Bolsas femininas.",
    "image": "/produtos/bolsas-femininas/1.webp"
  },
  {
    "id": "10",
    "slug": "feminino",
    "name": "FEMININO 🎀",
    "description": "Seleção feminina.",
    "image": "/__l5e/assets-v1/5a464ff8-2da7-4c63-85ca-18e4028c24ad/feminino-01.jpg"
  },
  {
    "id": "11",
    "slug": "f1",
    "name": "F1",
    "description": "Linha F1.",
    "image": "/produtos/f1/1.webp"
  },
  {
    "id": "12",
    "slug": "oculos-blue-blocker",
    "name": "Óculos Blue Blocker",
    "description": "Óculos Blue Blocker.",
    "image": "/__l5e/assets-v1/04cab72e-8c9a-44a4-b8fb-937589aedce7/oculos-blue-blocker-01.jpg"
  },
  {
    "id": "13",
    "slug": "acessorios",
    "name": "Acessórios",
    "description": "Acessórios diversos.",
    "image": "/__l5e/assets-v1/f7a98462-d340-42ab-a790-15565b27f2fc/acessorios-01.png"
  }
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
