"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────────────────────────
   Technologies maîtrisées — texte uniquement
   (pas de logos externes = performance maximale)
   ───────────────────────────────────────────── */
const techs = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "WordPress",
  "WooCommerce",
  "Stripe",
  "Vercel",
  "Node.js",
  "SEO technique",
  "Core Web Vitals",
  "WCAG / Accessibilité",
];

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="section-tight" aria-label="Technologies maîtrisées">
      <div className="mx-auto max-w-5xl px-8 lg:px-12">
        <p
          className="section-label mb-6 text-center"
        >
          Technologies & outils
        </p>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {techs.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                delay: i * 0.04,
              }}
              className="pill"
              style={{
                transition: "border-color 0.3s ease, color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--fg-subtle)";
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
