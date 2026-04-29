import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable — Stéphane Gamot",
  description:
    "La page que vous cherchez n'existe pas ou a été déplacée. Retrouvez mes services, mon portfolio et mes articles.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-32 -top-40 h-72 w-72 rounded-full opacity-[0.04]"
          style={{ background: "var(--accent)", filter: "blur(60px)" }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <p
          className="text-sm font-semibold uppercase tracking-[0.2em]"
          style={{ color: "var(--accent)" }}
        >
          Erreur 404
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Cette page n&apos;existe pas.
        </h1>

        <p
          className="mt-4 max-w-md text-sm sm:text-base"
          style={{ color: "var(--fg-muted)", lineHeight: "1.8" }}
        >
          La page que vous cherchez a peut-être été déplacée, supprimée
          ou n&apos;a jamais existé. Pas de panique — voici quelques liens
          pour retrouver votre chemin.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-primary">
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors duration-300"
            style={{
              color: "var(--fg-subtle)",
              borderBottom: "1px solid var(--border)",
              padding: "0.5rem 0",
            }}
          >
            Me contacter →
          </Link>
        </div>

        {/* Maillage interne — récupération SEO du jus */}
        <nav
          className="mt-14 w-full pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
          aria-label="Liens utiles"
        >
          <p
            className="text-xs uppercase tracking-[0.12em] mb-4"
            style={{ color: "var(--fg-subtle)" }}
          >
            Pages populaires
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/services/site-web-react-next", label: "Site Next.js" },
              { href: "/services/site-internet-wordpress", label: "Site WordPress" },
              { href: "/services/seo", label: "Audit SEO" },
              { href: "/services/e-commerce", label: "E-commerce" },
              { href: "/services/tarifs", label: "Tarifs" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/blog", label: "Blog" },
              { href: "/faq", label: "FAQ" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm px-4 py-2 transition-colors duration-300"
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: "0.5rem",
                  color: "var(--fg-muted)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}
