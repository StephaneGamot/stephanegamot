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
    title: "Stéphane Gamot – Web & SEO",
    description: "Agence web & SEO haut de gamme.",
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
