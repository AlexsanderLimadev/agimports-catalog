import { Link } from "@tanstack/react-router";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/ActionLink";
import { ProductImage } from "@/components/products/ProductImage";
import { formatPrice } from "@/lib/format";
import { getFeaturedProducts, visibleProducts } from "@/data/products";

/** Produto de destaque em composição editorial de campanha. Sempre com foto real. */
export function FeaturedEditorial() {
  const product = getFeaturedProducts()[0] ?? visibleProducts[0];
  if (!product) return null;

  return (
    <section className="border-y border-white/[0.06] bg-[#020202] py-24 md:py-36">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
        <Reveal className="min-w-0">
          <Link
            to="/produto/$slug"
            params={{ slug: product.slug }}
            className="group block overflow-hidden bg-[#09090b]"
          >
            <ProductImage
              product={product}
              priority
              className="aspect-[3/4] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0 space-y-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-500">
            Peça em Destaque
          </p>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{product.brand}</p>
            <h2 className="text-editorial mt-3 text-3xl leading-tight sm:text-4xl lg:text-5xl text-zinc-100">
              {product.name}
            </h2>
          </div>

          <p className="text-lg font-light text-zinc-300">
            {product.price === null ? (
              <span className="text-xs uppercase tracking-[0.15em] text-zinc-500">Sob consulta</span>
            ) : (
              formatPrice(product.price)
            )}
          </p>

          {product.description ? (
            <p className="max-w-prose text-sm font-light leading-relaxed text-zinc-400">
              {product.description}
            </p>
          ) : null}

          <div className="pt-4">
            <Link
              to="/produto/$slug"
              params={{ slug: product.slug }}
              className="inline-flex items-center gap-3 border-b border-white/40 pb-1 text-xs uppercase tracking-[0.2em] text-zinc-200 transition-colors hover:border-white hover:text-white"
            >
              Explorar peça
              <ArrowIcon />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
