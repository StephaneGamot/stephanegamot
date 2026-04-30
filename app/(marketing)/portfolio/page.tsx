
import type { Metadata } from "next";
import { Suspense } from "react";
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
                      {
                        "@type": "BreadcrumbList",
                        itemListElement: [
                          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.stephanegamot.com" },
                          { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://www.stephanegamot.com/portfolio" },
                        ],
                      },
                    ],
                }),
            }}
        />
        </>
    );
}
