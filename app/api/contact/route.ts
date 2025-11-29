// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

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

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    const validation = validate(body);
    if (!validation.ok) {
      return NextResponse.json(
        { ok: false, error: validation.error },
        { status: 400 }
      );
    }

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
      process.env.CONTACT_FROM || "Formulaire <no-reply@resend.dev>";

    const subject = `Nouveau message de ${firstName} ${lastName} – Formulaire site`;

    const text = `
Nouveau message reçu depuis le site :

Nom : ${firstName} ${lastName}
Email : ${email}
Téléphone : ${phone || "-" }
Entreprise : ${company || "-" }

Type de projet : ${projectType || "-" }
Budget indicatif : ${budget || "-" }

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

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "Impossible d’envoyer l’email pour le moment. Vous pouvez aussi me contacter directement par email.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erreur /api/contact :", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Une erreur est survenue lors de l’envoi du message. Vous pouvez aussi me contacter directement par email.",
      },
      { status: 500 }
    );
  }
}
