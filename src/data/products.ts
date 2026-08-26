/**
 * CATÁLOGO — AG IMPORTS
 * Gerado a partir das pastas do Drive da loja (marcas e acessórios).
 * `price: null` exibe "CONSULTE" e direciona ao WhatsApp.
 */

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number | null;
  description?: string;
  images: string[];
  volume?: string;
  size?: string;
  sku?: string;
  available: boolean;
  featured: boolean;
  isNew: boolean;
  placeholder?: boolean;
};

export const products: Product[] = [
  {
    "id": "001",
    "slug": "amiri-01",
    "name": "Amiri — Peça 01",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/f36a034e-3e9d-409a-a0b3-3e4c1e01fc5e/amiri-01.jpg"
    ],
    "available": true,
    "featured": true,
    "isNew": true
  },
  {
    "id": "002",
    "slug": "amiri-02",
    "name": "Amiri — Peça 02",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/63f33faf-db24-4bee-84d6-b089fd4ba49b/amiri-02.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": true
  },
  {
    "id": "003",
    "slug": "amiri-03",
    "name": "Amiri — Peça 03",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/896fa376-b66e-4825-9ec6-10e914a77ade/amiri-03.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": true
  },
  {
    "id": "004",
    "slug": "amiri-04",
    "name": "Amiri — Peça 04",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/273b0331-a33f-4fa7-9ba2-f1fe123151b2/amiri-04.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "005",
    "slug": "amiri-05",
    "name": "Amiri — Peça 05",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/dbee25d2-b93c-4619-918c-e7a5efcd5834/amiri-05.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "006",
    "slug": "amiri-06",
    "name": "Amiri — Peça 06",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/18f3331e-5510-4e37-a1dd-8fe981decc1d/amiri-06.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "007",
    "slug": "amiri-07",
    "name": "Amiri — Peça 07",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/0f852d07-713e-4e6f-bda2-1332d243b18d/amiri-07.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "008",
    "slug": "amiri-08",
    "name": "Amiri — Peça 08",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/60bf4e93-a3da-4008-b38b-e51b4de951d3/amiri-08.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "009",
    "slug": "amiri-09",
    "name": "Amiri — Peça 09",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/72303bdb-3b04-47df-89fa-24b84051ffe0/amiri-09.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "010",
    "slug": "amiri-10",
    "name": "Amiri — Peça 10",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/d81b9850-71b7-47da-b934-f9509158fdef/amiri-10.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "011",
    "slug": "amiri-11",
    "name": "Amiri — Peça 11",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/712d8397-626e-42da-8b17-55de0d47431c/amiri-11.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "012",
    "slug": "amiri-12",
    "name": "Amiri — Peça 12",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/e764f0da-0cc3-4845-ba01-2347af20cc83/amiri-12.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "013",
    "slug": "amiri-13",
    "name": "Amiri — Peça 13",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/373f1bb4-64ef-4e75-bbcc-91adeabc8419/amiri-13.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "014",
    "slug": "amiri-14",
    "name": "Amiri — Peça 14",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/4d3c521f-33e8-4f5f-979a-f5764dd9e934/amiri-14.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "015",
    "slug": "amiri-15",
    "name": "Amiri — Peça 15",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/e3b35d16-a15b-48d1-83ed-14edcfb79478/amiri-15.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "016",
    "slug": "amiri-16",
    "name": "Amiri — Peça 16",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/c8c25d46-a119-4b68-a79f-0fd203509751/amiri-16.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "017",
    "slug": "amiri-17",
    "name": "Amiri — Peça 17",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/e2fd3cef-2a83-4570-9d65-6bde28e25dc0/amiri-17.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "018",
    "slug": "amiri-18",
    "name": "Amiri — Peça 18",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/62613dab-1b57-4ee1-8cb8-5eac6fc04fbc/amiri-18.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "019",
    "slug": "amiri-19",
    "name": "Amiri — Peça 19",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/e884b5e9-fbce-4f7d-aeff-f253fa937d18/amiri-19.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "020",
    "slug": "amiri-20",
    "name": "Amiri — Peça 20",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/e15a2058-af43-43b8-b51f-b09642c42028/amiri-20.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "021",
    "slug": "amiri-21",
    "name": "Amiri — Peça 21",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/8e3cf813-3392-417d-ae15-7475b0220602/amiri-21.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "022",
    "slug": "amiri-22",
    "name": "Amiri — Peça 22",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/63e5f5e1-f48b-4994-addb-0546489c8455/amiri-22.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "023",
    "slug": "amiri-23",
    "name": "Amiri — Peça 23",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/54c31885-b51f-4902-af31-ccbe80898828/amiri-23.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "024",
    "slug": "amiri-24",
    "name": "Amiri — Peça 24",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/0e440c80-742e-4e58-84f4-3c0a7217a231/amiri-24.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "025",
    "slug": "amiri-25",
    "name": "Amiri — Peça 25",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/7786db51-dcf0-4648-b9ab-b19bd051925a/amiri-25.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "026",
    "slug": "amiri-26",
    "name": "Amiri — Peça 26",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/cd3ea9cc-55fd-46fb-aedc-f31e3db0a14f/amiri-26.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "027",
    "slug": "amiri-27",
    "name": "Amiri — Peça 27",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/1effbe22-dca6-445d-bd9e-7b189b63bcae/amiri-27.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "028",
    "slug": "amiri-28",
    "name": "Amiri — Peça 28",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/0cc36f91-7871-4ab6-ba5d-c58d17abd3e9/amiri-28.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "029",
    "slug": "amiri-29",
    "name": "Amiri — Peça 29",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/99fe778c-d502-4fbd-9d5f-7329940d376d/amiri-29.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "030",
    "slug": "amiri-30",
    "name": "Amiri — Peça 30",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/d6e43932-53f5-465f-b2d8-6c101d625a9e/amiri-30.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "031",
    "slug": "amiri-31",
    "name": "Amiri — Peça 31",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/b0b4f535-d8cc-4bcd-87c9-99f7015ea886/amiri-31.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "032",
    "slug": "amiri-32",
    "name": "Amiri — Peça 32",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/ed63087b-6e28-41fb-80ba-64a6f4fbc937/amiri-32.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "033",
    "slug": "amiri-33",
    "name": "Amiri — Peça 33",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/9afd21cd-0fa0-40c4-840d-072c34afcbc2/amiri-33.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "034",
    "slug": "amiri-34",
    "name": "Amiri — Peça 34",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/bdd28fa6-56b6-4b4c-b620-b5e5ba6878f8/amiri-34.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "035",
    "slug": "amiri-35",
    "name": "Amiri — Peça 35",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/87515665-4860-4fdf-a242-46a3e672892c/amiri-35.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "036",
    "slug": "amiri-36",
    "name": "Amiri — Peça 36",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/27cb4b4d-27fc-4c5c-884b-ef6464e7c2f9/amiri-36.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "037",
    "slug": "amiri-37",
    "name": "Amiri — Peça 37",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/dab32d76-73f0-4fb4-b1d9-61f9086b7b6e/amiri-37.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "038",
    "slug": "amiri-38",
    "name": "Amiri — Peça 38",
    "brand": "Amiri",
    "category": "amiri",
    "price": null,
    "images": [
      "/__l5e/assets-v1/4b5c545f-f03f-4ebe-820f-ec10020a9f5f/amiri-38.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "039",
    "slug": "off-white-01",
    "name": "Off White — Peça 01",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/5c4673d4-a4ce-491b-be08-35ff868e72a5/off-white-01.jpg"
    ],
    "available": true,
    "featured": true,
    "isNew": true
  },
  {
    "id": "040",
    "slug": "off-white-02",
    "name": "Off White — Peça 02",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/37663709-1553-4063-86f2-4fa3c6aceabc/off-white-02.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": true
  },
  {
    "id": "041",
    "slug": "off-white-03",
    "name": "Off White — Peça 03",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/355efaca-a475-4e13-8126-9d8690078ea0/off-white-03.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": true
  },
  {
    "id": "042",
    "slug": "off-white-04",
    "name": "Off White — Peça 04",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/9fb1c8af-2c8a-4c6a-a204-16583044249a/off-white-04.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "043",
    "slug": "off-white-05",
    "name": "Off White — Peça 05",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/87255d6d-6590-4542-b43f-dda3a55b0e85/off-white-05.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "044",
    "slug": "off-white-06",
    "name": "Off White — Peça 06",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/f01f9670-e7d5-468d-abad-d880851bb379/off-white-06.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "045",
    "slug": "off-white-07",
    "name": "Off White — Peça 07",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/61cec713-b9b5-4c7c-bf23-c5fe0f0a0138/off-white-07.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "046",
    "slug": "off-white-08",
    "name": "Off White — Peça 08",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/883a531d-9e82-4ea3-a2b8-bac1365876be/off-white-08.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "047",
    "slug": "off-white-09",
    "name": "Off White — Peça 09",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/90bf8d42-b227-4391-a39a-05c3dcf8e1d6/off-white-09.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "048",
    "slug": "off-white-10",
    "name": "Off White — Peça 10",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/813ff44c-f1b6-44de-8de3-58ac898a77f8/off-white-10.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "049",
    "slug": "off-white-11",
    "name": "Off White — Peça 11",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/2593b186-312b-4417-9c71-f595b9c3b2d3/off-white-11.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "050",
    "slug": "off-white-12",
    "name": "Off White — Peça 12",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/301c3ae5-4c76-407c-bcca-8a2513b39865/off-white-12.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "051",
    "slug": "off-white-13",
    "name": "Off White — Peça 13",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/b22dfd0d-d38a-4786-91cc-5eb7e6f9b6ac/off-white-13.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "052",
    "slug": "off-white-14",
    "name": "Off White — Peça 14",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/353365ad-2340-477a-9eb3-79a57d295394/off-white-14.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "053",
    "slug": "off-white-15",
    "name": "Off White — Peça 15",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/5f600a2f-5f82-4abc-964c-b47c5e311fa1/off-white-15.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "054",
    "slug": "off-white-16",
    "name": "Off White — Peça 16",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/b00bcee6-e102-4844-8803-73ce368dc796/off-white-16.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "055",
    "slug": "off-white-17",
    "name": "Off White — Peça 17",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/fa9e6f9a-3bfe-42f9-84fd-6f5cfcb38b09/off-white-17.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "056",
    "slug": "off-white-18",
    "name": "Off White — Peça 18",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/3bda446b-8e56-4850-8e7b-b7c0632f83b7/off-white-18.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "057",
    "slug": "off-white-19",
    "name": "Off White — Peça 19",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/9dd5ef4c-758d-4320-996b-777cc77916b7/off-white-19.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "058",
    "slug": "off-white-20",
    "name": "Off White — Peça 20",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/4c64e1ec-2605-4bf6-a72f-ba0cfc7dfcf3/off-white-20.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "059",
    "slug": "off-white-21",
    "name": "Off White — Peça 21",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/8fb5acbe-7e51-4c8b-b0b2-f7db4ba10251/off-white-21.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "060",
    "slug": "off-white-22",
    "name": "Off White — Peça 22",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/cb34fcd6-0566-4190-8304-a367ea27883f/off-white-22.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "061",
    "slug": "off-white-23",
    "name": "Off White — Peça 23",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/8e23c22e-7e4a-4301-9f04-50b56ac28929/off-white-23.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "062",
    "slug": "off-white-24",
    "name": "Off White — Peça 24",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/b0506554-c9d0-4082-903e-601f5e26255a/off-white-24.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "063",
    "slug": "off-white-25",
    "name": "Off White — Peça 25",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/12b63dcc-365b-4e17-b53e-d2720459d390/off-white-25.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "064",
    "slug": "off-white-26",
    "name": "Off White — Peça 26",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/df2114da-7834-4f55-a885-fdbb64a1af11/off-white-26.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "065",
    "slug": "off-white-27",
    "name": "Off White — Peça 27",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/ea671454-f749-4a14-8924-cf3b5b662745/off-white-27.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "066",
    "slug": "off-white-28",
    "name": "Off White — Peça 28",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/0d8c370c-8841-4d94-9cc6-462a0d46718a/off-white-28.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "067",
    "slug": "off-white-29",
    "name": "Off White — Peça 29",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/c005eada-ae2a-4540-8cb1-12ee415400df/off-white-29.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "068",
    "slug": "off-white-30",
    "name": "Off White — Peça 30",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/a1539b0c-4b00-49e5-af94-ef9df7d4af7d/off-white-30.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "069",
    "slug": "off-white-31",
    "name": "Off White — Peça 31",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/36f91e5d-8ee4-4db7-86bf-06db3b8b4d74/off-white-31.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "070",
    "slug": "off-white-32",
    "name": "Off White — Peça 32",
    "brand": "Off White",
    "category": "off-white",
    "price": null,
    "images": [
      "/__l5e/assets-v1/a8d10c18-2412-4061-b487-5285c8bc993c/off-white-32.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "071",
    "slug": "polo-ralph-lauren-01",
    "name": "Polo Ralph Lauren — Peça 01",
    "brand": "Polo Ralph Lauren",
    "category": "polo-ralph-lauren",
    "price": null,
    "images": [
      "/__l5e/assets-v1/898b3697-8496-4022-9e30-efe15d7dff7e/polo-ralph-lauren-01.jpg"
    ],
    "available": true,
    "featured": true,
    "isNew": true
  },
  {
    "id": "072",
    "slug": "polo-ralph-lauren-02",
    "name": "Polo Ralph Lauren — Peça 02",
    "brand": "Polo Ralph Lauren",
    "category": "polo-ralph-lauren",
    "price": null,
    "images": [
      "/__l5e/assets-v1/cb130e6b-0e3f-42c4-b951-7e07b2fe3937/polo-ralph-lauren-02.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": true
  },
  {
    "id": "073",
    "slug": "polo-ralph-lauren-03",
    "name": "Polo Ralph Lauren — Peça 03",
    "brand": "Polo Ralph Lauren",
    "category": "polo-ralph-lauren",
    "price": null,
    "images": [
      "/__l5e/assets-v1/c820a81e-2433-4e3d-bf56-6616b0ba704c/polo-ralph-lauren-03.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": true
  },
  {
    "id": "074",
    "slug": "polo-ralph-lauren-04",
    "name": "Polo Ralph Lauren — Peça 04",
    "brand": "Polo Ralph Lauren",
    "category": "polo-ralph-lauren",
    "price": null,
    "images": [
      "/__l5e/assets-v1/4dfdcaed-5b25-4473-bc01-19f551bc1edc/polo-ralph-lauren-04.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "075",
    "slug": "polo-ralph-lauren-05",
    "name": "Polo Ralph Lauren — Peça 05",
    "brand": "Polo Ralph Lauren",
    "category": "polo-ralph-lauren",
    "price": null,
    "images": [
      "/__l5e/assets-v1/f4570018-0087-4c09-8541-aefbccaa1dba/polo-ralph-lauren-05.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "076",
    "slug": "polo-ralph-lauren-06",
    "name": "Polo Ralph Lauren — Peça 06",
    "brand": "Polo Ralph Lauren",
    "category": "polo-ralph-lauren",
    "price": null,
    "images": [
      "/__l5e/assets-v1/5bd303a8-0f1d-4553-b783-a133e326f30f/polo-ralph-lauren-06.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "077",
    "slug": "polo-ralph-lauren-07",
    "name": "Polo Ralph Lauren — Peça 07",
    "brand": "Polo Ralph Lauren",
    "category": "polo-ralph-lauren",
    "price": null,
    "images": [
      "/__l5e/assets-v1/6a69a3a2-bc14-4293-a099-74d8d97dc6d3/polo-ralph-lauren-07.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "078",
    "slug": "polo-ralph-lauren-08",
    "name": "Polo Ralph Lauren — Peça 08",
    "brand": "Polo Ralph Lauren",
    "category": "polo-ralph-lauren",
    "price": null,
    "images": [
      "/__l5e/assets-v1/fcd26ae9-7ad0-40eb-8ff1-69832b18965f/polo-ralph-lauren-08.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "079",
    "slug": "polo-ralph-lauren-09",
    "name": "Polo Ralph Lauren — Peça 09",
    "brand": "Polo Ralph Lauren",
    "category": "polo-ralph-lauren",
    "price": null,
    "images": [
      "/__l5e/assets-v1/c9af0560-37df-4f15-8a3c-b5285820dddd/polo-ralph-lauren-09.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "080",
    "slug": "polo-ralph-lauren-10",
    "name": "Polo Ralph Lauren — Peça 10",
    "brand": "Polo Ralph Lauren",
    "category": "polo-ralph-lauren",
    "price": null,
    "images": [
      "/__l5e/assets-v1/a8c68ce8-f6d5-4cbf-bf9b-3e68cbe0c0d4/polo-ralph-lauren-10.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "081",
    "slug": "polo-ralph-lauren-11",
    "name": "Polo Ralph Lauren — Peça 11",
    "brand": "Polo Ralph Lauren",
    "category": "polo-ralph-lauren",
    "price": null,
    "images": [
      "/__l5e/assets-v1/473d8432-8730-47c3-bc3d-a122ff8a9d5d/polo-ralph-lauren-11.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "082",
    "slug": "polo-ralph-lauren-12",
    "name": "Polo Ralph Lauren — Peça 12",
    "brand": "Polo Ralph Lauren",
    "category": "polo-ralph-lauren",
    "price": null,
    "images": [
      "/__l5e/assets-v1/d1cb21a9-f3ce-4ec5-8f78-def4a5c89be9/polo-ralph-lauren-12.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "083",
    "slug": "polo-ralph-lauren-13",
    "name": "Polo Ralph Lauren — Peça 13",
    "brand": "Polo Ralph Lauren",
    "category": "polo-ralph-lauren",
    "price": null,
    "images": [
      "/__l5e/assets-v1/0eeef665-82a0-4b41-b3a0-c76228b4bfa1/polo-ralph-lauren-13.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "084",
    "slug": "polo-ralph-lauren-14",
    "name": "Polo Ralph Lauren — Peça 14",
    "brand": "Polo Ralph Lauren",
    "category": "polo-ralph-lauren",
    "price": null,
    "images": [
      "/__l5e/assets-v1/84c260ee-b108-45d6-b6a9-bd8f2f739b0d/polo-ralph-lauren-14.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "085",
    "slug": "vilebrequin-01",
    "name": "VILEBREQUIN — Peça 01",
    "brand": "VILEBREQUIN",
    "category": "vilebrequin",
    "price": null,
    "images": [
      "/__l5e/assets-v1/ad4dd058-e58f-4890-b90b-ad401ccfa9c9/vilebrequin-01.jpg"
    ],
    "available": true,
    "featured": true,
    "isNew": true
  },
  {
    "id": "086",
    "slug": "vilebrequin-02",
    "name": "VILEBREQUIN — Peça 02",
    "brand": "VILEBREQUIN",
    "category": "vilebrequin",
    "price": null,
    "images": [
      "/__l5e/assets-v1/e4fd8136-88f0-4f00-ad2c-403323157f5c/vilebrequin-02.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": true
  },
  {
    "id": "087",
    "slug": "vilebrequin-03",
    "name": "VILEBREQUIN — Peça 03",
    "brand": "VILEBREQUIN",
    "category": "vilebrequin",
    "price": null,
    "images": [
      "/__l5e/assets-v1/35abb0ee-38b3-4302-bad6-c1f0e4c8311a/vilebrequin-03.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": true
  },
  {
    "id": "088",
    "slug": "vilebrequin-04",
    "name": "VILEBREQUIN — Peça 04",
    "brand": "VILEBREQUIN",
    "category": "vilebrequin",
    "price": null,
    "images": [
      "/__l5e/assets-v1/a50747a0-6a77-4eac-8e5f-665a2569aba6/vilebrequin-04.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "089",
    "slug": "vilebrequin-05",
    "name": "VILEBREQUIN — Peça 05",
    "brand": "VILEBREQUIN",
    "category": "vilebrequin",
    "price": null,
    "images": [
      "/__l5e/assets-v1/f902b2e5-96df-44ad-997d-620c2a66093e/vilebrequin-05.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "090",
    "slug": "vilebrequin-06",
    "name": "VILEBREQUIN — Peça 06",
    "brand": "VILEBREQUIN",
    "category": "vilebrequin",
    "price": null,
    "images": [
      "/__l5e/assets-v1/37d00e4b-d8d0-4879-ad7a-5d57ac6f1c6b/vilebrequin-06.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "091",
    "slug": "vilebrequin-07",
    "name": "VILEBREQUIN — Peça 07",
    "brand": "VILEBREQUIN",
    "category": "vilebrequin",
    "price": null,
    "images": [
      "/__l5e/assets-v1/7d13d071-be5a-4c8a-99d9-f9a50add1612/vilebrequin-07.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "092",
    "slug": "vilebrequin-08",
    "name": "VILEBREQUIN — Peça 08",
    "brand": "VILEBREQUIN",
    "category": "vilebrequin",
    "price": null,
    "images": [
      "/__l5e/assets-v1/db6f1dc4-fb3b-454f-bdcd-3d515d2e82e5/vilebrequin-08.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "093",
    "slug": "vilebrequin-09",
    "name": "VILEBREQUIN — Peça 09",
    "brand": "VILEBREQUIN",
    "category": "vilebrequin",
    "price": null,
    "images": [
      "/__l5e/assets-v1/9c127539-e7d5-4438-8107-6d1ede5812b8/vilebrequin-09.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "094",
    "slug": "vilebrequin-10",
    "name": "VILEBREQUIN — Peça 10",
    "brand": "VILEBREQUIN",
    "category": "vilebrequin",
    "price": null,
    "images": [
      "/__l5e/assets-v1/de73c91e-5078-4838-8cf9-40bfadb84770/vilebrequin-10.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "095",
    "slug": "vilebrequin-11",
    "name": "VILEBREQUIN — Peça 11",
    "brand": "VILEBREQUIN",
    "category": "vilebrequin",
    "price": null,
    "images": [
      "/__l5e/assets-v1/1cd31dcd-6bf4-4733-a90b-8f5ee2bcb6eb/vilebrequin-11.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "096",
    "slug": "vilebrequin-12",
    "name": "VILEBREQUIN — Peça 12",
    "brand": "VILEBREQUIN",
    "category": "vilebrequin",
    "price": null,
    "images": [
      "/__l5e/assets-v1/a55fba59-019a-4df2-828c-a84eb42473b8/vilebrequin-12.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "097",
    "slug": "casa-blanca-01",
    "name": "Casa Blanca — Peça 01",
    "brand": "Casa Blanca",
    "category": "casa-blanca",
    "price": null,
    "images": [
      "/__l5e/assets-v1/b52d8294-4a69-4569-945c-6a0ce246f4e0/casa-blanca-01.jpg"
    ],
    "available": true,
    "featured": true,
    "isNew": false
  },
  {
    "id": "098",
    "slug": "casa-blanca-02",
    "name": "Casa Blanca — Peça 02",
    "brand": "Casa Blanca",
    "category": "casa-blanca",
    "price": null,
    "images": [
      "/__l5e/assets-v1/b7dd8801-28b5-426a-985f-b3fc840474cd/casa-blanca-02.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "099",
    "slug": "casa-blanca-03",
    "name": "Casa Blanca — Peça 03",
    "brand": "Casa Blanca",
    "category": "casa-blanca",
    "price": null,
    "images": [
      "/__l5e/assets-v1/dff53a73-95cd-4cce-a0c1-767bae2fdebc/casa-blanca-03.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "100",
    "slug": "casa-blanca-04",
    "name": "Casa Blanca — Peça 04",
    "brand": "Casa Blanca",
    "category": "casa-blanca",
    "price": null,
    "images": [
      "/__l5e/assets-v1/6ff7af23-321b-48d6-91af-4d7a714f6482/casa-blanca-04.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "101",
    "slug": "casa-blanca-05",
    "name": "Casa Blanca — Peça 05",
    "brand": "Casa Blanca",
    "category": "casa-blanca",
    "price": null,
    "images": [
      "/__l5e/assets-v1/f9892a21-bd35-4f62-b0ee-b881e1f66686/casa-blanca-05.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "102",
    "slug": "casa-blanca-06",
    "name": "Casa Blanca — Peça 06",
    "brand": "Casa Blanca",
    "category": "casa-blanca",
    "price": null,
    "images": [
      "/__l5e/assets-v1/5be7a4e8-6bfa-4924-9386-1cfee8de6f2d/casa-blanca-06.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "103",
    "slug": "casa-blanca-07",
    "name": "Casa Blanca — Peça 07",
    "brand": "Casa Blanca",
    "category": "casa-blanca",
    "price": null,
    "images": [
      "/__l5e/assets-v1/3766491a-bf22-4062-8ee1-ddafc8b45bed/casa-blanca-07.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "104",
    "slug": "casa-blanca-08",
    "name": "Casa Blanca — Peça 08",
    "brand": "Casa Blanca",
    "category": "casa-blanca",
    "price": null,
    "images": [
      "/__l5e/assets-v1/bdec7d32-091a-4969-8378-d30b1d25cda0/casa-blanca-08.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "105",
    "slug": "casa-blanca-09",
    "name": "Casa Blanca — Peça 09",
    "brand": "Casa Blanca",
    "category": "casa-blanca",
    "price": null,
    "images": [
      "/__l5e/assets-v1/2474b186-b11b-49a7-ad3f-eab751cf5e71/casa-blanca-09.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "106",
    "slug": "casa-blanca-10",
    "name": "Casa Blanca — Peça 10",
    "brand": "Casa Blanca",
    "category": "casa-blanca",
    "price": null,
    "images": [
      "/__l5e/assets-v1/6331c827-bd86-47fd-8c68-b850c49ada5b/casa-blanca-10.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "107",
    "slug": "birkenstocks-01",
    "name": "Birkenstocks — Peça 01",
    "brand": "Birkenstocks",
    "category": "birkenstocks",
    "price": null,
    "images": [
      "/__l5e/assets-v1/d4f3d086-9cc6-4e4b-8e37-880f76502c01/birkenstocks-01.png"
    ],
    "available": true,
    "featured": true,
    "isNew": false
  },
  {
    "id": "108",
    "slug": "birkenstocks-02",
    "name": "Birkenstocks — Peça 02",
    "brand": "Birkenstocks",
    "category": "birkenstocks",
    "price": null,
    "images": [
      "/__l5e/assets-v1/14b8f7a1-fe53-4c85-967b-90892e2a3232/birkenstocks-02.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "109",
    "slug": "birkenstocks-03",
    "name": "Birkenstocks — Peça 03",
    "brand": "Birkenstocks",
    "category": "birkenstocks",
    "price": null,
    "images": [
      "/__l5e/assets-v1/be05508c-ec25-483d-8569-29d301419e4d/birkenstocks-03.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "110",
    "slug": "birkenstocks-04",
    "name": "Birkenstocks — Peça 04",
    "brand": "Birkenstocks",
    "category": "birkenstocks",
    "price": null,
    "images": [
      "/__l5e/assets-v1/e873443f-f784-4232-a507-f7990182fd32/birkenstocks-04.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "111",
    "slug": "birkenstocks-05",
    "name": "Birkenstocks — Peça 05",
    "brand": "Birkenstocks",
    "category": "birkenstocks",
    "price": null,
    "images": [
      "/__l5e/assets-v1/d4a7b284-aaa1-4d23-9bfc-9d3fe02ed8d8/birkenstocks-05.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "112",
    "slug": "birkenstocks-06",
    "name": "Birkenstocks — Peça 06",
    "brand": "Birkenstocks",
    "category": "birkenstocks",
    "price": null,
    "images": [
      "/__l5e/assets-v1/97491686-3d46-497f-90cd-3864e06d5f14/birkenstocks-06.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "113",
    "slug": "birkenstocks-07",
    "name": "Birkenstocks — Peça 07",
    "brand": "Birkenstocks",
    "category": "birkenstocks",
    "price": null,
    "images": [
      "/__l5e/assets-v1/e138544b-73fd-4ee0-803b-230e05afe126/birkenstocks-07.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "114",
    "slug": "birkenstocks-08",
    "name": "Birkenstocks — Peça 08",
    "brand": "Birkenstocks",
    "category": "birkenstocks",
    "price": null,
    "images": [
      "/__l5e/assets-v1/1528cb31-47f4-452c-bf0d-c3e846093c13/birkenstocks-08.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "115",
    "slug": "birkenstocks-09",
    "name": "Birkenstocks — Peça 09",
    "brand": "Birkenstocks",
    "category": "birkenstocks",
    "price": null,
    "images": [
      "/__l5e/assets-v1/508b0980-9caa-474e-b176-0f923d11f431/birkenstocks-09.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "116",
    "slug": "birkenstocks-10",
    "name": "Birkenstocks — Peça 10",
    "brand": "Birkenstocks",
    "category": "birkenstocks",
    "price": null,
    "images": [
      "/__l5e/assets-v1/5d30149c-b222-4056-a0eb-d94e57f6ee4f/birkenstocks-10.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "117",
    "slug": "birkenstocks-11",
    "name": "Birkenstocks — Peça 11",
    "brand": "Birkenstocks",
    "category": "birkenstocks",
    "price": null,
    "images": [
      "/__l5e/assets-v1/0dd2168b-a5de-4e17-864b-fe83b1bae24a/birkenstocks-11.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "118",
    "slug": "birkenstocks-12",
    "name": "Birkenstocks — Peça 12",
    "brand": "Birkenstocks",
    "category": "birkenstocks",
    "price": null,
    "images": [
      "/__l5e/assets-v1/5f0a9927-8998-4c46-952f-160726c97d94/birkenstocks-12.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "119",
    "slug": "birkenstocks-13",
    "name": "Birkenstocks — Peça 13",
    "brand": "Birkenstocks",
    "category": "birkenstocks",
    "price": null,
    "images": [
      "/__l5e/assets-v1/8e934855-a09c-44a5-9734-9b9b4670f821/birkenstocks-13.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "120",
    "slug": "birkenstocks-14",
    "name": "Birkenstocks — Peça 14",
    "brand": "Birkenstocks",
    "category": "birkenstocks",
    "price": null,
    "images": [
      "/__l5e/assets-v1/38a686c0-6874-4bf6-aadb-fe6e2539f78b/birkenstocks-14.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "121",
    "slug": "birkenstocks-15",
    "name": "Birkenstocks — Peça 15",
    "brand": "Birkenstocks",
    "category": "birkenstocks",
    "price": null,
    "images": [
      "/__l5e/assets-v1/30a2588e-db0e-474e-98b1-e2c94ff45782/birkenstocks-15.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "122",
    "slug": "birkenstocks-16",
    "name": "Birkenstocks — Peça 16",
    "brand": "Birkenstocks",
    "category": "birkenstocks",
    "price": null,
    "images": [
      "/__l5e/assets-v1/00254eed-6dc8-4877-bd2e-2133a298ae09/birkenstocks-16.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "123",
    "slug": "birkenstocks-17",
    "name": "Birkenstocks — Peça 17",
    "brand": "Birkenstocks",
    "category": "birkenstocks",
    "price": null,
    "images": [
      "/__l5e/assets-v1/2527d4c1-1610-4fac-8ea3-bd2916c2597c/birkenstocks-17.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "124",
    "slug": "tenis-01",
    "name": "Tênis — Peça 01",
    "brand": "Tênis",
    "category": "tenis",
    "price": null,
    "images": [
      "/__l5e/assets-v1/313ec332-3276-435a-b109-eb7636f0231c/tenis-01.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "125",
    "slug": "tenis-02",
    "name": "Tênis — Peça 02",
    "brand": "Tênis",
    "category": "tenis",
    "price": null,
    "images": [
      "/__l5e/assets-v1/23cd5efd-4804-4db1-893f-250e813843fc/tenis-02.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "126",
    "slug": "tenis-03",
    "name": "Tênis — Peça 03",
    "brand": "Tênis",
    "category": "tenis",
    "price": null,
    "images": [
      "/__l5e/assets-v1/74d19159-a1a2-41ae-9a97-d00b46b476be/tenis-03.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "127",
    "slug": "tenis-04",
    "name": "Tênis — Peça 04",
    "brand": "Tênis",
    "category": "tenis",
    "price": null,
    "images": [
      "/__l5e/assets-v1/2f40f0fd-17ea-4c02-92dc-64a5c0f75ada/tenis-04.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "128",
    "slug": "tenis-05",
    "name": "Tênis — Peça 05",
    "brand": "Tênis",
    "category": "tenis",
    "price": null,
    "images": [
      "/__l5e/assets-v1/451d184d-ee50-4b62-a2b4-89098d369ca4/tenis-05.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "129",
    "slug": "tenis-06",
    "name": "Tênis — Peça 06",
    "brand": "Tênis",
    "category": "tenis",
    "price": null,
    "images": [
      "/__l5e/assets-v1/577c1538-680e-4faa-9a73-e984b3f0e6f8/tenis-06.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "130",
    "slug": "tenis-07",
    "name": "Tênis — Peça 07",
    "brand": "Tênis",
    "category": "tenis",
    "price": null,
    "images": [
      "/__l5e/assets-v1/b9807c99-affe-4637-8b9b-ddc0741e7334/tenis-07.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "131",
    "slug": "tenis-08",
    "name": "Tênis — Peça 08",
    "brand": "Tênis",
    "category": "tenis",
    "price": null,
    "images": [
      "/__l5e/assets-v1/910f882b-898e-4d02-8b55-8187969d407e/tenis-08.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "132",
    "slug": "tenis-09",
    "name": "Tênis — Peça 09",
    "brand": "Tênis",
    "category": "tenis",
    "price": null,
    "images": [
      "/__l5e/assets-v1/92f632b8-0ba1-4406-bca3-42615cf01122/tenis-09.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "133",
    "slug": "tenis-10",
    "name": "Tênis — Peça 10",
    "brand": "Tênis",
    "category": "tenis",
    "price": null,
    "images": [
      "/__l5e/assets-v1/adc5600a-7530-486e-88d2-81a2d014d4f4/tenis-10.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "134",
    "slug": "tenis-11",
    "name": "Tênis — Peça 11",
    "brand": "Tênis",
    "category": "tenis",
    "price": null,
    "images": [
      "/__l5e/assets-v1/dcaec28e-ef98-4a17-b96f-29fe8ec9f545/tenis-11.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "135",
    "slug": "tenis-12",
    "name": "Tênis — Peça 12",
    "brand": "Tênis",
    "category": "tenis",
    "price": null,
    "images": [
      "/__l5e/assets-v1/bbc7e4ac-4975-4ad6-aca0-0cf6674a0646/tenis-12.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "136",
    "slug": "bones-01",
    "name": "Bonés — Peça 01",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/3e226647-b688-4548-9856-7ca7ada5fb39/bones-01.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "137",
    "slug": "bones-02",
    "name": "Bonés — Peça 02",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/a48eb54b-7d14-41a4-bf5b-ee3f33224498/bones-02.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "138",
    "slug": "bones-03",
    "name": "Bonés — Peça 03",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/fcc76057-c7dc-4fe2-900c-aa505026793b/bones-03.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "139",
    "slug": "bones-04",
    "name": "Bonés — Peça 04",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/0df9926e-5a1a-46e4-8a03-d230707f7cf1/bones-04.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "140",
    "slug": "bones-05",
    "name": "Bonés — Peça 05",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/aa8d16dd-546f-4481-8f4d-41c6f40388ba/bones-05.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "141",
    "slug": "bones-06",
    "name": "Bonés — Peça 06",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/b24b0b03-8af7-4c56-afc2-28c1ba2468f3/bones-06.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "142",
    "slug": "bones-07",
    "name": "Bonés — Peça 07",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/824d750e-1e08-4e61-9392-bd9df818afb1/bones-07.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "143",
    "slug": "bones-08",
    "name": "Bonés — Peça 08",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/b59f526c-1e71-4847-9d62-d684d8f8cc5c/bones-08.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "144",
    "slug": "bones-09",
    "name": "Bonés — Peça 09",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/12077da8-eef0-470e-bfd1-197e628fc597/bones-09.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "145",
    "slug": "bones-10",
    "name": "Bonés — Peça 10",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/dfdf622c-5f4a-4563-89be-2ca7aa14af5b/bones-10.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "146",
    "slug": "bones-11",
    "name": "Bonés — Peça 11",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/b52bf692-8ca7-4744-8aac-c39dddd586bd/bones-11.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "147",
    "slug": "bones-12",
    "name": "Bonés — Peça 12",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/27b321e9-66b4-42c9-afca-47f773003ed4/bones-12.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "148",
    "slug": "bones-13",
    "name": "Bonés — Peça 13",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/e189e491-d1cf-4048-80cf-b2396df08da7/bones-13.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "149",
    "slug": "bones-14",
    "name": "Bonés — Peça 14",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/a623a7aa-2949-47a3-b32b-f0bef4ca1cf0/bones-14.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "150",
    "slug": "bones-15",
    "name": "Bonés — Peça 15",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/bc04b586-c327-46eb-89f1-33ba096d9eb4/bones-15.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "151",
    "slug": "bones-16",
    "name": "Bonés — Peça 16",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/5deb2be1-b316-455f-a1ed-76a19221c803/bones-16.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "152",
    "slug": "bones-17",
    "name": "Bonés — Peça 17",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/fc39a45c-1051-4520-bd97-c7d358968a0f/bones-17.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "153",
    "slug": "bones-18",
    "name": "Bonés — Peça 18",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/4824154f-9ae0-41bf-b68c-38ca783ba2dc/bones-18.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "154",
    "slug": "bones-19",
    "name": "Bonés — Peça 19",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/f3fc4b2f-832f-4112-896f-952ebce881b8/bones-19.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "155",
    "slug": "bones-20",
    "name": "Bonés — Peça 20",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/9cc4c5fc-a017-494c-a078-5737369bcc9a/bones-20.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "156",
    "slug": "bones-21",
    "name": "Bonés — Peça 21",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/567e4b0b-cbe6-404b-b07e-0ab0e77998ae/bones-21.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "157",
    "slug": "bones-22",
    "name": "Bonés — Peça 22",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/e754257e-962f-4e3a-94f1-d228429705c9/bones-22.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "158",
    "slug": "bones-23",
    "name": "Bonés — Peça 23",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/a94b3941-fd25-4813-815b-53967266f796/bones-23.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "159",
    "slug": "bones-24",
    "name": "Bonés — Peça 24",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/eb12dda3-e5dc-4236-81d0-e464191da4e1/bones-24.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "160",
    "slug": "bones-25",
    "name": "Bonés — Peça 25",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/d1804afe-dd1a-4c1a-a1ed-1c074b8e6245/bones-25.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "161",
    "slug": "bones-26",
    "name": "Bonés — Peça 26",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/b9c3156a-c69f-4909-a252-f86a01341428/bones-26.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "162",
    "slug": "bones-27",
    "name": "Bonés — Peça 27",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/52b7641a-2425-4932-9a2e-99b4afa5b837/bones-27.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "163",
    "slug": "bones-28",
    "name": "Bonés — Peça 28",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/87c2b503-472c-4db5-a72b-04295c63e0a9/bones-28.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "164",
    "slug": "bones-29",
    "name": "Bonés — Peça 29",
    "brand": "Bonés",
    "category": "bones",
    "price": null,
    "images": [
      "/__l5e/assets-v1/6654f250-0c16-4cae-9d07-48aa0be0f036/bones-29.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "165",
    "slug": "bolsas-femininas-01",
    "name": "BOLSAS FEMININAS 🎀 — Peça 01",
    "brand": "BOLSAS FEMININAS 🎀",
    "category": "bolsas-femininas",
    "price": null,
    "images": [
      "/__l5e/assets-v1/b532a6de-bd0a-45cb-8693-9cc3d4cd3690/bolsas-femininas-01.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "166",
    "slug": "bolsas-femininas-02",
    "name": "BOLSAS FEMININAS 🎀 — Peça 02",
    "brand": "BOLSAS FEMININAS 🎀",
    "category": "bolsas-femininas",
    "price": null,
    "images": [
      "/__l5e/assets-v1/ba4c4bd4-7f69-46ae-b732-9e3f0c2c95ba/bolsas-femininas-02.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "167",
    "slug": "bolsas-femininas-03",
    "name": "BOLSAS FEMININAS 🎀 — Peça 03",
    "brand": "BOLSAS FEMININAS 🎀",
    "category": "bolsas-femininas",
    "price": null,
    "images": [
      "/__l5e/assets-v1/11e7cc29-dbe3-4d44-afdf-f2a095ab9ca9/bolsas-femininas-03.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "168",
    "slug": "bolsas-femininas-04",
    "name": "BOLSAS FEMININAS 🎀 — Peça 04",
    "brand": "BOLSAS FEMININAS 🎀",
    "category": "bolsas-femininas",
    "price": null,
    "images": [
      "/__l5e/assets-v1/5e27e636-19d6-48e3-83ba-2e96c9fb49e9/bolsas-femininas-04.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "169",
    "slug": "bolsas-femininas-05",
    "name": "BOLSAS FEMININAS 🎀 — Peça 05",
    "brand": "BOLSAS FEMININAS 🎀",
    "category": "bolsas-femininas",
    "price": null,
    "images": [
      "/__l5e/assets-v1/23ad744b-f788-4e18-abdf-d47872bdad92/bolsas-femininas-05.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "170",
    "slug": "bolsas-femininas-06",
    "name": "BOLSAS FEMININAS 🎀 — Peça 06",
    "brand": "BOLSAS FEMININAS 🎀",
    "category": "bolsas-femininas",
    "price": null,
    "images": [
      "/__l5e/assets-v1/47697c5b-8294-4912-bd79-00b575f7ccfa/bolsas-femininas-06.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "171",
    "slug": "bolsas-femininas-07",
    "name": "BOLSAS FEMININAS 🎀 — Peça 07",
    "brand": "BOLSAS FEMININAS 🎀",
    "category": "bolsas-femininas",
    "price": null,
    "images": [
      "/__l5e/assets-v1/96c61016-4674-49c7-8519-5cf24039bc9a/bolsas-femininas-07.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "172",
    "slug": "bolsas-femininas-08",
    "name": "BOLSAS FEMININAS 🎀 — Peça 08",
    "brand": "BOLSAS FEMININAS 🎀",
    "category": "bolsas-femininas",
    "price": null,
    "images": [
      "/__l5e/assets-v1/0d8ddfeb-e572-43e6-badd-8354280716c1/bolsas-femininas-08.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "173",
    "slug": "bolsas-femininas-09",
    "name": "BOLSAS FEMININAS 🎀 — Peça 09",
    "brand": "BOLSAS FEMININAS 🎀",
    "category": "bolsas-femininas",
    "price": null,
    "images": [
      "/__l5e/assets-v1/c7782273-fc9b-43bd-8385-1bd0e9f2481b/bolsas-femininas-09.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "174",
    "slug": "bolsas-femininas-10",
    "name": "BOLSAS FEMININAS 🎀 — Peça 10",
    "brand": "BOLSAS FEMININAS 🎀",
    "category": "bolsas-femininas",
    "price": null,
    "images": [
      "/__l5e/assets-v1/d0e24618-32fb-4b72-be29-a7ea18bd45d6/bolsas-femininas-10.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "175",
    "slug": "bolsas-femininas-11",
    "name": "BOLSAS FEMININAS 🎀 — Peça 11",
    "brand": "BOLSAS FEMININAS 🎀",
    "category": "bolsas-femininas",
    "price": null,
    "images": [
      "/__l5e/assets-v1/882854af-d741-44ad-9c06-50df1c1a8d07/bolsas-femininas-11.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "176",
    "slug": "bolsas-femininas-12",
    "name": "BOLSAS FEMININAS 🎀 — Peça 12",
    "brand": "BOLSAS FEMININAS 🎀",
    "category": "bolsas-femininas",
    "price": null,
    "images": [
      "/__l5e/assets-v1/67c69870-6d83-42c4-b79b-04c5eb70df2e/bolsas-femininas-12.webp"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "177",
    "slug": "feminino-01",
    "name": "FEMININO 🎀 — Peça 01",
    "brand": "FEMININO 🎀",
    "category": "feminino",
    "price": null,
    "images": [
      "/__l5e/assets-v1/5a464ff8-2da7-4c63-85ca-18e4028c24ad/feminino-01.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "178",
    "slug": "feminino-02",
    "name": "FEMININO 🎀 — Peça 02",
    "brand": "FEMININO 🎀",
    "category": "feminino",
    "price": null,
    "images": [
      "/__l5e/assets-v1/511891fd-1daa-40fa-8b17-26b84625bb34/feminino-02.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "179",
    "slug": "feminino-03",
    "name": "FEMININO 🎀 — Peça 03",
    "brand": "FEMININO 🎀",
    "category": "feminino",
    "price": null,
    "images": [
      "/__l5e/assets-v1/64106d08-d398-40ff-8874-6cb4084261d5/feminino-03.webp"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "180",
    "slug": "feminino-04",
    "name": "FEMININO 🎀 — Peça 04",
    "brand": "FEMININO 🎀",
    "category": "feminino",
    "price": null,
    "images": [
      "/__l5e/assets-v1/99236410-2cb8-4a7b-976f-35d44c61a46d/feminino-04.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "181",
    "slug": "feminino-05",
    "name": "FEMININO 🎀 — Peça 05",
    "brand": "FEMININO 🎀",
    "category": "feminino",
    "price": null,
    "images": [
      "/__l5e/assets-v1/a4a39f6a-3548-40eb-9f1f-c4dbc31a1db0/feminino-05.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "182",
    "slug": "feminino-06",
    "name": "FEMININO 🎀 — Peça 06",
    "brand": "FEMININO 🎀",
    "category": "feminino",
    "price": null,
    "images": [
      "/__l5e/assets-v1/9d43dc98-673b-4ccb-9744-2eb3f9f3b859/feminino-06.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "183",
    "slug": "feminino-07",
    "name": "FEMININO 🎀 — Peça 07",
    "brand": "FEMININO 🎀",
    "category": "feminino",
    "price": null,
    "images": [
      "/__l5e/assets-v1/9fde883c-abe3-4839-a82e-2ee4de6b8689/feminino-07.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "184",
    "slug": "feminino-08",
    "name": "FEMININO 🎀 — Peça 08",
    "brand": "FEMININO 🎀",
    "category": "feminino",
    "price": null,
    "images": [
      "/__l5e/assets-v1/6b0488a6-c3e9-4438-acc5-5094d921e92d/feminino-08.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "185",
    "slug": "feminino-09",
    "name": "FEMININO 🎀 — Peça 09",
    "brand": "FEMININO 🎀",
    "category": "feminino",
    "price": null,
    "images": [
      "/__l5e/assets-v1/025f2c87-7f1c-44de-8d78-58890a2f7042/feminino-09.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "186",
    "slug": "feminino-10",
    "name": "FEMININO 🎀 — Peça 10",
    "brand": "FEMININO 🎀",
    "category": "feminino",
    "price": null,
    "images": [
      "/__l5e/assets-v1/e473e879-2e3e-4a3e-8d46-e5ae346cca18/feminino-10.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "187",
    "slug": "feminino-11",
    "name": "FEMININO 🎀 — Peça 11",
    "brand": "FEMININO 🎀",
    "category": "feminino",
    "price": null,
    "images": [
      "/__l5e/assets-v1/6ff0f616-38b6-485d-af96-ae331742bd8c/feminino-11.webp"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "188",
    "slug": "feminino-12",
    "name": "FEMININO 🎀 — Peça 12",
    "brand": "FEMININO 🎀",
    "category": "feminino",
    "price": null,
    "images": [
      "/__l5e/assets-v1/87af1934-b1a5-4a7b-8f54-9eafc2856c67/feminino-12.webp"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "189",
    "slug": "feminino-13",
    "name": "FEMININO 🎀 — Peça 13",
    "brand": "FEMININO 🎀",
    "category": "feminino",
    "price": null,
    "images": [
      "/__l5e/assets-v1/903f2fa9-6bac-462e-8afe-55bdd42126f2/feminino-13.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "190",
    "slug": "feminino-14",
    "name": "FEMININO 🎀 — Peça 14",
    "brand": "FEMININO 🎀",
    "category": "feminino",
    "price": null,
    "images": [
      "/__l5e/assets-v1/574f6e13-50e2-42f8-b08c-0c97a3ea9681/feminino-14.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "191",
    "slug": "feminino-15",
    "name": "FEMININO 🎀 — Peça 15",
    "brand": "FEMININO 🎀",
    "category": "feminino",
    "price": null,
    "images": [
      "/__l5e/assets-v1/eb834b06-96da-428e-9fb1-a3dc3f2cdb59/feminino-15.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "192",
    "slug": "feminino-16",
    "name": "FEMININO 🎀 — Peça 16",
    "brand": "FEMININO 🎀",
    "category": "feminino",
    "price": null,
    "images": [
      "/__l5e/assets-v1/b202c8d4-d686-4075-bfab-c05d22b43688/feminino-16.webp"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "193",
    "slug": "feminino-17",
    "name": "FEMININO 🎀 — Peça 17",
    "brand": "FEMININO 🎀",
    "category": "feminino",
    "price": null,
    "images": [
      "/__l5e/assets-v1/e823c8ed-4387-460f-b22a-4769cf3c511a/feminino-17.webp"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "194",
    "slug": "feminino-18",
    "name": "FEMININO 🎀 — Peça 18",
    "brand": "FEMININO 🎀",
    "category": "feminino",
    "price": null,
    "images": [
      "/__l5e/assets-v1/8fef666d-55bb-40fc-8f59-e4593c432f21/feminino-18.webp"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "195",
    "slug": "f1-01",
    "name": "F1 — Peça 01",
    "brand": "F1",
    "category": "f1",
    "price": null,
    "images": [
      "/__l5e/assets-v1/5314f40f-332f-446b-a893-366ffb8e5d6b/f1-01.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "196",
    "slug": "f1-02",
    "name": "F1 — Peça 02",
    "brand": "F1",
    "category": "f1",
    "price": null,
    "images": [
      "/__l5e/assets-v1/4bcc1500-234b-47f5-89ab-debe91984c51/f1-02.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "197",
    "slug": "f1-03",
    "name": "F1 — Peça 03",
    "brand": "F1",
    "category": "f1",
    "price": null,
    "images": [
      "/__l5e/assets-v1/21af07bf-a524-49ed-b935-24dc1e417af6/f1-03.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "198",
    "slug": "f1-04",
    "name": "F1 — Peça 04",
    "brand": "F1",
    "category": "f1",
    "price": null,
    "images": [
      "/__l5e/assets-v1/74f8021e-0ac5-4296-9e27-5f2b7771a652/f1-04.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "199",
    "slug": "f1-05",
    "name": "F1 — Peça 05",
    "brand": "F1",
    "category": "f1",
    "price": null,
    "images": [
      "/__l5e/assets-v1/cd8841ed-44a6-4d1a-9e6e-a26aaa822840/f1-05.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "200",
    "slug": "f1-06",
    "name": "F1 — Peça 06",
    "brand": "F1",
    "category": "f1",
    "price": null,
    "images": [
      "/__l5e/assets-v1/69b7caee-aee3-4bbf-a1fd-48279128cfbe/f1-06.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "201",
    "slug": "f1-07",
    "name": "F1 — Peça 07",
    "brand": "F1",
    "category": "f1",
    "price": null,
    "images": [
      "/__l5e/assets-v1/3afd4fdd-2c21-4fe2-a24f-44a2906f9645/f1-07.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "202",
    "slug": "f1-08",
    "name": "F1 — Peça 08",
    "brand": "F1",
    "category": "f1",
    "price": null,
    "images": [
      "/__l5e/assets-v1/23d65b41-e651-447c-97d8-c96b6569579b/f1-08.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "203",
    "slug": "f1-09",
    "name": "F1 — Peça 09",
    "brand": "F1",
    "category": "f1",
    "price": null,
    "images": [
      "/__l5e/assets-v1/a830c1c7-5f06-4990-bc0f-1b550c7922db/f1-09.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "204",
    "slug": "f1-10",
    "name": "F1 — Peça 10",
    "brand": "F1",
    "category": "f1",
    "price": null,
    "images": [
      "/__l5e/assets-v1/a6efd659-91a0-4f25-a856-5ae54f9e96ff/f1-10.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "205",
    "slug": "f1-11",
    "name": "F1 — Peça 11",
    "brand": "F1",
    "category": "f1",
    "price": null,
    "images": [
      "/__l5e/assets-v1/91e329a3-5484-4da2-9f5a-7b19522a6b93/f1-11.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "206",
    "slug": "f1-12",
    "name": "F1 — Peça 12",
    "brand": "F1",
    "category": "f1",
    "price": null,
    "images": [
      "/__l5e/assets-v1/fd074e22-7c0c-4ab1-bb96-f161881078fe/f1-12.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "207",
    "slug": "oculos-blue-blocker-01",
    "name": "Óculos Blue Blocker — Peça 01",
    "brand": "Óculos Blue Blocker",
    "category": "oculos-blue-blocker",
    "price": null,
    "images": [
      "/__l5e/assets-v1/04cab72e-8c9a-44a4-b8fb-937589aedce7/oculos-blue-blocker-01.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "208",
    "slug": "oculos-blue-blocker-02",
    "name": "Óculos Blue Blocker — Peça 02",
    "brand": "Óculos Blue Blocker",
    "category": "oculos-blue-blocker",
    "price": null,
    "images": [
      "/__l5e/assets-v1/eb5b0913-6fba-4b8a-a59f-77ce05b2a582/oculos-blue-blocker-02.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "209",
    "slug": "oculos-blue-blocker-03",
    "name": "Óculos Blue Blocker — Peça 03",
    "brand": "Óculos Blue Blocker",
    "category": "oculos-blue-blocker",
    "price": null,
    "images": [
      "/__l5e/assets-v1/639724a5-d2d0-4994-a955-07a10c134b86/oculos-blue-blocker-03.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "210",
    "slug": "oculos-blue-blocker-04",
    "name": "Óculos Blue Blocker — Peça 04",
    "brand": "Óculos Blue Blocker",
    "category": "oculos-blue-blocker",
    "price": null,
    "images": [
      "/__l5e/assets-v1/af96ca9b-280d-4d5f-be96-a68f44ddd98c/oculos-blue-blocker-04.jpg"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "211",
    "slug": "acessorios-01",
    "name": "Acessórios — Peça 01",
    "brand": "Acessórios",
    "category": "acessorios",
    "price": null,
    "images": [
      "/__l5e/assets-v1/f7a98462-d340-42ab-a790-15565b27f2fc/acessorios-01.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "212",
    "slug": "acessorios-02",
    "name": "Acessórios — Peça 02",
    "brand": "Acessórios",
    "category": "acessorios",
    "price": null,
    "images": [
      "/__l5e/assets-v1/d4282b66-9d9f-4710-9cdb-15a570845d05/acessorios-02.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "213",
    "slug": "acessorios-03",
    "name": "Acessórios — Peça 03",
    "brand": "Acessórios",
    "category": "acessorios",
    "price": null,
    "images": [
      "/__l5e/assets-v1/0c9a938c-3acc-42c9-830b-683d585b8b74/acessorios-03.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "214",
    "slug": "acessorios-04",
    "name": "Acessórios — Peça 04",
    "brand": "Acessórios",
    "category": "acessorios",
    "price": null,
    "images": [
      "/__l5e/assets-v1/10100630-0537-43cb-a5af-0fd02cb97f20/acessorios-04.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  },
  {
    "id": "215",
    "slug": "acessorios-05",
    "name": "Acessórios — Peça 05",
    "brand": "Acessórios",
    "category": "acessorios",
    "price": null,
    "images": [
      "/__l5e/assets-v1/5ffb04b7-d75c-4ef3-ab84-9c400b786fc0/acessorios-05.png"
    ],
    "available": true,
    "featured": false,
    "isNew": false
  }
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getNewProducts() {
  return products.filter((p) => p.isNew);
}

export function getBrands() {
  return Array.from(new Set(products.map((p) => p.brand))).sort();
}
