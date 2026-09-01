import { Link } from "@tanstack/react-router";
import { Container } from "@/components/ui/Container";
import { INSTAGRAM_URL, NAV_LINKS, STORE_NAME } from "@/lib/constants";
import { GENERAL_WHATSAPP_URL } from "@/lib/whatsapp";
import mark from "@/assets/ag-imports-mark.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <Container className="grid gap-12 py-16 md:grid-cols-[minmax(0,1fr)_auto]">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <img src={mark} alt="" aria-hidden className="h-9 w-auto brightness-0 invert" />
            <span className="text-editorial text-xl leading-none tracking-wide">{STORE_NAME}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Produtos selecionados.
            <br />
            Experiências que vão além.
          </p>
        </div>

        <nav className="flex flex-col gap-3 md:items-end">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="label-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="label-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Instagram
          </a>
          <a
            href={GENERAL_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="label-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            WhatsApp
          </a>
        </nav>
      </Container>

      <Container className="flex flex-col-reverse justify-between gap-4 border-t border-border py-6 sm:flex-row sm:items-center">
        <p className="label-xs text-muted-foreground">© 2026 {STORE_NAME}</p>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          <Link to="/termos-de-uso" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            Termos de Uso
          </Link>
          <Link to="/politica-de-privacidade" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            Privacidade
          </Link>
          <Link to="/politica-de-cookies" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            Cookies
          </Link>
        </div>
      </Container>
    </footer>
  );
}
