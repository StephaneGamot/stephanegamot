import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

const SITE = "https://www.stephanegamot.com";

export const metadata: Metadata = {
  title: "Site web Brabant wallon — Dev freelance",
  description:
    "Développeur web freelance pour le Brabant wallon. Sites vitrines, e-commerce et SEO pour Wavre, Ottignies, Nivelles, Waterloo et toute la province.",
  alternates: {
    canonical: `${SITE}/creation-site-web-brabant-wallon`,
    languages: {
      "fr-BE": `${SITE}/creation-site-web-brabant-wallon`,
      "fr-FR": `${SITE}/creation-site-web-brabant-wallon`,
      "x-default": `${SITE}/creation-site-web-brabant-wallon`,
    },
  },
  openGraph: {
    title: "Création de site web en Brabant wallon — Stéphane Gamot",
    description:
      "Sites professionnels pour le Brabant wallon : Wavre, Ottignies, Nivelles, Waterloo. SEO local et design premium.",
    url: `${SITE}/creation-site-web-brabant-wallon`,
    type: "website",
    locale: "fr_BE",
    siteName: "Stéphane Gamot",
    images: [
      {
        url: `${SITE}/Images/og/office-workstation.webp`,
        width: 1200,
        height: 630,
        alt: "Création de site web en Brabant wallon",
      },
    ],
  },
  keywords: [
    "création site web Brabant wallon",
    "développeur web Wavre",
    "site internet Ottignies",
    "site web Nivelles",
    "développeur freelance Waterloo",
    "agence web Brabant wallon",
    "site vitrine Brabant wallon",
  ],
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "Intervenez-vous dans tout le Brabant wallon ?",
    a: "Oui. Je travaille avec des clients à Wavre, Ottignies-Louvain-la-Neuve, Nivelles, Waterloo, Braine-l'Alleud, Tubize et dans toute la province. Les échanges se font en visio ou en présentiel selon votre préférence.",
  },
  {
    q: "Quel type de site convient pour un commerce en Brabant wallon ?",
    a: "Pour un commerce local, un site vitrine optimisé SEO local est souvent le meilleur rapport qualité-prix. Si vous vendez des produits, un e-commerce avec paiement en ligne et livraison/retrait est plus adapté. Je vous conseille selon votre situation.",
  },
  {
    q: "Comment m'assurer que mon site apparaît sur Google en Brabant wallon ?",
    a: "J'intègre dès la création les bonnes pratiques SEO local : balises schema.org, optimisation Google Business Profile, contenu ciblé sur vos mots-clés géographiques et technique irréprochable (vitesse, mobile-first, HTTPS).",
  },
  {
    q: "Quel est votre tarif pour un site en Brabant wallon ?",
    a: "Les tarifs sont les mêmes quelle que soit la localisation : à partir de 1 500 € pour un site vitrine, 3 500 € pour un site professionnel et 5 000 € pour un e-commerce. Consultez ma page tarifs pour le détail.",
  },
];

export default function CreationSiteWebBrabantWallon() {
  return (
    <>
      <Breadcrumb items={[{ label: "Création site web Brabant wallon" }]} />

      {/* HERO */}
      <section className="section">
        <div className="divider mx-auto max-w-6xl" />
        <div className="mx-auto max-w-5xl px-8 lg:px-12" style={{ paddingTop: "var(--section-gap)" }}>
          <p className="section-label mb-4">Brabant wallon</p>
          <h1>
            Création de site web en{" "}
            <span style={{ color: "var(--accent)" }}>Brabant wallon</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg" style={{ color: "var(--fg-muted)" }}>
            Wavre, Ottignies, Nivelles, Waterloo, Braine-l'Alleud — je conçois
            des sites web sur mesure pour les entreprises et indépendants du
            Brabant wallon. Performance, design soigné et{" "}
            <Link href="/services/seo" className="underline underline-offset-2 decoration-[var(--border)] hover:decoration-[var(--accent)] transition-colors">
              SEO local
            </Link>{" "}
            pour être trouvé par vos clients de proximité.
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

      {/* VILLES COUVERTES */}
      <section className="section">
        <div className="divider mx-auto max-w-6xl" />
        <div className="mx-auto max-w-5xl px-8 lg:px-12" style={{ paddingTop: "var(--section-gap)" }}>
          <h2>Les villes du Brabant wallon que j'accompagne</h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Je connais bien le tissu économique de la province. Voici les
            principales villes où j'interviens régulièrement :
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Wavre",
              "Ottignies-Louvain-la-Neuve",
              "Nivelles",
              "Waterloo",
              "Braine-l'Alleud",
              "Tubize",
              "Jodoigne",
              "Rixensart",
              "Court-Saint-Étienne",
              "La Hulpe",
              "Lasne",
              "Genappe",
            ].map((city) => (
              <span key={city} className="pill">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="divider mx-auto max-w-6xl" />
        <div className="mx-auto max-w-5xl px-8 lg:px-12" style={{ paddingTop: "var(--section-gap)" }}>
          <h2>Mes services pour le Brabant wallon</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Site vitrine",
                desc: "Un site clair et professionnel pour présenter votre activité et convertir les visiteurs en clients.",
                href: "/services/site-vitrine",
              },
              {
                title: "E-commerce",
                desc: "Boutique en ligne avec tunnel d'achat optimisé, paiement Stripe et gestion des stocks.",
                href: "/services/e-commerce",
              },
              {
                title: "SEO local",
                desc: "Être trouvé sur Google quand un habitant du Brabant wallon cherche votre métier.",
                href: "/services/seo",
              },
              {
                title: "Site Next.js",
                desc: "Application web ultra-rapide pour les projets ambitieux. Lighthouse 97+.",
                href: "/services/site-web-react-next",
              },
              {
                title: "Site WordPress",
                desc: "CMS simple à gérer, idéal pour publier du contenu régulièrement.",
                href: "/services/site-internet-wordpress",
              },
              {
                title: "Accessibilité",
                desc: "Un site utilisable par tous, conforme RGAA/WCAG.",
                href: "/services/accessibilite",
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
          <h2>Questions fréquentes — Brabant wallon</h2>
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
          <h2>Un projet web en Brabant wallon ?</h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Parlons-en. Premier échange gratuit, devis sous 24 h, aucun
            engagement.
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
                "@id": `${SITE}/creation-site-web-brabant-wallon#business`,
                name: "Stéphane Gamot — Création de site web en Brabant wallon",
                description: "Développeur web freelance pour le Brabant wallon. Sites vitrines, e-commerce et SEO local pour Wavre, Ottignies, Nivelles, Waterloo.",
                url: `${SITE}/creation-site-web-brabant-wallon`,
                telephone: "+32 477 71 31 93",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Halle",
                  addressRegion: "Brabant flamand",
                  postalCode: "1501",
                  addressCountry: "BE",
                },
                areaServed: {
                  "@type": "AdministrativeArea",
                  name: "Brabant wallon",
                },
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
                  { "@type": "ListItem", position: 2, name: "Création site web Brabant wallon", item: `${SITE}/creation-site-web-brabant-wallon` },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
