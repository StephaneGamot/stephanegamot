import type { Metadata } from "next";
import Link from "next/link";
import { ServicesSection } from "@/components/services/ServicesSection";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

export const metadata: Metadata = {
  title: "Audit SEO & optimisation de site web — Stéphane Gamot",
  description:
    "Audit SEO technique, structure, contenu et performance. Correction des blocages et plan d'actions clair pour gagner en visibilité. Contactez-moi.",
  metadataBase: new URL("https://www.stephanegamot.com"),
  alternates: { canonical: "https://www.stephanegamot.com/services/seo" },
  keywords: [
    "audit SEO",
    "SEO technique",
    "optimisation performance",
    "Core Web Vitals",
    "SEO on-page",
    "balises meta",
    "plan d'action SEO",
  ],
  robots: { index: true, follow: true },
  authors: [{ name: "Stéphane Gamot", url: "https://www.stephanegamot.com/me" }],
  openGraph: {
    title: "Audit SEO & optimisation – Stéphane Gamot",
    description:
      "Comprendre ce qui bloque votre référencement et corriger : technique, structure, contenu et performances.",
    url: "https://www.stephanegamot.com/services/seo",
    siteName: "Stéphane Gamot",
    type: "website",
    locale: "fr_BE",
    images: [
      {
        url: "/Images/og/office-workstation.webp",
        width: 1200,
        height: 630,
        alt: "Audit SEO et optimisation de site web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit SEO & optimisation – Stéphane Gamot",
    description:
      "Audit technique + plan d'actions clair pour améliorer visibilité, performance et structure SEO.",
    images: ["/Images/og/office-workstation.webp"],
  },
};


export default function SeoServicePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Services", href: "/#services" }, { label: "SEO" }]} />
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Glow de fond */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-40 h-72 w-72 rounded-full opacity-[0.04]" style={{ background: "var(--accent)", filter: "blur(60px)" }} />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="section-label">
            Services
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Audit & optimisation{" "}
            <span style={{ color: "var(--accent)" }}>
              SEO
            </span>{" "}
            pour votre site.
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Je vous aide à comprendre pourquoi votre site ne performe pas comme
            il le devrait sur Google, et quelles actions concrètes mettre en
            place pour améliorer sa visibilité.
          </p>
          <p className="mt-2 max-w-xl text-sm sm:text-base" style={{ color: "var(--fg-subtle)" }}>
            On parle de{" "}
            <span className="font-semibold" style={{ color: "var(--fg-base)" }}>
              SEO technique, structure, contenus
            </span>{" "}
            et expérience utilisateur – pas de recettes magiques ni de
            promesses irréalistes.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Discuter d'un audit SEO
            </Link>
            <span className="text-xs sm:text-sm" style={{ color: "var(--fg-subtle)" }}>
              Vous m'expliquez votre situation, je vous dis ce qui est réaliste.
            </span>
          </div>
        </div>
      </section>

      {/* 3 BLOCS VISUELS */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: "var(--accent-muted)" }}>
                🔍
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                Audit technique & structure
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Analyse de la vitesse, de la structure des pages, des balises,
                de l'indexation et des points bloquants qui freinent votre
                visibilité.
              </p>
            </article>

            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: "var(--accent-muted)" }}>
                ✏️
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                SEO on-page & contenus
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Optimisation des titres, textes, maillage interne et pages
                clés, avec un langage naturel qui reste agréable à lire pour
                vos visiteurs.
              </p>
            </article>

            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: "var(--accent-muted)" }}>
                📈
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                Plan d'actions priorisé
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Vous repartez avec une liste claire : ce qui est urgent, ce qui
                est important, ce qui peut attendre – et l'impact attendu de
                chaque action.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* POUR QUI ? */}
      <section>
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
              Pour qui est ce service&nbsp;?
            </h2>
            <p className="mt-2 max-w-xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
              Vous avez déjà un site, mais vous avez peu de demandes, peu de
              trafic ou l'impression de ne pas être trouvé sur les bonnes
              recherches.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl p-4" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="text-sm sm:text-base font-semibold">
                Indépendants & petites structures
              </p>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Vous dépendez de votre site pour générer des contacts, mais vous
                ne savez pas par où commencer côté SEO ou quoi améliorer en
                priorité.
              </p>
            </div>
            <div className="rounded-xl p-4" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="text-sm sm:text-base font-semibold">
                Sites en refonte ou en stagnation
              </p>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Vous avez refait votre site (ou allez le refaire) et vous voulez
                éviter de perdre votre positionnement, ou enfin franchir un
                cap en visibilité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Liens complémentaires */}
      <aside className="mx-auto max-w-5xl px-4 pb-6 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.12em] mb-3" style={{ color: "var(--fg-subtle)" }}>
          Services complémentaires
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/services/site-web-react-next", label: "Site React & Next.js" },
            { href: "/services/site-internet-wordpress", label: "Site WordPress" },
            { href: "/portfolio", label: "Voir le portfolio" },
            { href: "/faq", label: "Questions fréquentes" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm px-4 py-2 transition-colors duration-300"
              style={{ border: "1px solid var(--border)", borderRadius: "0.5rem", color: "var(--fg-muted)" }}
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </aside>

      {/* CTA FINAL */}
      <section className="pb-16 pt-10 sm:pb-20 sm:pt-12">
        <div className="divider" />
        <div className="mx-auto max-w-3xl px-4 pt-10 text-center sm:px-6 sm:pt-12 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Envie d'y voir plus clair sur votre SEO&nbsp;?
          </h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Expliquez-moi brièvement votre activité, votre site actuel et ce que
            vous aimeriez améliorer. Je vous propose un type d'audit et un plan
            d'attaque adapté à votre situation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="btn btn-primary"
            >
             Parler de mon SEO
            </Link>
          </div>
        </div>
                <ServicesSection />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Audit SEO & optimisation de site web",
            description:
              "Audit SEO technique, structure, contenu et performance. Correction des blocages et plan d'actions clair pour gagner en visibilité.",
            provider: {
              "@type": "ProfessionalService",
              name: "Stéphane Gamot",
              url: "https://www.stephanegamot.com",
            },
            areaServed: { "@type": "Country", name: "Belgium" },
            url: "https://www.stephanegamot.com/services/seo",
          }),
        }}
      />
    </>
  );
}
