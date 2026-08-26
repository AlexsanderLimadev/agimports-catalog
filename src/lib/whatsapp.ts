import { WHATSAPP_NUMBER } from "./constants";
import type { Product } from "@/data/products";

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getProductWhatsAppUrl(product: Product) {
  const message = product.available
    ? `Olá! Tenho interesse no produto *${product.name}*. Gostaria de saber mais informações.`
    : `Olá! O produto *${product.name}* está esgotado. Gostaria de saber se ele estará disponível novamente.`;
  return getWhatsAppUrl(message);
}

export function generateWhatsAppLink(product: Product) {
  return getProductWhatsAppUrl(product);
}

export const GENERAL_WHATSAPP_URL = getWhatsAppUrl(
  "Olá! Vim pelo site da AG Imports e gostaria de mais informações.",
);
