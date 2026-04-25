import type { Metadata } from "next";
import Link from "next/link";
import { ServicesSection } from "@/components/services/ServicesSection";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

export const metadata: Metadata = {
  title: "Création de site WordPress performant — Stéphane Gamot",
  description:
    "Sites WordPress clairs et élégants : vitrine, blog ou petite boutique. Rapide, sécurisé, optimisé SEO et facile à gérer. Demandez un devis.",
  metadataBase: new URL("https://www.stephanegamot.com"),
  alternates: { canonical: "https://www.stephanegamot.com/services/site-internet-wordpress" },
  keywords: [
    "site WordPress",
    "création site WordPress Belgique",
    "WordPress rapide",
    "WordPress SEO",
    "site vitrine WordPress",
    "maintenance WordPress",
  ],
  robots: { index: true, follow: true },
  authors: [{ name: "Stéphane Gamot", url: "https://www.stephanegamot.com/me" }],
  openGraph: {
    title: "Site WordPress pro & rapide – Stéphane Gamot",
    description:
      "Un site WordPress simple à gérer, solide techniquement, avec un design pro et un SEO propre.",
    url: "/services/site-internet-wordpress",
    siteName: "Stéphane Gamot",
    type: "website",
    locale: "fr_BE",
    images: [
      {
        url: "/Images/og/office-workstation.webp",
        width: 1200,
        height: 630,
        alt: "Création de site WordPress professionnel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Site WordPress pro & rapide – Stéphane Gamot",
    description:
      "Vitrine, blog ou petite boutique : un WordPress élégant, rapide, sécurisé et facile à mettre à jour.",
    images: ["/Images/og/office-workstation.webp"],
  },
};


export default function WordPressServicePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Services", href: "/#services" }, { label: "WordPress" }]} />
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Glow de fond */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-40 h-72 w-72 rounded-full opacity-[0.04]" style={{ background: "var(--accent)", filter: "blur(60px)" }} />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="section-label">
            Services
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Sites internet{" "}
            <span style={{ color: "var(--accent)" }}>
              WordPress
            </span>{" "}
            élégants & faciles à gérer.
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Je crée des sites WordPress sur mesure pour les indépendants,
            thérapeutes et petites entreprises qui veulent une présence en
            ligne claire, professionnelle et simple à mettre à jour.
          </p>
          <p className="mt-2 max-w-xl text-sm sm:text-base" style={{ color: "var(--fg-subtle)" }}>
            Idéal pour un{" "}
            <span className="font-semibold" style={{ color: "var(--fg-base)" }}>
              site vitrine, un blog
            </span>{" "}
            ou une petite boutique en ligne, sans se perdre dans la technique.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Parler de mon site WordPress
            </Link>
            <span className="text-xs sm:text-sm" style={{ color: "var(--fg-subtle)" }}>
              Un échange simple, concret, sans jargon.
            </span>
          </div>
        </div>
      </section>

      {/* 3 BLOCS VISUELS */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: "var(--accent-muted)" }}>
                🖥️
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                Site vitrine clair & rassurant
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Pages essentielles (Accueil, Services, À propos, Contact) avec
                un design propre, lisible et pensé pour donner confiance dès les
                premières secondes.
              </p>
            </article>

            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: "var(--accent-muted)" }}>
                ✏️
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                Facile à mettre à jour
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Vous pouvez modifier vos textes, ajouter des articles, changer
                une image ou une page sans forcément passer par un développeur.
              </p>
            </article>

            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: "var(--accent-muted)" }}>
                🔒
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                Base pro, optimisée & sécurisée
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Choix limité de plugins, sécurité de base, sauvegardes et
                optimisation des images pour éviter le WordPress lent et
                fragile.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* POUR QUI ? */}
      <section>
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
              Pour qui est ce service&nbsp;?
            </h2>
            <p className="mt-2 max-w-xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
              Si vous avez besoin d'un site sérieux, mais que vous ne voulez pas
              gérer une usine à gaz, WordPress bien configuré est souvent la
              bonne option.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl p-4" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="text-sm sm:text-base font-semibold">
                Indépendants, thérapeutes, petites entreprises
              </p>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Vous voulez une présence en ligne claire : présenter vos
                services, montrer des témoignages et permettre aux gens de vous
                contacter facilement.
              </p>
            </div>
            <div className="rounded-xl p-4" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="text-sm sm:text-base font-semibold">
                Refonte d'un WordPress existant
              </p>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Votre site actuel est lent, confus ou compliqué à gérer : on
                simplifie la structure, on nettoie les plugins et on remet de
                l'ordre dans le design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Liens complémentaires */}
      <aside className="mx-auto max-w-5xl px-4 pb-6 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.12em] mb-3" style={{ color: "var(--fg-subtle)" }}>
          Services complémentaires
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/services/seo", label: "Optimisation SEO" },
            { href: "/services/site-vitrine", label: "Site vitrine premium" },
            { href: "/portfolio", label: "Voir le portfolio" },
            { href: "/faq", label: "Questions fréquentes" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm px-4 py-2 transition-colors duration-300"
              style={{ border: "1px solid var(--border)", borderRadius: "0.5rem", color: "var(--fg-muted)" }}
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </aside>

      {/* CTA FINAL */}
      <section className="pb-16 pt-10 sm:pb-20 sm:pt-12">
        <div className="divider" />
        <div className="mx-auto max-w-3xl px-4 pt-10 text-center sm:px-6 sm:pt-12 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            On voit ensemble ce qui est le plus adapté&nbsp;?
          </h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Expliquez-moi en quelques lignes votre activité et ce que vous
            attendez de votre site WordPress. Je vous réponds avec une approche
            simple, réaliste et adaptée à votre budget.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Me parler de mon projet
            </Link>
          </div>
        </div>
                <ServicesSection />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Création de site WordPress",
            description:
              "Sites WordPress clairs et élégants : vitrine, blog ou petite boutique. Rapide, sécurisé, optimisé SEO et facile à gérer.",
            provider: {
              "@type": "ProfessionalService",
              name: "Stéphane Gamot",
              url: "https://www.stephanegamot.com",
            },
            areaServed: { "@type": "Country", name: "Belgium" },
            url: "https://www.stephanegamot.com/services/site-internet-wordpress",
          }),
        }}
      />
    </>
  );
}
