"use client";

import { useRef, useEffect, useState, createElement, type ReactNode } from "react";

/* ─────────────────────────────────────────────
   useInView — hook léger (IntersectionObserver)
   Remplace framer-motion useInView
   ───────────────────────────────────────────── */
function useInView(
  ref: React.RefObject<HTMLElement | null>,
  { threshold = 0.15, once = true }: { threshold?: number; once?: boolean } = {}
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return isInView;
}

export { useInView };

/* ─────────────────────────────────────────────
   ScrollReveal — wrapper pour révéler un élément
   au scroll avec transition CSS (spring-like)
   ───────────────────────────────────────────── */
type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  threshold?: number;
  once?: boolean;
  as?: "div" | "section" | "article" | "header" | "footer" | "li" | "span";
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 32,
  threshold = 0.15,
  once = true,
  as = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold, once });

  return createElement(
    as,
    {
      ref,
      className,
      style: {
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        willChange: "opacity, transform",
      },
    },
    children
  );
}

/* ─────────────────────────────────────────────
   StaggerContainer — conteneur parent qui
   orchestre le stagger de ses enfants via CSS
   ───────────────────────────────────────────── */
type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
  once?: boolean;
  as?: "div" | "section" | "ul" | "ol";
};

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  threshold = 0.1,
  once = true,
  as = "div",
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold, once });

  return createElement(
    as,
    {
      ref,
      className,
      "data-stagger-visible": isInView ? "true" : undefined,
      "data-stagger-delay": staggerDelay,
    },
    children
  );
}

/* ─────────────────────────────────────────────
   StaggerItem — enfant d'un StaggerContainer
   Utilise l'index DOM pour calculer le délai
   ───────────────────────────────────────────── */
type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  y?: number;
  as?: "div" | "article" | "li" | "span";
} & React.AriaAttributes;

export function StaggerItem({
  children,
  className,
  style,
  y = 32,
  as = "div",
  ...ariaProps
}: StaggerItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const checkParent = () => {
      const parent = el.closest("[data-stagger-visible]");
      if (!parent) return;

      const isParentVisible = parent.getAttribute("data-stagger-visible") === "true";
      if (isParentVisible && !isVisible) {
        const staggerDelay = parseFloat(parent.getAttribute("data-stagger-delay") || "0.1");
        const siblings = Array.from(parent.querySelectorAll(":scope > [data-stagger-item]"));
        const index = siblings.indexOf(el);
        setDelay(0.1 + index * staggerDelay);
        setIsVisible(true);
      }
    };

    // Observer le parent pour détecter quand il devient visible
    const observer = new MutationObserver(checkParent);
    const parent = el.closest("[data-stagger-visible]") || el.parentElement;
    if (parent) {
      observer.observe(parent, { attributes: true, attributeFilter: ["data-stagger-visible"] });
    }
    checkParent(); // vérification initiale

    return () => observer.disconnect();
  }, [isVisible]);

  return createElement(
    as,
    {
      ref,
      className,
      "data-stagger-item": true,
      style: {
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        willChange: "opacity, transform",
      },
      ...ariaProps,
    },
    children
  );
}

/* ─────────────────────────────────────────────
   Exports de compatibilité
   ───────────────────────────────────────────── */
const itemVariants = {};
const SPRING = {};

export { itemVariants, SPRING };
