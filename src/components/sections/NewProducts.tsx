import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getNewProducts } from "@/data/products";

export function NewProducts() {
  const items = getNewProducts().slice(0, 4);
  if (items.length === 0) return null;

  return (
    <section className="border-t border-border py-20 md:py-32">
      <Container>
        <SectionHeading eyebrow="Novidades" title="Recém-chegados." />
        <div className="mt-10">
          <ProductGrid products={items} />
        </div>
      </Container>
    </section>
  );
}
