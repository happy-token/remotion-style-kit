"use client";

import { cn } from "@/lib/utils";
import type { VisualStyleId, VisualStylePreset } from "@/styles";

interface StyleCardProps {
  preset: VisualStylePreset;
  isSelected: boolean;
  onSelect: (id: VisualStyleId) => void;
}

export function StyleCard({ preset, isSelected, onSelect }: StyleCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(preset.id)}
      className={cn(
        "relative flex flex-col items-start gap-3 rounded-xl border-2 p-4 text-left transition-all",
        isSelected
          ? "border-foreground bg-foreground/5 shadow-md"
          : "border-border hover:border-foreground/30 hover:bg-muted/30",
      )}
    >
      <div className="flex gap-1.5">
        {[
          preset.colors.primary,
          preset.colors.accent,
          preset.colors.background,
        ].map((color) => (
          <div
            key={color}
            className="h-6 w-6 rounded-full border border-border/50"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div>
        <div className="text-sm font-semibold text-foreground">
          {preset.name}
        </div>
        <div className="text-xs text-muted-foreground mt-0.5">
          {preset.description}
        </div>
      </div>
      <div className="flex flex-wrap gap-1">
        {preset.bestFor.slice(0, 2).map((use) => (
          <span
            key={use}
            className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted/50 text-muted-foreground"
          >
            {use}
          </span>
        ))}
      </div>
    </button>
  );
}
