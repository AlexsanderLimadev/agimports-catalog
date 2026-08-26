import { MessageCircle } from "lucide-react";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";

export function WhatsAppButton({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  return (
    <a
      href={getProductWhatsAppUrl(product)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "label-xs inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-primary-foreground transition-all duration-200 hover:bg-primary/85 active:scale-[0.99]",
        className,
      )}
    >
      <MessageCircle aria-hidden="true" className="size-4" />
      {product.available ? "Comprar pelo WhatsApp" : "Consultar disponibilidade"}
    </a>
  );
}
