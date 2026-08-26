import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/ui/Container";
import { ActionLink } from "@/components/ui/ActionLink";
import { STORE_NAME } from "@/lib/constants";

const description =
  "A AG Imports seleciona produtos importados para quem busca qualidade, autenticidade e uma experiência diferenciada.";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: `Sobre | ${STORE_NAME}` },
      { name: "description", content: description },
      { property: "og:title", content: `Sobre | ${STORE_NAME}` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Container className="py-16 md:py-24">
      <header className="border-b border-border pb-8">
        <p className="label-xs text-muted-foreground">Sobre</p>
        <h1 className="text-editorial mt-4 max-w-2xl text-4xl sm:text-5xl">
          Mais que importados.
        </h1>
      </header>

      <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-20">
        <p className="text-lg font-light leading-relaxed text-muted-foreground">{description}</p>
        <div className="space-y-8">
          <div className="border-t border-border pt-5">
            <h2 className="label-xs">Seleção</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Produtos cuidadosamente escolhidos para nossa coleção.
            </p>
          </div>
          <div className="border-t border-border pt-5">
            <h2 className="label-xs">Atendimento</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Atendimento próximo através dos nossos canais oficiais.
            </p>
          </div>
          <div className="border-t border-border pt-5">
            <h2 className="label-xs">Informações</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Detalhes de autenticidade e envio são informados diretamente pela loja.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <ActionLink to="/catalogo">Ver catálogo</ActionLink>
      </div>
    </Container>
  );
}
