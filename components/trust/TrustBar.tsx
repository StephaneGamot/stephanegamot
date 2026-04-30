"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "@/components/animations/ScrollReveal";

/* ─────────────────────────────────────────────
   AnimatedCounter — compteur qui s'anime au scroll
   Version CSS pure (requestAnimationFrame)
   ───────────────────────────────────────────── */
function AnimatedCounter({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const start = performance.now();
    const durationMs = duration * 1000;
    let raf: number;

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / durationMs);
      // easeOut curve
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(Math.round(current * 10) / 10);

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
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
  const isInView = useInView(containerRef, { once: true, threshold: 0.3 });

  return (
    <section
      className="section-tight"
      aria-label="Chiffres clés"
    >
      <div className="mx-auto max-w-5xl px-8 lg:px-12">
        <div
          ref={containerRef}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
          style={{
            padding: "2.5rem 2rem",
            borderRadius: "1.25rem",
            border: "1px solid var(--border)",
            background: "var(--surface-1)",
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
              }}
            >
              <p className="text-2xl font-semibold tracking-tight sm:text-3xl" style={{ fontFamily: "var(--font-heading)" }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs sm:text-sm" style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-body)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
