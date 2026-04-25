
import type { Metadata } from "next";
import Contact from "@/components/contact/Contact"
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact — Parlons de votre projet web — Stéphane Gamot",
  description:
    "Envoyez-moi votre projet : site vitrine, e-commerce, refonte ou audit SEO. Décrivez vos besoins et recevez une réponse personnalisée sous 24 h.",
  alternates: {
    canonical: "https://www.stephanegamot.com/contact",
  },
  openGraph: {
    title: "Contact — Parlons de votre projet web — Stéphane Gamot",
    description:
      "Envoyez-moi votre projet : site vitrine, e-commerce, refonte ou audit SEO. Décrivez vos besoins et recevez une réponse personnalisée sous 24 h.",
    type: "website",
    url: "https://www.stephanegamot.com/contact",
    locale: "fr_BE",
    images: [
      {
        url: "https://www.stephanegamot.com/Images/og/office-workstation.webp",
        width: 1200,
        height: 630,
        alt: "Contactez Stéphane Gamot pour votre projet web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Parlons de votre projet web — Stéphane Gamot",
    description:
      "Envoyez-moi votre projet : site vitrine, e-commerce, refonte ou audit SEO. Réponse personnalisée sous 24 h.",
    images: ["https://www.stephanegamot.com/Images/og/office-workstation.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
    return (
      <>
        <Breadcrumb items={[{ label: "Contact" }]} />
        <Contact />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact — Stéphane Gamot",
              description: "Envoyez-moi votre projet : site vitrine, e-commerce, refonte ou audit SEO.",
              url: "https://www.stephanegamot.com/contact",
              mainEntity: {
                "@type": "ProfessionalService",
                name: "Stéphane Gamot",
                telephone: "+32 477 71 31 93",
                email: "stephanegamot@outlook.com",
                url: "https://www.stephanegamot.com",
              },
            }),
          }}
        />
      </>
    );
}
