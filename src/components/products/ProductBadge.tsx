export function ProductBadge({ children }: { children: string }) {
  return (
    <span className="inline-block bg-black/60 px-2 py-0.5 text-[8.5px] font-medium uppercase tracking-[0.25em] text-zinc-300 backdrop-blur-md border border-white/5">
      {children}
    </span>
  );
}

