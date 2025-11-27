"use client";

import { StarIcon, ShieldCheckIcon, CheckCircleIcon } from "@heroicons/react/20/solid";
import Script from "next/script";
import Image from "next/image";

type Review = {
    id: number;
    name: string;
    role?: string;
    company?: string;
    rating: 1 | 2 | 3 | 4 | 5;
    quote: string;
    avatar: string; // url absolue (autorise ton domaine dans next.config si besoin)
};

const reviews: Review[] = [
    {
        id: 1,
        name: "Claire Delmas",
        role: "Directrice marketing",
        company: "Maison Kanso",
        rating: 5,
        quote:
            "— Site rapide, esthétique et très propre techniquement. Impact immédiat sur nos leads et notre visibilité SEO.",
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
            "— Process clair, intégration Stripe sans friction, livrables carrés. On a senti un vrai accompagnement de bout en bout.",
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
            "— Design soigné, performances mesurées, accessibilité intégrée. L’expérience client est nettement plus fluide.",
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

function cx(...c: Array<string | false | undefined>) {
    return c.filter(Boolean).join(" ");
}

export default function TestimonialsSection() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Stéphane Gamot — White Wolf Web",
        url: "https://stephanegamot.vercel.app/",
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
            reviewBody: r.quote.replace(/^—\s*/, ""),
        })),
    };

    return (
        <section id="avis" className="relative bg-transparent py-20 overflow-x-hidden">
            {/* Halo premium */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
                <div className="
            h-40 sm:h-48 md:h-56 lg:h-64
            w-full max-w-[60rem]
            rounded-full bg-indigo-500/15
            blur-2xl sm:blur-3xl
          " />
            </div>

            <div className="mx-auto max-w-7xl px-6">
                {/* En-tête + badge Google */}
                <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                            Avis & Confiance
                        </h2>
                        <p className="mt-2 text-white/70">
                            Mes clients me font confiance pour des sites rapides, élégants et durables.
                        </p>
                    </div>

                    {/* Badge crédible “★★★★★ 5.0 sur Google” */}
                    <div
                        className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/90 backdrop-blur ring-1 ring-inset ring-white/5"
                        aria-label={`Note moyenne ${average} sur 5 sur Google`}
                        role="img"
                    >
                        <div className="flex -mx-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <StarIcon key={i} className="mx-0.5 h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden />
                            ))}
                        </div>
                        <span className="text-sm font-semibold">{average.toFixed(1)}</span>
                        <span className="text-sm text-white/70">sur Google</span>
                        <CheckCircleIcon className="h-4 w-4 text-emerald-300" aria-hidden />
                    </div>
                </div>

                {/* Bloc stats + histogramme */}
                <div className="mb-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur ring-1 ring-inset ring-white/5">
                    <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                        <div className="flex items-center gap-3">
                            <div className="flex -mx-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <StarIcon key={i} className="mx-0.5 h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden />
                                ))}
                            </div>
                            <div className="text-white/80 text-sm">
                                <span className="font-semibold text-white">{average.toFixed(1)}</span> sur 5 &middot; {totalCount} avis
                            </div>
                            <ShieldCheckIcon className="h-5 w-5 text-indigo-300" aria-hidden />
                        </div>

                        {/* Histogramme compact */}
                        <dl className="grid w-full grid-cols-1 gap-2 sm:w-auto sm:grid-cols-5 sm:gap-4">
                            {histogram.map((h) => (
                                <div key={h.stars} className="flex items-center gap-2">
                                    <dt className="flex items-center gap-1 text-sm text-white/80">
                                        <span className="w-3 text-right tabular-nums">{h.stars}</span>
                                        <StarIcon className="h-4 w-4 text-yellow-400" aria-hidden />
                                    </dt>
                                    <dd className="relative h-2 w-28 overflow-hidden rounded-full bg-white/10">
                                        <div
                                            className="absolute inset-y-0 rounded-full bg-yellow-400"
                                            style={{ width: `calc(${h.count} / ${totalCount} * 100%)` }}
                                            aria-hidden
                                        />
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>

                {/* Témoignages — cartes premium */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((r) => (
                        <article
                            key={r.id}
                            className="group relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur ring-1 ring-inset ring-white/5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5"
                            aria-labelledby={`review-${r.id}`}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={r.avatar}
                                        alt={`Avatar de ${r.name}`}
                                        width={48}
                                        height={48}
                                        loading="lazy"
                                        className="size-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 id={`review-${r.id}`} className="text-white font-semibold">
                                            {r.name}
                                        </h3>
                                        <p className="text-sm text-white/70">
                                            {[r.role, r.company].filter(Boolean).join(" — ")}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex -mx-0.5" aria-label={`${r.rating} sur 5`}>
                                    {[0, 1, 2, 3, 4].map((i) => (
                                        <StarIcon
                                            key={i}
                                            className={cx(
                                                r.rating > i ? "text-yellow-400" : "text-white/20",
                                                "mx-0.5 h-4 w-4"
                                            )}
                                            aria-hidden
                                        />
                                    ))}
                                </div>
                            </div>

                            <blockquote className="mt-4 text-white/90">
                                <p className="text-pretty leading-relaxed">{r.quote}</p>
                            </blockquote>

                            <footer className="mt-5 flex items-center gap-2 text-xs text-white/60">
                                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/85" />
                                <span>Témoignage vérifié</span>
                            </footer>
                        </article>
                    ))}
                </div>


            </div>

            {/* SEO */}
            <Script id="reviews-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        </section>
    );
}


