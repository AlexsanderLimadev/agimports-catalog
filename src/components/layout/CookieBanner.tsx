import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { COOKIE_CONSENT_STORAGE_KEY } from "@/lib/constants";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Evita erro de hidratação e só checa no client-side
    const consent = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleConsent = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
    setShow(false);
    
    // Se aceitar, dispara um evento para que o script do GA4 seja carregado imediatamente na mesma sessão
    if (value === "accepted") {
      window.dispatchEvent(new Event("cookie-consent-updated"));
    }
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-5 duration-500 border-t border-border bg-background p-4 shadow-2xl sm:p-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-sm text-muted-foreground sm:max-w-2xl">
          Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para melhorar e personalizar sua experiência.
          Ao continuar navegando, você concorda com a nossa{" "}
          <Link to="/politica-de-privacidade" className="text-foreground underline underline-offset-2 hover:text-foreground/80">Política de Privacidade</Link> e{" "}
          <Link to="/politica-de-cookies" className="text-foreground underline underline-offset-2 hover:text-foreground/80">Política de Cookies</Link>.
        </div>
        <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
          <button
            type="button"
            onClick={() => handleConsent("rejected")}
            className="label-xs rounded-xl border border-border bg-background px-6 py-3 transition-colors hover:bg-surface-2"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => handleConsent("accepted")}
            className="label-xs rounded-xl bg-foreground px-6 py-3 text-background transition-opacity hover:opacity-90"
          >
            Aceitar Todos
          </button>
        </div>
      </div>
    </div>
  );
}
