"use client";

import { cn } from "@/lib/utils";
import type { MotionStyleId, MotionStylePreset } from "@/styles";

interface MotionCardProps {
  preset: MotionStylePreset;
  isSelected: boolean;
  onSelect: (id: MotionStyleId) => void;
}

export function MotionCard({ preset, isSelected, onSelect }: MotionCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(preset.id)}
      className={cn(
        "relative flex flex-col items-start gap-2 rounded-xl border-2 p-4 text-left transition-all",
        isSelected
          ? "border-foreground bg-foreground/5 shadow-md"
          : "border-border hover:border-foreground/30 hover:bg-muted/30",
      )}
    >
      <div className="text-sm font-semibold text-foreground">{preset.name}</div>
      <div className="text-xs text-muted-foreground">{preset.description}</div>
      <div className="flex flex-wrap gap-1">
        {preset.primitives.map((p) => (
          <span
            key={p}
            className="text-[10px] px-1.5 py-0.5 rounded bg-accent/10 text-accent font-mono"
          >
            {p}
          </span>
        ))}
      </div>
      <div className="text-[10px] text-muted-foreground/70">
        {preset.timing}
      </div>
    </button>
  );
}
