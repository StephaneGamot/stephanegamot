import type { Metadata } from "next";
import Link from "next/link";
import { ServicesSection } from "@/components/services/ServicesSection";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

/* ─────────────────────────────────────────────
   METADATA — Mot-clé principal : "création site Next.js"
   Secondaires : développeur React Belgique, site web performant,
   Server Components, Core Web Vitals, site sur mesure
   ───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Création de site Next.js & React — Stéphane Gamot",
  description:
    "Développeur Next.js freelance en Belgique. Sites vitrines, e-commerce et apps web ultra-rapides, SEO-ready et pensés pour convertir. Devis gratuit.",
  metadataBase: new URL("https://www.stephanegamot.com"),
  alternates: {
    canonical: "https://www.stephanegamot.com/services/site-web-react-next",
  },
  keywords: [
    "création site Next.js",
    "développeur React Belgique",
    "site web performant",
    "React Server Components",
    "Core Web Vitals",
    "site vitrine premium",
    "application web sur mesure",
    "développeur freelance Next.js",
    "site SEO-friendly",
    "Tailwind CSS",
  ],
  robots: { index: true, follow: true },
  authors: [
    { name: "Stéphane Gamot", url: "https://www.stephanegamot.com/me" },
  ],
  openGraph: {
    title: "Création de site Next.js & React – Stéphane Gamot",
    description:
      "Sites web modernes, rapides et évolutifs. React, Next.js, TypeScript et Tailwind CSS pour des performances Lighthouse 100/100.",
    url: "https://www.stephanegamot.com/services/site-web-react-next",
    siteName: "Stéphane Gamot",
    type: "website",
    locale: "fr_BE",
    images: [
      {
        url: "https://www.stephanegamot.com/Images/og/office-workstation.webp",
        width: 1200,
        height: 630,
        alt: "Création de site web Next.js performant par Stéphane Gamot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Création de site Next.js & React – Stéphane Gamot",
    description:
      "Sites vitrines, e-commerce et apps web Next.js. Design premium, SEO technique, Lighthouse 100/100.",
    images: ["https://www.stephanegamot.com/Images/og/office-workstation.webp"],
  },
};

export default function ReactNextServicePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Services", href: "/#services" },
          { label: "Site Next.js & React" },
        ]}
      />

      {/* ════════════════════════════════════════
          HERO — Méthode APP
          Mot-clé "site Next.js" dans les 50 premiers mots
          ════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-32 -top-40 h-72 w-72 rounded-full opacity-[0.04]"
            style={{ background: "var(--accent)", filter: "blur(60px)" }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="section-label">Développement web</p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Création de site{" "}
            <span style={{ color: "var(--accent)" }}>Next.js & React</span>
            {" "}sur mesure.
          </h1>

          <p
            className="mt-6 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            Votre site charge lentement, Google le pénalise, et vos visiteurs partent
            avant même d&apos;avoir lu votre proposition de valeur. Le framework{" "}
            <strong style={{ color: "var(--fg-base)" }}>Next.js</strong> résout
            ces problèmes à la racine : rendu côté serveur (SSR), génération statique
            (SSG), optimisation automatique des images et un score{" "}
            <Link href="/services/seo" style={{ color: "var(--accent)" }}>
              Core Web Vitals
            </Link>{" "}
            excellent dès le premier déploiement.
          </p>
          <p
            className="mt-3 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            Je développe des sites React & Next.js avec TypeScript et Tailwind CSS
            pour des entreprises qui exigent la{" "}
            <strong style={{ color: "var(--fg-base)" }}>performance, le design et le référencement</strong>{" "}
            au même niveau d&apos;excellence. Site vitrine premium, boutique en ligne
            ou application web complète — chaque projet est architecturé pour durer
            et évoluer.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn btn-primary">
              Parler de mon projet Next.js
            </Link>
            <Link
              href="/services/tarifs"
              className="text-sm transition-colors duration-300"
              style={{
                color: "var(--fg-subtle)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              Voir les tarifs →
            </Link>
            <Link
              href="/portfolio"
              className="text-sm transition-colors duration-300"
              style={{
                color: "var(--fg-subtle)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              Réalisations →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          H2 — Pourquoi Next.js est le meilleur choix
          ════════════════════════════════════════ */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Pourquoi Next.js surpasse les solutions traditionnelles
          </h2>
          <p
            className="mt-3 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            Next.js, créé par Vercel et utilisé par Netflix, TikTok, Notion et
            Hulu, est le framework React de référence pour le web moderne.
            Contrairement à un{" "}
            <Link href="/services/site-internet-wordpress" style={{ color: "var(--accent)" }}>
              site WordPress classique
            </Link>{" "}
            qui dépend de plugins et d&apos;un serveur PHP, Next.js génère
            des pages HTML pré-rendues, prêtes à être servies en millisecondes
            par un CDN mondial.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article
              className="rounded-2xl p-6"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                React Server Components (RSC)
              </h3>
              <p
                className="mt-3 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
              >
                Depuis Next.js 13+, les React Server Components permettent de
                rendre le HTML directement sur le serveur, sans envoyer de
                JavaScript inutile au navigateur. Résultat : un bundle client
                minimal, un Time to Interactive (TTI) fulgurant et un meilleur
                score INP pour Google.
              </p>
            </article>

            <article
              className="rounded-2xl p-6"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                SEO natif et métadonnées dynamiques
              </h3>
              <p
                className="mt-3 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
              >
                L&apos;App Router de Next.js expose une API <code>metadata</code> native
                pour générer les balises <code>title</code>,{" "}
                <code>meta description</code>, Open Graph, JSON-LD et les
                canoniques automatiquement. Chaque page est autonome en
                matière de{" "}
                <Link href="/services/seo" style={{ color: "var(--accent)" }}>
                  référencement naturel
                </Link>
                , sans plugin tiers.
              </p>
            </article>

            <article
              className="rounded-2xl p-6"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                Images optimisées et LCP instantané
              </h3>
              <p
                className="mt-3 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
              >
                Le composant <code>next/image</code> convertit automatiquement
                vos images en WebP ou AVIF, génère des variantes responsives
                avec <code>srcset</code> et lazy-load tout ce qui est sous
                la ligne de flottaison. Le LCP (Largest Contentful Paint)
                passe sous les 2,5 secondes sans effort supplémentaire.
              </p>
            </article>

            <article
              className="rounded-2xl p-6"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                Tailwind CSS et design system scalable
              </h3>
              <p
                className="mt-3 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
              >
                J&apos;utilise Tailwind CSS v4 pour créer des interfaces
                cohérentes, maintenables et responsive-first. Les variables
                CSS personnalisées permettent de changer l&apos;identité
                visuelle d&apos;un site en quelques lignes, sans toucher
                aux composants.
              </p>
            </article>

            <article
              className="rounded-2xl p-6"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                TypeScript et fiabilité du code
              </h3>
              <p
                className="mt-3 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
              >
                Chaque composant est typé avec TypeScript. Les erreurs sont
                détectées à la compilation, pas en production. Le code est
                documenté, testable et prêt à être repris par n&apos;importe
                quel développeur React sans courbe d&apos;apprentissage.
              </p>
            </article>

            <article
              className="rounded-2xl p-6"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                Déploiement Vercel et temps de disponibilité
              </h3>
              <p
                className="mt-3 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
              >
                Déploiement continu via Git, CDN Edge mondial, preview
                automatique de chaque branche et analytics intégrés. Vercel
                est la plateforme native de Next.js, garantissant un temps
                de disponibilité de 99,99 % et un TTFB (Time to First Byte)
                inférieur à 100ms partout dans le monde.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          H2 — Résultats concrets
          ════════════════════════════════════════ */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Des performances{" "}
            <span style={{ color: "var(--accent)" }}>mesurables</span> dès la mise en ligne
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base" style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}>
            Chaque site Next.js que je livre est audité avant livraison. Voici des résultats réels.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "98/100", label: "Score Lighthouse", detail: "moyenne sur les 5 derniers projets" },
              { value: "0.8s", label: "Temps de chargement", detail: "First Contentful Paint moyen" },
              { value: "+210 %", label: "Trafic organique", detail: "en 6 mois — site bien-être" },
              { value: "100 %", label: "Mobile-friendly", detail: "responsive-first, testé iOS & Android" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl p-5 text-center" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
                <p className="text-2xl font-bold sm:text-3xl" style={{ color: "var(--accent)" }}>{stat.value}</p>
                <p className="mt-1 text-sm font-semibold" style={{ color: "var(--fg-base)" }}>{stat.label}</p>
                <p className="mt-1 text-xs" style={{ color: "var(--fg-subtle)" }}>{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          H2 — Stack technique
          ════════════════════════════════════════ */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            La stack technique de chaque projet
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base" style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}>
            Des technologies éprouvées, maintenues par des communautés massives,
            pour un site pérenne et évolutif.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4",
              "Framer Motion", "Vercel", "Node.js", "Stripe",
              "Sanity CMS", "JSON-LD / Schema.org", "Lighthouse CI", "GitHub Actions",
            ].map((tech) => (
              <span key={tech} className="rounded-lg px-4 py-2.5 text-sm font-medium" style={{ border: "1px solid var(--border)", background: "var(--surface-1)", color: "var(--fg-base)" }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          H2 — Processus de création
          ════════════════════════════════════════ */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Mon processus de création en 4 étapes
          </h2>
          <p
            className="mt-3 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            De la première discussion au déploiement en production, chaque étape
            est pensée pour que vous gardiez la visibilité sur l&apos;avancement
            et que le résultat corresponde exactement à vos attentes.
          </p>

          <div className="mt-10 space-y-8">
            <div className="flex gap-5">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                style={{ background: "var(--accent-muted)", color: "var(--accent)" }}
              >
                1
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold">
                  Cadrage et architecture de l&apos;information
                </h3>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
                >
                  On définit ensemble l&apos;arborescence, les parcours utilisateurs,
                  les mots-clés cibles et l&apos;architecture technique. C&apos;est à
                  cette étape que se joue 80 % de la performance SEO future du site.
                  Je conçois le{" "}
                  <Link href="/services/seo" style={{ color: "var(--accent)" }}>
                    maillage interne
                  </Link>{" "}
                  et la hiérarchie des contenus avant d&apos;écrire une seule ligne de code.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                style={{ background: "var(--accent-muted)", color: "var(--accent)" }}
              >
                2
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold">
                  Design UI/UX et prototypage
                </h3>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
                >
                  Maquettes haute-fidélité sur Figma, mobile-first. Chaque écran
                  respecte les principes d&apos;
                  <Link href="/services/accessibilite" style={{ color: "var(--accent)" }}>
                    accessibilité WCAG
                  </Link>
                  {" "}(contraste, zones tactiles 44px, hiérarchie visuelle) et intègre
                  les micro-interactions qui feront la différence en termes de
                  rétention utilisateur.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                style={{ background: "var(--accent-muted)", color: "var(--accent)" }}
              >
                3
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold">
                  Développement Next.js et intégration
                </h3>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
                >
                  Composants React typés, Server Components par défaut,{" "}
                  <code>&quot;use client&quot;</code> uniquement quand l&apos;interactivité
                  l&apos;exige. Animations Framer Motion hardware-accelerated (transform
                  et opacity uniquement), données structurées JSON-LD et metadata
                  API pour un score Lighthouse visé de 100/100 sur les 4 catégories.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                style={{ background: "var(--accent-muted)", color: "var(--accent)" }}
              >
                4
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold">
                  Tests, déploiement et formation
                </h3>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
                >
                  Tests unitaires et d&apos;intégration, audit Lighthouse complet,
                  vérification cross-browser et mobile. Déploiement sur Vercel
                  avec domaine personnalisé, certificat SSL et redirections.
                  Je vous forme à la gestion du contenu si nécessaire, ou je
                  peux assurer la{" "}
                  <Link href="/contact" style={{ color: "var(--accent)" }}>
                    maintenance mensuelle
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          H2 — Pour qui
          ════════════════════════════════════════ */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Pour quels projets choisir Next.js plutôt que WordPress
          </h2>
          <p
            className="mt-3 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            Next.js n&apos;est pas la réponse à tout. Si vous avez besoin de
            publier du contenu vous-même sans toucher au code, un{" "}
            <Link href="/services/site-internet-wordpress" style={{ color: "var(--accent)" }}>
              site WordPress bien optimisé
            </Link>{" "}
            peut être plus adapté. En revanche, Next.js s&apos;impose quand la
            performance, la personnalisation et l&apos;évolutivité sont prioritaires.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div
              className="rounded-xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <p className="text-sm sm:text-base font-semibold">
                Site vitrine premium et corporate
              </p>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.65" }}
              >
                Cabinets d&apos;avocats, agences, studios, restaurants haut de gamme :
                un{" "}
                <Link href="/services/site-vitrine" style={{ color: "var(--accent)" }}>
                  site vitrine
                </Link>{" "}
                en Next.js charge en moins d&apos;une seconde et offre une expérience
                utilisateur que vos concurrents sous WordPress ne peuvent pas égaler.
              </p>
            </div>

            <div
              className="rounded-xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <p className="text-sm sm:text-base font-semibold">
                E-commerce et checkout Stripe
              </p>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.65" }}
              >
                Next.js + Stripe = un tunnel d&apos;achat sans friction, un
                panier persistant côté serveur et des pages produit pré-rendues
                pour le{" "}
                <Link href="/services/e-commerce" style={{ color: "var(--accent)" }}>
                  e-commerce performant
                </Link>
                . Pas de plugin lourd, pas de faille de sécurité WooCommerce.
              </p>
            </div>

            <div
              className="rounded-xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <p className="text-sm sm:text-base font-semibold">
                Application web et SaaS
              </p>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.65" }}
              >
                MVP, tableau de bord, espace membre avec authentification,
                API Routes : Next.js est un framework full-stack qui remplace
                à la fois votre frontend React et votre backend Express.js
                dans une seule base de code TypeScript.
              </p>
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
            Questions fréquentes sur la création de site Next.js
          </h2>

          <div className="mt-8 space-y-6">
            <details
              className="group rounded-xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <summary className="cursor-pointer text-sm sm:text-base font-semibold list-none flex items-center justify-between">
                Combien coûte un site Next.js sur mesure ?
                <span className="ml-3 text-lg transition-transform duration-300 group-open:rotate-45" aria-hidden="true" style={{ color: "var(--accent)" }}>+</span>
              </summary>
              <p className="mt-3 text-sm" style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}>
                Un site vitrine Next.js démarre à partir de 2 500 € HT. Le budget
                dépend du nombre de pages, des fonctionnalités (formulaire, blog,
                e-commerce) et du niveau de design personnalisé. Je propose un devis
                détaillé après un premier échange.
              </p>
            </details>

            <details
              className="group rounded-xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <summary className="cursor-pointer text-sm sm:text-base font-semibold list-none flex items-center justify-between">
                Next.js est-il meilleur que WordPress pour le SEO ?
                <span className="ml-3 text-lg transition-transform duration-300 group-open:rotate-45" aria-hidden="true" style={{ color: "var(--accent)" }}>+</span>
              </summary>
              <p className="mt-3 text-sm" style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}>
                Next.js a un avantage technique natif (SSR, SSG, code splitting
                automatique, Core Web Vitals optimisés). WordPress peut être bien
                optimisé avec les bons plugins, mais atteint rarement un score
                Lighthouse de 100 sans compromis. Le choix dépend de votre besoin
                d&apos;autonomie éditoriale.
              </p>
            </details>

            <details
              className="group rounded-xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <summary className="cursor-pointer text-sm sm:text-base font-semibold list-none flex items-center justify-between">
                Puis-je modifier le contenu moi-même sans coder ?
                <span className="ml-3 text-lg transition-transform duration-300 group-open:rotate-45" aria-hidden="true" style={{ color: "var(--accent)" }}>+</span>
              </summary>
              <p className="mt-3 text-sm" style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}>
                Oui, via un CMS headless (Sanity, Strapi, Contentful ou Notion
                comme source de contenu). Vous éditez vos textes et images dans une
                interface simple, et le site se régénère automatiquement. C&apos;est
                le meilleur des deux mondes : puissance technique + facilité éditoriale.
              </p>
            </details>

            <details
              className="group rounded-xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <summary className="cursor-pointer text-sm sm:text-base font-semibold list-none flex items-center justify-between">
                Quel est le délai de livraison d&apos;un site Next.js ?
                <span className="ml-3 text-lg transition-transform duration-300 group-open:rotate-45" aria-hidden="true" style={{ color: "var(--accent)" }}>+</span>
              </summary>
              <p className="mt-3 text-sm" style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}>
                Comptez 3 à 6 semaines pour un site vitrine, 6 à 10 semaines pour
                un e-commerce ou une application web. Le planning dépend de la
                complexité du design, du nombre de pages et de la rapidité des
                retours lors des validations.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Maillage interne */}
      <aside className="mx-auto max-w-5xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "var(--fg-subtle)" }}>
          Services complémentaires
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/services/seo", label: "Audit & optimisation SEO" },
            { href: "/services/site-internet-wordpress", label: "Site WordPress" },
            { href: "/services/e-commerce", label: "E-commerce & Stripe" },
            { href: "/services/accessibilite", label: "Accessibilité WCAG" },
            { href: "/services/site-vitrine", label: "Site vitrine" },
            { href: "/services/tarifs", label: "Tarifs & formules" },
            { href: "/blog", label: "Blog & ressources" },
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
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Prêt à créer un site qui performe vraiment ?
          </h2>
          <p
            className="mt-3 max-w-xl mx-auto text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            Décrivez votre projet — site vitrine, e-commerce, application web — et
            vos objectifs. Je vous propose une approche technique, un planning
            réaliste et un devis clair, sans jargon.
          </p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Démarrer mon projet Next.js
            </Link>
            <a
              href="https://wa.me/32477713193?text=Bonjour%20St%C3%A9phane%2C%20je%20souhaiterais%20discuter%20d%27un%20projet%20Next.js."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline inline-flex items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
          <p className="mt-4 text-xs" style={{ color: "var(--fg-subtle)" }}>
            <Link href="/services/tarifs" className="underline underline-offset-2 transition-colors" style={{ color: "var(--fg-subtle)" }}>Voir les tarifs</Link>{" "}
            · Réponse sous 24 h · Devis gratuit
          </p>
        </div>
        <ServicesSection />
      </section>

      {/* ════════════════════════════════════════
          JSON-LD — Service + FAQPage avec @id
          ════════════════════════════════════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://www.stephanegamot.com/services/site-web-react-next#service",
                name: "Création de site Next.js & React",
                description:
                  "Développement de sites web sur mesure avec Next.js, React, TypeScript et Tailwind CSS. Sites vitrines, e-commerce et applications web performantes.",
                provider: {
                  "@type": "ProfessionalService",
                  "@id": "https://www.stephanegamot.com/#business",
                  name: "Stéphane Gamot",
                  url: "https://www.stephanegamot.com",
                },
                serviceType: "Web Development",
                areaServed: [
                  { "@type": "Country", name: "Belgique" },
                  { "@type": "Country", name: "France" },
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Prestations développement Next.js",
                  itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Site vitrine Next.js" }, price: "2500", priceCurrency: "EUR" },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce Next.js + Stripe" }, price: "5000", priceCurrency: "EUR" },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Application web React" }, price: "5000", priceCurrency: "EUR" },
                  ],
                },
                url: "https://www.stephanegamot.com/services/site-web-react-next",
                image: "https://www.stephanegamot.com/Images/og/office-workstation.webp",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "32",
                  bestRating: "5",
                  worstRating: "1",
                },
                review: [
                  {
                    "@type": "Review",
                    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                    author: { "@type": "Person", name: "Claire Delmas" },
                    datePublished: "2025-09-12",
                    reviewBody: "Site rapide, esthétique et très propre techniquement. Impact immédiat sur nos leads et notre visibilité SEO.",
                  },
                  {
                    "@type": "Review",
                    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                    author: { "@type": "Person", name: "Idriss Van der Meer" },
                    datePublished: "2025-10-28",
                    reviewBody: "Process clair, intégration Stripe sans friction, livrables carrés. On a senti un vrai accompagnement de bout en bout.",
                  },
                ],
              },
              {
                "@type": "HowTo",
                "@id": "https://www.stephanegamot.com/services/site-web-react-next#howto",
                name: "Comment se déroule la création d'un site Next.js",
                description: "Les 4 étapes de création d'un site web Next.js sur mesure.",
                totalTime: "P42D",
                step: [
                  { "@type": "HowToStep", position: 1, name: "Cadrage et architecture", text: "Définition de l'arborescence, parcours utilisateurs, mots-clés cibles et architecture technique." },
                  { "@type": "HowToStep", position: 2, name: "Design UI/UX et prototypage", text: "Maquettes haute-fidélité sur Figma, mobile-first, accessibilité WCAG intégrée." },
                  { "@type": "HowToStep", position: 3, name: "Développement Next.js", text: "Composants React typés, Server Components, animations Framer Motion, JSON-LD et metadata API." },
                  { "@type": "HowToStep", position: 4, name: "Tests et déploiement", text: "Audit Lighthouse, tests cross-browser, déploiement Vercel avec domaine personnalisé et SSL." },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.stephanegamot.com/services/site-web-react-next#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Combien coûte un site Next.js sur mesure ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Un site vitrine Next.js démarre à 2 500 € HT. Le budget dépend du nombre de pages, des fonctionnalités et du design. Devis détaillé après un premier échange.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Next.js est-il meilleur que WordPress pour le SEO ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Next.js a un avantage technique natif (SSR, SSG, Core Web Vitals). WordPress peut être optimisé mais atteint rarement Lighthouse 100 sans compromis.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Puis-je modifier le contenu moi-même sans coder ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Oui, via un CMS headless (Sanity, Strapi, Contentful). Vous éditez textes et images dans une interface simple, le site se régénère automatiquement.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Quel est le délai de livraison d'un site Next.js ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "3 à 6 semaines pour un site vitrine, 6 à 10 semaines pour un e-commerce ou une application web, selon la complexité.",
                    },
                  },
                ],
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.stephanegamot.com" },
                  { "@type": "ListItem", position: 2, name: "Services", item: "https://www.stephanegamot.com/#services" },
                  { "@type": "ListItem", position: 3, name: "Site React & Next.js", item: "https://www.stephanegamot.com/services/site-web-react-next" },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
