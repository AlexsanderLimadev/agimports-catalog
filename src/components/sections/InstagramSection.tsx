import { Container } from "@/components/ui/Container";
import { ActionAnchor } from "@/components/ui/ActionLink";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/constants";

/**
 * Galeria preparada para receber as imagens reais do Instagram.
 * Substitua os slots por <img src="/brand/instagram-1.webp" ... /> quando
 * as imagens oficiais estiverem disponíveis.
 */
export function InstagramSection() {
  return (
    <section className="border-t border-border py-20 md:py-32">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <h2 className="text-editorial text-3xl sm:text-4xl">Siga a AG Imports</h2>
          <p className="label-xs mt-4 text-muted-foreground">{INSTAGRAM_HANDLE}</p>
          <p className="mt-6 max-w-sm text-sm text-muted-foreground">
            Acompanhe novidades, produtos e lançamentos no nosso Instagram.
          </p>
          <div className="mt-8">
            <ActionAnchor href={INSTAGRAM_URL}>Ver Instagram</ActionAnchor>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              role="img"
              aria-label="Publicação do Instagram — imagem pendente"
              className="flex aspect-square items-center justify-center rounded-xl border border-border bg-surface"
            >
              <span className="label-xs text-muted-foreground/70">Pendente</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
