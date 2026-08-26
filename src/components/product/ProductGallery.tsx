import { useState } from "react";
import { ProductImage } from "@/components/products/ProductImage";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";

export function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const hasMultiple = product.images.length > 1;

  return (
    <div className="space-y-3">
      <div className="group overflow-hidden rounded-xl border border-border bg-surface">
        <ProductImage
          product={product}
          src={product.images[active]}
          priority
          className="aspect-[4/5] p-6 transition-transform duration-500 group-hover:scale-[1.04] md:p-10"
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
                "w-20 shrink-0 snap-start overflow-hidden rounded-xl border bg-surface transition-colors",
                i === active ? "border-foreground" : "border-border hover:border-foreground/40",
              )}
            >
              <ProductImage product={product} src={image} className="aspect-square p-2" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
