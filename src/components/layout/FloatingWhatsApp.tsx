import { MessageCircle } from "lucide-react";
import { GENERAL_WHATSAPP_URL } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={GENERAL_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex size-12 items-center justify-center rounded-full border border-border bg-background/85 text-foreground backdrop-blur-md transition-all duration-300 hover:border-foreground/50 active:scale-95 md:hidden"
    >
      <MessageCircle aria-hidden="true" className="size-5" />
    </a>
  );
}
