"use client";

import Link from "next/link";
import {
  Code2,
  ShoppingBag,
  Globe2,
  Search,
  ShieldCheck,
  LayoutTemplate,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

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
      "Sites conformes aux standards d'accessibilité pour offrir une expérience inclusive et respecter le cadre légal.",
    icon: ShieldCheck,
  },
];


export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-t py-16 sm:py-20 lg:py-24"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* En-tête — scroll reveal */}
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="section-label">
            Mes domaines d&apos;intervention
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold" style={{ color: "var(--fg-base)" }}>
            Des sites pensés pour la performance et la conversion
          </h2>
          <p className="mt-4 text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Du site vitrine à l&apos;application web sur-mesure, en passant par
            l&apos;e-commerce, chaque projet est conçu pour être rapide, lisible et
            efficace, sur mobile comme sur ordinateur.
          </p>
        </ScrollReveal>

        {/* Grille de cartes — stagger */}
        <StaggerContainer className="mt-12 grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={service.slug}
                  className="service-card group relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 sm:p-6 outline-none"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface-1)",
                    transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease",
                  }}
                >
                  <div className="relative flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl border backdrop-blur"
                      style={{
                        borderColor: "var(--border)",
                        background: "var(--accent-muted)",
                      }}
                    >
                      <Icon className="h-5 w-5" style={{ color: "var(--accent)" }} aria-hidden="true" />
                    </div>
                    <div className="flex flex-col">
                      <span
                        className="text-xs font-semibold uppercase tracking-[0.2em]"
                        style={{ color: "var(--accent)" }}
                      >
                        {service.label}
                      </span>
                      <h3 className="mt-1 text-base sm:text-lg font-semibold" style={{ color: "var(--fg-base)" }}>
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="relative mt-4 flex-1 text-sm" style={{ color: "var(--fg-muted)" }}>
                    {service.description}
                  </p>

                  <div className="relative mt-5 flex items-center gap-2 text-sm font-medium" style={{ color: "var(--accent)" }}>
                    <span>Découvrir ce service</span>
                    <span
                      aria-hidden="true"
                      className="inline-block"
                      style={{ transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)" }}
                    >
                      →
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
