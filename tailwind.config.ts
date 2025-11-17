import type { Config } from "tailwindcss";

const config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./content/**/*.{md,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Option A (direct, recommandée) :
                heading: ["var(--font-garamond)"],
                body: ["var(--font-montserrat)"],
                // Option B (si tu veux des fallbacks explicites) :
                // heading: ["var(--font-garamond)", "Cormorant Garamond", "serif"],
                // body: ["var(--font-montserrat)", "Montserrat", "ui-sans-serif", "system-ui"],
            },
            keyframes: {
                'hero-screen': {
                    '0%': { transform: 'scale(1.02)' },
                    '50%': { transform: 'scale(1.06)' },
                    '100%': { transform: 'scale(1.02)' },
                },
            },
            animation: {
                'hero-screen': 'hero-screen 6s ease-in-out infinite',
            },
        },
    },
    plugins: [],
} satisfies Config;

export default config;
