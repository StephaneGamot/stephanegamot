"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image, { type StaticImageData } from "next/image";

/* ─────────────────────────────────────────────
   ParallaxImage — micro-parallaxe GPU-only
   L'image translate en Y à l'intérieur de son
   conteneur masqué. Effet galerie d'art subtil.
   N'anime QUE transform (zéro layout thrashing).
   ───────────────────────────────────────────── */

const PARALLAX_SPRING = { damping: 50, stiffness: 100, mass: 0.8 };

type ParallaxImageProps = {
    src: StaticImageData | string;
    alt: string;
    /** Intensité du parallaxe en px (défaut: 40) */
    offset?: number;
    /** Classes pour le conteneur externe */
    className?: string;
    /** Style pour le conteneur externe */
    style?: React.CSSProperties;
    /** Attribut sizes pour le responsive */
    sizes?: string;
    /** Priority loading */
    priority?: boolean;
    /** Placeholder blur */
    placeholder?: "blur" | "empty";
};

export function ParallaxImage({
    src,
    alt,
    offset = 40,
    className = "",
    style,
    sizes = "100vw",
    priority = false,
    placeholder = "blur",
}: ParallaxImageProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    /* Translate de +offset à -offset au fil du scroll */
    const rawY = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
    const y = useSpring(rawY, PARALLAX_SPRING);

    return (
        <div
            ref={containerRef}
            className={`overflow-hidden ${className}`}
            style={{ position: "relative", ...style }}
        >
            <motion.div
                style={{
                    y,
                    position: "relative",
                    width: "100%",
                    /* L'image est légèrement plus haute que le conteneur
                       pour avoir de la matière à déplacer */
                    height: `calc(100% + ${offset * 2}px)`,
                    top: `-${offset}px`,
                    willChange: "transform",
                }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes={sizes}
                    priority={priority}
                    placeholder={typeof src === "string" ? "empty" : placeholder}
                />
            </motion.div>
        </div>
    );
}
