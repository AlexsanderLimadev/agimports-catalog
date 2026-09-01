/**
 * CONFIGURAÇÃO CENTRAL — AG IMPORTS
 * Altere aqui (e somente aqui) os dados da loja.
 */

export const STORE_NAME = "AG Imports";
export const STORE_TAGLINE = "Importados selecionados para quem valoriza o extraordinário.";
export const STORE_DESCRIPTION = "Explore a seleção de produtos importados da AG Imports.";

/** Somente dígitos, com código do país. Ex.: 5511999999999
 *  TODO: substituir pelo número real antes de publicar o site. */
export const WHATSAPP_NUMBER = "5500000000000";

export const INSTAGRAM_HANDLE = "@agimports.co";
export const INSTAGRAM_URL = "https://www.instagram.com/agimports.co/";

/** Domínio final do site (sem barra no final). Ex.: https://agimports.com.br
 *  TODO: preencher antes de publicar — usado nas meta tags og:url, og:image, sitemap e JSON-LD. */
export const SITE_URL = "";

export const NAV_LINKS = [
  { label: "Catálogo", to: "/catalogo" },
  { label: "Sobre", to: "/sobre" },
  { label: "Contato", to: "/contato" },
] as const;

/** Popup de primeira compra — altere só aqui pra mudar o percentual/código. */
export const FIRST_PURCHASE_DISCOUNT_PERCENT = 5;
export const FIRST_PURCHASE_DISCOUNT_CODE = "AGIMPORTS5";
/** Chave usada no localStorage do navegador pra não repetir o popup pra quem já viu. */
export const FIRST_PURCHASE_DISCOUNT_STORAGE_KEY = "ag-imports:discount-popup-seen";

/** Chave usada no localStorage para salvar o consentimento de cookies (LGPD). */
export const COOKIE_CONSENT_STORAGE_KEY = "ag-imports:cookie-consent";

/** ID de Mensuração do Google Analytics 4 (GA4). Ex: G-XXXXXXXXXX
 *  TODO: preencher com seu ID real para ativar o rastreamento. */
export const GA_MEASUREMENT_ID = "406672596";
