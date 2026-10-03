import { Container } from "@/components/ui/Container";
import { ActionAnchor } from "@/components/ui/ActionLink";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/constants";

export function InstagramSection() {
  return (
    <section className="border-t border-border py-20 md:py-32">
      <Container className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <p className="label-xs text-muted-foreground/50">Instagram</p>
          <h2 className="text-editorial mt-4 text-3xl sm:text-4xl">
            Acompanhe as novidades
          </h2>
          <p className="mt-5 text-[13px] font-light leading-relaxed text-muted-foreground">
            Novos produtos, bastidores das seleções e lançamentos em primeira mão.
            Siga <span className="text-foreground/80">{INSTAGRAM_HANDLE}</span> e fique por dentro.
          </p>
        </div>
        <ActionAnchor href={INSTAGRAM_URL} className="shrink-0">
          Ver Instagram
        </ActionAnchor>
      </Container>
    </section>
  );
}
