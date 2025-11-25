export default function AboutPage() {
    return (
        <main className="isolate bg-white font-body dark:bg-gray-950">
            {/* HERO */}
            <section className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-24">
                {/* fond fluide derrière */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-[-40%] right-[-20%] -z-10 w-[60rem] rounded-full bg-gradient-to-br from-indigo-200/40 via-sky-100/60 to-rose-100/40 blur-3xl dark:from-indigo-500/20 dark:via-sky-400/15 dark:to-rose-400/15"
                />

                <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:px-8">
                    {/* Texte */}
                    <div className="max-w-xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                            À propos
                        </p>
                        <h1 className="mt-4 text-balance text-4xl font-heading font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
                            La beauté dans ce qui est fluide, lisible, calme.
                        </h1>
                        <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-[15px] sm:leading-relaxed dark:text-gray-300">
                            Je suis <span className="font-semibold">Stéphane Gamot</span>, développeur full-stack.
                            J’aime les interfaces qui respirent, les pages qui coulent naturellement sous les yeux,
                            les expériences où l’on ne sent pas l’effort technique – même s’il est bien là,
                            solide, propre, aligné.
                        </p>
                        <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-[15px] dark:text-gray-300">
                            Mon travail, c’est de transformer un projet en espace numérique{" "}
                            <span className="font-semibold">beau, fluide et harmonieux</span> –
                            pour vous, et pour les personnes qui l’utiliseront.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                            >
                                Me contacter
                            </a>
                            <a
                                href="/realisations"
                                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-gray-900 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:border-white dark:hover:text-white"
                            >
                                Voir des projets
                            </a>
                        </div>
                    </div>

                    {/* Image principale : douceur / lumière */}
                    <div className="relative w-full max-w-md lg:ml-auto">
                        <div className="overflow-hidden rounded-3xl border border-gray-200/70 bg-white/80 shadow-lg backdrop-blur-sm dark:border-gray-800/70 dark:bg-gray-900/80">
                            <img
                                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1100&q=80"
                                alt="Lumière douce sur un intérieur minimal, impression de calme et d’harmonie."
                                className="h-full w-full max-h-[430px] object-cover"
                            />
                        </div>
                        {/* petit badge flottant */}
                        <div className="pointer-events-none absolute -bottom-6 right-4 w-40 rounded-2xl bg-white/90 p-3 text-[11px] shadow-md ring-1 ring-black/5 dark:bg-gray-900/95 dark:ring-white/10">
                            <p className="font-heading text-xs font-semibold text-gray-900 dark:text-white">
                                Fluidité & détails
                            </p>
                            <p className="mt-1 text-[11px] leading-snug text-gray-600 dark:text-gray-300">
                                Animations légères, typographie soignée, micro-interactions qui disparaissent presque.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION IMAGES / BEAUTÉ – FLUIDITÉ – HARMONIE */}
            <section className="border-t border-gray-100 bg-gray-50/80 py-16 dark:border-gray-900 dark:bg-gray-900/70">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <header className="max-w-2xl">
                        <h2 className="text-2xl font-heading font-semibold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                            Ce que j’essaie de mettre dans chaque projet
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                            Quand je pense à un site ou à une interface, je ne le vois pas seulement comme un outil.
                            Je le vois comme un espace : un endroit où l’on doit se sentir bien, comprendre vite,
                            et avoir envie de rester un peu.
                        </p>
                    </header>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {/* Beauté */}
                        <figure className="group relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800/70 dark:bg-gray-900/80">
                            <img
                                src="https://images.unsplash.com/photo-1500534314211-0a24cd03f2c0?auto=format&fit=crop&w=900&q=80"
                                alt="Formes architecturales douces avec lumière naturelle, symbolisant la beauté simple."
                                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            <figcaption className="p-5">
                                <p className="font-heading text-sm font-semibold text-gray-900 dark:text-white">
                                    Beauté
                                </p>
                                <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                                    Un soin particulier pour les proportions, l’espace, le rythme visuel.
                                    Pas de surenchère, juste ce qu’il faut pour que ce soit agréable à regarder.
                                </p>
                            </figcaption>
                        </figure>

                        {/* Fluidité */}
                        <figure className="group relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800/70 dark:bg-gray-900/80">
                            <img
                                src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80"
                                alt="Mouvement fluide de tissu ou de lumière, évoquant la fluidité."
                                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            <figcaption className="p-5">
                                <p className="font-heading text-sm font-semibold text-gray-900 dark:text-white">
                                    Fluidité
                                </p>
                                <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                                    Des parcours simples, des transitions douces, des temps de chargement courts.
                                    On ne doit jamais sentir que l’interface se bat contre nous.
                                </p>
                            </figcaption>
                        </figure>

                        {/* Harmonie */}
                        <figure className="group relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800/70 dark:bg-gray-900/80">
                            <img
                                src="https://images.unsplash.com/photo-1500534318100-bbd67a725ecc?auto=format&fit=crop&w=900&q=80"
                                alt="Courbes harmonieuses et lumière douce, évoquant l’équilibre et l’harmonie."
                                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            <figcaption className="p-5">
                                <p className="font-heading text-sm font-semibold text-gray-900 dark:text-white">
                                    Harmonie
                                </p>
                                <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                                    Alignement entre l’esthétique, la technique et ce que vous voulez accomplir.
                                    Chaque choix a une raison d’être.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            {/* SECTION TEXTE COURT + CTA */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h2 className="text-2xl font-heading font-semibold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                        Vous voulez un site qui soit beau, mais surtout juste ?
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                        Si vous avez un projet, même encore flou, vous pouvez m’écrire.
                        On peut regarder ensemble comment lui donner une forme qui vous ressemble :
                        élégante, fluide, harmonieuse – et techniquement fiable.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                        >
                            Me contacter
                        </a>
                        <a
                            href="mailto:contact@exemple.com"
                            className="text-xs font-medium text-gray-600 underline underline-offset-4 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                        >
                            Ou m’écrire directement par e-mail
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}