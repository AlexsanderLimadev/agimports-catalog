export function formatPrice(price: number | null) {
  if (price === null) return "Consulte";
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
