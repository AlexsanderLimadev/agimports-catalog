import { Container } from "@/components/ui/Container";
import { ActionLink } from "@/components/ui/ActionLink";

export function AboutSection() {
  return (
    <section className="border-t border-border py-20 md:py-32">
      <Container className="grid gap-10 md:grid-cols-2 md:gap-20">
        <h2 className="text-editorial text-3xl sm:text-4xl">Mais que importados.</h2>
        <div>
          <p className="text-base leading-relaxed text-muted-foreground">
            A AG Imports seleciona produtos importados para quem busca qualidade,
            autenticidade e uma experiência diferenciada.
          </p>
          <div className="mt-8">
            <ActionLink to="/sobre" variant="secondary">
              Sobre a marca
            </ActionLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
