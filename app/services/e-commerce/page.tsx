import type { Metadata } from "next";
import Link from "next/link";
 import { ServicesSection } from "@/components/services/ServicesSection";

export const metadata: Metadata = {
  title: "Création de site e-commerce | White Wolf Web",
  description:
    "Boutique en ligne sur mesure : parcours d’achat fluide, paiement sécurisé (Stripe), mobile-first et pensé pour convertir.",
  alternates: {
    canonical: "https://www.stephanegamot.com/services/e-commerce",
  },
  openGraph: {
    title: "Sites e-commerce sur mesure | White Wolf Web",
    description:
      "Création de boutiques en ligne modernes : parcours simple, paiement sécurisé, expérience mobile soignée.",
    url: "https://www.stephanegamot.com/services/e-commerce",
    type: "website",
  },
};

export default function EcommerceServicePage() {
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
            Boutiques{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              e-commerce
            </span>{" "}
            claires & efficaces.
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-300/90">
            Je conçois des boutiques en ligne sur mesure avec un{" "}
            <span className="font-semibold text-emerald-300">
              parcours d’achat simple, un paiement sécurisé
            </span>{" "}
            (Stripe) et une expérience pensée d’abord pour le mobile.
          </p>
          <p className="mt-2 max-w-xl text-sm sm:text-base text-slate-400">
            L’objectif : que vos clients trouvent rapidement ce qu’ils
            cherchent et qu’ils puissent commander sans stress ni friction.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Parler de ma boutique en ligne
            </Link>
            <span className="text-xs sm:text-sm text-slate-400">
              Vous m’expliquez vos produits, je vous explique ce qui est réaliste.
            </span>
          </div>
        </div>
      </section>

      {/* 3 BLOCS VISUELS – AXE PARCOURS & CONVERSION */}
      <section className="border-t border-slate-800/80 bg-slate-950/90">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-lg">
                🛒
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Parcours d’achat fluide
              </h2>
              <p className="mt-2 text-sm text-slate-300/90">
                Navigation claire, fiches produits lisibles, panier visible,
                étapes limitées : tout est pensé pour que la commande se fasse
                en quelques clics.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-lg">
                📱
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Mobile-first & rassurant
              </h2>
              <p className="mt-2 text-sm text-slate-300/90">
                La majorité des commandes se font sur smartphone : le design est
                pensé d’abord pour le mobile, avec un look pro et rassurant.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-lg">
                💳
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Paiement sécurisé & suivi
              </h2>
              <p className="mt-2 text-sm text-slate-300/90">
                Intégration de Stripe (ou autre solution), confirmations
                d’email, suivi des commandes et configuration des frais de
                livraison selon vos besoins.
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
              Vous voulez vendre en ligne, mais sans transformer votre site en
              usine à gaz impossible à gérer.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-4">
              <p className="text-sm sm:text-base font-semibold text-white">
                Restaurants, commerces, créateurs, thérapeutes…
              </p>
              <p className="mt-2 text-sm text-slate-300/90">
                Commandes de repas, vente de produits, bons cadeaux, séances
                ou prestations : un e-commerce adapté à votre réalité, pas
                un modèle générique.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-4">
              <p className="text-sm sm:text-base font-semibold text-white">
                Projets qui démarrent ou montent en puissance
              </p>
              <p className="mt-2 text-sm text-slate-300/90">
                MVP e-commerce, première boutique en ligne, ou besoin de
                professionnaliser un système de commandes bricolé avec des
                formulaires ou des messages privés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PETIT FOCUS TECH / STACK (DIFFÉRENT DES 2 AUTRES) */}
      <section className="border-t border-slate-800/80 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/80">
              Sous le capot
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-300/90">
              Selon votre projet, la boutique peut être construite avec{" "}
              <span className="font-semibold">Next.js, React, Stripe</span>{" "}
              et/ou connectée à une solution existante. Le but : garder un
              système fiable, évolutif, que vous pouvez comprendre.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Next.js / React",
                "Stripe",
                "Layouts orientés conversion",
                "Pages produits optimisées",
                "Suivi des commandes",
                "SEO e-commerce",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700/80 bg-slate-950/60 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-200/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-slate-950 pb-16 pt-8 sm:pb-20 sm:pt-10">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Envie de lancer ou d’améliorer votre e-commerce&nbsp;?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300/90">
            Dites-moi quels produits vous vendez, comment vous travaillez
            aujourd’hui, et ce que vous aimeriez que votre boutique fasse pour
            vous. On construit ensuite un plan simple, adapté à votre stade.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Me parler de mon projet e-commerce
            </Link>
          </div>
        </div>
                <ServicesSection />
      </section>
    </main>
  );
}
