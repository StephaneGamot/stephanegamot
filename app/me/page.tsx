// src/app/[locale]/(pages)/a-propos/page.jsx

import { Metadata } from "next";
import {
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos – Stéphane Gamot",
  description:
    "Développeur web full-stack et consultant digital basé en Belgique. Je crée des sites élégants, rapides et pensés pour la conversion.",
};

export default function AboutPage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      {/* HERO */}
  <section className="relative overflow-hidden border-b border-slate-800">
  {/* Dégradés de fond colorés */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-32 -top-40 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
    <div className="absolute -right-24 top-32 h-60 w-60 rounded-full bg-cyan-400/25 blur-3xl" />
    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />
  </div>

  <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
      {/* Texte Hero */}
      <div className="space-y-6 text-center lg:max-w-xl lg:text-left">
        <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-slate-900/70 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-indigo-200 sm:text-xs lg:mx-0">
          <SparklesIcon className="h-4 w-4" />
          À propos
        </p>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          À propos de{" "}
          <span className="bg-gradient-to-r from-slate-50 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
            Stéphane Gamot
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
          Développeur web full-stack et consultant digital basé en Belgique,
          j’accompagne les entrepreneurs, indépendants et petites entreprises
          dans la création de sites modernes, rapides et vraiment efficaces.
        </p>

        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Je crois en un web simple, beau et performant. Un web où chaque
          détail compte : design, vitesse, expérience utilisateur, message,
          émotion, fluidité. Mon objectif est clair : transformer vos idées
          en une présence en ligne qui impressionne, convertit et dure dans
          le temps.
        </p>

        <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center lg:justify-start">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-cyan-400 px-7 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-indigo-500/40 transition hover:translate-y-[1px] hover:shadow-indigo-400/50 whitespace-nowrap"
          >
            Me contacter
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <p className="max-w-xs text-center text-[0.8rem] text-slate-300 sm:text-xs lg:text-left">
            Une première discussion, sans engagement, pour clarifier votre
            projet.
          </p>
        </div>
      </div>

      {/* Carte profil */}
      <div className="flex justify-center lg:justify-end">
        <div className="mt-8 w-full max-w-sm rounded-3xl border border-slate-800/90 bg-slate-900/70 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.95)] backdrop-blur sm:max-w-sm lg:mt-0 lg:max-w-md">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-cyan-400 to-emerald-400">
              <UserCircleIcon className="h-9 w-9 text-slate-950" />
            </div>
            <div className="space-y-0.5">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-indigo-200">
                Développeur & consultant digital
              </p>
              <p className="text-lg font-semibold text-slate-50">
                Stéphane Gamot
              </p>
              <p className="text-[0.75rem] text-slate-300">
                Basé en Belgique – clients en Europe francophone
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-3 text-sm text-slate-200">
            <p>
              Une approche{" "}
              <span className="font-semibold text-indigo-200">
                artisanale & haut de gamme
              </span>
              , centrée sur le design, la performance et la stratégie digitale.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
                <span>Sites élégants, modernes et sur-mesure</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
                <span>Performance & Core Web Vitals optimisés</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
                <span>Accompagnement clair, humain et transparent</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 h-px bg-gradient-to-r from-indigo-400/70 via-cyan-300/80 to-transparent" />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CE QUE J’APPORTE */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-start">
            {/* Colonne texte */}
            <div className="space-y-5">
              <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl lg:text-left">
                Ce que j’apporte
              </h2>
              <p className="mx-auto max-w-xl text-center text-sm leading-relaxed text-slate-300 sm:text-base lg:mx-0 lg:text-left">
                Contrairement à une agence classique qui empile les projets, je
                travaille en collaboration directe avec mes clients :
              </p>

              <ul className="mx-auto grid max-w-xl gap-3 text-sm text-slate-100 sm:text-base lg:mx-0">
                {[
                  "Écoute réelle",
                  "Accompagnement pas à pas",
                  "Transparence totale",
                  "Résultats mesurables",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/90 ring-1 ring-indigo-500/60 text-[0.7rem]">
                      ✔
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mx-auto max-w-xl text-center text-sm leading-relaxed text-slate-300 sm:text-base lg:mx-0 lg:text-left">
                Je vous apporte une approche{" "}
                <span className="font-semibold text-indigo-200">
                  artisanale & haut de gamme
                </span>
                , centrée sur vos objectifs, votre image de marque et la qualité à
                long terme.
              </p>
            </div>

            {/* Colonne cartes */}
            <div className="space-y-4">
              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.85)]">
                <h3 className="text-base font-semibold text-indigo-100 sm:text-lg">
                  Un design élégant, précis, harmonieux
                </h3>
                <p className="mt-2 text-sm text-slate-200 sm:text-base">
                  Pas de modèles génériques ou de templates recyclés. Chaque site
                  est conçu sur-mesure, en fonction de votre marque, de vos valeurs
                  et de votre clientèle.
                </p>
              </div>

              <div className="rounded-3xl border border-indigo-600/60 bg-slate-950/70 p-5">
                <h3 className="text-base font-semibold text-cyan-100 sm:text-lg">
                  Une performance irréprochable
                </h3>
                <p className="mt-2 text-sm text-slate-200 sm:text-base">
                  Un beau site ne suffit plus. Je construis des sites ultra rapides,
                  optimisés Core Web Vitals, pensés pour Google et pour offrir une
                  expérience fluide sur tous les appareils.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5">
                <h3 className="text-base font-semibold text-indigo-100 sm:text-lg">
                  Une vraie stratégie
                </h3>
                <p className="mt-2 text-sm text-slate-200 sm:text-base">
                  Je ne crée pas des pages pour “faire joli”, mais pour amener du
                  business :
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-200 sm:text-base">
                  <li>→ plus de visibilité</li>
                  <li>→ plus de crédibilité</li>
                  <li>→ plus de conversions</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5">
                <h3 className="text-base font-semibold text-cyan-100 sm:text-lg">
                  Une maîtrise technique complète
                </h3>
                <p className="mt-2 text-sm text-slate-200 sm:text-base">
                  Next.js, React, Tailwind, Java/Spring, Stripe, WordPress optimisé…
                  Vous profitez d’une expertise complète allant du front-end au
                  back-end, y compris l’intégration de paiements, systèmes de
                  réservation et applications avancées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CE QUI ME DIFFÉRENCIE */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
          <div className="space-y-6">
            <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
              Ce qui me différencie
            </h2>
            <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-slate-300 sm:text-base">
              Voici mon avantage réel par rapport à la plupart des agences et
              freelances :
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                {
                  title: "Je suis développeur, designer et stratège",
                  text: "Pas besoin de trois prestataires : vous avez un seul interlocuteur, qui maîtrise design, code, UX, SEO et performance.",
                },
                {
                  title: "Des sites premium, pas juste “rapides à livrer”",
                  text: "J’accorde une attention extrême aux détails : typographies, animations, transitions, rythme visuel, cohérence globale. Chaque site doit être fluide, esthétique, agréable à parcourir.",
                },
                {
                  title: "Je construis pour durer",
                  text: "Pas de plugins inutiles. Pas de bricolage. Pas de vieux outils. Je crée des sites solides, sécurisés, faciles à maintenir et capables d’évoluer.",
                },
                {
                  title: "Une communication claire et humaine",
                  text: "Je vulgarise. J’explique. Je conseille. Vous savez toujours pourquoi on fait les choses, combien ça coûte et ce que cela vous apporte réellement. Je construis des sites, mais surtout des relations de confiance.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-1.5 hover:border-indigo-500/70 hover:bg-slate-900"
                >
                  <h3 className="text-base font-semibold text-indigo-100 sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200 sm:text-base">
                    {item.text}
                  </p>
                  <div className="mt-3 h-px w-12 bg-gradient-to-r from-indigo-400 via-cyan-300 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MA VISION + PROCESS */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center">
            {/* Vision */}
            <div className="space-y-5">
              <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl lg:text-left">
                Ma vision
              </h2>
              <p className="mx-auto max-w-xl text-center text-sm leading-relaxed text-slate-300 sm:text-base lg:mx-0 lg:text-left">
                Le web doit être :
              </p>
              <ul className="mx-auto max-w-xl space-y-3 text-sm text-slate-100 sm:text-base lg:mx-0">
                <li>
                  ✨ <strong>Beau</strong> — un design qui inspire confiance.
                </li>
                <li>
                  ⚡ <strong>Rapide</strong> — parce qu’un site lent fait perdre des
                  clients.
                </li>
                <li>
                  🎯 <strong>Utile</strong> — chaque élément doit servir un objectif.
                </li>
                <li>
                  📈 <strong>Stratégique</strong> — un site doit vous aider à grandir.
                </li>
              </ul>
              <p className="mx-auto max-w-xl text-center text-sm leading-relaxed text-slate-300 sm:text-base lg:mx-0 lg:text-left">
                C’est cette combinaison qui donne des sites haut de gamme, élégants
                et performants, capables de refléter votre identité et de vous
                démarquer.
              </p>
            </div>

            {/* Process coloré */}
            <div className="rounded-3xl border border-indigo-500/60 bg-slate-950/80 p-6 shadow-[0_18px_60px_rgba(30,64,175,0.7)]">
              <p className="text-center text-[0.75rem] font-medium uppercase tracking-[0.22em] text-indigo-200 sm:text-xs">
                Une collaboration simple et efficace
              </p>
              <ol className="mt-5 space-y-3 text-sm text-slate-100 sm:text-base">
                {[
                  "On discute de vos besoins",
                  "On définit une stratégie claire",
                  "Je conçois les maquettes (design premium)",
                  "Je développe un site rapide, moderne et optimisé",
                  "Je vous accompagne même après la mise en ligne",
                ].map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-[2px] inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-cyan-400 to-emerald-400 text-[0.8rem] font-semibold text-slate-950">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-slate-950 pb-18 pt-10 sm:pb-24 sm:pt-12">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
          <p className="text-[0.75rem] font-medium uppercase tracking-[0.24em] text-indigo-200 sm:text-xs">
            Travailler ensemble
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Envie de travailler ensemble ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Votre projet mérite mieux qu’un site standard. Je vous aide à créer un
            site unique, puissant, et vraiment professionnel.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-cyan-400 px-7 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-indigo-500/40 transition hover:translate-y-[1px] hover:shadow-indigo-400/50"
            >
              Contactez-moi
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <p className="max-w-xs text-center text-[0.8rem] text-slate-300 sm:text-xs">
              👉 Première discussion gratuite pour parler de votre projet.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


