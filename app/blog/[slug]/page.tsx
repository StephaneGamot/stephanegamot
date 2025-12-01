// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock3 } from "lucide-react";
import { posts } from "../posts";

// ⚠️ Avec Next 16, params est un Promise côté RSC
type ParamsPromise = Promise<{ slug: string }>;

const SITE_URL = "https://www.stephanegamot.com";

export async function generateMetadata(
  { params }: { params: ParamsPromise }
): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  const canonicalUrl = `${SITE_URL}/blog/${slug}`;

  if (!post) {
    return {
      title: "Article introuvable | Blog – Stéphane Gamot",
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
    title: `${post.title} | Blog`,
    description: post.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: `${post.title} | Blog`,
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
      title: `${post.title} | Blog – Stéphane Gamot`,
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
            <main className="bg-slate-950 text-white py-16 sm:py-20 lg:py-24">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-semibold">Article introuvable</h1>
                    <p className="mt-2 text-sm text-white/70">
                        Aucun article trouvé pour le slug :{" "}
                        <span className="font-mono text-emerald-300">
              {String(slug || "(slug vide)")}
            </span>
                    </p>
                    <p className="mt-4 text-sm text-white/70">
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
                        className="mt-6 inline-flex items-center text-sm text-indigo-300 hover:text-indigo-200"
                    >
                        ← Retour au blog
                    </Link>
                </div>
            </main>
        );
    }

    const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

    return (
        <main className="bg-slate-950 text-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="mb-6 text-xs text-white/60">
                    <Link href="/" className="hover:text-white">
                        Accueil
                    </Link>
                    <span className="mx-1.5 text-white/40">/</span>
                    <Link href="/blog" className="hover:text-white">
                        Blog
                    </Link>
                    <span className="mx-1.5 text-white/40">/</span>
                    <span className="text-white/80">{post.title}</span>
                </nav>

                {/* Header article */}
                <header className="mb-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
                        {post.category.title}
                    </p>
                    <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        {post.title}
                    </h1>

                    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/60">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                        <span className="inline-flex items-center gap-1">
              <Clock3 className="h-3.5 w-3.5" aria-hidden />
                            {post.readingTimeMinutes} min de lecture
            </span>
                        {post.views >= 50 && (
                            <>
                                <span className="h-1 w-1 rounded-full bg-white/30" />
                                <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300/90">
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
                        <div className="text-xs text-white/70">
                            <p className="font-semibold text-white">{post.author.name}</p>
                            <p>{post.author.role}</p>
                        </div>
                    </div>
                </header>

                {/* Image de couverture */}
                <div className="mb-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <div className="relative aspect-[16/9] w-full">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Contenu riche (ReactNode) → plus de .split() ici */}
                <article className="prose prose-invert prose-sm sm:prose-base prose-headings:scroll-mt-20 prose-a:text-indigo-300 hover:prose-a:text-indigo-200 prose-strong:text-white prose-img:rounded-2xl max-w-none">
                    {post.content}
                </article>

                {/* À lire ensuite */}
                {related.length > 0 && (
                    <section className="mt-12 border-t border-white/10 pt-8">
                        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                            À lire ensuite
                        </h2>
                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            {related.map((r) => (
                                <Link
                                    key={r.slug}
                                    href={`/blog/${r.slug}`}
                                    className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-indigo-400/70"
                                >
                                    <p className="text-xs text-white/60">
                                        {r.date} · {r.readingTimeMinutes} min
                                    </p>
                                    <h3 className="mt-2 text-sm font-semibold text-white group-hover:text-indigo-200">
                                        {r.title}
                                    </h3>
                                    <p className="mt-2 line-clamp-2 text-xs text-white/70">
                                        {r.description}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}
