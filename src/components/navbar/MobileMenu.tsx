import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, X } from "lucide-react";
import { INSTAGRAM_URL, NAV_LINKS } from "@/lib/constants";
import { GENERAL_WHATSAPP_URL } from "@/lib/whatsapp";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div
      id="menu-mobile"
      className="fixed inset-0 z-50 flex flex-col bg-background/98 backdrop-blur-md animate-in fade-in duration-200 md:hidden"
    >
      <div className="flex items-center justify-between px-5 py-5">
        <span className="label-xs">AG Imports</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar menu"
          className="rounded-xl p-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X aria-hidden="true" className="size-5" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-2 px-5 pt-8">
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={onClose}
            style={{ animationDelay: `${i * 50}ms` }}
            className="reveal border-b border-border py-5 text-2xl font-light"
          >
            {link.label}
          </Link>
        ))}

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="reveal flex items-center gap-3 border-b border-border py-5 text-2xl font-light"
        >
          <Instagram aria-hidden="true" className="size-5" /> Instagram
        </a>
        <a
          href={GENERAL_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="label-xs mt-8 flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-primary-foreground"
        >
          <MessageCircle aria-hidden="true" className="size-4" /> WhatsApp
        </a>
      </nav>
    </div>
  );
}
