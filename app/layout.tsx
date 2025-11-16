import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Nav from "@/components/navigation/Header/Nav";
import Nav2 from "@/components/navigation/Header/Nav2";
import Footer from "@/components/navigation/Footer/Footer";

const garamond = Cormorant_Garamond({
    subsets: ["latin"],
    variable: "--font-garamond",
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: ["400", "500", "600"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://stephanegamot.vercel.app"),
    title: {
        default: "Stéphane Gamot — Développeur Full-Stack & SEO",
        template: "%s — Stéphane Gamot · Développeur Full-Stack & SEO",
    },
    description:
        "Développeur full-stack et consultant SEO en Belgique. Sites rapides, élégants et optimisés pour la conversion.",
    openGraph: {
        type: "website",
        siteName: "Stéphane Gamot",
        images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Portfolio Stéphane Gamot" }],
        locale: "fr_FR",
    },
    twitter: {
        card: "summary_large_image",
        images: ["/og/home.png"],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
    <html lang="fr">
      <body
        className={`${garamond.variable} ${montserrat.variable}`}
      > <Nav />
        {children}
      <Footer />
      </body>
    </html>
  );
}
