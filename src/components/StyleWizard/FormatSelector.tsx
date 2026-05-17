"use client";

import { cn } from "@/lib/utils";
import {
  ASPECT_RATIOS,
  PACING,
  type AspectRatio,
  type FormatConfig,
  type Pacing,
} from "@/styles";

interface FormatSelectorProps {
  format: FormatConfig;
  onChange: (format: FormatConfig) => void;
}

const ASPECT_LABELS: Record<AspectRatio, string> = {
  "16:9": "Landscape",
  "9:16": "Story",
  "1:1": "Square",
  "4:5": "Portrait",
};

const ASPECT_DESCRIPTIONS: Record<AspectRatio, string> = {
  "16:9": "YouTube, presentations",
  "9:16": "TikTok, Reels, Shorts",
  "1:1": "Instagram feed",
  "4:5": "Instagram portrait",
};

const PACING_DESCRIPTIONS: Record<Pacing, string> = {
  fast: "Quick cuts, high energy",
  moderate: "Balanced rhythm",
  slow: "Leisurely, atmospheric",
};

export function FormatSelector({ format, onChange }: FormatSelectorProps) {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-sm font-medium text-foreground mb-3">
          Aspect Ratio
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {ASPECT_RATIOS.map((ratio) => (
            <button
              key={ratio}
              type="button"
              onClick={() => onChange({ ...format, aspectRatio: ratio })}
              className={cn(
                "flex flex-col items-center gap-1.5 rounded-xl border-2 p-3 transition-all",
                format.aspectRatio === ratio
                  ? "border-foreground bg-foreground/5 shadow-md"
                  : "border-border hover:border-foreground/30 hover:bg-muted/30",
              )}
            >
              <div
                className="border border-current opacity-30"
                style={{
                  width: ratio === "9:16" ? 24 : ratio === "1:1" ? 36 : 40,
                  height: ratio === "9:16" ? 40 : ratio === "1:1" ? 36 : 24,
                }}
              />
              <div className="text-xs font-semibold text-foreground">
                {ASPECT_LABELS[ratio]}
              </div>
              <div className="text-[10px] text-muted-foreground">
                {ASPECT_DESCRIPTIONS[ratio]}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="text-sm font-medium text-foreground mb-3">Pacing</div>
        <div className="flex gap-3">
          {PACING.map((pacing) => (
            <button
              key={pacing}
              type="button"
              onClick={() => onChange({ ...format, pacing })}
              className={cn(
                "flex-1 flex flex-col items-center gap-1 rounded-xl border-2 p-3 transition-all capitalize",
                format.pacing === pacing
                  ? "border-foreground bg-foreground/5 shadow-md"
                  : "border-border hover:border-foreground/30 hover:bg-muted/30",
              )}
            >
              <div className="text-xs font-semibold text-foreground">
                {pacing}
              </div>
              <div className="text-[10px] text-muted-foreground">
                {PACING_DESCRIPTIONS[pacing]}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
