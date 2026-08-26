import type { Product } from "@/data/products";

export function ProductDetails({
  product,
  category,
}: {
  product: Product;
  category?: string | undefined;
}) {
  const rows: Array<[string, string]> = [];
  if (category) rows.push(["Categoria", category]);
  if (product.volume) rows.push(["Volume", product.volume]);
  if (product.size) rows.push(["Tamanho", product.size]);
  if (product.sku) rows.push(["SKU", product.sku]);

  if (rows.length === 0) return null;

  return (
    <dl className="divide-y divide-border border-t border-border">
      {rows.map(([label, value]) => (
        <div key={label} className="flex items-center justify-between gap-4 py-3">
          <dt className="label-xs text-muted-foreground">{label}</dt>
          <dd className="text-sm">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
