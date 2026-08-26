export function ProductBadge({ children }: { children: string }) {
  return (
    <span className="label-xs rounded-full border border-border/80 bg-background/70 px-2.5 py-1 text-muted-foreground backdrop-blur-sm">
      {children}
    </span>
  );
}
