"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";

type CategoryId = "all" | "wellness" | "ecommerce" | "branding" | "concept";

type Project = {
  id: number;
  title: string;
  client: string;
  description: string;
  category: CategoryId;
  techs: string[];
  image: string;
  imageAlt: string;
  link?: string;
  badge?: string;
};

const categories: { id: CategoryId; label: string }[] = [
  { id: "all", label: "Tout" },
  { id: "wellness", label: "Bien-être" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "branding", label: "Branding" },
  { id: "concept", label: "Concepts" },
];

const projects: Project[] = [
  {
    id: 1,
    title: "La Voie du Bien-Être",
    client: "Cabinet shiatsu & massages",
    description:
      "Une expérience douce, lumineuse et rassurante, centrée sur la prise de rendez-vous et le SEO local.",
    category: "wellness",
    techs: ["Next.js", "TypeScript", "Framer Motion", "next-intl"],
    image: "/Images/carrousel/traiteur43.jpg",
    imageAlt: "Capture du site La Voie du Bien-Être",
    link: "https://lavoiedubienetre.be",
    badge: "Bien-être",
  },
  {
    id: 2,
    title: "Minao Asian Food",
    client: "Restaurant asiatique",
    description:
      "Site de commande en ligne avec menu dynamique, paiements Stripe et UX mobile-first.",
    category: "ecommerce",
    techs: ["Next.js", "Stripe", "Tailwind"],
 image: "/Images/carrousel/traiteur43.jpg",
    imageAlt: "Capture du site Minao Asian Food",
    link: "#",
    badge: "E-commerce",
  },
  {
    id: 3,
    title: "Corsica-Corse",
    client: "Location saisonnière",
    description:
      "Un site qui mise sur les émotions, la lumière et les paysages pour donner envie de réserver.",
    category: "branding",
    techs: ["WordPress", "Elementor", "SEO"],
 image: "/Images/carrousel/traiteur43.jpg",
    imageAlt: "Capture du site Corsica-Corse",
    link: "#",
    badge: "Branding",
  },
  {
    id: 4,
    title: "Synastria / AstraLovers",
    client: "Concept app compatibilité",
    description:
      "Interface ludique et cosmique pour explorer affinités et premières phrases basées sur les signes.",
    category: "concept",
    techs: ["Next.js", "Design System"],
 image: "/Images/carrousel/traiteur43.jpg",
    imageAlt: "Mockup d'une application d'astrologie",
    link: "#",
    badge: "Concept",
  },
  {
    id: 5,
    title: "White Wolf Studio",
    client: "Studio web haut de gamme",
    description:
      "Identité premium, sobre, centrée sur la valeur, la confiance et la performance technique.",
    category: "branding",
    techs: ["Next.js", "Framer Motion", "Tailwind"],
 image: "/Images/carrousel/traiteur43.jpg",
    imageAlt: "Capture d'un site de studio web haut de gamme",
    link: "#",
    badge: "Studio",
  },
];

// Variants (sans prise de tête avec TS)
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24">
      {/* Glow de fond animé */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-indigo-600/25 blur-3xl"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl"
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Des sites qui{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              donnent envie
            </span>{" "}
            d&apos;explorer.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300/85">
            Une sélection de projets où l’esthétique, la fluidité et la
            performance travaillent ensemble pour servir tes clients.
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
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
                      layoutId="portfolio-pill"
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

        {/* Grid de projets avec images */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                variants={cardVariants}
                layout
                exit={{ opacity: 0, scale: 0.94, y: 10 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/70 shadow-[0_18px_45px_rgba(0,0,0,0.65)] backdrop-blur-md"
              >
                {/* Image + overlay animé */}
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{
                      scale: 1.04,
                      rotateX: 2,
                      rotateY: -2,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="relative aspect-[16/10]"
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </motion.div>

                  {/* Gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0 to-slate-950/40 opacity-80" />

                  {/* Badge en haut à gauche */}
                  {project.badge && (
                    <div className="absolute left-3 top-3 rounded-full border border-emerald-400/70 bg-slate-950/80 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
                      {project.badge}
                    </div>
                  )}

                  {/* Overlay texte au hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="pointer-events-none absolute inset-x-0 bottom-0 p-4"
                  >
                    <p className="text-[11px] font-medium uppercase tracking-wide text-emerald-200">
                      {project.client}
                    </p>
                    <p className="mt-1 text-sm text-slate-100">
                      {project.title}
                    </p>
                  </motion.div>
                </div>

                {/* Texte de la carte */}
                <div className="flex flex-1 flex-col p-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300/80">
                      {project.client}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-white sm:text-lg">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-300/90">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-700/80 bg-slate-950/70 px-2.5 py-0.5 text-[11px] uppercase tracking-wide text-slate-200/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

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
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
