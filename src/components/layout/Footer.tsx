import { Link } from "@tanstack/react-router";
import { Container } from "@/components/ui/Container";
import { INSTAGRAM_URL, NAV_LINKS, STORE_NAME } from "@/lib/constants";
import { GENERAL_WHATSAPP_URL } from "@/lib/whatsapp";
import logoAsset from "@/assets/ag-imports-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <Container className="grid gap-12 py-16 md:grid-cols-[minmax(0,1fr)_auto]">
        <div className="min-w-0">
          <img
            src={logoAsset.url}
            alt="AG Imports"
            className="h-12 w-auto brightness-0 invert"
          />
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

      <Container className="border-t border-border py-6">
        <p className="label-xs text-muted-foreground">© 2026 {STORE_NAME}</p>
      </Container>
    </footer>
  );
}
