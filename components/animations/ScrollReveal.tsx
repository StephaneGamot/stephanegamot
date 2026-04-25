"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  type Variants,
  type Transition,
} from "framer-motion";

/* ─────────────────────────────────────────────
   Spring physique par défaut — lourd, soyeux
   ───────────────────────────────────────────── */
const SPRING: Transition = {
  type: "spring",
  damping: 40,
  stiffness: 120,
  mass: 1,
};

/* ─────────────────────────────────────────────
   Variants pour un seul élément
   ───────────────────────────────────────────── */
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

/* ─────────────────────────────────────────────
   ScrollReveal — wrapper pour révéler un élément
   au scroll avec animation spring
   ───────────────────────────────────────────── */
type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Délai de stagger en secondes (pour les enfants d'un container) */
  delay?: number;
  /** Distance du mouvement vers le haut (px) */
  y?: number;
  /** Seuil de visibilité pour déclencher (0-1) */
  threshold?: number;
  /** Jouer l'animation une seule fois */
  once?: boolean;
  /** Tag HTML à utiliser */
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
  const isInView = useInView(ref, {
    amount: threshold,
    once,
  });

  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ ...SPRING, delay }}
      className={className}
    >
      {children}
    </Component>
  );
}

/* ─────────────────────────────────────────────
   StaggerContainer — conteneur parent qui
   orchestre le stagger de ses enfants
   ───────────────────────────────────────────── */
type StaggerContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** Délai entre chaque enfant (secondes) */
  staggerDelay?: number;
  /** Seuil de visibilité */
  threshold?: number;
  once?: boolean;
  as?: "div" | "section" | "ul" | "ol";
};

const containerVariants = (stagger: number): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: 0.1,
    },
  },
});

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  threshold = 0.1,
  once = true,
  as = "div",
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once,
  });

  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants(staggerDelay)}
      className={className}
    >
      {children}
    </Component>
  );
}

/* ─────────────────────────────────────────────
   StaggerItem — enfant d'un StaggerContainer
   ───────────────────────────────────────────── */
type StaggerItemProps = {
  children: React.ReactNode;
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
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0 },
      }}
      transition={SPRING}
      className={className}
      style={style}
      {...ariaProps}
    >
      {children}
    </Component>
  );
}

export { itemVariants, SPRING };
