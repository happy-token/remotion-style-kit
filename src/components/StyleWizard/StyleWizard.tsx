"use client";

import { Button } from "@/components/ui/button";
import {
  MOTION_STYLE_PRESETS,
  VISUAL_STYLE_PRESETS,
  type MotionStyleId,
  type StyleConfig,
  type VisualStyleId,
} from "@/styles";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { FormatSelector } from "./FormatSelector";
import { MotionCard } from "./MotionCard";
import { PaletteSelector } from "./PaletteSelector";
import { StyleCard } from "./StyleCard";
import { StyleSummary } from "./StyleSummary";

const STEPS = [
  { id: "visual", label: "Visual Style" },
  { id: "motion", label: "Motion" },
  { id: "palette", label: "Palette" },
  { id: "format", label: "Format" },
] as const;

type StepId = (typeof STEPS)[number]["id"];

interface StyleWizardProps {
  initialConfig: StyleConfig;
  onSubmit: (config: StyleConfig) => void;
}

export function StyleWizard({ initialConfig, onSubmit }: StyleWizardProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [config, setConfig] = useState<StyleConfig>(initialConfig);

  const stepId = STEPS[currentStep].id;

  const goNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isLastStep = currentStep === STEPS.length - 1;

  return (
    <div className="flex gap-8">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1 mb-6">
          {STEPS.map((step, i) => (
            <div key={step.id} className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setCurrentStep(i)}
                className={`text-xs px-2.5 py-1 rounded-full transition-all ${
                  i === currentStep
                    ? "bg-foreground text-background font-medium"
                    : i < currentStep
                      ? "bg-foreground/10 text-foreground"
                      : "bg-muted/30 text-muted-foreground"
                }`}
              >
                {i + 1}. {step.label}
              </button>
              {i < STEPS.length - 1 && (
                <div className="w-4 h-px bg-border" />
              )}
            </div>
          ))}
        </div>

        <div className="min-h-[300px]">
          {stepId === "visual" && (
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-1">
                Choose a Visual Style
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                The overall look and feel of your animation
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {Object.values(VISUAL_STYLE_PRESETS).map((preset) => (
                  <StyleCard
                    key={preset.id}
                    preset={preset}
                    isSelected={config.visualStyle === preset.id}
                    onSelect={(id: VisualStyleId) =>
                      setConfig({ ...config, visualStyle: id })
                    }
                  />
                ))}
              </div>
            </div>
          )}

          {stepId === "motion" && (
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-1">
                Choose Motion Style
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                How elements move and animate
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {Object.values(MOTION_STYLE_PRESETS).map((preset) => (
                  <MotionCard
                    key={preset.id}
                    preset={preset}
                    isSelected={config.motionStyle === preset.id}
                    onSelect={(id: MotionStyleId) =>
                      setConfig({ ...config, motionStyle: id })
                    }
                  />
                ))}
              </div>
            </div>
          )}

          {stepId === "palette" && (
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-1">
                Choose a Color Palette
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Or let the visual style decide
              </p>
              <PaletteSelector
                selected={config.palette}
                onSelect={(id) => setConfig({ ...config, palette: id })}
              />
            </div>
          )}

          {stepId === "format" && (
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-1">
                Format & Pacing
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Choose where your video lives and how fast it moves
              </p>
              <FormatSelector
                format={config.format}
                onChange={(format) => setConfig({ ...config, format })}
              />
            </div>
          )}
        </div>

        <div className="flex justify-between mt-6 pt-4 border-t border-border">
          <Button
            variant="ghost"
            onClick={goBack}
            disabled={currentStep === 0}
            className="gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>

          {isLastStep ? (
            <Button onClick={() => onSubmit(config)} className="gap-1.5">
              <Sparkles className="w-4 h-4" />
              Generate Animation
            </Button>
          ) : (
            <Button onClick={goNext} className="gap-1">
              Next
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-8">
          <StyleSummary config={config} />
        </div>
      </div>
    </div>
  );
}
