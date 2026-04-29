import type {Metadata, Viewport} from "next";
import "./globals.css";
import Script from "next/script";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Nav from "@/components/navigation/Header/Nav";
import Footer from "@/components/navigation/Footer/Footer";
import WhatsAppButton from "@/components/trust/WhatsAppButton";
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
    metadataBase: new URL("https://www.stephanegamot.com"),
    title: {
        default: "Stéphane Gamot – Créateur de sites web haut de gamme",
        template: "%s | Stéphane Gamot",
    },
    description:
        "Je conçois des sites web élégants, rapides et pensés pour convertir. Ingénieur & Développeur full-stack basé en Belgique, j’accompagne les entrepreneurs et indépendants qui veulent un site professionnel réellement efficace.",
    openGraph: {
        type: "website",
        url: "https://www.stephanegamot.com",
        title: "Stéphane Gamot – Créateur de sites web haut de gamme",
        description:
            "Un site professionnel doit être beau, performant et pensé pour attirer des clients. Je vous accompagne de A à Z pour créer une présence en ligne qui fait la différence.",
        siteName: "Stéphane Gamot",
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
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        {/* Preconnect — réduit le TTFB des ressources tierces */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* dns-prefetch GTM/GA désactivés tant que GA4 n'est pas configuré
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        */}
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
        <link rel="alternate" hrefLang="fr-BE" href="https://www.stephanegamot.com" />
        <link rel="alternate" hrefLang="fr-FR" href="https://www.stephanegamot.com" />
        <link rel="alternate" hrefLang="x-default" href="https://www.stephanegamot.com" />

        {/* Schema.org — WebSite (sitelinks searchbox) + Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.stephanegamot.com/#website",
                  url: "https://www.stephanegamot.com",
                  name: "Stéphane Gamot",
                  description: "Création de sites web performants, élégants et optimisés SEO.",
                  publisher: { "@id": "https://www.stephanegamot.com/#organization" },
                  inLanguage: "fr",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: "https://www.stephanegamot.com/blog?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.stephanegamot.com/#organization",
                  name: "Stéphane Gamot – Création de sites web",
                  url: "https://www.stephanegamot.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.stephanegamot.com/Images/me/me.webp",
                    width: 512,
                    height: 512,
                  },
                  image: "https://www.stephanegamot.com/Images/me/me.webp",
                  description: "Développeur web freelance en Belgique. Sites Next.js, WordPress et e-commerce optimisés pour la conversion.",
                  founder: {
                    "@type": "Person",
                    name: "Stéphane Gamot",
                    url: "https://www.stephanegamot.com/me",
                  },
                  foundingDate: "2023",
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+32 477 71 31 93",
                    email: "stephanegamot@outlook.com",
                    contactType: "customer service",
                    availableLanguage: ["French", "English", "Dutch"],
                    areaServed: ["BE", "FR"],
                  },
                  sameAs: [
                    "https://github.com/StephaneGamot",
                    "https://www.facebook.com/profile.php?id=61560283102227",
                  ],
                },
              ],
            }),
          }}
        />
    </head>
    <body className={`${garamond.variable} ${montserrat.variable}`} style={{ fontFamily: 'var(--font-body)' }}>
        <a href="#main" className="skip-to-content">Aller au contenu principal</a>
        {/* Google Analytics 4 — DÉSACTIVÉ tant que l'ID GA4 réel n'est pas configuré.
            Remplacez G-XXXXXXXXXX par votre ID GA4 puis décommentez les 2 blocs Script.
            Le placeholder chargeait 134 KB de JS inutile et pénalisait le score Lighthouse.
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="GDaY2OVpE6IfdQicYtz/qQ"
          strategy="afterInteractive"
        />
        <Nav />
        <main id="main">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
