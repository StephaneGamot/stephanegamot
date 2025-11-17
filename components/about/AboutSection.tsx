// app/(marketing)/_components/AboutSection.tsx
import Image from "next/image";
import Link from "next/link";
// Remplace par ton vrai portrait (ex: /public/sg-portrait.jpg)
import Portrait from "@/public/Images/me/me.webp";

export default function AboutSection() {
    return (
        <section id="about" className="relative bg-transparent py-20">
            {/* halo discret */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-64 w-[60rem] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl" />
            </div>

            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-12 lg:gap-16">
                {/* Portrait */}
                <div className="lg:col-span-4">
                    <div className="relative mx-auto w-[246.4px] h-[313.6px] lg:w-[352px] lg:h-[448px] aspect-square overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                        <Image
                            src={Portrait}
                            alt="Portrait de Stéphane Gamot"
                            fill
                            className="object-cover"
                            loading="lazy"

                        />
                    </div>
                </div>

                {/* Texte */}
                <div className="lg:col-span-8">
                    <header className="mb-4">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                            À propos — Stéphane Gamot
                        </h2>
                    </header>

                    <p className="text-white/80 text-pretty leading-relaxed">
                        Développeur <span className="font-semibold">full-stack</span> et
                        consultant <span className="font-semibold">SEO</span> basé en Belgique.
                        Je crée des sites <span className="font-semibold">rapides</span>,{" "}
                        <span className="font-semibold">élégants</span> et{" "}
                        <span className="font-semibold">optimisés pour la conversion</span>.
                    </p>

                    {/* puces crédibilité concises */}
                    <ul className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/70">
                        <li className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Performance & Accessibilité (WCAG 2.1)
                        </li>
                        <li className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400" />
                            Next.js • Java/Spring • WordPress/SEO
                        </li>
                        <li className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                            E-commerce • Stripe • SEO technique
                        </li>
                    </ul>

                    {/* CTA */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Link
                            href="/me"
                            className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-white shadow hover:bg-indigo-400 transition-colors"
                        >
                            Découvrir mon parcours
                            <svg width="16" height="16" viewBox="0 0 24 24" className="-mb-px">
                                <path d="M5 12h14m-7-7l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-white/90 hover:bg-white/10"
                        >
                            Me contacter
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
