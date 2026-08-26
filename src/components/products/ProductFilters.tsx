import { cn } from "@/lib/utils";

export type Chip = { value: string; label: string };

export function ChipRow({
  label,
  chips,
  value,
  onChange,
}: {
  label: string;
  chips: Chip[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-3">
      <p className="label-xs text-muted-foreground">{label}</p>
      <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
        {chips.map((chip) => {
          const active = chip.value === value;
          return (
            <button
              key={chip.value}
              type="button"
              onClick={() => onChange(chip.value)}
              aria-pressed={active}
              className={cn(
                "label-xs shrink-0 rounded-full border px-4 py-2 transition-colors duration-200",
                active
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
              )}
            >
              {chip.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
