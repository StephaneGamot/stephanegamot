"use client";

/* ─────────────────────────────────────────────
   Skeleton Loaders — shimmer plutôt que spinner
   Hardware-accelerated (transform + opacity only)
   ───────────────────────────────────────────── */

type SkeletonProps = {
  className?: string;
  /** Largeur (Tailwind ou CSS) */
  width?: string;
  /** Hauteur (Tailwind ou CSS) */
  height?: string;
  /** Coins arrondis */
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
};

export function Skeleton({
  className = "",
  width,
  height,
  rounded = "lg",
}: SkeletonProps) {
  return (
    <div
      className={`skeleton-shimmer rounded-${rounded} ${className}`}
      style={{
        width,
        height,
        background: "var(--surface-2)",
      }}
      aria-hidden="true"
    />
  );
}

/* ─────────────────────────────────────────────
   SkeletonCard — squelette d'une carte de service
   ───────────────────────────────────────────── */
export function SkeletonCard() {
  return (
    <div
      className="rounded-2xl p-5 sm:p-6"
      style={{
        border: "1px solid var(--border)",
        background: "var(--surface-1)",
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <Skeleton width="44px" height="44px" rounded="xl" />
        <div className="flex-1">
          <Skeleton width="40%" height="10px" rounded="full" className="mb-2" />
          <Skeleton width="70%" height="16px" rounded="md" />
        </div>
      </div>
      <Skeleton width="100%" height="12px" rounded="full" className="mb-2" />
      <Skeleton width="85%" height="12px" rounded="full" className="mb-2" />
      <Skeleton width="60%" height="12px" rounded="full" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   SkeletonPortfolioCard — squelette pour le portfolio
   ───────────────────────────────────────────── */
export function SkeletonPortfolioCard() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        border: "1px solid var(--border)",
        background: "var(--surface-1)",
      }}
    >
      <Skeleton width="100%" height="200px" rounded="sm" />
      <div className="p-4 sm:p-5">
        <div className="flex justify-between items-start mb-3">
          <Skeleton width="60%" height="18px" rounded="md" />
          <Skeleton width="50px" height="20px" rounded="full" />
        </div>
        <Skeleton width="100%" height="12px" rounded="full" className="mb-2" />
        <Skeleton width="90%" height="12px" rounded="full" className="mb-3" />
        <div className="flex gap-2">
          <Skeleton width="60px" height="22px" rounded="full" />
          <Skeleton width="50px" height="22px" rounded="full" />
          <Skeleton width="70px" height="22px" rounded="full" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SkeletonBlogCard — squelette d'un article
   ───────────────────────────────────────────── */
export function SkeletonBlogCard() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        border: "1px solid var(--border)",
        background: "var(--surface-1)",
      }}
    >
      <Skeleton width="100%" height="180px" rounded="sm" />
      <div className="p-5">
        <Skeleton width="30%" height="10px" rounded="full" className="mb-3" />
        <Skeleton width="90%" height="18px" rounded="md" className="mb-2" />
        <Skeleton width="100%" height="12px" rounded="full" className="mb-1" />
        <Skeleton width="75%" height="12px" rounded="full" />
      </div>
    </div>
  );
}
