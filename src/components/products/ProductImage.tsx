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
  const [loaded, setLoaded] = useState(false);
  const [broken, setBroken] = useState(false);
  const alt = `${product.name} ${product.brand}`;

  if (!source || broken) {
    return null;
  }

  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#09090b]">
      {/* Skeleton escuro exibido enquanto a imagem carrega */}
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-[#121215]"
        />
      )}

      <img
        src={source}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setBroken(true)}
        className={cn(
          "aspect-[3/4] w-full object-cover transition-opacity duration-500 ease-out",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
      />
    </div>
  );
}

