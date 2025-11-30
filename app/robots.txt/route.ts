import { NextResponse } from "next/server";

export function GET() {
  return new NextResponse(
    `
User-agent: *
Allow: /

Sitemap: https://www.stephanegamot.com/sitemap.xml
    `.trim(),
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
