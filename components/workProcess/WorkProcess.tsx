"use client";

import { Lightbulb, PencilRuler, Code2, Rocket } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";

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
            "On clarifie vos objectifs, vos cibles et vos KPIs. Benchmark et plan d'action priorisé.",
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
            "Mise en ligne, suivi des KPIs, itérations continues et plan d'évolution.",
        icon: Rocket,
        deliverables: ["Check-list go-live", "Plan de suivi", "Backlog évolutif"],
    },
];

export default function ProcessSection() {
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
        <section
            id="process"
            className="relative section overflow-x-hidden"
        >
            {/* Séparateur */}
            <div className="divider mx-auto max-w-6xl" />

            <div className="mx-auto max-w-6xl px-8 lg:px-12" style={{ paddingTop: 'var(--section-gap)' }}>
                <ScrollReveal as="header" className="mb-16 max-w-xl">
                    <p className="section-label mb-4">
                        Méthode
                    </p>
                    <h2 style={{ color: 'var(--fg-base)' }}>
                        Process &amp; méthode de travail
                    </h2>
                    <p className="mt-4" style={{ color: 'var(--fg-muted)' }}>
                        Une approche structurée, orientée résultats — pas &quot;juste un site&quot;,
                        un accompagnement sur la durée.
                    </p>
                </ScrollReveal>

                {/* Timeline fine (desktop) */}
                <div className="relative hidden lg:block">
                    <div className="absolute left-[8%] right-[8%] top-16 h-px" style={{ background: 'var(--border)' }} />
                </div>

                {/* Cards — staggerées */}
                <StaggerContainer
                    as="ol"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    staggerDelay={0.12}
                >
                    {steps.map((s, idx) => (
                        <StaggerItem key={s.id} as="li">
                            <article
                                className="group h-full"
                                style={{ transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)' }}
                                aria-labelledby={`step-${s.id}`}
                            >
                                <div
                                    className="h-full p-6"
                                    style={{
                                        background: 'var(--surface-1)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '1rem',
                                    }}
                                >
                                    {/* Header icône + numéro */}
                                    <div className="flex items-center justify-between mb-5">
                                        <div
                                            className="flex h-11 w-11 items-center justify-center rounded-lg"
                                            style={{ background: 'var(--accent-muted)', border: '1px solid var(--border)' }}
                                        >
                                            <s.icon className="h-4.5 w-4.5" style={{ color: 'var(--accent)' }} aria-hidden />
                                        </div>
                                        <span
                                            className="text-xs font-medium"
                                            style={{ color: 'var(--fg-subtle)', fontFamily: 'var(--font-body)', letterSpacing: '0.1em' }}
                                        >
                                            {String(idx + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    {/* Titre + desc */}
                                    <h3
                                        id={`step-${s.id}`}
                                        className="text-lg"
                                        style={{ color: 'var(--fg-base)', fontFamily: 'var(--font-heading)' }}
                                    >
                                        {s.title}
                                    </h3>
                                    <p className="mt-3 text-sm" style={{ color: 'var(--fg-subtle)', lineHeight: '1.7' }}>
                                        {s.desc}
                                    </p>

                                    {/* Deliverables */}
                                    {s.deliverables?.length ? (
                                        <ul className="mt-5 space-y-2 text-sm">
                                            {s.deliverables.map((d, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center gap-2.5"
                                                    style={{ color: 'var(--fg-subtle)' }}
                                                >
                                                    <span
                                                        className="inline-block h-1 w-1 rounded-full flex-shrink-0"
                                                        style={{ background: 'var(--accent)' }}
                                                    />
                                                    <span>{d}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                </div>
                            </article>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* CTA */}
                <ScrollReveal className="mt-16" delay={0.3}>
                    <MagneticButton
                        as="a"
                        href="/contact"
                        className="btn btn-primary"
                    >
                        Discutons de votre projet
                    </MagneticButton>
                </ScrollReveal>
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
