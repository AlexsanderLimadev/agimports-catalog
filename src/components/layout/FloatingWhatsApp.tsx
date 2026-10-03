import { MessageCircle } from "lucide-react";
import { GENERAL_WHATSAPP_URL } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={GENERAL_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-30 flex h-11 items-center gap-2.5 border border-white/10 bg-black/80 px-4 text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:text-white active:scale-95 md:hidden"
    >
      <MessageCircle aria-hidden="true" className="size-3.5 shrink-0" strokeWidth={1.5} />
      <span className="text-[10px] uppercase font-medium tracking-[0.2em]">WhatsApp</span>
    </a>
  );
}

