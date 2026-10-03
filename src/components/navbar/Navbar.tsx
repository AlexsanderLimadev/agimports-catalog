import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, Menu, MessageCircle } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { Container } from "@/components/ui/Container";
import { INSTAGRAM_URL, NAV_LINKS, STORE_NAME } from "@/lib/constants";
import { GENERAL_WHATSAPP_URL } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import mark from "@/assets/ag-imports-mark.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.06] bg-black/80 backdrop-blur-md"
          : "bg-black/40 backdrop-blur-sm",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3 transition-opacity duration-200 hover:opacity-85"
          aria-label={`Início: ${STORE_NAME}`}
        >
          <img src={mark} alt={STORE_NAME} className="h-7 w-auto brightness-0 invert" />
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-100">{STORE_NAME}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="link-underline label-xs text-muted-foreground transition-colors duration-300 hover:text-foreground data-[status=active]:text-foreground"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da AG Imports"
            className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            <Instagram aria-hidden="true" className="size-[15px]" strokeWidth={1.5} />
          </a>

          <a
            href={GENERAL_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="label-xs flex items-center gap-1.5 border-b border-border pb-px text-muted-foreground transition-colors duration-300 hover:border-foreground/40 hover:text-foreground"
          >
            <MessageCircle aria-hidden="true" className="size-3" strokeWidth={1.5} />
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="p-1.5 text-muted-foreground transition-colors hover:text-foreground md:hidden"
        >
          <Menu aria-hidden="true" className="size-[18px]" strokeWidth={1.5} />
        </button>
      </Container>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
