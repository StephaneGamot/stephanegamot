export default function AboutPage() {
    return (
        <main className="isolate font-body">
            {/* HERO */}
            <section className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-24">
                <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:px-8">
                    {/* Texte */}
                    <div className="max-w-xl">
                        <p className="section-label">
                            A propos
                        </p>
                        <h1
                            className="mt-4 text-balance text-4xl font-heading font-semibold tracking-tight sm:text-5xl lg:text-6xl"
                            style={{ color: "var(--fg-base)" }}
                        >
                            La beaute dans ce qui est fluide, lisible, calme.
                        </h1>
                        <p className="mt-6 text-sm leading-relaxed sm:text-[15px] sm:leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                            Je suis <span className="font-semibold">Stephane Gamot</span>, developpeur full-stack.
                            J'aime les interfaces qui respirent, les pages qui coulent naturellement sous les yeux,
                            les experiences ou l'on ne sent pas l'effort technique - meme s'il est bien la,
                            solide, propre, aligne.
                        </p>
                        <p className="mt-4 text-sm leading-relaxed sm:text-[15px]" style={{ color: "var(--fg-muted)" }}>
                            Mon travail, c'est de transformer un projet en espace numerique{" "}
                            <span className="font-semibold">beau, fluide et harmonieux</span> -
                            pour vous, et pour les personnes qui l'utiliseront.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="/contact"
                                className="btn btn-primary"
                            >
                                Me contacter
                            </a>
                            <a
                                href="/realisations"
                                className="btn btn-outline"
                            >
                                Voir des projets
                            </a>
                        </div>
                    </div>

                    {/* Image principale */}
                    <div className="relative w-full max-w-md lg:ml-auto">
                        <div
                            className="overflow-hidden rounded-3xl backdrop-blur-sm"
                            style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}
                        >
                            {/* <img
                                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1100&q=80"
                                alt="Lumiere douce sur un interieur minimal, impression de calme et d'harmonie."
                                className="h-full w-full max-h-[430px] object-cover"
                            /> */}
                            <div className="h-[430px] w-full flex items-center justify-center" style={{ color: "var(--fg-subtle)" }}>
                                <p className="text-sm">Image placeholder</p>
                            </div>
                        </div>
                        {/* petit badge flottant */}
                        <div
                            className="pointer-events-none absolute -bottom-6 right-4 w-40 rounded-2xl p-3 text-[11px]"
                            style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
                        >
                            <p className="font-heading text-xs font-semibold" style={{ color: "var(--fg-base)" }}>
                                Fluidite & details
                            </p>
                            <p className="mt-1 text-[11px] leading-snug" style={{ color: "var(--fg-subtle)" }}>
                                Animations legeres, typographie soignee, micro-interactions qui disparaissent presque.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION IMAGES / BEAUTE - FLUIDITE - HARMONIE */}
            <div className="divider" />
            <section className="py-16">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <header className="max-w-2xl">
                        <h2
                            className="text-2xl font-heading font-semibold tracking-tight sm:text-3xl"
                            style={{ color: "var(--fg-base)" }}
                        >
                            Ce que j'essaie de mettre dans chaque projet
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                            Quand je pense a un site ou a une interface, je ne le vois pas seulement comme un outil.
                            Je le vois comme un espace : un endroit ou l'on doit se sentir bien, comprendre vite,
                            et avoir envie de rester un peu.
                        </p>
                    </header>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {/* Beaute */}
                        <figure
                            className="group relative overflow-hidden transition hover:-translate-y-1"
                            style={{ background: "var(--surface-1)", border: "1px solid var(--border)", borderRadius: "1rem" }}
                        >
                            {/* <img
                                src="https://images.unsplash.com/photo-1500534314211-0a24cd03f2c0?auto=format&fit=crop&w=900&q=80"
                                alt="Formes architecturales douces avec lumiere naturelle, symbolisant la beaute simple."
                                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                            /> */}
                            <div className="h-52 w-full flex items-center justify-center" style={{ color: "var(--fg-subtle)" }}>
                                <p className="text-sm">Image placeholder</p>
                            </div>
                            <figcaption className="p-5">
                                <p className="font-heading text-sm font-semibold" style={{ color: "var(--fg-base)" }}>
                                    Beaute
                                </p>
                                <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--fg-subtle)" }}>
                                    Un soin particulier pour les proportions, l'espace, le rythme visuel.
                                    Pas de surenchere, juste ce qu'il faut pour que ce soit agreable a regarder.
                                </p>
                            </figcaption>
                        </figure>

                        {/* Fluidite */}
                        <figure
                            className="group relative overflow-hidden transition hover:-translate-y-1"
                            style={{ background: "var(--surface-1)", border: "1px solid var(--border)", borderRadius: "1rem" }}
                        >
                            {/* <img
                                src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80"
                                alt="Mouvement fluide de tissu ou de lumiere, evoquant la fluidite."
                                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                            /> */}
                            <div className="h-52 w-full flex items-center justify-center" style={{ color: "var(--fg-subtle)" }}>
                                <p className="text-sm">Image placeholder</p>
                            </div>
                            <figcaption className="p-5">
                                <p className="font-heading text-sm font-semibold" style={{ color: "var(--fg-base)" }}>
                                    Fluidite
                                </p>
                                <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--fg-subtle)" }}>
                                    Des parcours simples, des transitions douces, des temps de chargement courts.
                                    On ne doit jamais sentir que l'interface se bat contre nous.
                                </p>
                            </figcaption>
                        </figure>

                        {/* Harmonie */}
                        <figure
                            className="group relative overflow-hidden transition hover:-translate-y-1"
                            style={{ background: "var(--surface-1)", border: "1px solid var(--border)", borderRadius: "1rem" }}
                        >
                            {/* <img
                                src="https://images.unsplash.com/photo-1500534318100-bbd67a725ecc?auto=format&fit=crop&w=900&q=80"
                                alt="Courbes harmonieuses et lumiere douce, evoquant l'equilibre et l'harmonie."
                                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                            /> */}
                            <div className="h-52 w-full flex items-center justify-center" style={{ color: "var(--fg-subtle)" }}>
                                <p className="text-sm">Image placeholder</p>
                            </div>
                            <figcaption className="p-5">
                                <p className="font-heading text-sm font-semibold" style={{ color: "var(--fg-base)" }}>
                                    Harmonie
                                </p>
                                <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--fg-subtle)" }}>
                                    Alignement entre l'esthetique, la technique et ce que vous voulez accomplir.
                                    Chaque choix a une raison d'etre.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            {/* SECTION TEXTE COURT + CTA */}
            <div className="divider" />
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h2
                        className="text-2xl font-heading font-semibold tracking-tight sm:text-3xl"
                        style={{ color: "var(--fg-base)" }}
                    >
                        Vous voulez un site qui soit beau, mais surtout juste ?
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                        Si vous avez un projet, meme encore flou, vous pouvez m'ecrire.
                        On peut regarder ensemble comment lui donner une forme qui vous ressemble :
                        elegante, fluide, harmonieuse - et techniquement fiable.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <a
                            href="/contact"
                            className="btn btn-primary"
                        >
                            Me contacter
                        </a>
                        <a
                            href="mailto:contact@exemple.com"
                            className="text-xs font-medium underline underline-offset-4"
                            style={{ color: "var(--fg-muted)" }}
                        >
                            Ou m'ecrire directement par e-mail
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
