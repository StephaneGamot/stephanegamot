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
    metadataBase: new URL("https://stephanegamot.vercel.app"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Création de sites web performants à Bruxelles — Stéphane Gamot",
        description:
            "Développeur web freelance à Bruxelles. Sites Next.js, WordPress et e-commerce Stripe, pensés pour la performance, le référencement et la conversion.",
        url: "https://stephanegamot.vercel.app",
        siteName: "Stéphane Gamot",
        type: "website",
    },
    twitter: {
        title: "Création de sites web performants à Bruxelles — Stéphane Gamot",
        description:
            "Sites Next.js, WordPress et e-commerce optimisés SEO. Performance, design et stratégie digitale.",
        card: "summary_large_image",
    },
};

export default function Home() {
    return (
        <>
            <LocalBusinessJsonLd
                type="ProfessionalService"
                name="Stéphane Gamot"
                url="https://stephanegamot.vercel.app"
                description="Création de sites web professionnels pour entrepreneurs et indépendants qui veulent une présence en ligne élégante, rapide et réellement efficace. Chaque site est pensé pour attirer, rassurer et convertir davantage de clients."
                telephone="+32-477-13-19-93" // remplace par ton vrai numéro
                address={{
                    "@type": "PostalAddress",
                    streetAddress: "O de Kerchove d'Exaerdestraat 193",
                    addressLocality: "Halle",
                    postalCode: "1501",
                    addressCountry: "BE",
                }}
                priceRange="€€€"
                sameAs={[
                    "https://www.linkedin.com/in/TON_LIEN",
                    "https://www.facebook.com/TA_PAGE",
                    "https://www.instagram.com/TON_COMPTE",
                ]}
                slogan="Le design attire le regard, la performance retient le client."
                areaServed={["Belgique", "France"]}
            />

            <main>
                <HeroHomePage />
                <CardsHome />
                <Carrousel />
                <WorkProcess />
                <TestimonialsSection />
                <AboutSection />
            </main>
        </>
    );
}