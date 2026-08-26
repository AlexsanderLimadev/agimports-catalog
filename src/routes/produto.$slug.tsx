import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Container } from "@/components/ui/Container";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { getProductBySlug } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import { STORE_NAME } from "@/lib/constants";

export const Route = createFileRoute("/produto/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: `Produto não encontrado | ${STORE_NAME}` }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const description = product.description ?? `${product.name} — ${product.brand}. Fale com a AG Imports pelo WhatsApp.`;
    return {
      meta: [
        { title: `${product.name} | ${STORE_NAME}` },
        { name: "description", content: description },
        { property: "og:title", content: `${product.name} | ${STORE_NAME}` },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/produto/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/produto/${params.slug}` }],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductPage,
});

function ProductNotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="label-xs text-muted-foreground">Produto</p>
      <h1 className="text-editorial mt-4 text-4xl">Produto não encontrado</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Este produto pode ter saído do catálogo.
      </p>
      <Link
        to="/catalogo"
        className="label-xs mt-8 rounded-xl bg-primary px-6 py-3 text-primary-foreground"
      >
        Ver catálogo
      </Link>
    </Container>
  );
}

function ProductPage() {
  const { product } = Route.useLoaderData();
  const category = getCategoryBySlug(product.category);

  return (
    <Container className="py-10 md:py-16">
      <nav aria-label="Breadcrumb" className="label-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link to="/" className="hover:text-foreground">
              Início
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link to="/catalogo" className="hover:text-foreground">
              Catálogo
            </Link>
          </li>
          {category ? (
            <>
              <li aria-hidden="true">/</li>
              <li className="hidden sm:block">
                <Link
                  to="/catalogo"
                  search={{ categoria: category.slug }}
                  className="hover:text-foreground"
                >
                  {category.name}
                </Link>
              </li>
            </>
          ) : null}
          <li aria-hidden="true">/</li>
          <li className="truncate text-foreground">{product.name}</li>
        </ol>
      </nav>

      <div className="reveal mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <ProductGallery product={product} />
        <ProductInfo product={product} category={category?.name} />
      </div>

      <RelatedProducts product={product} />
    </Container>
  );
}
