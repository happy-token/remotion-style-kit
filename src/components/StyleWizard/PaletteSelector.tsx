"use client";

import { cn } from "@/lib/utils";
import { PALETTE_PRESETS, type PaletteId, type PalettePreset } from "@/styles";

interface PaletteSelectorProps {
  selected: PaletteId;
  onSelect: (id: PaletteId) => void;
}

function SwatchRow({ preset }: { preset: PalettePreset }) {
  return (
    <div className="flex gap-1 mt-1.5">
      {preset.swatches.map((color) => (
        <div
          key={color}
          className="h-5 w-5 rounded-full border border-border/30"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

export function PaletteSelector({
  selected,
  onSelect,
}: PaletteSelectorProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {Object.values(PALETTE_PRESETS).map((preset) => (
        <button
          key={preset.id}
          type="button"
          onClick={() => onSelect(preset.id)}
          className={cn(
            "flex flex-col items-start gap-1 rounded-xl border-2 p-3 text-left transition-all",
            selected === preset.id
              ? "border-foreground bg-foreground/5 shadow-md"
              : "border-border hover:border-foreground/30 hover:bg-muted/30",
          )}
        >
          <div className="text-sm font-semibold text-foreground">
            {preset.name}
          </div>
          <SwatchRow preset={preset} />
        </button>
      ))}
    </div>
  );
}
