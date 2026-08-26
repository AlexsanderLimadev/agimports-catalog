import { Link } from "@tanstack/react-router";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/ActionLink";
import { ProductImage } from "@/components/products/ProductImage";
import { formatPrice } from "@/lib/format";
import { getFeaturedProducts } from "@/data/products";

/** Produto de destaque em composição editorial de campanha. */
export function FeaturedEditorial() {
  const product = getFeaturedProducts()[0];
  if (!product) return null;

  return (
    <section className="border-y border-border bg-background-2 py-20 md:py-32">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <Reveal className="min-w-0">
          <Link
            to="/produto/$slug"
            params={{ slug: product.slug }}
            className="group block overflow-hidden rounded-xl border border-border bg-surface"
          >
            <ProductImage
              product={product}
              className="aspect-[4/5] p-10 transition-transform duration-700 ease-out group-hover:scale-[1.03] md:aspect-[5/4] md:p-16"
            />
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0">
          <p className="label-xs text-muted-foreground">Destaque</p>
          <p className="label-xs mt-8">{product.brand}</p>
          <h2 className="text-editorial mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
            {product.name}
          </h2>
          <p className="mt-6 text-lg font-light">
            {product.price === null ? (
              <span className="label-xs text-muted-foreground">Preço sob consulta</span>
            ) : (
              formatPrice(product.price)
            )}
          </p>
          {product.description ? (
            <p className="mt-6 max-w-prose text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          ) : null}
          <Link
            to="/produto/$slug"
            params={{ slug: product.slug }}
            className="label-xs group mt-10 inline-flex items-center gap-2"
          >
            Ver produto
            <ArrowIcon />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
