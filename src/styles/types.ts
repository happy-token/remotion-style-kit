export const VISUAL_STYLES = [
  "minimal",
  "corporate",
  "playful",
  "neon-dark",
  "retro-wave",
  "hand-drawn",
  "glassmorphism",
  "brutalist",
  "editorial",
  "3d-immersive",
  "pixel-art",
  "nature-organic",
] as const;

export type VisualStyleId = (typeof VISUAL_STYLES)[number];

export const MOTION_STYLES = [
  "smooth",
  "bouncy",
  "sharp",
  "glide",
  "glitch",
  "stagger",
] as const;

export type MotionStyleId = (typeof MOTION_STYLES)[number];

export const PALETTES = [
  "warm",
  "cool",
  "vibrant",
  "muted",
  "monochrome",
  "pastel",
  "earth",
  "neon",
] as const;

export type PaletteId = (typeof PALETTES)[number];

export const ASPECT_RATIOS = ["16:9", "9:16", "1:1", "4:5"] as const;

export type AspectRatio = (typeof ASPECT_RATIOS)[number];

export const PACING = ["fast", "moderate", "slow"] as const;

export type Pacing = (typeof PACING)[number];

export interface VisualStylePreset {
  id: VisualStyleId;
  name: string;
  description: string;
  colors: {
    primary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    muted: string;
  };
  typography: string;
  visualRules: string[];
  bestFor: string[];
}

export interface MotionStylePreset {
  id: MotionStyleId;
  name: string;
  description: string;
  primitives: string[];
  easing: string;
  timing: string;
}

export interface PalettePreset {
  id: PaletteId;
  name: string;
  colors: {
    primary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    muted: string;
  };
  swatches: string[];
}

export interface FormatConfig {
  aspectRatio: AspectRatio;
  pacing: Pacing;
}

export interface StyleConfig {
  visualStyle: VisualStyleId;
  motionStyle: MotionStyleId;
  palette: PaletteId;
  format: FormatConfig;
}
