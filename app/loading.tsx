export default function Loading() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-label="Chargement en cours"
    >
      <div
        className="h-8 w-8 animate-spin rounded-full"
        style={{
          border: "2px solid var(--border)",
          borderTopColor: "var(--accent)",
        }}
      />
      <span className="sr-only">Chargement…</span>
    </div>
  );
}
