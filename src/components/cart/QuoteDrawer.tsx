import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle, ArrowRight } from "lucide-react";
import { useQuoteCart } from "@/context/QuoteCartContext";
import { formatPrice } from "@/lib/format";

export function QuoteDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalEstimatedPrice,
    hasConsultationItems,
    getWhatsAppCheckoutUrl,
  } = useQuoteCart();

  // Trava o scroll da página enquanto o drawer estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Painel lateral */}
      <aside
        role="dialog"
        aria-label="Sacola de Cotação"
        aria-modal="true"
        className="relative z-50 flex h-full w-full max-w-md flex-col border-l border-white/[0.08] bg-[#09090b] text-zinc-100 shadow-2xl animate-in slide-in-from-right duration-300"
      >
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b border-white/[0.08] px-6">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="size-4 text-zinc-400" strokeWidth={1.5} />
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-200">
              Minha Seleção
            </span>
            <span className="text-[11px] font-light text-zinc-500">
              ({totalItems} {totalItems === 1 ? "peça" : "peças"})
            </span>
          </div>

          <button
            type="button"
            onClick={closeCart}
            aria-label="Fechar sacola"
            className="p-1.5 text-zinc-400 transition-colors hover:text-white"
          >
            <X className="size-5" strokeWidth={1.5} />
          </button>
        </header>

        {/* Conteúdo / Lista */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex size-14 items-center justify-center border border-white/10 bg-white/[0.02]">
                <ShoppingBag className="size-6 text-zinc-600" strokeWidth={1.2} />
              </div>
              <h3 className="mt-5 text-sm font-normal tracking-wide text-zinc-300">
                Sua sacola está vazia
              </h3>
              <p className="mt-2 max-w-xs text-xs font-light leading-relaxed text-zinc-500">
                Navegue pelo catálogo e adicione as peças e tamanhos que você deseja cotar com nosso atendimento.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 inline-flex items-center gap-2 border-b border-white/40 pb-1 text-xs uppercase tracking-[0.2em] text-zinc-200 transition-colors hover:border-white hover:text-white"
              >
                Explorar catálogo
                <ArrowRight className="size-3.5" />
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-white/[0.06]">
              {items.map((item) => {
                const itemKey = `${item.product.id}-${item.size || "nosize"}`;
                const itemImage = item.product.images[0];
                return (
                  <li key={itemKey} className="flex gap-4 py-4">
                    {/* Miniatura 3:4 */}
                    <div className="relative aspect-[3/4] w-20 shrink-0 overflow-hidden bg-black border border-white/[0.06]">
                      {itemImage ? (
                        <img
                          src={itemImage}
                          alt={item.product.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-[9px] text-zinc-600">
                          Sem foto
                        </div>
                      )}
                    </div>

                    {/* Detalhes do item */}
                    <div className="flex flex-1 flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-500 truncate">
                            {item.product.brand}
                          </p>
                          <button
                            type="button"
                            onClick={() => removeItem(item.product.id, item.size)}
                            aria-label={`Remover ${item.product.name}`}
                            className="text-zinc-600 transition-colors hover:text-red-400"
                          >
                            <Trash2 className="size-3.5" strokeWidth={1.5} />
                          </button>
                        </div>

                        <h4 className="mt-1 text-xs font-normal tracking-tight text-zinc-200 truncate">
                          {item.product.name}
                        </h4>

                        {item.size ? (
                          <p className="mt-1 text-[11px] font-light text-zinc-400">
                            Tamanho: <span className="font-medium text-zinc-200">{item.size}</span>
                          </p>
                        ) : null}
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        {/* Controles de Quantidade */}
                        <div className="flex items-center border border-white/10 bg-white/[0.02]">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                            className="p-1.5 text-zinc-400 transition-colors hover:text-white"
                            aria-label="Diminuir quantidade"
                          >
                            <Minus className="size-3" strokeWidth={1.5} />
                          </button>
                          <span className="w-6 text-center text-xs font-light text-zinc-200">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                            className="p-1.5 text-zinc-400 transition-colors hover:text-white"
                            aria-label="Aumentar quantidade"
                          >
                            <Plus className="size-3" strokeWidth={1.5} />
                          </button>
                        </div>

                        {/* Preço */}
                        <p className="text-xs font-light text-zinc-300">
                          {item.product.price !== null ? (
                            formatPrice(item.product.price * item.quantity)
                          ) : (
                            <span className="text-[10px] uppercase tracking-wider text-zinc-500">
                              Sob consulta
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Rodapé / Ações */}
        {items.length > 0 && (
          <footer className="border-t border-white/[0.08] bg-black/60 p-6 backdrop-blur-md">
            <div className="space-y-1.5 pb-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Estimativa do Pedido</span>
                <span className="text-sm font-medium text-zinc-100">
                  {totalEstimatedPrice > 0 ? formatPrice(totalEstimatedPrice) : "Sob consulta"}
                </span>
              </div>
              {hasConsultationItems && totalEstimatedPrice > 0 ? (
                <p className="text-[10px] text-zinc-500">
                  * Contém peças com valor sob consulta
                </p>
              ) : null}
              <p className="text-[11px] font-light text-zinc-500 leading-tight">
                Disponibilidade e frete confirmados diretamente no WhatsApp.
              </p>
            </div>

            <div className="space-y-2.5">
              <a
                href={getWhatsAppCheckoutUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeCart}
                className="flex h-12 w-full items-center justify-center gap-2 bg-zinc-100 text-black text-xs font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-90 active:scale-[0.99]"
              >
                <MessageCircle className="size-4" strokeWidth={1.5} />
                Pedir Cotação via WhatsApp
              </a>

              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-[10px] uppercase tracking-wider text-zinc-600 transition-colors hover:text-zinc-400"
                >
                  Limpar seleção
                </button>
                <button
                  type="button"
                  onClick={closeCart}
                  className="text-[10px] uppercase tracking-wider text-zinc-400 transition-colors hover:text-zinc-200"
                >
                  Continuar navegando
                </button>
              </div>
            </div>
          </footer>
        )}
      </aside>
    </div>
  );
}
