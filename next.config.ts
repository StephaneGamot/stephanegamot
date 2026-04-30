// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        browsersListForSwc: true,
    },

    images: {
        remotePatterns: [],
    },

    async headers() {
        return [
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
                    {
                        key: "X-XSS-Protection",
                        value: "1; mode=block",
                    },
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
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://analytics.ahrefs.com",
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
