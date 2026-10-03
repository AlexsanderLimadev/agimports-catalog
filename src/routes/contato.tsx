import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ActionAnchor } from "@/components/ui/ActionLink";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, STORE_NAME } from "@/lib/constants";
import { GENERAL_WHATSAPP_URL } from "@/lib/whatsapp";

const description = "Fale com a AG Imports pelo WhatsApp ou pelo Instagram oficial.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: `Contato | ${STORE_NAME}` },
      { name: "description", content: description },
      { property: "og:title", content: `Contato | ${STORE_NAME}` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Container className="py-16 md:py-24">
      <header className="mb-14 border-b border-border pb-10">
        <p className="label-xs text-muted-foreground/50">Contato</p>
        <h1 className="text-editorial mt-5 text-[clamp(2.5rem,5vw,3.5rem)]">Fale com a AG Imports.</h1>
        <p className="mt-4 max-w-md text-[13px] font-light text-muted-foreground">{description}</p>
      </header>

      <div className="grid gap-12 sm:grid-cols-2 md:gap-16">
        <div className="border-t border-border pt-6 space-y-4">
          <div className="flex items-center gap-2">
            <MessageCircle aria-hidden="true" className="size-4 text-muted-foreground" strokeWidth={1.5} />
            <h2 className="label-xs text-foreground/90">WhatsApp</h2>
          </div>
          <p className="text-[13px] font-light text-muted-foreground leading-relaxed">
            Atendimento imediato, consulta de disponibilidade, envio de fotos reais e pedidos.
          </p>
          <div className="pt-4">
            <ActionAnchor href={GENERAL_WHATSAPP_URL} variant="primary">
              Iniciar conversa
            </ActionAnchor>
          </div>
        </div>

        <div className="border-t border-border pt-6 space-y-4">
          <div className="flex items-center gap-2">
            <Instagram aria-hidden="true" className="size-4 text-muted-foreground" strokeWidth={1.5} />
            <h2 className="label-xs text-foreground/90">Instagram</h2>
          </div>
          <p className="text-[13px] font-light text-muted-foreground leading-relaxed">
            {INSTAGRAM_HANDLE}: bastidores, lançamentos e inspirações em primeira mão.
          </p>
          <div className="pt-4">
            <ActionAnchor href={INSTAGRAM_URL}>
              Acessar perfil
            </ActionAnchor>
          </div>
        </div>
      </div>
    </Container>
  );
}
