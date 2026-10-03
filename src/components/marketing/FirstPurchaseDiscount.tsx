import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import heroImage from "@/assets/hero-editorial.jpg";
import { FIRST_PURCHASE_DISCOUNT_STORAGE_KEY, STORE_NAME } from "@/lib/constants";
import { GENERAL_WHATSAPP_URL } from "@/lib/whatsapp";

const SHOW_DELAY_MS = 2500;

/**
 * Popup de boas-vindas que convida o visitante a entrar na lista VIP do WhatsApp.
 * Aparece uma vez por navegador (localStorage).
 */
export function FirstPurchaseDiscount() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let alreadySeen = false;
    try {
      alreadySeen = window.localStorage.getItem(FIRST_PURCHASE_DISCOUNT_STORAGE_KEY) === "1";
    } catch {
      // localStorage indisponível — trata como nunca visto.
    }
    if (alreadySeen) return;

    const timer = window.setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  function close() {
    setOpen(false);
    try {
      window.localStorage.setItem(FIRST_PURCHASE_DISCOUNT_STORAGE_KEY, "1");
    } catch { /* sem problema */ }
  }

  return (
    <Dialog open={open} onOpenChange={(next) => { if (!next) close(); }}>
      <DialogContent className="grid max-w-2xl gap-0 overflow-hidden p-0 sm:rounded-none md:grid-cols-2">
        <DialogTitle className="sr-only">
          Acesso antecipado às novidades — {STORE_NAME}
        </DialogTitle>

        {/* Imagem editorial */}
        <div className="hidden md:block">
          <img src={heroImage} alt="" className="h-full w-full object-cover" />
        </div>

        {/* Conteúdo */}
        <div className="relative flex flex-col justify-center gap-7 p-8 sm:p-10">
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute right-4 top-4 text-muted-foreground/50 transition-colors hover:text-foreground"
          >
            <X className="size-4" strokeWidth={1.5} />
          </button>

          <div className="space-y-3">
            <p className="label-xs text-muted-foreground/60">{STORE_NAME}</p>
            <h2 className="text-editorial text-3xl leading-tight">
              Acesso antecipado às novidades
            </h2>
            <p className="text-[13px] font-light leading-relaxed text-muted-foreground">
              Entre para nossa lista VIP no WhatsApp e receba lançamentos, peças exclusivas e
              ofertas antes de todo mundo.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href={GENERAL_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="label-xs flex h-11 w-full items-center justify-center bg-foreground text-background transition-opacity hover:opacity-85"
            >
              Entrar na lista VIP
            </a>
            <button
              type="button"
              onClick={close}
              className="label-xs w-full text-muted-foreground/50 transition-colors hover:text-muted-foreground"
            >
              Agora não
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
