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
      <header className="border-b border-border pb-8">
        <p className="label-xs text-muted-foreground">Contato</p>
        <h1 className="text-editorial mt-4 text-4xl sm:text-5xl">Fale com a AG Imports.</h1>
        <p className="mt-4 max-w-md text-sm text-muted-foreground">{description}</p>
      </header>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-background-2 p-8">
          <MessageCircle aria-hidden="true" className="size-5 text-muted-foreground" />
          <h2 className="label-xs mt-6">WhatsApp</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Atendimento e pedidos pelo nosso canal oficial.
          </p>
          <ActionAnchor href={GENERAL_WHATSAPP_URL} variant="primary" className="mt-8 w-full">
            Falar no WhatsApp
          </ActionAnchor>
        </div>

        <div className="rounded-xl border border-border bg-background-2 p-8">
          <Instagram aria-hidden="true" className="size-5 text-muted-foreground" />
          <h2 className="label-xs mt-6">Instagram</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {INSTAGRAM_HANDLE} — novidades e lançamentos.
          </p>
          <ActionAnchor href={INSTAGRAM_URL} className="mt-8 w-full">
            Ver Instagram
          </ActionAnchor>
        </div>
      </div>
    </Container>
  );
}
