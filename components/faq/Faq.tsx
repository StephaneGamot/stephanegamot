// src/components/faq/FAQSection.tsx
import faqsData from "./faqs.json";
import type { Faq } from "./types";
import Link from "next/link";

export default function FAQ() {
    const faqs = faqsData as Faq[];

    return (
        // 👉 Montserrat par défaut sur toute la section
        <section className="bg-white dark:bg-gray-950 font-body">
            <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24 lg:py-28">
                {/* H1 pour SEO / accessibilité (caché visuellement), en heading */}
                <h1 className="sr-only font-heading">
                    Questions fréquentes – Foire aux questions sur la création de site internet
                </h1>

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                        FAQ • Questions fréquentes
                    </div>

                    {/* 👉 Titre visible en h2 + Garamond */}
                    <h2 className="mt-4 text-balance text-4xl font-heading font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                        Tout ce que vous devez savoir
                    </h2>

                    {/* Texte en Montserrat (font-body) */}
                    <p className="mt-5 text-pretty text-base leading-7 text-gray-600 dark:text-gray-400">
                        Vous ne trouvez pas la réponse que vous cherchez ? Envoyez-moi
                        simplement un message via le formulaire de contact ou par{" "}
                        <Link
                            href="mailto:contact@exemple.com"
                            className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 underline-offset-4 hover:underline"
                        >
                            e-mail
                        </Link>
                        , et je vous répondrai rapidement.
                    </p>
                </div>

                {/* Liste des FAQ */}
                <div className="mt-14 sm:mt-16">
                    <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className="group h-full rounded-2xl border border-gray-200/80 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md dark:border-gray-800/80 dark:bg-gray-900/70 dark:hover:border-indigo-500/40 font-body"
                            >
                                <dt className="flex items-start gap-3 text-sm text-gray-900 dark:text-white">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-indigo-50 text-xs text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">
                    ?
                  </span>
                                    {/* 👉 Question en Garamond */}
                                    <span className="text-left text-base leading-snug !font-heading">
                    {faq.question}
                  </span>
                                </dt>
                                {/* 👉 Réponse en Montserrat */}
                                <dd className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
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
