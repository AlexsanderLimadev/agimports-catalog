import { MessageCircle } from "lucide-react";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";

export function WhatsAppButton({ product, className }: { product: Product; className?: string }) {
  return (
    <a
      href={getProductWhatsAppUrl(product)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "label-xs inline-flex w-full items-center justify-center gap-2.5 bg-foreground px-6 py-4 text-background transition-opacity duration-200 hover:opacity-85 active:scale-[0.99]",
        className,
      )}
    >
      <MessageCircle aria-hidden="true" className="size-3.5" strokeWidth={1.5} />
      {product.available ? "Comprar pelo WhatsApp" : "Consultar disponibilidade"}
    </a>
  );
}
