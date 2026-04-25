"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

import SeoCard from "./../../public/Images/seo-card.webp";
import WordPressCard from "./../../public/Images/wordpress-card.webp";
import EcommerceCard from "./../../public/Images/e-commerce-card.webp";
import WowCard from "./../../public/Images/wow-card.webp";
import AccessibilityWebCard from "./../../public/Images/accessibilite-web-card.webp";
import AdviceCard from "./../../public/Images/conseil-web.webp";

type Service = {
    slug: string;
    title: string;
    description: string;
    alt: string;
    image: StaticImageData;
};

const services: Service[] = [
    {
        slug: "site-web-react-next",
        title: "Site Next.js / React",
        alt: "Création de site avec React & Next",
        description:
            "Performance, sécurité et design sur mesure pour une expérience fluide sur tous les écrans.",
        image: WowCard,
    },
    {
        slug: "site-internet-wordpress",
        title: "Site WordPress",
        alt: "Création d'un site internet avec le CMS WordPress",
        description:
            "Un site simple à gérer, élégant, et optimisé pour votre contenu et vos objectifs.",
        image: WordPressCard,
    },
    {
        slug: "seo",
        title: "SEO & Audit technique",
        alt: "Audit SEO et optimisation technique pour Google",
        description:
            "Structure, contenus et performances travaillés pour gagner des positions sur Google.",
        image: SeoCard,
    },
    {
        slug: "e-commerce",
        title: "E-commerce & Stripe",
        alt: "Boutique en ligne e-commerce",
        description:
            "Une boutique en ligne fluide, rassurante et optimisée pour la conversion.",
        image: EcommerceCard,
    },
    {
        slug: "accessibilite",
        title: "Accessibilité numérique",
        alt: "Conformité WCAG et accessibilité web",
        description:
            "Conformité WCAG/RGAA et confort d'usage pour tous vos visiteurs.",
        image: AccessibilityWebCard,
    },
    {
        slug: "site-vitrine",
        title: "Site vitrine",
        alt: "Création de site vitrine professionnel",
        description:
            "Un site élégant et clair pour présenter votre activité et générer des contacts qualifiés.",
        image: AdviceCard,
    },
];

export default function CardsHome() {
    return (
        <section
            aria-labelledby="services-heading"
            className="section"
        >
            {/* Séparateur fin */}
            <div className="divider mx-auto max-w-6xl" />

            <div className="mx-auto max-w-6xl px-8 lg:px-12" style={{ paddingTop: 'var(--section-gap)' }}>
                {/* En-tête section — scroll reveal */}
                <ScrollReveal className="mb-16 max-w-xl">
                    <p className="section-label mb-4">
                        Services
                    </p>
                    <h2
                        id="services-heading"
                        style={{ color: 'var(--fg-base)' }}
                    >
                        Ce que je peux faire pour vous.
                    </h2>
                    <p className="mt-4" style={{ color: 'var(--fg-muted)' }}>
                        Des sites qui allient design, performance et stratégie.
                        Chaque service est pensé pour servir des résultats concrets.
                    </p>
                </ScrollReveal>

                {/* Grille Bento — stagger sur les cartes */}
                <StaggerContainer
                    className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                    staggerDelay={0.08}
                >
                    {services.map((service, idx) => (
                        <StaggerItem key={service.slug} as="article">
                            <Link
                                href={`/services/${service.slug}`}
                                className={`group relative overflow-hidden block h-full outline-none ${
                                    idx < 2 ? 'lg:row-span-1' : ''
                                }`}
                                style={{
                                    background: 'var(--surface-1)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '1rem',
                                    display: 'block',
                                    transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease',
                                }}
                            >
                                {/* Image — espace réservé pour éviter CLS */}
                                <div className="relative h-44 w-full overflow-hidden" style={{ borderRadius: '1rem 1rem 0 0' }}>
                                    <Image
                                        src={service.image}
                                        alt={service.alt}
                                        fill
                                        placeholder="blur"
                                        loading="lazy"
                                        className="object-cover"
                                        style={{
                                            transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                                        }}
                                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                    />
                                    {/* Overlay subtil */}
                                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,9,12,0.45), transparent 35%)' }} />
                                </div>

                                <div className="px-6 py-5">
                                    <h3
                                        id={`service-${service.slug}-title`}
                                        className="text-base font-medium"
                                        style={{ color: 'var(--fg-base)', fontFamily: 'var(--font-heading)', fontSize: '1.15rem' }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        id={`service-${service.slug}-desc`}
                                        className="mt-2 text-sm"
                                        style={{ color: 'var(--fg-subtle)', lineHeight: '1.6' }}
                                    >
                                        {service.description}
                                    </p>

                                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: 'var(--accent)' }}>
                                        Découvrir
                                        <span aria-hidden="true" className="inline-block" style={{ transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)' }}>→</span>
                                    </span>
                                </div>

                                {/* Hover — bordure qui s'éclaire doucement */}
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        border: '1px solid var(--border-hover)',
                                        borderRadius: '1rem',
                                        opacity: 0,
                                        transition: 'opacity 0.4s ease',
                                    }}
                                />
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
