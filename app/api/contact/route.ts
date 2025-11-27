// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    company?: string;
    projectType?: string;
    budget?: string;
    message: string;
    consent?: boolean;
};

function getResend() {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
        throw new Error("Missing RESEND_API_KEY environment variable.");
    }
    return new Resend(key);
}

export async function POST(req: NextRequest) {
    try {
        const body = (await req.json()) as ContactPayload;

        const {
            firstName,
            lastName,
            email,
            phone,
            company,
            projectType,
            budget,
            message,
            consent,
        } = body;

        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { ok: false, error: "Merci de remplir les champs obligatoires." },
                { status: 400 }
            );
        }

        const resend = getResend();

        const to = "stephanegamot@outlook.com";

        const { error } = await resend.emails.send({
from: "Site Stéphane Gamot <onboarding@resend.dev>",
            to,
            replyTo: email,
            subject: `Nouveau contact — ${firstName} ${lastName}`,
            text: `
Nouveau message depuis le formulaire de contact :

Nom : ${firstName} ${lastName}
Email : ${email}
Téléphone : ${phone || "—"}
Entreprise : ${company || "—"}
Type de projet : ${projectType || "—"}
Budget : ${budget || "—"}
Consentement RGPD : ${consent ? "Oui" : "Non"}

Message :
${message}
      `.trim(),
        });

        if (error) {
            console.error("Erreur Resend:", error);
            return NextResponse.json(
                {
                    ok: false,
                    error: "Erreur lors de l'envoi de l'email. Merci de réessayer plus tard.",
                },
                { status: 500 }
            );
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Erreur API /contact:", err);
        return NextResponse.json(
            {
                ok: false,
                error: "Erreur serveur. Merci de réessayer dans quelques minutes.",
            },
            { status: 500 }
        );
    }
}
