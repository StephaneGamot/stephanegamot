// app/api/test-resend/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM || "Stéphane Gamot <contact@mail.stephanegamot.com>",
      to: process.env.CONTACT_TO || "stephanegamot@outlook.com",
      subject: "Test Resend – stephanegamot.com",
      text: "Si tu reçois cet email, ton domaine Resend fonctionne ✅",
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ ok: false, error }, { status: 500 });
    }

    return NextResponse.json({ ok: true, data });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected error" },
      { status: 500 }
    );
  }
}
