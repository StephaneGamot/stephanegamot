
import type { Metadata } from "next";
import Contact from "@/components/contact/Contact"

export const metadata: Metadata = {
    title: "Projets",
    description: "Quelques réalisations sélectionnées.",
};

export default function Page() {
    return (

      <Contact />
    );
}
