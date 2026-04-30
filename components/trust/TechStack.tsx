"use client";

import { useRef } from "react";
import { useInView } from "@/components/animations/ScrollReveal";

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
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section className="section-tight" aria-label="Technologies maîtrisées">
      <div className="mx-auto max-w-5xl px-8 lg:px-12">
        <p
          className="section-label mb-6 text-center"
        >
          Technologies & outils
        </p>

        <div
          ref={ref}
          className="flex flex-wrap items-center justify-center gap-3"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "opacity 0.6s ease-out",
          }}
        >
          {techs.map((tech, i) => (
            <span
              key={tech}
              className="pill"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "scale(1)" : "scale(0.9)",
                transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.04}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.04}s, border-color 0.3s ease, color 0.3s ease`,
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
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
