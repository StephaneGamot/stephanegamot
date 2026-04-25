import type { Metadata } from "next";
import Link from "next/link";
import { ServicesSection } from "@/components/services/ServicesSection";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

/* ─────────────────────────────────────────────
   METADATA — Mot-clé principal : "création site e-commerce"
   Secondaires : boutique en ligne, Stripe, paiement en ligne,
   tunnel d'achat, taux de conversion, e-commerce Next.js, WooCommerce
   ───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Création site e-commerce sur mesure — Stéphane Gamot",
  description:
    "Création de site e-commerce performant : tunnel d'achat optimisé, paiement Stripe, mobile-first et SEO. Boostez vos ventes en ligne. Devis gratuit.",
  metadataBase: new URL("https://www.stephanegamot.com"),
  alternates: {
    canonical: "https://www.stephanegamot.com/services/e-commerce",
  },
  keywords: [
    "création site e-commerce",
    "boutique en ligne",
    "Stripe",
    "paiement en ligne",
    "tunnel d'achat",
    "taux de conversion",
    "e-commerce Next.js",
    "WooCommerce",
    "SEO e-commerce",
    "Google Shopping",
  ],
  robots: { index: true, follow: true },
  authors: [
    { name: "Stéphane Gamot", url: "https://www.stephanegamot.com/me" },
  ],
  openGraph: {
    title: "Création site e-commerce sur mesure – Stéphane Gamot",
    description:
      "Boutique en ligne performante : tunnel d'achat fluide, Stripe, mobile-first et SEO e-commerce pour maximiser votre taux de conversion.",
    url: "https://www.stephanegamot.com/services/e-commerce",
    siteName: "Stéphane Gamot",
    type: "website",
    locale: "fr_BE",
    images: [
      {
        url: "/Images/og/office-workstation.webp",
        width: 1200,
        height: 630,
        alt: "Création de site e-commerce performant par Stéphane Gamot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Création site e-commerce sur mesure – Stéphane Gamot",
    description:
      "Boutique en ligne Stripe, tunnel d'achat optimisé, mobile-first et SEO : un e-commerce pensé pour convertir. Devis gratuit.",
    images: ["/Images/og/office-workstation.webp"],
  },
};

export default function EcommerceServicePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Services", href: "/#services" }, { label: "E-commerce" }]} />

      {/* ════════════════════════════════════════
          HERO — H1 keyword-left + Intro APP
          ════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-32 -top-40 h-72 w-72 rounded-full opacity-[0.04]"
            style={{ background: "var(--accent)", filter: "blur(60px)" }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="section-label">Services</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Création site{" "}
            <span style={{ color: "var(--accent)" }}>e-commerce</span> qui
            convertit vos visiteurs en clients
          </h1>

          {/* APP : Accroche */}
          <p
            className="mt-4 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            La <strong>création site e-commerce</strong> ne se limite pas a
            afficher des produits en ligne. Chaque jour, des boutiques en ligne
            perdent des ventes a cause d&apos;un tunnel d&apos;achat confus, d&apos;un
            paiement en ligne peu rassurant ou d&apos;un checkout qui rame sur
            mobile.
          </p>

          {/* APP : Probleme */}
          <p
            className="mt-3 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-subtle)", lineHeight: "1.8" }}
          >
            Resultat : un taux d&apos;abandon de panier qui explose et un taux de
            conversion qui stagne en dessous de 2 %. Vous investissez dans le
            trafic, mais le site laisse filer le chiffre d&apos;affaires.
          </p>

          {/* APP : Promesse */}
          <p
            className="mt-3 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            Je concois des{" "}
            <span className="font-semibold" style={{ color: "var(--accent)" }}>
              boutiques en ligne sur mesure
            </span>{" "}
            avec un parcours d&apos;achat fluide, un paiement securise via{" "}
            <strong>Stripe</strong> et une architecture pensee pour le{" "}
            <Link href="/services/seo" style={{ color: "var(--accent)" }}>
              referencement naturel
            </Link>
            . L&apos;objectif : transformer chaque visite en commande.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Lancer ma boutique en ligne
            </Link>
            <span
              className="text-xs sm:text-sm"
              style={{ color: "var(--fg-subtle)" }}
            >
              Devis gratuit sous 48 h, sans engagement.
            </span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          H2 — Les piliers d'un e-commerce qui convertit
          ════════════════════════════════════════ */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Les piliers d&apos;un e-commerce qui convertit
          </h2>
          <p
            className="mt-3 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            Un bon taux de conversion repose sur quatre fondations. Chacune
            est integree des la conception, pas ajoutee apres coup.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {/* H3 — Tunnel d'achat */}
            <article
              className="rounded-2xl p-6"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                Tunnel d&apos;achat sans friction
              </h3>
              <p
                className="mt-3 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
              >
                Le tunnel d&apos;achat est le nerf de la guerre : chaque etape
                superflue fait chuter le taux de conversion. Je concois un
                checkout en 2-3 etapes maximum, avec panier persistant, jauge
                de progression et possibilite de commander sans compte. Les
                strategies de cross-selling et d&apos;upselling sont integrees
                sans alourdir le parcours.
              </p>
            </article>

            {/* H3 — Fiches produits */}
            <article
              className="rounded-2xl p-6"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                Fiches produits optimisees pour le SEO
              </h3>
              <p
                className="mt-3 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
              >
                Chaque fiche produit est structuree avec des donnees JSON-LD
                (rich snippets Product) pour apparaitre dans Google Shopping
                et les resultats enrichis. Photos compressees en WebP,
                descriptions uniques, avis clients et variantes : tout est
                pense pour le SEO e-commerce et la conversion.
              </p>
            </article>

            {/* H3 — Paiement Stripe */}
            <article
              className="rounded-2xl p-6"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                Paiement Stripe securise et flexible
              </h3>
              <p
                className="mt-3 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
              >
                Stripe est la reference du paiement en ligne : carte bancaire,
                Bancontact, Apple Pay, Google Pay, iDEAL. L&apos;integration
                couvre la gestion des abonnements, les webhooks de confirmation,
                les emails transactionnels et le suivi des commandes. Alternative
                possible avec Snipcart ou Shopify selon le projet.
              </p>
            </article>

            {/* H3 — Mobile-first */}
            <article
              className="rounded-2xl p-6"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                Design mobile-first et performant
              </h3>
              <p
                className="mt-3 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
              >
                Plus de 70 % des achats en ligne se font sur smartphone. Le
                design est pense mobile-first : boutons tactiles 44px, scroll
                naturel, images lazy-loaded et Core Web Vitals dans le vert.
                Un site rapide et{" "}
                <Link
                  href="/services/accessibilite"
                  style={{ color: "var(--accent)" }}
                >
                  accessible
                </Link>{" "}
                rassure et convertit mieux.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          H2 — Next.js ou WooCommerce
          ════════════════════════════════════════ */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Next.js ou WooCommerce — quelle stack pour votre boutique
          </h2>
          <p
            className="mt-3 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            Il n&apos;y a pas de reponse universelle. Le choix depend de votre
            catalogue, de votre besoin d&apos;autonomie et de vos ambitions
            techniques. Voici un comparatif honnete.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div
              className="rounded-xl p-5"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <p className="text-sm sm:text-base font-semibold">
                E-commerce Next.js + Stripe
              </p>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.65" }}
              >
                Ideal pour les projets sur mesure : checkout personnalise,
                performances Lighthouse 100, pas de plugin lourd. Le{" "}
                <Link
                  href="/services/site-web-react-next"
                  style={{ color: "var(--accent)" }}
                >
                  developpement Next.js
                </Link>{" "}
                offre un controle total sur le tunnel d&apos;achat, le SEO
                e-commerce et l&apos;experience utilisateur. Parfait pour les
                catalogues de moins de 500 references ou les modeles
                d&apos;abonnement.
              </p>
            </div>

            <div
              className="rounded-xl p-5"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <p className="text-sm sm:text-base font-semibold">
                WooCommerce sur WordPress
              </p>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.65" }}
              >
                La solution la plus repandue : gestion autonome du catalogue,
                ecosystem de plugins massif, cout d&apos;entree plus bas. Un{" "}
                <Link
                  href="/services/site-internet-wordpress"
                  style={{ color: "var(--accent)" }}
                >
                  site WordPress bien optimise
                </Link>{" "}
                peut supporter des milliers de produits. Attention cependant
                a la performance et a la securite si les extensions s&apos;empilent.
              </p>
            </div>
          </div>

          <p
            className="mt-6 text-sm"
            style={{ color: "var(--fg-subtle)", lineHeight: "1.7" }}
          >
            Dans les deux cas, l&apos;integration Stripe reste possible. Pour
            les projets headless, on peut aussi coupler un back-office Shopify
            avec un front Next.js pour le meilleur des deux mondes.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          H2 — Processus de creation e-commerce
          ════════════════════════════════════════ */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Mon processus de creation e-commerce en 5 etapes
          </h2>
          <p
            className="mt-3 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            De la strategie produit au premier paiement en ligne, chaque
            etape est validee avec vous avant de passer a la suivante.
          </p>

          <div className="mt-10 space-y-8">
            {/* Etape 1 */}
            <div className="flex gap-5">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                style={{
                  background: "var(--accent-muted)",
                  color: "var(--accent)",
                }}
              >
                1
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold">
                  Audit et strategie e-commerce
                </h3>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
                >
                  On analyse votre catalogue, vos concurrents, vos mots-cles
                  cibles et votre clientele. C&apos;est ici qu&apos;on choisit la
                  stack (Next.js, WooCommerce, Shopify headless), qu&apos;on
                  definit l&apos;arborescence et le{" "}
                  <Link href="/services/seo" style={{ color: "var(--accent)" }}>
                    plan SEO
                  </Link>{" "}
                  de la boutique.
                </p>
              </div>
            </div>

            {/* Etape 2 */}
            <div className="flex gap-5">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                style={{
                  background: "var(--accent-muted)",
                  color: "var(--accent)",
                }}
              >
                2
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold">
                  UX design et prototypage du tunnel d&apos;achat
                </h3>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
                >
                  Maquettes Figma mobile-first : page d&apos;accueil, listing
                  produits, fiche produit, panier, checkout et page de
                  confirmation. Chaque ecran respecte les normes d&apos;
                  <Link
                    href="/services/accessibilite"
                    style={{ color: "var(--accent)" }}
                  >
                    accessibilite WCAG
                  </Link>{" "}
                  et integre les leviers de conversion (urgence, preuve
                  sociale, cross-selling).
                </p>
              </div>
            </div>

            {/* Etape 3 */}
            <div className="flex gap-5">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                style={{
                  background: "var(--accent-muted)",
                  color: "var(--accent)",
                }}
              >
                3
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold">
                  Developpement et integration Stripe
                </h3>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
                >
                  Composants React types, Server Components, pages produits
                  pre-rendues pour le SEO, integration Stripe Checkout ou
                  Stripe Elements, webhooks de confirmation et emails
                  transactionnels. Le code est propre, documente et
                  deploye sur Vercel ou votre hebergement.
                </p>
              </div>
            </div>

            {/* Etape 4 */}
            <div className="flex gap-5">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                style={{
                  background: "var(--accent-muted)",
                  color: "var(--accent)",
                }}
              >
                4
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold">
                  Tests, lancement et formation
                </h3>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
                >
                  Tests de paiement en mode sandbox, audit Lighthouse, verification
                  cross-browser et mobile. Mise en production avec SSL, redirections
                  et sitemap. Je vous forme a la gestion du catalogue et au suivi
                  des commandes.
                </p>
              </div>
            </div>

            {/* Etape 5 */}
            <div className="flex gap-5">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                style={{
                  background: "var(--accent-muted)",
                  color: "var(--accent)",
                }}
              >
                5
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold">
                  Optimisation continue et croissance
                </h3>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
                >
                  Apres le lancement, on analyse le taux de conversion, le
                  taux d&apos;abandon de panier et les donnees Google Analytics.
                  A/B tests sur le checkout, amelioration des fiches produits
                  et connection a Google Shopping pour elargir votre audience.
                  Consultez mon{" "}
                  <Link href="/blog" style={{ color: "var(--accent)" }}>
                    blog
                  </Link>{" "}
                  pour des conseils concrets sur l&apos;optimisation e-commerce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          H2 — FAQ — People Also Ask
          ════════════════════════════════════════ */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Questions frequentes sur la creation de site e-commerce
          </h2>

          <div className="mt-8 space-y-6">
            <details
              className="group rounded-xl p-5"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <summary className="cursor-pointer text-sm sm:text-base font-semibold list-none flex items-center justify-between">
                Combien coute la creation d&apos;une boutique en ligne ?
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
                Un e-commerce Next.js + Stripe demarre a partir de 3 000 EUR HT
                pour un catalogue simple (moins de 50 produits). Un projet
                WooCommerce peut demarrer a 2 000 EUR HT. Le budget depend du
                nombre de produits, des fonctionnalites (abonnements, multi-devises,
                click & collect) et du niveau de design. Je propose un{" "}
                <Link href="/contact" style={{ color: "var(--accent)" }}>
                  devis detaille gratuit
                </Link>{" "}
                apres un premier echange.
              </p>
            </details>

            <details
              className="group rounded-xl p-5"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <summary className="cursor-pointer text-sm sm:text-base font-semibold list-none flex items-center justify-between">
                Pourquoi choisir Stripe plutot que PayPal pour le paiement en ligne ?
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
                Stripe offre une experience de paiement en ligne plus fluide :
                le client reste sur votre site (pas de redirection), les frais
                sont transparents (1,5 % + 0,25 EUR en Europe) et l&apos;API
                est nettement plus flexible pour gerer abonnements, coupons et
                webhooks. Stripe supporte aussi Bancontact, iDEAL, Apple Pay
                et Google Pay nativement. PayPal reste proposable en complement
                si votre audience le demande.
              </p>
            </details>

            <details
              className="group rounded-xl p-5"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <summary className="cursor-pointer text-sm sm:text-base font-semibold list-none flex items-center justify-between">
                Quel est le delai pour lancer une boutique en ligne ?
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
                Comptez 4 a 8 semaines pour un e-commerce complet (design,
                developpement, integration paiement, tests). Un MVP avec
                catalogue reduit peut etre en ligne en 3 semaines. Le planning
                depend de la rapidite de vos retours et de la complexite du
                catalogue.
              </p>
            </details>

            <details
              className="group rounded-xl p-5"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <summary className="cursor-pointer text-sm sm:text-base font-semibold list-none flex items-center justify-between">
                Comment ameliorer le taux de conversion de mon e-commerce existant ?
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
                On commence par un audit du tunnel d&apos;achat : ou les visiteurs
                abandonnent-ils ? Les leviers les plus rentables sont souvent
                la simplification du checkout, l&apos;ajout de moyens de paiement
                (Bancontact, Apple Pay), l&apos;amelioration de la vitesse de
                chargement et l&apos;optimisation des fiches produits. Un{" "}
                <Link href="/services/site-vitrine" style={{ color: "var(--accent)" }}>
                  site vitrine
                </Link>{" "}
                bien concu en amont aide aussi a preparer le terrain pour la
                vente en ligne.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          Aside — Services complementaires (7 liens)
          ════════════════════════════════════════ */}
      <aside className="mx-auto max-w-5xl px-4 pb-8 sm:px-6 lg:px-8">
        <p
          className="text-xs uppercase tracking-[0.12em] mb-4"
          style={{ color: "var(--fg-subtle)" }}
        >
          Services complementaires
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/services/site-web-react-next", label: "Site Next.js & React" },
            { href: "/services/site-internet-wordpress", label: "Site WordPress" },
            { href: "/services/seo", label: "Audit & SEO e-commerce" },
            { href: "/services/accessibilite", label: "Accessibilite WCAG" },
            { href: "/services/site-vitrine", label: "Site vitrine" },
            { href: "/portfolio", label: "Voir le portfolio" },
            { href: "/me", label: "Mon parcours" },
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

      {/* ════════════════════════════════════════
          CTA FINAL + ServicesSection
          ════════════════════════════════════════ */}
      <section className="pb-16 pt-10 sm:pb-20 sm:pt-12">
        <div className="divider" />
        <div className="mx-auto max-w-3xl px-4 pt-10 text-center sm:px-6 sm:pt-12 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Pret a lancer votre boutique en ligne ?
          </h2>
          <p
            className="mt-3 max-w-xl mx-auto text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            Decrivez-moi vos produits, votre cible et vos objectifs de vente.
            Je vous propose un plan technique, un planning realiste et un devis
            clair. Consultez la{" "}
            <Link href="/faq" style={{ color: "var(--accent)" }}>
              FAQ generale
            </Link>{" "}
            pour les questions pratiques.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Demarrer mon projet e-commerce
            </Link>
          </div>
        </div>
        <ServicesSection />
      </section>

      {/* ════════════════════════════════════════
          JSON-LD — @graph : Service + FAQPage
          ════════════════════════════════════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id":
                  "https://www.stephanegamot.com/services/e-commerce#service",
                name: "Création de site e-commerce sur mesure",
                description:
                  "Boutique en ligne performante : tunnel d'achat optimisé, paiement Stripe sécurisé, mobile-first, SEO e-commerce et rich snippets Product pour maximiser le taux de conversion.",
                provider: {
                  "@type": "ProfessionalService",
                  "@id": "https://www.stephanegamot.com/#business",
                  name: "Stéphane Gamot",
                  url: "https://www.stephanegamot.com",
                },
                serviceType: "E-commerce Development",
                areaServed: [
                  { "@type": "Country", name: "Belgique" },
                  { "@type": "Country", name: "France" },
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Prestations e-commerce",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "E-commerce Next.js + Stripe",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Boutique WooCommerce",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Optimisation taux de conversion e-commerce",
                      },
                    },
                  ],
                },
                url: "https://www.stephanegamot.com/services/e-commerce",
              },
              {
                "@type": "FAQPage",
                "@id":
                  "https://www.stephanegamot.com/services/e-commerce#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Combien coûte la création d'une boutique en ligne ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Un e-commerce Next.js + Stripe démarre à 3 000 € HT pour un catalogue simple. Un projet WooCommerce peut démarrer à 2 000 € HT. Le budget dépend du nombre de produits et des fonctionnalités.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Pourquoi choisir Stripe plutôt que PayPal pour le paiement en ligne ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Stripe offre une expérience plus fluide (pas de redirection), des frais transparents (1,5 % + 0,25 € en Europe) et supporte Bancontact, Apple Pay et Google Pay nativement.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Quel est le délai pour lancer une boutique en ligne ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "4 à 8 semaines pour un e-commerce complet. Un MVP peut être en ligne en 3 semaines selon la complexité du catalogue.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Comment améliorer le taux de conversion de mon e-commerce existant ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Audit du tunnel d'achat, simplification du checkout, ajout de moyens de paiement, amélioration de la vitesse et optimisation des fiches produits.",
                    },
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
