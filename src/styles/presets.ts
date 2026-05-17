import type {
  FormatConfig,
  MotionStyleId,
  MotionStylePreset,
  PaletteId,
  PalettePreset,
  StyleConfig,
  VisualStyleId,
  VisualStylePreset,
} from "./types";

export const VISUAL_STYLE_PRESETS: Record<VisualStyleId, VisualStylePreset> = {
  minimal: {
    id: "minimal",
    name: "Minimal",
    description: "Clean lines, generous whitespace, restrained palette",
    colors: {
      primary: "#000000",
      accent: "#3b82f6",
      background: "#ffffff",
      surface: "#f8f8f8",
      text: "#111111",
      muted: "#6b7280",
    },
    typography: "Geometric sans-serif, tight letter-spacing, clear hierarchy",
    visualRules: [
      "Maximum 3 colors total",
      "Generous whitespace and padding",
      "Subtle 1px borders, no heavy shadows",
      "Content-first layout, no decoration",
    ],
    bestFor: ["Brand intros", "Professional presentations", "Clean explainers"],
  },
  corporate: {
    id: "corporate",
    name: "Corporate",
    description: "Polished, professional, trustworthy — boardroom ready",
    colors: {
      primary: "#1e3a5f",
      accent: "#2563eb",
      background: "#f1f5f9",
      surface: "#ffffff",
      text: "#0f172a",
      muted: "#64748b",
    },
    typography: "Professional sans-serif, clear headings, data-friendly",
    visualRules: [
      "Structured grid layouts",
      "Subtle gradients on surfaces",
      "Data visualization friendly",
      "Professional iconography",
    ],
    bestFor: ["Investor decks", "Product demos", "Corporate communications"],
  },
  playful: {
    id: "playful",
    name: "Playful",
    description: "Fun, bouncy, colorful — feels like a Saturday morning cartoon",
    colors: {
      primary: "#ff6b6b",
      accent: "#ffd93d",
      background: "#fef3c7",
      surface: "#ffffff",
      text: "#1e293b",
      muted: "#94a3b8",
    },
    typography: "Rounded fonts, playful sizing, colorful highlights",
    visualRules: [
      "Rounded corners everywhere (12-24px)",
      "Bouncy spring animations",
      "Bold, saturated accent colors",
      "Playful illustrations and emoji-friendly",
    ],
    bestFor: ["Social media", "App promotions", "Educational content for kids"],
  },
  "neon-dark": {
    id: "neon-dark",
    name: "Neon Dark",
    description: "Cyberpunk meets modern UI — glowing elements on deep dark",
    colors: {
      primary: "#00f0ff",
      accent: "#ff00ff",
      background: "#0a0a0f",
      surface: "#1a1a2e",
      text: "#e0e0e0",
      muted: "#8888aa",
    },
    typography: "Monospace or tech-style sans-serif, glowing text accents",
    visualRules: [
      "Dark background always (#0a0a0f or darker)",
      "Neon glow effects (box-shadow with accent colors)",
      "Fine geometric lines, grid overlays",
      "High contrast, cyberpunk aesthetic",
    ],
    bestFor: ["Tech product launches", "Gaming content", "Sci-fi explainers"],
  },
  "retro-wave": {
    id: "retro-wave",
    name: "Retro Wave",
    description: "80s synthwave — hot pink sunsets, chrome grids, nostalgia",
    colors: {
      primary: "#ff6ac1",
      accent: "#feca57",
      background: "#1a0a2e",
      surface: "#2d1b69",
      text: "#ffffff",
      muted: "#a29bfe",
    },
    typography: "Bold display fonts, outlined text, chrome/gradient fills",
    visualRules: [
      "Synthwave sunset gradients (purple to orange)",
      "Chrome/retro text effects",
      "Grid perspective backgrounds",
      "Glitch effects and scan lines",
    ],
    bestFor: ["Music visualizers", "Event promos", "Nostalgic content"],
  },
  "hand-drawn": {
    id: "hand-drawn",
    name: "Hand Drawn",
    description: "Sketchy, organic, human — feels like notebook doodles",
    colors: {
      primary: "#2d3436",
      accent: "#e17055",
      background: "#faf3e0",
      surface: "#fffef5",
      text: "#2d3436",
      muted: "#636e72",
    },
    typography: "Handwriting or sketch-style fonts, uneven baselines, organic",
    visualRules: [
      "Rough, uneven lines and borders",
      "Paper-textured backgrounds",
      "Sketchy illustrations and icons",
      "Organic, imperfect layout",
    ],
    bestFor: ["Educational content", "Personal stories", "Creative portfolios"],
  },
  glassmorphism: {
    id: "glassmorphism",
    name: "Glassmorphism",
    description: "Frosted glass panels, depth, layered transparency",
    colors: {
      primary: "#ffffff",
      accent: "#6366f1",
      background: "#0f0f23",
      surface: "rgba(255,255,255,0.08)",
      text: "#ffffff",
      muted: "rgba(255,255,255,0.5)",
    },
    typography: "Clean sans-serif, white text on translucent panels",
    visualRules: [
      "Frosted glass panels with backdrop-blur",
      "Subtle borders (rgba white 0.1-0.2)",
      "Layered depth with varying blur amounts",
      "Gradient backgrounds with floating elements",
    ],
    bestFor: ["Modern tech demos", "Dashboard UIs", "Premium product showcases"],
  },
  brutalist: {
    id: "brutalist",
    name: "Brutalist",
    description: "Raw, bold, unapologetically loud — anti-design aesthetic",
    colors: {
      primary: "#ff0000",
      accent: "#ffff00",
      background: "#ffffff",
      surface: "#f0f0f0",
      text: "#000000",
      muted: "#666666",
    },
    typography: "Heavy bold sans-serif, oversized text, raw typography",
    visualRules: [
      "Heavy black borders (3-4px solid)",
      "High contrast, no grayscale subtlety",
      "Raw, unpolished aesthetic",
      "Oversized typography elements",
      "Hard shadows, no gradients",
    ],
    bestFor: ["Creative agencies", "Counter-culture brands", "Music/fashion content"],
  },
  editorial: {
    id: "editorial",
    name: "Editorial",
    description: "Magazine-quality layouts, refined typography, photogenic",
    colors: {
      primary: "#1a1a1a",
      accent: "#c9a96e",
      background: "#fafaf9",
      surface: "#ffffff",
      text: "#1a1a1a",
      muted: "#78716c",
    },
    typography: "Serif headlines, elegant sans-serif body, refined hierarchy",
    visualRules: [
      "Serif headlines with large scale contrast",
      "Gold or warm metallic accents",
      "Full-bleed image layouts",
      "Refined spacing with baseline grid",
    ],
    bestFor: ["Fashion/luxury promos", "Documentary-style content", "Magazine intros"],
  },
  "3d-immersive": {
    id: "3d-immersive",
    name: "3D Immersive",
    description: "Deep dimensional scenes, Three.js, cinematic depth",
    colors: {
      primary: "#a78bfa",
      accent: "#f472b6",
      background: "#0c0c1d",
      surface: "#1e1b4b",
      text: "#e0e7ff",
      muted: "#6366f1",
    },
    typography: "Clean sans-serif over 3D scenes, often white with subtle shadows",
    visualRules: [
      "3D scenes with proper lighting and materials",
      "Depth of field and camera movement",
      "Particle effects and atmospheric fog",
      "Cinematic color grading",
    ],
    bestFor: ["Product showcases", "Cinematic intros", "Immersive brand experiences"],
  },
  "pixel-art": {
    id: "pixel-art",
    name: "Pixel Art",
    description: "Retro 8-bit/16-bit gaming aesthetic, nostalgic charm",
    colors: {
      primary: "#4a9c5d",
      accent: "#e8a240",
      background: "#2b2b3c",
      surface: "#3d3d50",
      text: "#ffffff",
      muted: "#8b8b9e",
    },
    typography: "Pixel fonts, chunky and retro, fixed-width",
    visualRules: [
      "Pixel-perfect rendering (image-rendering: pixelated)",
      "Limited color palette like retro games",
      "8-bit or 16-bit inspired visual elements",
      "Blocky shapes and pixel-art decorations",
    ],
    bestFor: ["Gaming content", "Nostalgic promos", "Tech explainers with retro twist"],
  },
  "nature-organic": {
    id: "nature-organic",
    name: "Nature Organic",
    description: "Earthy tones, flowing shapes, biophilic design",
    colors: {
      primary: "#2d6a4f",
      accent: "#d4a574",
      background: "#f0f4ef",
      surface: "#ffffff",
      text: "#1b4332",
      muted: "#6b9080",
    },
    typography: "Organic serif or humanist sans-serif, relaxed spacing",
    visualRules: [
      "Earthy color palette, no synthetic neons",
      "Flowing organic shapes, no sharp corners",
      "Natural textures and gradients",
      "Leaf/plant-inspired decorative elements",
    ],
    bestFor: ["Wellness brands", "Environmental content", "Lifestyle promos"],
  },
};

export const MOTION_STYLE_PRESETS: Record<MotionStyleId, MotionStylePreset> = {
  smooth: {
    id: "smooth",
    name: "Smooth",
    description: "Elegant eased transitions, no sudden movements",
    primitives: ["interpolate", "linearTiming"],
    easing: "cubic-bezier(0.4, 0, 0.2, 1) — general purpose ease-in-out",
    timing: "Crossfades and gentle opacity shifts, 15-30 frame transitions",
  },
  bouncy: {
    id: "bouncy",
    name: "Bouncy",
    description: "Playful spring physics with overshoot and bounce",
    primitives: ["spring()", "staggered spring reveals"],
    easing: "spring({ damping: 8, mass: 0.5 }) — bouncy overshoot",
    timing: "Quick springs (8-15 frames), overlapping with stagger delays",
  },
  sharp: {
    id: "sharp",
    name: "Sharp",
    description: "Fast cuts, precise timing, kinetic energy",
    primitives: ["interpolate", "fast slide transitions"],
    easing: "cubic-bezier(0.22, 0.61, 0.36, 1) — snappy ease-out",
    timing: "Quick cuts (8-12 frames), rapid sequences, no lingering",
  },
  glide: {
    id: "glide",
    name: "Glide",
    description: "Slow floating motion, dreamy and atmospheric",
    primitives: ["interpolate", "gentle transform shifts"],
    easing: "cubic-bezier(0.25, 0.1, 0.25, 1) — slow ease, almost linear",
    timing: "Long drawn-out movements (30-60 frames), overlapping fades",
  },
  glitch: {
    id: "glitch",
    name: "Glitch",
    description: "Digital distortion, RGB split, tech disruption",
    primitives: ["interpolate with discrete steps", "random()", "sequence"],
    easing: "steps() and discrete jumps, no smooth transitions",
    timing: "Rapid glitch bursts (2-5 frames), random intervals",
  },
  stagger: {
    id: "stagger",
    name: "Stagger",
    description: "Choreographed reveals — each element enters in sequence",
    primitives: ["spring()", "staggered delay arrays", "Sequence"],
    easing: "mix of spring() for entrances, each element offset by 3-8 frames",
    timing: "Elements enter one by one, 3-8 frame delays between each",
  },
};

export const PALETTE_PRESETS: Record<PaletteId, PalettePreset> = {
  warm: {
    id: "warm",
    name: "Warm",
    colors: {
      primary: "#e85d3a",
      accent: "#f4a261",
      background: "#fef8f0",
      surface: "#ffffff",
      text: "#2d1810",
      muted: "#b08968",
    },
    swatches: ["#e85d3a", "#f4a261", "#e9c46a", "#fef8f0", "#2d1810"],
  },
  cool: {
    id: "cool",
    name: "Cool",
    colors: {
      primary: "#2563eb",
      accent: "#06b6d4",
      background: "#f0f4ff",
      surface: "#ffffff",
      text: "#1e293b",
      muted: "#64748b",
    },
    swatches: ["#2563eb", "#06b6d4", "#7dd3fc", "#f0f4ff", "#1e293b"],
  },
  vibrant: {
    id: "vibrant",
    name: "Vibrant",
    colors: {
      primary: "#ff006e",
      accent: "#8338ec",
      background: "#ffffff",
      surface: "#fafafe",
      text: "#1a1a2e",
      muted: "#6c757d",
    },
    swatches: ["#ff006e", "#8338ec", "#3a86ff", "#ffbe0b", "#ffffff"],
  },
  muted: {
    id: "muted",
    name: "Muted",
    colors: {
      primary: "#5b6e7a",
      accent: "#8fa3b0",
      background: "#f5f3f0",
      surface: "#fafaf9",
      text: "#2c3539",
      muted: "#8b959a",
    },
    swatches: ["#5b6e7a", "#8fa3b0", "#c4bdb8", "#f5f3f0", "#2c3539"],
  },
  monochrome: {
    id: "monochrome",
    name: "Monochrome",
    colors: {
      primary: "#000000",
      accent: "#555555",
      background: "#ffffff",
      surface: "#f5f5f5",
      text: "#111111",
      muted: "#999999",
    },
    swatches: ["#000000", "#555555", "#999999", "#f5f5f5", "#ffffff"],
  },
  pastel: {
    id: "pastel",
    name: "Pastel",
    colors: {
      primary: "#a78bfa",
      accent: "#f9a8d4",
      background: "#fdf2f8",
      surface: "#ffffff",
      text: "#4a2040",
      muted: "#9d8f9a",
    },
    swatches: ["#a78bfa", "#f9a8d4", "#fde68a", "#a7f3d0", "#fdf2f8"],
  },
  earth: {
    id: "earth",
    name: "Earth",
    colors: {
      primary: "#4a7c59",
      accent: "#c9a96e",
      background: "#f7f3e8",
      surface: "#fefdf8",
      text: "#2c3830",
      muted: "#8b9a8b",
    },
    swatches: ["#4a7c59", "#c9a96e", "#8b6914", "#f7f3e8", "#2c3830"],
  },
  neon: {
    id: "neon",
    name: "Neon",
    colors: {
      primary: "#00f0ff",
      accent: "#ff00ff",
      background: "#0a0a0f",
      surface: "#1a1a2e",
      text: "#ffffff",
      muted: "#8888cc",
    },
    swatches: ["#00f0ff", "#ff00ff", "#39ff14", "#ff6600", "#0a0a0f"],
  },
};

export function buildStylePrompt(config: StyleConfig): string {
  const visual = VISUAL_STYLE_PRESETS[config.visualStyle];
  const motion = MOTION_STYLE_PRESETS[config.motionStyle];
  const palette = PALETTE_PRESETS[config.palette];
  const fmt = config.format;

  let prompt = `\n## STYLE GUIDANCE\n`;

  prompt += `\n### Visual Style: ${visual.name}\n`;
  prompt += `${visual.description}\n`;
  prompt += `\nColor reference:\n`;
  prompt += `- Primary: ${palette?.colors.primary ?? visual.colors.primary}\n`;
  prompt += `- Accent: ${palette?.colors.accent ?? visual.colors.accent}\n`;
  prompt += `- Background: ${palette?.colors.background ?? visual.colors.background}\n`;
  prompt += `- Surface: ${palette?.colors.surface ?? visual.colors.surface}\n`;
  prompt += `- Text: ${palette?.colors.text ?? visual.colors.text}\n`;
  prompt += `- Muted: ${palette?.colors.muted ?? visual.colors.muted}\n`;
  prompt += `\nTypography: ${visual.typography}\n`;
  prompt += `\nRules:\n`;
  visual.visualRules.forEach((rule) => {
    prompt += `- ${rule}\n`;
  });

  prompt += `\n### Motion: ${motion.name}\n`;
  prompt += `${motion.description}\n`;
  prompt += `- Prefer: ${motion.primitives.join(", ")}\n`;
  prompt += `- Easing: ${motion.easing}\n`;
  prompt += `- Timing: ${motion.timing}\n`;

  prompt += `\n### Format\n`;
  prompt += `- Aspect Ratio: ${fmt.aspectRatio}\n`;
  prompt += `- Pacing: ${fmt.pacing}\n`;
  if (fmt.pacing === "fast") {
    prompt += `- Keep animations quick (6-12 frames each), minimize pauses\n`;
  } else if (fmt.pacing === "slow") {
    prompt += `- Allow animations to breathe (20-40 frames), add pauses between sections\n`;
  } else {
    prompt += `- Balanced timing (12-25 frames per animation), natural rhythm\n`;
  }

  prompt += `\n### Aspect Ratio Layout\n`;
  if (fmt.aspectRatio === "9:16") {
    prompt += `- Vertical layout — stack elements top to bottom\n`;
    prompt += `- Content should fill the vertical space with centered horizontal alignment\n`;
  } else if (fmt.aspectRatio === "1:1") {
    prompt += `- Square layout — centered composition, balanced in all directions\n`;
  } else if (fmt.aspectRatio === "4:5") {
    prompt += `- Slightly vertical — main content in center, slight top-bottom flow\n`;
  } else {
    prompt += `- Landscape layout — side-by-side elements, horizontal flow\n`;
  }

  prompt += `\nCRITICAL: Use ONLY the colors specified above. Follow the motion timing guidelines. Match the visual style rules exactly.\n`;

  return prompt;
}

export function encodeStyleConfig(config: StyleConfig): string {
  return `${config.visualStyle}|${config.motionStyle}|${config.palette}|${config.format.aspectRatio}|${config.format.pacing}`;
}

export function decodeStyleConfig(encoded: string): StyleConfig | null {
  const parts = encoded.split("|");
  if (parts.length !== 5) return null;
  const [visualStyle, motionStyle, palette, aspectRatio, pacing] = parts;
  return {
    visualStyle: visualStyle as VisualStyleId,
    motionStyle: motionStyle as MotionStyleId,
    palette: palette as PaletteId,
    format: {
      aspectRatio: aspectRatio as FormatConfig["aspectRatio"],
      pacing: pacing as FormatConfig["pacing"],
    },
  };
}

export const DEFAULT_STYLE_CONFIG: StyleConfig = {
  visualStyle: "minimal",
  motionStyle: "smooth",
  palette: "muted",
  format: {
    aspectRatio: "16:9",
    pacing: "moderate",
  },
};
