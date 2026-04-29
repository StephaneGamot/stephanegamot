// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock3 } from "lucide-react";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { posts } from "../posts";

// ⚠️ Avec Next 16, params est un Promise côté RSC
type ParamsPromise = Promise<{ slug: string }>;

const SITE_URL = "https://www.stephanegamot.com";

/* ─── SSG : pré-rend chaque article au build ─── */
export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

/* ─── ISR : revalide en arrière-plan toutes les heures ─── */
export const revalidate = 3600;

export async function generateMetadata(
  { params }: { params: ParamsPromise }
): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  const canonicalUrl = `${SITE_URL}/blog/${slug}`;

  if (!post) {
    return {
      title: "Article introuvable ",
      description: "Article introuvable sur le blog de Stéphane Gamot.",
      alternates: {
        canonical: canonicalUrl,
      },
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  // Normalise l’URL de l’image (Unsplash ou locale)
  const rawImageUrl =
  typeof post.imageUrl === "string" ? post.imageUrl : post.imageUrl.src;

const ogImageUrl = rawImageUrl.startsWith("http")
  ? rawImageUrl
  : `${SITE_URL}${rawImageUrl}`;

  return {
    title: `${post.title}`,
    description: post.description,
    authors: [{ name: "Stéphane Gamot", url: "https://www.stephanegamot.com/me" }],
    keywords: [post.category.title],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: `${post.title}`,
      description: post.description,
      siteName: "Stéphane Gamot",
      locale: "fr_BE",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      authors: [post.author.name],
      publishedTime: post.datetime, // format AAAA-MM-JJ
      // éventuellement :
      // modifiedTime: post.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title}`,
      description: post.description,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostPage({
                                               params,
                                           }: {
    params: ParamsPromise;
}) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="section">
                <div className="mx-auto max-w-3xl px-8 lg:px-12" style={{ paddingTop: "var(--section-gap)" }}>
                    <h1 className="text-2xl font-semibold" style={{ color: "var(--fg-base)" }}>Article introuvable</h1>
                    <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                        Aucun article trouvé pour le slug :{" "}
                        <span className="font-mono" style={{ color: "var(--accent)" }}>
              {String(slug || "(slug vide)")}
            </span>
                    </p>
                    <p className="mt-4 text-sm" style={{ color: "var(--fg-muted)" }}>
                        Slugs disponibles :
                        <br />
                        {posts.map((p) => (
                            <span key={p.slug} className="block font-mono text-xs">
                {p.slug}
              </span>
                        ))}
                    </p>

                    <Link
                        href="/blog"
                        className="mt-6 inline-flex items-center text-sm transition-colors"
                        style={{ color: "var(--accent)" }}
                    >
                        ← Retour au blog
                    </Link>
                </div>
            </div>
        );
    }

    const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

    const rawImg = typeof post.imageUrl === "string" ? post.imageUrl : post.imageUrl.src;
    const fullImageUrl = rawImg.startsWith("http") ? rawImg : `${SITE_URL}${rawImg}`;

    const articleSchema = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            image: fullImageUrl,
            datePublished: post.datetime,
            author: {
                "@type": "Person",
                name: post.author.name,
                url: `${SITE_URL}${post.author.href}`,
            },
            publisher: {
                "@type": "Organization",
                name: "Stéphane Gamot",
                url: SITE_URL,
            },
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${SITE_URL}/blog/${post.slug}`,
            },
            url: `${SITE_URL}/blog/${post.slug}`,
            wordCount: post.readingTimeMinutes * 200,
            inLanguage: "fr",
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
            ],
          },
        ],
    };

    return (
        <>
        <div className="section">
            <div className="mx-auto max-w-4xl px-8 lg:px-12" style={{ paddingTop: "var(--section-gap)" }}>
                {/* Breadcrumb */}
                <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

                {/* Header article */}
                <header className="mb-8">
                    <p className="section-label">
                        {post.category.title}
                    </p>
                    <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "var(--fg-base)" }}>
                        {post.title}
                    </h1>

                    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs" style={{ color: "var(--fg-subtle)" }}>
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span className="h-1 w-1 rounded-full" style={{ background: "var(--border)" }} />
                        <span className="inline-flex items-center gap-1">
              <Clock3 className="h-3.5 w-3.5" aria-hidden />
                            {post.readingTimeMinutes} min de lecture
            </span>
                        {post.views >= 50 && (
                            <>
                                <span className="h-1 w-1 rounded-full" style={{ background: "var(--border)" }} />
                                <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium" style={{ background: "var(--accent-muted)", color: "var(--accent)" }}>
                  {post.views.toLocaleString("fr-BE")} lectures
                </span>
                            </>
                        )}
                    </div>

                    {/* Auteur */}
                    <div className="mt-5 flex items-center gap-3">
                        <Image
                            src={post.author.imageUrl}
                            alt={post.author.name}
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-full object-cover"
                        />
                        <div className="text-xs" style={{ color: "var(--fg-subtle)" }}>
                            <p className="font-semibold" style={{ color: "var(--fg-base)" }}>{post.author.name}</p>
                            <p>{post.author.role}</p>
                        </div>
                    </div>
                </header>

                {/* Image de couverture */}
                <div className="mb-10 overflow-hidden" style={{ border: "1px solid var(--border)", background: "var(--surface-1)", borderRadius: "1rem" }}>
                    <div className="relative aspect-[16/9] w-full">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 768px, (min-width: 640px) 90vw, 100vw"
                        />
                    </div>
                </div>

                {/* Contenu riche (ReactNode) → plus de .split() ici */}
                <article className="prose prose-invert prose-sm sm:prose-base prose-headings:scroll-mt-20 prose-img:rounded-2xl max-w-none" style={{ "--tw-prose-links": "var(--accent)", "--tw-prose-bold": "var(--fg-base)" } as React.CSSProperties}>
                    {post.content}
                </article>

                {/* À lire ensuite */}
                {related.length > 0 && (
                    <section className="mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
                        <h2 className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--fg-subtle)" }}>
                            À lire ensuite
                        </h2>
                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            {related.map((r) => (
                                <Link
                                    key={r.slug}
                                    href={`/blog/${r.slug}`}
                                    className="group p-4 transition"
                                    style={{ border: "1px solid var(--border)", background: "var(--surface-1)", borderRadius: "1rem" }}
                                >
                                    <p className="text-xs" style={{ color: "var(--fg-subtle)" }}>
                                        {r.date} · {r.readingTimeMinutes} min
                                    </p>
                                    <h3 className="mt-2 text-sm font-semibold" style={{ color: "var(--fg-base)" }}>
                                        {r.title}
                                    </h3>
                                    <p className="mt-2 line-clamp-2 text-xs" style={{ color: "var(--fg-muted)" }}>
                                        {r.description}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        </>
    );
}
