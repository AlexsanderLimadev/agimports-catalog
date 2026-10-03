import { CategoryCard } from "./CategoryCard";
import { categories, hasValidCategoryImage } from "@/data/categories";

export function CategoryGrid() {
  // Filtro estrito: renderiza APENAS categorias que possuem imagem válida cadastrada
  const validCategories = categories.filter(hasValidCategoryImage);

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12 md:grid-cols-3 lg:grid-cols-4">
      {validCategories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}

