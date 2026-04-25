import type { Metadata } from "next";
import Link from "next/link";
import { ServicesSection } from "@/components/services/ServicesSection";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

export const metadata: Metadata = {
  title: "Création de site e-commerce sur mesure — Stéphane Gamot",
  description:
    "Boutique en ligne sur mesure : tunnel d'achat simple, paiement sécurisé (Stripe), mobile-first, SEO solide et performances optimisées pour convertir.",
  metadataBase: new URL("https://www.stephanegamot.com"),
  alternates: { canonical: "https://www.stephanegamot.com/services/e-commerce" },
  keywords: [
    "création boutique en ligne",
    "site e-commerce",
    "Stripe",
    "paiement en ligne",
    "conversion",
    "SEO e-commerce",
    "performance e-commerce",
  ],
  robots: { index: true, follow: true },
  authors: [{ name: "Stéphane Gamot", url: "https://www.stephanegamot.com/me" }],
  openGraph: {
    title: "Création de site e-commerce – Stéphane Gamot",
    description:
      "E-commerce moderne : UX fluide, paiement Stripe, mobile-first, SEO et performance pour vendre plus facilement.",
    url: "https://www.stephanegamot.com/services/e-commerce",
    siteName: "Stéphane Gamot",
    type: "website",
    locale: "fr_BE",
    images: [
      {
        url: "/Images/og/office-workstation.webp",
        width: 1200,
        height: 630,
        alt: "Création de site e-commerce performant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Création de site e-commerce – Stéphane Gamot",
    description:
      "Tunnel d'achat simple, Stripe, mobile-first, SEO et performance : une boutique pensée pour convertir.",
    images: ["/Images/og/office-workstation.webp"],
  },
};


export default function EcommerceServicePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Services", href: "/#services" }, { label: "E-commerce" }]} />
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
            Boutiques{" "}
            <span style={{ color: "var(--accent)" }}>
              e-commerce
            </span>{" "}
            claires & efficaces.
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Je conçois des boutiques en ligne sur mesure avec un{" "}
            <span className="font-semibold" style={{ color: "var(--accent)" }}>
              parcours d'achat simple, un paiement sécurisé
            </span>{" "}
            (Stripe) et une expérience pensée d'abord pour le mobile.
          </p>
          <p className="mt-2 max-w-xl text-sm sm:text-base" style={{ color: "var(--fg-subtle)" }}>
            L'objectif : que vos clients trouvent rapidement ce qu'ils
            cherchent et qu'ils puissent commander sans stress ni friction.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Parler de ma boutique en ligne
            </Link>
            <span className="text-xs sm:text-sm" style={{ color: "var(--fg-subtle)" }}>
              Vous m'expliquez vos produits, je vous explique ce qui est réaliste.
            </span>
          </div>
        </div>
      </section>

      {/* 3 BLOCS VISUELS – AXE PARCOURS & CONVERSION */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: "var(--accent-muted)" }}>
                🛒
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                Parcours d'achat fluide
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Navigation claire, fiches produits lisibles, panier visible,
                étapes limitées : tout est pensé pour que la commande se fasse
                en quelques clics.
              </p>
            </article>

            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: "var(--accent-muted)" }}>
                📱
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                Mobile-first & rassurant
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                La majorité des commandes se font sur smartphone : le design est
                pensé d'abord pour le mobile, avec un look pro et rassurant.
              </p>
            </article>

            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: "var(--accent-muted)" }}>
                💳
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                Paiement sécurisé & suivi
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Intégration de Stripe (ou autre solution), confirmations
                d'email, suivi des commandes et configuration des frais de
                livraison selon vos besoins.
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
              Vous voulez vendre en ligne, mais sans transformer votre site en
              usine à gaz impossible à gérer.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl p-4" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="text-sm sm:text-base font-semibold">
                Restaurants, commerces, créateurs, thérapeutes…
              </p>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Commandes de repas, vente de produits, bons cadeaux, séances
                ou prestations : un e-commerce adapté à votre réalité, pas
                un modèle générique.
              </p>
            </div>
            <div className="rounded-xl p-4" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="text-sm sm:text-base font-semibold">
                Projets qui démarrent ou montent en puissance
              </p>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                MVP e-commerce, première boutique en ligne, ou besoin de
                professionnaliser un système de commandes bricolé avec des
                formulaires ou des messages privés.
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
            { href: "/services/site-web-react-next", label: "Site React & Next.js" },
            { href: "/services/seo", label: "Optimisation SEO" },
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

      {/* PETIT FOCUS TECH / STACK (DIFFÉRENT DES 2 AUTRES) */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
            <p className="section-label">
              Sous le capot
            </p>
            <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
              Selon votre projet, la boutique peut être construite avec{" "}
              <span className="font-semibold">Next.js, React, Stripe</span>{" "}
              et/ou connectée à une solution existante. Le but : garder un
              système fiable, évolutif, que vous pouvez comprendre.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Next.js / React",
                "Stripe",
                "Layouts orientés conversion",
                "Pages produits optimisées",
                "Suivi des commandes",
                "SEO e-commerce",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full px-3 py-1 text-[11px] uppercase tracking-wide"
                  style={{ border: "1px solid var(--border)", background: "var(--surface-2)", color: "var(--fg-muted)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-16 pt-8 sm:pb-20 sm:pt-10">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Envie de lancer ou d'améliorer votre e-commerce&nbsp;?
          </h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Dites-moi quels produits vous vendez, comment vous travaillez
            aujourd'hui, et ce que vous aimeriez que votre boutique fasse pour
            vous. On construit ensuite un plan simple, adapté à votre stade.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Me parler de mon projet e-commerce
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
            name: "Création de site e-commerce sur mesure",
            description:
              "Boutique en ligne sur mesure : tunnel d'achat simple, paiement sécurisé Stripe, mobile-first, SEO solide et performances optimisées.",
            provider: {
              "@type": "ProfessionalService",
              name: "Stéphane Gamot",
              url: "https://www.stephanegamot.com",
            },
            areaServed: { "@type": "Country", name: "Belgium" },
            url: "https://www.stephanegamot.com/services/e-commerce",
          }),
        }}
      />
    </>
  );
}
