import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { FirstPurchaseDiscount } from "@/components/marketing/FirstPurchaseDiscount";
import { SITE_URL } from "@/lib/constants";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[75vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="label-xs text-muted-foreground/60">404</p>
        <h1 className="text-editorial mt-4 text-4xl sm:text-5xl">Página não encontrada</h1>
        <p className="mt-4 text-[13px] font-light text-muted-foreground">
          O conteúdo que você procura foi movido, expirou ou não está mais disponível.
        </p>
        <div className="mt-8">
          <Link
            to="/catalogo"
            className="label-xs inline-block border-b border-foreground/50 pb-1 text-foreground transition-opacity hover:opacity-75"
          >
            Explorar catálogo →
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-[75vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="label-xs text-muted-foreground/60">Erro</p>
        <h1 className="text-editorial mt-4 text-3xl sm:text-4xl">
          Algo não carregou corretamente
        </h1>
        <p className="mt-4 text-[13px] font-light text-muted-foreground">
          Tivemos um imprevisto ao exibir esta página. Você pode recarregar ou voltar ao início.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="label-xs border-b border-foreground/50 pb-1 text-foreground transition-opacity hover:opacity-75"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="label-xs border-b border-border pb-1 text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
          >
            Página inicial
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AG Imports" },
      {
        name: "description",
        content: "Catálogo premium de produtos importados selecionados pela AG Imports.",
      },
      { property: "og:site_name", content: "AG Imports" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL || "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Cormorant+Garamond:wght@300;400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { CookieBanner } from "@/components/layout/CookieBanner";
import { GoogleAnalytics } from "@/components/layout/GoogleAnalytics";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <FirstPurchaseDiscount />
        <CookieBanner />
        <GoogleAnalytics />
      </div>
    </QueryClientProvider>
  );
}
