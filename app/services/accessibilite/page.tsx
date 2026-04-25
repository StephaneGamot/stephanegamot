// app/services/accessibilite/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ServicesSection } from "@/components/services/ServicesSection";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

/* ─────────────────────────────────────────────
   METADATA — Mot-cle principal : "accessibilite web"
   Secondaires : WCAG 2.2, RGAA, audit accessibilite,
   conformite EAA, European Accessibility Act,
   handicap numerique, ARIA
   ───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Accessibilite web WCAG 2.2 & audit — S. Gamot",
  description:
    "Audit accessibilite web WCAG 2.2, RGAA 4.1 et conformite EAA. Corrections ARIA, contrastes, clavier. Freelance Belgique. Demandez votre audit gratuit.",
  metadataBase: new URL("https://www.stephanegamot.com"),
  alternates: { canonical: "https://www.stephanegamot.com/services/accessibilite" },
  keywords: [
    "accessibilite web",
    "WCAG 2.2",
    "RGAA",
    "audit accessibilite",
    "conformite EAA",
    "European Accessibility Act",
    "handicap numerique",
    "ARIA",
    "declaration accessibilite",
    "lecteur ecran",
  ],
  robots: { index: true, follow: true },
  authors: [{ name: "Stephane Gamot", url: "https://www.stephanegamot.com/me" }],
  openGraph: {
    title: "Accessibilite web WCAG 2.2 & audit EAA — Stephane Gamot",
    description:
      "Audit et mise en conformite accessibilite web : WCAG 2.2, RGAA 4.1, EAA. Corrections ARIA, contrastes, navigation clavier. Freelance en Belgique.",
    url: "https://www.stephanegamot.com/services/accessibilite",
    siteName: "Stephane Gamot",
    type: "website",
    locale: "fr_BE",
    images: [
      {
        url: "/Images/og/office-workstation.webp",
        width: 1200,
        height: 630,
        alt: "Accessibilite web et conformite WCAG 2.2 — audit par Stephane Gamot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibilite web WCAG 2.2 & audit EAA — Stephane Gamot",
    description:
      "Audit accessibilite web WCAG 2.2, RGAA 4.1, conformite EAA. Corrections ARIA, contrastes, clavier, formulaires. Freelance Belgique.",
    images: ["/Images/og/office-workstation.webp"],
  },
};

export default function AccessibiliteServicePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Services", href: "/#services" }, { label: "Accessibilite" }]} />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-40 h-72 w-72 rounded-full opacity-[0.04]" style={{ background: "var(--accent)", filter: "blur(60px)" }} />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="section-label">Services</p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Accessibilite web&nbsp;:{" "}
            <span style={{ color: "var(--accent)" }}>
              audit WCAG 2.2, conformite EAA et corrections
            </span>
          </h1>

          {/* APP : Accroche */}
          <p className="mt-4 max-w-xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            L&apos;<strong>accessibilite web</strong> n&apos;est plus une option.
            Depuis le <span className="font-semibold">28 juin 2025</span>,
            l&apos;European Accessibility Act (EAA) oblige une grande partie des
            services numeriques en <span className="font-semibold">Belgique</span>{" "}
            et en <span className="font-semibold">France</span> a respecter les
            normes WCAG 2.2 et RGAA 4.1.
          </p>

          {/* APP : Probleme */}
          <p className="mt-2 max-w-xl text-sm sm:text-base" style={{ color: "var(--fg-subtle)" }}>
            Un site non conforme, c&apos;est un{" "}
            <span className="font-semibold" style={{ color: "var(--fg-base)" }}>
              risque d&apos;amendes, de mises en demeure et d&apos;exclusion de 15 %
              de vos utilisateurs
            </span>{" "}
            — personnes en situation de handicap numerique, utilisateurs de
            lecteurs d&apos;ecran comme NVDA, JAWS ou VoiceOver, daltoniens,
            seniors...
          </p>

          {/* APP : Promesse */}
          <p className="mt-2 max-w-xl text-sm sm:text-base" style={{ color: "var(--fg-subtle)" }}>
            Je vous aide a{" "}
            <span className="font-semibold" style={{ color: "var(--fg-base)" }}>
              auditer, corriger et documenter
            </span>{" "}
            l&apos;accessibilite de votre site pour atteindre la conformite WCAG 2.2 AA,
            sans panique mais sans attendre. Que votre site soit un{" "}
            <Link href="/services/site-vitrine" className="underline" style={{ color: "var(--accent)" }}>
              site vitrine
            </Link>
            , un{" "}
            <Link href="/services/e-commerce" className="underline" style={{ color: "var(--accent)" }}>
              e-commerce
            </Link>{" "}
            ou une{" "}
            <Link href="/services/site-web-react-next" className="underline" style={{ color: "var(--accent)" }}>
              application React / Next.js
            </Link>
            .
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Demander un audit accessibilite
            </Link>
            <span className="text-xs sm:text-sm" style={{ color: "var(--fg-subtle)" }}>
              Reponse sous 48 h — on fait le point sur vos obligations.
            </span>
          </div>
        </div>
      </section>

      {/* ── 3 BLOCS : POURQUOI C'EST IMPORTANT ── */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: "var(--accent-muted)" }}>
                ⚖️
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                Obligation legale (EAA, Belgique & France)
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                L&apos;European Accessibility Act rend l&apos;accessibilite web
                obligatoire pour l&apos;e-commerce, les services bancaires, les
                transports et les plateformes en ligne. Le non-respect expose a des
                sanctions administratives et des amendes renouvelables.
              </p>
            </article>

            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: "var(--accent-muted)" }}>
                💶
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                Amendes & handicap numerique
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                En France, le RGAA prevoit des{" "}
                <span className="font-semibold">
                  amendes jusqu&apos;a 50 000 € par service
                </span>
                . En Belgique, des penalites administratives sont possibles. Et
                surtout, un site inaccessible exclut des millions de personnes en
                situation de handicap numerique.
              </p>
            </article>

            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: "var(--accent-muted)" }}>
                🤝
              </div>
              <h2 className="text-sm sm:text-base font-semibold">
                Accessibilite = meilleur SEO & business
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Un site accessible est mieux structure, plus rapide, mieux{" "}
                <Link href="/services/seo" className="underline" style={{ color: "var(--accent)" }}>
                  reference sur Google
                </Link>
                {" "}et plus credible. C&apos;est un levier de confiance et de
                conversion, pas juste une contrainte.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── CE QUE DIT LA LOI EN 2025 ── */}
      <section>
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
              Ce que dit la loi en 2025 : EAA, Belgique, France
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
              L&apos;European Accessibility Act (directive 2019/882) est entree en
              application le 28 juin 2025. Voici ce que cela change concretement
              pour votre site vitrine, votre{" "}
              <Link href="/services/e-commerce" className="underline" style={{ color: "var(--accent)" }}>
                boutique en ligne
              </Link>{" "}
              ou vos services numeriques.
            </p>
          </div>

          <div className="space-y-5 text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            <div className="rounded-2xl p-4" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="font-semibold" style={{ color: "var(--fg-base)" }}>
                1. L&apos;EAA (European Accessibility Act) est en vigueur
              </p>
              <p className="mt-2">
                Depuis le 28 juin 2025, la directive europeenne impose des exigences
                d&apos;accessibilite a de nombreux produits et services numeriques :
                sites web, applications mobiles, services de commerce electronique,
                services bancaires, transports, billetterie, livres numeriques,
                etc. La norme de reference est la{" "}
                <strong>EN 301 549</strong>, elle-meme basee sur les criteres{" "}
                <strong>WCAG 2.2 niveau AA</strong>.
              </p>
            </div>

            <div className="rounded-2xl p-4" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="font-semibold" style={{ color: "var(--fg-base)" }}>
                2. En Belgique : transposition de l&apos;EAA et controle du SPF Economie
              </p>
              <p className="mt-2">
                Les autorites belges ont transpose l&apos;EAA via un arrete royal.
                Au-dela des sites publics deja concernes par la loi du 19 juillet
                2018, de nombreux acteurs prives (e-commerce, services en ligne,
                banques, telecom) doivent rendre leurs interfaces accessibles et
                publier une{" "}
                <span className="font-semibold">declaration d&apos;accessibilite</span>.
                Le SPF Economie peut mener des controles, envoyer des mises en
                demeure et imposer des sanctions administratives. Le{" "}
                <strong>BOSA</strong> (service public federal Strategie et Appui)
                reste l&apos;organisme de reference pour le monitoring.
              </p>
            </div>

            <div className="rounded-2xl p-4" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="font-semibold" style={{ color: "var(--fg-base)" }}>
                3. En France : le RGAA 4.1 et l&apos;EAA renforcent les sanctions
              </p>
              <p className="mt-2">
                Les sites publics et de nombreuses entreprises doivent respecter le{" "}
                <strong>RGAA 4.1</strong> (Referentiel General d&apos;Amelioration
                de l&apos;Accessibilite), referentiel francais base sur les WCAG.
                Avec l&apos;EAA, le perimetre s&apos;etend au secteur prive. La{" "}
                <strong>DINUM</strong> supervise la conformite. Les textes prevoient
                des{" "}
                <span className="font-semibold">
                  amendes pouvant aller jusqu&apos;a 50 000 €
                </span>{" "}
                par service numerique en cas de non-conformite repetee, avec
                reconduction possible tant que la mise en conformite n&apos;est pas
                faite. L&apos;<strong>ARCOM</strong> peut egalement intervenir.
              </p>
            </div>

            <div className="rounded-2xl p-4" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <p className="font-semibold" style={{ color: "var(--fg-base)" }}>
                4. Les sites e-commerce sont particulierement exposes
              </p>
              <p className="mt-2">
                Les{" "}
                <Link href="/services/e-commerce" className="underline" style={{ color: "var(--accent)" }}>
                  boutiques en ligne
                </Link>{" "}
                depassant la micro-entreprise sont clairement dans le perimetre :
                l&apos;ensemble du parcours (recherche produits, fiche produit,
                panier, paiement, suivi de commande...) doit etre accessible.
                Sinon, le site peut etre considere comme non conforme et expose a
                des poursuites. Les{" "}
                <Link href="/services/site-internet-wordpress" className="underline" style={{ color: "var(--accent)" }}>
                  sites WordPress
                </Link>{" "}
                comme les applications custom sont concernes.
              </p>
            </div>
          </div>

          <p className="mt-5 text-xs sm:text-sm" style={{ color: "var(--fg-subtle)" }}>
            Important : cette page ne remplace pas un avis juridique, mais elle
            vous donne le niveau d&apos;urgence et l&apos;ampleur des enjeux.
          </p>
        </div>
      </section>

      {/* ── LES CRITERES WCAG QUE J'AUDITE ET CORRIGE ── */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
              Les criteres WCAG que j&apos;audite et corrige
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
              Les WCAG 2.2 s&apos;articulent autour de 4 principes. Voici ce que
              je verifie et corrige sur chaque projet, que ce soit un audit
              accessibilite complet ou une intervention ciblee.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 text-sm" style={{ color: "var(--fg-muted)" }}>
            {/* Perceptible */}
            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <h3 className="text-sm sm:text-base font-semibold" style={{ color: "var(--fg-base)" }}>
                Perceptible : contrastes, alt text, sous-titrage
              </h3>
              <p className="mt-2">
                Ratio de <strong>contraste 4.5:1</strong> minimum (AA) entre texte
                et arriere-plan. Textes alternatifs (<code>alt</code>) pertinents
                sur chaque image. Transcriptions et <strong>sous-titrage</strong>{" "}
                pour les contenus audio et video. Adaptation pour le{" "}
                <strong>daltonisme</strong> (information non vehiculee uniquement
                par la couleur). Tests avec les lecteurs d&apos;ecran{" "}
                <strong>NVDA</strong>, <strong>VoiceOver</strong> et{" "}
                <strong>JAWS</strong>.
              </p>
            </article>

            {/* Utilisable */}
            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <h3 className="text-sm sm:text-base font-semibold" style={{ color: "var(--fg-base)" }}>
                Utilisable : navigation clavier, focus-visible
              </h3>
              <p className="mt-2">
                Tous les elements interactifs doivent etre atteignables et
                utilisables au <strong>clavier seul</strong>. J&apos;implemente{" "}
                <strong>focus-visible</strong> pour un indicateur de focus clair,{" "}
                <strong>skip-to-content</strong> pour sauter la navigation, et je
                verifie l&apos;ordre logique de tabulation. Pas de piege clavier,
                pas de delai impose sans alternative.
              </p>
            </article>

            {/* Comprehensible */}
            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <h3 className="text-sm sm:text-base font-semibold" style={{ color: "var(--fg-base)" }}>
                Comprehensible : formulaires, messages d&apos;erreur
              </h3>
              <p className="mt-2">
                Labels explicites sur chaque champ, messages d&apos;erreur clairs
                et associes au champ concerne, suggestions de correction. Langue de
                la page declaree dans le HTML. Navigation coherente et previsible
                sur l&apos;ensemble du site. Formulaires de{" "}
                <Link href="/services/e-commerce" className="underline" style={{ color: "var(--accent)" }}>
                  tunnel de commande
                </Link>{" "}
                particulierement audites.
              </p>
            </article>

            {/* Robuste */}
            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <h3 className="text-sm sm:text-base font-semibold" style={{ color: "var(--fg-base)" }}>
                Robuste : ARIA, semantique HTML, compatibilite
              </h3>
              <p className="mt-2">
                Utilisation correcte des roles <strong>ARIA</strong> :{" "}
                <code>aria-label</code>, <code>aria-expanded</code>,{" "}
                <code>aria-live</code>, <code>role</code>. Structure HTML5
                semantique (<code>header</code>, <code>nav</code>,{" "}
                <code>main</code>, <code>footer</code>). Validation du parsing
                pour garantir la compatibilite avec tous les agents utilisateurs et
                les technologies d&apos;assistance. Approche que j&apos;applique
                aussi sur mes{" "}
                <Link href="/services/site-web-react-next" className="underline" style={{ color: "var(--accent)" }}>
                  projets React / Next.js
                </Link>
                .
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── MON APPROCHE : AUDIT, CORRECTIONS ET DECLARATION ── */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
              Mon approche : audit, corrections et declaration
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
              L&apos;idee n&apos;est pas de viser la perfection en un jour, mais de{" "}
              <span className="font-semibold">
                reduire rapidement vos risques legaux
              </span>{" "}
              et d&apos;ameliorer l&apos;experience pour vos vrais utilisateurs.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 text-sm" style={{ color: "var(--fg-muted)" }}>
            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <h3 className="text-sm sm:text-base font-semibold" style={{ color: "var(--fg-base)" }}>
                1. Audit accessibilite (etat des lieux)
              </h3>
              <p className="mt-2">
                Analyse de vos pages cles (accueil, services, formulaire, tunnel de
                commande...) selon les criteres WCAG 2.2 AA et le RGAA 4.1. Tests
                manuels (clavier, lecteurs d&apos;ecran NVDA / VoiceOver) + outils
                automatises (axe, Lighthouse). Rapport simple : problemes critiques,
                impacts et priorites.
              </p>
            </article>

            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <h3 className="text-sm sm:text-base font-semibold" style={{ color: "var(--fg-base)" }}>
                2. Corrections & mise en conformite
              </h3>
              <p className="mt-2">
                Feuille de route en plusieurs etapes : corrections rapides
                (contrastes, alt text, aria-label), ameliorations UX (focus-visible,
                skip-to-content, navigation clavier), mises a jour de code
                (structure semantique, ARIA, formulaires). Compatible{" "}
                <Link href="/services/site-internet-wordpress" className="underline" style={{ color: "var(--accent)" }}>
                  WordPress
                </Link>
                , React, Next.js ou tout autre stack.
              </p>
            </article>

            <article className="rounded-2xl p-5" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <h3 className="text-sm sm:text-base font-semibold" style={{ color: "var(--fg-base)" }}>
                3. Declaration d&apos;accessibilite & suivi
              </h3>
              <p className="mt-2">
                Redaction de votre page "Declaration d&apos;accessibilite"
                conforme (niveau atteint, contenus non conformes, plan
                d&apos;amelioration, contact). Documentation de ce qui est fait, de
                ce qui reste a ameliorer et suivi dans le temps pour maintenir la
                conformite WCAG 2.2 AA voire AAA.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight mb-6">
            Questions frequentes sur l&apos;accessibilite web
          </h2>

          <div className="space-y-5 text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            <details className="rounded-2xl p-4 group" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <summary className="cursor-pointer font-semibold list-none" style={{ color: "var(--fg-base)" }}>
                Combien coute un audit accessibilite web ?
              </summary>
              <p className="mt-3">
                Le cout depend de la taille du site et du niveau de detail souhaite.
                Un audit flash sur 5 a 10 pages cles demarre generalement a partir
                de 800 €. Un audit complet WCAG 2.2 / RGAA 4.1 avec rapport
                detaille et plan de corrections se situe entre 1 500 et 4 000 €.{" "}
                <Link href="/contact" className="underline" style={{ color: "var(--accent)" }}>
                  Contactez-moi
                </Link>{" "}
                pour un devis adapte a votre situation.
              </p>
            </details>

            <details className="rounded-2xl p-4 group" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <summary className="cursor-pointer font-semibold list-none" style={{ color: "var(--fg-base)" }}>
                Quel est le delai pour rendre un site accessible ?
              </summary>
              <p className="mt-3">
                Pour un site vitrine de 10 a 20 pages, comptez 2 a 4 semaines
                (audit + corrections). Pour un e-commerce complexe ou une
                application web, cela peut aller de 4 a 12 semaines selon le nombre
                de parcours a traiter. L&apos;important est de commencer par les
                corrections les plus critiques : celles qui bloquent reellement les
                utilisateurs de lecteurs d&apos;ecran et la navigation clavier.
              </p>
            </details>

            <details className="rounded-2xl p-4 group" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <summary className="cursor-pointer font-semibold list-none" style={{ color: "var(--fg-base)" }}>
                Une PME est-elle obligee de se conformer a l&apos;EAA ?
              </summary>
              <p className="mt-3">
                L&apos;EAA exempte les <strong>micro-entreprises</strong> (moins de
                10 salaries ET chiffre d&apos;affaires annuel inferieur a 2 millions
                d&apos;euros). Au-dela de ce seuil, oui, les PME proposant des
                services numeriques couverts par la directive (e-commerce, services
                bancaires, transports, telecom...) sont concernees. Meme si vous
                etes exempte, l&apos;accessibilite reste un avantage concurrentiel
                et un signal positif pour le{" "}
                <Link href="/services/seo" className="underline" style={{ color: "var(--accent)" }}>
                  referencement naturel
                </Link>
                .
              </p>
            </details>

            <details className="rounded-2xl p-4 group" style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}>
              <summary className="cursor-pointer font-semibold list-none" style={{ color: "var(--fg-base)" }}>
                Quelle difference entre le RGAA et les WCAG ?
              </summary>
              <p className="mt-3">
                Les <strong>WCAG 2.2</strong> (Web Content Accessibility
                Guidelines) sont le standard international publie par le W3C. Le{" "}
                <strong>RGAA 4.1</strong> est le referentiel francais : il traduit
                les criteres WCAG en tests concrets et actionables, adaptes au
                contexte reglementaire francais. En Belgique, on se base directement
                sur la norme europeenne <strong>EN 301 549</strong> qui repose elle
                aussi sur les WCAG. Dans la pratique, auditer selon les WCAG 2.2 AA
                couvre les exigences des deux cadres.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ── ASIDE : LIENS COMPLEMENTAIRES ── */}
      <aside className="mx-auto max-w-5xl px-4 pb-6 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.12em] mb-3" style={{ color: "var(--fg-subtle)" }}>
          Services complementaires
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/services/seo", label: "Optimisation SEO" },
            { href: "/services/site-web-react-next", label: "Site React & Next.js" },
            { href: "/services/site-internet-wordpress", label: "Site WordPress" },
            { href: "/services/e-commerce", label: "E-commerce" },
            { href: "/services/site-vitrine", label: "Site vitrine" },
            { href: "/portfolio", label: "Voir le portfolio" },
            { href: "/blog", label: "Blog" },
            { href: "/faq", label: "Questions frequentes" },
            { href: "/me", label: "A propos" },
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

      {/* ── CTA FINAL ── */}
      <section className="pb-16 pt-8 sm:pb-20 sm:pt-10">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Votre site est-il conforme a l&apos;EAA et aux WCAG 2.2 ?
          </h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Dites-moi quel type de site vous avez (
            <Link href="/services/site-vitrine" className="underline" style={{ color: "var(--accent)" }}>
              vitrine
            </Link>
            ,{" "}
            <Link href="/services/e-commerce" className="underline" style={{ color: "var(--accent)" }}>
              e-commerce
            </Link>
            , application), votre pays principal (Belgique, France...) et votre
            situation actuelle. On voit ensemble par ou commencer — audit
            accessibilite, corrections prioritaires ou declaration complete.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Lancer mon audit accessibilite web
            </Link>
          </div>
        </div>
        <ServicesSection />
      </section>

      {/* ── JSON-LD : @graph avec Service + FAQPage ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://www.stephanegamot.com/services/accessibilite#service",
                name: "Audit accessibilite web WCAG 2.2 & conformite EAA",
                description:
                  "Audit et mise en conformite accessibilite web : WCAG 2.2, RGAA 4.1, European Accessibility Act. Corrections ARIA, contrastes, navigation clavier, formulaires, declaration d'accessibilite.",
                provider: {
                  "@type": "ProfessionalService",
                  "@id": "https://www.stephanegamot.com/#business",
                  name: "Stephane Gamot",
                  url: "https://www.stephanegamot.com",
                },
                areaServed: [
                  { "@type": "Country", name: "Belgium" },
                  { "@type": "Country", name: "France" },
                ],
                serviceType: "Audit accessibilite web",
                url: "https://www.stephanegamot.com/services/accessibilite",
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.stephanegamot.com/services/accessibilite#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Combien coute un audit accessibilite web ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Un audit flash sur 5 a 10 pages cles demarre a partir de 800 euros. Un audit complet WCAG 2.2 / RGAA 4.1 avec rapport detaille et plan de corrections se situe entre 1 500 et 4 000 euros selon la taille du site.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Quel est le delai pour rendre un site accessible ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Pour un site vitrine de 10 a 20 pages, comptez 2 a 4 semaines (audit + corrections). Pour un e-commerce complexe, de 4 a 12 semaines selon le nombre de parcours a traiter.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Une PME est-elle obligee de se conformer a l'EAA ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "L'EAA exempte les micro-entreprises (moins de 10 salaries et CA inferieur a 2 millions d'euros). Au-dela, les PME proposant des services numeriques couverts par la directive sont concernees.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Quelle difference entre le RGAA et les WCAG ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Les WCAG 2.2 sont le standard international du W3C. Le RGAA 4.1 est le referentiel francais qui traduit les criteres WCAG en tests concrets. En Belgique, on se base sur la norme EN 301 549 qui repose aussi sur les WCAG. Auditer selon les WCAG 2.2 AA couvre les exigences des deux cadres.",
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
