// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [],
    },

    // ─────────────────────────────────────────────────────────────
    // MIGRATION DE DOMAINE — 301 définitif vers le nouveau site
    // Toutes les URL de ce site sont redirigées de façon permanente
    // (statusCode 301, pas 308) vers la home /fr du nouveau domaine.
    // Exceptions : robots.txt et sitemap(s), laissés accessibles pour
    // que Google puisse continuer à crawler et découvrir les 301.
    // ─────────────────────────────────────────────────────────────
    async redirects() {
        return [
            {
                source: "/",
                destination: "https://www.creation-site-internet-pays-basque.com/fr",
                statusCode: 301,
            },
            {
                source: "/:path((?!robots\\.txt|sitemap\\.xml|sitemap-0\\.xml|llms\\.txt|.*\\.txt|google.*\\.html).*)",
                destination: "https://www.creation-site-internet-pays-basque.com/fr",
                statusCode: 301,
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
