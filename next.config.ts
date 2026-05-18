// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [],
    },

    // Redirections 301 — préserve l'autorité SEO des anciennes URL
    async redirects() {
        return [
            // Anti-duplication : URLs avec query param ?q= vers la homepage
            {
                source: "/",
                has: [{ type: "query", key: "q" }],
                destination: "/",
                permanent: true,
            },
            // Page /services (404 dans Search Console) → homepage
            // Le hub services n'existe pas, seules les sous-pages existent
            {
                source: "/services",
                destination: "/",
                permanent: true,
            },
            {
                source: "/services/",
                destination: "/",
                permanent: true,
            },
            // Vestiges WordPress — author archive → page personnelle
            {
                source: "/author/admin",
                destination: "/me",
                permanent: true,
            },
            {
                source: "/author/admin/",
                destination: "/me",
                permanent: true,
            },
            // Catch-all pour toute URL /author/* WordPress legacy
            {
                source: "/author/:slug*",
                destination: "/me",
                permanent: true,
            },
        ];
    },

    async headers() {
        return [
            // X-Robots-Tag: noindex pour les fichiers techniques que Google ne doit pas
            // tenter d'indexer (favicons, manifest, etc.). Nettoie le rapport Search Console
            // "Explorée, actuellement non indexée" sur ces URL.
            {
                source: "/:path*\\.ico",
                headers: [
                    { key: "X-Robots-Tag", value: "noindex" },
                ],
            },
            {
                source: "/manifest.json",
                headers: [
                    { key: "X-Robots-Tag", value: "noindex" },
                ],
            },
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-DNS-Prefetch-Control",
                        value: "on",
                    },
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains; preload",
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "SAMEORIGIN",
                    },
                    // X-XSS-Protection retiré : obsolète, ignoré par les navigateurs modernes.
                    // La CSP ci-dessous protège mieux contre les XSS.
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin-when-cross-origin",
                    },
                    {
                        key: "Permissions-Policy",
                        value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
                    },
                    {
                        key: "Content-Security-Policy",
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://analytics.ahrefs.com https://vercel.live",
                            "style-src 'self' 'unsafe-inline'",
                            "font-src 'self'",
                            "img-src 'self' data: https://www.google-analytics.com",
                            "connect-src 'self' https://www.google-analytics.com https://analytics.ahrefs.com https://region1.google-analytics.com",
                            "frame-ancestors 'self'",
                            "base-uri 'self'",
                            "form-action 'self'",
                        ].join("; "),
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
