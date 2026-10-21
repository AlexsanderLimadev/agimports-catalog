import { useState } from "react";
import { MessageCircle, ShoppingBag, Share2, Check } from "lucide-react";
import { ProductDetails } from "./ProductDetails";
import { formatPrice } from "@/lib/format";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { useQuoteCart } from "@/context/QuoteCartContext";
import type { Product } from "@/data/products";

export function ProductInfo({
  product,
  category,
}: {
  product: Product;
  category?: string | undefined;
}) {
  const { addItem } = useQuoteCart();
  const [copied, setCopied] = useState(false);

  // Determina as opções de tamanho com base na categoria
  const sizes = (() => {
    if (product.size) return [product.size];
    const cat = product.category.toLowerCase();
    if (cat === "tenis" || cat === "birkenstocks") {
      return ["38", "39", "40", "41", "42", "43", "44"];
    }
    if (
      cat === "amiri" ||
      cat === "off-white" ||
      cat === "polo-ralph-lauren" ||
      cat === "f1" ||
      cat === "casa-blanca" ||
      cat === "vilebrequin" ||
      cat === "feminino"
    ) {
      return ["P", "M", "G", "GG"];
    }
    if (cat === "bones" || cat === "bolsas-femininas" || cat === "oculos-blue-blocker" || cat === "acessorios") {
      return ["Único"];
    }
    return ["Único"];
  })();

  const [selectedSize, setSelectedSize] = useState<string>(sizes[0] || "Único");

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `${product.name} | AG Imports`,
          text: `Confira ${product.name} na AG Imports`,
          url,
        });
        return;
      } catch {
        // Usuário cancelou ou navegador não suportou
      }
    }

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="lg:sticky lg:top-24 lg:self-start space-y-8">
      {/* Marca e Nome */}
      <div>
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-500">
          {product.brand}
        </p>
        <h1 className="mt-3 text-3xl font-light tracking-tight text-zinc-100 sm:text-4xl">
          {product.name}
        </h1>

        <div className="mt-4 flex items-baseline gap-4">
          <p className="text-2xl font-light text-zinc-200">
            {product.price === null ? (
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Preço sob consulta
              </span>
            ) : (
              formatPrice(product.price)
            )}
          </p>

          <span
            className={`text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 border ${
              product.available
                ? "border-emerald-500/20 text-emerald-400 bg-emerald-500/5"
                : "border-zinc-800 text-zinc-500 bg-zinc-900"
            }`}
          >
            {product.available ? "Disponível" : "Esgotado"}
          </span>
        </div>
      </div>

      {/* Descrição */}
      {product.description ? (
        <p className="max-w-prose text-sm font-light leading-relaxed text-zinc-400">
          {product.description}
        </p>
      ) : null}

      {/* Seletor de Tamanho */}
      {sizes.length > 0 && sizes[0] !== "Único" && (
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between text-xs">
            <span className="uppercase tracking-[0.15em] text-zinc-400 text-[11px]">
              Selecione o Tamanho
            </span>
            <span className="font-medium text-zinc-200">{selectedSize}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => {
              const isSelected = selectedSize === size;
              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`h-10 min-w-10 px-3.5 text-xs uppercase tracking-wider transition-all duration-200 ${
                    isSelected
                      ? "bg-zinc-100 text-black font-medium"
                      : "border border-white/10 bg-transparent text-zinc-400 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Ações de Compra & Cotação */}
      <div className="space-y-3 pt-2">
        {/* Botão 1: Adicionar à Sacola de Cotação */}
        <button
          type="button"
          onClick={() => addItem(product, selectedSize)}
          className="flex h-12 w-full items-center justify-center gap-2.5 bg-zinc-100 text-black text-xs font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-90 active:scale-[0.99]"
        >
          <ShoppingBag className="size-4" strokeWidth={1.5} />
          Adicionar à Minha Seleção
        </button>

        {/* Botão 2: Consultar esta peça diretamente no WhatsApp */}
        <a
          href={getProductWhatsAppUrl(product, selectedSize)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-full items-center justify-center gap-2.5 border border-white/15 bg-transparent text-zinc-300 text-xs font-medium uppercase tracking-[0.18em] transition-all hover:border-white/40 hover:text-white"
        >
          <MessageCircle className="size-4" strokeWidth={1.5} />
          Consultar Esta Peça no WhatsApp
        </a>

        {/* Botão 3: Compartilhar */}
        <button
          type="button"
          onClick={handleShare}
          className="flex h-10 w-full items-center justify-center gap-2 text-zinc-500 text-[11px] uppercase tracking-[0.18em] transition-colors hover:text-zinc-300"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-emerald-400" strokeWidth={1.5} />
              <span className="text-emerald-400">Link copiado!</span>
            </>
          ) : (
            <>
              <Share2 className="size-3.5" strokeWidth={1.5} />
              <span>Compartilhar esta peça</span>
            </>
          )}
        </button>
      </div>

      {/* Detalhes Técnicos */}
      <div className="pt-4">
        <ProductDetails product={product} category={category} />
      </div>
    </div>
  );
}
