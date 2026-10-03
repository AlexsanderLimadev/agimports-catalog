import { Link } from "@tanstack/react-router";
import type { Category } from "@/data/categories";

export function CategoryCard({ category }: { category: Category }) {
  if (!category.image) return null;

  return (
    <Link
      to="/catalogo"
      search={{ categoria: category.slug }}
      className="group block w-full"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#09090b]">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>

      <div className="mt-3.5 space-y-1">
        <h3 className="text-[12px] font-medium uppercase tracking-[0.2em] text-zinc-200 transition-colors duration-300 group-hover:text-white">
          {category.name}
        </h3>
        <p className="truncate text-[12px] font-light text-zinc-500">
          {category.description}
        </p>
      </div>
    </Link>
  );
}

