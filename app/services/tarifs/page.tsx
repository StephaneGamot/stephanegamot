import type { Metadata } from "next";
import Link from "next/link";
import { ServicesSection } from "@/components/services/ServicesSection";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

/* ─────────────────────────────────────────────
   METADATA — Mot-clé principal : "prix site web"
   Secondaires : tarif création site internet,
   combien coûte un site web, devis site web,
   prix développeur web freelance
   ───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Tarifs création de site web — Stéphane Gamot",
  description:
    "Tarifs clairs pour la création de votre site web : site vitrine dès 1 500 €, site professionnel dès 3 500 €, e-commerce dès 5 000 €. Devis gratuit sous 48h.",
  metadataBase: new URL("https://www.stephanegamot.com"),
  alternates: {
    canonical: "https://www.stephanegamot.com/services/tarifs",
    languages: {
      "fr-BE": "https://www.stephanegamot.com/services/tarifs",
      "fr-FR": "https://www.stephanegamot.com/services/tarifs",
      "x-default": "https://www.stephanegamot.com/services/tarifs",
    },
  },
  keywords: [
    "prix site web",
    "tarif création site internet",
    "combien coûte un site web",
    "devis site web Belgique",
    "prix développeur web freelance",
    "tarif site vitrine",
    "prix site e-commerce",
    "budget site internet 2026",
  ],
  robots: { index: true, follow: true },
  authors: [{ name: "Stéphane Gamot", url: "https://www.stephanegamot.com/me" }],
  openGraph: {
    title: "Tarifs création de site web — Stéphane Gamot",
    description:
      "Des formules claires pour chaque besoin : vitrine, professionnel ou e-commerce. Devis gratuit et sans engagement.",
    url: "https://www.stephanegamot.com/services/tarifs",
    siteName: "Stéphane Gamot",
    type: "website",
    locale: "fr_BE",
    images: [
      {
        url: "https://www.stephanegamot.com/Images/og/office-workstation.webp",
        width: 1200,
        height: 630,
        alt: "Tarifs création de site web — Stéphane Gamot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs création de site web — Stéphane Gamot",
    description:
      "Site vitrine, site pro ou e-commerce : des tarifs transparents, un devis gratuit sous 48h.",
    images: ["https://www.stephanegamot.com/Images/og/office-workstation.webp"],
  },
};

const plans = [
  {
    name: "Vitrine",
    price: "1 500",
    suffix: "€",
    description:
      "Pour les indépendants et professions libérales qui veulent une présence en ligne professionnelle et crédible.",
    features: [
      "1 à 5 pages sur mesure",
      "Design responsive (mobile-first)",
      "Optimisation SEO de base",
      "Formulaire de contact",
      "Hébergement HTTPS inclus",
      "Fiche Google Business Profile",
      "Livraison en 2 à 3 semaines",
    ],
    cta: "Demander un devis vitrine",
    href: "/contact",
    highlight: false,
  },
  {
    name: "Professionnel",
    price: "3 500",
    suffix: "€",
    description:
      "Pour les entreprises qui veulent un site performant, rapide et pensé pour convertir les visiteurs en clients.",
    features: [
      "5 à 15 pages optimisées",
      "Next.js ou WordPress premium",
      "SEO technique avancé",
      "Core Web Vitals optimisés",
      "Maillage interne stratégique",
      "Données structurées (JSON-LD)",
      "Analytics & suivi conversions",
      "Blog intégré (optionnel)",
      "Livraison en 4 à 6 semaines",
    ],
    cta: "Demander un devis pro",
    href: "/contact",
    highlight: true,
  },
  {
    name: "E-commerce",
    price: "5 000",
    suffix: "€",
    description:
      "Pour les entrepreneurs qui veulent vendre en ligne avec une boutique rapide, sécurisée et optimisée pour la conversion.",
    features: [
      "Catalogue produits illimité",
      "Paiement Stripe intégré",
      "Tunnel de vente optimisé",
      "SEO catégories & fiches produits",
      "Gestion stock & commandes",
      "Emails transactionnels",
      "Dashboard analytics e-commerce",
      "Performance mobile premium",
      "Livraison en 6 à 10 semaines",
    ],
    cta: "Demander un devis e-commerce",
    href: "/contact",
    highlight: false,
  },
];

export default function TarifsPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Services", href: "/#services" },
          { label: "Tarifs" },
        ]}
      />

      {/* ════════════════════════════════════════
          HERO
          ════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-32 -top-40 h-72 w-72 rounded-full opacity-[0.04]"
            style={{ background: "var(--accent)", filter: "blur(60px)" }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="section-label">Tarifs</p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Des tarifs clairs,{" "}
            <span style={{ color: "var(--accent)" }}>
              sans surprise.
            </span>
          </h1>

          <p
            className="mt-6 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            Chaque projet est unique, mais je crois à la transparence.
            Voici mes fourchettes de prix pour vous donner une idée réaliste
            du budget à prévoir. Le devis final est toujours adapté à votre
            besoin précis — et il est{" "}
            <strong style={{ color: "var(--fg-base)" }}>gratuit</strong>.
          </p>

          <p
            className="mt-3 max-w-2xl text-sm"
            style={{ color: "var(--fg-subtle)", lineHeight: "1.7" }}
          >
            Les prix indiqués sont des points de départ. Ils varient en
            fonction du nombre de pages, des fonctionnalités, du niveau de
            personnalisation et de la stratégie SEO souhaitée.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          GRILLE TARIFS
          ════════════════════════════════════════ */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className="relative flex flex-col rounded-2xl p-6 sm:p-7"
                style={{
                  border: plan.highlight
                    ? "2px solid var(--accent)"
                    : "1px solid var(--border)",
                  background: "var(--surface-1)",
                }}
              >
                {plan.highlight && (
                  <span
                    className="absolute -top-3 left-6 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: "var(--accent)",
                      color: "var(--bg-base)",
                    }}
                  >
                    Le plus demandé
                  </span>
                )}

                <h2 className="text-lg font-semibold" style={{ color: "var(--fg-base)" }}>
                  {plan.name}
                </h2>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-xs" style={{ color: "var(--fg-subtle)" }}>
                    à partir de
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-4xl font-semibold tracking-tight"
                    style={{ color: "var(--accent)" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-lg" style={{ color: "var(--fg-subtle)" }}>
                    {plan.suffix}
                  </span>
                </div>

                <p
                  className="mt-4 text-sm flex-grow"
                  style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
                >
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3" role="list">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs"
                        style={{
                          background: "var(--accent-muted)",
                          color: "var(--accent)",
                        }}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className="btn mt-8 block text-center"
                  style={{
                    background: plan.highlight ? "var(--accent)" : "transparent",
                    color: plan.highlight ? "var(--bg-base)" : "var(--accent)",
                    border: plan.highlight
                      ? "1px solid var(--accent)"
                      : "1px solid var(--border)",
                    borderRadius: "0.5rem",
                    padding: "0.75rem 1.5rem",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                  }}
                >
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CE QUI EST INCLUS DANS CHAQUE PROJET
          ════════════════════════════════════════ */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Ce qui est inclus dans chaque projet
          </h2>
          <p
            className="mt-3 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            Quel que soit le budget, certaines fondations ne sont jamais
            négociées. Chaque site que je livre respecte ces standards.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Développement propre et maintenable",
                text: "Code structuré, commenté et versionné. Pas de dépendances inutiles, pas de plugins douteux, pas de dette technique cachée.",
              },
              {
                title: "Mobile-first et responsive",
                text: "Chaque page est conçue pour le mobile d'abord, puis adaptée aux écrans plus grands. Google indexe la version mobile en priorité.",
              },
              {
                title: "HTTPS et sécurité",
                text: "Certificat SSL, en-têtes de sécurité, protection des formulaires. Votre site et vos visiteurs sont protégés dès le premier jour.",
              },
              {
                title: "Accompagnement humain",
                text: "Un seul interlocuteur du début à la fin. Pas de sous-traitance, pas de call center, pas de ticket support. Vous parlez directement avec moi.",
              },
              {
                title: "Formation à la prise en main",
                text: "Vous recevez un guide personnalisé et un appel de formation pour être autonome sur votre site. Pas de dépendance technique.",
              },
              {
                title: "30 jours de support inclus",
                text: "Après la mise en ligne, je reste disponible pendant 30 jours pour les ajustements, corrections et questions. Sans surcoût.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl p-6"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--surface-1)",
                }}
              >
                <h3 className="text-sm sm:text-base font-semibold">
                  {item.title}
                </h3>
                <p
                  className="mt-3 text-sm"
                  style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FAQ TARIFS
          ════════════════════════════════════════ */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Questions fréquentes sur les tarifs
          </h2>

          <div className="mt-8 space-y-6">
            {[
              {
                q: "Pourquoi autant d'écart de prix entre les prestataires ?",
                a: "Un site à 500 € utilise un template générique avec peu d'optimisation. Un site à 5 000 € est développé sur mesure avec une stratégie SEO, des performances optimisées et un accompagnement complet. La différence se mesure en résultats : trafic, leads et chiffre d'affaires généré.",
              },
              {
                q: "Le devis est-il vraiment gratuit et sans engagement ?",
                a: "Oui, totalement. Je vous envoie un devis détaillé sous 48h après notre échange. Il précise le périmètre, les livrables, le calendrier et le prix ferme. Vous êtes libre d'accepter ou non, sans aucune obligation.",
              },
              {
                q: "Y a-t-il des frais cachés ou récurrents ?",
                a: "Non. Le prix annoncé couvre la création complète du site. Les seuls coûts récurrents sont l'hébergement (environ 10–20 €/mois) et le nom de domaine (environ 15 €/an), que vous pouvez gérer vous-même ou me confier.",
              },
              {
                q: "Proposez-vous un paiement en plusieurs fois ?",
                a: "Oui. Pour les projets supérieurs à 2 500 €, je propose un paiement en 2 ou 3 échéances : un acompte au démarrage, un paiement intermédiaire à la maquette validée, et le solde à la mise en ligne.",
              },
              {
                q: "Combien de temps faut-il pour créer un site ?",
                a: "Un site vitrine prend 2 à 3 semaines, un site professionnel 4 à 6 semaines, et un e-commerce 6 à 10 semaines. Ces délais incluent les échanges, la création de contenu et les révisions.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl p-5"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--surface-1)",
                }}
              >
                <summary className="cursor-pointer text-sm sm:text-base font-semibold list-none flex items-center justify-between">
                  {faq.q}
                  <span
                    className="ml-3 text-lg transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                    style={{ color: "var(--accent)" }}
                  >
                    +
                  </span>
                </summary>
                <p
                  className="mt-3 text-sm"
                  style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Maillage interne */}
      <aside className="mx-auto max-w-5xl px-4 pb-8 sm:px-6 lg:px-8">
        <p
          className="text-xs uppercase tracking-[0.12em] mb-4"
          style={{ color: "var(--fg-subtle)" }}
        >
          Services complémentaires
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/services/site-vitrine", label: "Site vitrine" },
            { href: "/services/site-web-react-next", label: "Site Next.js" },
            { href: "/services/site-internet-wordpress", label: "Site WordPress" },
            { href: "/services/e-commerce", label: "E-commerce & Stripe" },
            { href: "/services/seo", label: "Audit SEO" },
            { href: "/services/accessibilite", label: "Accessibilité WCAG" },
            { href: "/portfolio", label: "Réalisations" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm px-4 py-2 transition-colors duration-300"
              style={{
                border: "1px solid var(--border)",
                borderRadius: "0.5rem",
                color: "var(--fg-muted)",
              }}
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
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Prêt à investir dans un site qui travaille pour vous ?
          </h2>
          <p
            className="mt-3 max-w-xl mx-auto text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            Décrivez votre projet et vos objectifs. Je vous envoie un devis
            clair et détaillé sous 48h, avec les priorités à financer en
            premier selon votre budget.
          </p>
          <p
            className="mt-2 text-sm font-medium"
            style={{ color: "var(--accent)" }}
          >
            J&apos;accepte 3 nouveaux projets par mois pour garantir un
            accompagnement de qualité.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Recevoir mon devis sous 48h
            </Link>
          </div>
        </div>
        <ServicesSection />
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://www.stephanegamot.com/services/tarifs#pricing",
                name: "Création de site web — Tarifs",
                description:
                  "Tarifs transparents pour la création de sites web professionnels : site vitrine, site professionnel Next.js/WordPress et e-commerce.",
                provider: {
                  "@type": "ProfessionalService",
                  "@id": "https://www.stephanegamot.com/#business",
                  name: "Stéphane Gamot",
                  url: "https://www.stephanegamot.com",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Formules de création de site web",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      name: "Site vitrine",
                      description: "Site vitrine professionnel de 1 à 5 pages",
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        price: "1500",
                        priceCurrency: "EUR",
                        minPrice: "1500",
                      },
                    },
                    {
                      "@type": "Offer",
                      name: "Site professionnel",
                      description:
                        "Site performant Next.js ou WordPress premium, 5 à 15 pages, SEO avancé",
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        price: "3500",
                        priceCurrency: "EUR",
                        minPrice: "3500",
                      },
                    },
                    {
                      "@type": "Offer",
                      name: "E-commerce",
                      description:
                        "Boutique en ligne avec Stripe, catalogue produits, tunnel de vente optimisé",
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        price: "5000",
                        priceCurrency: "EUR",
                        minPrice: "5000",
                      },
                    },
                  ],
                },
                url: "https://www.stephanegamot.com/services/tarifs",
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.stephanegamot.com/services/tarifs#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Pourquoi autant d'écart de prix entre les prestataires ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Un site à 500 € utilise un template générique. Un site à 5 000 € est développé sur mesure avec une stratégie SEO, des performances optimisées et un accompagnement complet.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Le devis est-il vraiment gratuit et sans engagement ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Oui. Devis détaillé sous 48h après l'échange. Périmètre, livrables, calendrier et prix ferme. Sans aucune obligation.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Y a-t-il des frais cachés ou récurrents ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Non. Les seuls coûts récurrents sont l'hébergement (10–20 €/mois) et le nom de domaine (15 €/an).",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Proposez-vous un paiement en plusieurs fois ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Oui. Pour les projets supérieurs à 2 500 €, paiement en 2 ou 3 échéances : acompte, maquette validée, mise en ligne.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Combien de temps faut-il pour créer un site ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Site vitrine : 2–3 semaines. Site professionnel : 4–6 semaines. E-commerce : 6–10 semaines. Délais incluant échanges, contenu et révisions.",
                    },
                  },
                ],
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Accueil",
                    item: "https://www.stephanegamot.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: "https://www.stephanegamot.com/#services",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Tarifs",
                    item: "https://www.stephanegamot.com/services/tarifs",
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
