import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getNewProducts } from "@/data/products";

export function NewProducts() {
  const items = getNewProducts(4);
  if (items.length === 0) return null;

  return (
    <section className="border-t border-white/[0.06] py-24 md:py-36">
      <Container>
        <SectionHeading eyebrow="Novidades" title="Recém chegados" />
        <div className="mt-14">
          <ProductGrid products={items} />
        </div>
      </Container>
    </section>
  );
}
