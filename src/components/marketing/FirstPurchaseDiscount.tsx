import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import heroImage from "@/assets/hero-editorial.jpg";
import {
  FIRST_PURCHASE_DISCOUNT_CODE,
  FIRST_PURCHASE_DISCOUNT_PERCENT,
  FIRST_PURCHASE_DISCOUNT_STORAGE_KEY,
  STORE_NAME,
} from "@/lib/constants";
import { DISCOUNT_WHATSAPP_URL } from "@/lib/whatsapp";

const SHOW_DELAY_MS = 1200;

/**
 * Popup de boas-vindas com cupom de primeira compra. Aparece uma vez por
 * navegador (localStorage) — quem já viu não é interrompido de novo.
 * Como o site não tem carrinho/checkout, o cupom funciona por combinação
 * manual: a pessoa copia o código e manda pro WhatsApp junto do pedido.
 */
export function FirstPurchaseDiscount() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let alreadySeen = false;
    try {
      alreadySeen = window.localStorage.getItem(FIRST_PURCHASE_DISCOUNT_STORAGE_KEY) === "1";
    } catch {
      // localStorage indisponível (modo privado etc.) — trata como "nunca visto".
    }
    if (alreadySeen) return;

    const timer = window.setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      try {
        window.localStorage.setItem(FIRST_PURCHASE_DISCOUNT_STORAGE_KEY, "1");
      } catch {
        // sem localStorage, sem problema — só volta a aparecer na próxima visita.
      }
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(FIRST_PURCHASE_DISCOUNT_CODE);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard indisponível — o código já está visível na tela pra copiar manualmente.
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="grid max-w-3xl gap-0 overflow-hidden p-0 sm:rounded-none md:grid-cols-2">
        <DialogTitle className="sr-only">
          {FIRST_PURCHASE_DISCOUNT_PERCENT}% de desconto na primeira compra {STORE_NAME}
        </DialogTitle>

        <div className="hidden md:block">
          <img src={heroImage} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="flex flex-col justify-center gap-6 p-8 sm:p-10">
          <div className="space-y-2">
            <p className="label-xs text-muted-foreground">Bem-vindo(a) à {STORE_NAME}</p>
            <h2 className="text-editorial text-3xl leading-tight">
              Você ganhou {FIRST_PURCHASE_DISCOUNT_PERCENT}% OFF
            </h2>
            <p className="text-sm text-muted-foreground">
              No seu primeiro pedido. Copie o código abaixo e mande junto com sua mensagem no
              WhatsApp.
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center justify-between border border-dashed border-border px-4 py-3 text-left transition-colors hover:border-foreground/40"
          >
            <span className="font-mono text-base tracking-widest">
              {FIRST_PURCHASE_DISCOUNT_CODE}
            </span>
            {copied ? (
              <Check className="h-4 w-4 shrink-0 text-foreground" />
            ) : (
              <Copy className="h-4 w-4 shrink-0 text-muted-foreground" />
            )}
          </button>

          <a
            href={DISCOUNT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleOpenChange(false)}
            className="label-xs flex h-11 items-center justify-center bg-foreground text-background transition-opacity hover:opacity-90"
          >
            Falar no WhatsApp com o cupom
          </a>

          <p className="text-xs text-muted-foreground">
            Válido para o primeiro pedido por cliente. Consulte condições pelo WhatsApp.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
