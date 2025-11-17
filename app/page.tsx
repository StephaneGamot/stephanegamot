import type { Metadata } from "next";

import HeroHomePage from "./../components/heroes/HeroHomePage"
import CardsHome from "@/components/cards/CardsHome";
import Carrousel from "@/components/carrousel/Carrousel";
import WorkProcess from "@/components/workProcess/WorkProcess";
import TestimonialsSection from "@/components/Testimonials/Testimonials"
import AboutSection from "@/components/about/AboutSection"

export const metadata = {
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
    },
    twitter: {
        title: "Création de sites web performants à Bruxelles — Stéphane Gamot",
        description:
            "Sites Next.js, WordPress et e-commerce optimisés SEO. Performance, design et stratégie digitale.",
    },
};


export default function Home() {
  return (
<main>

    <CardsHome />
    <Carrousel />

    <TestimonialsSection />

</main>
  );
}
