
import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import PortfolioSection from "@/components/Portfolio/PortfolioSection";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { SkeletonPortfolioCard } from "@/components/animations/SkeletonLoader";

export const metadata: Metadata = {
  title: "Portfolio de sites web et e-commerce — Stéphane Gamot",
  description:
    "Sélection de sites web, e-commerce et applications réalisés avec Next.js, React & WordPress. Performance, SEO & UX au service de vos projets.",
  keywords: [
    "portfolio développeur web",
    "portfolio création de site internet",
    "site vitrine moderne",
    "site e-commerce Next.js",
    "développeur React Bruxelles",
    "développeur Next.js Belgique",
    "création de site web haut de gamme",
    "freelance web Bruxelles",
    "site performant SEO",
  ],
  alternates: {
    canonical: "https://www.stephanegamot.com/portfolio",
    languages: {
      "fr-BE": "https://www.stephanegamot.com/portfolio",
      "fr-FR": "https://www.stephanegamot.com/portfolio",
      "x-default": "https://www.stephanegamot.com/portfolio",
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.stephanegamot.com/portfolio",
    title: "Portfolio – Sites web modernes & performants",
    description:
      "Sélection de projets web : sites vitrine premium, e-commerce, dashboards et applications Next.js. Un portfolio centré sur l'expérience, la performance et les résultats.",
    siteName: "Stéphane Gamot",
    locale: "fr_BE",
    images: [
      {
        url: "https://www.stephanegamot.com/Images/og/office-workstation.webp",
        width: 1200,
        height: 630,
        alt: "Mosaïque de sites web modernes créés par Stéphane Gamot",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@stephanegamot",
    title: "Portfolio – Sites web modernes & performants | Stéphane Gamot",
    description:
      "Exemples de sites vitrine, e-commerce et applications web réalisés avec Next.js, React et WordPress.",
    images: [
      "https://www.stephanegamot.com/Images/og/office-workstation.webp",
    ],
  },
  authors: [{ name: "Stéphane Gamot", url: "https://www.stephanegamot.com/me" }],
  robots: {
    index: true,
    follow: true,
  },
};

function PortfolioSkeleton() {
  return (
    <div className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="skeleton-shimmer mx-auto h-3 w-24 rounded-full mb-4" style={{ background: "var(--surface-2)" }} />
          <div className="skeleton-shimmer mx-auto h-8 w-3/4 rounded-lg mb-3" style={{ background: "var(--surface-2)" }} />
          <div className="skeleton-shimmer mx-auto h-4 w-2/3 rounded-full" style={{ background: "var(--surface-2)" }} />
        </div>
        {/* Grid skeleton */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonPortfolioCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
    return (
        <>
        <div className="mx-auto max-w-7xl px-6 py-12">
            <Breadcrumb items={[{ label: "Portfolio" }]} />
            <Suspense fallback={<PortfolioSkeleton />}>
              <PortfolioSection />
            </Suspense>

            {/* Maillage interne */}
            <section className="mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
                Envie d'un résultat similaire ?
              </h2>
              <p
                className="mt-2 text-sm sm:text-base"
                style={{ color: "var(--fg-muted)" }}
              >
                Découvrez mes services et trouvez la formule adaptée à votre projet.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { href: "/services/site-vitrine", label: "Site vitrine" },
                  { href: "/services/site-web-react-next", label: "Site Next.js & React" },
                  { href: "/services/site-internet-wordpress", label: "Site WordPress" },
                  { href: "/services/e-commerce", label: "E-commerce" },
                  { href: "/services/seo", label: "Audit SEO" },
                  { href: "/services/tarifs", label: "Tarifs & formules" },
                  { href: "/blog/pourquoi-votre-site-ne-convertit-pas", label: "7 erreurs de conversion" },
                  { href: "/contact", label: "Lancer mon projet" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm px-4 py-2 transition-colors duration-300 hover:!border-[var(--accent)] hover:!text-[var(--accent)]"
                    style={{
                      border: "1px solid var(--border)",
                      borderRadius: "0.5rem",
                      color: "var(--fg-muted)",
                    }}
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            </section>
        </div>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                      {
                        "@type": "CollectionPage",
                        name: "Portfolio de sites web et e-commerce",
                        description: "Sélection de sites web, e-commerce et applications réalisés avec Next.js, React & WordPress.",
                        url: "https://www.stephanegamot.com/portfolio",
                        author: {
                          "@type": "Person",
                          name: "Stéphane Gamot",
                          url: "https://www.stephanegamot.com/me",
                        },
                      },
                    ],
                }),
            }}
        />
        </>
    );
}
