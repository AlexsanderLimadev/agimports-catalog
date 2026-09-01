import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/ui/Container";
import { STORE_NAME, COOKIE_CONSENT_STORAGE_KEY } from "@/lib/constants";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: `Política de Cookies | ${STORE_NAME}` },
      { name: "description", content: "Nossa política de cookies e rastreamento." },
    ],
  }),
  component: PoliticaCookiesPage,
});

function PoliticaCookiesPage() {
  const [consentStatus, setConsentStatus] = useState<string | null>(null);

  useEffect(() => {
    setConsentStatus(window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY));
  }, []);

  const clearConsent = () => {
    window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
    window.location.reload();
  };

  return (
    <Container className="py-16 md:py-24">
      <header className="border-b border-border pb-8">
        <p className="label-xs text-muted-foreground">Legal</p>
        <h1 className="text-editorial mt-4 max-w-2xl text-4xl sm:text-5xl">Política de Cookies</h1>
        <p className="mt-4 text-sm text-muted-foreground">Última atualização: Setembro de 2026</p>
      </header>

      <div className="prose prose-invert mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <p>Um cookie é um pequeno arquivo de texto salvo no seu computador ou dispositivo móvel ao visitar o nosso site.</p>

        <h2 className="text-lg text-foreground font-medium mt-10">Quais cookies utilizamos?</h2>
        <p>A {STORE_NAME} utiliza dois tipos principais de cookies:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Cookies Essenciais:</strong> Necessários para que o site funcione corretamente. Eles salvam, por exemplo, o fato de você já ter visto o popup promocional ou se já respondeu ao nosso banner de cookies. Não podem ser desativados.</li>
          <li><strong>Cookies de Análise (Google Analytics 4):</strong> Permitem coletar dados anônimos sobre como os visitantes utilizam nosso catálogo (quais marcas são mais acessadas, origem do tráfego). Esses cookies <strong>só são ativados</strong> com o seu consentimento explícito.</li>
        </ul>

        <h2 className="text-lg text-foreground font-medium mt-10">Seu Consentimento Atual</h2>
        <div className="rounded-xl border border-border bg-background-2 p-6 mt-4">
          <p className="mb-4">
            Status atual: <strong>{consentStatus === "accepted" ? "Aceitos" : consentStatus === "rejected" ? "Recusados" : "Não definido"}</strong>
          </p>
          <button 
            onClick={clearConsent}
            className="label-xs rounded-xl border border-border px-4 py-2 transition-colors hover:bg-surface-2"
          >
            Redefinir Preferências
          </button>
        </div>
      </div>
    </Container>
  );
}
