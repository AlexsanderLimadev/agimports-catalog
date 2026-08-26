import { ProductCard } from "./ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import type { Product } from "@/data/products";

const grid = "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4";

export function ProductGrid({
  products,
  loading = false,
  priorityCount = 0,
}: {
  products: Product[];
  loading?: boolean;
  priorityCount?: number;
}) {
  if (loading) {
    return (
      <div className={grid}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-border">
            <Skeleton className="aspect-[3/4] w-full rounded-none bg-surface" />
            <div className="space-y-2 border-t border-border p-4">
              <Skeleton className="h-2.5 w-1/3 bg-surface" />
              <Skeleton className="h-3 w-3/4 bg-surface" />
              <Skeleton className="h-3 w-1/4 bg-surface" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={grid}>
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} priority={i < priorityCount} />
      ))}
    </div>
  );
}
