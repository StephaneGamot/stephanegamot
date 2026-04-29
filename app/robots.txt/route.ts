import { NextResponse } from "next/server";

export function GET() {
  return new NextResponse(
    `
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/static/
Disallow: /_next/image/

# Crawl-delay pour les bots agressifs
User-agent: AhrefsBot
Crawl-delay: 5

User-agent: SemrushBot
Crawl-delay: 5

# Sitemap
Sitemap: https://www.stephanegamot.com/sitemap.xml
Sitemap: https://www.stephanegamot.com/sitemap-0.xml

# Host canonique
Host: https://www.stephanegamot.com
    `.trim(),
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
