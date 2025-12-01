// app/(marketing)/blog/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "../blog/posts";

const SITE_URL = "https://www.stephanegamot.com";

export const metadata: Metadata = {
  title: "Blog & conseil Web, SEO, performance",
  description:
    "Articles sur la création de sites modernes, le SEO, la performance web, l’accessibilité et les bonnes pratiques pour les PME et indépendants.",
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
        <main className="bg-slate-950 py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                {/* En-tête de section */}
                <header className="mb-10 sm:mb-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
                        Blog
                    </p>
                    <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Conseils web, SEO & performance.
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm text-white/70">
                        Des articles pour mieux comprendre comment un site bien pensé peut
                        vraiment servir votre activité (et pas seulement « faire joli »).
                    </p>
                </header>

                {/* Liste des articles */}
                <div className="mt-10 space-y-12 lg:mt-14 lg:space-y-14">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="rounded-2xl border border-white/10 bg-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
                        >
                            <Link
                                href={`/blog/${post.slug}`}
                                className="flex flex-col gap-6 p-4 sm:p-6 lg:flex-row lg:gap-10 lg:p-7 hover:border-indigo-400/70 transition-colors"
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
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                                </div>

                                {/* Contenu texte */}
                                <div className="relative">
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/60">
                                        <time dateTime={post.datetime}>{post.date}</time>
                                        <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium">
                      {post.category.title}
                    </span>

                                        {/* ⏱️ Temps de lecture */}
                                        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium">
                      <span aria-hidden>⏱️</span>
                                            {post.readingTimeMinutes} min
                    </span>

                                        {/* ⭐ Badge lectures si ≥ 50 */}
                                        {post.views >= 50 && (
                                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-3 py-1 text-[11px] font-medium text-amber-200">
                        ⭐ {post.views} lectures
                      </span>
                                        )}
                                    </div>

                                    <h2 className="mt-3 text-lg sm:text-xl font-semibold text-white">
                                        {post.title}
                                    </h2>

                                    <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-white/70">
                                        {post.description}
                                    </p>

                                    <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                                        <Image
                                            src={post.author.imageUrl}
                                            alt={post.author.name}
                                            width={40}
                                            height={40}
                                            className="h-10 w-10 rounded-full object-cover"
                                        />
                                        <div className="text-xs text-white/70">
                                            <p className="font-semibold text-white">
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
            </div>
        </main>
    );
}

