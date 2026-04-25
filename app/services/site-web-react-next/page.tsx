import type { Metadata } from "next";
import Link from "next/link";
import { ServicesSection } from "@/components/services/ServicesSection";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

export const metadata: Metadata = {
  title: "Création de site React & Next.js — Stéphane Gamot",
  description:
    "Sites React & Next.js : design premium, performance, SEO technique et parcours mobile fluide. Vitrine, e-commerce ou app web. Contactez-moi.",
  metadataBase: new URL("https://www.stephanegamot.com"),
  alternates: {
    canonical: "https://www.stephanegamot.com/services/site-web-react-next",
  },
  keywords: [
    "site Next.js",
    "développeur Next.js Belgique",
    "site React sur mesure",
    "site web performant",
    "Core Web Vitals",
    "SEO technique",
    "site vitrine premium",
    "application web",
  ],
  robots: { index: true, follow: true },
  authors: [{ name: "Stéphane Gamot", url: "https://www.stephanegamot.com/me" }],
  openGraph: {
    title: "Site React & Next.js sur mesure – Stéphane Gamot",
    description:
      "Un site moderne, rapide et évolutif : design soigné, SEO solide, performance et expérience mobile impeccable.",
    url: "https://www.stephanegamot.com/services/site-web-react-next",
    siteName: "Stéphane Gamot",
    type: "website",
    locale: "fr_BE",
    images: [
      {
        url: "/Images/og/office-workstation.webp",
        width: 1200,
        height: 630,
        alt: "Création de site web sur mesure par Stéphane Gamot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Site React & Next.js sur mesure – Stéphane Gamot",
    description:
      "Design premium, SEO technique, performance et UX mobile pour vitrine, e-commerce ou app web.",
    images: ["/Images/og/office-workstation.webp"],
  },
};

export default function ReactNextServicePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Services", href: "/#services" }, { label: "React & Next.js" }]} />
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
            Sites web{" "}
            <span style={{ color: "var(--accent)" }}>
              React & Next.js
            </span>{" "}
            modernes & performants.
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Je crée des sites sur mesure avec React, Next.js et Tailwind CSS
            pour offrir une expérience fluide, rapide et élégante, pensée dès
            le départ pour le SEO et le mobile.
          </p>
          <p className="mt-2 max-w-xl text-sm sm:text-base" style={{ color: "var(--fg-subtle)" }}>
            Idéal pour un{" "}
            <span className="font-semibold" style={{ color: "var(--fg-base)" }}>
              site vitrine premium, un e-commerce
            </span>{" "}
            ou une app web qui doit pouvoir évoluer.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Parler de mon projet React / Next
            </Link>
            <span className="text-xs sm:text-sm" style={{ color: "var(--fg-subtle)" }}>
              Un échange simple, concret, sans jargon.
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
                ⚡
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                Ultra rapide & optimisé
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Rendu côté serveur, images optimisées, code moderne : un site
                qui charge vite et qui plaît autant à vos visiteurs qu&apos;à
                Google.
              </p>
            </article>

            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: "var(--accent-muted)" }}>
                🎯
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                Pensé pour convertir
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Structure claire, CTA visibles, pages clés bien travaillées :
                l&apos;objectif est d&apos;amener vos visiteurs à vous
                contacter ou acheter.
              </p>
            </article>

            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: "var(--accent-muted)" }}>
                🧩
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                Base évolutive
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Composants réutilisables, architecture propre : on peut ajouter
                ensuite un espace client, un blog, un e-commerce ou des
                fonctionnalités plus avancées.
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
              Vous avez besoin d&apos;un site moderne, sérieux, qui doit
              rester rapide et pouvoir grandir avec votre activité.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl p-4" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="text-sm sm:text-base font-semibold">
                Entrepreneurs, studios, thérapeutes, restaurants…
              </p>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Vous souhaitez une présence en ligne premium, qui donne
                confiance et reflète réellement la qualité de votre travail.
              </p>
            </div>
            <div className="rounded-xl p-4" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="text-sm sm:text-base font-semibold">
                Projets plus ambitieux (apps, plateformes)
              </p>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                MVP, tableau de bord, espace membre : Next.js est une excellente
                base pour construire une application web complète.
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
            { href: "/services/seo", label: "Optimisation SEO" },
            { href: "/services/e-commerce", label: "E-commerce sur mesure" },
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
            On voit ensemble ce qui est le plus adapté&nbsp;?
          </h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Expliquez-moi en quelques lignes votre projet (site vitrine, boutique,
            app web…) et vos objectifs. Je vous propose une approche simple,
            réaliste et adaptée à votre budget.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Me parler de mon projet React / Next
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
            name: "Création de site React & Next.js",
            description:
              "Sites web sur mesure avec React et Next.js : design premium, performance, SEO technique et parcours mobile fluide.",
            provider: {
              "@type": "ProfessionalService",
              name: "Stéphane Gamot",
              url: "https://www.stephanegamot.com",
            },
            areaServed: { "@type": "Country", name: "Belgium" },
            url: "https://www.stephanegamot.com/services/site-web-react-next",
          }),
        }}
      />
    </>
  );
}
