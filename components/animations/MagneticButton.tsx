"use client";

import { useRef, useState, useCallback, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* ─────────────────────────────────────────────
   Springs pour l'effet magnétique — lourd, soyeux
   ───────────────────────────────────────────── */
const MAGNETIC_SPRING = { damping: 30, stiffness: 200, mass: 0.8 };
const SCALE_SPRING = { damping: 25, stiffness: 300, mass: 0.6 };

/* ─────────────────────────────────────────────
   MagneticButton — bouton qui colle au curseur
   avec fill reveal au hover
   ───────────────────────────────────────────── */
type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  /** Force de l'aimantation (0-1) */
  strength?: number;
  /** Tag / composant à rendre */
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  "aria-label"?: string;
  style?: React.CSSProperties;
};

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  as = "button",
  href,
  target,
  rel,
  type = "button",
  onClick,
  disabled = false,
  style,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [ripple, setRipple] = useState<{ x: number; y: number; id: number } | null>(null);

  // Motion values pour le déplacement magnétique
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, MAGNETIC_SPRING);
  const springY = useSpring(y, MAGNETIC_SPRING);
  const scale = useMotionValue(1);
  const springScale = useSpring(scale, SCALE_SPRING);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current || disabled) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      x.set(deltaX);
      y.set(deltaY);
    },
    [strength, x, y, disabled]
  );

  const handleMouseEnter = useCallback(() => {
    if (disabled) return;
    setIsHovered(true);
    scale.set(1.04);
  }, [scale, disabled]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    scale.set(1);
  }, [x, y, scale]);

  /* Ripple — feedback immédiat au clic (<200ms) */
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (disabled) return;

      // Ripple effect
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setRipple({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          id: Date.now(),
        });
        setTimeout(() => setRipple(null), 500);
      }

      // Scale press feedback
      scale.set(0.95);
      setTimeout(() => scale.set(1.04), 120);

      onClick?.(e);
    },
    [onClick, scale, disabled]
  );

  const Component = motion[as] as typeof motion.button;

  const motionProps: Record<string, unknown> = {
    ref,
    className: `magnetic-btn ${className} ${isHovered ? "is-hovered" : ""}`.trim(),
    style: {
      x: springX,
      y: springY,
      scale: springScale,
      position: "relative" as const,
      overflow: "hidden" as const,
      willChange: "transform" as const,
      ...style,
    },
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick,
    disabled,
    ...rest,
  };

  if (as === "a") {
    motionProps.href = href;
    motionProps.target = target;
    motionProps.rel = rel;
  } else {
    motionProps.type = type;
  }

  return (
    <Component {...motionProps}>
      {/* Fill reveal — fond qui apparaît au hover */}
      <motion.span
        className="magnetic-btn-fill"
        aria-hidden="true"
        initial={false}
        animate={{
          scaleX: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 200,
        }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          transformOrigin: "left center",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Contenu */}
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>

      {/* Ripple */}
      {ripple && (
        <motion.span
          key={ripple.id}
          aria-hidden="true"
          initial={{ scale: 0, opacity: 0.35 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.25)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
      )}
    </Component>
  );
}
