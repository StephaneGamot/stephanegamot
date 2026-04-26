import type { Metadata } from "next";
import Link from "next/link";
import { ServicesSection } from "@/components/services/ServicesSection";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

export const metadata: Metadata = {
  title: "Création site WordPress sur mesure — Stéphane Gamot",
  description:
    "Création site WordPress rapide, sécurisé et optimisé SEO par un développeur freelance en Belgique. Devis gratuit sous 48 h, contactez-moi.",
  metadataBase: new URL("https://www.stephanegamot.com"),
  alternates: { canonical: "https://www.stephanegamot.com/services/site-internet-wordpress" },
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
        url: "/Images/og/office-workstation.webp",
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
    images: ["/Images/og/office-workstation.webp"],
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
        provider: {
          "@id": "https://www.stephanegamot.com/#business",
        },
        areaServed: { "@type": "Country", name: "Belgium" },
        url: "https://www.stephanegamot.com/services/site-internet-wordpress",
        serviceType: "Création de site WordPress",
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
            à une base de données MySQL, il offre une souplesse que peu de CMS peuvent égaler.
            Voici pourquoi il reste un choix pertinent pour un{" "}
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
                pour plus de details sur les tarifs.
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
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Lancer mon projet WordPress
            </Link>
          </div>
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
