import Link from "next/link";

/* ─────────────────────────────────────────────
   Breadcrumb — fil d'Ariane visuel + JSON-LD
   Server Component (pas de "use client" nécessaire)
   ───────────────────────────────────────────── */

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  // Toujours inclure l'accueil en premier
  const allItems: BreadcrumbItem[] = [
    { label: "Accueil", href: "/" },
    ...items,
  ];

  // JSON-LD structuré pour Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href
        ? { item: `https://www.stephanegamot.com${item.href}` }
        : {}),
    })),
  };

  return (
    <>
      {/* JSON-LD pour Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb visuel */}
      <nav
        aria-label="Fil d'Ariane"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-4 pb-2"
      >
        <ol
          className="flex flex-wrap items-center gap-1.5 text-xs tracking-wide"
          style={{
            fontFamily: "var(--font-body)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;

            return (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    style={{ color: "var(--fg-subtle)", opacity: 0.6 }}
                  >
                    /
                  </span>
                )}

                {isLast || !item.href ? (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    style={{ color: isLast ? "var(--fg-base)" : "var(--fg-subtle)" }}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition-colors duration-300 hover:!text-[var(--accent)]"
                    style={{ color: "var(--fg-subtle)" }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
