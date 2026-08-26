import { Container } from "@/components/ui/Container";
import { ActionAnchor } from "@/components/ui/ActionLink";
import { GENERAL_WHATSAPP_URL } from "@/lib/whatsapp";

export function CtaSection() {
  return (
    <section className="border-t border-border py-20 md:py-32">
      <Container className="text-center">
        <h2 className="text-editorial mx-auto max-w-xl text-3xl sm:text-4xl lg:text-5xl">
          Encontrou algo que gostou?
        </h2>
        <p className="mt-5 text-sm text-muted-foreground">
          Fale com a AG Imports pelo WhatsApp.
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
