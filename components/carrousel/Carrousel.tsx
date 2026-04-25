"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Images (4:3)
import lvbdeLg from "@/public/Images/carrousel/lvde43.jpg";
import CerisaieLg from "@/public/Images/carrousel/traiteur43.jpg";
import MinaoLg from "@/public/Images/carrousel/minao43.jpg";
import CorseLg from "@/public/Images/carrousel/corse43.jpg";
import EcommerceLg from "@/public/Images/carrousel/ecommerce43.jpg";

type Project = {
  title: string;
  description: string;
  label: string;
  image: StaticImageData;
  alt: string;
};

const baseProjects: Project[] = [
  {
    title: "Le Traiteur",
    alt: "interface qui permet de rentrer dans l'application web",
    description: `Plateforme de gestion d'événements
Java / Angular / MySQL`,
    label: "Application web",
    image: CerisaieLg,
  },
  {
    title: "Minao Asian Food",
    alt: "section des menus qui permet de choisir son plat",
    description: `Restaurant avec commandes en ligne
         Stripe – Next.js`,
    label: "E-commerce",
    image: MinaoLg,
  },
  {
    title: "Corsica-Corse",
    alt: "page d'accueil avec une video de la Corse",
    description: `Site immobilier en Corse
        WordPress / Elementor / SEO local`,
    label: "Site vitrine",
    image: CorseLg,
  },
  {
    title: "Boutique du bien-être",
    alt: "Menu général des produits bien-être qui sont a vendre",
    description: `Vente de produit en ligne
        React - Next.js / API`,
    label: "E-commerce",
    image: EcommerceLg,
  },
  {
    title: "La voie du bien-être",
    alt: "Hero d'un site de massages",
    description: `Salon de massages
         React - Next.js / API`,
    label: "Site internet",
    image: lvbdeLg,
  },
];

const CLONES = 2;
const EASE = (t: number) => 0.5 - 0.5 * Math.cos(Math.PI * t);

export default function Carrousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [iReal, setIReal] = useState(0);
  const [hover, setHover] = useState(false);
  const [animating, setAnimating] = useState(false);

  const items = useMemo(() => {
    const n = baseProjects.length;
    const tail = baseProjects.slice(n - CLONES);
    const head = baseProjects.slice(0, CLONES);
    return [...tail, ...baseProjects, ...head];
  }, []);

  const getSlides = () =>
    Array.from(
      trackRef.current?.querySelectorAll<HTMLElement>("[data-item]") ?? []
    );

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const slides = getSlides();
    const firstReal = slides[CLONES];
    if (firstReal) el.scrollLeft = firstReal.offsetLeft;
    const ro = new ResizeObserver(() => {
      const s = getSlides();
      const fr = s[CLONES];
      if (fr)
        el.scrollLeft =
          fr.offsetLeft +
          (iReal === 0 ? 0 : s[CLONES + iReal].offsetLeft - fr.offsetLeft);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const animateTo = (targetLeft: number, duration = 1400) => {
    const el = trackRef.current;
    if (!el) return;
    const start = el.scrollLeft;
    const delta = targetLeft - start;
    if (Math.abs(delta) < 1) {
      el.scrollLeft = targetLeft;
      return;
    }
    setAnimating(true);
    let t0: number | null = null;
    const step = (ts: number) => {
      if (t0 === null) t0 = ts;
      const p = Math.min(1, (ts - t0) / duration);
      el.scrollLeft = start + delta * EASE(p);
      if (p < 1) requestAnimationFrame(step);
      else setAnimating(false);
    };
    requestAnimationFrame(step);
  };

  const [activeVisual, setActiveVisual] = useState(0);
  const rafRef = useRef<number | null>(null);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const slides = Array.from(
        el.querySelectorAll<HTMLElement>("[data-item]")
      );
      if (!slides.length) return;
      const centerX = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      slides.forEach((s, idx) => {
        const mid = s.offsetLeft + s.clientWidth / 2;
        const d = Math.abs(mid - centerX);
        if (d < bestDist) {
          bestDist = d;
          best = idx;
        }
      });
      setActiveVisual(best);
    });
  };

  const goToReal = (nextReal: number, duration = 1100) => {
    const el = trackRef.current;
    if (!el) return;
    const slides = getSlides();
    const n = baseProjects.length;
    const real = ((nextReal % n) + n) % n;
    setIReal(real);
    const visualIndex = real + CLONES;
    const targetSlide = slides[visualIndex];
    if (!targetSlide) return;
    animateTo(targetSlide.offsetLeft, duration);
    window.setTimeout(() => {
      const s = getSlides();
      if (!s.length) return;
      if (visualIndex < CLONES) {
        const twin = s[visualIndex + n];
        if (twin) el.scrollLeft = twin.offsetLeft;
      }
      if (visualIndex >= CLONES + n) {
        const twin = s[visualIndex - n];
        if (twin) el.scrollLeft = twin.offsetLeft;
      }
    }, duration + 20);
  };

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (m.matches) return;
    const id = window.setInterval(() => {
      if (!hover && !animating) goToReal(iReal + 1, 1400);
    }, 6500);
    return () => window.clearInterval(id);
  }, [iReal, hover, animating]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goToReal(iReal + 1);
    if (e.key === "ArrowLeft") goToReal(iReal - 1);
  };

  return (
    <section id="work" className="section">
      {/* Séparateur */}
      <div className="divider mx-auto max-w-6xl" />

      <div className="mx-auto max-w-6xl px-8 lg:px-12" style={{ paddingTop: 'var(--section-gap)' }}>
        <header className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="section-label mb-4">Portfolio</p>
            <h2 style={{ color: 'var(--fg-base)' }}>
              Projets &amp; réalisations
            </h2>
            <p className="mt-3" style={{ color: 'var(--fg-muted)' }}>
              Quelques cas clients et démos sélectionnés.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="hidden sm:inline-block btn btn-outline"
          >
            Tous les projets
          </Link>
        </header>

        <div
          className="relative"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* Dégradés latéraux */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 z-10" style={{ background: 'linear-gradient(to right, var(--bg-page), transparent)' }} />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 z-10" style={{ background: 'linear-gradient(to left, var(--bg-page), transparent)' }} />

          {/* Track */}
          <div
            ref={trackRef}
            onScroll={handleScroll}
            tabIndex={0}
            onKeyDown={onKey}
            aria-roledescription="carousel"
            aria-label="Projets"
            className={`flex overflow-x-auto focus:outline-none
            gap-3 sm:gap-6
            px-0 py-2
            ${animating ? "snap-none" : "snap-x snap-proximity"}`}
            style={{
              scrollbarWidth: "none",
              touchAction: "pan-x",
              WebkitOverflowScrolling: "touch",
              scrollBehavior: "auto",
            }}
          >
            {items.map((p, visualIdx) => (
              <article
                key={`${p.title}-${visualIdx}`}
                data-item
                className={[
                  "group relative shrink-0 overflow-hidden snap-start",
                  "transition-[transform,opacity] duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform transform-gpu",
                  "basis-full sm:basis-[calc((100%-24px)/2)] lg:basis-[calc((100%-48px)/3)]",
                  activeVisual === visualIdx
                    ? "scale-100 opacity-100"
                    : "scale-[0.985] opacity-[0.88]",
                ].join(" ")}
                style={{
                  borderRadius: '1rem',
                  border: '1px solid var(--border)',
                  background: 'var(--surface-1)',
                }}
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.012] will-change-transform"
                    placeholder="blur"
                    priority={visualIdx === CLONES || visualIdx === CLONES + 1}
                  />
                </div>

                <div className="px-5 py-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <span
                    className="text-[11px] font-medium tracking-[0.12em] uppercase"
                    style={{ color: 'var(--accent)' }}
                  >
                    {p.label}
                  </span>
                  <h3
                    className="!my-1 text-lg sm:text-xl"
                    style={{ color: 'var(--fg-base)', fontFamily: 'var(--font-heading)', fontWeight: 400 }}
                  >
                    {p.title}
                  </h3>
                  <p className="!my-1 text-sm whitespace-pre-line" style={{ color: 'var(--fg-subtle)' }}>
                    {p.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Flèches — minimalistes */}
          <button
            aria-label="Slide précédent"
            onClick={() => goToReal(iReal - 1)}
            className="absolute left-3 top-[30%] sm:top-[35%] -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center transition-all duration-300"
            style={{
              border: '1px solid var(--border)',
              borderRadius: '50%',
              background: 'rgba(8,9,12,0.7)',
              backdropFilter: 'blur(8px)',
              color: 'var(--fg-muted)',
            }}
          >
            &larr;
          </button>

          <button
            aria-label="Slide suivant"
            onClick={() => goToReal(iReal + 1)}
            className="absolute right-3 top-[30%] sm:top-[35%] -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center transition-all duration-300"
            style={{
              border: '1px solid var(--border)',
              borderRadius: '50%',
              background: 'rgba(8,9,12,0.7)',
              backdropFilter: 'blur(8px)',
              color: 'var(--fg-muted)',
            }}
          >
            &rarr;
          </button>

          {/* Bullets */}
          <div className="mt-8 flex justify-center">
            <div
              className="flex items-center gap-3"
              role="tablist"
              aria-label="Sélecteur de slide"
            >
              {baseProjects.map((_, k) => (
                <button
                  key={k}
                  role="tab"
                  aria-selected={iReal === k}
                  aria-label={`Aller au slide ${k + 1}`}
                  onClick={() => goToReal(k)}
                  className="group relative flex h-11 w-11 items-center justify-center rounded-full"
                >
                  <span
                    aria-hidden="true"
                    className={[
                      "block rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      iReal === k
                        ? "h-2 w-6"
                        : "h-2 w-2 group-hover:bg-[var(--fg-subtle)]",
                    ].join(" ")}
                    style={{
                      background: iReal === k ? 'var(--accent)' : 'var(--border-hover)',
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* CTA mobile */}
          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/portfolio"
              className="btn btn-outline"
            >
              Tous les projets
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
