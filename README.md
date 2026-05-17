# Remotion Style Kit

AI-powered motion graphics generator with a multi-style system. Choose from **12 visual styles**, **6 motion profiles**, and **8 color palettes** to generate consistent, high-quality Remotion animations from natural language prompts.

Built on [Remotion](https://remotion.dev) + Next.js.

## Features

- **12 Visual Styles** — minimal, corporate, playful, neon-dark, retro-wave, hand-drawn, glassmorphism, brutalist, editorial, 3d-immersive, pixel-art, nature-organic
- **6 Motion Profiles** — smooth, bouncy, sharp, glide, glitch, stagger
- **8 Color Palettes** — warm, cool, vibrant, muted, monochrome, pastel, earth, neon
- **4-step Style Wizard** — guided UI to configure all dimensions before generation
- **Live Preview** — generated Remotion code compiles and plays instantly
- **Multi-turn Chat** — refine animations with follow-up edits, preserve style constraints

## Quick Start

### Option 1: npx (recommended)

```bash
npx create-next-app my-video --example https://github.com/happy-token/remotion-style-kit
cd my-video
cp .env.example .env   # add your OPENAI_API_KEY
npm run dev
```

### Option 2: npx CLI

```bash
npx create-remotion-style-kit my-video
cd my-video
# add OPENAI_API_KEY to .env
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

## Usage

1. **Enter a prompt** — "An animated bar chart showing quarterly revenue growth with bouncy entrances"
2. **Choose a style** — pick from 12 visual styles with preview cards
3. **Pick motion** — how elements move (bouncy, smooth, glitch, etc.)
4. **Select palette** — color scheme for your animation
5. **Set format** — aspect ratio (16:9, 9:16, 1:1, 4:5) and pacing
6. **Generate** — AI produces Remotion code constrained by your choices
7. **Refine** — chat with the assistant to tweak colors, timing, or layout

## Style Reference

### Visual Styles

| Style | Vibe | Best For |
|-------|------|----------|
| minimal | Clean, restrained, whitespace | Brand intros, presentations |
| corporate | Polished, professional | Investor decks, demos |
| playful | Fun, colorful, bouncy | Social media, educational |
| neon-dark | Cyberpunk, glowing | Tech launches, gaming |
| retro-wave | 80s synthwave, nostalgia | Music, events |
| hand-drawn | Sketchy, organic | Education, creative |
| glassmorphism | Frosted glass, depth | Modern tech, dashboards |
| brutalist | Raw, bold, loud | Creative agencies |
| editorial | Magazine-quality, refined | Fashion, documentary |
| 3d-immersive | Three.js, cinematic depth | Product showcases |
| pixel-art | 8-bit gaming, retro | Gaming, nostalgic |
| nature-organic | Earthy, flowing, biophilic | Wellness, environment |

### Motion Profiles

- **smooth** — Elegant eased transitions, no sudden movements
- **bouncy** — Playful spring physics with overshoot
- **sharp** — Fast cuts, kinetic energy
- **glide** — Slow floating, dreamy and atmospheric
- **glitch** — Digital distortion, tech disruption
- **stagger** — Choreographed reveals, elements enter in sequence

### Color Palettes

Each palette provides primary, accent, background, surface, text, and muted colors with hex values.

| Palette | Swatches |
|---------|----------|
| warm | `#e85d3a` `#f4a261` `#e9c46a` |
| cool | `#2563eb` `#06b6d4` `#7dd3fc` |
| vibrant | `#ff006e` `#8338ec` `#3a86ff` |
| muted | `#5b6e7a` `#8fa3b0` `#c4bdb8` |
| monochrome | `#000000` `#555555` `#999999` |
| pastel | `#a78bfa` `#f9a8d4` `#fde68a` |
| earth | `#4a7c59` `#c9a96e` `#8b6914` |
| neon | `#00f0ff` `#ff00ff` `#39ff14` |

## Environment Variables

```bash
OPENAI_API_KEY=sk-...      # Required: OpenAI API key
```

Optional for Lambda rendering:
```bash
AWS_ACCESS_KEY_ID=...       # AWS credentials
AWS_SECRET_ACCESS_KEY=...   # AWS secret
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Build for production |
| `npm run remotion` | Open Remotion Studio |
| `npm run render` | Render video locally |
| `npm run deploy` | Deploy to AWS Lambda |

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── style/page.tsx           # Style wizard
│   ├── generate/page.tsx        # Generation + preview
│   ├── code-examples/page.tsx   # Code examples
│   └── api/generate/route.ts    # AI generation API
├── styles/                      # Style system (types + presets)
├── components/
│   ├── StyleWizard/             # Wizard UI components
│   ├── ChatSidebar/             # Multi-turn chat
│   ├── CodeEditor/              # Monaco code editor
│   └── AnimationPlayer/         # Live Remotion preview
├── hooks/                       # React hooks
├── skills/                      # Remotion skills for AI guidance
└── remotion/                    # Remotion composition
```

## License

MIT
