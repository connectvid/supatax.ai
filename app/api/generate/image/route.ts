import { NextRequest, NextResponse } from "next/server";
import { generateImage, checkRateLimit } from "@/lib/openrouter";

export async function POST(req: NextRequest) {
  try {
    // Rate limiting - stricter for images
    const ip = req.ip || "anonymous";
    if (!checkRateLimit(ip, 3, 60000)) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { prompt, size = "1024x1024", quality = "standard" } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: "Missing required field: prompt" },
        { status: 400 }
      );
    }

    const imageUrl = await generateImage({ prompt, size, quality });

    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error("Image API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate image. Please try again." },
      { status: 500 }
    );
  }
}
