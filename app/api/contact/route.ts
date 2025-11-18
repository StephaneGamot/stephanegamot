// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // important pour Resend

const resend = new Resend(process.env.RESEND_API_KEY);

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
    recaptchaToken?: string;
};
/*
async function verifyRecaptcha(token?: string) {
    const secret = process.env.RECAPTCHA_SECRET_KEY;

    // En dev : si pas de clé, on passe (tu peux durcir plus tard)
    if (!secret) {
        console.warn("RECAPTCHA_SECRET_KEY manquant — reCAPTCHA ignoré (DEV).");
        return true;
    }

    if (!token) return false;

    const params = new URLSearchParams();
    params.append("secret", secret);
    params.append("response", token);

    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
    });

    const data = await res.json();

    // Pour reCAPTCHA v3 tu peux aussi ajouter un check sur data.score
    // ex: return data.success === true && data.score > 0.5;
    return data.success === true;
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
            recaptchaToken,
        } = body;

        // 1️⃣ Validation minimale
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { ok: false, error: "Merci de remplir les champs obligatoires." },
                { status: 400 }
            );
        }

        // 2️⃣ Vérification reCAPTCHA
        const recaptchaOK = await verifyRecaptcha(recaptchaToken);
        if (!recaptchaOK) {
            return NextResponse.json(
                { ok: false, error: "Vérification reCAPTCHA échouée." },
                { status: 400 }
            );
        }

        // 3️⃣ Envoi de l'email via Resend
        const to = "stephanegamot@outlook.com";

        const { error } = await resend.emails.send({
            from: "Site Stéphane Gamot <contact@whitewolfweb.be>", // domaine à vérifier chez Resend
            to,
            replyTo: email, // ✅ camelCase
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

        // 4️⃣ Réponse OK pour ton composant client
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

*/