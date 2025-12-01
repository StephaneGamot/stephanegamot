import Link from "next/link";
import {
  Code2,
  ShoppingBag,
  Globe2,
  Search,
  ShieldCheck,
  LayoutTemplate,
} from "lucide-react";

const services = [
  {
    slug: "/services/site-vitrine",
    label: "Site vitrine",
    title: "Création de site vitrine",
    description:
      "Un site élégant et clair pour présenter votre activité, inspirer confiance et convertir vos visiteurs en clients.",
    icon: Globe2,
  },
  {
    slug: "/services/e-commerce",
    label: "E-commerce",
    title: "Création de site e-commerce",
    description:
      "Vendez vos produits en ligne avec une boutique rapide, fluide, sécurisée et pensée pour le parcours client.",
    icon: ShoppingBag,
  },
  {
    slug: "/services/site-web-react-next",
    label: "React / Next.js",
    title: "Site web React & Next.js",
    description:
      "Applications web modernes, SEO-friendly, ultra rapides, idéales pour des projets sur-mesure et ambitieux.",
    icon: Code2,
  },
  {
    slug: "/services/site-internet-wordpress",
    label: "WordPress",
    title: "Site internet WordPress",
    description:
      "Un site administrable facilement, avec une base solide pour le contenu, le blogging et le référencement naturel.",
    icon: LayoutTemplate,
  },
  {
    slug: "/services/seo",
    label: "SEO",
    title: "Audit & optimisation SEO",
    description:
      "Analyse technique, contenu et popularité pour améliorer votre visibilité, vos positions et votre trafic qualifié.",
    icon: Search,
  },
  {
    slug: "/services/accessibilite",
    label: "Accessibilité",
    title: "Accessibilité numérique & conformité",
    description:
      "Sites conformes aux standards d’accessibilité pour offrir une expérience inclusive et respecter le cadre légal.",
    icon: ShieldCheck,
  },
];


export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-slate-950/95 border-t border-slate-800/80 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400/80">
            Mes domaines d’intervention
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white">
            Des sites pensés pour la performance et la conversion
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300/80">
            Du site vitrine à l’application web sur-mesure, en passant par
            l’e-commerce, chaque projet est conçu pour être rapide, lisible et
            efficace, sur mobile comme sur ordinateur.
          </p>
        </div>

        {/* Grille de cartes */}
        <div className="mt-12 grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={service.slug}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950/95 p-5 sm:p-6 shadow-[0_18px_45px_rgba(0,0,0,0.55)] outline-none transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/70 hover:shadow-[0_24px_60px_rgba(15,23,42,0.9)] focus-visible:-translate-y-1 focus-visible:border-indigo-400 focus-visible:shadow-[0_24px_60px_rgba(79,70,229,0.7)]"
              >
                {/* Halo décoratif */}
                <div className="pointer-events-none absolute inset-0 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-60 group-focus-visible:opacity-60">
                  <div className="absolute -top-10 right-0 h-28 w-28 rounded-full bg-indigo-500/40" />
                </div>

                <div className="relative flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 backdrop-blur">
                    <Icon className="h-5 w-5 text-indigo-300" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-300/90">
                      {service.label}
                    </span>
                    <h3 className="mt-1 text-base sm:text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="relative mt-4 flex-1 text-sm text-slate-300/85">
                  {service.description}
                </p>

                <div className="relative mt-5 flex items-center gap-2 text-sm font-medium text-indigo-300">
                  <span>Découvrir ce service</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5"
                  >
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
