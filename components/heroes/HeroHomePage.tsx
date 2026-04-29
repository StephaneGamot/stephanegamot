"use client";

import Image from "next/image";
import Link from "next/link";
import HeroImage from "./../../public/Images/imgHeroApp.webp";
import { MagneticButton } from "@/components/animations/MagneticButton";

export default function HeroHomePage() {
    return (
        <section
            className="relative overflow-hidden"
            style={{
                paddingTop: "clamp(4rem, 10vw, 8rem)",
                paddingBottom: "clamp(5rem, 12vw, 10rem)",
            }}
        >
            {/* Halo ultra-subtil — or pâle diffus */}
            <div
                aria-hidden
                className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[70vw] max-w-[900px] aspect-square rounded-full opacity-[0.04]"
                style={{
                    background:
                        "radial-gradient(circle, var(--accent), transparent 70%)",
                }}
            />

            <div className="mx-auto max-w-6xl px-8 lg:px-12">
                {/* Indicateur de disponibilité */}
                <div
                    className="mb-6 inline-flex items-center gap-2.5 px-4 py-2"
                    style={{
                        borderRadius: "9999px",
                        border: "1px solid var(--border)",
                        background: "var(--surface-1)",
                    }}
                >
                    <span
                        className="relative flex h-2 w-2"
                        aria-hidden="true"
                    >
                        <span
                            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                            style={{ background: "#4ade80" }}
                        />
                        <span
                            className="relative inline-flex h-2 w-2 rounded-full"
                            style={{ background: "#4ade80" }}
                        />
                    </span>
                    <span
                        className="text-xs font-medium tracking-wide"
                        style={{ color: "var(--fg-muted)", fontFamily: "var(--font-body)" }}
                    >
                        Disponible pour un nouveau projet
                    </span>
                </div>

                {/* Label de section */}
                <p
                    className="section-label mb-8"
                    style={{ color: "var(--accent)" }}
                >
                    Développeur web freelance en Belgique — Next.js, WordPress &amp; SEO
                </p>

                {/* Layout asymétrique : texte large + mockup */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
                    {/* Colonne texte — occupe 7/12 */}
                    <div className="lg:col-span-7">
                        <h1
                            style={{
                                color: "var(--fg-base)",
                                lineHeight: "1.02",
                                letterSpacing: "-0.04em",
                            }}
                        >
                            Création de sites web
                            <br className="hidden sm:block" />
                            performants et{" "}
                            <span style={{ color: "var(--accent)" }}>
                                pensés pour convertir.
                            </span>
                        </h1>

                        {/* Pyramide inversée : réponse immédiate à l'intention de recherche */}
                        <p
                            className="mt-8 text-lg"
                            style={{
                                color: "var(--fg-muted)",
                                maxWidth: "56ch",
                                lineHeight: "1.75",
                            }}
                        >
                            Je conçois des{" "}
                            <Link
                                href="/services/site-web-react-next"
                                style={{ color: "var(--fg-base)", fontWeight: 500 }}
                            >
                                sites Next.js
                            </Link>
                            {", "}
                            <Link
                                href="/services/site-internet-wordpress"
                                style={{ color: "var(--fg-base)", fontWeight: 500 }}
                            >
                                WordPress
                            </Link>
                            {" et "}
                            <Link
                                href="/services/e-commerce"
                                style={{ color: "var(--fg-base)", fontWeight: 500 }}
                            >
                                e-commerce
                            </Link>
                            {" "}
                            optimisés pour le{" "}
                            <Link
                                href="/services/seo"
                                style={{ color: "var(--fg-base)", fontWeight: 500 }}
                            >
                                référencement naturel
                            </Link>
                            , la vitesse de chargement et l&apos;expérience utilisateur.
                            Chaque projet est développé avec une rigueur technique et un
                            sens du détail qui inspirent confiance à vos visiteurs — et à Google.
                        </p>

                        {/* CTAs — boutons magnétiques */}
                        <div className="mt-12 flex flex-wrap items-center gap-6">
                            <MagneticButton
                                as="a"
                                href="/contact"
                                className="btn btn-primary"
                                strength={0.25}
                            >
                                Demander un devis gratuit
                            </MagneticButton>
                            <MagneticButton
                                as="a"
                                href="/portfolio"
                                className="text-[13px] font-medium uppercase tracking-[0.1em]"
                                style={{
                                    color: "var(--fg-subtle)",
                                    borderBottom: "1px solid var(--border)",
                                }}
                                strength={0.2}
                            >
                                Voir mes réalisations
                            </MagneticButton>
                        </div>

                        {/* Signal de rareté */}
                        <p
                            className="mt-6 text-xs"
                            style={{ color: "var(--fg-subtle)" }}
                        >
                            J&apos;accepte 3 nouveaux projets par mois pour garantir
                            un accompagnement de qualité.
                        </p>
                    </div>

                    {/* Colonne mockup — occupe 5/12, traité comme une oeuvre en galerie */}
                    <div className="lg:col-span-5">
                        <div className="relative mx-auto w-full max-w-[340px]">
                            {/* Cadre du téléphone */}
                            <svg
                                role="img"
                                viewBox="0 0 366 729"
                                className="block h-auto w-full"
                                style={{
                                    filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.4))",
                                }}
                            >
                                <title>
                                    Aperçu mobile d&apos;un site web performant conçu par Stéphane Gamot
                                </title>
                                <path
                                    d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                                    fill="#1a1b22"
                                />
                                <path
                                    d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                                    fill="#111218"
                                />
                            </svg>

                            {/* Écran */}
                            <div className="pointer-events-none absolute left-[6.5%] top-[3.5%] w-[87%] h-[93%] overflow-hidden rounded-[36px]">
                                <div className="relative h-[130%] w-full mock-scroll">
                                    <Image
                                        src={HeroImage}
                                        alt="Aperçu d'un site web Next.js optimisé SEO conçu par Stéphane Gamot"
                                        fill
                                        className="object-cover"
                                        sizes="(min-width: 1024px) 320px, (min-width: 640px) 280px, 260px"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
