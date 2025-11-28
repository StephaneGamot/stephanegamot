
// app/faq/page.tsx (ou app/(marketing)/faq/page.tsx)
import type { Metadata } from "next";
import FAQ from "@/components/faq/Faq";

export const metadata: Metadata = {
    title: "FAQ – Questions fréquentes ",
    description:
        "Toutes les réponses aux questions fréquentes sur la création de site internet, les délais, les tarifs, le SEO et la maintenance",
    openGraph: {
        title: "FAQ – Questions fréquentes ",
        description:
            "Découvrez comment je travaille, les délais, les tarifs et les options de maintenance pour votre site internet.",
        type: "website",
        url: "https://www.stephanegamot.com/faq",
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
    alternates: {
        canonical: "https://www.stephanegamot.com/faq",
    },
};

export default function FAQPage() {
    return <FAQ />;
}
