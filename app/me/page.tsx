import type { Metadata } from "next";
import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Me from "@/public/Images/me/me.webp"
import Image from "next/image";

const SITE_URL = "https://www.stephanegamot.com";

export const metadata: Metadata = {
  title: "À propos – Stéphane Gamot",
  description:
    "Je suis Stéphane Gamot, développeur web full-stack basé en Belgique. Je crée des sites élégants, rapides, avec une approche humaine & stratégique.",
  alternates: {
    canonical: `${SITE_URL}/me`,
  },
  openGraph: {
    type: "profile",
    url: `${SITE_URL}/me`,
    title: "À propos – Stéphane Gamot",
    description:
      "Front-End Architect — Design Systems & Ingénieur en développement logiciel full-stack. J’accompagne les entrepreneurs, indépendants et petites entreprises avec des sites élégants, rapides & orientés résultats.",
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
    title: "À propos – Stéphane Gamot",
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
    <main className="bg-slate-950 text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800">
        {/* Glow discret */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-24 top-[-4rem] h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="absolute -left-24 bottom-[-4rem] h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:gap-14 lg:px-8 lg:py-24">
          {/* Texte */}
          <div className="max-w-xl space-y-5">
            <p className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-slate-900/70 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-indigo-200">
              <SparklesIcon className="h-4 w-4" />
              À propos
            </p>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Je construis des sites{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                élégants, clairs et efficaces
              </span>
              .
            </h1>

            <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
              Je suis <span className="font-semibold">Stéphane Gamot</span>,
              développeur web full-stack basé en Belgique.  
              Je conçois des sites pour les indépendants, thérapeutes,
              restaurants et petites entreprises qui veulent une présence en ligne
              sérieuse, rassurante et professionnelle.
            </p>

            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Mon rôle : traduire vos idées en un site concret, lisible,
              agréable à parcourir, qui vous apporte des demandes de contact,
              des réservations ou des ventes – pas juste une “vitrine”.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold !text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Me parler de votre projet
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/60 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-emerald-400/70 hover:text-emerald-200"
              >
                Voir quelques réalisations
              </Link>
            </div>
          </div>

          {/* Visuel simple */}
          <div className="relative w-full max-w-sm lg:ml-auto">
            <div className="overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/80 shadow-[0_22px_60px_rgba(0,0,0,0.8)]">
              <Image
                src={Me}
                alt="Lumière douce dans un intérieur minimal, ambiance calme et harmonieuse."
                className="h-full max-h-[380px] w-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-6 right-5 w-44 rounded-2xl bg-slate-950/90 p-3 text-[11px] shadow-lg ring-1 ring-slate-800/70">
              <p className="text-xs font-semibold text-slate-50">
                Ce que j’aime créer
              </p>
              <p className="mt-1 text-[11px] leading-snug text-slate-300">
                Des interfaces calmes, structurées, où on comprend vite quoi faire
                et où cliquer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CE QUE JE PEUX VOUS APPORTER */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 sm:py-16">
          <h2 className="text-center text-xl font-semibold tracking-tight sm:text-2xl">
            Concrètement, ce que je peux vous apporter
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-300 sm:text-base">
            Mon travail mélange design, technique et stratégie.  
            L’objectif : un site beau, rapide, mais surtout utile pour votre activité.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-4 sm:p-5">
              <p className="text-sm font-semibold text-slate-50 sm:text-base">
                Compréhension & clarté
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-300/90">
                Je commence par écouter : votre métier, vos clients, vos contraintes.
                Ensuite, je structure votre site pour qu’un visiteur comprenne en
                quelques secondes qui vous êtes et ce que vous proposez.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-4 sm:p-5">
              <p className="text-sm font-semibold text-slate-50 sm:text-base">
                Design & expérience
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-300/90">
                Je privilégie les interfaces calmes, lisibles, avec des micro-animations
                discrètes : une ambiance premium, mais jamais agressive ou chargée.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-4 sm:p-5">
              <p className="text-sm font-semibold text-slate-50 sm:text-base">
                Technique & performance
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-300/90">
                Next.js, React, Tailwind, WordPress optimisé, Stripe, SEO, accessibilité&nbsp;:
                je m’occupe du “sous le capot” pour que votre site soit rapide, stable
                et conforme aux bonnes pratiques modernes.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* MA FAÇON DE TRAVAILLER */}
      <section className="border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Ma façon de travailler
              </h2>
              <p className="mt-3 max-w-xl text-sm text-slate-300 sm:text-base">
                Je préfère les collaborations simples, transparentes et humaines.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-100 sm:text-base">
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

            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.7)]">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-indigo-200">
                En résumé
              </p>
              <p className="mt-3 text-sm text-slate-200 sm:text-base">
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
      <section className="bg-slate-950 pb-16 pt-10 sm:pb-20 sm:pt-12">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
          <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
            On en parle&nbsp;?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
            Vous avez déjà un site, un projet en tête ou juste une idée floue&nbsp;?
            On peut prendre un premier échange pour voir ce qui est réaliste,
            prioritaire et adapté à votre budget.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold !text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Me contacter
            </Link>
            <a
              href="mailto:stephanegamot@outlook.com"
              className="text-xs sm:text-sm font-medium text-slate-300 underline underline-offset-4 hover:text-emerald-200"
            >
              Ou m’écrire directement par e-mail
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
