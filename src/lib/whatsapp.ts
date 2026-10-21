import { FIRST_PURCHASE_DISCOUNT_CODE, FIRST_PURCHASE_DISCOUNT_PERCENT, WHATSAPP_NUMBER } from "./constants";
import type { Product } from "@/data/products";

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getProductWhatsAppUrl(product: Product, size?: string) {
  const sizeText = size ? ` (Tamanho: ${size})` : "";
  const message = product.available
    ? `Olá! Tenho interesse na peça *${product.name}* [${product.brand}]${sizeText}. Gostaria de confirmar disponibilidade e envio.`
    : `Olá! A peça *${product.name}* [${product.brand}]${sizeText} consta como esgotada. Gostaria de saber sobre reposição.`;
  return getWhatsAppUrl(message);
}

export function generateWhatsAppLink(product: Product) {
  return getProductWhatsAppUrl(product);
}

export const GENERAL_WHATSAPP_URL = getWhatsAppUrl(
  "Olá! Vim pelo site da AG Imports e gostaria de mais informações.",
);

export const DISCOUNT_WHATSAPP_URL = getWhatsAppUrl(
  `Olá! Ganhei ${FIRST_PURCHASE_DISCOUNT_PERCENT}% de desconto no site da AG Imports (código ${FIRST_PURCHASE_DISCOUNT_CODE}) e quero usar no meu primeiro pedido.`,
);
