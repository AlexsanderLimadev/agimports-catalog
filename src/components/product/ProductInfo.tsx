import { ProductDetails } from "./ProductDetails";
import { WhatsAppButton } from "./WhatsAppButton";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/data/products";

export function ProductInfo({
  product,
  category,
}: {
  product: Product;
  category?: string | undefined;
}) {
  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      <p className="label-xs text-muted-foreground">{product.brand}</p>
      <h1 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">{product.name}</h1>

      <p className="mt-6 text-2xl font-light">
        {product.price === null ? (
          <span className="label-xs align-middle text-muted-foreground">
            Preço sob consulta
          </span>
        ) : (
          formatPrice(product.price)
        )}
      </p>

      <p className="label-xs mt-4 text-muted-foreground">
        {product.available ? "Disponível" : "Esgotado"}
      </p>

      {product.description ? (
        <p className="mt-6 max-w-prose text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
      ) : product.placeholder ? (
        <p className="mt-6 max-w-prose text-sm leading-relaxed text-muted-foreground">
          Descrição a ser preenchida com as informações oficiais do catálogo.
        </p>
      ) : null}

      <div className="mt-8">
        <WhatsAppButton product={product} />
      </div>

      <div className="mt-10">
        <ProductDetails product={product} category={category} />
      </div>
    </div>
  );
}
