import { Container } from "@/components/ui/Container";
import { ActionLink } from "@/components/ui/ActionLink";

export function AboutSection() {
  return (
    <section className="border-t border-white/[0.06] py-24 md:py-36">
      <Container className="grid gap-12 md:grid-cols-2 md:gap-24">
        <h2 className="text-editorial text-3xl text-zinc-100 sm:text-4xl">
          Curadoria que faz a diferença.
        </h2>
        <div>
          <p className="text-[15px] font-light leading-relaxed text-zinc-400">
            A AG Imports seleciona produtos importados para quem valoriza autenticidade,
            qualidade real e atendimento próximo. Cada peça é escolhida individualmente.
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
