import { NextResponse } from "next/server";

import { getOpenAiClient } from "@/lib/openai/client";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const { prompt } = (await request.json()) as { prompt?: string };
    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
    }

    const openai = getOpenAiClient();
    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `Provide concise website strategy guidance for: ${prompt}`,
    });

    return NextResponse.json({ output: response.output_text ?? "" });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unable to generate AI response.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
