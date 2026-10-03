import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
  action?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 border-b border-white/[0.06] pb-8",
        className,
      )}
    >
      <div className="min-w-0">
        {eyebrow ? (
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-500">{eyebrow}</p>
        ) : null}
        <h2 className="mt-4 text-2xl font-light tracking-tight text-zinc-100 sm:text-3xl">{title}</h2>
        {subtitle ? (
          <p className="mt-3 max-w-xl text-sm font-light text-zinc-400">{subtitle}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
