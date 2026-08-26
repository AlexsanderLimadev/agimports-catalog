import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    title: "Produtos selecionados",
    text: "Produtos cuidadosamente escolhidos para nossa coleção.",
  },
  {
    title: "Autenticidade",
    text: "Informações de autenticidade confirmadas diretamente pela loja.",
  },
  {
    title: "Atendimento",
    text: "Atendimento próximo através dos nossos canais oficiais.",
  },
  {
    title: "Envio",
    text: "Condições de envio informadas no atendimento.",
  },
];

export function TrustSection() {
  return (
    <section className="border-t border-border py-20 md:py-32">
      <Container>
        <SectionHeading eyebrow="Por que AG Imports?" title="Curadoria e atendimento." />
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-background-2 p-7">
              <h3 className="label-xs">{pillar.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground">{pillar.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
