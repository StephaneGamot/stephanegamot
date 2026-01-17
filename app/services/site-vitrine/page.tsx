import type { Metadata } from "next";
import Link from "next/link";
 import { ServicesSection } from "@/components/services/ServicesSection";

export const metadata: Metadata = {
  title: "Création de site vitrine premium",
  description:
    "Site vitrine sur mesure : design élégant, textes clairs, SEO local, vitesse et structure pensée pour rassurer et générer des contacts.",
  metadataBase: new URL("https://www.stephanegamot.com"),
  alternates: { canonical: "/services/site-vitrine" },
  keywords: [
    "site vitrine",
    "création site vitrine Belgique",
    "site vitrine premium",
    "SEO local",
    "site professionnel",
    "conversion",
  ],
  robots: { index: true, follow: true },
  authors: [{ name: "Stéphane Gamot", url: "https://www.stephanegamot.com/me" }],
  openGraph: {
    title: "Site vitrine premium – Stéphane Gamot",
    description:
      "Un site vitrine moderne, rapide et rassurant : clair, bien structuré, optimisé SEO et pensé pour convertir.",
    url: "/services/site-vitrine",
    siteName: "Stéphane Gamot",
    type: "website",
    locale: "fr_BE",
    images: [
      {
        url: "/Images/og/office-workstation.webp",
        width: 1200,
        height: 630,
        alt: "Site vitrine professionnel créé par Stéphane Gamot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Site vitrine premium – Stéphane Gamot",
    description:
      "Design élégant, SEO local, vitesse et structure claire : un site vitrine fait pour générer des contacts.",
    images: ["/Images/og/office-workstation.webp"],
  },
};


export default function SiteVitrineServicePage() {
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
            Site vitrine{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              clair & professionnel
            </span>
            .
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-300/90">
            Un site vitrine sur mesure pour présenter votre activité, vos
            services et votre façon de travailler, avec un design élégant et
            une structure pensée pour rassurer et donner envie de vous
            contacter.
          </p>
          <p className="mt-2 max-w-xl text-sm sm:text-base text-slate-400">
            L’idée :{" "}
            <span className="font-semibold text-slate-100">
              une carte de visite en ligne
            </span>{" "}
            beaucoup plus crédible qu’une simple page Facebook ou un vieux
            modèle générique.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Parler de mon site vitrine
            </Link>
            <span className="text-xs sm:text-sm text-slate-400">
              Vous m’expliquez votre activité, je vous dis ce qui est adapté.
            </span>
          </div>
        </div>
      </section>

      {/* 3 BLOCS VISUELS – STRUCTURE / IMAGE / CONTACT */}
      <section className="border-t border-slate-800/80 bg-slate-950/90">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-lg">
                🧱
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Structure claire & lisible
              </h2>
              <p className="mt-2 text-sm text-slate-300/90">
                Accueil, services, à propos, témoignages, contact : un parcours
                simple qui permet de comprendre rapidement ce que vous faites
                et pour qui.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-lg">
                🎨
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Image soignée & cohérente
              </h2>
              <p className="mt-2 text-sm text-slate-300/90">
                Palette de couleurs, typographies, photos : un univers qui
                reflète votre personnalité et la qualité de votre travail, sans
                tape-à-l’œil.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-lg">
                ✉️
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Contact facile & rassurant
              </h2>
              <p className="mt-2 text-sm text-slate-300/90">
                Formulaire clair, boutons de contact visibles, infos
                pratiques : on simplifie au maximum la prise de contact ou la
                demande de rendez-vous.
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
              Vous avez besoin d’un site sérieux, mais sans fonctionnalités
              compliquées : juste présenter clairement qui vous êtes et comment
              vous aider.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-4">
              <p className="text-sm sm:text-base font-semibold text-white">
                Indépendants, thérapeutes, consultants, artisans…
              </p>
              <p className="mt-2 text-sm text-slate-300/90">
                Vous voulez une présence en ligne pro, à votre image, qui
                remplace ou complète vos cartes de visite et vos réseaux
                sociaux.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-4">
              <p className="text-sm sm:text-base font-semibold text-white">
                Petites entreprises & projets en lancement
              </p>
              <p className="mt-2 text-sm text-slate-300/90">
                Vous démarrez (ou vous vous relancez) et vous avez besoin d’un
                site simple mais crédible pour expliquer ce que vous faites et
                commencer à être trouvé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS CONTENU / TEXTES */}
      <section className="border-t border-slate-800/80 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/80">
              Textes & contenus
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-300/90">
              Je peux vous aider à formuler vos textes : expliquer simplement
              votre activité, mettre en avant vos forces, vos différences et
              ce que vos clients gagnent à travailler avec vous.
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-400">
              On évite le jargon vide, on garde un ton humain et clair, adapté
              à votre public (local, francophone, bilingue…).
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-slate-950 pb-16 pt-8 sm:pb-20 sm:pt-10">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Vous avez besoin d’un site vitrine&nbsp;?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300/90">
            Dites-moi qui vous êtes, ce que vous proposez et ce que vous
            attendez de votre site. Je vous propose une approche simple, claire
            et adaptée à votre budget.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Me parler de mon site vitrine
            </Link>
          </div>
        </div>
                <ServicesSection />
      </section>
    </main>
  );
}
