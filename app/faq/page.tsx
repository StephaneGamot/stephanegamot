
// app/faq/page.tsx (ou app/(marketing)/faq/page.tsx)
import type { Metadata } from "next";
import Link from "next/link";
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
        languages: {
            "fr-BE": "https://www.stephanegamot.com/faq",
            "fr-FR": "https://www.stephanegamot.com/faq",
            "x-default": "https://www.stephanegamot.com/faq",
        },
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

            {/* Maillage interne — ressources utiles */}
            <section className="section">
              <div className="divider mx-auto max-w-6xl" />
              <div
                className="mx-auto max-w-5xl px-8 lg:px-12"
                style={{ paddingTop: "var(--section-gap)" }}
              >
                <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
                  Ressources complémentaires
                </h2>
                <p
                  className="mt-2 text-sm sm:text-base"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Vous ne trouvez pas votre réponse ? Ces pages peuvent vous aider.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    { href: "/blog/combien-coute-un-site-web-en-2026-prix-pieges", label: "Prix d'un site web en 2026" },
                    { href: "/blog/wordpress-vs-nextjs-quel-choisir", label: "WordPress vs Next.js" },
                    { href: "/blog/seo-2026-ce-qui-marche-vraiment", label: "SEO 2026 : ce qui marche" },
                    { href: "/services/tarifs", label: "Tarifs & formules" },
                    { href: "/services/site-vitrine", label: "Site vitrine" },
                    { href: "/services/e-commerce", label: "E-commerce" },
                    { href: "/services/seo", label: "Audit SEO" },
                    { href: "/contact", label: "Me contacter" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm px-4 py-2 transition-colors duration-300 hover:!border-[var(--accent)] hover:!text-[var(--accent)]"
                      style={{
                        border: "1px solid var(--border)",
                        borderRadius: "0.5rem",
                        color: "var(--fg-muted)",
                      }}
                    >
                      {link.label} →
                    </Link>
                  ))}
                </div>
              </div>
            </section>

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
                        ],
                    }),
                }}
            />
        </>
    );
}
