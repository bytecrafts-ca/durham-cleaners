import { generateLlmsFullTxt, generateLlmsTxt } from "@/lib/llms";

export const dynamic = "force-static";
export const revalidate = 86400;

function textResponse(body: string) {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

export async function GET() {
  return textResponse(generateLlmsTxt());
}
