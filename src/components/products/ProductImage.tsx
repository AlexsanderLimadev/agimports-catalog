import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";

export function ProductImage({
  product,
  src,
  priority = false,
  className,
}: {
  product: Product;
  src?: string | undefined;
  priority?: boolean | undefined;
  className?: string | undefined;
}) {
  const source = src ?? product.images[0];
  const [broken, setBroken] = useState(false);
  const alt = `${product.name} ${product.brand}`;

  if (!source || broken) {
    return (
      <div
        className={cn(
          "flex aspect-[3/4] w-full items-center justify-center bg-surface",
          className,
        )}
        role="img"
        aria-label={`Imagem pendente — ${alt}`}
      >
        <span className="label-xs text-muted-foreground/70">Imagem pendente</span>
      </div>
    );
  }

  return (
    <img
      src={source}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setBroken(true)}
      className={cn("aspect-[3/4] w-full object-contain", className)}
    />
  );
}
