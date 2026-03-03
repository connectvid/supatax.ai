// OpenRouter API Client
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || "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";
const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";

export interface GenerateTextOptions {
  model?: string;
  systemPrompt: string;
  userPrompt: string;
  temperature?: number;
  maxTokens?: number;
}

export interface GenerateImageOptions {
  prompt: string;
  size?: "1024x1024" | "1024x1792" | "1792x1024";
  quality?: "standard" | "hd";
}

export async function generateText(options: GenerateTextOptions): Promise<string> {
  const {
    model = "openai/gpt-4",
    systemPrompt,
    userPrompt,
    temperature = 0.7,
    maxTokens = 2000,
  } = options;

  try {
    const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "https://supatax.ai",
        "X-Title": "Supatax.ai",
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature,
        max_tokens: maxTokens,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to generate text");
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("OpenRouter API error:", error);
    throw error;
  }
}

export async function generateImage(options: GenerateImageOptions): Promise<string> {
  const { prompt, size = "1024x1024", quality = "standard" } = options;

  try {
    const response = await fetch(`${OPENROUTER_BASE_URL}/images/generations`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "https://supatax.ai",
        "X-Title": "Supatax.ai",
      },
      body: JSON.stringify({
        model: "openai/dall-e-3",
        prompt,
        size,
        quality,
        n: 1,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to generate image");
    }

    const data = await response.json();
    return data.data[0]?.url || "";
  } catch (error) {
    console.error("OpenRouter image API error:", error);
    throw error;
  }
}

// Rate limiting helper
const requestCounts = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(identifier: string, limit: number = 10, windowMs: number = 60000): boolean {
  const now = Date.now();
  const record = requestCounts.get(identifier);

  if (!record || now > record.resetTime) {
    requestCounts.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= limit) {
    return false;
  }

  record.count++;
  return true;
}
