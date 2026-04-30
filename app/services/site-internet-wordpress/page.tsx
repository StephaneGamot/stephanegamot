import type { Metadata } from "next";
import Link from "next/link";
import { ServicesSection } from "@/components/services/ServicesSection";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

export const metadata: Metadata = {
  title: "Création site WordPress sur mesure — Stéphane Gamot",
  description:
    "Création site WordPress rapide, sécurisé et optimisé SEO par un développeur freelance en Belgique. Devis gratuit sous 48 h, contactez-moi.",
  metadataBase: new URL("https://www.stephanegamot.com"),
  alternates: {
    canonical: "https://www.stephanegamot.com/services/site-internet-wordpress",
    languages: {
      "fr-BE": "https://www.stephanegamot.com/services/site-internet-wordpress",
      "fr-FR": "https://www.stephanegamot.com/services/site-internet-wordpress",
      "x-default": "https://www.stephanegamot.com/services/site-internet-wordpress",
    },
  },
  keywords: [
    "création site WordPress",
    "WordPress sur mesure",
    "développeur WordPress Belgique",
    "site WordPress rapide",
    "thème WordPress",
    "maintenance WordPress",
    "WooCommerce",
  ],
  robots: { index: true, follow: true },
  authors: [{ name: "Stéphane Gamot", url: "https://www.stephanegamot.com/me" }],
  openGraph: {
    title: "Création site WordPress sur mesure — Stéphane Gamot",
    description:
      "Développeur WordPress freelance en Belgique : site vitrine, blog ou boutique WooCommerce. Rapide, sécurisé, optimisé SEO.",
    url: "https://www.stephanegamot.com/services/site-internet-wordpress",
    siteName: "Stéphane Gamot",
    type: "website",
    locale: "fr_BE",
    images: [
      {
        url: "https://www.stephanegamot.com/Images/og/office-workstation.webp",
        width: 1200,
        height: 630,
        alt: "Création site WordPress professionnel par Stéphane Gamot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Création site WordPress sur mesure — Stéphane Gamot",
    description:
      "Site WordPress rapide, sécurisé et facile à gérer. Développeur freelance en Belgique. Devis gratuit sous 48 h.",
    images: ["https://www.stephanegamot.com/Images/og/office-workstation.webp"],
  },
};

export default function WordPressServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.stephanegamot.com/services/site-internet-wordpress/#service",
        name: "Création site WordPress",
        description:
          "Création de sites WordPress sur mesure : vitrine, blog ou boutique WooCommerce. Rapide, sécurisé, optimisé SEO et facile à gérer.",
        image: "https://www.stephanegamot.com/Images/og/office-workstation.webp",
        provider: {
          "@id": "https://www.stephanegamot.com/#business",
        },
        areaServed: { "@type": "Country", name: "Belgium" },
        url: "https://www.stephanegamot.com/services/site-internet-wordpress",
        serviceType: "Création de site WordPress",
        offers: [
          {
            "@type": "Offer",
            name: "Site vitrine WordPress",
            price: "1500",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "1500",
              priceCurrency: "EUR",
              unitText: "projet",
            },
          },
          {
            "@type": "Offer",
            name: "Site WordPress pro",
            price: "3500",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "3500",
              priceCurrency: "EUR",
              unitText: "projet",
            },
          },
          {
            "@type": "Offer",
            name: "Site e-commerce WordPress",
            price: "5000",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "5000",
              priceCurrency: "EUR",
              unitText: "projet",
            },
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
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            author: { "@type": "Person", name: "Claire Delmas" },
            datePublished: "2025-03-15",
            reviewBody: "Site rapide, esthétique et très propre techniquement. Impact immédiat sur nos leads et notre visibilité SEO.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.stephanegamot.com/services/site-internet-wordpress/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Combien coûte la création d'un site WordPress sur mesure ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Le tarif dépend de la complexité du projet. Un site vitrine WordPress démarre généralement autour de 1 500 € et peut évoluer selon le nombre de pages, les fonctionnalités (WooCommerce, multilingue, réservation) et le niveau de personnalisation du thème.",
            },
          },
          {
            "@type": "Question",
            name: "Combien de temps faut-il pour créer un site WordPress ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "En moyenne, comptez entre 3 et 6 semaines pour un site vitrine WordPress complet. Un projet e-commerce avec WooCommerce peut prendre 6 à 10 semaines selon le catalogue produits et les intégrations nécessaires.",
            },
          },
          {
            "@type": "Question",
            name: "Pourquoi choisir WordPress plutôt qu'un autre CMS ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "WordPress propulse plus de 40 % du web mondial. Son écosystème de plugins (Yoast SEO, WooCommerce, Elementor), sa communauté active et sa flexibilité en font le choix idéal pour les PME et indépendants qui veulent garder la main sur leur contenu.",
            },
          },
          {
            "@type": "Question",
            name: "Proposez-vous la maintenance WordPress après la mise en ligne ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui. Je propose un contrat de maintenance WordPress qui inclut les mises à jour du coeur, des plugins et du thème, les sauvegardes automatiques, la surveillance de sécurité et un support technique réactif.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.stephanegamot.com" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.stephanegamot.com/#services" },
          { "@type": "ListItem", position: 3, name: "WordPress", item: "https://www.stephanegamot.com/services/site-internet-wordpress" },
        ],
      },
      {
        "@type": "HowTo",
        "@id": "https://www.stephanegamot.com/services/site-internet-wordpress/#howto",
        name: "Comment je crée votre site WordPress sur mesure",
        description:
          "Les 4 étapes de mon processus de création de site WordPress professionnel.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Thème WordPress sur mesure",
            text: "Développement d'un thème WordPress adapté à votre identité visuelle, avec un code propre, léger et conforme aux standards d'accessibilité.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Sécurité et sauvegardes",
            text: "Mise en place du certificat SSL/HTTPS, protection brute-force, pare-feu applicatif et sauvegardes automatiques quotidiennes.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Optimisation vitesse et performance",
            text: "Mise en cache, compression d'images, CDN Cloudflare, lazy loading pour un site WordPress rapide et bien classé sur Google.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Formation à la prise en main",
            text: "Session de formation personnalisée pour maîtriser l'ajout de contenu, la gestion des menus et les bonnes pratiques de publication.",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Breadcrumb items={[{ label: "Services", href: "/#services" }, { label: "WordPress" }]} />

      {/* HERO */}
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
            <span style={{ color: "var(--accent)" }}>WordPress</span> sur mesure
            en Belgique
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Vous cherchez un partenaire fiable pour la <strong>création site WordPress</strong> de
            votre entreprise ? Trop de freelances livrent des sites lents, mal sécurisés, impossibles
            à modifier sans assistance technique permanente.
          </p>
          <p className="mt-2 max-w-xl text-sm sm:text-base" style={{ color: "var(--fg-subtle)" }}>
            Je vous livre un{" "}
            <span className="font-semibold" style={{ color: "var(--fg-base)" }}>
              site WordPress rapide, sécurisé et autonome
            </span>{" "}
            : vous gérez vos contenus seul, sans dépendre d&rsquo;un développeur pour chaque virgule.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Demander un devis WordPress
            </Link>
            <span className="text-xs sm:text-sm" style={{ color: "var(--fg-subtle)" }}>
              Réponse sous 48 h, devis gratuit.
            </span>
          </div>
          <div className="mt-3">
            <Link
              href="/services/tarifs"
              className="text-sm font-medium underline underline-offset-2 transition-colors"
              style={{ color: "var(--accent)" }}
            >
              Voir les tarifs →
            </Link>
          </div>
        </div>
      </section>

      {/* POURQUOI WORDPRESS */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Pourquoi choisir WordPress pour votre site professionnel
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            WordPress propulse plus de 40 % des sites dans le monde. Construit en PHP et adossé
            à une base de données MySQL, il offre une souplesse que peu de CMS peuvent égaler —
            et{" "}
            <Link href="/blog/php-survivrait-il-sans-wordpress" style={{ color: "var(--accent)" }}>
              PHP reste un langage solide bien au-delà de WordPress
            </Link>
            . Voici pourquoi il reste un choix pertinent pour un{" "}
            <Link href="/services/site-vitrine" style={{ color: "var(--accent)" }}>
              site vitrine
            </Link>
            , un blog ou une boutique en ligne.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article
              className="rounded-2xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <h3 className="text-sm sm:text-base font-semibold">Autonomie editoriale totale</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Avec l&rsquo;editeur Gutenberg ou un page builder comme Elementor, vous modifiez
                vos textes, ajoutez des images et publiez des articles sans toucher une ligne de
                code. Votre site vous appartient vraiment.
              </p>
            </article>

            <article
              className="rounded-2xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <h3 className="text-sm sm:text-base font-semibold">Ecosysteme de plugins puissant</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Plus de 60 000 extensions couvrent tous les besoins : formulaire de contact,
                reservation, galerie photo, multilingue. Je selectionne uniquement les plugins
                fiables et maintenus pour eviter les conflits et la lenteur.
              </p>
            </article>

            <article
              className="rounded-2xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                SEO natif avec Yoast SEO ou RankMath
              </h3>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                WordPress est naturellement bien structure pour le{" "}
                <Link href="/services/seo" style={{ color: "var(--accent)" }}>
                  referencement naturel
                </Link>
                . Couple a Yoast SEO ou RankMath, il vous guide dans l&rsquo;optimisation de chaque
                page : balises title, meta description, sitemap XML, schema markup.
              </p>
            </article>

            <article
              className="rounded-2xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <h3 className="text-sm sm:text-base font-semibold">
                WooCommerce pour vendre en ligne
              </h3>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Besoin d&rsquo;une{" "}
                <Link href="/services/e-commerce" style={{ color: "var(--accent)" }}>
                  boutique en ligne
                </Link>{" "}
                ? WooCommerce transforme WordPress en plateforme e-commerce complete : catalogue
                produits, panier, paiement securise, gestion des stocks et des commandes.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* RESULTATS CONCRETS */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Résultats concrets
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Quelques chiffres issus de projets WordPress récents.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "94/100", label: "Score Lighthouse", detail: "après optimisation WordPress" },
              { value: "+180 %", label: "Trafic organique", detail: "en 4 mois — site thérapeute" },
              { value: "1.2s", label: "Temps de chargement", detail: "sans plugins superflus" },
              { value: "Top 5", label: "Positions Google", detail: "sur 8 requêtes locales ciblées" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-5 text-center"
                style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
              >
                <p className="text-2xl font-bold sm:text-3xl" style={{ color: "var(--accent)" }}>
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold">{stat.label}</p>
                <p className="mt-1 text-xs" style={{ color: "var(--fg-muted)" }}>
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK & OUTILS */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Stack &amp; outils
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Les technologies et extensions que j&rsquo;utilise au quotidien pour livrer des sites WordPress performants.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "WordPress 6.x",
              "Elementor Pro",
              "WooCommerce",
              "Yoast SEO",
              "WP Rocket",
              "Imagify",
              "ACF Pro",
              "WPML",
              "Stripe",
              "Google Search Console",
              "Lighthouse CI",
              "FileZilla/SFTP",
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

      {/* CE QUE JE LIVRE */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Ce que je livre concretement
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Chaque projet de <strong>WordPress sur mesure</strong> suit un processus clair, du brief
            initial a la mise en ligne. Voici ce qui est inclus dans mes prestations.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article
              className="rounded-2xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <div
                className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg"
                style={{ background: "var(--accent-muted)" }}
                aria-hidden="true"
              >
                🎨
              </div>
              <h3 className="text-sm sm:text-base font-semibold">Theme WordPress sur mesure</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Pas de theme generique. Je developpe un <strong>theme WordPress</strong> adapte a
                votre identite visuelle, avec un code propre, leger et conforme aux standards
                d&rsquo;
                <Link href="/services/accessibilite" style={{ color: "var(--accent)" }}>
                  accessibilite
                </Link>
                . Themes legers type GeneratePress ou theme enfant personnalise selon le projet.
              </p>
            </article>

            <article
              className="rounded-2xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <div
                className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg"
                style={{ background: "var(--accent-muted)" }}
                aria-hidden="true"
              >
                🔒
              </div>
              <h3 className="text-sm sm:text-base font-semibold">Securite et sauvegardes</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Certificat SSL / HTTPS, protection contre les attaques brute-force, pare-feu
                applicatif, sauvegardes automatiques quotidiennes. La{" "}
                <strong>maintenance WordPress</strong> garantit un site toujours a jour et protege.
              </p>
            </article>

            <article
              className="rounded-2xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <div
                className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg"
                style={{ background: "var(--accent-muted)" }}
                aria-hidden="true"
              >
                ⚡
              </div>
              <h3 className="text-sm sm:text-base font-semibold">
                Optimisation vitesse et performance
              </h3>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                Un <strong>site WordPress rapide</strong> est essentiel pour le SEO et
                l&rsquo;experience utilisateur. Mise en cache, compression d&rsquo;images, CDN
                Cloudflare, lazy loading : chaque milliseconde compte pour Google et vos visiteurs.
              </p>
            </article>

            <article
              className="rounded-2xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <div
                className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg"
                style={{ background: "var(--accent-muted)" }}
                aria-hidden="true"
              >
                🎓
              </div>
              <h3 className="text-sm sm:text-base font-semibold">Formation a la prise en main</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                A la livraison, vous recevez une session de formation personnalisee (en visio ou sur
                place en Belgique) pour maitriser l&rsquo;ajout de contenu, la gestion des menus et
                les bonnes pratiques de publication.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* WORDPRESS OU NEXT.JS */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            WordPress ou Next.js — comment choisir
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Les deux technologies ont leur place. Le bon choix depend de votre projet, de votre
            budget et de votre besoin d&rsquo;autonomie.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--border)" }}>
                  <th className="py-3 pr-4 text-left font-semibold">Critere</th>
                  <th className="py-3 px-4 text-left font-semibold">WordPress</th>
                  <th className="py-3 pl-4 text-left font-semibold">Next.js / React</th>
                </tr>
              </thead>
              <tbody style={{ color: "var(--fg-muted)" }}>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <td className="py-3 pr-4 font-medium" style={{ color: "var(--fg-base)" }}>
                    Autonomie contenu
                  </td>
                  <td className="py-3 px-4">Interface admin intuitive, Gutenberg</td>
                  <td className="py-3 pl-4">Necessite un CMS headless ou du code</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <td className="py-3 pr-4 font-medium" style={{ color: "var(--fg-base)" }}>
                    Performance
                  </td>
                  <td className="py-3 px-4">Bonne avec optimisation et cache</td>
                  <td className="py-3 pl-4">Excellente nativement (SSG/SSR)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <td className="py-3 pr-4 font-medium" style={{ color: "var(--fg-base)" }}>
                    E-commerce
                  </td>
                  <td className="py-3 px-4">WooCommerce, complet et eprouve</td>
                  <td className="py-3 pl-4">Sur mesure, plus flexible mais plus couteux</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <td className="py-3 pr-4 font-medium" style={{ color: "var(--fg-base)" }}>
                    Budget
                  </td>
                  <td className="py-3 px-4">Accessible, large choix de themes</td>
                  <td className="py-3 pl-4">Plus eleve, developpement sur mesure</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium" style={{ color: "var(--fg-base)" }}>
                    Ideal pour
                  </td>
                  <td className="py-3 px-4">PME, independants, blogs, boutiques</td>
                  <td className="py-3 pl-4">Apps web, SaaS, sites haute performance</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm" style={{ color: "var(--fg-muted)" }}>
            Besoin d&rsquo;un site ultra-performant avec des interactions complexes ? Decouvrez mon
            service de{" "}
            <Link href="/services/site-web-react-next" style={{ color: "var(--accent)" }}>
              creation de site React / Next.js
            </Link>
            . Hesitant entre les deux ? Je vous conseille lors d&rsquo;un{" "}
            <Link href="/contact" style={{ color: "var(--accent)" }}>
              echange gratuit
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="divider" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Questions frequentes sur la creation site WordPress
          </h2>

          <div className="mt-6 space-y-3">
            <details
              className="rounded-2xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <summary className="cursor-pointer text-sm sm:text-base font-semibold">
                Combien coute la creation d&rsquo;un site WordPress sur mesure ?
              </summary>
              <p className="mt-3 text-sm" style={{ color: "var(--fg-muted)" }}>
                Le tarif depend de la complexite du projet. Un site vitrine WordPress demarre
                generalement autour de 1 500 € et peut evoluer selon le nombre de pages, les
                fonctionnalites (WooCommerce, multilingue, reservation) et le niveau de
                personnalisation du theme. Consultez ma page{" "}
                <Link href="/faq" style={{ color: "var(--accent)" }}>
                  FAQ generale
                </Link>{" "}
                pour plus de details sur les tarifs. Vous pouvez aussi lire mon article{" "}
                <Link href="/blog/combien-coute-un-site-web-en-2026-prix-pieges" style={{ color: "var(--accent)" }}>
                  Combien coûte un site web en 2026
                </Link>
                .
              </p>
            </details>

            <details
              className="rounded-2xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <summary className="cursor-pointer text-sm sm:text-base font-semibold">
                Combien de temps faut-il pour creer un site WordPress ?
              </summary>
              <p className="mt-3 text-sm" style={{ color: "var(--fg-muted)" }}>
                En moyenne, comptez entre 3 et 6 semaines pour un site vitrine WordPress complet. Un
                projet e-commerce avec WooCommerce peut prendre 6 a 10 semaines selon le catalogue
                produits et les integrations necessaires. Chaque etape est validee ensemble avant de
                passer a la suivante.
              </p>
            </details>

            <details
              className="rounded-2xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <summary className="cursor-pointer text-sm sm:text-base font-semibold">
                Pourquoi choisir WordPress plutot qu&rsquo;un autre CMS ?
              </summary>
              <p className="mt-3 text-sm" style={{ color: "var(--fg-muted)" }}>
                WordPress propulse plus de 40 % du web mondial. Son ecosysteme de plugins (Yoast
                SEO, WooCommerce, Elementor), sa communaute active et sa flexibilite en font le
                choix ideal pour les PME et independants qui veulent garder la main sur leur contenu.
                Pour en savoir plus sur mon approche, visitez ma page{" "}
                <Link href="/me" style={{ color: "var(--accent)" }}>
                  a propos
                </Link>
                .
              </p>
            </details>

            <details
              className="rounded-2xl p-5"
              style={{ border: "1px solid var(--border)", background: "var(--surface-1)" }}
            >
              <summary className="cursor-pointer text-sm sm:text-base font-semibold">
                Proposez-vous la maintenance WordPress apres la mise en ligne ?
              </summary>
              <p className="mt-3 text-sm" style={{ color: "var(--fg-muted)" }}>
                Oui. Je propose un contrat de maintenance WordPress qui inclut les mises a jour du
                coeur, des plugins et du theme, les sauvegardes automatiques, la surveillance de
                securite et un support technique reactif. Vous pouvez vous concentrer sur votre
                activite pendant que je veille au bon fonctionnement de votre site.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* SERVICES COMPLEMENTAIRES */}
      <aside className="mx-auto max-w-5xl px-4 pb-6 sm:px-6 lg:px-8">
        <p
          className="text-xs uppercase tracking-[0.12em] mb-3"
          style={{ color: "var(--fg-subtle)" }}
        >
          Services complementaires
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/services/seo", label: "Optimisation SEO" },
            { href: "/services/site-vitrine", label: "Site vitrine premium" },
            { href: "/services/site-web-react-next", label: "Site React / Next.js" },
            { href: "/services/e-commerce", label: "E-commerce" },
            { href: "/services/accessibilite", label: "Accessibilite web" },
            { href: "/services/tarifs", label: "Tarifs & formules" },
            { href: "/portfolio", label: "Voir le portfolio" },
            { href: "/blog", label: "Lire le blog" },
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
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Parlons de votre projet WordPress
          </h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Decrivez-moi votre activite et vos objectifs en quelques lignes. En tant que{" "}
            <strong>developpeur WordPress en Belgique</strong>, je vous reponds avec une proposition
            claire, un planning realiste et un tarif adapte a votre budget. Pas de jargon, pas
            d&rsquo;engagement.
          </p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Lancer mon projet WordPress
            </Link>
            <a
              href="https://wa.me/32477713193?text=Bonjour%20St%C3%A9phane%2C%20je%20souhaiterais%20discuter%20d%27un%20site%20WordPress."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline inline-flex items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
          <p className="mt-4 text-xs" style={{ color: "var(--fg-subtle)" }}>
            <Link href="/services/tarifs" className="underline underline-offset-2 transition-colors" style={{ color: "var(--fg-subtle)" }}>Voir les tarifs</Link>{" "}· Réponse sous 24 h · Devis gratuit
          </p>
        </div>
        <ServicesSection />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
