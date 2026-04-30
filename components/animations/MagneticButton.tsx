"use client";

import { useRef, useState, useCallback, type ReactNode, createElement } from "react";

/* ─────────────────────────────────────────────
   MagneticButton — bouton avec fill reveal
   Version CSS pure (sans framer-motion)
   L'effet magnétique subtil est conservé via
   un simple calcul de position curseur.
   ───────────────────────────────────────────── */
type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
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
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [ripple, setRipple] = useState<{ x: number; y: number; id: number } | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current || disabled) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setOffset({
        x: (e.clientX - centerX) * strength,
        y: (e.clientY - centerY) * strength,
      });
    },
    [strength, disabled]
  );

  const handleMouseEnter = useCallback(() => {
    if (disabled) return;
    setIsHovered(true);
  }, [disabled]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setOffset({ x: 0, y: 0 });
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (disabled) return;

      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setRipple({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          id: Date.now(),
        });
        setTimeout(() => setRipple(null), 500);
      }

      onClick?.(e);
    },
    [onClick, disabled]
  );

  const props: Record<string, unknown> = {
    ref,
    className: `magnetic-btn ${className} ${isHovered ? "is-hovered" : ""}`.trim(),
    style: {
      position: "relative" as const,
      overflow: "hidden" as const,
      transform: `translate(${offset.x}px, ${offset.y}px) scale(${isHovered ? 1.04 : 1})`,
      transition: isHovered
        ? "transform 0.15s cubic-bezier(0.16,1,0.3,1)"
        : "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
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
    props.href = href;
    props.target = target;
    props.rel = rel;
  } else {
    props.type = type;
  }

  return createElement(
    as,
    props,
    <>
      {/* Fill reveal — fond qui apparaît au hover */}
      <span
        className="magnetic-btn-fill"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          transformOrigin: "left center",
          zIndex: 0,
          pointerEvents: "none",
          transform: isHovered ? "scaleX(1)" : "scaleX(0)",
          opacity: isHovered ? 1 : 0,
          transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease",
        }}
      />

      {/* Contenu */}
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>

      {/* Ripple */}
      {ripple && (
        <span
          key={ripple.id}
          aria-hidden="true"
          className="magnetic-btn-ripple"
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
            animation: "magnetic-ripple 0.5s ease-out forwards",
          }}
        />
      )}
    </>
  );
}
