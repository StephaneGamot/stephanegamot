
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projets",
    description: "Quelques réalisations sélectionnées.",
};

export default function Page() {
    return (
        <main className="mx-auto max-w-7xl px-6 py-12">
            <h1 className="text-3xl font-bold">sg</h1>
            {/* TODO: insère ici ton <Carrousel /> ou ta liste de projets */}
            <p className="text-gray-500 mt-2">Section en cours…</p>
        </main>
    );
}
