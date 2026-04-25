import type { Metadata } from "next";
import Link from "next/link";
import Me from "@/public/Images/me/me.webp"
import Image from "next/image";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

const SITE_URL = "https://www.stephanegamot.com";

export const metadata: Metadata = {
  title: "Développeur web freelance Bruxelles — Stéphane Gamot",
  description:
    "Développeur web freelance à Bruxelles : sites élégants, rapides et optimisés SEO. Design soigné, performance et conversion. Parlons de votre projet.",
  alternates: {
    canonical: `${SITE_URL}/me`,
  },
  openGraph: {
    type: "profile",
    url: `${SITE_URL}/me`,
    title: "Développeur web freelance Bruxelles — Stéphane Gamot",
    description:
      "Développeur web freelance à Bruxelles : sites élégants, rapides et optimisés SEO. Design soigné, performance et conversion. Parlons de votre projet.",
    siteName: "Stéphane Gamot",
    locale: "fr_BE",
    images: [
      {
        // n'utilise PAS "@/public" ici, mais bien un chemin public ou une URL absolue
        url: `${SITE_URL}/Images/og/office-workstation.webp`,
        width: 1200,
        height: 630,
        alt: "Bureau moderne avec un écran affichant un site web professionnel.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Développeur web freelance Bruxelles — Stéphane Gamot",
    description:
      "Développeur web full-stack basé en Belgique, avec une approche haut de gamme, orientée design, performance et conversion.",
    images: [`${SITE_URL}/Images/og/office-workstation.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "À propos" }]} />
      {/* HERO */}
      <section className="relative overflow-hidden section">
        <div className="divider mx-auto max-w-6xl" />

        <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-8 lg:px-12 lg:flex-row lg:items-center lg:gap-24" style={{ paddingTop: "var(--section-gap)" }}>
          {/* Texte */}
          <div className="max-w-xl space-y-5">
            <p className="section-label mb-4">
              À propos
            </p>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: "var(--fg-base)" }}>
              Je construis des sites{" "}
              <span style={{ color: "var(--accent)" }}>
                élégants, clairs et efficaces
              </span>
              .
            </h1>

            <p className="text-sm leading-relaxed sm:text-base" style={{ color: "var(--fg-muted)" }}>
              Je suis <span className="font-semibold">Stéphane Gamot</span>,
             Architecte Front-End — Design Systems & Ingénieur en développement logiciel full-stack. 
              Je conçois des sites pour les indépendants, thérapeutes,
              restaurants et petites entreprises qui veulent une présence en ligne
              sérieuse, rassurante et professionnelle.
            </p>

            <p className="text-sm leading-relaxed sm:text-base" style={{ color: "var(--fg-muted)" }}>
              Mon rôle : traduire vos idées en un site concret, lisible,
              agréable à parcourir, qui vous apporte des demandes de contact,
              des réservations ou des ventes – pas juste une “vitrine”.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="btn btn-primary"
              >
                Me parler de votre projet
              </Link>
              <Link
                href="/portfolio"
                className="btn btn-outline"
              >
                Voir quelques réalisations
              </Link>
            </div>
          </div>

          {/* Visuel simple */}
          <div className="relative w-full max-w-sm lg:ml-auto">
            <div style={{ borderRadius: "1rem", border: "1px solid var(--border)", background: "var(--surface-1)", overflow: "hidden" }}>
              <Image
                src={Me}
                alt="Lumière douce dans un intérieur minimal, ambiance calme et harmonieuse."
                className="h-full max-h-[380px] w-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-6 right-5 w-44 p-3 text-[11px]" style={{ borderRadius: "1rem", background: "rgba(8,9,12,0.9)", border: "1px solid var(--border)", boxShadow: "var(--shadow-soft)" }}>
              <p className="text-xs font-semibold" style={{ color: "var(--fg-base)" }}>
                Ce que j’aime créer
              </p>
              <p className="mt-1 text-[11px] leading-snug" style={{ color: "var(--fg-subtle)" }}>
                Des interfaces calmes, structurées, où on comprend vite quoi faire
                et où cliquer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CE QUE JE PEUX VOUS APPORTER */}
      <section className="section">
        <div className="divider mx-auto max-w-6xl" />
        <div className="mx-auto max-w-5xl px-8 lg:px-12" style={{ paddingTop: "var(--section-gap)" }}>
          <h2 className="text-center text-xl font-semibold tracking-tight sm:text-2xl" style={{ color: "var(--fg-base)" }}>
            Concrètement, ce que je peux vous apporter
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Mon travail mélange design, technique et stratégie.  
            L’objectif : un site beau, rapide, mais surtout utile pour votre activité.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="p-4 sm:p-5" style={{ borderRadius: "1rem", border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="text-sm font-semibold sm:text-base" style={{ color: "var(--fg-base)" }}>
                Compréhension & clarté
              </p>
              <p className="mt-2 text-xs sm:text-sm" style={{ color: "var(--fg-subtle)" }}>
                Je commence par écouter : votre métier, vos clients, vos contraintes.
                Ensuite, je structure votre site pour qu’un visiteur comprenne en
                quelques secondes qui vous êtes et ce que vous proposez.
              </p>
            </article>

            <article className="p-4 sm:p-5" style={{ borderRadius: "1rem", border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="text-sm font-semibold sm:text-base" style={{ color: "var(--fg-base)" }}>
                Design & expérience
              </p>
              <p className="mt-2 text-xs sm:text-sm" style={{ color: "var(--fg-subtle)" }}>
                Je privilégie les interfaces calmes, lisibles, avec des micro-animations
                discrètes : une ambiance premium, mais jamais agressive ou chargée.
              </p>
            </article>

            <article className="p-4 sm:p-5" style={{ borderRadius: "1rem", border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="text-sm font-semibold sm:text-base" style={{ color: "var(--fg-base)" }}>
                Technique & performance
              </p>
              <p className="mt-2 text-xs sm:text-sm" style={{ color: "var(--fg-subtle)" }}>
                <Link href="/services/site-web-react-next" className="underline underline-offset-2 decoration-[var(--border)] hover:decoration-[var(--accent)] transition-colors">Next.js</Link>, React, Tailwind, <Link href="/services/site-internet-wordpress" className="underline underline-offset-2 decoration-[var(--border)] hover:decoration-[var(--accent)] transition-colors">WordPress</Link>, Stripe, <Link href="/services/seo" className="underline underline-offset-2 decoration-[var(--border)] hover:decoration-[var(--accent)] transition-colors">SEO</Link>, <Link href="/services/accessibilite" className="underline underline-offset-2 decoration-[var(--border)] hover:decoration-[var(--accent)] transition-colors">accessibilité</Link>&nbsp;:
                je m’occupe du “sous le capot” pour que votre site soit rapide, stable
                et conforme aux bonnes pratiques modernes.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* MA FAÇON DE TRAVAILLER */}
      <section className="section">
        <div className="divider mx-auto max-w-6xl" />
        <div className="mx-auto max-w-5xl px-8 lg:px-12" style={{ paddingTop: "var(--section-gap)" }}>
          <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl" style={{ color: "var(--fg-base)" }}>
                Ma façon de travailler
              </h2>
              <p className="mt-3 max-w-xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
                Je préfère les collaborations simples, transparentes et humaines.
              </p>

              <ul className="mt-5 space-y-3 text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
                <li>
                  • <span className="font-semibold">Je vulgarise</span> &nbsp;:  
                  je prends le temps d’expliquer les choix techniques et de design
                  avec des mots simples.
                </li>
                <li>
                  • <span className="font-semibold">Je ne surcharge pas</span> &nbsp;:  
                  pas de plugins inutiles, pas d’effets gratuits, pas de “tout et n’importe quoi”.
                </li>
                <li>
                  • <span className="font-semibold">Je pense long terme</span> &nbsp;:  
                  votre site doit pouvoir évoluer sans être refait tous les 2 ans.
                </li>
              </ul>
            </div>

            <div className="p-5" style={{ borderRadius: "1rem", border: "1px solid var(--border)", background: "var(--surface-1)", boxShadow: "var(--shadow-soft)" }}>
              <p className="section-label">
                En résumé
              </p>
              <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
                Si vous cherchez quelqu’un pour “poser un thème vite fait”, je ne
                suis probablement pas la bonne personne.  
                Si vous voulez un site posé, pensé, qui reflète vraiment votre niveau
                de sérieux, alors on va bien s’entendre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section">
        <div className="mx-auto max-w-3xl px-8 lg:px-12 text-center" style={{ paddingTop: "var(--section-gap)" }}>
          <h2 className="text-lg font-semibold tracking-tight sm:text-xl" style={{ color: "var(--fg-base)" }}>
            On en parle&nbsp;?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Vous avez déjà un site, un projet en tête ou juste une idée floue&nbsp;?
            On peut prendre un premier échange pour voir ce qui est réaliste,
            prioritaire et adapté à votre budget.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Me contacter
            </Link>
            <a
              href="mailto:stephanegamot@outlook.com"
              className="text-xs sm:text-sm font-medium underline underline-offset-4 transition-colors" style={{ color: "var(--fg-muted)" }}
            >
              Ou m’écrire directement par e-mail
            </a>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Stéphane Gamot",
            url: "https://www.stephanegamot.com/me",
            image: "https://www.stephanegamot.com/Images/me/me.webp",
            jobTitle: "Développeur web freelance",
            worksFor: {
              "@type": "Organization",
              name: "Stéphane Gamot – Création de sites web",
              url: "https://www.stephanegamot.com",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Halle",
              addressCountry: "BE",
            },
            knowsAbout: ["React", "Next.js", "WordPress", "SEO", "Accessibilité web", "E-commerce"],
            sameAs: ["https://www.stephanegamot.com"],
          }),
        }}
      />
    </>
  );
}
