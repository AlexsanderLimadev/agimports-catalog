import { ProductCard } from "./ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import type { Product } from "@/data/products";

const grid = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-12 sm:gap-y-16";

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
          <div key={i} className="space-y-3.5">
            <Skeleton className="aspect-[3/4] w-full bg-[#121215]" />
            <div className="space-y-2">
              <Skeleton className="h-2 w-16 bg-[#121215]" />
              <Skeleton className="h-3 w-3/4 bg-[#121215]" />
              <Skeleton className="h-2.5 w-1/4 bg-[#121215]" />
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
