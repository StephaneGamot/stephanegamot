import type { Metadata } from "next";
import Link from "next/link";
import { ServicesSection } from "@/components/services/ServicesSection";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

/* ─────────────────────────────────────────────
   METADATA — Mot-clé principal : "création site vitrine"
   Secondaires : site vitrine professionnel, site vitrine premium,
   SEO local, site internet indépendant, site one-page, landing page
   ───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Création site vitrine professionnel — Stéphane Gamot",
  description:
    "Création de site vitrine sur mesure en Belgique : design premium, SEO local, mobile-first et HTTPS. Devis gratuit, contactez-moi.",
  metadataBase: new URL("https://www.stephanegamot.com"),
  alternates: {
    canonical: "https://www.stephanegamot.com/services/site-vitrine",
    languages: {
      "fr-BE": "https://www.stephanegamot.com/services/site-vitrine",
      "fr-FR": "https://www.stephanegamot.com/services/site-vitrine",
      "x-default": "https://www.stephanegamot.com/services/site-vitrine",
    },
  },
  keywords: [
    "création site vitrine",
    "site vitrine professionnel",
    "site vitrine premium",
    "SEO local",
    "site internet indépendant",
    "site one-page",
    "landing page",
    "site vitrine Belgique",
    "Google Business Profile",
  ],
  robots: { index: true, follow: true },
  authors: [
    { name: "Stéphane Gamot", url: "https://www.stephanegamot.com/me" },
  ],
  openGraph: {
    title: "Création site vitrine premium — Stéphane Gamot",
    description:
      "Site vitrine professionnel, responsive et optimisé SEO local. Design sur mesure, hébergement HTTPS et fiche Google inclus.",
    url: "https://www.stephanegamot.com/services/site-vitrine",
    siteName: "Stéphane Gamot",
    type: "website",
    locale: "fr_BE",
    images: [
      {
        url: "https://www.stephanegamot.com/Images/og/office-workstation.webp",
        width: 1200,
        height: 630,
        alt: "Création de site vitrine professionnel par Stéphane Gamot, freelance en Belgique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Création site vitrine premium — Stéphane Gamot",
    description:
      "Site vitrine sur mesure : design élégant, SEO local, mobile-first et certificat SSL. Demandez votre devis gratuit.",
    images: ["https://www.stephanegamot.com/Images/og/office-workstation.webp"],
  },
};

export default function SiteVitrineServicePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Services", href: "/#services" },
          { label: "Site vitrine" },
        ]}
      />

      {/* ── HERO ── */}
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
            Création site vitrine{" "}
            <span style={{ color: "var(--accent)" }}>
              professionnel & premium
            </span>
          </h1>

          {/* Intro APP : Accroche → Problème → Promesse */}
          <p
            className="mt-4 max-w-xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)" }}
          >
            La <strong>création site vitrine</strong> est la premiere étape pour
            exister en ligne quand on est indépendant ou petite entreprise en
            Belgique. Pourtant, beaucoup se retrouvent avec un site internet
            générique, lent, invisible sur Google et qui{" "}
            <Link href="/blog/pourquoi-votre-site-ne-convertit-pas" style={{ color: "var(--accent)" }}>
              ne génère aucun contact
            </Link>
            .
          </p>
          <p
            className="mt-2 max-w-xl text-sm sm:text-base"
            style={{ color: "var(--fg-subtle)" }}
          >
            Je crée votre{" "}
            <span
              className="font-semibold"
              style={{ color: "var(--fg-base)" }}
            >
              site vitrine professionnel sur mesure
            </span>
            {" "}: design premium, <Link href="/services/seo" className="underline" style={{ color: "var(--accent)" }}>SEO local</Link> intégré,
            responsive design mobile-first, hébergement HTTPS avec certificat
            SSL et un vrai parcours de conversion.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Demander un devis gratuit
            </Link>
            <span
              className="text-xs sm:text-sm"
              style={{ color: "var(--fg-subtle)" }}
            >
              Réponse sous 24&nbsp;h, sans engagement.
            </span>
            <Link
              href="/services/tarifs"
              className="text-sm"
              style={{
                color: "var(--fg-subtle)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              Voir les tarifs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── CE QUE CONTIENT UN SITE VITRINE PROFESSIONNEL ── */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Ce que contient un site vitrine professionnel
          </h2>
          <p
            className="mt-2 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)" }}
          >
            Un site vitrine premium ne se limite pas a une jolie page. Il
            combine structure, contenu, performance technique et
            référencement pour transformer les visiteurs en clients.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {/* H3 : Pages essentielles */}
            <article
              className="rounded-2xl p-5"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <div
                className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg"
                style={{ background: "var(--accent-muted)" }}
                aria-hidden="true"
              >
                🧱
              </div>
              <h3 className="text-sm sm:text-base font-semibold">
                Pages essentielles
              </h3>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--fg-muted)" }}
              >
                Accueil, services, a propos, témoignages et avis clients,
                contact : un parcours clair qui explique votre activité, vos
                forces et comment vous contacter. Chaque page est optimisée
                pour le <Link href="/services/seo" className="underline" style={{ color: "var(--accent)" }}>référencement naturel</Link>.
                Pour les budgets serrés, un{" "}
                <strong>site one-page</strong> ou une{" "}
                <strong>landing page</strong> ciblée peut suffire.
              </p>
            </article>

            {/* H3 : Design sur mesure */}
            <article
              className="rounded-2xl p-5"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <div
                className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg"
                style={{ background: "var(--accent-muted)" }}
                aria-hidden="true"
              >
                🎨
              </div>
              <h3 className="text-sm sm:text-base font-semibold">
                Design sur mesure
              </h3>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--fg-muted)" }}
              >
                Palette de couleurs, typographies, photos : un univers visuel
                cohérent qui reflète votre identité. Responsive design
                mobile-first pour un affichage parfait sur smartphone, tablette
                et desktop. Pas de template générique : chaque site vitrine
                est unique.
              </p>
            </article>

            {/* H3 : SEO local et Google Business */}
            <article
              className="rounded-2xl p-5"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <div
                className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg"
                style={{ background: "var(--accent-muted)" }}
                aria-hidden="true"
              >
                📍
              </div>
              <h3 className="text-sm sm:text-base font-semibold">
                SEO local et Google Business Profile
              </h3>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--fg-muted)" }}
              >
                Référencement local intégré dès la conception : balises title
                et meta description optimisées, données structurées, cohérence
                NAP (nom, adresse, téléphone) et liaison avec votre fiche
                Google. L'objectif : apparaître dans les résultats locaux et
                sur Google Maps quand un prospect cherche vos services dans
                votre zone.
              </p>
            </article>

            {/* H3 : Formulaire de contact et CTA */}
            <article
              className="rounded-2xl p-5"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <div
                className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg"
                style={{ background: "var(--accent-muted)" }}
                aria-hidden="true"
              >
                ✉️
              </div>
              <h3 className="text-sm sm:text-base font-semibold">
                Formulaire de contact et CTA
              </h3>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--fg-muted)" }}
              >
                Formulaire de contact clair, boutons d'appel a l'action
                visibles, numéro de téléphone cliquable et lien vers vos
                réseaux sociaux. Tout est pensé pour maximiser la prise de
                contact et rassurer le visiteur. L'
                <Link href="/services/accessibilite" className="underline" style={{ color: "var(--accent)" }}>accessibilité</Link> est
                intégrée pour ne perdre aucun prospect.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── WORDPRESS OU NEXT.JS ── */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            WordPress ou Next.js pour un site vitrine&nbsp;?
          </h2>
          <p
            className="mt-2 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)" }}
          >
            Les deux technologies conviennent pour créer un site vitrine
            professionnel. Le choix dépend de vos besoins, de votre budget et
            de votre autonomie souhaitée.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div
              className="rounded-2xl p-5"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                <Link href="/services/site-internet-wordpress" className="underline" style={{ color: "var(--accent)" }}>Site vitrine WordPress</Link>
              </h3>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--fg-muted)" }}
              >
                CMS idéal si vous voulez modifier vos contenus vous-même :
                ajout de pages, articles de{" "}
                <Link href="/blog" className="underline" style={{ color: "var(--accent)" }}>blog</Link>,
                mise a jour des horaires. Large écosystème de plugins pour le
                SEO local, les formulaires de contact et la gestion d'avis
                clients. Hébergement classique avec nom de domaine et
                certificat SSL inclus.
              </p>
            </div>

            <div
              className="rounded-2xl p-5"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                <Link href="/services/site-web-react-next" className="underline" style={{ color: "var(--accent)" }}>Site vitrine Next.js</Link>
              </h3>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--fg-muted)" }}
              >
                Framework React ultra-rapide, parfait pour un site vitrine
                premium avec des scores Core Web Vitals excellents.
                Génération statique, chargement instantané, sécurité
                renforcée. Idéal si la performance et le SEO technique sont
                prioritaires, ou si votre site internet indépendant doit
                évoluer vers une{" "}
                <Link href="/services/e-commerce" className="underline" style={{ color: "var(--accent)" }}>boutique e-commerce</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RÉSULTATS CONCRETS ── */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Résultats concrets
          </h2>
          <p
            className="mt-2 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)" }}
          >
            Des chiffres mesurés sur les sites vitrines livrés ces 12 derniers mois.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "96/100", label: "Score Lighthouse", detail: "performance moyenne des sites vitrines" },
              { value: "+150 %", label: "Demandes de contact", detail: "en 3 mois — cabinet d’architecte" },
              { value: "1.1s", label: "Temps de chargement", detail: "First Contentful Paint moyen" },
              { value: "−38 %", label: "Taux de rebond", detail: "grâce au design et à la clarté" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-5 text-center"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--surface-1)",
                }}
              >
                <span
                  className="text-2xl font-bold sm:text-3xl"
                  style={{ color: "var(--accent)" }}
                >
                  {stat.value}
                </span>
                <p className="mt-2 text-sm font-semibold">{stat.label}</p>
                <p
                  className="mt-1 text-xs"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STACK TECHNIQUE ── */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Stack technique
          </h2>
          <p
            className="mt-2 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)" }}
          >
            Les outils et standards que j&apos;utilise pour chaque site vitrine.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "Vercel",
              "Figma",
              "Sanity CMS",
              "Google Fonts",
              "Schema.org",
              "Core Web Vitals",
              "WCAG AA",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-lg px-4 py-2.5 text-sm font-medium"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--surface-1)",
                  color: "var(--fg-base)",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── MON PROCESSUS DE CRÉATION ── */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Mon processus de création
          </h2>
          <p
            className="mt-2 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)" }}
          >
            Quatre étapes claires pour passer de l'idée a un site vitrine
            professionnel en ligne et visible sur Google.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Échange & brief",
                desc: "On discute de votre activité, vos objectifs et votre cible. Je définis la structure, les pages essentielles et la stratégie SEO local adaptée a votre zone.",
              },
              {
                step: "02",
                title: "Maquette & design",
                desc: "Je crée un design sur mesure (mobile-first, responsive) avec votre identité visuelle. Vous validez avant le développement.",
              },
              {
                step: "03",
                title: "Développement & contenu",
                desc: "Intégration du site vitrine (WordPress ou Next.js), rédaction des textes optimisés, mise en place du formulaire de contact, HTTPS et hébergement.",
              },
              {
                step: "04",
                title: "Lancement & référencement",
                desc: "Mise en ligne, soumission aux moteurs de recherche, liaison Google Business Profile, vérification NAP et suivi des performances.",
              },
            ].map((item) => (
              <article
                key={item.step}
                className="rounded-2xl p-5"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--surface-1)",
                }}
              >
                <span
                  className="text-2xl font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  {item.step}
                </span>
                <h3 className="mt-2 text-sm sm:text-base font-semibold">
                  {item.title}
                </h3>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Questions fréquentes sur la création de site vitrine
          </h2>

          <div className="mt-6 space-y-5">
            <article
              className="rounded-2xl p-5"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                Quel est le prix d'un site vitrine professionnel&nbsp;?
              </h3>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--fg-muted)" }}
              >
                Le tarif dépend du nombre de pages, du design souhaité et des
                fonctionnalités (formulaire de contact, blog, avis clients,
                réservation). Un site one-page ou une landing page commence
                autour de 800&nbsp;EUR, un site vitrine complet de 4 a 6 pages
                entre 1&nbsp;500 et 3&nbsp;000&nbsp;EUR. Nom de domaine,
                hébergement et certificat SSL sont inclus la premiere année.{" "}
                <Link href="/contact" className="underline" style={{ color: "var(--accent)" }}>Demandez un devis personnalisé</Link>
                {" "}ou consultez mon article{" "}
                <Link href="/blog/combien-coute-un-site-web-en-2026-prix-pieges" className="underline" style={{ color: "var(--accent)" }}>
                  Combien coûte un site web en 2026
                </Link>
                .
              </p>
            </article>

            <article
              className="rounded-2xl p-5"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                Combien de temps faut-il pour créer un site vitrine&nbsp;?
              </h3>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--fg-muted)" }}
              >
                Comptez 2 a 4 semaines entre le brief initial et la mise en
                ligne, selon la complexité et la rapidité de vos retours.
                Un site one-page peut être prêt en une semaine. Je travaille
                par étapes validées pour éviter les allers-retours inutiles.
              </p>
            </article>

            <article
              className="rounded-2xl p-5"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                Proposez-vous la maintenance du site après la mise en
                ligne&nbsp;?
              </h3>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--fg-muted)" }}
              >
                Oui. Je propose des forfaits de maintenance : mises a jour de
                sécurité, sauvegardes, modifications de contenu et suivi
                technique. Vous pouvez aussi gérer votre site vous-même si
                vous choisissez WordPress comme CMS. Plus de détails dans la{" "}
                <Link href="/faq" className="underline" style={{ color: "var(--accent)" }}>FAQ complète</Link>.
              </p>
            </article>

            <article
              className="rounded-2xl p-5"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                Comment fonctionne le référencement local d'un site
                vitrine&nbsp;?
              </h3>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--fg-muted)" }}
              >
                Le SEO local repose sur trois piliers : un site techniquement
                optimisé (vitesse, HTTPS, responsive design), un contenu
                ciblé avec vos mots-clés géographiques, et une fiche Google
                Business Profile bien renseignée avec des avis clients. Je
                veille a la cohérence NAP (nom, adresse, téléphone) sur
                toutes les plateformes. En savoir plus sur mon{" "}
                <Link href="/services/seo" className="underline" style={{ color: "var(--accent)" }}>service SEO</Link>.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── ASIDE – LIENS COMPLÉMENTAIRES ── */}
      <aside className="mx-auto max-w-5xl px-4 pb-6 sm:px-6 lg:px-8">
        <p
          className="text-xs uppercase tracking-[0.12em] mb-3"
          style={{ color: "var(--fg-subtle)" }}
        >
          Services complémentaires
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/services/seo", label: "Optimisation SEO" },
            { href: "/services/site-internet-wordpress", label: "Site WordPress" },
            { href: "/services/site-web-react-next", label: "Site Next.js & React" },
            { href: "/services/e-commerce", label: "E-commerce" },
            { href: "/services/accessibilite", label: "Accessibilité web" },
            { href: "/portfolio", label: "Voir le portfolio" },
            { href: "/me", label: "A propos de moi" },
            { href: "/services/tarifs", label: "Tarifs & formules" },
            { href: "/faq", label: "Questions fréquentes" },
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

      {/* ── CTA FINAL ── */}
      <section className="pb-16 pt-8 sm:pb-20 sm:pt-10">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Prêt pour la création de votre site vitrine&nbsp;?
          </h2>
          <p
            className="mt-3 text-sm sm:text-base"
            style={{ color: "var(--fg-muted)" }}
          >
            Décrivez-moi votre activité et vos objectifs. Je vous propose un
            site vitrine professionnel adapté a votre budget, avec SEO local,
            responsive design et hébergement HTTPS inclus.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Lancer mon projet de site vitrine
            </Link>
            <a
              href="https://wa.me/32477713193?text=Bonjour%20St%C3%A9phane%2C%20je%20souhaiterais%20un%20site%20vitrine%20professionnel."
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--surface-1)",
                color: "var(--fg-base)",
                border: "1px solid var(--border)",
              }}
            >
              WhatsApp
            </a>
          </div>
          <p className="mt-4 text-xs" style={{ color: "var(--fg-subtle)" }}>
            <Link href="/services/tarifs" className="underline underline-offset-2">Voir les tarifs</Link> · Réponse sous 24 h · Devis gratuit
          </p>
        </div>

        <ServicesSection />
      </section>

      {/* ── JSON-LD : @graph Service + FAQPage ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id":
                  "https://www.stephanegamot.com/services/site-vitrine/#service",
                name: "Création de site vitrine professionnel",
                description:
                  "Création de site vitrine sur mesure en Belgique : design premium, SEO local, mobile-first, HTTPS et formulaire de contact optimisé pour convertir.",
                image: "https://www.stephanegamot.com/Images/og/office-workstation.webp",
                provider: {
                  "@type": "ProfessionalService",
                  "@id":
                    "https://www.stephanegamot.com/#business",
                  name: "Stéphane Gamot",
                  url: "https://www.stephanegamot.com",
                },
                areaServed: {
                  "@type": "Country",
                  name: "Belgium",
                },
                serviceType: "Création de site vitrine",
                url: "https://www.stephanegamot.com/services/site-vitrine",
                offers: [
                  {
                    "@type": "Offer",
                    name: "Site vitrine Essentiel",
                    price: "1500",
                    priceCurrency: "EUR",
                    url: "https://www.stephanegamot.com/services/tarifs",
                  },
                  {
                    "@type": "Offer",
                    name: "Site vitrine Pro",
                    price: "3500",
                    priceCurrency: "EUR",
                    url: "https://www.stephanegamot.com/services/tarifs",
                  },
                ],
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
                    datePublished: "2025-11-12",
                    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                    author: { "@type": "Person", name: "Anaïs Rochette" },
                    reviewBody: "Design soigné, performances mesurées, accessibilité intégrée. L'expérience client est nettement plus fluide.",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                "@id":
                  "https://www.stephanegamot.com/services/site-vitrine/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Quel est le prix d'un site vitrine professionnel ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Un site one-page ou landing page commence autour de 800 EUR, un site vitrine complet de 4 à 6 pages entre 1 500 et 3 000 EUR. Nom de domaine, hébergement et certificat SSL sont inclus la première année.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Combien de temps faut-il pour créer un site vitrine ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Comptez 2 à 4 semaines entre le brief initial et la mise en ligne, selon la complexité. Un site one-page peut être prêt en une semaine.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Proposez-vous la maintenance du site après la mise en ligne ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Oui. Forfaits de maintenance disponibles : mises à jour de sécurité, sauvegardes, modifications de contenu et suivi technique. Vous pouvez aussi gérer votre site vous-même avec WordPress.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Comment fonctionne le référencement local d'un site vitrine ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Le SEO local repose sur un site techniquement optimisé (vitesse, HTTPS, responsive), un contenu ciblé avec des mots-clés géographiques, et une fiche Google Business Profile bien renseignée avec des avis clients et une cohérence NAP.",
                    },
                  },
                ],
              },
              {
                "@type": "HowTo",
                "@id":
                  "https://www.stephanegamot.com/services/site-vitrine/#howto",
                name: "Comment créer un site vitrine professionnel",
                description:
                  "Quatre étapes claires pour passer de l'idée à un site vitrine professionnel en ligne et visible sur Google.",
                step: [
                  {
                    "@type": "HowToStep",
                    position: 1,
                    name: "Échange & brief",
                    text: "On discute de votre activité, vos objectifs et votre cible. Je définis la structure, les pages essentielles et la stratégie SEO local adaptée à votre zone.",
                  },
                  {
                    "@type": "HowToStep",
                    position: 2,
                    name: "Maquette & design",
                    text: "Je crée un design sur mesure (mobile-first, responsive) avec votre identité visuelle. Vous validez avant le développement.",
                  },
                  {
                    "@type": "HowToStep",
                    position: 3,
                    name: "Développement & contenu",
                    text: "Intégration du site vitrine (WordPress ou Next.js), rédaction des textes optimisés, mise en place du formulaire de contact, HTTPS et hébergement.",
                  },
                  {
                    "@type": "HowToStep",
                    position: 4,
                    name: "Lancement & référencement",
                    text: "Mise en ligne, soumission aux moteurs de recherche, liaison Google Business Profile, vérification NAP et suivi des performances.",
                  },
                ],
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.stephanegamot.com" },
                  { "@type": "ListItem", position: 2, name: "Services", item: "https://www.stephanegamot.com/#services" },
                  { "@type": "ListItem", position: 3, name: "Site vitrine", item: "https://www.stephanegamot.com/services/site-vitrine" },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
