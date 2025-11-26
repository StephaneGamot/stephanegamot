
import type { Metadata } from "next";
import PortfolioSection from "@/components/Portfolio/PortfolioSection";

export const metadata: Metadata = {
    title: "Projets",
    description: "Quelques réalisations sélectionnées.",
};

export default function Page() {
    return (
        <main className="mx-auto max-w-7xl px-6 py-12">
<PortfolioSection />
        </main>
    );
}
