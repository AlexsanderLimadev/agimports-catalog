import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import { COOKIE_CONSENT_STORAGE_KEY, GA_MEASUREMENT_ID } from "@/lib/constants";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function GoogleAnalytics() {
  const router = useRouter();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const initGA = () => {
      // Se já foi inicializado, ignora
      if (window.gtag) return;

      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
      });
    };

    const checkConsentAndInit = () => {
      const consent = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
      if (consent === "accepted") {
        initGA();
      }
    };

    // Verifica no primeiro load
    checkConsentAndInit();

    // Fica escutando caso o usuário aceite os cookies na sessão atual
    window.addEventListener("cookie-consent-updated", initGA);
    return () => window.removeEventListener("cookie-consent-updated", initGA);
  }, []);

  // Rastrea mudanças de rota após a inicialização
  useEffect(() => {
    const unsubscribe = router.subscribe("onResolved", () => {
      const consent = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
      if (consent === "accepted" && window.gtag && GA_MEASUREMENT_ID) {
        window.gtag("config", GA_MEASUREMENT_ID, {
          page_path: window.location.pathname,
        });
      }
    });
    return unsubscribe;
  }, [router]);

  return null;
}
