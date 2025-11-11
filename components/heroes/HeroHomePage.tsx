"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section
            aria-labelledby="hero-heading"
            className="border-b border-white/10 bg-[#0b0c10]"
        >
            <div className="container-page relative mx-auto flex min-h-[80vh] flex-col items-start justify-center gap-10 py-20 md:py-28 lg:flex-row lg:items-center">
                {/* Colonne texte */}
                <div className="max-w-xl space-y-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
                        Stéphane Gamot · Développeur web & consultant SEO
                    </p>

                    <h1
                        id="hero-heading"
                        className="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
                    >
                        Un site élégant, rapide
                        <br className="hidden sm:block" />
                        et conçu pour attirer vos futurs clients.
                    </h1>

                    <p className="max-w-lg text-base text-white/70 leading-relaxed">
                        Je crée des sites web hautement performants avec Next.js et
                        WordPress, pensés pour convertir, se référencer et durer.
                        <br />
                        Chaque projet est développé avec rigueur, finesse et un sens du
                        détail qui inspire confiance.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-wrap items-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-emerald-400/25 transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c10]"
                            aria-label="Parler de votre projet de site web avec Stéphane Gamot"
                        >
                            Parler de votre projet
                        </Link>

                        <Link
                            href="/work"
                            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/85 transition hover:border-white/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c10]"
                            aria-label="Découvrir les réalisations de Stéphane Gamot"
                        >
                            Découvrir mes réalisations
                        </Link>
                    </div>

                    {/* Ligne crédibilité */}
                    <p className="text-xs text-white/40">
                        Next.js · WordPress · SEO · E-commerce · Accessibilité
                    </p>
                </div>

                {/* Colonne visuelle */}
                <div
                    className="pointer-events-none mt-8 w-full max-w-md flex-1 self-stretch rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-white/5 to-emerald-300/10 p-[1px] lg:mt-0"
                    aria-hidden="true"
                >
                    <div className="h-full rounded-[1.45rem] bg-[#050608] p-6">
                        <div className="mb-4 flex items-center gap-2 text-xs text-white/40">
                            <span className="inline-block size-2 rounded-full bg-emerald-400/80" />
                            Aperçu de votre futur site
                        </div>
                        <div className="space-y-3 text-[11px] text-white/65">
                            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                                <span className="text-white/80">Performance</span>
                                <span className="text-emerald-300">98/100</span>
                            </div>
                            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                                <span className="text-white/80">SEO technique</span>
                                <span className="text-emerald-300">Excellence</span>
                            </div>
                            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                                <span className="text-white/80">Conversion</span>
                                <span className="text-emerald-300">Optimisée</span>
                            </div>
                            <p className="pt-2 text-[11px] text-white/45">
                                Design, performance et stratégie unis pour valoriser votre
                                image et vos résultats.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
