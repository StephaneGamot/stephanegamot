"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

type Project = {
  id: number;
  title: string;
  client: string;
  description: string;
  category: CategoryId;
  techs: string[];
  link?: string;
  highlight?: string;
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
      "Accent mis sur l’émotion, la lumière et le territoire pour donner envie de réserver.",
    imageSrc: PortFolioCorse,
    imageAlt:
      "Page d’accueil du site de locations saisonnières Corsica-Corse, avec paysages corses.",
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
    imageSrc: PortFolioCourcelles,
    imageAlt:
      "Interface d’un site pour centre de bien-être avec ambiance relaxante.",
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
      "Met en avant la personnalité du studio plutôt qu’une simple liste de prestations.",
    imageSrc: PortFolioEyes,
    imageAlt:
      "Page d’accueil d’un studio créatif avec visuel fort et design immersif.",
  },
  {
    id: 6,
    title: "AstraLovers / Synastria",
    client: "Concept d’app de compatibilité amoureuse",
    description:
      "Prototype d’application basée sur l’astrologie, avec onboarding ludique, profils et scénarios d’affinités.",
    category: "saas",
    techs: ["Next.js", "TypeScript", "Design System", "API"],
    highlight:
      "Une expérience orientée jeu, curiosité et premières phrases pour briser la glace.",
    imageSrc: PortFolioAstro,
    imageAlt:
      "Interface cosmique de l’application de compatibilité amoureuse AstraLovers.",
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
    imageSrc: PortFolioSportSee,
    imageAlt:
      "Dashboard analytique SportSee pour le suivi des performances sportives.",
  },
  {
    id: 8,
    title: "GameOn Analytics",
    client: "Plateforme d’événements sportifs",
    description:
      "Dashboard d’inscriptions et de statistiques pour une plateforme d’événements, tournois et compétitions.",
    category: "saas",
    techs: ["React", "TypeScript", "API"],
    highlight:
      "Organisation des données pour que les organisateurs visualisent rapidement l’essentiel.",
    imageSrc: PortFolioGameOn,
    imageAlt:
      "Interface de dashboard GameOn pour la gestion d’événements sportifs.",
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
    imageSrc: PortFolioOlympique,
    imageAlt:
      "Dashboard inspiré d’un comité olympique pour le suivi des performances.",
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
      "Pensée pour mettre en avant quelques produits phares plutôt qu’un catalogue interminable.",
    imageSrc: PortFolioBoutique,
    imageAlt:
      "Page d’accueil d’une boutique en ligne tendance pour mode et accessoires.",
  },
  {
    id: 11,
    title: "Kanap – E-commerce mobilier",
    client: "Vente de canapés & mobilier",
    description:
      "Site e-commerce d’entraînement autour de la vente de canapés, avec fiches produits détaillées.",
    category: "ecommerce",
    techs: ["JavaScript", "API", "Responsive"],
    highlight:
      "Travail particulier sur la fiche produit et la mise en avant des visuels.",
    imageSrc: PortFolioKanap,
    imageAlt: "Page produit d’un site e-commerce dédié aux canapés.",
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
      "Organisation de l’information pour rendre la recherche de biens simple et agréable.",
    imageSrc: PortFolioKaza,
    imageAlt:
      "Page d’accueil d’un portail immobilier moderne avec listing de biens.",
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
      "Centré sur l’ambiance et les visuels pour donner faim dès la première visite.",
    imageSrc: PortFolioJaponais,
    imageAlt:
      "Interface d’un site de restaurant japonais mettant en avant les plats.",
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
    imageSrc: PortFolioRestaurants,
    imageAlt:
      "Interface d’un portail multi-restaurants avec plusieurs cartes disponibles.",
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
      "Page d’accueil d’un site de tarot et de développement personnel.",
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
    imageAlt: "Site vitrine d’un traiteur haut de gamme pour événements.",
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
    "Mise en avant de l’esprit du dojo et des informations pratiques pour les futurs membres.",
  imageSrc: PortFolioKarate,
  imageAlt:
    "Page d’accueil d’un site de club de karaté avec visuel de pratiquants en action.",
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

  // Détection device tactile (iPhone, Android…)
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
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24">
      {/* Fond animé subtil */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-indigo-600/25 blur-3xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
            Réalisations
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Un portfolio centré sur{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              l’expérience
            </span>{" "}
            et les résultats.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300/85">
            Des sites bien-être, e-commerce et projets plus créatifs, tous
            pensés pour être élégants, rapides et orientés conversion.
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            layout
            className="inline-flex rounded-full bg-slate-900/70 p-1 backdrop-blur"
          >
            {categories.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className="relative rounded-full px-3.5 py-1.5 text-xs font-medium text-slate-300 transition-colors sm:px-4 sm:text-sm"
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full bg-emerald-400/15"
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
        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileHover={
                  !isTouch
                    ? {
                        y: -6,
                        rotateX: 2,
                        rotateY: -2,
                        transition: { duration: 0.25, ease: "easeOut" },
                      }
                    : undefined
                }
                whileTap={
                  isTouch
                    ? {
                        scale: 0.97,
                        y: -2,
                        transition: { duration: 0.15, ease: "easeOut" },
                      }
                    : undefined
                }
                className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 sm:p-5 shadow-[0_18px_45px_rgba(0,0,0,0.65)] backdrop-blur-md transition-colors duration-300 hover:border-emerald-400/60 hover:bg-slate-900/95"
              >
                {/* Halo scintillant très doux & continu tant que la card est visible */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  initial={{
                    opacity: 0.4,
                    boxShadow: "0 0 10px 0 rgba(56,189,248,0.45)", // halo discret au repos
                    borderColor: "rgba(125,211,252,0.7)",
                  }}
                  whileInView={{
                    opacity: [0.4, 0.55, 0.4], // petite variation seulement
                    boxShadow: [
                      "0 0 10px 0 rgba(56,189,248,0.45)",
                      "0 0 24px 4px rgba(56,189,248,0.75)", // halo plus doux et moins large
                      "0 0 10px 0 rgba(56,189,248,0.45)",
                    ],
                  }}
                  transition={{
                    duration: 4.5, // plus lent = plus zen
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                  viewport={{ amount: 0.6, once: false }}
                  style={{
                    borderWidth: 1.2,
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(56,189,248,0.12), transparent 65%)",
                  }}
                />

                {/* Image – marge contrôlée */}
                <div className="mb-3 overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/60">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  </div>
                </div>

                {/* Texte */}
                <div className="flex flex-1 flex-col">
            <div className="flex flex-col gap-1.5">
  {/* Pill catégorie en premier */}
  <span className="self-end shrink-0 rounded-full border border-slate-700/70 bg-slate-950/50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-300/90 whitespace-nowrap">
    {labelFromCategory(project.category)}
  </span>

  {/* Titre ensuite */}
  <h3 className="text-base !mt-0 font-semibold text-white sm:text-lg">
    {project.title}
  </h3>

  {/* Client en dessous */}
  <p className="text-xs font-medium uppercase tracking-wide text-emerald-300/80">
    {project.client}
  </p>
</div>



                  <p className="mt-2 text-sm text-slate-300/90">
                    {project.description}
                  </p>

                  {project.highlight && (
                    <p className="mt-2 text-xs text-emerald-200/90">
                      {project.highlight}
                    </p>
                  )}

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-700/80 bg-slate-950/60 px-2.5 py-0.5 text-[11px] uppercase tracking-wide text-slate-200/90"
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
                    className="mt-4 inline-flex items-center text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-200"
                  >
                    Voir le projet
                    <span className="ml-1 inline-block text-base transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                )}
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
