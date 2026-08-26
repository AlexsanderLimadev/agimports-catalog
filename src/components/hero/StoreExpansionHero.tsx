import heroImage from "@/assets/hero-editorial.jpg";
import { ScrollExpandMedia } from "@/components/ui/scroll-expansion-hero";
import { ActionLink } from "@/components/ui/ActionLink";
import { STORE_NAME } from "@/lib/constants";

/**
 * Hero da AG Imports usando o ScrollExpandMedia.
 * A mídia expande com o scroll; ao completar, o conteúdo da marca aparece.
 */
export function StoreExpansionHero() {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc={heroImage}
      bgImageSrc={heroImage}
      title="Importados Selecionados"
      date={STORE_NAME}
      scrollToExpand="Role para expandir"
      textBlend={false}
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="label-xs text-muted-foreground">A curadoria</p>
        <h2 className="text-editorial mt-5 text-2xl leading-snug sm:text-3xl">
          Peças e fragrâncias importadas escolhidas uma a uma — para quem valoriza o
          extraordinário.
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Cada item do catálogo passa por seleção própria: origem, autenticidade e acabamento.
          Sem estoque genérico, sem pressa — apenas o que vale a pena vestir e usar.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          O atendimento é direto pelo WhatsApp: você fala com quem escolhe os produtos, confere
          disponibilidade e recebe as fotos reais antes de fechar.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ActionLink to="/catalogo">Ver catálogo</ActionLink>
          <ActionLink to="/sobre" variant="secondary">
            Sobre a loja
          </ActionLink>
        </div>
      </div>
    </ScrollExpandMedia>
  );
}
