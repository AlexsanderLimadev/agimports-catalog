import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/ui/Container";
import { ActionLink } from "@/components/ui/ActionLink";
import { STORE_NAME } from "@/lib/constants";

const description =
  "A AG Imports é uma curadoria de produtos importados selecionados — moda, acessórios e fragrâncias de marcas internacionais, escolhidas uma a uma com critério de qualidade e autenticidade.";

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
      <header className="mb-16 border-b border-border pb-10">
        <p className="label-xs text-muted-foreground/50">Nossa história</p>
        <h1 className="text-editorial mt-5 max-w-2xl text-[clamp(2rem,5vw,3.5rem)]">
          Curadoria, autenticidade e atendimento próximo.
        </h1>
      </header>

      <div className="grid gap-16 md:grid-cols-2 md:gap-24">
        <div className="space-y-6">
          <p className="text-[15px] font-light leading-relaxed text-muted-foreground">
            A AG Imports nasceu de uma crença simples: você merece acesso a produtos importados de
            qualidade real — sem ter que navegar por sites complicados, pagar taxas surpresa ou
            arriscar autenticidade.
          </p>
          <p className="text-[15px] font-light leading-relaxed text-muted-foreground">
            Cada peça do nosso catálogo passa por uma seleção criteriosa: origem verificada,
            acabamento impecável e marcas que realmente valem o que cobram. Não trabalhamos com
            estoque genérico. Preferimos ter menos e ter o certo.
          </p>
          <p className="text-[15px] font-light leading-relaxed text-muted-foreground">
            O atendimento é sempre direto — você fala com quem escolheu o produto, recebe fotos
            reais, tira dúvidas e fecha com total transparência pelo WhatsApp.
          </p>
        </div>

        <div className="space-y-0 divide-y divide-border">
          {[
            {
              title: "Curadoria rigorosa",
              text: "Cada produto é escolhido individualmente. Sem atacado, sem reposição automática. Só o que passa no nosso critério de qualidade e estilo.",
            },
            {
              title: "Autenticidade garantida",
              text: "Trabalhamos apenas com marcas e origens verificadas. Toda informação de procedência é compartilhada abertamente no atendimento.",
            },
            {
              title: "Atendimento humano",
              text: "Você fala diretamente com a loja pelo WhatsApp. Nenhum bot, nenhum formulário. Respostas rápidas e atenção personalizada.",
            },
            {
              title: "Envio para todo o Brasil",
              text: "Enviamos para qualquer estado. As condições de frete e prazo são informadas no momento do pedido, com rastreamento completo.",
            },
          ].map((item) => (
            <div key={item.title} className="py-7">
              <h2 className="label-xs text-foreground/80">{item.title}</h2>
              <p className="mt-3 text-[13px] font-light leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-border pt-10">
        <ActionLink to="/catalogo">Explorar o catálogo</ActionLink>
      </div>
    </Container>
  );
}
