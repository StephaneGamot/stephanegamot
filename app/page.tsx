import type { Metadata } from "next";

import HeroHomePage from "./../components/heroes/HeroHomePage";
import CardsHome from "@/components/cards/CardsHome";
import Carrousel from "@/components/carrousel/Carrousel";
import WorkProcess from "@/components/workProcess/WorkProcess";
import TestimonialsSection from "@/components/Testimonials/Testimonials";
import AboutSection from "@/components/about/AboutSection";
import Statement from "@/components/statement/Statement";
import TrustBar from "@/components/trust/TrustBar";
import TechStack from "@/components/trust/TechStack";
import StickyCTA from "@/components/trust/StickyCTA";
import LeadMagnet from "@/components/trust/LeadMagnet";

export const metadata: Metadata = {
  title: "Création de sites web performants — Stéphane Gamot",
  description:
    "Découvrez mes services de création web : sites rapides, élégants et optimisés SEO. Contactez-moi pour un devis gratuit en Belgique.",
  metadataBase: new URL("https://www.stephanegamot.com"),
  alternates: {
    canonical: "https://www.stephanegamot.com",
    languages: {
      "fr-BE": "https://www.stephanegamot.com",
      "fr-FR": "https://www.stephanegamot.com",
      "x-default": "https://www.stephanegamot.com",
    },
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
    title: "Création de sites web performants — Stéphane Gamot",
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
    title: "Création de sites web performants — Stéphane Gamot",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://www.stephanegamot.com/#business",
            name: "Stéphane Gamot – Création de sites web",
            description:
              "Développeur web basé en Belgique, spécialisé dans la création de sites élégants, rapides et optimisés pour la conversion : sites vitrines, e-commerce, SEO et performance.",
            image: "https://www.stephanegamot.com/Images/me/me.webp",
            url: "https://www.stephanegamot.com",
            telephone: "+32 477 71 31 93",
            email: "stephanegamot@outlook.com",
            founder: {
              "@type": "Person",
              name: "Stéphane Gamot",
              url: "https://www.stephanegamot.com/me",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Octave de Kerchove d’Exaerdestraat 193",
              addressLocality: "Halle",
              postalCode: "1501",
              addressRegion: "Brabant flamand",
              addressCountry: "BE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 50.7464661,
              longitude: 4.1889277,
            },
            areaServed: [
              { "@type": "City", name: "Bruxelles" },
              { "@type": "City", name: "Halle" },
              { "@type": "AdministrativeArea", name: "Brabant wallon" },
              { "@type": "AdministrativeArea", name: "Brabant flamand" },
              { "@type": "Country", name: "France" },
            ],
            priceRange: "€€",
            currenciesAccepted: "EUR",
            paymentAccepted: "Virement bancaire, Stripe",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
            ],
            sameAs: [
              "https://github.com/StephaneGamot",
              "https://www.facebook.com/profile.php?id=61560283102227",
            ],
            knowsAbout: [
              "Next.js", "React", "WordPress", "SEO", "E-commerce",
              "Accessibilité web", "TypeScript", "Tailwind CSS",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "32",
              bestRating: "5",
              worstRating: "1",
            },
            review: [
              {
                "@type": "Review",
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                author: { "@type": "Person", name: "Claire Delmas" },
                reviewBody:
                  "Site rapide, esthétique et très propre techniquement. Impact immédiat sur nos leads et notre visibilité SEO.",
              },
              {
                "@type": "Review",
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                author: { "@type": "Person", name: "Idriss Van der Meer" },
                reviewBody:
                  "Process clair, intégration Stripe sans friction, livrables carrés. On a senti un vrai accompagnement de bout en bout.",
              },
              {
                "@type": "Review",
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                author: { "@type": "Person", name: "Anaïs Rochette" },
                reviewBody:
                  "Design soigné, performances mesurées, accessibilité intégrée. L’expérience client est nettement plus fluide.",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Services de création web",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Site Vitrine",
                    description: "Site vitrine élégant, responsive et optimisé SEO.",
                    url: "https://www.stephanegamot.com/services/site-vitrine",
                  },
                  price: "1500",
                  priceCurrency: "EUR",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "1500",
                    priceCurrency: "EUR",
                    unitText: "projet",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Site Professionnel",
                    description: "Site web professionnel avec fonctionnalités avancées, CMS et SEO complet.",
                    url: "https://www.stephanegamot.com/services/site-web-react-next",
                  },
                  price: "3500",
                  priceCurrency: "EUR",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "3500",
                    priceCurrency: "EUR",
                    unitText: "projet",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "E-commerce",
                    description: "Boutique en ligne complète avec paiement sécurisé et gestion des stocks.",
                    url: "https://www.stephanegamot.com/services/e-commerce",
                  },
                  price: "5000",
                  priceCurrency: "EUR",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "5000",
                    priceCurrency: "EUR",
                    unitText: "projet",
                  },
                },
              ],
            },
          }),
        }}
      />

      <>
        <HeroHomePage />
        <TrustBar />
        <AboutSection />
        <TechStack />
        <Statement caption="Philosophie de travail">
            Le détail que personne ne voit{" "}
            <span style={{ color: "var(--accent)" }}>est celui</span>
            <br />
            qui change tout.
        </Statement>
        <CardsHome />
        <Carrousel />
        <WorkProcess />
        <LeadMagnet />
        <TestimonialsSection />
        <StickyCTA />
      </>
    </>
  );
}
