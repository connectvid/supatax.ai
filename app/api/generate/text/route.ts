import { NextRequest, NextResponse } from "next/server";
import { generateText } from "@/lib/openrouter";

export async function POST(req: NextRequest) {
  try {

    const body = await req.json();
    const { systemPrompt, userPrompt, temperature = 0.7, maxTokens = 2000 } = body;

    if (!systemPrompt || !userPrompt) {
      return NextResponse.json(
        { error: "Missing required fields: systemPrompt and userPrompt" },
        { status: 400 }
      );
    }

    const content = await generateText({
      systemPrompt,
      userPrompt,
      temperature,
      maxTokens,
    });

    return NextResponse.json({ content });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate content. Please try again." },
      { status: 500 }
    );
  }
}
