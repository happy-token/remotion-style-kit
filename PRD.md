# Remotion Style Kit — PRD

## Product Overview

Remotion Style Kit is an AI-powered motion graphics generator. Users describe an animation in natural language, select visual constraints from a multi-style system, and get production-ready Remotion code streamed to a live preview — no coding required.

**Core insight**: Generic "prompt-to-video" tools produce inconsistent, often ugly output because the AI guesses aesthetics. Style Kit solves this by making visual direction an explicit, structured input before generation.

Built on [Remotion](https://remotion.dev) + Next.js. Multi-provider AI backend (OpenAI, Anthropic, DeepSeek, custom proxies).

## Target Users

| Persona | Use Case |
|---------|----------|
| Content creators | Social media animations, YouTube intros |
| Marketers | Product demos, ad creatives |
| Developers | Rapid prototyping, boilerplate generation |
| SaaS builders | White-label video generation in their own products |

## User Flow

```
Landing Page          Style Wizard (4 steps)        Generate Page
┌──────────┐    ┌─────────────────────────┐    ┌──────────────────┐
│ Prompt   │───>│ 1. Visual Style (12)    │───>│ Code Editor      │
│ Model    │    │ 2. Motion Profile (6)   │    │ Live Preview     │
│ Images   │    │ 3. Color Palette (8)    │    │ Chat Follow-ups  │
└──────────┘    │ 4. Format & Pacing      │    └──────────────────┘
                └─────────────────────────┘
```

1. User enters a prompt describing what they want to see (not how it should look)
2. 4-step wizard captures visual direction: style → motion → palette → format
3. AI generates Remotion code constrained by the selected style
4. Code compiles in-browser, live preview shows instantly
5. User refines via chat: "make it faster", "change color to blue"

## Style System

### Dimension 1: Visual Style (12 presets)

Defines the overall aesthetic — colors, typography, visual rules, and decorative elements.

| Style | Character | Hex |
|-------|-----------|-----|
| minimal | Clean, restrained, whitespace | `#000` `#3b82f6` `#fff` |
| corporate | Polished, structured, data-friendly | `#1e3a5f` `#2563eb` `#f1f5f9` |
| playful | Fun, colorful, rounded | `#ff6b6b` `#ffd93d` `#fef3c7` |
| neon-dark | Cyberpunk, glowing elements | `#00f0ff` `#ff00ff` `#0a0a0f` |
| retro-wave | 80s synthwave, nostalgia | `#ff6ac1` `#feca57` `#1a0a2e` |
| hand-drawn | Sketchy, organic, paper texture | `#2d3436` `#e17055` `#faf3e0` |
| glassmorphism | Frosted glass, layered depth | `#fff` `#6366f1` `#0f0f23` |
| brutalist | Raw, bold, heavy borders | `#f00` `#ff0` `#fff` |
| editorial | Magazine-quality, serif, gold | `#1a1a1a` `#c9a96e` `#fafaf9` |
| 3d-immersive | Three.js, cinematic depth | `#a78bfa` `#f472b6` `#0c0c1d` |
| pixel-art | 8-bit/16-bit retro gaming | `#4a9c5d` `#e8a240` `#2b2b3c` |
| nature-organic | Earthy, flowing, biophilic | `#2d6a4f` `#d4a574` `#f0f4ef` |

### Dimension 2: Motion Profile (6 presets)

Defines how elements move — animation primitives, easing, and timing.

| Profile | Primitives | Character |
|---------|-----------|-----------|
| smooth | `interpolate`, linearTiming | Elegant eased transitions |
| bouncy | `spring()` | Playful spring physics with overshoot |
| sharp | `interpolate`, fast slides | Quick cuts, kinetic energy |
| glide | `interpolate`, gentle transforms | Slow floating, dreamy |
| glitch | discrete steps, `random()` | Digital distortion, tech |
| stagger | `spring()`, `Sequence` | Choreographed sequential reveals |

### Dimension 3: Color Palette (8 presets)

Overrides the visual style's default colors.

| Palette | Primary | Accent | Background |
|---------|---------|--------|------------|
| warm | `#e85d3a` | `#f4a261` | `#fef8f0` |
| cool | `#2563eb` | `#06b6d4` | `#f0f4ff` |
| vibrant | `#ff006e` | `#8338ec` | `#ffffff` |
| muted | `#5b6e7a` | `#8fa3b0` | `#f5f3f0` |
| monochrome | `#000` | `#555` | `#ffffff` |
| pastel | `#a78bfa` | `#f9a8d4` | `#fdf2f8` |
| earth | `#4a7c59` | `#c9a96e` | `#f7f3e8` |
| neon | `#00f0ff` | `#ff00ff` | `#0a0a0f` |

### Dimension 4: Format

| Aspect Ratio | Best For | Pacing | Frame Duration |
|-------------|----------|--------|---------------|
| 16:9 | YouTube, presentations | fast / moderate / slow | 6-12 / 12-25 / 20-40 |
| 9:16 | TikTok, Reels, Shorts | | |
| 1:1 | Instagram feed | | |
| 4:5 | Instagram portrait | | |

## Technical Architecture

```
Browser                          Next.js Server                    AI Provider
┌──────────┐    POST /api/generate    ┌──────────────┐    streamText    ┌────────┐
│ Next.js   │ ──────────────────────> │ Style Prompt │ ──────────────> │ OpenAI │
│ Client    │ <────────────────────── │ + Skills     │ <────────────── │ Claude │
│           │    SSE Stream            │ + Validation │                 │ DeepS..│
└──────────┘                          └──────────────┘                 └────────┘
      │                                      │
      │ Monaco Editor + Remotion Player      │ Skill Detection
      │ In-browser JIT compilation           │ Prompt Validation
      │                                      │ Edit Application
```

### Key Design Decisions

1. **Style constraints are prompt-injected, not post-processed** — The style config becomes a structured guidance block in the system prompt. The AI is constrained at generation time, not through output filtering.

2. **Multi-provider via Vercel AI SDK** — Single abstraction (`streamText` / `generateObject`) works across OpenAI, Anthropic, DeepSeek. Provider selected by model ID prefix.

3. **Follow-up edits use targeted string replacement** — Instead of regenerating entire components for small changes, the AI emits `old_string → new_string` edit operations. Preserves user manual edits. Falls back to full replacement for major changes.

4. **In-browser compilation** — Remotion code is compiled via Babel standalone + Remotion bundler in the browser. No server-side build step. Instant preview after streaming completes.

5. **Skill detection as pre-flight** — Lightweight classifier detects relevant Remotion patterns (charts, typography, 3D, etc.) and injects reference code into the prompt for better generation quality.

### Data Flow

```
User Prompt
  → Validation (reject non-visual requests)
    → Skill Detection (charts, typography, 3D, etc.)
      → Style Guidance Injection (colors, motion, layout rules)
        → Code Generation (streaming SSE)
          → Sanitization (strip markdown, extract component)
            → Compilation (Babel standalone)
              → Live Preview (Remotion Player)
```

## Multi-Provider Support

| Provider | Models | Auth |
|----------|--------|------|
| OpenAI | GPT-5.2, GPT-5.2 Pro | `OPENAI_API_KEY` |
| Anthropic | Claude Sonnet 4.6, Opus 4.7 | `ANTHROPIC_API_KEY` |
| DeepSeek | V4 Pro, V4 Flash | `ANTHROPIC_API_KEY` + `ANTHROPIC_BASE_URL` |
| Custom proxy | Any OpenAI/Anthropic-compatible | Set `*_BASE_URL` + auth token |

Custom endpoint support via environment variables:
- `OPENAI_BASE_URL` — OpenAI-compatible API endpoint
- `ANTHROPIC_BASE_URL` — Anthropic-compatible API endpoint
- `ANTHROPIC_AUTH_TOKEN` — Alternative auth header for proxy endpoints

## AI Prompt Architecture

The final system prompt is assembled from 4 layers:

1. **SYSTEM_PROMPT** (base) — Remotion component structure, import rules, layout rules, styling rules, output format
2. **SKILL-SPECIFIC GUIDANCE** — Detected skill reference code and patterns (e.g. chart examples, typography animations)
3. **STYLE GUIDANCE** — Visual style rules, color hex values, motion primitives, aspect ratio constraints, pacing
4. **FOLLOW_UP_SYSTEM_PROMPT** (edit mode) — Targeted edit format, when to use edits vs full replacement

The style layer is the key differentiator — it transforms "make a bar chart" into "make a bar chart with neon-dark aesthetic, bouncy springs, neon color palette, 9:16 vertical layout, fast pacing."

## Installation

### npx CLI
```bash
npx create-remotion-style-kit my-video
cd my-video && cp .env.example .env
npm run dev
```

### create-next-app
```bash
npx create-next-app my-video --example https://github.com/happy-token/remotion-style-kit
```

### Git clone
```bash
git clone https://github.com/happy-token/remotion-style-kit.git
```

## Extensibility

### Adding a new visual style
1. Add entry to `VISUAL_STYLE_PRESETS` in `src/styles/presets.ts`
2. Add id to `VISUAL_STYLES` array in `src/styles/types.ts`

### Adding a new model/provider
1. Add model entry to `MODELS` in `src/types/generation.ts`
2. If new provider, add SDK package and branch in `parseModel()` in `src/app/api/generate/route.ts`

### Adding a new skill
1. Add `.md` file in `src/skills/` with pattern guidance
2. Register in `GUIDANCE_SKILLS` / `EXAMPLE_SKILLS` in `src/skills/index.ts`
3. Add detection rule in `SKILL_DETECTION_PROMPT`

## Roadmap

### v1.0 (shipped)
- 12 visual styles, 6 motion profiles, 8 palettes
- 4-step style wizard UI
- OpenAI + Anthropic + DeepSeek providers
- Custom endpoint support via env vars
- Multi-turn chat with targeted edits
- In-browser live preview
- npx CLI + create-next-app distribution

### v1.1 (planned)
- Style preview images (generated thumbnails for each style)
- Audio/voiceover support
- Video export progress UI
- Template gallery (save/load style configs)
- Stream-to-file rendering for longer videos

### v2.0 (future)
- Multi-scene storyboard editor
- Brand kit (upload logo, fonts, colors → auto-apply)
- Collaborative editing
- Analytics dashboard for SaaS deployments
