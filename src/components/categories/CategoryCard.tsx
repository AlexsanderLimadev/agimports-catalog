import { Link } from "@tanstack/react-router";
import type { Category } from "@/data/categories";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to="/catalogo"
      search={{ categoria: category.slug }}
      className="group relative flex flex-col justify-end overflow-hidden rounded-xl border border-border bg-background-2 transition-colors duration-300 hover:border-foreground/25"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
        {category.image ? (
          <img
            src={category.image}
            alt={category.name}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className="flex size-full items-center justify-center"
            role="img"
            aria-label={`Imagem pendente — ${category.name}`}
          >
            <span className="label-xs text-muted-foreground/70">Imagem pendente</span>
          </div>
        )}
      </div>
      <div className="border-t border-border p-4">
        <h3 className="text-sm">{category.name}</h3>
        <p className="mt-1 truncate text-xs text-muted-foreground">{category.description}</p>
      </div>
    </Link>
  );
}
