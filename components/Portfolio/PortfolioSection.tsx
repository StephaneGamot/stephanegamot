"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
  imageSrc: string;
  imageAlt: string;
};

const categories: { id: CategoryId; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "wellness", label: "Bien-être" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "saas", label: "App / SaaS" },
  { id: "branding", label: "Branding / Vitrine" },
];

const projects: Project[] = [
  {
    id: 1,
    title: "La Voie du Bien-Être",
    client: "Cabinet de shiatsu & massages",
    description:
      "Site doux et épuré, orienté conversion, avec SEO local, multilingue et prises de rendez-vous fluides.",
    category: "wellness",
    techs: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "next-intl"],
    link: "https://lavoiedubienetre.be",
    highlight: "Positionné sur les recherches locales à Halle & Bruxelles.",
    imageSrc: "/Images/carrousel/boutique-lg.webp",
    imageAlt: "Capture du site La Voie du Bien-Être",
  },
  {
    id: 2,
    title: "Minao Asian Food",
    client: "Restaurant asiatique / take-away",
    description:
      "Plateforme de commande en ligne : menu dynamique, paiement Stripe, UX mobile-first.",
    category: "ecommerce",
    techs: ["Next.js", "Stripe", "React", "Node.js"],
    // pas de link -> pas de bouton
    highlight: "Pensé pour des commandes rapides en quelques clics.",
    imageSrc: "/Images/carrousel/boutique-lg.webp",
    imageAlt: "Capture du site Minao Asian Food",
  },
  {
    id: 3,
    title: "Corsica-Corse",
    client: "Location saisonnière en Corse",
    description:
      "Site vitrine chaleureux pour présenter gîtes, photos immersives et demandes de réservation.",
    category: "branding",
    techs: ["WordPress", "Elementor", "SEO", "Performance"],
    highlight: "Mise en avant de l’émotion et du territoire.",
    imageSrc: "/Images/carrousel/boutique-lg.webp",
    imageAlt: "Capture du site Corsica-Corse",
  },
  {
    id: 4,
    title: "Synastria / AstraLovers",
    client: "Concept d’app de compatibilité amoureuse",
    description:
      "Prototype d’application basée sur l’astrologie, onboarding ludique et scénarios d’affinités.",
    category: "saas",
    techs: ["Next.js", "TypeScript", "Design System", "API"],
    highlight: "Expérience utilisateur centrée sur le jeu et la curiosité.",
    imageSrc: "/Images/carrousel/boutique-lg.webp",
    imageAlt: "Mockup de l’application Synastria / AstraLovers",
  },
  {
    id: 5,
    title: "White Wolf Web – Studio",
    client: "Studio web haut de gamme",
    description:
      "Identité visuelle premium, storytelling clair et mise en valeur du portfolio et des services.",
    category: "branding",
    techs: ["Next.js", "Framer Motion", "Tailwind", "SEO"],
    highlight:
      "Pensé pour rassurer les clients exigeants dès la première impression.",
    imageSrc: "/Images/carrousel/boutique-lg.webp",
    imageAlt: "Capture du site White Wolf Web Studio",
  },
];

function labelFromCategory(category: CategoryId): string {
  switch (category) {
    case "wellness":
      return "Bien-être";
    case "ecommerce":
      return "E-commerce";
    case "saas":
      return "App / SaaS";
    case "branding":
      return "Branding";
    default:
      return "Projet";
  }
}

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

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
        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileHover={{
                  y: -6,
                  rotateX: 2,
                  rotateY: -2,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                className="group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.65)] backdrop-blur-md transition-colors duration-300 hover:border-emerald-400/60 hover:bg-slate-900/95"
              >
                {/* Image */}
                <div className="mb-4 overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/60">
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
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold text-white sm:text-lg">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-emerald-300/80">
                        {project.client}
                      </p>
                    </div>
                    <span className="rounded-full border border-slate-700/70 bg-slate-950/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-300/90">
                      {labelFromCategory(project.category)}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-slate-300/90">
                    {project.description}
                  </p>

                  {project.highlight && (
                    <p className="mt-3 text-xs text-emerald-200/90">
                      {project.highlight}
                    </p>
                  )}

                  <div className="mt-4 flex flex-wrap gap-1.5">
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
                    className="mt-5 inline-flex items-center text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-200"
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
