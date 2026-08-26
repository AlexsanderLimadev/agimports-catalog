import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, Menu, MessageCircle } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { Container } from "@/components/ui/Container";
import { INSTAGRAM_URL, NAV_LINKS } from "@/lib/constants";
import { GENERAL_WHATSAPP_URL } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/ag-imports-logo.png.asset.json";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
        "sticky top-0 z-40 transition-colors duration-300",
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="AG Imports — início">
          <img
            src={logoAsset.url}
            alt="AG Imports"
            className="h-9 w-auto brightness-0 invert"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="link-underline label-xs text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da AG Imports"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Instagram aria-hidden="true" className="size-4" />
          </a>
          <a
            href={GENERAL_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="label-xs flex items-center gap-2 rounded-xl border border-border px-4 py-2 transition-colors hover:border-foreground/50"
          >
            <MessageCircle aria-hidden="true" className="size-3.5" /> WhatsApp
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="rounded-xl p-2 text-foreground md:hidden"
        >
          <Menu aria-hidden="true" className="size-5" />
        </button>
      </Container>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
