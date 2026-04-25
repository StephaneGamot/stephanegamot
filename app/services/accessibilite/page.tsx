// app/services/accessibilite/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ServicesSection } from "@/components/services/ServicesSection";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

export const metadata: Metadata = {
  title: "Accessibilité web WCAG & conformité — Stéphane Gamot",
  description:
    "Audit et mise en conformité accessibilité WCAG : contrastes, navigation clavier, ARIA, formulaires. Réduisez vos risques légaux dès maintenant.",
  metadataBase: new URL("https://www.stephanegamot.com"),
  alternates: { canonical: "https://www.stephanegamot.com/services/accessibilite" },
  keywords: [
    "accessibilité web",
    "WCAG",
    "RGAA",
    "audit accessibilité",
    "contrastes",
    "navigation clavier",
    "ARIA",
    "conformité accessibilité",
  ],
  robots: { index: true, follow: true },
  authors: [{ name: "Stéphane Gamot", url: "https://www.stephanegamot.com/me" }],
  openGraph: {
    title: "Accessibilité web & conformité – Stéphane Gamot",
    description:
      "Audit + corrections : contrastes, formulaires, ARIA, navigation clavier, structure. Un site plus inclusif et plus robuste.",
    url: "https://www.stephanegamot.com/services/accessibilite",
    siteName: "Stéphane Gamot",
    type: "website",
    locale: "fr_BE",
    images: [
      {
        url: "/Images/og/office-workstation.webp",
        width: 1200,
        height: 630,
        alt: "Accessibilité numérique et conformité WCAG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibilité web & conformité – Stéphane Gamot",
    description:
      "Audit + corrections WCAG/RGAA : contrastes, clavier, ARIA, formulaires, structure. Inclusif et robuste.",
    images: ["/Images/og/office-workstation.webp"],
  },
};


export default function AccessibiliteServicePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Services", href: "/#services" }, { label: "Accessibilité" }]} />
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
            Accessibilité numérique&nbsp;:{" "}
            <span style={{ color: "var(--accent)" }}>
              loi, risques et mise en conformité
            </span>
            .
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Depuis le <span className="font-semibold">28 juin 2025</span>, la
            directive européenne sur l'accessibilité (EAA) s'applique à de
            nombreux services numériques en{" "}
            <span className="font-semibold">Belgique et en France</span> :
            e-commerce, banques, transports, services en ligne…
          </p>
          <p className="mt-2 max-w-xl text-sm sm:text-base" style={{ color: "var(--fg-subtle)" }}>
            Un site non accessible, ce n'est plus seulement "dommage pour
            l'utilisateur" :{" "}
            <span className="font-semibold" style={{ color: "var(--fg-base)" }}>
              c&apos;est un risque légal (amendes), d'image et de business
            </span>
            .
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Parler de l'accessibilité de mon site
            </Link>
            <span className="text-xs sm:text-sm" style={{ color: "var(--fg-subtle)" }}>
              On fait le point sur vos obligations et les priorités concrètes.
            </span>
          </div>
        </div>
      </section>

      {/* 3 BLOCS : POURQUOI C'EST IMPORTANT */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: "var(--accent-muted)" }}>
                ⚖️
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                Obligation légale (Belgique & France)
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                La loi européenne rend l'accessibilité obligatoire pour une
                grande partie des services numériques (e-commerce, services
                bancaires, transports, plateformes…). Ne pas s'y conformer
                devient un risque juridique réel.
              </p>
            </article>

            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: "var(--accent-muted)" }}>
                💶
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                Amendes & mises en demeure
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                En cas de non-conformité, des{" "}
                <span className="font-semibold">
                  amendes de plusieurs dizaines de milliers d'euros
                </span>{" "}
                par service numérique, renouvelables, sont prévues côté
                français, et des pénalités administratives existent aussi en
                Belgique. Mieux vaut agir avant un contrôle ou une plainte.
              </p>
            </article>

            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: "var(--accent-muted)" }}>
                🤝
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                Accessibilité = business & image
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Un site accessible est plus simple à utiliser pour tout le
                monde, mieux référencé, plus crédible et plus inclusif. C'est
                un vrai levier de confiance, pas juste une contrainte légale.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION : BELGIQUE & FRANCE, CE QUI CHANGE EN 2025 */}
      <section>
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
              Belgique & France&nbsp;: ce que dit la loi depuis juin 2025
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
              Sans entrer dans tous les textes juridiques, voici l'essentiel
              pour un site "classique" (vitrine, e-commerce, services en
              ligne).
            </p>
          </div>

          <div className="space-y-5 text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            <div className="rounded-2xl p-4" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="font-semibold" style={{ color: "var(--fg-base)" }}>
                1. L'EAA (European Accessibility Act) est en vigueur.
              </p>
              <p className="mt-2">
                Depuis le 28 juin 2025, la directive européenne impose des
                exigences d'accessibilité à de nombreux produits et services
                numériques : sites web, apps mobiles, services de commerce
                électronique, services bancaires, transports, etc.
              </p>
            </div>

            <div className="rounded-2xl p-4" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="font-semibold" style={{ color: "var(--fg-base)" }}>
                2. En Belgique, l'accessibilité s'étend au-delà du secteur
                public.
              </p>
              <p className="mt-2">
                Les autorités belges ont transposé l'EAA&nbsp;: au-delà des
                sites publics déjà concernés, de nombreux acteurs privés
                (e-commerce, services en ligne…) doivent rendre leurs interfaces
                accessibles et publier une{" "}
                <span className="font-semibold">
                  déclaration d'accessibilité
                </span>
                . En cas de non-respect, des contrôles, mises en demeure et
                sanctions administratives sont possibles.
              </p>
            </div>

            <div className="rounded-2xl p-4" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="font-semibold" style={{ color: "var(--fg-base)" }}>
                3. En France, le RGAA & l'EAA renforcent les sanctions.
              </p>
              <p className="mt-2">
                Les sites publics et de nombreuses entreprises doivent respecter
                le RGAA (référentiel français basé sur les WCAG). Les textes
                récents prévoient des{" "}
                <span className="font-semibold">
                  amendes pouvant aller jusqu'à 50&nbsp;000&nbsp;€
                </span>{" "}
                par service numérique en cas de non-conformité répétée, avec
                reconduction possible tant que la mise en conformité n'est pas
                faite.
              </p>
            </div>

            <div className="rounded-2xl p-4" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="font-semibold" style={{ color: "var(--fg-base)" }}>
                4. Les sites e-commerce sont particulièrement exposés.
              </p>
              <p className="mt-2">
                Les boutiques en ligne dépassant la micro-entreprise sont
                clairement dans le périmètre : l'ensemble du parcours (recherche
                produits, fiche produit, panier, paiement, suivi de commande…)
                doit être accessible. Sinon, le site peut être considéré comme
                non conforme.
              </p>
            </div>
          </div>

          <p className="mt-5 text-xs sm:text-sm" style={{ color: "var(--fg-subtle)" }}>
            Important&nbsp;: cette page ne remplace pas un avis juridique, mais
            elle vous donne le niveau d'urgence et l'ampleur des enjeux.
          </p>
        </div>
      </section>

      {/* CE QUE JE PROPOSE */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
              Concrètement, comment je peux vous aider&nbsp;?
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
              L'idée n'est pas de viser la perfection en un jour, mais de{" "}
              <span className="font-semibold">
                réduire rapidement vos risques
              </span>{" "}
              et d'améliorer l'expérience pour vos vrais utilisateurs.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 text-sm" style={{ color: "var(--fg-muted)" }}>
            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <h3 className="text-sm sm:text-base font-semibold" style={{ color: "var(--fg-base)" }}>
                Audit flash (état des lieux)
              </h3>
              <p className="mt-2">
                Analyse de vos pages clés (home, services, formulaire, tunnel
                de commande…), avec un rapport simple : problèmes critiques,
                impacts et priorités.
              </p>
            </article>

            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <h3 className="text-sm sm:text-base font-semibold" style={{ color: "var(--fg-base)" }}>
                Plan de mise en conformité
              </h3>
              <p className="mt-2">
                Feuille de route en plusieurs étapes : corrections rapides,
                améliorations UX, mises à jour de code (structure, contrastes,
                navigation clavier, alternatives textes…).
              </p>
            </article>

            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <h3 className="text-sm sm:text-base font-semibold" style={{ color: "var(--fg-base)" }}>
                Déclaration & suivi
              </h3>
              <p className="mt-2">
                Aide à rédiger votre page "Accessibilité", documenter ce qui est
                déjà fait, ce qui reste à améliorer et comment suivre les
                progrès dans le temps.
              </p>
            </article>
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
            { href: "/services/site-web-react-next", label: "Site React & Next.js" },
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
      <section className="pb-16 pt-8 sm:pb-20 sm:pt-10">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Vous voulez éviter les mauvaises surprises&nbsp;?
          </h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Dites-moi quel type de site vous avez (vitrine, e-commerce, service
            en ligne…), votre pays principal (Belgique, France…) et votre
            situation actuelle. On voit ensemble par où commencer, sans panique
            mais sans attendre.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Me parler de l'accessibilité de votre site
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
            name: "Accessibilité web WCAG & conformité",
            description:
              "Mise en conformité accessibilité WCAG : corrections UI, contrastes, navigation clavier, ARIA, formulaires.",
            provider: {
              "@type": "ProfessionalService",
              name: "Stéphane Gamot",
              url: "https://www.stephanegamot.com",
            },
            areaServed: { "@type": "Country", name: "Belgium" },
            url: "https://www.stephanegamot.com/services/accessibilite",
          }),
        }}
      />
    </>
  );
}
