import type { Metadata } from "next";
import Link from "next/link";
import { ServicesSection } from "@/components/services/ServicesSection";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

export const metadata: Metadata = {
  title: "Création de site vitrine professionnel — Stéphane Gamot",
  description:
    "Site vitrine sur mesure : design élégant, textes clairs, SEO local, vitesse et structure pensée pour rassurer et convertir. Demandez un devis.",
  metadataBase: new URL("https://www.stephanegamot.com"),
  alternates: { canonical: "https://www.stephanegamot.com/services/site-vitrine" },
  keywords: [
    "site vitrine",
    "création site vitrine Belgique",
    "site vitrine premium",
    "SEO local",
    "site professionnel",
    "conversion",
  ],
  robots: { index: true, follow: true },
  authors: [{ name: "Stéphane Gamot", url: "https://www.stephanegamot.com/me" }],
  openGraph: {
    title: "Site vitrine premium – Stéphane Gamot",
    description:
      "Un site vitrine moderne, rapide et rassurant : clair, bien structuré, optimisé SEO et pensé pour convertir.",
    url: "/services/site-vitrine",
    siteName: "Stéphane Gamot",
    type: "website",
    locale: "fr_BE",
    images: [
      {
        url: "/Images/og/office-workstation.webp",
        width: 1200,
        height: 630,
        alt: "Site vitrine professionnel créé par Stéphane Gamot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Site vitrine premium – Stéphane Gamot",
    description:
      "Design élégant, SEO local, vitesse et structure claire : un site vitrine fait pour générer des contacts.",
    images: ["/Images/og/office-workstation.webp"],
  },
};


export default function SiteVitrineServicePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Services", href: "/#services" }, { label: "Site vitrine" }]} />
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
            Site vitrine{" "}
            <span style={{ color: "var(--accent)" }}>
              clair & professionnel
            </span>
            .
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Un site vitrine sur mesure pour présenter votre activité, vos
            services et votre façon de travailler, avec un design élégant et
            une structure pensée pour rassurer et donner envie de vous
            contacter.
          </p>
          <p className="mt-2 max-w-xl text-sm sm:text-base" style={{ color: "var(--fg-subtle)" }}>
            L'idée :{" "}
            <span className="font-semibold" style={{ color: "var(--fg-base)" }}>
              une carte de visite en ligne
            </span>{" "}
            beaucoup plus crédible qu'une simple page Facebook ou un vieux
            modèle générique.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Parler de mon site vitrine
            </Link>
            <span className="text-xs sm:text-sm" style={{ color: "var(--fg-subtle)" }}>
              Vous m'expliquez votre activité, je vous dis ce qui est adapté.
            </span>
          </div>
        </div>
      </section>

      {/* 3 BLOCS VISUELS – STRUCTURE / IMAGE / CONTACT */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: "var(--accent-muted)" }}>
                🧱
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                Structure claire & lisible
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Accueil, services, à propos, témoignages, contact : un parcours
                simple qui permet de comprendre rapidement ce que vous faites
                et pour qui.
              </p>
            </article>

            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: "var(--accent-muted)" }}>
                🎨
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                Image soignée & cohérente
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Palette de couleurs, typographies, photos : un univers qui
                reflète votre personnalité et la qualité de votre travail, sans
                tape-à-l'œil.
              </p>
            </article>

            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: "var(--accent-muted)" }}>
                ✉️
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                Contact facile & rassurant
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Formulaire clair, boutons de contact visibles, infos
                pratiques : on simplifie au maximum la prise de contact ou la
                demande de rendez-vous.
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
              Vous avez besoin d'un site sérieux, mais sans fonctionnalités
              compliquées : juste présenter clairement qui vous êtes et comment
              vous aider.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl p-4" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="text-sm sm:text-base font-semibold">
                Indépendants, thérapeutes, consultants, artisans…
              </p>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Vous voulez une présence en ligne pro, à votre image, qui
                remplace ou complète vos cartes de visite et vos réseaux
                sociaux.
              </p>
            </div>
            <div className="rounded-xl p-4" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="text-sm sm:text-base font-semibold">
                Petites entreprises & projets en lancement
              </p>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Vous démarrez (ou vous vous relancez) et vous avez besoin d'un
                site simple mais crédible pour expliquer ce que vous faites et
                commencer à être trouvé.
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
            { href: "/services/site-internet-wordpress", label: "Site WordPress" },
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

      {/* FOCUS CONTENU / TEXTES */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
            <p className="section-label">
              Textes & contenus
            </p>
            <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
              Je peux vous aider à formuler vos textes : expliquer simplement
              votre activité, mettre en avant vos forces, vos différences et
              ce que vos clients gagnent à travailler avec vous.
            </p>

            <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--fg-subtle)" }}>
              On évite le jargon vide, on garde un ton humain et clair, adapté
              à votre public (local, francophone, bilingue…).
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-16 pt-8 sm:pb-20 sm:pt-10">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Vous avez besoin d'un site vitrine&nbsp;?
          </h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Dites-moi qui vous êtes, ce que vous proposez et ce que vous
            attendez de votre site. Je vous propose une approche simple, claire
            et adaptée à votre budget.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Me parler de mon site vitrine
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
            name: "Création de site vitrine professionnel",
            description:
              "Site vitrine sur mesure : design élégant, textes clairs, SEO local, vitesse et structure pensée pour rassurer et convertir.",
            provider: {
              "@type": "ProfessionalService",
              name: "Stéphane Gamot",
              url: "https://www.stephanegamot.com",
            },
            areaServed: { "@type": "Country", name: "Belgium" },
            url: "https://www.stephanegamot.com/services/site-vitrine",
          }),
        }}
      />
    </>
  );
}
