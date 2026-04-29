import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

const SITE = "https://www.stephanegamot.com";

export const metadata: Metadata = {
  title: "Création de site web à Bruxelles — Développeur freelance",
  description:
    "Développeur web freelance à Bruxelles. Sites vitrines, e-commerce et applications Next.js ou WordPress. Design premium, SEO local et performances Lighthouse 97+.",
  alternates: { canonical: `${SITE}/creation-site-web-bruxelles` },
  openGraph: {
    title: "Création de site web à Bruxelles — Stéphane Gamot",
    description:
      "Votre site professionnel à Bruxelles : rapide, élégant, optimisé SEO. Devis gratuit sous 24 h.",
    url: `${SITE}/creation-site-web-bruxelles`,
    type: "website",
    locale: "fr_BE",
    siteName: "Stéphane Gamot",
    images: [
      {
        url: `${SITE}/Images/og/office-workstation.webp`,
        width: 1200,
        height: 630,
        alt: "Création de site web à Bruxelles par Stéphane Gamot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Création de site web à Bruxelles — Stéphane Gamot",
    description:
      "Développeur web freelance à Bruxelles. Sites Next.js, WordPress, e-commerce. Devis gratuit.",
    images: [`${SITE}/Images/og/office-workstation.webp`],
  },
  keywords: [
    "création site web Bruxelles",
    "développeur web Bruxelles",
    "site internet Bruxelles",
    "agence web Bruxelles freelance",
    "site vitrine Bruxelles",
    "site e-commerce Bruxelles",
    "SEO Bruxelles",
  ],
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "Combien coûte un site web à Bruxelles ?",
    a: "Un site vitrine professionnel démarre à 1 500 €, un site e-commerce à 5 000 €. Le prix dépend du nombre de pages, des fonctionnalités et du niveau de personnalisation. Je propose un devis détaillé et gratuit après un premier échange.",
  },
  {
    q: "Quel est le délai pour créer un site à Bruxelles ?",
    a: "Comptez 3 à 5 semaines pour un site vitrine et 6 à 10 semaines pour un e-commerce. Je travaille en sprints courts avec des points réguliers pour que vous suiviez l'avancement en temps réel.",
  },
  {
    q: "Travaillez-vous uniquement sur Bruxelles ?",
    a: "Je suis basé à Halle, à 20 minutes de Bruxelles. J'accompagne des clients dans toute la Belgique et en France, en présentiel ou à distance selon votre préférence.",
  },
  {
    q: "Proposez-vous la maintenance après la mise en ligne ?",
    a: "Oui. 30 jours de support sont inclus après livraison. Je propose ensuite des forfaits de maintenance mensuels couvrant les mises à jour, sauvegardes, sécurité et corrections.",
  },
];

export default function CreationSiteWebBruxelles() {
  return (
    <>
      <Breadcrumb items={[{ label: "Création site web Bruxelles" }]} />

      {/* HERO */}
      <section className="section">
        <div className="divider mx-auto max-w-6xl" />
        <div
          className="mx-auto max-w-5xl px-8 lg:px-12"
          style={{ paddingTop: "var(--section-gap)" }}
        >
          <p className="section-label mb-4">Bruxelles & périphérie</p>
          <h1>
            Création de site web à{" "}
            <span style={{ color: "var(--accent)" }}>Bruxelles</span>
          </h1>
          <p
            className="mt-4 max-w-2xl text-base sm:text-lg"
            style={{ color: "var(--fg-muted)" }}
          >
            Vous cherchez un développeur web à Bruxelles pour un site qui inspire
            confiance, se charge vite et apparaît sur Google ? Je crée des sites
            vitrines, e-commerce et applications web sur mesure avec{" "}
            <Link
              href="/services/site-web-react-next"
              className="underline underline-offset-2 decoration-[var(--border)] hover:decoration-[var(--accent)] transition-colors"
            >
              Next.js
            </Link>
            ,{" "}
            <Link
              href="/services/site-internet-wordpress"
              className="underline underline-offset-2 decoration-[var(--border)] hover:decoration-[var(--accent)] transition-colors"
            >
              WordPress
            </Link>{" "}
            et{" "}
            <Link
              href="/services/e-commerce"
              className="underline underline-offset-2 decoration-[var(--border)] hover:decoration-[var(--accent)] transition-colors"
            >
              Stripe
            </Link>
            .
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

      {/* POURQUOI UN DEV LOCAL */}
      <section className="section">
        <div className="divider mx-auto max-w-6xl" />
        <div
          className="mx-auto max-w-5xl px-8 lg:px-12"
          style={{ paddingTop: "var(--section-gap)" }}
        >
          <h2>
            Pourquoi choisir un développeur web à Bruxelles ?
          </h2>
          <p
            className="mt-3 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)" }}
          >
            Travailler avec un freelance local, c'est pouvoir se voir, se parler
            simplement et avancer vite. Pas de tickets support, pas de call center :
            un interlocuteur unique qui connaît le tissu économique bruxellois.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Rencontres en personne",
                desc: "On peut se retrouver dans un café ou à votre bureau pour poser les bases du projet. Rien ne remplace un vrai échange.",
              },
              {
                title: "Connaissance du marché local",
                desc: "Je connais les attentes des clients belges, les obligations légales (RGPD, cookies, CGV) et les habitudes de recherche locales.",
              },
              {
                title: "Réactivité & proximité",
                desc: "Basé à Halle, à 20 min de Bruxelles-centre. Réponse sous 24 h, disponibilité pour des ajustements rapides après le lancement.",
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
                <p
                  className="text-sm font-semibold sm:text-base"
                  style={{ color: "var(--fg-base)" }}
                >
                  {item.title}
                </p>
                <p
                  className="mt-2 text-xs sm:text-sm"
                  style={{ color: "var(--fg-subtle)" }}
                >
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PROPOSÉS */}
      <section className="section">
        <div className="divider mx-auto max-w-6xl" />
        <div
          className="mx-auto max-w-5xl px-8 lg:px-12"
          style={{ paddingTop: "var(--section-gap)" }}
        >
          <h2>Mes services pour les entreprises bruxelloises</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Site vitrine",
                desc: "Un site clair et élégant pour présenter votre activité et générer des contacts qualifiés.",
                href: "/services/site-vitrine",
              },
              {
                title: "E-commerce",
                desc: "Boutique en ligne avec paiement Stripe, gestion des stocks et tunnel d'achat optimisé.",
                href: "/services/e-commerce",
              },
              {
                title: "SEO local Bruxelles",
                desc: "Optimisation pour apparaître en tête sur les recherches locales : Google Maps, Google Business, requêtes géolocalisées.",
                href: "/services/seo",
              },
              {
                title: "Site Next.js / React",
                desc: "Application web ultra-rapide, score Lighthouse 97+, parfaite pour les projets ambitieux.",
                href: "/services/site-web-react-next",
              },
              {
                title: "Site WordPress",
                desc: "CMS flexible, facile à gérer au quotidien, idéal pour les PME et indépendants.",
                href: "/services/site-internet-wordpress",
              },
              {
                title: "Accessibilité",
                desc: "Mise en conformité RGAA/WCAG pour un site inclusif, confortable et conforme aux obligations légales.",
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
                <p
                  className="text-sm font-semibold sm:text-base group-hover:text-[var(--accent)] transition-colors"
                  style={{ color: "var(--fg-base)" }}
                >
                  {svc.title}
                </p>
                <p
                  className="mt-2 text-xs sm:text-sm"
                  style={{ color: "var(--fg-subtle)" }}
                >
                  {svc.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="section-tight">
        <div
          className="mx-auto max-w-5xl px-8 lg:px-12"
        >
          <div
            className="grid grid-cols-2 gap-6 md:grid-cols-4 p-8"
            style={{
              borderRadius: "1.25rem",
              border: "1px solid var(--border)",
              background: "var(--surface-1)",
            }}
          >
            {[
              { value: "17+", label: "Projets livrés" },
              { value: "97/100", label: "Lighthouse moyen" },
              { value: "4.9/5", label: "Satisfaction" },
              { value: "<24h", label: "Délai de réponse" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-2xl font-semibold sm:text-3xl"
                  style={{
                    color: "var(--accent)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="mt-1 text-xs sm:text-sm"
                  style={{ color: "var(--fg-subtle)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ LOCALE */}
      <section className="section">
        <div className="divider mx-auto max-w-6xl" />
        <div
          className="mx-auto max-w-5xl px-8 lg:px-12"
          style={{ paddingTop: "var(--section-gap)" }}
        >
          <h2>Questions fréquentes — Création de site web à Bruxelles</h2>
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
                <summary
                  className="cursor-pointer px-5 py-4 text-sm font-semibold sm:text-base"
                  style={{ color: "var(--fg-base)" }}
                >
                  {faq.q}
                </summary>
                <p
                  className="px-5 pb-4 text-xs sm:text-sm"
                  style={{ color: "var(--fg-muted)" }}
                >
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
          <h2>Prêt à lancer votre site à Bruxelles ?</h2>
          <p
            className="mt-3 text-sm sm:text-base"
            style={{ color: "var(--fg-muted)" }}
          >
            Prenons 20 minutes pour discuter de votre projet. Devis gratuit,
            sans engagement.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-primary">
              Me contacter
            </Link>
            <Link href="/services/tarifs" className="btn btn-outline">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProfessionalService",
                "@id": `${SITE}/creation-site-web-bruxelles#business`,
                name: "Stéphane Gamot — Création de site web à Bruxelles",
                description:
                  "Développeur web freelance à Bruxelles. Création de sites vitrines, e-commerce et applications web Next.js et WordPress.",
                url: `${SITE}/creation-site-web-bruxelles`,
                telephone: "+32 477 71 31 93",
                email: "stephanegamot@outlook.com",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Halle",
                  addressRegion: "Brabant flamand",
                  postalCode: "1501",
                  addressCountry: "BE",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 50.7464661,
                  longitude: 4.1889277,
                },
                areaServed: {
                  "@type": "City",
                  name: "Bruxelles",
                },
                priceRange: "€€",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "32",
                  bestRating: "5",
                  worstRating: "1",
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
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Accueil",
                    item: SITE,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Création site web Bruxelles",
                    item: `${SITE}/creation-site-web-bruxelles`,
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
