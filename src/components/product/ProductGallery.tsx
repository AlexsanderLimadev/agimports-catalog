import { useState } from "react";
import { ProductImage } from "@/components/products/ProductImage";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";

export function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const hasMultiple = product.images.length > 1;

  return (
    <div className="space-y-4">
      <div className="group overflow-hidden bg-surface">
        <ProductImage
          product={product}
          src={product.images[active]}
          priority
          className="aspect-[3/4] w-full object-cover p-6 transition-transform duration-500 group-hover:scale-[1.03] md:p-10"
        />
      </div>

      {hasMultiple ? (
        <div className="flex snap-x gap-3 overflow-x-auto pb-1">
          {product.images.map((image, i) => (
            <button
              key={image}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver imagem ${i + 1} de ${product.name}`}
              aria-current={i === active}
              className={cn(
                "w-16 shrink-0 snap-start overflow-hidden border bg-surface transition-colors",
                i === active ? "border-foreground" : "border-border hover:border-foreground/40",
              )}
            >
              <ProductImage product={product} src={image} className="aspect-square object-cover p-1.5" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
