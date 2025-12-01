import type { Metadata } from "next";
import Link from "next/link";
 import { ServicesSection } from "@/components/services/ServicesSection";

export const metadata: Metadata = {
  title: "Création de site internet WordPress | White Wolf Web",
  description:
    "Site vitrine, blog ou petite boutique : je conçois des sites WordPress élégants, rapides et faciles à mettre à jour, adaptés aux indépendants et petites entreprises.",
  alternates: {
    canonical: "https://www.stephanegamot.com/services/site-internet-wordpress",
  },
  openGraph: {
    title: "Création de site WordPress sur mesure | White Wolf Web",
    description:
      "Un site WordPress clair, pro et simple à gérer : idéal pour présenter vos services, publier du contenu et être contacté facilement.",
    url: "https://www.stephanegamot.com/services/site-internet-wordpress",
    type: "website",
  },
};

export default function WordPressServicePage() {
  return (
    <main className="bg-slate-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Glow de fond */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-40 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
          <div className="absolute -right-24 top-32 h-60 w-60 rounded-full bg-emerald-400/25 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
            Services
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Sites internet{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              WordPress
            </span>{" "}
            élégants & faciles à gérer.
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-300/90">
            Je crée des sites WordPress sur mesure pour les indépendants,
            thérapeutes et petites entreprises qui veulent une présence en
            ligne claire, professionnelle et simple à mettre à jour.
          </p>
          <p className="mt-2 max-w-xl text-sm sm:text-base text-slate-400">
            Idéal pour un{" "}
            <span className="font-semibold text-slate-100">
              site vitrine, un blog
            </span>{" "}
            ou une petite boutique en ligne, sans se perdre dans la technique.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Parler de mon site WordPress
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
                🖥️
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Site vitrine clair & rassurant
              </h2>
              <p className="mt-2 text-sm text-slate-300/90">
                Pages essentielles (Accueil, Services, À propos, Contact) avec
                un design propre, lisible et pensé pour donner confiance dès les
                premières secondes.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-lg">
                ✏️
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Facile à mettre à jour
              </h2>
              <p className="mt-2 text-sm text-slate-300/90">
                Vous pouvez modifier vos textes, ajouter des articles, changer
                une image ou une page sans forcément passer par un développeur.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-lg">
                🔒
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Base pro, optimisée & sécurisée
              </h2>
              <p className="mt-2 text-sm text-slate-300/90">
                Choix limité de plugins, sécurité de base, sauvegardes et
                optimisation des images pour éviter le WordPress lent et
                fragile.
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
              Si vous avez besoin d’un site sérieux, mais que vous ne voulez pas
              gérer une usine à gaz, WordPress bien configuré est souvent la
              bonne option.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-4">
              <p className="text-sm sm:text-base font-semibold text-white">
                Indépendants, thérapeutes, petites entreprises
              </p>
              <p className="mt-2 text-sm text-slate-300/90">
                Vous voulez une présence en ligne claire : présenter vos
                services, montrer des témoignages et permettre aux gens de vous
                contacter facilement.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-4">
              <p className="text-sm sm:text-base font-semibold text-white">
                Refonte d’un WordPress existant
              </p>
              <p className="mt-2 text-sm text-slate-300/90">
                Votre site actuel est lent, confus ou compliqué à gérer : on
                simplifie la structure, on nettoie les plugins et on remet de
                l’ordre dans le design.
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
            Expliquez-moi en quelques lignes votre activité et ce que vous
            attendez de votre site WordPress. Je vous réponds avec une approche
            simple, réaliste et adaptée à votre budget.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Me parler de mon projet
            </Link>
          </div>
        </div>
                <ServicesSection />
      </section>
    </main>
  );
}
