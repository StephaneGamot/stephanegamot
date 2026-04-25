"use client";

import Image from "next/image";
import Link from "next/link";
import Portrait from "@/public/Images/me/me.webp";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";

export default function AboutSection() {
    return (
        <section id="about" className="relative section">
            {/* Séparateur */}
            <div className="divider mx-auto max-w-6xl" />

            <div className="mx-auto max-w-6xl px-8 lg:px-12" style={{ paddingTop: 'var(--section-gap)' }}>
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
                    {/* Portrait — traité comme une oeuvre d'art en galerie */}
                    <ScrollReveal className="lg:col-span-5" y={40}>
                        <div
                            className="relative mx-auto overflow-hidden"
                            style={{
                                width: '100%',
                                maxWidth: '380px',
                                aspectRatio: '3/4',
                                borderRadius: '0.75rem',
                                border: '1px solid var(--border)',
                            }}
                        >
                            <Image
                                src={Portrait}
                                alt="Portrait de Stéphane Gamot"
                                fill
                                className="object-cover"
                                loading="lazy"
                            />
                        </div>
                    </ScrollReveal>

                    {/* Texte */}
                    <StaggerContainer className="lg:col-span-7" staggerDelay={0.12}>
                        <StaggerItem>
                            <p className="section-label mb-4">À propos</p>
                        </StaggerItem>

                        <StaggerItem>
                            <h2 style={{ color: 'var(--fg-base)' }}>
                                Stéphane Gamot
                            </h2>
                        </StaggerItem>

                        <StaggerItem>
                            <p className="mt-6" style={{ color: 'var(--fg-muted)', lineHeight: '1.8' }}>
                                Architecte Front-End, ingénieur en développement full-stack et
                                consultant SEO basé en Belgique.
                                Je crée des sites rapides, élégants et
                                optimisés pour la conversion.
                            </p>
                        </StaggerItem>

                        {/* Puces crédibilité — style Quiet Luxury */}
                        <StaggerItem>
                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                {[
                                    'Performance & Accessibilité',
                                    'Next.js & WordPress',
                                    'SEO technique',
                                ].map((label) => (
                                    <span
                                        key={label}
                                        className="pill"
                                    >
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </StaggerItem>

                        {/* CTA */}
                        <StaggerItem>
                            <div className="mt-10 flex flex-wrap items-center gap-6">
                                <MagneticButton
                                    as="a"
                                    href="/me"
                                    className="btn btn-outline"
                                >
                                    Découvrir mon parcours
                                </MagneticButton>

                                <Link
                                    href="/contact"
                                    className="text-[13px] font-medium uppercase tracking-[0.1em] transition-colors duration-300"
                                    style={{ color: 'var(--fg-subtle)', borderBottom: '1px solid var(--border)' }}
                                >
                                    Me contacter
                                </Link>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
}
