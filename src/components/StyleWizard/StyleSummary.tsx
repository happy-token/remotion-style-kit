"use client";

import type { StyleConfig } from "@/styles";
import {
  MOTION_STYLE_PRESETS,
  PALETTE_PRESETS,
  VISUAL_STYLE_PRESETS,
} from "@/styles";
import { Check } from "lucide-react";

interface StyleSummaryProps {
  config: StyleConfig;
}

export function StyleSummary({ config }: StyleSummaryProps) {
  const visual = VISUAL_STYLE_PRESETS[config.visualStyle];
  const motion = MOTION_STYLE_PRESETS[config.motionStyle];
  const palette = PALETTE_PRESETS[config.palette];

  return (
    <div className="bg-muted/20 border border-border/50 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <Check className="w-4 h-4 text-green-500" />
        <span className="text-sm font-semibold text-foreground">
          Your Selections
        </span>
      </div>

      <div className="space-y-3 text-xs">
        <div>
          <span className="text-muted-foreground">Style: </span>
          <span className="text-foreground font-medium">{visual.name}</span>
          <span className="text-muted-foreground/70 ml-1">
            — {visual.description}
          </span>
        </div>

        <div>
          <span className="text-muted-foreground">Motion: </span>
          <span className="text-foreground font-medium">{motion.name}</span>
          <span className="text-muted-foreground/70 ml-1">
            — {motion.description}
          </span>
        </div>

        <div>
          <span className="text-muted-foreground">Palette: </span>
          <span className="text-foreground font-medium">{palette.name}</span>
          <span className="flex gap-1 mt-1">
            {palette.swatches.map((c) => (
              <div
                key={c}
                className="h-4 w-4 rounded-full border border-border/30"
                style={{ backgroundColor: c }}
              />
            ))}
          </span>
        </div>

        <div>
          <span className="text-muted-foreground">Format: </span>
          <span className="text-foreground font-medium">
            {config.format.aspectRatio}
          </span>
          <span className="text-muted-foreground"> / </span>
          <span className="text-foreground font-medium capitalize">
            {config.format.pacing}
          </span>
        </div>
      </div>
    </div>
  );
}
