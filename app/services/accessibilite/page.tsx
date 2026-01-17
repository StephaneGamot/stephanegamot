// app/services/accessibilite/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
 import { ServicesSection } from "@/components/services/ServicesSection";

export const metadata: Metadata = {
  title: "Accessibilité web & conformité selon les normes européennes WCAG 2,1",
  description:
    "Mise en conformité accessibilité WCAG : corrections UI, contrastes, navigation clavier, ARIA, formulaires. Réduisez les risques et élargissez votre audience.",
  metadataBase: new URL("https://www.stephanegamot.com"),
  alternates: { canonical: "/services/accessibilite" },
  keywords: [
    "accessibilité web",
    "WCAG",
    "RGAA",
    "audit accessibilité",
    "contrastes",
    "navigation clavier",
    "ARIA",
    "conformité accessibilité",
  ],
  robots: { index: true, follow: true },
  authors: [{ name: "Stéphane Gamot", url: "https://www.stephanegamot.com/me" }],
  openGraph: {
    title: "Accessibilité web & conformité – Stéphane Gamot",
    description:
      "Audit + corrections : contrastes, formulaires, ARIA, navigation clavier, structure. Un site plus inclusif et plus robuste.",
    url: "/services/accessibilite",
    siteName: "Stéphane Gamot",
    type: "website",
    locale: "fr_BE",
    images: [
      {
        url: "/Images/og/office-workstation.webp",
        width: 1200,
        height: 630,
        alt: "Accessibilité numérique et conformité WCAG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibilité web & conformité – Stéphane Gamot",
    description:
      "Audit + corrections WCAG/RGAA : contrastes, clavier, ARIA, formulaires, structure. Inclusif et robuste.",
    images: ["/Images/og/office-workstation.webp"],
  },
};


export default function AccessibiliteServicePage() {
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
            Accessibilité numérique&nbsp;:{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              loi, risques et mise en conformité
            </span>
            .
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-300/90">
            Depuis le <span className="font-semibold">28 juin 2025</span>, la
            directive européenne sur l’accessibilité (EAA) s’applique à de
            nombreux services numériques en{" "}
            <span className="font-semibold">Belgique et en France</span> :
            e-commerce, banques, transports, services en ligne…
          </p>
          <p className="mt-2 max-w-xl text-sm sm:text-base text-slate-400">
            Un site non accessible, ce n’est plus seulement “dommage pour
            l’utilisateur” :{" "}
            <span className="font-semibold text-slate-100">
              c&apos;est un risque légal (amendes), d’image et de business
            </span>
            .
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Parler de l’accessibilité de mon site
            </Link>
            <span className="text-xs sm:text-sm text-slate-400">
              On fait le point sur vos obligations et les priorités concrètes.
            </span>
          </div>
        </div>
      </section>

      {/* 3 BLOCS : POURQUOI C’EST IMPORTANT */}
      <section className="border-t border-slate-800/80 bg-slate-950/90">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-lg">
                ⚖️
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Obligation légale (Belgique & France)
              </h2>
              <p className="mt-2 text-sm text-slate-300/90">
                La loi européenne rend l’accessibilité obligatoire pour une
                grande partie des services numériques (e-commerce, services
                bancaires, transports, plateformes…). Ne pas s’y conformer
                devient un risque juridique réel.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-lg">
                💶
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Amendes & mises en demeure
              </h2>
              <p className="mt-2 text-sm text-slate-300/90">
                En cas de non-conformité, des{" "}
                <span className="font-semibold">
                  amendes de plusieurs dizaines de milliers d’euros
                </span>{" "}
                par service numérique, renouvelables, sont prévues côté
                français, et des pénalités administratives existent aussi en
                Belgique. Mieux vaut agir avant un contrôle ou une plainte.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-lg">
                🤝
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Accessibilité = business & image
              </h2>
              <p className="mt-2 text-sm text-slate-300/90">
                Un site accessible est plus simple à utiliser pour tout le
                monde, mieux référencé, plus crédible et plus inclusif. C’est
                un vrai levier de confiance, pas juste une contrainte légale.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION : BELGIQUE & FRANCE, CE QUI CHANGE EN 2025 */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
              Belgique & France&nbsp;: ce que dit la loi depuis juin 2025
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-slate-300/90">
              Sans entrer dans tous les textes juridiques, voici l’essentiel
              pour un site “classique” (vitrine, e-commerce, services en
              ligne).
            </p>
          </div>

          <div className="space-y-5 text-sm sm:text-base text-slate-300/90">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4">
              <p className="font-semibold text-white">
                1. L’EAA (European Accessibility Act) est en vigueur.
              </p>
              <p className="mt-2">
                Depuis le 28 juin 2025, la directive européenne impose des
                exigences d’accessibilité à de nombreux produits et services
                numériques : sites web, apps mobiles, services de commerce
                électronique, services bancaires, transports, etc.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4">
              <p className="font-semibold text-white">
                2. En Belgique, l’accessibilité s’étend au-delà du secteur
                public.
              </p>
              <p className="mt-2">
                Les autorités belges ont transposé l’EAA&nbsp;: au-delà des
                sites publics déjà concernés, de nombreux acteurs privés
                (e-commerce, services en ligne…) doivent rendre leurs interfaces
                accessibles et publier une{" "}
                <span className="font-semibold">
                  déclaration d’accessibilité
                </span>
                . En cas de non-respect, des contrôles, mises en demeure et
                sanctions administratives sont possibles.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4">
              <p className="font-semibold text-white">
                3. En France, le RGAA & l’EAA renforcent les sanctions.
              </p>
              <p className="mt-2">
                Les sites publics et de nombreuses entreprises doivent respecter
                le RGAA (référentiel français basé sur les WCAG). Les textes
                récents prévoient des{" "}
                <span className="font-semibold">
                  amendes pouvant aller jusqu’à 50&nbsp;000&nbsp;€
                </span>{" "}
                par service numérique en cas de non-conformité répétée, avec
                reconduction possible tant que la mise en conformité n’est pas
                faite.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4">
              <p className="font-semibold text-white">
                4. Les sites e-commerce sont particulièrement exposés.
              </p>
              <p className="mt-2">
                Les boutiques en ligne dépassant la micro-entreprise sont
                clairement dans le périmètre : l’ensemble du parcours (recherche
                produits, fiche produit, panier, paiement, suivi de commande…)
                doit être accessible. Sinon, le site peut être considéré comme
                non conforme.
              </p>
            </div>
          </div>

          <p className="mt-5 text-xs sm:text-sm text-slate-400">
            Important&nbsp;: cette page ne remplace pas un avis juridique, mais
            elle vous donne le niveau d’urgence et l’ampleur des enjeux.
          </p>
        </div>
      </section>

      {/* CE QUE JE PROPOSE */}
      <section className="border-t border-slate-800/80 bg-slate-950/90">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
              Concrètement, comment je peux vous aider&nbsp;?
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-slate-300/90">
              L’idée n’est pas de viser la perfection en un jour, mais de{" "}
              <span className="font-semibold">
                réduire rapidement vos risques
              </span>{" "}
              et d’améliorer l’expérience pour vos vrais utilisateurs.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 text-sm text-slate-300/90">
            <article className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5">
              <h3 className="text-sm sm:text-base font-semibold text-white">
                Audit flash (état des lieux)
              </h3>
              <p className="mt-2">
                Analyse de vos pages clés (home, services, formulaire, tunnel
                de commande…), avec un rapport simple : problèmes critiques,
                impacts et priorités.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5">
              <h3 className="text-sm sm:text-base font-semibold text-white">
                Plan de mise en conformité
              </h3>
              <p className="mt-2">
                Feuille de route en plusieurs étapes : corrections rapides,
                améliorations UX, mises à jour de code (structure, contrastes,
                navigation clavier, alternatives textes…).
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5">
              <h3 className="text-sm sm:text-base font-semibold text-white">
                Déclaration & suivi
              </h3>
              <p className="mt-2">
                Aide à rédiger votre page “Accessibilité”, documenter ce qui est
                déjà fait, ce qui reste à améliorer et comment suivre les
                progrès dans le temps.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-slate-950 pb-16 pt-8 sm:pb-20 sm:pt-10">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Vous voulez éviter les mauvaises surprises&nbsp;?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300/90">
            Dites-moi quel type de site vous avez (vitrine, e-commerce, service
            en ligne…), votre pays principal (Belgique, France…) et votre
            situation actuelle. On voit ensemble par où commencer, sans panique
            mais sans attendre.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Me parler de l’accessibilité de votre site
            </Link>
          </div>
        </div>
        <ServicesSection />
      </section>
    </main>
  );
}
