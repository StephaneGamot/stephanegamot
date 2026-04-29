"use client";

import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
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
      setErrorMsg("Impossible d'envoyer votre message. Reessayez plus tard.");
    }
  }

  return (
    <main>
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Titre global */}
        <header className="mb-10 max-w-2xl">
          <p className="section-label">
            Contact
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "var(--fg-base)" }}>
            Parlons de votre projet.
          </h1>
          <p className="mt-3 text-sm" style={{ color: "var(--fg-muted)" }}>
            Un site sur mesure, un e-commerce, un audit SEO ou une
            refonte&nbsp;? Decrivez vos besoins : je vous reponds avec des
            pistes concretes, pas du blabla commercial.
          </p>
        </header>

        {/* Messages etat */}
        {status === "success" && (
          <p
            className="mb-6 rounded-lg px-4 py-3 text-sm"
            style={{ background: "var(--accent-muted)", color: "var(--accent)" }}
          >
            Merci, votre message a bien ete envoye. Je reviens vers vous
            rapidement.
          </p>
        )}
        {status === "error" && (
          <p className="mb-6 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {errorMsg}
          </p>
        )}

        {/* Formulaire global */}
        <form
          onSubmit={handleSubmit}
          className="divide-y"
          style={{ borderColor: "var(--border)" }}
          noValidate
        >
          {/* Bloc 1 : Vos informations */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">
            <div className="px-1 sm:px-0">
              <h2 className="text-base font-semibold" style={{ color: "var(--fg-base)" }}>
                Vos informations
              </h2>
              <p className="mt-1 text-sm" style={{ color: "var(--fg-subtle)" }}>
                Dites-moi qui vous etes afin que je puisse vous repondre dans
                les meilleures conditions.
              </p>

              <div className="mt-6 space-y-3 text-sm" style={{ color: "var(--fg-subtle)" }}>
                <p className="font-semibold" style={{ color: "var(--fg-muted)" }}>
                  Coordonnees directes
                </p>
                <p>
                  Email :{" "}
                  <a
                    href="mailto:stephanegamot@outlook.com"
                    style={{ color: "var(--accent)" }}
                  >
                    stephanegamot@outlook.com
                  </a>
                  <br />
                  Telephone :{" "}
                  <a
                    href="tel:+324777131993"
                    style={{ color: "var(--accent)" }}
                  >
                    0477 71 31 93
                  </a>
                  <br />
                  Region : Bruxelles - Halle - Belgique (clients a distance
                  possibles)
                </p>
              </div>
            </div>

            <div
              className="md:col-span-2 sm:rounded-xl"
              style={{ background: "var(--surface-1)", border: "1px solid var(--border)", borderRadius: "1rem" }}
            >
              <div className="px-4 py-6 sm:p-8">
                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium"
                      style={{ color: "var(--fg-base)" }}
                    >
                      Prenom *
                    </label>
                    <div className="mt-2">
                      <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        autoComplete="given-name"
                        required
                        className="w-full text-sm"
                        style={{ background: "var(--surface-2)", color: "var(--fg-base)", border: "1px solid var(--border)", borderRadius: "0.5rem", padding: "0.5rem 0.75rem" }}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium"
                      style={{ color: "var(--fg-base)" }}
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
                        className="w-full text-sm"
                        style={{ background: "var(--surface-2)", color: "var(--fg-base)", border: "1px solid var(--border)", borderRadius: "0.5rem", padding: "0.5rem 0.75rem" }}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                      style={{ color: "var(--fg-base)" }}
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
                        className="w-full text-sm"
                        style={{ background: "var(--surface-2)", color: "var(--fg-base)", border: "1px solid var(--border)", borderRadius: "0.5rem", padding: "0.5rem 0.75rem" }}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium"
                      style={{ color: "var(--fg-base)" }}
                    >
                      Telephone (optionnel)
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="w-full text-sm"
                        style={{ background: "var(--surface-2)", color: "var(--fg-base)", border: "1px solid var(--border)", borderRadius: "0.5rem", padding: "0.5rem 0.75rem" }}
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium"
                      style={{ color: "var(--fg-base)" }}
                    >
                      Entreprise / organisation (optionnel)
                    </label>
                    <div className="mt-2">
                      <input
                        id="company"
                        name="company"
                        type="text"
                        className="w-full text-sm"
                        style={{ background: "var(--surface-2)", color: "var(--fg-base)", border: "1px solid var(--border)", borderRadius: "0.5rem", padding: "0.5rem 0.75rem" }}
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
              <h2 className="text-base font-semibold" style={{ color: "var(--fg-base)" }}>
                Parlez-moi de votre projet
              </h2>
              <p className="mt-1 text-sm" style={{ color: "var(--fg-subtle)" }}>
                Plus vous etes precis, plus je peux vous proposer un plan
                d'action adapte : type de site, objectifs, delais, budget...
              </p>
            </div>

            <div
              className="md:col-span-2"
              style={{ background: "var(--surface-1)", border: "1px solid var(--border)", borderRadius: "1rem" }}
            >
              <div className="px-4 py-6 sm:p-8">
                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="project-type"
                      className="block text-sm font-medium"
                      style={{ color: "var(--fg-base)" }}
                    >
                      Type de projet
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <select
                        id="project-type"
                        name="project-type"
                        className="col-start-1 row-start-1 w-full appearance-none text-sm"
                        style={{ background: "var(--surface-2)", color: "var(--fg-base)", border: "1px solid var(--border)", borderRadius: "0.5rem", padding: "0.5rem 0.75rem" }}
                      >
                        <option>Site vitrine</option>
                        <option>Site e-commerce</option>
                        <option>Refonte de site</option>
                        <option>SEO / Audit technique</option>
                        <option>Autre (preciser ci-dessous)</option>
                      </select>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end sm:size-4"
                        style={{ color: "var(--fg-subtle)" }}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium"
                      style={{ color: "var(--fg-base)" }}
                    >
                      Budget indicatif
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <select
                        id="budget"
                        name="budget"
                        className="col-start-1 row-start-1 w-full appearance-none text-sm"
                        style={{ background: "var(--surface-2)", color: "var(--fg-base)", border: "1px solid var(--border)", borderRadius: "0.5rem", padding: "0.5rem 0.75rem" }}
                      >
                        <option>Moins de 1 500 EUR</option>
                        <option>1 500 EUR - 3 000 EUR</option>
                        <option>3 000 EUR - 6 000 EUR</option>
                        <option>6 000 EUR et plus</option>
                        <option>Je ne sais pas encore</option>
                      </select>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end sm:size-4"
                        style={{ color: "var(--fg-subtle)" }}
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium"
                      style={{ color: "var(--fg-base)" }}
                    >
                      Votre message *
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Par exemple : refonte de notre site vitrine, besoin d'ameliorer les performances, integration Stripe, SEO local pour Bruxelles, etc."
                        className="w-full text-sm"
                        style={{ background: "var(--surface-2)", color: "var(--fg-base)", border: "1px solid var(--border)", borderRadius: "0.5rem", padding: "0.5rem 0.75rem" }}
                      />
                    </div>
                  </div>

                  {/* Piece jointe UI seulement */}
                  <div className="col-span-full">
                    <p className="block text-sm font-medium" style={{ color: "var(--fg-base)" }}>
                      Piece jointe (optionnel)
                    </p>

                    <div
                      className="mt-2 flex justify-center rounded-lg border border-dashed px-6 py-8"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <div className="text-center">
                        <PhotoIcon
                          aria-hidden="true"
                          className="mx-auto size-10"
                          style={{ color: "var(--fg-subtle)" }}
                        />
                        <div className="mt-3 flex text-sm" style={{ color: "var(--fg-muted)" }}>
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md px-2 font-semibold"
                            style={{ color: "var(--accent)" }}
                          >
                            <span>Importer un fichier</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">ou glisser-deposer</p>
                        </div>
                        <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
                          PDF, PNG, JPG, jusqu'a 10&nbsp;Mo
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
                        className="mt-1 h-4 w-4 rounded"
                        style={{ accentColor: "var(--accent)" }}
                      />
                      <label
                        htmlFor="consent"
                        className="text-xs"
                        style={{ color: "var(--fg-muted)" }}
                      >
                        J'accepte que mes donnees soient utilisees pour etre
                        recontacte au sujet de ma demande. Aucune prospection
                        abusive, aucun partage avec des tiers.
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Boutons */}
              <div
                className="flex items-center justify-end gap-x-6 border-t px-4 py-4 sm:px-8"
                style={{ borderColor: "var(--border)" }}
              >
                <button
                  type="reset"
                  className="text-sm font-semibold"
                  style={{ color: "var(--fg-muted)" }}
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
                  className="btn btn-primary"
                >
                  {status === "loading"
                    ? "Envoi en cours..."
                    : "Envoyer ma demande"}
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* ── Signaux de confiance ── */}
        <div
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
          aria-label="Engagements"
        >
          {[
            {
              title: "Réponse sous 24 h",
              desc: "Je reviens vers vous en moins d'un jour ouvré, avec des pistes concrètes.",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              ),
            },
            {
              title: "Devis gratuit, sans engagement",
              desc: "Aucune obligation : on échange, je vous propose un plan clair et un prix fixe.",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              ),
            },
            {
              title: "30 jours de support inclus",
              desc: "Après livraison, je reste disponible pour les ajustements et corrections.",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              ),
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 p-4"
              style={{
                borderRadius: "1rem",
                border: "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <div className="mt-0.5 shrink-0">{item.icon}</div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--fg-base)" }}>
                  {item.title}
                </p>
                <p className="mt-1 text-xs" style={{ color: "var(--fg-subtle)" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
