// app/(marketing)/_components/ProcessSection.tsx
import { Lightbulb, PencilRuler, Code2, Rocket } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import clsx from "clsx";

type Step = {
    id: number;
    title: string;
    desc: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    deliverables?: string[];
};

const steps: Step[] = [
    {
        id: 1,
        title: "Découverte & stratégie",
        desc:
            "On clarifie vos objectifs, vos cibles et vos KPIs. Benchmark et plan d’action priorisé.",
        icon: Lightbulb,
        deliverables: ["Brief stratégique", "Roadmap priorisée", "Planning macro"],
    },
    {
        id: 2,
        title: "Design & prototype",
        desc:
            "Arborescence, wireframes puis maquettes haute fidélité. Prototype cliquable pour valider tôt.",
        icon: PencilRuler,
        deliverables: ["Wireframes", "UI kit & styles", "Prototype Figma"],
    },
    {
        id: 3,
        title: "Développement & optimisation",
        desc:
            "Intégration propre (Next.js/WordPress selon le besoin), SEO technique, performance et accessibilité (WCAG 2.1).",
        icon: Code2,
        deliverables: ["Code review", "CI/CD", "Audit Lighthouse"],
    },
    {
        id: 4,
        title: "Lancement & accompagnement",
        desc:
            "Mise en ligne, suivi des KPIs, itérations continues et plan d’évolution.",
        icon: Rocket,
        deliverables: ["Check-list go-live", "Plan de suivi", "Backlog évolutif"],
    },
];

export const metadata: Metadata = {
    title: "Process & Méthode",
    description: "Une approche structurée, orientée résultats.",
};

export default function ProcessSection() {
    // JSON-LD HowTo (SEO)
    const howto = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Méthode de travail",
        description:
            "Processus en 4 étapes : stratégie, design, développement, lancement.",
        step: steps.map((s) => ({
            "@type": "HowToStep",
            position: s.id,
            name: s.title,
            itemListElement: (s.deliverables ?? []).map((d) => ({
                "@type": "HowToDirection",
                text: d,
            })),
        })),
    };

    return (
        <section id="process" className="relative py-20 bg-green-400">
            {/* Lueur d’arrière-plan “premium” */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10"
            >
                <div className="absolute left-1/2 top-0 h-64 w-[56rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6">
                <header className="mb-12">
                    <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Process & Méthode de travail
                    </h2>
                    <p className="mt-2 text-pretty text-white/70 sm:max-w-2xl">
                        Une approche structurée, orientée résultats — pas “juste un site”,
                        un accompagnement sur la durée.
                    </p>
                </header>

                {/* Rail / timeline (desktop) */}
                <div className="relative hidden lg:block">
                    <div className="absolute left-[8%] right-[8%] top-16 h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10" />
                </div>

                {/* Cards */}
                <ol
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    role="list"
                >
                    {steps.map((s, idx) => (
                        <li key={s.id}>
                            <article
                                className={clsx(
                                    "group h-full rounded-2xl border border-white/10 bg-white/5",
                                    "p-6 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.15)]",
                                    "transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5",
                                    "ring-1 ring-inset ring-white/5"
                                )}
                                aria-labelledby={`step-${s.id}`}
                            >
                                {/* Header icône + numéro */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15 ring-1 ring-indigo-300/20">
                                            <s.icon className="h-5 w-5 text-indigo-300" aria-hidden />
                                        </div>
                                        <span className="sr-only">Étape</span>
                                    </div>
                                    <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-white/10 px-2 text-xs font-semibold text-white/80 ring-1 ring-white/15">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                                </div>

                                {/* Titre + desc */}
                                <h3
                                    id={`step-${s.id}`}
                                    className="mt-4 text-lg font-semibold text-white"
                                >
                                    {s.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/75">
                                    {s.desc}
                                </p>

                                {/* Deliverables (plus “consulting”) */}
                                {s.deliverables?.length ? (
                                    <ul className="mt-4 space-y-1.5 text-sm">
                                        {s.deliverables.map((d, i) => (
                                            <li key={i} className="flex items-center gap-2 text-white/75">
                                                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/85" />
                                                <span>{d}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}

                                {/* Micro footer (qualité/perf) */}
                                <div className="mt-5 flex items-center gap-3 text-xs text-white/60">
                  <span className="inline-flex items-center gap-1">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400/90" />
                    <span>Process documenté</span>
                  </span>
                                    <span className="inline-flex items-center gap-1">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400/90" />
                    <span>Points d’étape</span>
                  </span>
                                </div>
                            </article>
                        </li>
                    ))}
                </ol>

                {/* CTA */}
                <div className="mt-12 flex flex-wrap items-center gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-white shadow hover:bg-indigo-400 transition-colors"
                    >
                        Discuter de votre projet
                        <svg width="16" height="16" viewBox="0 0 24 24" className="-mb-px">
                            <path d="M5 12h14m-7-7l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* SEO HowTo */}
            <Script
                id="howto-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howto) }}
            />
        </section>
    );
}
