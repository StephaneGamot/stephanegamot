import Image, {StaticImageData} from "next/image";
import SeoCard from "./../../public/Images/seo-card.webp"
import WordPressCard from "./../../public/Images/wordpress-card.webp"
import EcommerceCard from "./../../public/Images/e-commerce-card.webp"
import WowCard from "./../../public/Images/wow-card.webp"
import AccessibilityWebCard from "./../../public/Images/accessibilite-web-card.webp"
import AdviceCard from "./../../public/Images/conseil-web.webp"

type Service = {
    slug: string;
    title: string;
    description: string;
    alt: string;
    image: StaticImageData;

};

const services: Service[] = [
    {
        slug: "site-nextjs",
        title: "Site Next.js / React",
        alt:"Création de site avec React & Next",
        description: "Performance, sécurité et design sur mesure pour une expérience fluide sur tous les écrans.",
        image: WowCard,
    },
    {
        slug: "site-wordpress",
        title: "Site WordPress",
        alt:"Création d'un site internet avec le CMS WordPress",
        description: "Un site simple à gérer, élégant, et optimisé pour votre contenu et vos objectifs.",
        image: WordPressCard,
    },
    {
        slug: "seo-audit-technique",
        title: "SEO & Audit technique",
        alt:"Séduire Google est tres important",
        description: "Structure, contenus et performances travaillés pour gagner des positions sur Google.",
        image: SeoCard,
    },
    {
        slug: "ecommerce-stripe",
        title: "E-commerce & Stripe",
        alt:"c'est un magasin en ligne",
        description: "Une boutique en ligne fluide, rassurante et optimisée pour la conversion.",
        image: EcommerceCard,
    },
    {
        slug: "accessibilite",
        title: "Accessibilité numérique",
        alt:"le WCAG 2.3 est necessaire et obligatoire",
        description: "Conformité WCAG/RGAA et confort d’usage pour tous vos visiteurs.",
        image: AccessibilityWebCard,
    },
    {
        slug: "conseil-strategie",
        title: "Conseil & stratégie digitale",
        alt:"Pour vous aider et avancer dans votre quete",
        description: "Un accompagnement clair pour aligner votre site, votre SEO et vos objectifs business.",
        image: AdviceCard,
    },
];

export default function CardsHome() {
    return (
        <section
            aria-labelledby="services-heading"
            className="bg-transparent py-14 sm:py-18 lg:py-20"
        >
            <div className="container-page">
                {/* En-tête section */}
                <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
                        Services clés
                    </p>
                    <h2
                        id="services-heading"
                        className="mt-3 font-heading text-2xl font-semibold text-white sm:text-3xl"
                    >
                        Ce que je peux faire pour votre site.
                    </h2>
                    <p className="mt-3 text-sm text-white/70">
                        Je conçois et développe des sites qui allient design, performance et stratégie.
                        Chaque service est pensé pour servir des résultats concrets, pas seulement une belle vitrine.
                    </p>
                </div>

                {/* Grille de cartes */}
                <div
                    className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    role="list"
                    aria-label="Liste des services proposés"
                >
                    {services.map((service) => (
                        <article
                            key={service.slug}
                            role="listitem"
                            aria-labelledby={`service-${service.slug}-title`}
                            aria-describedby={`service-${service.slug}-desc`}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm shadow-black/40 transition hover:border-indigo-600/60 hover:bg-white/10 dark:bg-gray-800/40"
                        >
                            <div className="relative h-40 w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.alt}
                                    fill
                                    placeholder="blur"
                                    loading="lazy"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                />
                            </div>

                            <div className="flex flex-1 flex-col gap-2 px-4 py-1 sm:px-5 sm:py-1">
                                <h3
                                    id={`service-${service.slug}-title`}
                                    className="!my-1.5 font-heading text-base font-semibold text-white"
                                >
                                    {service.title}
                                </h3>
                                <p
                                    id={`service-${service.slug}-desc`}
                                    className="!mt-0 text-sm text-white/70"
                                >
                                    {service.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}