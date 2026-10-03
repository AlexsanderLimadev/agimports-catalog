import { Link } from "@tanstack/react-router";
import { ProductImage } from "./ProductImage";
import { ProductBadge } from "./ProductBadge";
import { formatPrice } from "@/lib/format";
import { CATEGORY_LABELS, type Product } from "@/data/products";

export function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  const hoverImage = product.images[1];
  const categoryTag = CATEGORY_LABELS[product.category] ?? product.category.toUpperCase();

  // Nomenclatura limpa, sem traços, sem "Peça 01" ou números mecânicos
  const cleanTitle = (() => {
    // Se o nome for puramente mecânico (ex: "Amiri 01", "Tênis 04", "Peça 01")
    const brandLower = product.brand.toLowerCase();
    const nameLower = product.name.toLowerCase();

    // Elimina travessões, hífens soltos e múltiplos espaços
    let sanitized = product.name
      .replace(/[—–-]/g, " ")
      .replace(/\bpeça\s*\d+\b/gi, "")
      .replace(/\s+/g, " ")
      .trim();

    // Se o nome era apenas "Marca XX" (ex: "Amiri 01"), transforma em algo sofisticado
    if (new RegExp(`^${brandLower}\\s*\\d+$`, "i").test(sanitized)) {
      if (categoryTag === "CAMISETAS") return `Camiseta ${product.brand}`;
      if (categoryTag === "TÊNIS") return `Tênis ${product.brand}`;
      if (categoryTag === "BONÉS") return `Boné ${product.brand}`;
      if (categoryTag === "POLOS") return `Polo ${product.brand}`;
      if (categoryTag === "CAMISARIA") return `Camisa ${product.brand}`;
      if (categoryTag === "SANDÁLIAS") return `Sandália ${product.brand}`;
      if (categoryTag === "BOLSAS") return `Bolsa ${product.brand}`;
      if (categoryTag === "ÓCULOS") return `Óculos ${product.brand}`;
      if (categoryTag === "MODA PRAIA") return `Short ${product.brand}`;
      return `${product.brand}`;
    }

    // Remove numerações soltas no final (ex: "Camiseta Amiri 02" -> "Camiseta Amiri")
    sanitized = sanitized.replace(/\s+\d{1,3}$/, "").trim();

    return sanitized || product.name;
  })();

  return (
    <Link
      to="/produto/$slug"
      params={{ slug: product.slug }}
      className="group block w-full"
    >
      {/* Contêiner de imagem 3:4 com overflow-hidden estrito e hover fluido */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#09090b]">
        <div className="h-full w-full transition-transform duration-300 ease-out group-hover:scale-105">
          <ProductImage
            product={product}
            priority={!!priority}
            className="h-full w-full object-cover"
          />

          {hoverImage ? (
            <ProductImage
              product={product}
              src={hoverImage}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
            />
          ) : null}
        </div>

        {/* Tags de status ultra-discretas */}
        <div className="pointer-events-none absolute left-3 top-3 flex flex-col gap-1.5 z-10">
          {product.isNew ? <ProductBadge>NOVO</ProductBadge> : null}
          {!product.available ? <ProductBadge>ESGOTADO</ProductBadge> : null}
        </div>
      </div>

      {/* Legenda editorial: categoria em caixa alta com tracking amplo, título limpo e preço */}
      <div className="mt-3.5 space-y-1">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
          {categoryTag}
        </p>

        <h3 className="truncate text-[13px] font-normal tracking-tight text-zinc-200 transition-colors duration-300 group-hover:text-white">
          {cleanTitle}
        </h3>

        <p className="pt-0.5 text-[12px] font-light text-zinc-400">
          {product.price === null ? (
            <span className="text-[10px] uppercase tracking-[0.15em] text-zinc-500">Sob consulta</span>
          ) : (
            <span className="text-zinc-300">{formatPrice(product.price)}</span>
          )}
        </p>
      </div>
    </Link>
  );
}

