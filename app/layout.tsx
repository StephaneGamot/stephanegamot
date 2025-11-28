import type {Metadata, Viewport} from "next";
import "./globals.css";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Nav from "@/components/navigation/Header/Nav";
import Footer from "@/components/navigation/Footer/Footer";
// import OgImg from "@/public/Images/og/office-workstation.webp"

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
    metadataBase: new URL("https://stephanegamot.com"),
    title: {
        default: "Stéphane Gamot – Créateur de sites web haut de gamme",
        template: "%s | Stéphane Gamot",
    },
    description:
        "Je conçois des sites web élégants, rapides et pensés pour convertir. Développeur full-stack basé en Belgique, j’accompagne les entrepreneurs et indépendants qui veulent un site professionnel réellement efficace.",
    openGraph: {
        type: "website",
        url: "https://stephanegamot.com",
        title: "Stéphane Gamot – Créateur de sites web haut de gamme",
        description:
            "Un site professionnel doit être beau, performant et pensé pour attirer des clients. Je vous accompagne de A à Z pour créer une présence en ligne qui fait la différence.",
        siteName: "Stéphane Gamot",
        locale: "fr_BE",
        images: [
            {
                url: "@/public/Images/og/office-workstation.webp",
                width: 1200,
                height: 630,
                alt: "Site web professionnel créé par Stéphane Gamot",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
    },
    robots: {
        index: true,
        follow: true,
    },
};


export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
    <html lang="fr">

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
    </head><body
        className={`${garamond.variable} ${montserrat.variable}`}
      > <Nav />
        {children}
      <Footer />
      </body>
    </html>
  );
}
