// src/components/faq/FAQSection.tsx
import faqsData from "./faqs.json";
import type { Faq } from "./types";
import Link from "next/link";

export default function FAQ() {
    const faqs = faqsData as Faq[];

    return (
        <section className="font-body">
            <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24 lg:py-28">
                {/* H1 pour SEO / accessibilite (cache visuellement), en heading */}
                <h1 className="sr-only font-heading">
                    Questions frequentes - Foire aux questions sur la creation de site internet
                </h1>

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <div className="section-label inline-flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                        FAQ - Questions frequentes
                    </div>

                    {/* Titre visible en h2 + Garamond */}
                    <h2
                        className="mt-4 text-balance text-4xl font-heading font-semibold tracking-tight sm:text-5xl"
                        style={{ color: "var(--fg-base)" }}
                    >
                        Tout ce que vous devez savoir
                    </h2>

                    {/* Texte en Montserrat (font-body) */}
                    <p className="mt-5 text-pretty text-base leading-7" style={{ color: "var(--fg-muted)" }}>
                        Vous ne trouvez pas la reponse que vous cherchez ? Envoyez-moi simplement un message via le{" "}
                        <Link
                            href="/contact"
                            className="font-semibold underline-offset-4 hover:underline"
                            style={{ color: "var(--accent)" }}
                        >
                            formulaire de contact
                        </Link>
                        {" "}et je vous répondrai rapidement.
                    </p>
                </div>

                {/* Liste des FAQ */}
                <div className="mt-14 sm:mt-16">
                    <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className="group h-full p-6 transition hover:-translate-y-1 font-body"
                                style={{ background: "var(--surface-1)", border: "1px solid var(--border)", borderRadius: "1rem" }}
                            >
                                <dt className="flex items-start gap-3 text-sm">
                                  <span
                                      className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full text-xs"
                                      style={{ background: "var(--accent-muted)", color: "var(--accent)" }}
                                  >
                                    ?
                                  </span>
                                    {/* Question en Garamond */}
                                    <span
                                        className="text-left text-base leading-snug !font-heading"
                                        style={{ color: "var(--fg-base)" }}
                                    >
                                    {faq.question}
                                  </span>
                                </dt>
                                {/* Reponse en Montserrat */}
                                <dd
                                    className="mt-3 text-sm leading-relaxed"
                                    style={{ color: "var(--fg-muted)" }}
                                >
                                    {faq.answer}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
