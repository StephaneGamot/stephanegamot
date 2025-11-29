import type { Metadata } from "next";
import { LocalBusinessJsonLd } from "next-seo";

import HeroHomePage from "./../components/heroes/HeroHomePage";
import CardsHome from "@/components/cards/CardsHome";
import Carrousel from "@/components/carrousel/Carrousel";
import WorkProcess from "@/components/workProcess/WorkProcess";
import TestimonialsSection from "@/components/Testimonials/Testimonials";
import AboutSection from "@/components/about/AboutSection";

export const metadata: Metadata = {
  title: "Création de sites web performants à Bruxelles — Stéphane Gamot",
  description:
    "Je conçois des sites rapides, élégants et optimisés pour la conversion. Next.js, WordPress et SEO technique pour entreprises et indépendants en Belgique.",
  metadataBase: new URL("https://www.stephanegamot.com"),
  alternates: {
    canonical: "https://www.stephanegamot.com",
  },
  keywords: [
    "création de site web Bruxelles",
    "développeur web freelance Belgique",
    "site vitrine haut de gamme",
    "site e-commerce Next.js",
    "site WordPress performant",
    "SEO technique Bruxelles",
    "optimisation Core Web Vitals",
    "site internet indépendant",
  ],
  authors: [
    {
      name: "Stéphane Gamot",
      url: "https://www.stephanegamot.com/me",
    },
  ],
  openGraph: {
    title: "Création de sites web performants à Bruxelles — Stéphane Gamot",
    description:
      "Développeur web freelance à Bruxelles. Sites Next.js, WordPress et e-commerce Stripe, pensés pour la performance, le référencement et la conversion.",
    url: "https://www.stephanegamot.com",
    siteName: "Stéphane Gamot",
    type: "website",
    locale: "fr_BE",
    images: [
      {
        url: "https://www.stephanegamot.com/Images/og/office-workstation.webp",
        width: 1200,
        height: 630,
        alt: "Site web professionnel créé par Stéphane Gamot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Création de sites web performants à Bruxelles — Stéphane Gamot",
    description:
      "Sites Next.js, WordPress et e-commerce optimisés SEO. Performance, design et stratégie digitale pour entrepreneurs exigeants.",
    images: ["https://www.stephanegamot.com/Images/og/office-workstation.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "technology",
};

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd
        type="ProfessionalService"
        name="Stéphane Gamot – Création de sites web"
        description="Développeur web basé en Belgique, spécialisé dans la création de sites élégants, rapides et optimisés pour la conversion : sites vitrines, e-commerce, SEO et performance."
        url="https://www.stephanegamot.com"
        telephone="+32 477 71 31 93"
        address={{
          streetAddress: "Rue Octave de Kerchove d’Exaerdestraat 193",
          addressLocality: "Halle",
          postalCode: "1501",
          addressCountry: "BE",
        }}
        geo={{
          latitude: 50.7464661,
          longitude: 4.1889277,
        }}
        areaServed={[
          "Bruxelles",
          "Halle",
          "Brabant wallon",
          "Belgique francophone",
        ]}
        sameAs={["https://www.stephanegamot.com"]}
        priceRange="€€"
        openingHoursSpecification={[
          {
            opens: "09:00",
            closes: "18:00",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          },
        ]}
      />

      <main>
        <HeroHomePage />
        <AboutSection />
        <CardsHome />
        <Carrousel />
        <WorkProcess />
        <TestimonialsSection />
      </main>
    </>
  );
}
