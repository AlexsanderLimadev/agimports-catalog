import { Container } from "@/components/ui/Container";
import { ActionAnchor } from "@/components/ui/ActionLink";
import { GENERAL_WHATSAPP_URL } from "@/lib/whatsapp";

export function CtaSection() {
  return (
    <section className="border-t border-white/[0.06] py-24 md:py-36">
      <Container className="text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-500">Atendimento</p>
        <h2 className="text-editorial mx-auto mt-5 max-w-xl text-3xl text-zinc-100 sm:text-4xl lg:text-5xl">
          Encontrou algo que gostou?
        </h2>
        <p className="mt-5 text-sm font-light text-zinc-400">
          Fale diretamente com a AG Imports pelo WhatsApp.
        </p>
        <div className="mt-10 flex justify-center">
          <ActionAnchor href={GENERAL_WHATSAPP_URL} variant="primary">
            Falar no WhatsApp
          </ActionAnchor>
        </div>
      </Container>
    </section>
  );
}
