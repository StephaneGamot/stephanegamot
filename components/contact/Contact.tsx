"use client";

import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
        "idle"
    );
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg(null);

        const form = e.currentTarget;
        const data = new FormData(form);

        const payload = {
            firstName: data.get("first-name")?.toString().trim() || "",
            lastName: data.get("last-name")?.toString().trim() || "",
            email: data.get("email")?.toString().trim() || "",
            phone: data.get("phone")?.toString().trim() || "",
            company: data.get("company")?.toString().trim() || "",
            projectType: data.get("project-type")?.toString() || "",
            budget: data.get("budget")?.toString() || "",
            message: data.get("message")?.toString().trim() || "",
            consent: data.get("consent") === "on",
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const json = await res.json();

            if (!res.ok || !json.ok) {
                setStatus("error");
                setErrorMsg(json.error || "Une erreur est survenue.");
                return;
            }

            setStatus("success");
            form.reset();
        } catch (err) {
            console.error(err);
            setStatus("error");
            setErrorMsg("Impossible d'envoyer votre message. Réessayez plus tard.");
        }
    }

    return (
        <main className="bg-slate-950 text-white">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                {/* Titre global */}
                <header className="mb-10 max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
                        Contact
                    </p>
                    <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        Parlons de votre projet.
                    </h1>
                    <p className="mt-3 text-sm text-white/70">
                        Un site sur mesure, un e-commerce, un audit SEO ou une refonte&nbsp;?
                        Décrivez vos besoins : je vous réponds avec des pistes concrètes, pas du
                        blabla commercial.
                    </p>
                </header>

                {/* Messages état */}
                {status === "success" && (
                    <p className="mb-6 rounded-lg bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                        ✅ Merci, votre message a bien été envoyé. Je reviens vers vous
                        rapidement.
                    </p>
                )}
                {status === "error" && (
                    <p className="mb-6 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-300">
                        ⚠️ {errorMsg}
                    </p>
                )}

                {/* Formulaire global */}
                <form
                    onSubmit={handleSubmit}
                    className="divide-y divide-white/10"
                    noValidate
                >
                    {/* Bloc 1 : Vos informations */}
                    <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">
                        <div className="px-1 sm:px-0">
                            <h2 className="text-base font-semibold text-white">Vos informations</h2>
                            <p className="mt-1 text-sm text-white/60">
                                Dites-moi qui vous êtes afin que je puisse vous répondre dans les
                                meilleures conditions.
                            </p>

                            <div className="mt-6 space-y-3 text-sm text-white/60">
                                <p className="font-semibold text-white/80">Coordonnées directes</p>
                                <p>
                                    Email :{" "}
                                    <a
                                        href="mailto:contact@whitewolfweb.be"
                                        className="text-indigo-300 hover:text-indigo-200"
                                    >
                                        contact@whitewolfweb.be
                                    </a>
                                    <br />
                                    Région : Bruxelles – Halle – Belgique (clients à distance possibles)
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-2 bg-white shadow-sm outline outline-1 outline-gray-900/5 sm:rounded-xl dark:bg-slate-900/80 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                            <div className="px-4 py-6 sm:p-8">
                                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Prénom *
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="first-name"
                                                name="first-name"
                                                type="text"
                                                autoComplete="given-name"
                                                required
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="last-name"
                                            className="block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Nom *
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="last-name"
                                                name="last-name"
                                                type="text"
                                                autoComplete="family-name"
                                                required
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Adresse email *
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Téléphone (optionnel)
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                autoComplete="tel"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label
                                            htmlFor="company"
                                            className="block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Entreprise / organisation (optionnel)
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="company"
                                                name="company"
                                                type="text"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bloc 2 : Votre projet */}
                    <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">
                        <div className="px-1 sm:px-0">
                            <h2 className="text-base font-semibold text-white">
                                Parlez-moi de votre projet
                            </h2>
                            <p className="mt-1 text-sm text-white/60">
                                Plus vous êtes précis, plus je peux vous proposer un plan d’action
                                adapté : type de site, objectifs, délais, budget…
                            </p>
                        </div>

                        <div className="md:col-span-2 bg-white shadow-sm outline outline-1 outline-gray-900/5 sm:rounded-xl dark:bg-slate-900/80 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                            <div className="px-4 py-6 sm:p-8">
                                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="project-type"
                                            className="block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Type de projet
                                        </label>
                                        <div className="mt-2 grid grid-cols-1">
                                            <select
                                                id="project-type"
                                                name="project-type"
                                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm dark:bg-white/5 dark:text-white dark:outline-white/10 dark:*:bg-slate-900 dark:focus:outline-indigo-500"
                                            >
                                                <option>Site vitrine</option>
                                                <option>Site e-commerce</option>
                                                <option>Refonte de site</option>
                                                <option>SEO / Audit technique</option>
                                                <option>Autre (préciser ci-dessous)</option>
                                            </select>
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="budget"
                                            className="block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Budget indicatif
                                        </label>
                                        <div className="mt-2 grid grid-cols-1">
                                            <select
                                                id="budget"
                                                name="budget"
                                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm dark:bg-white/5 dark:text-white dark:outline-white/10 dark:*:bg-slate-900 dark:focus:outline-indigo-500"
                                            >
                                                <option>Moins de 1 500 €</option>
                                                <option>1 500 € – 3 000 €</option>
                                                <option>3 000 € – 6 000 €</option>
                                                <option>6 000 € et plus</option>
                                                <option>Je ne sais pas encore</option>
                                            </select>
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Votre message *
                                        </label>
                                        <div className="mt-2">
                      <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          placeholder="Par exemple : refonte de notre site vitrine, besoin d'améliorer les performances, intégration Stripe, SEO local pour Bruxelles, etc."
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                      />
                                        </div>
                                    </div>

                                    {/* Pièce jointe UI seulement */}
                                    <div className="col-span-full">
                                        <label
                                            htmlFor="file-upload"
                                            className="block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Pièce jointe (optionnel)
                                        </label>
                                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-8 dark:border-white/25">
                                            <div className="text-center">
                                                <PhotoIcon
                                                    aria-hidden="true"
                                                    className="mx-auto size-10 text-gray-300 dark:text-gray-500"
                                                />
                                                <div className="mt-3 flex text-sm text-gray-600 dark:text-gray-400">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="relative cursor-pointer rounded-md bg-white px-2 font-semibold text-indigo-600 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 hover:text-indigo-500 dark:bg-transparent dark:text-indigo-400 dark:focus-within:outline-indigo-500 dark:hover:text-indigo-300"
                                                    >
                                                        <span>Importer un fichier</span>
                                                        <input
                                                            id="file-upload"
                                                            name="file-upload"
                                                            type="file"
                                                            className="sr-only"
                                                        />
                                                    </label>
                                                    <p className="pl-1">ou glisser-déposer</p>
                                                </div>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    PDF, PNG, JPG, jusqu’à 10&nbsp;Mo
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <div className="flex items-start gap-3">
                                            <input
                                                id="consent"
                                                name="consent"
                                                type="checkbox"
                                                className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 dark:border-white/20 dark:bg-white/5"
                                            />
                                            <label htmlFor="consent" className="text-xs text-white/70">
                                                J’accepte que mes données soient utilisées pour être recontacté·e
                                                au sujet de ma demande. Aucune prospection abusive, aucun partage
                                                avec des tiers.
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Boutons */}
                            <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8 dark:border-white/10">
                                <button
                                    type="reset"
                                    className="text-sm font-semibold text-gray-900 dark:text-white"
                                    onClick={() => {
                                        setStatus("idle");
                                        setErrorMsg(null);
                                    }}
                                >
                                    Effacer
                                </button>
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                                >
                                    {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}

