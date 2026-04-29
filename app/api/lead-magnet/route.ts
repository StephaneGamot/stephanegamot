// app/api/lead-magnet/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { email } = (await req.json()) as { email?: string };

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Email invalide." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("❌ RESEND_API_KEY manquante");
      return NextResponse.json(
        { ok: false, error: "Configuration serveur incomplète." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const from =
      process.env.CONTACT_FROM ||
      "Stéphane Gamot <contact@mail.stephanegamot.com>";

    // 1. Envoyer la checklist au visiteur
    await resend.emails.send({
      from,
      to: email,
      subject: "Votre checklist : 15 points avant de lancer votre site",
      html: `
        <h2>Merci pour votre intérêt !</h2>
        <p>Voici votre checklist gratuite des <strong>15 points essentiels à vérifier avant de lancer votre site web</strong>.</p>

        <h3>Performance & technique</h3>
        <ol>
          <li>Score Lighthouse &ge; 90 sur mobile et desktop</li>
          <li>Temps de chargement &lt; 2,5 secondes (LCP)</li>
          <li>HTTPS actif avec certificat SSL valide</li>
          <li>Site responsive sur mobile, tablette et desktop</li>
          <li>Pas de liens cassés (erreurs 404)</li>
        </ol>

        <h3>SEO & visibilité</h3>
        <ol start="6">
          <li>Balises title et meta description uniques par page</li>
          <li>Structure H1 &rarr; H2 &rarr; H3 cohérente</li>
          <li>Sitemap XML soumis à Google Search Console</li>
          <li>Google Analytics / GA4 configuré</li>
          <li>Images compressées avec attributs alt descriptifs</li>
        </ol>

        <h3>Confiance & conversion</h3>
        <ol start="11">
          <li>Page de contact fonctionnelle et testée</li>
          <li>Mentions légales et politique de confidentialité présentes</li>
          <li>Bandeau cookies conforme RGPD</li>
          <li>Témoignages ou preuves sociales visibles</li>
          <li>Appels à l'action clairs sur chaque page</li>
        </ol>

        <hr />
        <p>Besoin d'aide pour mettre tout ça en place ? <a href="https://www.stephanegamot.com/contact">Contactez-moi</a> pour un audit gratuit de votre site.</p>
        <p>— Stéphane Gamot<br/><a href="https://www.stephanegamot.com">www.stephanegamot.com</a></p>
      `,
    });

    // 2. Notification interne
    const to = process.env.CONTACT_TO || "stephanegamot@outlook.com";
    await resend.emails.send({
      from,
      to,
      subject: `Nouveau lead magnet : ${email}`,
      text: `Un visiteur a téléchargé la checklist.\n\nEmail : ${email}\nDate : ${new Date().toLocaleString("fr-BE")}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("❌ Erreur /api/lead-magnet :", err);
    return NextResponse.json(
      { ok: false, error: "Erreur serveur." },
      { status: 500 }
    );
  }
}
