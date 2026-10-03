import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ChipRow } from "@/components/products/ProductFilters";
import { ProductGrid } from "@/components/products/ProductGrid";
import { visibleProducts as allProducts, getBrands } from "@/data/products";
import { categories } from "@/data/categories";
import { STORE_NAME } from "@/lib/constants";

const searchSchema = z.object({
  categoria: fallback(z.string(), "todos").default("todos"),
  marca: fallback(z.string(), "todas").default("todas"),
  filtro: fallback(z.string(), "todos").default("todos"),
  ordem: fallback(z.string(), "destaques").default("destaques"),
  busca: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/catalogo")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: `Catálogo | ${STORE_NAME}` },
      {
        name: "description",
        content: "Explore a seleção de produtos importados da AG Imports.",
      },
      { property: "og:title", content: `Catálogo | ${STORE_NAME}` },
      {
        property: "og:description",
        content: "Explore a seleção de produtos importados da AG Imports.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/catalogo" },
    ],
    links: [{ rel: "canonical", href: "/catalogo" }],
  }),
  component: CatalogPage,
});

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function CatalogPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const set = (patch: Record<string, string>) =>
    navigate({ search: (prev) => ({ ...prev, ...patch }) });

  const query = search.busca.trim().toLowerCase();

  let list = allProducts.filter((product) => {
    if (search.categoria !== "todos" && product.category !== search.categoria) return false;
    if (search.marca !== "todas" && slugify(product.brand) !== search.marca) return false;
    if (search.filtro === "disponiveis" && !product.available) return false;
    if (search.filtro === "novidades" && !product.isNew) return false;
    if (search.filtro === "destaques" && !product.featured) return false;
    if (query) {
      const haystack = [product.name, product.brand, product.category].join(" ").toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    return true;
  });

  list = [...list].sort((a, b) => {
    if (search.ordem === "menor-preco") return (a.price ?? Infinity) - (b.price ?? Infinity);
    if (search.ordem === "maior-preco") return (b.price ?? -Infinity) - (a.price ?? -Infinity);
    if (search.ordem === "recentes") return Number(b.isNew) - Number(a.isNew);
    return Number(b.featured) - Number(a.featured);
  });

  const hasFilters =
    search.categoria !== "todos" ||
    search.marca !== "todas" ||
    search.filtro !== "todos" ||
    query.length > 0;

  const clear = () =>
    navigate({
      search: {
        categoria: "todos",
        marca: "todas",
        filtro: "todos",
        ordem: "destaques",
        busca: "",
      },
    });

  return (
    <Container className="py-16 md:py-24">
      <header className="mb-12 border-b border-border pb-10">
        <p className="label-xs text-muted-foreground/50">Coleção</p>
        <h1 className="text-editorial mt-5 text-[clamp(2.5rem,6vw,4rem)] text-foreground">Catálogo</h1>
      </header>

      <div className="space-y-8">
        <div className="relative max-w-xs">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground/40"
          />
          <input
            type="search"
            value={search.busca}
            onChange={(event) => set({ busca: event.target.value })}
            placeholder="Buscar produto..."
            aria-label="Buscar produto"
            className="w-full border-b border-border bg-transparent py-2 pl-6 pr-3 text-[12px] text-foreground placeholder:text-muted-foreground/40 focus:border-foreground/30 focus:outline-none transition-colors duration-300"
          />
        </div>

        <ChipRow
          label="Categorias"
          value={search.categoria}
          onChange={(categoria) => set({ categoria })}
          chips={[
            { value: "todos", label: "Todos" },
            ...categories.map((c) => ({ value: c.slug, label: c.name })),
          ]}
        />

        <ChipRow
          label="Marca"
          value={search.marca}
          onChange={(marca) => set({ marca })}
          chips={[
            { value: "todas", label: "Todas" },
            ...getBrands().map((brand) => ({ value: slugify(brand), label: brand })),
          ]}
        />

        <div className="grid gap-8 md:grid-cols-2">
          <ChipRow
            label="Filtros"
            value={search.filtro}
            onChange={(filtro) => set({ filtro })}
            chips={[
              { value: "todos", label: "Todos" },
              { value: "disponiveis", label: "Disponíveis" },
              { value: "novidades", label: "Novidades" },
              { value: "destaques", label: "Destaques" },
            ]}
          />
          <ChipRow
            label="Ordenar"
            value={search.ordem}
            onChange={(ordem) => set({ ordem })}
            chips={[
              { value: "destaques", label: "Destaques" },
              { value: "recentes", label: "Mais recentes" },
              { value: "menor-preco", label: "Menor preço" },
              { value: "maior-preco", label: "Maior preço" },
            ]}
          />
        </div>
      </div>

      <div className="mt-16">
        {list.length === 0 ? (
          <div className="flex flex-col items-center justify-center border-t border-border py-28 text-center">
            <h2 className="label-xs text-muted-foreground/60">Nenhum produto encontrado</h2>
            <p className="mt-4 text-[12px] font-light text-muted-foreground/40">
              Tente alterar sua busca ou categoria.
            </p>
            {hasFilters ? (
              <button
                type="button"
                onClick={clear}
                className="label-xs mt-10 border-b border-border pb-px text-muted-foreground/60 transition-colors hover:border-foreground/30 hover:text-muted-foreground"
              >
                Limpar filtros
              </button>
            ) : null}
          </div>
        ) : (
          <>
            <p className="label-xs mb-10 text-muted-foreground/40">
              {list.length} {list.length === 1 ? "peça" : "peças"}
            </p>
            <ProductGrid products={list} priorityCount={4} />
          </>
        )}
      </div>
    </Container>
  );
}
