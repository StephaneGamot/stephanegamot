"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────
   StickyCTA — barre fixe mobile "Demander un devis"
   Apparaît après 600px de scroll, masquée en desktop.
   ───────────────────────────────────────────── */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        background: "rgba(8, 9, 12, 0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderTop: "1px solid var(--border)",
        padding: "0.75rem 1rem",
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-xs font-medium" style={{ color: "var(--fg-muted)" }}>
            Disponible pour un nouveau projet
          </p>
        </div>
        <Link
          href="/contact"
          className="btn btn-primary shrink-0"
          style={{ padding: "0.625rem 1.5rem", fontSize: "0.8rem" }}
        >
          Devis gratuit
        </Link>
      </div>
    </div>
  );
}
