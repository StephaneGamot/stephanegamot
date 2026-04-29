"use client";

import { useState } from "react";
import Link from "next/link";
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

    // Anti-spam honeypot : si rempli, c'est un bot
    const honeypot = data.get("website")?.toString() || "";
    if (honeypot) {
      // Fake success pour ne pas alerter le bot
      setStatus("success");
      return;
    }

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
            refonte&nbsp;? Décrivez vos besoins : je vous réponds avec des
            pistes concrètes, pas du blabla commercial.
          </p>
        </header>

        {/* Rappel tarifs */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { name: "Vitrine", price: "1 500 €", desc: "Site clair et élégant pour présenter votre activité." },
            { name: "Professionnel", price: "3 500 €", desc: "Site complet avec CMS, SEO avancé et fonctionnalités sur mesure.", highlight: true },
            { name: "E-commerce", price: "5 000 €", desc: "Boutique en ligne avec paiement Stripe et tunnel optimisé." },
          ].map((plan) => (
            <div
              key={plan.name}
              className="p-4"
              style={{
                borderRadius: "1rem",
                border: plan.highlight ? "1px solid var(--accent)" : "1px solid var(--border)",
                background: "var(--surface-1)",
              }}
            >
              <p className="text-xs font-medium uppercase tracking-wider" style={{ color: plan.highlight ? "var(--accent)" : "var(--fg-subtle)" }}>
                {plan.name}
              </p>
              <p className="mt-1 text-lg font-semibold" style={{ color: "var(--fg-base)", fontFamily: "var(--font-heading)" }}>
                À partir de {plan.price}
              </p>
              <p className="mt-1 text-xs" style={{ color: "var(--fg-subtle)" }}>
                {plan.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="mb-10 text-xs" style={{ color: "var(--fg-subtle)" }}>
          Détails complets sur la{" "}
          <Link href="/services/tarifs" className="underline underline-offset-2 decoration-[var(--border)] hover:decoration-[var(--accent)] transition-colors" style={{ color: "var(--accent)" }}>
            page tarifs
          </Link>
          . Chaque devis est personnalisé selon vos besoins.
        </p>

        {/* Raccourci WhatsApp */}
        <div
          className="mb-10 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
          style={{
            borderRadius: "1rem",
            border: "1px solid var(--border)",
            background: "var(--surface-1)",
          }}
        >
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--fg-base)" }}>
              Vous préférez discuter directement ?
            </p>
            <p className="mt-1 text-xs" style={{ color: "var(--fg-subtle)" }}>
              Envoyez-moi un message sur WhatsApp, je réponds généralement en quelques heures.
            </p>
          </div>
          <a
            href="https://wa.me/32477713193?text=Bonjour%20St%C3%A9phane%2C%20je%20souhaiterais%20discuter%20d%27un%20projet%20web."
            target="_blank"
            rel="noopener noreferrer"
            className="btn shrink-0 inline-flex items-center gap-2"
            style={{
              background: "#25D366",
              color: "#fff",
              border: "1px solid #25D366",
              padding: "0.625rem 1.5rem",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </div>

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
          {/* Honeypot anti-spam — invisible pour les humains */}
          <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
            <label htmlFor="website">Ne pas remplir</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

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
