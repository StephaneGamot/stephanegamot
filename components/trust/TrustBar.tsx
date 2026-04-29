"use client";

import { useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────
   AnimatedCounter — compteur qui s'anime au scroll
   ───────────────────────────────────────────── */
function AnimatedCounter({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v * 10) / 10),
    });

    return () => controls.stop();
  }, [isInView, target, duration]);

  return (
    <span ref={ref} style={{ color: "var(--accent)" }}>
      {target % 1 !== 0 ? count.toFixed(1) : Math.round(count)}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Données des métriques
   ───────────────────────────────────────────── */
const stats = [
  { value: 17, suffix: "+", label: "Projets livrés", icon: "📐" },
  { value: 97, suffix: "/100", label: "Score Lighthouse moyen", icon: "⚡" },
  { value: 4.9, suffix: "/5", label: "Satisfaction client", icon: "★" },
  { value: 24, suffix: "h", label: "Délai de réponse max", icon: "💬" },
];

/* ─────────────────────────────────────────────
   TrustBar — bandeau de confiance
   ───────────────────────────────────────────── */
export default function TrustBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section
      className="section-tight"
      aria-label="Chiffres clés"
    >
      <div className="mx-auto max-w-5xl px-8 lg:px-12">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", damping: 40, stiffness: 120, mass: 1 }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
          style={{
            padding: "2.5rem 2rem",
            borderRadius: "1.25rem",
            border: "1px solid var(--border)",
            background: "var(--surface-1)",
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                damping: 40,
                stiffness: 120,
                delay: i * 0.1,
              }}
              className="text-center"
            >
              <p className="text-2xl font-semibold tracking-tight sm:text-3xl" style={{ fontFamily: "var(--font-heading)" }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs sm:text-sm" style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-body)" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
