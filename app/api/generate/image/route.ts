import { NextRequest, NextResponse } from "next/server";
import { generateImage } from "@/lib/openrouter";

export async function POST(req: NextRequest) {
  try {

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
