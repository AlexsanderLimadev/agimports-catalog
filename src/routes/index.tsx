import { createFileRoute } from "@tanstack/react-router";
import { StoreExpansionHero } from "@/components/hero/StoreExpansionHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CategoryGrid } from "@/components/categories/CategoryGrid";
import { FeaturedEditorial } from "@/components/sections/FeaturedEditorial";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { NewProducts } from "@/components/sections/NewProducts";
import { AboutSection } from "@/components/sections/AboutSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { STORE_NAME } from "@/lib/constants";

const title = "AG Imports | Catálogo de Importados Premium";
const description =
  "Catálogo premium da AG Imports: produtos importados selecionados. Fale direto com a loja pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          name: STORE_NAME,
          description,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <StoreExpansionHero />

      <section className="py-20 md:py-32">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Coleções" title="Explore por categoria." />
          </Reveal>
          <Reveal delay={0.08} className="mt-10">
            <CategoryGrid />
          </Reveal>
        </Container>
      </section>

      <FeaturedEditorial />
      <FeaturedProducts />
      <NewProducts />
      <AboutSection />
      <TrustSection />
      <InstagramSection />
      <CtaSection />
    </>
  );
}
