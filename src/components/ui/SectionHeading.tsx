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
        "grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 border-b border-border pb-6",
        className,
      )}
    >
      <div className="min-w-0">
        {eyebrow ? <p className="label-xs text-muted-foreground">{eyebrow}</p> : null}
        <h2 className="mt-3 text-2xl font-light tracking-tight sm:text-3xl">{title}</h2>
        {subtitle ? (
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
