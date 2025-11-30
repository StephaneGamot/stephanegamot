
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FAQSection from "./Faq";

describe("FAQSection", () => {
    it("affiche le titre de la section", () => {
        render(<FAQSection />);
        expect(
            screen.getByText("Questions fréquentes")
        ).toBeInTheDocument();
    });

    it("affiche au moins une question de la FAQ", () => {
        render(<FAQSection />);
        expect(
            screen.getByText("Combien coûte la création d’un site internet ?")
        ).toBeInTheDocument();
    });
});
