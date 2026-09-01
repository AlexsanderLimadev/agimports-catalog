import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/ui/Container";
import { STORE_NAME } from "@/lib/constants";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: `Termos de Uso | ${STORE_NAME}` },
      { name: "description", content: "Termos de uso e condições do serviço." },
    ],
  }),
  component: TermosUsoPage,
});

function TermosUsoPage() {
  return (
    <Container className="py-16 md:py-24">
      <header className="border-b border-border pb-8">
        <p className="label-xs text-muted-foreground">Legal</p>
        <h1 className="text-editorial mt-4 max-w-2xl text-4xl sm:text-5xl">Termos de Uso</h1>
        <p className="mt-4 text-sm text-muted-foreground">Última atualização: Setembro de 2026</p>
      </header>

      <div className="prose prose-invert mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <p>Bem-vindo ao catálogo digital da {STORE_NAME}. Ao acessar e utilizar este site, você concorda com os seguintes termos e condições.</p>
        
        <h2 className="text-lg text-foreground font-medium mt-10">1. Natureza do Catálogo</h2>
        <p>Este site atua estritamente como uma vitrine e catálogo digital. <strong>Não realizamos vendas, pagamentos ou reservas de produtos diretamente no site.</strong> Toda negociação, confirmação de estoque, precificação final e pagamento ocorrem de forma privada nos nossos canais de atendimento oficiais (WhatsApp).</p>

        <h2 className="text-lg text-foreground font-medium mt-10">2. Preços e Disponibilidade</h2>
        <p>Os preços e disponibilidades exibidos no catálogo têm caráter informativo e podem sofrer alterações sem aviso prévio devido a variações cambiais e rotatividade de estoque. A garantia de preço e disponibilidade é dada apenas no momento do atendimento e finalização do pedido no WhatsApp.</p>

        <h2 className="text-lg text-foreground font-medium mt-10">3. Produtos Importados e Autenticidade</h2>
        <p>A {STORE_NAME} trabalha apenas com fornecedores de confiança e garante a qualidade dos itens comercializados. Condições de garantia, troca e devoluções respeitam o Código de Defesa do Consumidor e são acordadas e detalhadas no momento da sua compra com nossos atendentes.</p>

        <h2 className="text-lg text-foreground font-medium mt-10">4. Propriedade Intelectual</h2>
        <p>As imagens exclusivas de campanha e textos pertencem à {STORE_NAME}. É proibida a reprodução sem autorização prévia. As marcas dos produtos expostos (grifes) pertencem aos seus respectivos detentores de direitos.</p>
      </div>
    </Container>
  );
}
