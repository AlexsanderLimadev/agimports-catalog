import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/ui/Container";
import { STORE_NAME } from "@/lib/constants";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: `Política de Privacidade | ${STORE_NAME}` },
      { name: "description", content: "Nossa política de privacidade e proteção de dados." },
    ],
  }),
  component: PoliticaPrivacidadePage,
});

function PoliticaPrivacidadePage() {
  return (
    <Container className="py-16 md:py-24">
      <header className="border-b border-border pb-8">
        <p className="label-xs text-muted-foreground">Legal</p>
        <h1 className="text-editorial mt-4 max-w-2xl text-4xl sm:text-5xl">Política de Privacidade</h1>
        <p className="mt-4 text-sm text-muted-foreground">Última atualização: Setembro de 2026</p>
      </header>

      <div className="prose prose-invert mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <p>A privacidade e a segurança dos seus dados são nossa prioridade. Esta política de privacidade descreve como a {STORE_NAME} coleta, usa e protege as suas informações pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD).</p>
        
        <h2 className="text-lg text-foreground font-medium mt-10">1. Coleta de Informações</h2>
        <p>Como nosso modelo de negócios opera sem carrinho de compras (pedidos diretamente no WhatsApp), coletamos apenas as informações estritamente necessárias para o seu atendimento, como seu número de telefone (quando você entra em contato), histórico de conversas para melhorar o suporte e dados básicos de navegação no site (Analytics).</p>

        <h2 className="text-lg text-foreground font-medium mt-10">2. Uso das Informações</h2>
        <p>As informações coletadas são utilizadas exclusivamente para:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Prestar atendimento personalizado através do WhatsApp.</li>
          <li>Fornecer orçamentos e finalizar transações comerciais.</li>
          <li>Melhorar nosso catálogo e entender as preferências dos clientes via métricas anonimizadas (Google Analytics).</li>
        </ul>

        <h2 className="text-lg text-foreground font-medium mt-10">3. Compartilhamento de Dados</h2>
        <p>Nós não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. Seus dados podem ser compartilhados com parceiros logísticos exclusivamente para a entrega dos produtos.</p>

        <h2 className="text-lg text-foreground font-medium mt-10">4. Seus Direitos</h2>
        <p>Você tem o direito de solicitar a exclusão ou alteração dos seus dados armazenados em nossos registros de atendimento a qualquer momento, bastando nos enviar uma mensagem pelos nossos canais oficiais de contato.</p>
      </div>
    </Container>
  );
}
