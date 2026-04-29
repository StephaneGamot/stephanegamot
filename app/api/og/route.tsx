// app/api/og/route.tsx
// Génère une image Open Graph dynamique par page
// Usage : /api/og?title=Mon+titre&subtitle=Ma+description
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Stéphane Gamot";
  const subtitle =
    searchParams.get("subtitle") || "Création de sites web performants";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#08090c",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Halo décoratif */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,169,110,0.15), transparent 70%)",
          }}
        />

        {/* Label */}
        <div
          style={{
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: "#c9a96e",
            marginBottom: "24px",
          }}
        >
          stephanegamot.com
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "52px",
            fontWeight: 600,
            color: "#f0ece4",
            lineHeight: 1.1,
            maxWidth: "900px",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(240,236,228,0.6)",
            marginTop: "20px",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </div>

        {/* Footer bar */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(240,236,228,0.13)",
            paddingTop: "20px",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: "#f0ece4",
            }}
          >
            Stéphane Gamot
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "rgba(240,236,228,0.5)",
            }}
          >
            Développeur web freelance · Belgique
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
