
// app/faq/page.tsx (ou app/(marketing)/faq/page.tsx)
import type { Metadata } from "next";
import FAQ from "@/components/faq/Faq";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import faqsData from "@/components/faq/faqs.json";

export const metadata: Metadata = {
    title: "FAQ — Questions sur la création de site web et le SEO",
    description:
        "Consultez les réponses aux questions fréquentes sur la création de site internet, les délais, tarifs, SEO et maintenance. Trouvez votre réponse ici.",
    openGraph: {
        title: "FAQ — Questions sur la création de site web et le SEO",
        description:
            "Consultez les réponses aux questions fréquentes sur la création de site internet, les délais, tarifs, SEO et maintenance. Trouvez votre réponse ici.",
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
    twitter: {
        card: "summary_large_image",
        title: "FAQ — Questions sur la création de site web et le SEO",
        description:
            "Consultez les réponses aux questions fréquentes sur la création de site, les délais, tarifs et SEO. Trouvez votre réponse ici.",
        images: ["https://www.stephanegamot.com/Images/og/office-workstation.webp"],
    },
    alternates: {
        canonical: "https://www.stephanegamot.com/faq",
    },
    keywords: [
        "FAQ création site web",
        "questions fréquentes SEO",
        "tarif site internet",
        "délai création site",
        "maintenance site web",
        "WordPress ou Next.js",
    ],
    authors: [{ name: "Stéphane Gamot", url: "https://www.stephanegamot.com/me" }],
    robots: {
        index: true,
        follow: true,
    },
};

export default function FAQPage() {
    return (
        <>
            <Breadcrumb items={[{ label: "FAQ" }]} />
            <FAQ />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "FAQPage",
                                inLanguage: "fr",
                                mainEntity: faqsData.map((faq) => ({
                                    "@type": "Question",
                                    name: faq.question,
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: faq.answer,
                                    },
                                })),
                            },
                            {
                                "@type": "BreadcrumbList",
                                itemListElement: [
                                    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.stephanegamot.com" },
                                    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.stephanegamot.com/faq" },
                                ],
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
