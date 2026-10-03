import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const base =
  "group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300";

const variants = {
  primary: "bg-zinc-100 text-black hover:bg-white hover:opacity-90 active:scale-[0.99]",
  secondary: "border border-white/20 text-zinc-200 hover:border-white/60 hover:text-white bg-transparent",
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
