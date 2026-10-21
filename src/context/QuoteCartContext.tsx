import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export type CartItem = {
  product: Product;
  size?: string | undefined;
  quantity: number;
};

interface QuoteCartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, size?: string | undefined, openDrawer?: boolean) => void;
  removeItem: (productId: string, size?: string | undefined) => void;
  updateQuantity: (productId: string, size: string | undefined, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalEstimatedPrice: number;
  hasConsultationItems: boolean;
  getWhatsAppCheckoutUrl: () => string;
}

const STORAGE_KEY = "ag-imports:quote-cart";

const QuoteCartContext = createContext<QuoteCartContextType | undefined>(undefined);

export function QuoteCartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignora falha de localStorage em modo anônimo estrito
    }
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  const addItem = (product: Product, size?: string | undefined, openDrawer = true) => {
    setItems((prev) => {
      const index = prev.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      if (index > -1) {
        const current = prev[index];
        if (!current) return prev;
        const next: CartItem[] = [...prev];
        next[index] = {
          product: current.product,
          size: current.size,
          quantity: current.quantity + 1,
        };
        return next;
      }
      const newItem: CartItem = { product, size, quantity: 1 };
      return [...prev, newItem];
    });

    if (openDrawer) {
      setIsOpen(true);
    }
  };

  const removeItem = (productId: string, size?: string | undefined) => {
    setItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.size === size))
    );
  };

  const updateQuantity = (productId: string, size: string | undefined, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, size);
      return;
    }
    setItems((prev) =>
      prev.map((item) => {
        if (item.product.id === productId && item.size === size) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = useMemo(
    () => items.reduce((acc, item) => acc + item.quantity, 0),
    [items]
  );

  const totalEstimatedPrice = useMemo(() => {
    return items.reduce((acc, item) => {
      if (item.product.price !== null) {
        return acc + item.product.price * item.quantity;
      }
      return acc;
    }, 0);
  }, [items]);

  const hasConsultationItems = useMemo(() => {
    return items.some((item) => item.product.price === null);
  }, [items]);

  const getWhatsAppCheckoutUrl = () => {
    if (items.length === 0) {
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Olá, AG Imports! Gostaria de tirar uma dúvida sobre o catálogo."
      )}`;
    }

    let text = "Olá, AG Imports! Montei minha seleção de peças no site e gostaria de confirmar disponibilidade e cotação:\n\n";

    items.forEach((item, index) => {
      const sizeStr = item.size ? ` (Tamanho: ${item.size})` : "";
      const qtyStr = item.quantity > 1 ? ` • Qtd: ${item.quantity}` : "";
      const priceStr =
        item.product.price !== null
          ? formatPrice(item.product.price * item.quantity)
          : "Preço sob consulta";

      text += `${index + 1}. *${item.product.name}* [${item.product.brand}]${sizeStr}${qtyStr} — ${priceStr}\n`;
    });

    text += "\n";
    if (totalEstimatedPrice > 0) {
      text += `💰 *Subtotal estimado:* ${formatPrice(totalEstimatedPrice)}`;
      if (hasConsultationItems) {
        text += " (+ itens sob consulta)";
      }
      text += "\n";
    } else {
      text += "💰 *Valor:* Sob consulta\n";
    }

    text += "\nPoderia me informar as condições de envio e confirmação?";

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <QuoteCartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalEstimatedPrice,
        hasConsultationItems,
        getWhatsAppCheckoutUrl,
      }}
    >
      {children}
    </QuoteCartContext.Provider>
  );
}

export function useQuoteCart() {
  const context = useContext(QuoteCartContext);
  if (!context) {
    throw new Error("useQuoteCart must be used within a QuoteCartProvider");
  }
  return context;
}
