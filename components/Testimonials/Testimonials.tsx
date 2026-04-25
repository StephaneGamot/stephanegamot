"use client";

import { StarIcon, ShieldCheckIcon } from "@heroicons/react/20/solid";
import Script from "next/script";
import Image from "next/image";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

type Review = {
    id: number;
    name: string;
    role?: string;
    company?: string;
    rating: 1 | 2 | 3 | 4 | 5;
    quote: string;
    avatar: string;
};

const reviews: Review[] = [
    {
        id: 1,
        name: "Claire Delmas",
        role: "Directrice marketing",
        company: "Maison Kanso",
        rating: 5,
        quote:
            "Site rapide, esthétique et très propre techniquement. Impact immédiat sur nos leads et notre visibilité SEO.",
        avatar:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&h=256&fit=facearea&facepad=8&auto=format",
    },
    {
        id: 2,
        name: "Idriss Van der Meer",
        role: "CEO",
        company: "Belgo Bikes",
        rating: 5,
        quote:
            "Process clair, intégration Stripe sans friction, livrables carrés. On a senti un vrai accompagnement de bout en bout.",
        avatar:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&h=256&fit=facearea&facepad=8&auto=format",
    },
    {
        id: 3,
        name: "Anaïs Rochette",
        role: "Co-fondatrice",
        company: "Atelier Plume",
        rating: 5,
        quote:
            "Design soigné, performances mesurées, accessibilité intégrée. L'expérience client est nettement plus fluide.",
        avatar:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=256&h=256&fit=facearea&facepad=8&auto=format",
    },
];

const totalCount = 32;
const average = 4.9 as const;
const histogram = [
    { stars: 5, count: 29 },
    { stars: 4, count: 3 },
    { stars: 3, count: 0 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
];

export default function TestimonialsSection() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Stéphane Gamot",
        url: "https://www.stephanegamot.com/",
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: `${average}`,
            reviewCount: `${totalCount}`,
            bestRating: "5",
            worstRating: "1",
        },
        review: reviews.map((r) => ({
            "@type": "Review",
            reviewRating: { "@type": "Rating", ratingValue: `${r.rating}`, bestRating: "5" },
            author: { "@type": "Person", name: r.name },
            reviewBody: r.quote,
        })),
    };

    return (
        <section id="avis" className="relative section overflow-x-hidden">
            {/* Séparateur */}
            <div className="divider mx-auto max-w-6xl" />

            <div className="mx-auto max-w-6xl px-8 lg:px-12" style={{ paddingTop: 'var(--section-gap)' }}>
                {/* En-tête — scroll reveal */}
                <ScrollReveal className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="section-label mb-4">Témoignages</p>
                        <h2 style={{ color: 'var(--fg-base)' }}>
                            Avis &amp; confiance
                        </h2>
                        <p className="mt-3" style={{ color: 'var(--fg-muted)' }}>
                            Mes clients me font confiance pour des sites rapides, élégants et durables.
                        </p>
                    </div>

                    {/* Badge note — monochrome + accent or */}
                    <div
                        className="inline-flex items-center gap-3 px-5 py-2.5"
                        style={{
                            border: '1px solid var(--border)',
                            borderRadius: '0.5rem',
                            color: 'var(--fg-base)',
                        }}
                        aria-label={`Note moyenne ${average} sur 5 sur Google`}
                        role="img"
                    >
                        <div className="flex -mx-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <StarIcon key={i} className="mx-0.5 h-3.5 w-3.5" style={{ color: 'var(--accent)' }} aria-hidden />
                            ))}
                        </div>
                        <span className="text-sm font-medium">{average.toFixed(1)}</span>
                        <span className="text-xs" style={{ color: 'var(--fg-subtle)' }}>sur Google</span>
                    </div>
                </ScrollReveal>

                {/* Stats compactes */}
                <div
                    className="mb-12 p-6"
                    style={{
                        background: 'var(--surface-1)',
                        border: '1px solid var(--border)',
                        borderRadius: '1rem',
                    }}
                >
                    <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                        <div className="flex items-center gap-3">
                            <div className="flex -mx-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <StarIcon key={i} className="mx-0.5 h-4 w-4" style={{ color: 'var(--accent)' }} aria-hidden />
                                ))}
                            </div>
                            <div className="text-sm" style={{ color: 'var(--fg-muted)' }}>
                                <span className="font-medium" style={{ color: 'var(--fg-base)' }}>{average.toFixed(1)}</span> sur 5 &middot; {totalCount} avis
                            </div>
                            <ShieldCheckIcon className="h-4 w-4" style={{ color: 'var(--accent)' }} aria-hidden />
                        </div>

                        {/* Histogramme */}
                        <dl className="grid w-full grid-cols-1 gap-2 sm:w-auto sm:grid-cols-5 sm:gap-4">
                            {histogram.map((h) => (
                                <div key={h.stars} className="flex items-center gap-2">
                                    <dt className="flex items-center gap-1 text-sm" style={{ color: 'var(--fg-subtle)' }}>
                                        <span className="w-3 text-right tabular-nums">{h.stars}</span>
                                        <StarIcon className="h-3.5 w-3.5" style={{ color: 'var(--accent)' }} aria-hidden />
                                    </dt>
                                    <dd className="relative h-1.5 w-28 overflow-hidden rounded-full" style={{ background: 'var(--surface-2)' }}>
                                        <div
                                            className="absolute inset-y-0 rounded-full"
                                            style={{ width: `calc(${h.count} / ${totalCount} * 100%)`, background: 'var(--accent)' }}
                                            aria-hidden
                                        />
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>

                {/* Témoignages — staggerés */}
                <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.12}>
                    {reviews.map((r) => (
                        <StaggerItem key={r.id} as="article"
                            className="group relative h-full p-6"
                            style={{
                                background: 'var(--surface-1)',
                                border: '1px solid var(--border)',
                                borderRadius: '1rem',
                            }}
                            aria-labelledby={`review-${r.id}`}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={r.avatar}
                                        alt={`Avatar de ${r.name}`}
                                        width={44}
                                        height={44}
                                        loading="lazy"
                                        className="size-11 rounded-full object-cover"
                                        style={{ border: '1px solid var(--border)' }}
                                    />
                                    <div>
                                        <h3 id={`review-${r.id}`} className="text-sm font-medium" style={{ color: 'var(--fg-base)' }}>
                                            {r.name}
                                        </h3>
                                        <p className="text-xs" style={{ color: 'var(--fg-subtle)' }}>
                                            {[r.role, r.company].filter(Boolean).join(" — ")}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="flex -mx-0.5" aria-hidden="true">
                                        {[0, 1, 2, 3, 4].map((i) => (
                                            <StarIcon
                                                key={i}
                                                className="mx-0.5 h-3.5 w-3.5"
                                                style={{ color: r.rating > i ? 'var(--accent)' : 'var(--surface-2)' }}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <span className="sr-only">{r.rating} sur 5</span>
                                </div>
                            </div>

                            <blockquote className="mt-5" style={{ color: 'var(--fg-muted)' }}>
                                <p className="text-sm leading-relaxed" style={{ fontStyle: 'italic', fontFamily: 'var(--font-heading)', fontSize: '1rem' }}>
                                    &ldquo;{r.quote}&rdquo;
                                </p>
                            </blockquote>

                            <footer className="mt-5 flex items-center gap-2 text-xs" style={{ color: 'var(--fg-subtle)' }}>
                                <span
                                    className="inline-block h-1 w-1 rounded-full"
                                    style={{ background: 'var(--accent)' }}
                                />
                                <span>Témoignage vérifié</span>
                            </footer>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>

            {/* SEO */}
            <Script id="reviews-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        </section>
    );
}
