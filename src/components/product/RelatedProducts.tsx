import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/products/ProductGrid";
import { products, type Product } from "@/data/products";

export function RelatedProducts({ product }: { product: Product }) {
  const related = products
    .filter((p) => p.slug !== product.slug)
    .sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category))
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="mt-24 border-t border-border pt-16 md:mt-32">
      <Container className="px-0 md:px-0 lg:px-0">
        <SectionHeading eyebrow="Continue explorando" title="Você também pode gostar." />
        <div className="mt-10">
          <ProductGrid products={related} />
        </div>
      </Container>
    </section>
  );
}
