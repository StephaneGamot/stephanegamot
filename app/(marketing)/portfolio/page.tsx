
import type { Metadata } from "next";
import PortfolioSection from "@/components/Portfolio/PortfolioSection";

export const metadata: Metadata = {
  title: "Portfolio – Sites web modernes & performants | Stéphane Gamot",
  description:
    "Découvrez une sélection de sites vitrine, e-commerce, applications web réalisés avec Next.js, React & WordPress. Élégance, performance, SEO & UX au centre de votre projet",
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
  },
  openGraph: {
    type: "website",
    url: "https://www.stephanegamot.com/portfolio",
    title: "Portfolio – Sites web modernes & performants | Stéphane Gamot",
    description:
      "Sélection de projets web : sites vitrine premium, e-commerce, dashboards et applications Next.js. Un portfolio centré sur l’expérience, la performance et les résultats.",
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
  robots: {
    index: true,
    follow: true,
  },
};


export default function Page() {
    return (
        <main className="mx-auto max-w-7xl px-6 py-12">
<PortfolioSection />
        </main>
    );
}
