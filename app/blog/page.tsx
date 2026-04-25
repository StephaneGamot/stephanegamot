// app/(marketing)/blog/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "../blog/posts";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

const SITE_URL = "https://www.stephanegamot.com";

export const metadata: Metadata = {
  title: "Blog — Conseils en web, SEO et performance digitale",
  description:
    "Articles sur la création de sites modernes, le SEO, la performance web et l’accessibilité pour PME et indépendants. Explorez nos conseils.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    title: "Blog & conseils – Web, SEO, performance | Stéphane Gamot",
    description:
      "Conseils pour mieux comprendre comment un site bien pensé peut vraiment servir votre activité : design, SEO, performance, conversion.",
    siteName: "Stéphane Gamot",
    locale: "fr_BE",
    images: [
      {
        url: `${SITE_URL}/Images/me/me.webp`, 
        width: 1200,
        height: 630,
        alt: "Blog de Stéphane Gamot sur le web, le SEO et la performance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & conseils – Web, SEO, performance | Stéphane Gamot",
    description:
      "Création de sites, SEO, performance, UX et accessibilité expliqués simplement pour les entrepreneurs.",
    images: [`${SITE_URL}/Images/me/me.webp`],
  },
};

export default function BlogPage() {
    return (
        <>
        <div className="section">
            <Breadcrumb items={[{ label: "Blog" }]} />
            <div className="mx-auto max-w-5xl px-8 lg:px-12" style={{ paddingTop: "var(--section-gap)" }}>
                {/* En-tête de section */}
                <header className="mb-10 sm:mb-12">
                    <p className="section-label mb-4">
                        Blog
                    </p>
                    <h1 className="mt-3" style={{ color: "var(--fg-base)" }}>
                        Conseils web, SEO & performance.
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm" style={{ color: "var(--fg-muted)" }}>
                        Des articles pour mieux comprendre comment un site bien pensé peut
                        vraiment servir votre activité (et pas seulement « faire joli »).
                    </p>
                </header>

                {/* Liste des articles */}
                <div className="mt-10 space-y-12 lg:mt-14 lg:space-y-14">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            style={{ borderRadius: "1rem", border: "1px solid var(--border)", background: "var(--surface-1)" }}
                        >
                            <Link
                                href={`/blog/${post.slug}`}
                                className="flex flex-col gap-6 p-4 sm:p-6 lg:flex-row lg:gap-10 lg:p-7 transition-colors"
                                aria-label={`Lire l'article : ${post.title}`}
                            >
                                {/* Image de couverture */}
                                <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        fill
                                        sizes="(min-width: 1024px) 16rem, (min-width: 640px) 60vw, 100vw"
                                        className="absolute inset-0 rounded-2xl object-cover"
                                    />
                                    <div className="absolute inset-0 rounded-2xl" style={{ border: "1px solid var(--border)" }} />
                                </div>

                                {/* Contenu texte */}
                                <div className="relative">
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs" style={{ color: "var(--fg-subtle)" }}>
                                        <time dateTime={post.datetime}>{post.date}</time>
                                        <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium" style={{ background: "var(--surface-2)", color: "var(--fg-muted)" }}>
                      {post.category.title}
                    </span>

                                        {/* ⏱️ Temps de lecture */}
                                        <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-medium" style={{ background: "var(--surface-2)", color: "var(--fg-muted)" }}>
                      <span aria-hidden>⏱️</span>
                                            {post.readingTimeMinutes} min
                    </span>

                                        {/* ⭐ Badge lectures si ≥ 50 */}
                                        {post.views >= 50 && (
                                            <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-medium" style={{ background: "var(--accent-muted)", color: "var(--accent)" }}>
                        ⭐ {post.views} lectures
                      </span>
                                        )}
                                    </div>

                                    <h2 className="mt-3 text-lg sm:text-xl font-semibold" style={{ color: "var(--fg-base)" }}>
                                        {post.title}
                                    </h2>

                                    <p className="mt-3 text-sm sm:text-[15px] leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                                        {post.description}
                                    </p>

                                    <div className="mt-6 flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                                        <Image
                                            src={post.author.imageUrl}
                                            alt={post.author.name}
                                            width={40}
                                            height={40}
                                            className="h-10 w-10 rounded-full object-cover"
                                        />
                                        <div className="text-xs" style={{ color: "var(--fg-subtle)" }}>
                                            <p className="font-semibold" style={{ color: "var(--fg-base)" }}>
                                                {post.author.name}
                                            </p>
                                            <p>{post.author.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>

                {/* Liens internes */}
                <aside className="mt-14 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
                    <p className="text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "var(--fg-subtle)" }}>
                        Découvrir aussi
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {[
                            { href: "/services/seo", label: "Services SEO" },
                            { href: "/services/site-web-react-next", label: "Sites React & Next.js" },
                            { href: "/portfolio", label: "Portfolio" },
                            { href: "/faq", label: "Questions fréquentes" },
                            { href: "/contact", label: "Me contacter" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm px-4 py-2 transition-colors duration-300 hover:!border-[var(--accent)] hover:!text-[var(--accent)]"
                                style={{ border: "1px solid var(--border)", borderRadius: "0.5rem", color: "var(--fg-muted)" }}
                            >
                                {link.label} →
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
        </div>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    name: "Blog — Conseils en web, SEO et performance digitale",
                    description: "Articles sur la création de sites modernes, le SEO, la performance web et l'accessibilité.",
                    url: "https://www.stephanegamot.com/blog",
                    mainEntity: {
                        "@type": "ItemList",
                        itemListElement: posts.map((post, index) => ({
                            "@type": "ListItem",
                            position: index + 1,
                            url: `https://www.stephanegamot.com/blog/${post.slug}`,
                            name: post.title,
                        })),
                    },
                }),
            }}
        />
        </>
    );
}

