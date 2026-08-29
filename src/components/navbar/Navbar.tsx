import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, Menu, MessageCircle } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { Container } from "@/components/ui/Container";
import { INSTAGRAM_URL, NAV_LINKS, STORE_NAME } from "@/lib/constants";
import { GENERAL_WHATSAPP_URL } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * TODO: coloque o arquivo real da logo (PNG/SVG, arte preta sobre fundo
 * transparente) em src/assets/ag-imports-logo.png e troque a linha abaixo por:
 *   import logo from "@/assets/ag-imports-logo.png";
 * O antigo `ag-imports-logo.png.asset.json` era só um ponteiro pra Lovable
 * (/__l5e/assets-v1/...) — nunca teve o binário real no repo, por isso a
 * imagem não carregava. Não é a classe `brightness-0 invert` que quebra a
 * logo: o fundo do site é quase preto (#0A0A0A), então esse filtro é o que
 * faz uma logo preta virar branca e ficar visível aqui — se você tirar o
 * filtro sem trocar a arte por uma já branca, a logo fica preta sobre fundo
 * preto (invisível). Mantido até você confirmar a arte final.
 */
const logo: string | null = null;

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
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2"
          aria-label={`Início: ${STORE_NAME}`}
        >
          {logo ? (
            <img src={logo} alt={STORE_NAME} className="h-9 w-auto brightness-0 invert" />
          ) : (
            <span className="text-editorial text-lg tracking-wide">{STORE_NAME}</span>
          )}
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
