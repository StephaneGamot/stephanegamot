import type { Metadata } from "next";
import Link from "next/link";
import { ServicesSection } from "@/components/services/ServicesSection";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

/* ─────────────────────────────────────────────
   METADATA — Mot-clé principal : "audit SEO"
   Secondaires : SEO technique, référencement naturel,
   optimisation Google, Core Web Vitals, consultant SEO
   ───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Audit SEO & référencement naturel — Stéphane Gamot",
  description:
    "Audit SEO complet : technique, contenu, maillage et Core Web Vitals. Plan d'actions priorisé pour gagner en visibilité sur Google. Devis gratuit.",
  metadataBase: new URL("https://www.stephanegamot.com"),
  alternates: { canonical: "https://www.stephanegamot.com/services/seo" },
  keywords: [
    "audit SEO",
    "SEO technique",
    "référencement naturel",
    "consultant SEO Belgique",
    "optimisation Google",
    "Core Web Vitals",
    "SEO on-page",
    "maillage interne",
    "plan d'action SEO",
    "indexation Google",
  ],
  robots: { index: true, follow: true },
  authors: [{ name: "Stéphane Gamot", url: "https://www.stephanegamot.com/me" }],
  openGraph: {
    title: "Audit SEO & référencement naturel – Stéphane Gamot",
    description:
      "Diagnostic complet de votre site : technique, contenu, performance et maillage. Actions concrètes pour ranker sur Google.",
    url: "https://www.stephanegamot.com/services/seo",
    siteName: "Stéphane Gamot",
    type: "website",
    locale: "fr_BE",
    images: [
      {
        url: "/Images/og/office-workstation.webp",
        width: 1200,
        height: 630,
        alt: "Audit SEO et optimisation du référencement naturel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit SEO & référencement naturel – Stéphane Gamot",
    description:
      "Audit technique + plan d'actions priorisé pour améliorer votre visibilité, votre trafic organique et vos conversions.",
    images: ["/Images/og/office-workstation.webp"],
  },
};

export default function SeoServicePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Services", href: "/#services" },
          { label: "SEO & Référencement" },
        ]}
      />

      {/* ════════════════════════════════════════
          HERO — Méthode APP (Accroche, Problème, Promesse)
          Mot-clé "audit SEO" dans les 50 premiers mots
          ════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-32 -top-40 h-72 w-72 rounded-full opacity-[0.04]"
            style={{ background: "var(--accent)", filter: "blur(60px)" }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="section-label">Référencement naturel</p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Audit SEO complet pour{" "}
            <span style={{ color: "var(--accent)" }}>
              dominer Google
            </span>{" "}
            sur vos requêtes clés.
          </h1>

          {/* Pyramide inversée : réponse immédiate */}
          <p
            className="mt-6 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            Votre site est en ligne, mais il reste invisible sur Google. Pas de trafic
            organique, pas de demandes entrantes, pas de retour sur investissement.
            Le problème n&apos;est presque jamais le design — c&apos;est ce qui se passe{" "}
            <strong style={{ color: "var(--fg-base)" }}>sous le capot</strong> :
            structure technique, balisage sémantique, vitesse de chargement, qualité du contenu
            et maillage interne.
          </p>
          <p
            className="mt-3 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            Mon <strong style={{ color: "var(--fg-base)" }}>audit SEO</strong> identifie
            chaque point de friction qui empêche Googlebot d&apos;indexer, de comprendre
            et de valoriser vos pages. Vous repartez avec un{" "}
            <Link href="/contact" style={{ color: "var(--accent)" }}>
              plan d&apos;actions priorisé
            </Link>
            , pas un rapport de 80 pages illisible.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn btn-primary">
              Demander un audit SEO gratuit
            </Link>
            <Link
              href="/portfolio"
              className="text-sm transition-colors duration-300"
              style={{
                color: "var(--fg-subtle)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              Voir des résultats concrets →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          H2 — Ce que couvre un audit SEO technique
          Optimisé Featured Snippet (liste structurée)
          ════════════════════════════════════════ */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Ce que couvre un audit SEO technique complet
          </h2>
          <p
            className="mt-3 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            Un audit SEO sérieux ne se limite pas à passer votre URL dans un outil automatisé.
            Il s&apos;agit d&apos;une analyse méthodique de chaque couche de votre site, du
            serveur jusqu&apos;au contenu visible par l&apos;internaute. Voici les piliers
            que j&apos;examine systématiquement.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Bloc 1 */}
            <article
              className="rounded-2xl p-6"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                Crawl, indexation et architecture
              </h3>
              <p
                className="mt-3 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
              >
                Je vérifie comment Googlebot explore votre site : fichier{" "}
                <code>robots.txt</code>, sitemap XML, budget de crawl,
                pages orphelines, redirections 301/302, erreurs 404 et
                structure des URLs. Un site mal crawlé est un site invisible,
                quel que soit la qualité de son contenu.
              </p>
            </article>

            {/* Bloc 2 */}
            <article
              className="rounded-2xl p-6"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                Core Web Vitals et performance
              </h3>
              <p
                className="mt-3 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
              >
                Google mesure l&apos;expérience utilisateur via le LCP (temps d&apos;affichage),
                l&apos;INP (réactivité aux interactions) et le CLS (stabilité visuelle).
                J&apos;analyse vos scores Lighthouse, PageSpeed Insights et les données
                terrain du Chrome UX Report pour identifier les goulots d&apos;étranglement.
                Un site{" "}
                <Link href="/services/site-web-react-next" style={{ color: "var(--accent)" }}>
                  développé en Next.js
                </Link>{" "}
                a un avantage natif ici grâce au rendu serveur.
              </p>
            </article>

            {/* Bloc 3 */}
            <article
              className="rounded-2xl p-6"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                Balisage sémantique et données structurées
              </h3>
              <p
                className="mt-3 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
              >
                La hiérarchie des titres (H1 à H6), les balises <code>title</code> et{" "}
                <code>meta description</code>, le Schema.org (JSON-LD) et les
                balises Open Graph sont la colonne vertébrale de votre référencement
                on-page. Je vérifie leur présence, leur unicité et leur pertinence
                sémantique par rapport à vos mots-clés cibles.
              </p>
            </article>

            {/* Bloc 4 */}
            <article
              className="rounded-2xl p-6"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                Contenu, sémantique et intention de recherche
              </h3>
              <p
                className="mt-3 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
              >
                Chaque page doit répondre à une intention de recherche précise
                (informationnelle, transactionnelle ou navigationnelle). J&apos;analyse
                la couverture sémantique de vos textes (TF-IDF), la densité des
                entités nommées, la pertinence des champs lexicaux et la structure
                en pyramide inversée. Le contenu doit prouver votre E-E-A-T
                (Expérience, Expertise, Autorité, Fiabilité) à Google.
              </p>
            </article>

            {/* Bloc 5 */}
            <article
              className="rounded-2xl p-6"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                Maillage interne et profondeur de page
              </h3>
              <p
                className="mt-3 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
              >
                Le maillage interne distribue le PageRank entre vos pages et guide
                Googlebot dans sa compréhension de votre arborescence. Je cartographie
                vos liens internes, identifie les pages qui reçoivent trop peu de
                jus SEO et propose une stratégie de cocon sémantique adaptée à
                votre thématique.
              </p>
            </article>

            {/* Bloc 6 */}
            <article
              className="rounded-2xl p-6"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                Mobile-first et accessibilité
              </h3>
              <p
                className="mt-3 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
              >
                Depuis le passage à l&apos;indexation mobile-first, Google crawle
                la version mobile de votre site en priorité. Je vérifie le responsive
                design, les zones tactiles (minimum 44×44px), le contraste WCAG AA
                et la compatibilité avec les lecteurs d&apos;écran. L&apos;
                <Link href="/services/accessibilite" style={{ color: "var(--accent)" }}>
                  accessibilité numérique
                </Link>{" "}
                est aussi un signal de qualité pour Google.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          H2 — Comment se déroule un audit SEO
          ════════════════════════════════════════ */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Comment se déroule un audit SEO avec moi
          </h2>
          <p
            className="mt-3 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            Pas de rapport automatisé de 200 pages. Mon approche est artisanale,
            pragmatique et orientée résultats. Chaque recommandation est accompagnée
            de son impact estimé et de sa difficulté de mise en œuvre.
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
                  Échange initial et cadrage des objectifs
                </h3>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
                >
                  On commence par un appel ou un échange écrit pour comprendre votre activité,
                  vos mots-clés cibles, votre concurrence et vos objectifs business. Un audit
                  SEO sans contexte métier est inutile.
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
                  Crawl complet et analyse technique
                </h3>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
                >
                  J&apos;utilise Screaming Frog, Ahrefs, Google Search Console et
                  PageSpeed Insights pour scanner votre site en profondeur. Chaque URL
                  est passée au crible : statut HTTP, temps de réponse, taille du DOM,
                  balisage, liens cassés et données structurées.
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
                  Livraison du plan d&apos;actions priorisé
                </h3>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
                >
                  Vous recevez un document structuré avec trois niveaux de priorité :
                  correctifs critiques (qui bloquent l&apos;indexation), optimisations
                  à fort impact (qui améliorent le positionnement) et améliorations
                  long terme (qui consolident votre autorité). Chaque action est
                  accompagnée d&apos;instructions claires, que vous ou votre{" "}
                  <Link href="/services/site-internet-wordpress" style={{ color: "var(--accent)" }}>
                    développeur WordPress
                  </Link>{" "}
                  peut implémenter.
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
                  Suivi et mesure des résultats
                </h3>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
                >
                  Le SEO est un marathon, pas un sprint. Après la mise en œuvre des
                  corrections, je peux suivre l&apos;évolution de vos positions sur
                  Google Search Console, mesurer l&apos;impact sur le trafic organique
                  et ajuster la stratégie de contenu en fonction des données réelles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          H2 — Pour qui est ce service
          ════════════════════════════════════════ */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            À qui s&apos;adresse un audit SEO professionnel
          </h2>
          <p
            className="mt-3 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            Que vous soyez un indépendant qui lance son{" "}
            <Link href="/services/site-vitrine" style={{ color: "var(--accent)" }}>
              site vitrine
            </Link>
            , une PME avec un{" "}
            <Link href="/services/e-commerce" style={{ color: "var(--accent)" }}>
              e-commerce Stripe
            </Link>{" "}
            ou un entrepreneur qui veut comprendre pourquoi ses concurrents
            apparaissent avant lui, l&apos;audit SEO est le point de départ indispensable.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div
              className="rounded-xl p-5"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <p className="text-sm sm:text-base font-semibold">
                Indépendants et professions libérales
              </p>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.65" }}
              >
                Avocats, architectes, thérapeutes, consultants : votre site est
                souvent votre premier commercial. Un référencement naturel solide
                sur Google Maps et la recherche organique vous rend visible
                exactement quand vos futurs clients vous cherchent.
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
                PME et entreprises en croissance
              </p>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.65" }}
              >
                Vous investissez dans Google Ads mais votre trafic organique
                stagne. Un audit SEO révèle les quick wins techniques et les
                opportunités de contenu qui réduisent votre dépendance au
                paid et améliorent votre coût d&apos;acquisition.
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
                Sites en refonte ou migration
              </p>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--fg-muted)", lineHeight: "1.65" }}
              >
                Vous passez de WordPress à{" "}
                <Link href="/services/site-web-react-next" style={{ color: "var(--accent)" }}>
                  Next.js
                </Link>
                , ou vous refondez votre architecture ? L&apos;audit pré-migration
                garantit que vous ne perdez pas le positionnement durement acquis
                grâce à un plan de redirections 301 et une cartographie des URLs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          H2 — FAQ — Optimisé People Also Ask
          FAQPage JSON-LD pour Featured Snippets
          ════════════════════════════════════════ */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Questions fréquentes sur l&apos;audit SEO
          </h2>

          <div className="mt-8 space-y-6">
            <details
              className="group rounded-xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <summary className="cursor-pointer text-sm sm:text-base font-semibold list-none flex items-center justify-between">
                Combien de temps faut-il pour voir des résultats après un audit SEO ?
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
                Les correctifs techniques (indexation, vitesse, balisage) montrent
                des effets en 2 à 4 semaines. Les optimisations de contenu et de
                maillage interne prennent généralement 2 à 6 mois pour se refléter
                dans les positions Google, selon la concurrence sur vos mots-clés cibles.
              </p>
            </details>

            <details
              className="group rounded-xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <summary className="cursor-pointer text-sm sm:text-base font-semibold list-none flex items-center justify-between">
                Quelle est la différence entre SEO technique et SEO on-page ?
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
                Le SEO technique concerne l&apos;infrastructure : vitesse de chargement,
                Core Web Vitals, crawlabilité, HTTPS, sitemap et robots.txt.
                Le SEO on-page porte sur le contenu visible : balises title, meta
                description, hiérarchie H1-H6, maillage interne et richesse sémantique.
                Les deux sont indissociables pour bien se positionner. Pour aller plus loin,
                consultez mon article{" "}
                <Link href="/blog/seo-2026-ce-qui-marche-vraiment" style={{ color: "var(--accent)" }}>
                  SEO en 2026 : ce qui marche vraiment
                </Link>
                .
              </p>
            </details>

            <details
              className="group rounded-xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <summary className="cursor-pointer text-sm sm:text-base font-semibold list-none flex items-center justify-between">
                Avez-vous besoin d&apos;accès à ma Google Search Console ?
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
                Oui, idéalement. La Search Console fournit des données précieuses
                sur l&apos;indexation, les erreurs de crawl, les impressions et les
                clics réels. Sans cet accès, l&apos;audit reste possible mais moins
                précis sur le volet « performance organique actuelle ».
              </p>
            </details>

            <details
              className="group rounded-xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <summary className="cursor-pointer text-sm sm:text-base font-semibold list-none flex items-center justify-between">
                Un audit SEO suffit-il ou faut-il un suivi continu ?
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
                L&apos;audit est le diagnostic initial indispensable. Pour maintenir
                et améliorer vos positions dans la durée, un accompagnement SEO
                mensuel est recommandé : veille algorithmique, création de contenu
                optimisé, monitoring des positions et ajustement de la stratégie
                de mots-clés.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Maillage interne — services complémentaires */}
      <aside className="mx-auto max-w-5xl px-4 pb-8 sm:px-6 lg:px-8">
        <p
          className="text-xs uppercase tracking-[0.12em] mb-4"
          style={{ color: "var(--fg-subtle)" }}
        >
          Services complémentaires
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/services/site-web-react-next", label: "Création site Next.js" },
            { href: "/services/site-internet-wordpress", label: "Site WordPress" },
            { href: "/services/e-commerce", label: "E-commerce & Stripe" },
            { href: "/services/accessibilite", label: "Accessibilité WCAG" },
            { href: "/services/site-vitrine", label: "Site vitrine" },
            { href: "/blog", label: "Blog & ressources" },
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

      {/* CTA FINAL */}
      <section className="pb-16 pt-10 sm:pb-20 sm:pt-12">
        <div className="divider" />
        <div className="mx-auto max-w-3xl px-4 pt-10 text-center sm:px-6 sm:pt-12 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Prêt à comprendre ce qui bloque votre référencement ?
          </h2>
          <p
            className="mt-3 max-w-xl mx-auto text-sm sm:text-base"
            style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
          >
            Décrivez votre activité, votre site actuel et vos objectifs de visibilité.
            Je vous propose un périmètre d&apos;audit adapté et un devis clair,
            sans engagement.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Demander mon audit SEO
            </Link>
          </div>
        </div>
        <ServicesSection />
      </section>

      {/* ════════════════════════════════════════
          JSON-LD — Service + FAQPage avec @id
          Entités liées pour le Knowledge Graph
          ════════════════════════════════════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://www.stephanegamot.com/services/seo#service",
                name: "Audit SEO & référencement naturel",
                description:
                  "Audit SEO complet : technique, contenu, maillage interne et Core Web Vitals. Plan d'actions priorisé pour améliorer la visibilité sur Google.",
                provider: {
                  "@type": "ProfessionalService",
                  "@id": "https://www.stephanegamot.com/#business",
                  name: "Stéphane Gamot",
                  url: "https://www.stephanegamot.com",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Halle",
                    addressCountry: "BE",
                  },
                },
                serviceType: "SEO Audit",
                areaServed: [
                  { "@type": "Country", name: "Belgique" },
                  { "@type": "Country", name: "France" },
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Prestations SEO",
                  itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit SEO technique" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Optimisation SEO on-page" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Accompagnement SEO mensuel" } },
                  ],
                },
                url: "https://www.stephanegamot.com/services/seo",
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.stephanegamot.com/services/seo#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Combien de temps faut-il pour voir des résultats après un audit SEO ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Les correctifs techniques montrent des effets en 2 à 4 semaines. Les optimisations de contenu prennent 2 à 6 mois selon la concurrence.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Quelle est la différence entre SEO technique et SEO on-page ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Le SEO technique concerne l'infrastructure (vitesse, crawl, HTTPS). Le SEO on-page porte sur le contenu (balises, maillage, sémantique). Les deux sont indissociables.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Avez-vous besoin d'accès à ma Google Search Console ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Idéalement oui. La Search Console fournit des données sur l'indexation, les erreurs de crawl et les performances organiques. Sans cet accès, l'audit reste possible mais moins précis.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Un audit SEO suffit-il ou faut-il un suivi continu ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "L'audit est le diagnostic initial. Pour maintenir vos positions, un accompagnement SEO mensuel est recommandé : veille, contenu, monitoring.",
                    },
                  },
                ],
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.stephanegamot.com" },
                  { "@type": "ListItem", position: 2, name: "Services", item: "https://www.stephanegamot.com/#services" },
                  { "@type": "ListItem", position: 3, name: "SEO & Référencement", item: "https://www.stephanegamot.com/services/seo" },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
