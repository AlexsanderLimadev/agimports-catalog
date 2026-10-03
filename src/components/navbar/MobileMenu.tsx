import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, X } from "lucide-react";
import { INSTAGRAM_URL, NAV_LINKS } from "@/lib/constants";
import { GENERAL_WHATSAPP_URL } from "@/lib/whatsapp";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div
      id="menu-mobile"
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl animate-in fade-in duration-300 md:hidden"
    >
      <div className="flex h-16 items-center justify-between px-6 border-b border-white/[0.06]">
        <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-100">AG Imports</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar menu"
          className="p-2 text-zinc-400 transition-colors hover:text-white"
        >
          <X aria-hidden="true" className="size-5" strokeWidth={1.5} />
        </button>
      </div>

      <nav className="flex flex-1 flex-col px-6 pt-10">
        <div className="space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={onClose}
              className="block py-4 text-2xl font-light tracking-tight text-zinc-200 border-b border-white/[0.04] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-white/[0.06] space-y-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center gap-3 py-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            <Instagram aria-hidden="true" className="size-4" strokeWidth={1.5} />
            <span className="text-xs uppercase tracking-[0.15em]">Instagram</span>
          </a>

          <a
            href={GENERAL_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex h-12 w-full items-center justify-center gap-2.5 bg-zinc-100 text-black text-xs font-medium uppercase tracking-[0.15em] transition-opacity hover:opacity-90"
          >
            <MessageCircle aria-hidden="true" className="size-4" strokeWidth={1.5} />
            Atendimento WhatsApp
          </a>
        </div>
      </nav>
    </div>
  );
}

