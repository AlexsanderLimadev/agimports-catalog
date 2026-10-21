import heroImage from "@/assets/hero-editorial.jpg";
import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { STORE_NAME } from "@/lib/constants";

export function StoreExpansionHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end bg-black text-white overflow-hidden pb-16 md:pb-24 pt-32">
      {/* Background Image com Máscara Gradiente Escura */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AG Imports Editorial"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-3 border border-white/10 bg-black/40 px-3.5 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-300">
              Coleção 2026 • {STORE_NAME}
            </span>
          </div>

          <h1 className="text-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-zinc-100 font-light leading-[0.95]">
            Curadoria <br />
            <span className="italic font-normal text-zinc-400">Extraordinária.</span>
          </h1>

          <p className="max-w-xl text-sm md:text-base font-light text-zinc-400 leading-relaxed pt-2">
            Peças exclusivas e fragrâncias importadas selecionadas sob um olhar rigoroso de procedência e estilo. Sem intermediários, com atendimento personalizado.
          </p>

          <div className="pt-6 flex flex-wrap items-center gap-4">
            <ActionLink to="/catalogo" variant="primary">
              Explorar Catálogo
            </ActionLink>
            <ActionLink to="/sobre" variant="secondary">
              Conhecer a Loja
            </ActionLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

