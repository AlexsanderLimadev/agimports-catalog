import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ActionLink } from "@/components/ui/ActionLink";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 8);
  if (featured.length === 0) return null;

  return (
    <section className="py-20 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Seleção AG Imports"
          title="Os favoritos da nossa coleção."
          action={
            <ActionLink to="/catalogo" variant="secondary" className="hidden sm:inline-flex">
              Ver tudo
            </ActionLink>
          }
        />
        <div className="mt-10">
          <ProductGrid products={featured} />
        </div>
      </Container>
    </section>
  );
}
