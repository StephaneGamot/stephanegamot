"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Error boundary]", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p
        className="text-sm font-semibold uppercase tracking-[0.2em]"
        style={{ color: "var(--accent)" }}
      >
        Erreur
      </p>

      <h2 className="mt-4 text-2xl font-semibold tracking-tight">
        Quelque chose s&apos;est mal passé.
      </h2>

      <p
        className="mt-3 max-w-md text-sm"
        style={{ color: "var(--fg-muted)", lineHeight: "1.7" }}
      >
        Une erreur inattendue est survenue. Vous pouvez réessayer ou
        revenir à l&apos;accueil.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={reset}
          className="btn btn-primary"
        >
          Réessayer
        </button>
        <a
          href="/"
          className="text-sm font-medium transition-colors duration-300"
          style={{
            color: "var(--fg-subtle)",
            borderBottom: "1px solid var(--border)",
            padding: "0.5rem 0",
          }}
        >
          Retour à l&apos;accueil
        </a>
      </div>
    </div>
  );
}
