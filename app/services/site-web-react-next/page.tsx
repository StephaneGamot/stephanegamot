import type { Metadata } from "next";
import Link from "next/link";
 import { ServicesSection } from "@/components/services/ServicesSection";

export const metadata: Metadata = {
  title: "Site web React & Next.js sur mesure",
  description:
    "Création de sites React & Next.js : design premium, performance, SEO technique et parcours mobile fluide. Idéal vitrine, e-commerce ou app web.",
  metadataBase: new URL("https://www.stephanegamot.com"),
  alternates: {
    canonical: "/services/site-web-react-next",
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
    url: "/services/site-web-react-next",
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
    <main className="bg-slate-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Glow de fond */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-40 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
          <div className="absolute -right-24 top-32 h-60 w-60 rounded-full bg-emerald-400/25 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
            Services
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Sites web{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              React & Next.js
            </span>{" "}
            modernes & performants.
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-300/90">
            Je crée des sites sur mesure avec React, Next.js et Tailwind CSS
            pour offrir une expérience fluide, rapide et élégante, pensée dès
            le départ pour le SEO et le mobile.
          </p>
          <p className="mt-2 max-w-xl text-sm sm:text-base text-slate-400">
            Idéal pour un{" "}
            <span className="font-semibold text-slate-100">
              site vitrine premium, un e-commerce
            </span>{" "}
            ou une app web qui doit pouvoir évoluer.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Parler de mon projet React / Next
            </Link>
            <span className="text-xs sm:text-sm text-slate-400">
              Un échange simple, concret, sans jargon.
            </span>
          </div>
        </div>
      </section>

      {/* 3 BLOCS VISUELS */}
      <section className="border-t border-slate-800/80 bg-slate-950/90">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-lg">
                ⚡
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Ultra rapide & optimisé
              </h2>
              <p className="mt-2 text-sm text-slate-300/90">
                Rendu côté serveur, images optimisées, code moderne : un site
                qui charge vite et qui plaît autant à vos visiteurs qu&apos;à
                Google.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-lg">
                🎯
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Pensé pour convertir
              </h2>
              <p className="mt-2 text-sm text-slate-300/90">
                Structure claire, CTA visibles, pages clés bien travaillées :
                l&apos;objectif est d&apos;amener vos visiteurs à vous
                contacter ou acheter.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-lg">
                🧩
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Base évolutive
              </h2>
              <p className="mt-2 text-sm text-slate-300/90">
                Composants réutilisables, architecture propre : on peut ajouter
                ensuite un espace client, un blog, un e-commerce ou des
                fonctionnalités plus avancées.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* POUR QUI ? */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
              Pour qui est ce service&nbsp;?
            </h2>
            <p className="mt-2 max-w-xl text-sm sm:text-base text-slate-300/90">
              Vous avez besoin d&apos;un site moderne, sérieux, qui doit
              rester rapide et pouvoir grandir avec votre activité.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-4">
              <p className="text-sm sm:text-base font-semibold text-white">
                Entrepreneurs, studios, thérapeutes, restaurants…
              </p>
              <p className="mt-2 text-sm text-slate-300/90">
                Vous souhaitez une présence en ligne premium, qui donne
                confiance et reflète réellement la qualité de votre travail.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-4">
              <p className="text-sm sm:text-base font-semibold text-white">
                Projets plus ambitieux (apps, plateformes)
              </p>
              <p className="mt-2 text-sm text-slate-300/90">
                MVP, tableau de bord, espace membre : Next.js est une excellente
                base pour construire une application web complète.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-slate-800/80 bg-slate-950 pb-16 pt-10 sm:pb-20 sm:pt-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            On voit ensemble ce qui est le plus adapté&nbsp;?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300/90">
            Expliquez-moi en quelques lignes votre projet (site vitrine, boutique,
            app web…) et vos objectifs. Je vous propose une approche simple,
            réaliste et adaptée à votre budget.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Me parler de mon projet React / Next
            </Link>
          </div>
        </div>
                <ServicesSection />
      </section>
    </main>
  );
}

