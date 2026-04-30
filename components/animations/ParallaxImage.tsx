"use client";

import { useRef, useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";

/* ─────────────────────────────────────────────
   ParallaxImage — micro-parallaxe GPU-only
   Version CSS pure (sans framer-motion)
   ───────────────────────────────────────────── */

type ParallaxImageProps = {
    src: StaticImageData | string;
    alt: string;
    offset?: number;
    className?: string;
    style?: React.CSSProperties;
    sizes?: string;
    priority?: boolean;
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
    const [translateY, setTranslateY] = useState(offset);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        // Respect prefers-reduced-motion
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setTranslateY(0);
            return;
        }

        let raf: number;
        const onScroll = () => {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const rect = el.getBoundingClientRect();
                const vh = window.innerHeight;
                // 0 quand l'élément entre en bas, 1 quand il sort en haut
                const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
                const y = offset - progress * offset * 2;
                setTranslateY(y);
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll(); // initial
        return () => {
            window.removeEventListener("scroll", onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, [offset]);

    return (
        <div
            ref={containerRef}
            className={`overflow-hidden ${className}`}
            style={{ position: "relative", ...style }}
        >
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: `calc(100% + ${offset * 2}px)`,
                    top: `-${offset}px`,
                    transform: `translateY(${translateY}px)`,
                    transition: "transform 0.1s linear",
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
            </div>
        </div>
    );
}
