
import type { Metadata } from "next";
import Contact from "@/components/contact/Contact"

export const metadata: Metadata = {
  title: "Contact | Sites web élégants & performants",
  description:
    "Parlons de votre projet : site vitrine, e-commerce, refonte ou audit SEO. Décrivez vos besoins et recevez une réponse personnalisée, sans blabla commercial.",
};

export default function Page() {
    return (

      <Contact />
    );
}
