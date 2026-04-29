"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import PortFolioAstro from "@/public/Images/portfolio/portfolio-astro.webp"
import PortFolioBoutique from "@/public/Images/portfolio/portfolio-boutique.webp"
import PortFolioCorse from "@/public/Images/portfolio/portfolio-corse.webp"
import PortFolioCourcelles from "@/public/Images/portfolio/portfolio-courcelles.webp"
import PortFolioEyes from "@/public/Images/portfolio/portfolio-eyes.webp"
import PortFolioGameOn from "@/public/Images/portfolio/portfolio-gameon.webp"
import PortFolioJaponais from "@/public/Images/portfolio/portfolio-japonais.webp"
import PortFolioKanap from "@/public/Images/portfolio/portfolio-kanap.webp"
import PortFolioKarate from "@/public/Images/portfolio/portfolio-karate.webp"
import PortFolioKaza from "@/public/Images/portfolio/portfolio-kaza.webp"
import PortFolioLvbde from "@/public/Images/portfolio/portfolio-lvbde.webp"
import PortFolioMinao from "@/public/Images/portfolio/portfolio-minao.webp"
import PortFolioOlympique from "@/public/Images/portfolio/portfolio-olympique.webp"
import PortFolioRestaurants from "@/public/Images/portfolio/portfolio-restaurants.webp"
import PortFolioSportSee from "@/public/Images/portfolio/Portfolio-sportsee.webp"
import PortFolioTarot from "@/public/Images/portfolio/portfolio-tarot.webp"
import PortFolioTraiteur from "@/public/Images/portfolio/portfolio-traiteur.webp"

type CategoryId = "all" | "wellness" | "ecommerce" | "saas" | "branding";

type ProjectMetric = {
  label: string;
  value: string;
};

type Project = {
  id: number;
  title: string;
  client: string;
  description: string;
  category: CategoryId;
  techs: string[];
  link?: string;
  highlight?: string;
  metrics?: ProjectMetric[];
  imageSrc: StaticImageData;
  imageAlt: string;
};

const categories: { id: CategoryId; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "wellness", label: "Website" },
  { id: "ecommerce", label: "Ecommerce" },
  { id: "saas", label: "App" },
  { id: "branding", label: "Vitrine" },
];

const projects: Project[] = [
  {
    id: 1,
    title: "La Voie du Bien-Être",
    client: "Cabinet de shiatsu & massages",
    description:
      "Site chaleureux et apaisant, pensé pour la prise de rendez-vous, le SEO local et une expérience fluide sur mobile.",
    category: "wellness",
    techs: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "next-intl"],
    link: "https://lavoiedubienetre.be",
    highlight:
      "Présence locale renforcée à Halle & Bruxelles grâce à un contenu optimisé et une structure claire.",
    metrics: [
      { label: "Lighthouse", value: "98/100" },
      { label: "Chargement", value: "0.8s" },
      { label: "Trafic organique", value: "+210%" },
    ],
    imageSrc: PortFolioLvbde,
    imageAlt:
      "Interface du site La Voie du Bien-Être, cabinet de shiatsu et massages à Halle.",
  },
  {
    id: 2,
    title: "Minao Asian Food",
    client: "Restaurant asiatique / take-away",
    description:
      "Plateforme de commande en ligne avec menu dynamique, paiement Stripe et parcours ultra optimisé pour le mobile.",
    category: "ecommerce",
    techs: ["Next.js", "Stripe", "React", "Node.js"],
    highlight:
      "Permet de passer une commande complète en quelques écrans, depuis un smartphone.",
    metrics: [
      { label: "Lighthouse", value: "95/100" },
      { label: "Conversion", value: "+45%" },
      { label: "Panier moyen", value: "+18%" },
    ],
    imageSrc: PortFolioMinao,
    imageAlt: "Maquette du site de commande en ligne Minao Asian Food.",
  },
  {
    id: 3,
    title: "Corsica-Corse – Locations",
    client: "Gîtes & locations saisonnières en Corse",
    description:
      "Site vitrine immersif pour présenter gîtes, photos plein écran et demandes de réservation personnalisées.",
    category: "branding",
    techs: ["WordPress", "Elementor", "SEO", "Performance"],
    highlight:
      "Accent mis sur l'émotion, la lumière et le territoire pour donner envie de réserver.",
    metrics: [
      { label: "Lighthouse", value: "92/100" },
      { label: "Réservations", value: "+35%" },
      { label: "Taux de rebond", value: "-28%" },
    ],
    imageSrc: PortFolioCorse,
    imageAlt:
      "Page d'accueil du site de locations saisonnières Corsica-Corse, avec paysages corses.",
  },
  {
    id: 4,
    title: "Centre bien-être & massages",
    client: "Espace bien-être à Courcelles",
    description:
      "Maquette de site pour un centre de bien-être : massages, soins relaxants et ambiance douce.",
    category: "wellness",
    techs: ["Next.js", "Tailwind", "SEO"],
    highlight:
      "Pensé pour rassurer et mettre en confiance dès la première visite sur le site.",
    metrics: [
      { label: "Lighthouse", value: "96/100" },
      { label: "Temps mobile", value: "1.1s" },
      { label: "Contacts", value: "+40%" },
    ],
    imageSrc: PortFolioCourcelles,
    imageAlt:
      "Interface d'un site pour centre de bien-être avec ambiance relaxante.",
  },
  {
    id: 5,
    title: "Studio créatif & identité",
    client: "Studio digital & design",
    description:
      "Landing page orientée branding avec typographie forte, visuels marquants et storytelling centré sur la valeur.",
    category: "branding",
    techs: ["Next.js", "Framer Motion", "Tailwind"],
    highlight:
      "Met en avant la personnalité du studio plutôt qu'une simple liste de prestations.",
    metrics: [
      { label: "Lighthouse", value: "94/100" },
      { label: "Engagement", value: "+52%" },
      { label: "Temps/page", value: "2m45" },
    ],
    imageSrc: PortFolioEyes,
    imageAlt:
      "Page d'accueil d'un studio créatif avec visuel fort et design immersif.",
  },
  {
    id: 6,
    title: "AstraLovers / Synastria",
    client: "Concept d'app de compatibilité amoureuse",
    description:
      "Prototype d'application basée sur l'astrologie, avec onboarding ludique, profils et scénarios d'affinités.",
    category: "saas",
    techs: ["Next.js", "TypeScript", "Design System", "API"],
    highlight:
      "Une expérience orientée jeu, curiosité et premières phrases pour briser la glace.",
    metrics: [
      { label: "Lighthouse", value: "93/100" },
      { label: "Onboarding", value: "89%" },
      { label: "Rétention J7", value: "62%" },
    ],
    imageSrc: PortFolioAstro,
    imageAlt:
      "Interface cosmique de l'application de compatibilité amoureuse AstraLovers.",
  },
  {
    id: 7,
    title: "Dashboard sportif – SportSee",
    client: "Suivi de performances sportives",
    description:
      "Dashboard de suivi sportif avec graphiques, objectifs et progression détaillée pour chaque utilisateur.",
    category: "saas",
    techs: ["React", "Recharts", "API", "TypeScript"],
    highlight:
      "Met la data au service de la motivation avec une visualisation claire des progrès.",
    metrics: [
      { label: "Lighthouse", value: "91/100" },
      { label: "Temps rendu", value: "0.9s" },
      { label: "Satisfaction", value: "4.7/5" },
    ],
    imageSrc: PortFolioSportSee,
    imageAlt:
      "Dashboard analytique SportSee pour le suivi des performances sportives.",
  },
  {
    id: 8,
    title: "GameOn Analytics",
    client: "Plateforme d'événements sportifs",
    description:
      "Dashboard d'inscriptions et de statistiques pour une plateforme d'événements, tournois et compétitions.",
    category: "saas",
    techs: ["React", "TypeScript", "API"],
    highlight:
      "Organisation des données pour que les organisateurs visualisent rapidement l'essentiel.",
    metrics: [
      { label: "Lighthouse", value: "90/100" },
      { label: "Inscriptions", value: "+60%" },
      { label: "Taux d'erreur", value: "-75%" },
    ],
    imageSrc: PortFolioGameOn,
    imageAlt:
      "Interface de dashboard GameOn pour la gestion d'événements sportifs.",
  },
  {
    id: 9,
    title: "Comité Olympique – Dashboard",
    client: "Fédération / comité sport",
    description:
      "Interface analytique inspirée de cas réels, dédiée au suivi des athlètes et des indicateurs clés.",
    category: "saas",
    techs: ["React", "Recharts", "API", "UX"],
    highlight:
      "Pensé pour rester lisible même avec beaucoup de données sur un seul écran.",
    metrics: [
      { label: "Lighthouse", value: "89/100" },
      { label: "Données/écran", value: "+120%" },
      { label: "Temps accès", value: "-40%" },
    ],
    imageSrc: PortFolioOlympique,
    imageAlt:
      "Dashboard inspiré d'un comité olympique pour le suivi des performances.",
  },
  {
    id: 10,
    title: "Boutique tendance",
    client: "Boutique de mode & accessoires",
    description:
      "Maquette de boutique en ligne pour une marque fashion, avec univers visuel fort et mises en avant produit.",
    category: "ecommerce",
    techs: ["React", "Tailwind", "UX", "Responsive"],
    highlight:
      "Pensée pour mettre en avant quelques produits phares plutôt qu'un catalogue interminable.",
    metrics: [
      { label: "Lighthouse", value: "94/100" },
      { label: "Ajouts panier", value: "+38%" },
      { label: "Taux rebond", value: "-22%" },
    ],
    imageSrc: PortFolioBoutique,
    imageAlt:
      "Page d'accueil d'une boutique en ligne tendance pour mode et accessoires.",
  },
  {
    id: 11,
    title: "Kanap – E-commerce mobilier",
    client: "Vente de canapés & mobilier",
    description:
      "Site e-commerce d'entraînement autour de la vente de canapés, avec fiches produits détaillées.",
    category: "ecommerce",
    techs: ["JavaScript", "API", "Responsive"],
    highlight:
      "Travail particulier sur la fiche produit et la mise en avant des visuels.",
    metrics: [
      { label: "Lighthouse", value: "88/100" },
      { label: "Fiche produit", value: "+55%" },
      { label: "Temps charg.", value: "1.3s" },
    ],
    imageSrc: PortFolioKanap,
    imageAlt: "Page produit d'un site e-commerce dédié aux canapés.",
  },
  {
    id: 12,
    title: "Kaza – Immobilier",
    client: "Plateforme immobilière",
    description:
      "Interface de type portail immobilier : annonces, filtres et mise en avant des biens.",
    category: "branding",
    techs: ["React", "API", "UX"],
    highlight:
      "Organisation de l'information pour rendre la recherche de biens simple et agréable.",
    metrics: [
      { label: "Lighthouse", value: "91/100" },
      { label: "Recherches", value: "+68%" },
      { label: "Taux rebond", value: "-31%" },
    ],
    imageSrc: PortFolioKaza,
    imageAlt:
      "Page d'accueil d'un portail immobilier moderne avec listing de biens.",
  },
  {
    id: 13,
    title: "Restaurant japonais",
    client: "Restaurant / sushi bar",
    description:
      "Maquette de site pour un restaurant japonais : ambiance, carte et mise en avant des spécialités.",
    category: "ecommerce",
    techs: ["React", "Tailwind", "UX"],
    highlight:
      "Centré sur l'ambiance et les visuels pour donner faim dès la première visite.",
    metrics: [
      { label: "Lighthouse", value: "93/100" },
      { label: "Réservations", value: "+42%" },
      { label: "Temps/page", value: "1m50" },
    ],
    imageSrc: PortFolioJaponais,
    imageAlt:
      "Interface d'un site de restaurant japonais mettant en avant les plats.",
  },
  {
    id: 14,
    title: "Plateforme multi-restaurants",
    client: "Portail de restauration",
    description:
      "Portail proposant plusieurs restaurants, avec navigation claire entre les différentes cartes et offres.",
    category: "ecommerce",
    techs: ["Next.js", "TypeScript", "Tailwind"],
    highlight:
      "Pensé pour évoluer vers une plateforme multi-enseignes avec logique de menu et de commande.",
    metrics: [
      { label: "Lighthouse", value: "90/100" },
      { label: "Commandes", value: "+48%" },
      { label: "Panier moyen", value: "+25%" },
    ],
    imageSrc: PortFolioRestaurants,
    imageAlt:
      "Interface d'un portail multi-restaurants avec plusieurs cartes disponibles.",
  },
  {
    id: 15,
    title: "Site de tarot & guidance",
    client: "Praticienne en tarot & développement personnel",
    description:
      "Maquette de site pour séances de tarot, guidance et accompagnement, avec univers visuel symbolique.",
    category: "wellness",
    techs: ["WordPress", "Elementor", "SEO"],
    highlight:
      "Univers visuel travaillé pour inspirer confiance sans tomber dans le cliché.",
    imageSrc: PortFolioTarot,
    imageAlt:
      "Page d'accueil d'un site de tarot et de développement personnel.",
  },
  {
    id: 16,
    title: "Traiteur & événementiel",
    client: "Service traiteur haut de gamme",
    description:
      "Site vitrine élégant pour un traiteur : menus, photos, événements et demandes de devis.",
    category: "branding",
    techs: ["Angular", "Java", "MySql"],
    highlight:
      "Positionnement premium avec une grande importance accordée aux visuels et à la lisibilité des offres.",
    imageSrc: PortFolioTraiteur,
    imageAlt: "Site vitrine d'un traiteur haut de gamme pour événements.",
  },
{
  id: 17,
  title: "Club de karaté – Site vitrine",
  client: "Association sportive",
  description:
    "Site vitrine pour un club de karaté : horaires, cours, professeurs et ambiance du dojo.",
  category: "branding",
  techs: ["Next.js", "React", "UI Design"],
  highlight:
    "Mise en avant de l'esprit du dojo et des informations pratiques pour les futurs membres.",
  imageSrc: PortFolioKarate,
  imageAlt:
    "Page d'accueil d'un site de club de karaté avec visuel de pratiquants en action.",
},

];

function labelFromCategory(category: CategoryId): string {
  switch (category) {
    case "wellness":
      return "Bien-être";
    case "ecommerce":
      return "Ecommerce";
    case "saas":
      return "App";
    case "branding":
      return "Vitrine";
    default:
      return "Projet";
  }
}

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(pointer: coarse)");
      setIsTouch(mq.matches);
    }
  }, []);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 35, stiffness: 120, mass: 1 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="sr-only">
            Portfolio – Réalisations de sites web, e-commerce et applications
          </h1>
          <p className="section-label">
            Réalisations
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: "var(--fg-base)" }}>
            Un portfolio centré sur{" "}
            <span style={{ color: "var(--accent)" }}>
              l'expérience
            </span>{" "}
            et les résultats.
          </h2>
          <p className="mt-4 text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
            Des sites bien-être, e-commerce et projets plus créatifs, tous
            pensés pour être élégants, rapides et orientés conversion.
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 150, mass: 0.8 }}
        >
          <motion.div
            layout
            className="inline-flex rounded-full p-1 backdrop-blur"
            style={{ background: "var(--surface-2)" }}
          >
            {categories.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className="relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:text-sm"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "var(--accent-muted)" }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </motion.div>
        </motion.div>

              {/* Grid des projets */}
        <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group portfolio-card relative flex flex-col overflow-hidden rounded-2xl border p-4 sm:p-5 transition-colors duration-300"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface-1)",
                }}
              >
                {/* Image */}
                <div
                  className="mb-3 overflow-hidden rounded-xl border"
                  style={{ borderColor: "var(--border)", background: "var(--surface-1)" }}
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    />
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(8,9,12,0.5), transparent 40%)" }}
                    />
                  </div>
                </div>

                {/* Texte */}
                <div className="flex flex-1 flex-col">
            <div className="flex flex-col gap-1.5">
  {/* Pill catégorie en premier */}
  <span
    className="self-end shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide whitespace-nowrap"
    style={{
      borderColor: "var(--border)",
      background: "var(--surface-1)",
      color: "var(--fg-subtle)",
    }}
  >
    {labelFromCategory(project.category)}
  </span>

  {/* Titre ensuite */}
  <h3 className="text-base !mt-0 font-semibold sm:text-lg" style={{ color: "var(--fg-base)" }}>
    {project.title}
  </h3>

  {/* Client en dessous */}
  <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--accent)" }}>
    {project.client}
  </p>
</div>



                  <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                    {project.description}
                  </p>

                  {project.highlight && (
                    <p className="mt-2 text-xs" style={{ color: "var(--fg-muted)" }}>
                      {project.highlight}
                    </p>
                  )}

                  {project.metrics && project.metrics.length > 0 && (
                    <div
                      className="mt-3 flex flex-wrap gap-x-4 gap-y-1 rounded-lg px-3 py-2.5"
                      style={{ background: "var(--surface-2)" }}
                    >
                      {project.metrics.map((metric, i) => (
                        <span key={metric.label} className="inline-flex items-baseline gap-1.5 text-xs whitespace-nowrap">
                          <span className="font-semibold" style={{ color: "var(--accent)" }}>
                            {metric.value}
                          </span>
                          <span style={{ color: "var(--fg-subtle)" }}>
                            {metric.label}
                          </span>
                          {i < project.metrics!.length - 1 && (
                            <span className="ml-1.5" style={{ color: "var(--border)" }} aria-hidden="true">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border px-2.5 py-0.5 text-[11px] uppercase tracking-wide"
                        style={{
                          borderColor: "var(--border)",
                          background: "var(--surface-1)",
                          color: "var(--fg-subtle)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bouton en option */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-sm font-medium transition-opacity hover:opacity-80"
                    style={{ color: "var(--accent)" }}
                  >
                    Voir le projet
                    <span className="ml-1 inline-block text-base transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                )}
              </article>
            ))}
        </div>

      </div>
    </section>
  );
}
