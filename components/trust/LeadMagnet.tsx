"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────────────────────────
   LeadMagnet — bannière de capture email
   "Checklist gratuite : 15 points à vérifier
   avant de lancer votre site"
   ───────────────────────────────────────────── */
export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section-tight" aria-label="Checklist gratuite">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", damping: 40, stiffness: 120 }}
        className="mx-auto max-w-4xl px-8 lg:px-12"
      >
        <div
          className="relative overflow-hidden p-8 sm:p-10"
          style={{
            borderRadius: "1.25rem",
            border: "1px solid var(--accent-muted)",
            background: "linear-gradient(135deg, var(--surface-1) 0%, var(--accent-soft) 100%)",
          }}
        >
          {/* Halo décoratif */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full opacity-[0.08]"
            style={{
              background: "radial-gradient(circle, var(--accent), transparent 70%)",
            }}
          />

          <div className="relative grid gap-6 sm:grid-cols-[1fr,auto] sm:items-center">
            <div>
              <p className="section-label mb-2">Ressource gratuite</p>
              <h2
                className="text-lg font-semibold tracking-tight sm:text-xl"
                style={{ color: "var(--fg-base)" }}
              >
                Checklist : 15 points à vérifier avant de lancer votre site
              </h2>
              <p
                className="mt-2 text-xs sm:text-sm"
                style={{ color: "var(--fg-muted)" }}
              >
                SEO, performance, accessibilité, mentions légales, tracking…
                Recevez la checklist complète par email et assurez-vous que rien
                n'a été oublié.
              </p>
            </div>

            <div className="w-full sm:w-72">
              {status === "success" ? (
                <div
                  className="rounded-lg p-4 text-center text-sm"
                  style={{
                    background: "var(--accent-muted)",
                    color: "var(--accent)",
                  }}
                >
                  Checklist envoyée ! Vérifiez votre boîte email.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    required
                    className="w-full text-sm"
                    style={{
                      background: "var(--surface-2)",
                      color: "var(--fg-base)",
                      border: "1px solid var(--border)",
                      borderRadius: "0.5rem",
                      padding: "0.625rem 0.75rem",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn btn-primary w-full"
                    style={{ padding: "0.625rem 1.5rem" }}
                  >
                    {status === "loading"
                      ? "Envoi…"
                      : "Recevoir la checklist"}
                  </button>
                  {status === "error" && (
                    <p className="text-xs text-red-400">
                      Une erreur est survenue. Réessayez.
                    </p>
                  )}
                  <p
                    className="text-xs"
                    style={{ color: "var(--fg-subtle)" }}
                  >
                    Aucun spam, aucun partage. Vous recevez la checklist et
                    c'est tout.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
