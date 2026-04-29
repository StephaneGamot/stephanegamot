import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

const SITE = "https://www.stephanegamot.com";

export const metadata: Metadata = {
  title: "Création de site web à Halle — Développeur freelance local",
  description:
    "Développeur web basé à Halle. Sites vitrines, e-commerce et SEO local pour les commerces et indépendants du Pajottenland et de la périphérie bruxelloise.",
  alternates: { canonical: `${SITE}/creation-site-web-halle` },
  openGraph: {
    title: "Création de site web à Halle — Stéphane Gamot",
    description:
      "Votre développeur web à Halle. Sites professionnels, rapides et optimisés SEO. Rencontre possible sur place.",
    url: `${SITE}/creation-site-web-halle`,
    type: "website",
    locale: "fr_BE",
    siteName: "Stéphane Gamot",
    images: [
      {
        url: `${SITE}/Images/og/office-workstation.webp`,
        width: 1200,
        height: 630,
        alt: "Création de site web à Halle par Stéphane Gamot",
      },
    ],
  },
  keywords: [
    "création site web Halle",
    "développeur web Halle Belgique",
    "site internet Halle",
    "webdesigner Pajottenland",
    "site vitrine Halle",
    "freelance web périphérie bruxelloise",
  ],
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "Pourquoi choisir un développeur web basé à Halle ?",
    a: "Je vis et travaille à Halle. On peut se rencontrer facilement, discuter de votre projet en face à face et construire une vraie relation de confiance. Pas de sous-traitance, un seul interlocuteur du début à la fin.",
  },
  {
    q: "Quels types de sites créez-vous pour les commerces de Halle ?",
    a: "Sites vitrines pour indépendants et professions libérales, boutiques en ligne pour les commerces locaux, sites de réservation pour restaurants et thérapeutes. Chaque site est pensé pour le SEO local et la conversion.",
  },
  {
    q: "Mon site sera-t-il visible sur Google pour les recherches locales ?",
    a: "Oui, c'est une priorité. J'optimise chaque site pour le référencement local : Google Business Profile, balisage schema.org LocalBusiness, mots-clés géolocalisés et contenu adapté à votre zone de chalandise.",
  },
  {
    q: "Proposez-vous un accompagnement après la livraison ?",
    a: "30 jours de support sont inclus dans chaque projet. Ensuite, je propose des forfaits mensuels pour la maintenance, les mises à jour de contenu et le suivi SEO.",
  },
];

export default function CreationSiteWebHalle() {
  return (
    <>
      <Breadcrumb items={[{ label: "Création site web Halle" }]} />

      {/* HERO */}
      <section className="section">
        <div className="divider mx-auto max-w-6xl" />
        <div className="mx-auto max-w-5xl px-8 lg:px-12" style={{ paddingTop: "var(--section-gap)" }}>
          <p className="section-label mb-4">Halle & Pajottenland</p>
          <h1>
            Création de site web à{" "}
            <span style={{ color: "var(--accent)" }}>Halle</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg" style={{ color: "var(--fg-muted)" }}>
            Développeur web installé à Halle, je crée des sites professionnels
            pour les commerces, indépendants et PME du Pajottenland et de la
            périphérie bruxelloise. Des sites beaux, rapides et pensés pour
            attirer vos clients locaux sur Google.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-primary">
              Demander un devis gratuit
            </Link>
            <Link href="/portfolio" className="btn btn-outline">
              Voir mes réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* AVANTAGES LOCAL */}
      <section className="section">
        <div className="divider mx-auto max-w-6xl" />
        <div className="mx-auto max-w-5xl px-8 lg:px-12" style={{ paddingTop: "var(--section-gap)" }}>
          <h2>Un développeur web à deux pas de chez vous</h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Travailler avec quelqu'un du coin, ça change tout. On se comprend
            vite, on avance sans friction, et votre site reflète vraiment votre
            ancrage local.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Rendez-vous en personne",
                desc: "On se retrouve à Halle pour discuter de votre projet autour d'un café. Rien de tel qu'un vrai échange pour poser les bonnes bases.",
              },
              {
                title: "SEO local ciblé",
                desc: "J'optimise votre site pour les recherches locales : 'restaurant Halle', 'kinésithérapeute Pajottenland', etc. Google Maps, fiches Google, le tout.",
              },
              {
                title: "Suivi personnalisé",
                desc: "Un seul interlocuteur, pas de call center. Vous m'appelez, je réponds. Ajustements rapides, communication directe.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="p-5"
                style={{
                  borderRadius: "1rem",
                  border: "1px solid var(--border)",
                  background: "var(--surface-1)",
                }}
              >
                <p className="text-sm font-semibold sm:text-base" style={{ color: "var(--fg-base)" }}>
                  {item.title}
                </p>
                <p className="mt-2 text-xs sm:text-sm" style={{ color: "var(--fg-subtle)" }}>
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="divider mx-auto max-w-6xl" />
        <div className="mx-auto max-w-5xl px-8 lg:px-12" style={{ paddingTop: "var(--section-gap)" }}>
          <h2>Ce que je propose aux entreprises de Halle</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Site vitrine pour indépendants",
                desc: "Présentez votre activité avec un site clair, rassurant et optimisé pour générer des appels et des demandes de contact.",
                href: "/services/site-vitrine",
              },
              {
                title: "Boutique en ligne locale",
                desc: "Vendez vos produits en ligne avec un e-commerce fluide, paiement Stripe sécurisé et livraison locale configurée.",
                href: "/services/e-commerce",
              },
              {
                title: "SEO local & Google Business",
                desc: "Apparaissez en haut des résultats quand un client cherche votre métier + Halle sur Google.",
                href: "/services/seo",
              },
              {
                title: "Refonte de site existant",
                desc: "Votre site actuel est lent, daté ou mal référencé ? Je le reprends de zéro avec une approche moderne et performante.",
                href: "/contact",
              },
            ].map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group block p-5 transition-colors"
                style={{
                  borderRadius: "1rem",
                  border: "1px solid var(--border)",
                  background: "var(--surface-1)",
                }}
              >
                <p className="text-sm font-semibold sm:text-base group-hover:text-[var(--accent)] transition-colors" style={{ color: "var(--fg-base)" }}>
                  {svc.title}
                </p>
                <p className="mt-2 text-xs sm:text-sm" style={{ color: "var(--fg-subtle)" }}>
                  {svc.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="divider mx-auto max-w-6xl" />
        <div className="mx-auto max-w-5xl px-8 lg:px-12" style={{ paddingTop: "var(--section-gap)" }}>
          <h2>Questions fréquentes — Création de site à Halle</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group"
                style={{
                  borderRadius: "1rem",
                  border: "1px solid var(--border)",
                  background: "var(--surface-1)",
                }}
              >
                <summary className="cursor-pointer px-5 py-4 text-sm font-semibold sm:text-base" style={{ color: "var(--fg-base)" }}>
                  {faq.q}
                </summary>
                <p className="px-5 pb-4 text-xs sm:text-sm" style={{ color: "var(--fg-muted)" }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="mx-auto max-w-3xl px-8 text-center">
          <h2>Envie d'un site qui travaille pour vous à Halle ?</h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            On prend un café et on en parle. Premier échange gratuit, devis
            détaillé sous 24 h.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-primary">Me contacter</Link>
            <Link href="/services/tarifs" className="btn btn-outline">Voir les tarifs</Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProfessionalService",
                "@id": `${SITE}/creation-site-web-halle#business`,
                name: "Stéphane Gamot — Création de site web à Halle",
                description: "Développeur web basé à Halle. Sites vitrines, e-commerce et SEO local pour le Pajottenland et la périphérie bruxelloise.",
                url: `${SITE}/creation-site-web-halle`,
                telephone: "+32 477 71 31 93",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Halle",
                  addressRegion: "Brabant flamand",
                  postalCode: "1501",
                  addressCountry: "BE",
                },
                geo: { "@type": "GeoCoordinates", latitude: 50.7464661, longitude: 4.1889277 },
                areaServed: { "@type": "City", name: "Halle" },
                priceRange: "€€",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "32",
                  bestRating: "5",
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: SITE },
                  { "@type": "ListItem", position: 2, name: "Création site web Halle", item: `${SITE}/creation-site-web-halle` },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
