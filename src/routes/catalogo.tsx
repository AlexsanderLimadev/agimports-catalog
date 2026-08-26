import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ChipRow } from "@/components/products/ProductFilters";
import { ProductGrid } from "@/components/products/ProductGrid";
import { products as allProducts, getBrands } from "@/data/products";
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
      search: { categoria: "todos", marca: "todas", filtro: "todos", ordem: "destaques", busca: "" },
    });

  return (
    <Container className="py-12 md:py-20">
      <header className="border-b border-border pb-8">
        <p className="label-xs text-muted-foreground">Coleção</p>
        <h1 className="text-editorial mt-4 text-5xl sm:text-6xl">Catálogo</h1>
        <p className="mt-4 max-w-md text-sm text-muted-foreground">
          Explore nossa seleção de produtos importados.
        </p>
      </header>

      <div className="mt-8 space-y-7">
        <div className="relative max-w-sm">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="search"
            value={search.busca}
            onChange={(event) => set({ busca: event.target.value })}
            placeholder="Buscar produto..."
            aria-label="Buscar produto"
            className="w-full rounded-xl border border-border bg-background-2 py-3 pl-11 pr-4 text-sm placeholder:text-muted-foreground focus:border-foreground/40 focus:outline-none"
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

        <div className="grid gap-7 md:grid-cols-2">
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

      <div className="mt-12">
        {list.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-border py-24 text-center">
            <h2 className="label-xs">Nenhum produto encontrado</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Tente alterar sua busca ou categoria.
            </p>
            {hasFilters ? (
              <button
                type="button"
                onClick={clear}
                className="label-xs mt-8 rounded-xl border border-border px-6 py-3 transition-colors hover:border-foreground/50"
              >
                Limpar filtros
              </button>
            ) : null}
          </div>
        ) : (
          <>
            <p className="label-xs mb-6 text-muted-foreground">
              {list.length} {list.length === 1 ? "produto" : "produtos"}
            </p>
            <ProductGrid products={list} priorityCount={4} />
          </>
        )}
      </div>
    </Container>
  );
}
