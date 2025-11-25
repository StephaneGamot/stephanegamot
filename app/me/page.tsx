
import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
    title: "À propos | White Wolf Web – Stéphane Gamot",
    description:
        "Découvrez qui se cache derrière White Wolf Web. Je suis Stéphane Gamot, développeur full-stack et créateur de produits digitaux basé en Belgique, spécialisé en sites performants, accessibles et pensés pour le business.",
    openGraph: {
        title: "À propos | White Wolf Web – Stéphane Gamot",
        description:
            "Je conçois et développe des sites et expériences digitales qui allient design élégant, performance technique et stratégie business.",
        type: "website",
        url: "https://ton-domaine.com/a-propos",
    },
    alternates: {
        canonical: "https://ton-domaine.com/a-propos",
    },
};

export default function Page() {
    return (
        <AboutPage />
    );
}






