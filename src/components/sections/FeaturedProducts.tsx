import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ActionLink } from "@/components/ui/ActionLink";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getFavoritesOneByBrand } from "@/data/products";

export function FeaturedProducts() {
  const featured = getFavoritesOneByBrand(8);
  if (featured.length === 0) return null;

  return (
    <section className="py-24 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Seleção Exclusiva"
          title="Os favoritos da nossa coleção"
          action={
            <ActionLink to="/catalogo" variant="secondary" className="hidden sm:inline-flex">
              Ver tudo
            </ActionLink>
          }
        />
        <div className="mt-14">
          <ProductGrid products={featured} />
        </div>
      </Container>
    </section>
  );
}
