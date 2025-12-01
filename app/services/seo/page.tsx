import type { Metadata } from "next";
import Link from "next/link";
 import { ServicesSection } from "@/components/services/ServicesSection";

export const metadata: Metadata = {
  title: "Audit & optimisation SEO",
  description:
    "Audit technique, SEO on-page et optimisation de vos contenus : je vous aide à rendre votre site plus visible sur Google, sans promesses irréalistes.",
  alternates: {
    canonical: "https://www.stephanegamot.com/services/seo",
  },
  openGraph: {
    title: "Audit SEO & optimisation de site | White Wolf Web",
    description:
      "Comprendre où vous en êtes, corriger les blocages techniques et mieux structurer vos contenus pour le référencement naturel.",
    url: "https://www.stephanegamot.com/services/seo",
    type: "website",
  },
};

export default function SeoServicePage() {
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
            Audit & optimisation{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              SEO
            </span>{" "}
            pour votre site.
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-300/90">
            Je vous aide à comprendre pourquoi votre site ne performe pas comme
            il le devrait sur Google, et quelles actions concrètes mettre en
            place pour améliorer sa visibilité.
          </p>
          <p className="mt-2 max-w-xl text-sm sm:text-base text-slate-400">
            On parle de{" "}
            <span className="font-semibold text-slate-100">
              SEO technique, structure, contenus
            </span>{" "}
            et expérience utilisateur – pas de recettes magiques ni de
            promesses irréalistes.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Discuter d’un audit SEO
            </Link>
            <span className="text-xs sm:text-sm text-slate-400">
              Vous m’expliquez votre situation, je vous dis ce qui est réaliste.
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
                🔍
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Audit technique & structure
              </h2>
              <p className="mt-2 text-sm text-slate-300/90">
                Analyse de la vitesse, de la structure des pages, des balises,
                de l’indexation et des points bloquants qui freinent votre
                visibilité.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-lg">
                ✏️
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                SEO on-page & contenus
              </h2>
              <p className="mt-2 text-sm text-slate-300/90">
                Optimisation des titres, textes, maillage interne et pages
                clés, avec un langage naturel qui reste agréable à lire pour
                vos visiteurs.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-lg">
                📈
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Plan d’actions priorisé
              </h2>
              <p className="mt-2 text-sm text-slate-300/90">
                Vous repartez avec une liste claire : ce qui est urgent, ce qui
                est important, ce qui peut attendre – et l’impact attendu de
                chaque action.
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
              Vous avez déjà un site, mais vous avez peu de demandes, peu de
              trafic ou l’impression de ne pas être trouvé sur les bonnes
              recherches.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-4">
              <p className="text-sm sm:text-base font-semibold text-white">
                Indépendants & petites structures
              </p>
              <p className="mt-2 text-sm text-slate-300/90">
                Vous dépendez de votre site pour générer des contacts, mais vous
                ne savez pas par où commencer côté SEO ou quoi améliorer en
                priorité.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-4">
              <p className="text-sm sm:text-base font-semibold text-white">
                Sites en refonte ou en stagnation
              </p>
              <p className="mt-2 text-sm text-slate-300/90">
                Vous avez refait votre site (ou allez le refaire) et vous voulez
                éviter de perdre votre positionnement, ou enfin franchir un
                cap en visibilité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-slate-800/80 bg-slate-950 pb-16 pt-10 sm:pb-20 sm:pt-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Envie d’y voir plus clair sur votre SEO&nbsp;?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300/90">
            Expliquez-moi brièvement votre activité, votre site actuel et ce que
            vous aimeriez améliorer. Je vous propose un type d’audit et un plan
            d’attaque adapté à votre situation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
             Parler de mon SEO
            </Link>
          </div>
        </div>
                <ServicesSection />
      </section>
    </main>
  );
}
