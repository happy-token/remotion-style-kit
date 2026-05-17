# Remotion Style Kit

AI-powered motion graphics generator with a **12-style × 6-motion × 8-palette** visual system. Choose your visual direction before AI code generation for consistent, high-quality Remotion animations from natural language prompts.

Built on [Remotion](https://remotion.dev) + Next.js + OpenAI.

## Quick Start

### Option 1: npx CLI (recommended)

```bash
npx create-remotion-style-kit my-video
cd my-video
cp .env.example .env   # add your OPENAI_API_KEY
npm run dev
```

### Option 2: create-next-app

```bash
npx create-next-app my-video --example https://github.com/happy-token/remotion-style-kit
cd my-video
cp .env.example .env   # add your OPENAI_API_KEY
npm run dev
```

### Option 3: Git clone

```bash
git clone https://github.com/happy-token/remotion-style-kit.git my-video
cd my-video
npm install
cp .env.example .env   # add your OPENAI_API_KEY
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Usage Walkthrough

### Step 1 — Enter a prompt

Describe the animation you want. Be specific about content, not style (you'll choose that next).

```
Animated bar chart showing Q1-Q4 revenue: $2.4M, $3.1M, $2.8M, $4.2M.
Each bar springs up with a staggered delay.
```

You can also paste or drop reference images — the AI will replicate their visual style.

### Step 2 — Choose visual style

Pick one of 12 visual aesthetics. Each card shows a color preview and recommended use cases.

### Step 3 — Choose motion profile

How should elements move? Bouncy springs, smooth fades, sharp cuts, glitchy distortions, or slow glides.

### Step 4 — Select color palette

Override the visual style's default colors with any of 8 palettes, or let the style decide.

### Step 5 — Set format & pacing

Aspect ratio (16:9, 9:16, 1:1, 4:5) and pacing (fast, moderate, slow). These constraints are injected into the AI prompt.

### Step 6 — Generate & refine

The AI streams Remotion code to your browser. The live preview shows the compiled animation instantly. Use the chat sidebar for follow-up edits:

```
"Make the bars gold instead of blue"
"Speed up the entrance animations"
"Add a title that says 'Quarterly Revenue'"
```

The AI uses targeted edits (preserving your manual changes) or full replacement when needed.

## Style Reference

### Visual Styles (12)

| Style | Description | Best For |
|-------|-------------|----------|
| **minimal** | Clean lines, generous whitespace, restrained palette. Max 3 colors, subtle borders. | Brand intros, professional presentations |
| **corporate** | Polished, structured grids, data-visualization friendly. | Investor decks, product demos |
| **playful** | Fun, colorful, rounded corners everywhere. Bouncy and emoji-friendly. | Social media, educational for kids |
| **neon-dark** | Cyberpunk aesthetic — glowing elements on deep dark backgrounds. | Tech launches, gaming, sci-fi |
| **retro-wave** | 80s synthwave — sunset gradients, chrome text, grid perspectives. | Music visualizers, event promos |
| **hand-drawn** | Sketchy lines, paper textures, organic imperfections. | Educational, personal stories |
| **glassmorphism** | Frosted glass panels, layered depth, gradient backgrounds. | Modern dashboards, premium showcases |
| **brutalist** | Raw, bold, heavy borders (3-4px), high contrast. Anti-design aesthetic. | Creative agencies, counter-culture brands |
| **editorial** | Magazine-quality — serif headlines, gold accents, full-bleed layouts. | Fashion, documentary, luxury |
| **3d-immersive** | Three.js scenes with lighting, particles, atmospheric depth. | Product showcases, cinematic intros |
| **pixel-art** | 8-bit/16-bit gaming aesthetic, pixel-perfect rendering, limited palette. | Gaming content, retro promos |
| **nature-organic** | Earthy tones, flowing shapes, biophilic design. No synthetic neons. | Wellness, environmental, lifestyle |

### Motion Profiles (6)

| Profile | Primitives | Easing | Timing |
|---------|-----------|--------|--------|
| **smooth** | `interpolate`, `linearTiming` | cubic-bezier ease-in-out | 15-30 frame crossfades |
| **bouncy** | `spring()` | `spring({ damping: 8, mass: 0.5 })` | 8-15 frame springs with stagger |
| **sharp** | `interpolate`, fast slides | snappy ease-out | 8-12 frame quick cuts |
| **glide** | `interpolate`, gentle transforms | slow ease, near-linear | 30-60 frame drawn-out movements |
| **glitch** | discrete steps, `random()` | step-based, no smoothness | 2-5 frame bursts, random intervals |
| **stagger** | `spring()`, `Sequence` | mixed springs | 3-8 frame delays between elements |

### Color Palettes (8)

| Palette | Primary | Accent | Background | Mood |
|---------|---------|--------|------------|------|
| **warm** | `#e85d3a` | `#f4a261` | `#fef8f0` | Cozy, inviting |
| **cool** | `#2563eb` | `#06b6d4` | `#f0f4ff` | Professional, calm |
| **vibrant** | `#ff006e` | `#8338ec` | `#ffffff` | Energetic, bold |
| **muted** | `#5b6e7a` | `#8fa3b0` | `#f5f3f0` | Subtle, sophisticated |
| **monochrome** | `#000000` | `#555555` | `#ffffff` | Timeless, classic |
| **pastel** | `#a78bfa` | `#f9a8d4` | `#fdf2f8` | Soft, dreamy |
| **earth** | `#4a7c59` | `#c9a96e` | `#f7f3e8` | Natural, grounded |
| **neon** | `#00f0ff` | `#ff00ff` | `#0a0a0f` | Electric, futuristic |

### Aspect Ratios & Pacing

| Aspect | Best For | Pacing | Feel |
|--------|----------|--------|------|
| **16:9** | YouTube, presentations | **fast** | Quick cuts, high energy, 6-12 frame animations |
| **9:16** | TikTok, Reels, Shorts | **moderate** | Balanced rhythm, 12-25 frame animations |
| **1:1** | Instagram feed | **slow** | Leisurely, atmospheric, 20-40 frame animations |
| **4:5** | Instagram portrait | | |

## How Style Constraints Work

The style wizard produces a structured guidance block that is injected into the AI system prompt:

```markdown
### Visual Style: neon-dark
- Dark backgrounds (#0a0a0f, #1a1a2e)
- Neon accent colors (cyan #00f0ff, magenta #ff00ff)
- Glow effects, high contrast, cyberpunk aesthetic
- Fine geometric lines, grid overlays

### Motion: bouncy
- Prefer: spring(), staggered spring reveals
- Easing: spring({ damping: 8, mass: 0.5 }) — bouncy overshoot
- Timing: Quick springs (8-15 frames), overlapping with stagger delays

### Palette: neon
- Primary: #00f0ff, Accent: #ff00ff, Background: #0a0a0f

### Format
- Aspect Ratio: 9:16 — vertical layout, stack elements top to bottom
- Pacing: fast — keep animations quick, minimize pauses

CRITICAL: Use ONLY the colors specified above. Follow the motion timing guidelines exactly.
```

This replaces the AI's default behavior of guessing aesthetics from the prompt, producing consistent, style-constrained output.

## Environment Variables

```bash
OPENAI_API_KEY=sk-...      # Required: OpenAI API key
```

Optional — for Lambda rendering (video export):

```bash
REMOTION_AWS_ACCESS_KEY_ID=...
REMOTION_AWS_SECRET_ACCESS_KEY=...
```

Set up Lambda: [remotion.dev/docs/lambda/setup](https://www.remotion.dev/docs/lambda/setup)

## API Reference

### `POST /api/generate`

Generates or edits Remotion animation code.

**First generation (streaming):**

```json
{
  "prompt": "Animated bar chart...",
  "model": "gpt-5.2:low",
  "styleConfig": "neon-dark|bouncy|neon|9:16|fast"
}
```

Returns SSE stream with `reasoning-start` → `text-delta` events → final code.

**Follow-up edits (JSON):**

```json
{
  "prompt": "Make the bars gold",
  "model": "gpt-5.2:low",
  "isFollowUp": true,
  "currentCode": "import { useCurrentFrame }...",
  "styleConfig": "neon-dark|bouncy|neon|9:16|fast",
  "conversationHistory": [...]
}
```

Returns `{ code, summary, metadata: { skills, editType, edits } }`.

### Models

| Model ID | Description |
|----------|-------------|
| `gpt-5.2:none` | GPT-5.2, no reasoning |
| `gpt-5.2:low` | GPT-5.2, low reasoning |
| `gpt-5.2:medium` | GPT-5.2, medium reasoning |
| `gpt-5.2:high` | GPT-5.2, high reasoning |
| `gpt-5.2-pro:medium` | GPT-5.2 Pro, medium |
| `gpt-5.2-pro:high` | GPT-5.2 Pro, high |
| `gpt-5.2-pro:xhigh` | GPT-5.2 Pro, extreme |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js dev server on port 3000 |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run remotion` | Open Remotion Studio for local preview |
| `npm run render` | Render video to MP4 locally |
| `npm run deploy` | Deploy Lambda function for cloud rendering |

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Landing — prompt + model input
│   ├── style/page.tsx           # 4-step style wizard
│   ├── generate/page.tsx        # Code editor + preview + chat
│   ├── code-examples/page.tsx   # Reference code examples
│   ├── api/generate/route.ts    # AI generation endpoint
│   └── api/lambda/              # Lambda rendering endpoints
├── styles/
│   ├── types.ts                 # Style dimension type definitions
│   ├── presets.ts               # All preset data + buildStylePrompt()
│   └── index.ts                 # Barrel export
├── components/
│   ├── StyleWizard/             # Wizard container + 5 step components
│   ├── ChatSidebar/             # Multi-turn conversation sidebar
│   ├── CodeEditor/              # Monaco editor with streaming overlay
│   ├── AnimationPlayer/         # Remotion Player + render controls
│   └── ui/                      # Shared UI primitives
├── hooks/                       # React hooks (generation, animation, etc.)
├── skills/                      # Remotion skill docs for AI context
├── remotion/                    # Remotion Root + composition
├── types/                       # Shared TypeScript types
└── helpers/                     # Sanitization, frame capture
```

## How to Extend

### Add a new visual style

In `src/styles/presets.ts`, add an entry to `VISUAL_STYLE_PRESETS`:

```ts
"my-style": {
  id: "my-style",
  name: "My Style",
  description: "Description of the look",
  colors: {
    primary: "#...",
    accent: "#...",
    background: "#...",
    surface: "#...",
    text: "#...",
    muted: "#...",
  },
  typography: "Font guidance for AI",
  visualRules: ["Rule 1", "Rule 2"],
  bestFor: ["Use case 1", "Use case 2"],
}
```

Then add `"my-style"` to the `VISUAL_STYLES` array in `src/styles/types.ts`.

### Add a new palette

Add to `PALETTE_PRESETS` in `src/styles/presets.ts` and add the id to `PALETTES` in `src/styles/types.ts`.

## Troubleshooting

**`OPENAI_API_KEY is not set`**
Copy `.env.example` to `.env` and add your API key.

**Generation produces validation errors**
The prompt may be too vague. Try being more specific about what you want to see, not the style (the wizard handles style).

**Animation compiles but doesn't look right**
Use chat follow-ups to refine: "Make the colors more saturated", "Slow down the entrance animations", etc.

**`npm run deploy` fails**
Ensure AWS credentials are set and Lambda is configured: [remotion.dev/docs/lambda/setup](https://www.remotion.dev/docs/lambda/setup)

## License

MIT

## Credits

Built on [Remotion](https://remotion.dev) — the React framework for creating videos programmatically. Style system inspired by [baoyu-skills](https://github.com/JimLiu/baoyu-skills).
