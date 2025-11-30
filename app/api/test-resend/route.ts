// app/api/test-resend/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function GET() {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "RESEND_API_KEY manquante" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM ||
        "Stéphane Gamot <contact@mail.stephanegamot.com>",
      to: process.env.CONTACT_TO || "stephanegamot@outlook.com",
      subject: "Test Resend – stephanegamot.com",
      text: "Si tu reçois cet email, ton domaine Resend fonctionne ✅",
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ ok: false, error }, { status: 500 });
    }

    return NextResponse.json({ ok: true, data });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
