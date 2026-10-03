import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    title: "Curadoria rigorosa",
    text: "Cada produto é escolhido individualmente. Sem atacado, sem reposição automática.",
  },
  {
    title: "Autenticidade garantida",
    text: "Trabalhamos apenas com marcas e origens verificadas. Procedência compartilhada abertamente.",
  },
  {
    title: "Atendimento humano",
    text: "Você fala diretamente com a loja pelo WhatsApp. Sem bots, sem formulários.",
  },
  {
    title: "Envio para todo o Brasil",
    text: "Enviamos para qualquer estado, com rastreamento completo e frete informado no pedido.",
  },
];

export function TrustSection() {
  return (
    <section className="border-t border-white/[0.06] py-24 md:py-36">
      <Container>
        <SectionHeading eyebrow="Por que AG Imports" title="Curadoria e atendimento" />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="border-t border-white/[0.06] pt-6 space-y-3">
              <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-300">{pillar.title}</h3>
              <p className="text-[13px] font-light leading-relaxed text-zinc-500">{pillar.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
