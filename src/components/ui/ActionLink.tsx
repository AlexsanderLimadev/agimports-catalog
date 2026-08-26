import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-xs uppercase tracking-[0.18em] transition-colors duration-200";

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/85",
  secondary: "border border-border text-foreground hover:border-foreground/50 hover:bg-surface",
} as const;

type Variant = keyof typeof variants;

export function ArrowIcon() {
  return (
    <ArrowRight
      aria-hidden="true"
      className="size-4 transition-transform duration-200 group-hover:translate-x-1"
    />
  );
}

export function ActionLink({
  to,
  children,
  variant = "primary",
  className,
  withArrow = true,
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
}) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
      {withArrow ? <ArrowIcon /> : null}
    </Link>
  );
}

export function ActionAnchor({
  href,
  children,
  variant = "secondary",
  className,
  withArrow = true,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], className)}
      {...rest}
    >
      {children}
      {withArrow ? <ArrowIcon /> : null}
    </a>
  );
}
