export const MODELS = [
  // Claude (via Anthropic API or compatible proxy)
  { id: "claude-sonnet-4-6:none", name: "Claude Sonnet 4.6" },
  { id: "claude-sonnet-4-6:low", name: "Claude Sonnet 4.6 (Thinking)" },
  { id: "claude-opus-4-7:none", name: "Claude Opus 4.7" },
  { id: "claude-opus-4-7:medium", name: "Claude Opus 4.7 (Thinking)" },
  // DeepSeek (via Anthropic-compatible API, set ANTHROPIC_BASE_URL)
  { id: "deepseek-v4-pro:none", name: "DeepSeek V4 Pro" },
  { id: "deepseek-v4-pro:low", name: "DeepSeek V4 Pro (Thinking)" },
  { id: "deepseek-v4-flash:none", name: "DeepSeek V4 Flash" },
  // GPT (via OpenAI API or compatible proxy)
  { id: "gpt-5.2:low", name: "GPT-5.2 (Low Reasoning)" },
  { id: "gpt-5.2:medium", name: "GPT-5.2 (Medium Reasoning)" },
  { id: "gpt-5.2:high", name: "GPT-5.2 (High Reasoning)" },
  { id: "gpt-5.2-pro:medium", name: "GPT-5.2 Pro (Medium)" },
  { id: "gpt-5.2-pro:high", name: "GPT-5.2 Pro (High)" },
  { id: "gpt-5.2-pro:xhigh", name: "GPT-5.2 Pro (XHigh)" },
] as const;

export type ModelId = (typeof MODELS)[number]["id"];

export type StreamPhase = "idle" | "reasoning" | "generating";

export type GenerationErrorType = "validation" | "api";
