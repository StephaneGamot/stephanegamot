// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message: string;
  consent: boolean;
};

function validate(body: any): { ok: boolean; error?: string } {
  if (!body) return { ok: false, error: "Données manquantes." };

  const { firstName, lastName, email, message, consent } = body as Payload;

  if (!firstName || !lastName || !email || !message) {
    return {
      ok: false,
      error: "Merci de remplir au minimum prénom, nom, email et message.",
    };
  }

  if (!consent) {
    return {
      ok: false,
      error:
        "Vous devez accepter l’utilisation de vos données pour pouvoir être recontacté(e).",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { ok: false, error: "L'adresse email semble invalide." };
  }

  return { ok: true };
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Payload;

    const validation = validate(body);
    if (!validation.ok) {
      return NextResponse.json(
        { ok: false, error: validation.error },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("❌ RESEND_API_KEY manquante sur le serveur");
      return NextResponse.json(
        {
          ok: false,
          error:
            "Configuration serveur incomplète (clé email manquante). Contactez-moi directement par email.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      projectType,
      budget,
      message,
    } = body;

    const to = process.env.CONTACT_TO || "stephanegamot@outlook.com";
    const from =
      process.env.CONTACT_FROM ||
      "Stéphane Gamot <contact@mail.stephanegamot.com>";

    const subject = `Nouveau message de ${firstName} ${lastName} – Formulaire site`;

    const text = `
Nouveau message reçu depuis le site :

Nom : ${firstName} ${lastName}
Email : ${email}
Téléphone : ${phone || "-"}
Entreprise : ${company || "-"}

Type de projet : ${projectType || "-"}
Budget indicatif : ${budget || "-"}

Message :
${message}
`;

    const html = `
  <h2>Nouveau message depuis le formulaire de contact</h2>
  <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
  <p><strong>Email :</strong> ${email}</p>
  <p><strong>Téléphone :</strong> ${phone || "-"}</p>
  <p><strong>Entreprise :</strong> ${company || "-"}</p>
  <p><strong>Type de projet :</strong> ${projectType || "-"}</p>
  <p><strong>Budget indicatif :</strong> ${budget || "-"}</p>
  <hr />
  <p><strong>Message :</strong></p>
  <p>${message.replace(/\n/g, "<br />")}</p>
`;

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      text,
      html,
      replyTo: email, // pour pouvoir répondre direct au client
    });

    if (error) {
      console.error("❌ Erreur Resend :", error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "Impossible d’envoyer l’email pour le moment. Vous pouvez aussi me contacter directement par email.",
          details: process.env.NODE_ENV === "development" ? error : undefined,
        },
        { status: 500 }
      );
    }

    console.log("✅ Email envoyé via Resend :", data);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("❌ Erreur /api/contact :", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Une erreur est survenue lors de l’envoi du message. Vous pouvez aussi me contacter directement par email.",
        details: process.env.NODE_ENV === "development" ? String(err) : undefined,
      },
      { status: 500 }
    );
  }
}
