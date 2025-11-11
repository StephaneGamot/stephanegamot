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
        },
    },
    plugins: [],
} satisfies Config;

export default config;
