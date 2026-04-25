import { ScrollReveal } from "@/components/animations/ScrollReveal";

/* ─────────────────────────────────────────────
   Statement — Citation / accroche monumentale
   Typographie démesurée, whitespace extrême.
   Le silence visuel autour du texte EST le design.
   ───────────────────────────────────────────── */

type StatementProps = {
    /** Le texte principal (peut contenir <br/> via JSX) */
    children: React.ReactNode;
    /** Couleur de l'accent sur un mot clé (optionnel) */
    accentWord?: string;
    /** Sous-texte discret en dessous */
    caption?: string;
};

export default function Statement({
    children,
    accentWord,
    caption,
}: StatementProps) {
    return (
        <section
            aria-label="Citation"
            className="section-spacious"
        >
            {/* Divider ultra-fin */}
            <div className="divider mx-auto max-w-6xl" />

            <div
                className="mx-auto max-w-5xl px-8 lg:px-12"
                style={{
                    paddingTop: "var(--section-gap)",
                    paddingBottom: "var(--section-gap)",
                    textAlign: "center",
                }}
            >
                <ScrollReveal y={24}>
                    <blockquote
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "clamp(2.2rem, 5.5vw, 4.8rem)",
                            lineHeight: 1.1,
                            letterSpacing: "-0.03em",
                            fontWeight: 400,
                            color: "var(--fg-base)",
                            border: "none",
                            padding: 0,
                            margin: 0,
                            fontStyle: "normal",
                            maxWidth: "none",
                        }}
                    >
                        {children}
                    </blockquote>
                </ScrollReveal>

                {caption && (
                    <ScrollReveal y={16} delay={0.15}>
                        <p
                            className="mt-8"
                            style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "0.8rem",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "var(--fg-subtle)",
                                maxWidth: "none",
                            }}
                        >
                            {caption}
                        </p>
                    </ScrollReveal>
                )}
            </div>
        </section>
    );
}
