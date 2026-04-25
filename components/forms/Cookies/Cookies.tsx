export default function Cookies() {
    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6 z-50">
            <div
                className="pointer-events-auto ml-auto max-w-xl p-6"
                style={{
                    background: "var(--surface-1)",
                    border: "1px solid var(--border)",
                    backdropFilter: "blur(12px)",
                }}
            >
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                    Ce site utilise des cookies pour ameliorer votre experience de navigation.
                    En continuant, vous acceptez leur utilisation.{" "}
                    <a
                        href="#"
                        className="font-medium transition-colors duration-300"
                        style={{ color: "var(--accent)" }}
                    >
                        Politique de cookies
                    </a>
                    .
                </p>
                <div className="mt-4 flex items-center gap-x-5">
                    <button
                        type="button"
                        className="btn btn-primary text-sm"
                    >
                        Accepter
                    </button>
                    <button
                        type="button"
                        className="text-sm font-medium transition-colors duration-300"
                        style={{ color: "var(--fg-muted)" }}
                    >
                        Refuser
                    </button>
                </div>
            </div>
        </div>
    )
}
