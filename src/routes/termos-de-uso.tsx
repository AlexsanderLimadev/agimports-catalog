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
        <p>Este site é destinado a maiores de 18 anos. Bem-vindo ao catálogo digital da {STORE_NAME}. Ao acessar e utilizar este site, você concorda com os seguintes termos e condições.</p>
        
        <h2 className="text-lg text-foreground font-medium mt-10">1. Natureza do Catálogo</h2>
        <p>Este site atua estritamente como uma vitrine e catálogo digital. <strong>Não realizamos vendas, pagamentos ou reservas de produtos diretamente no site.</strong> Toda negociação, confirmação de estoque, precificação final e pagamento ocorrem de forma privada nos nossos canais de atendimento oficiais (WhatsApp).</p>

        <h2 className="text-lg text-foreground font-medium mt-10">2. Preços e Disponibilidade</h2>
        <p>Os preços e disponibilidades exibidos no catálogo têm caráter informativo e podem sofrer alterações sem aviso prévio devido a variações cambiais e rotatividade de estoque. A garantia de preço e disponibilidade é dada apenas no momento do atendimento e finalização do pedido no WhatsApp.</p>

        <h2 className="text-lg text-foreground font-medium mt-10">3. Produtos Importados e Autenticidade</h2>
        <p>A {STORE_NAME} informa a procedência de cada peça no atendimento, antes da compra, e fornece o comprovante fiscal da venda. Se você tiver dúvida sobre a origem de um item, pergunte antes de comprar. Garantia legal, trocas e devoluções seguem o Código de Defesa do Consumidor (Lei 8.078/1990).</p>
        <h2 className="text-lg text-foreground font-medium mt-10">3.1 Direito de arrependimento</h2>
        <p>Como a compra é feita à distância (WhatsApp), você pode desistir em até 7 dias corridos a contar do recebimento do produto, sem precisar justificar, conforme o art. 49 do Código de Defesa do Consumidor. Os valores pagos são devolvidos de imediato e atualizados. Para exercer o direito, fale conosco pelos canais de atendimento.</p>

        <h2 className="text-lg text-foreground font-medium mt-10">4. Propriedade Intelectual</h2>
        <p>Os textos do site pertencem à {STORE_NAME}. As imagens são usadas para identificar os produtos à venda. É proibida a reprodução sem autorização prévia. As marcas dos produtos expostos (grifes) pertencem aos seus respectivos detentores de direitos.</p>
      </div>
    </Container>
  );
}
