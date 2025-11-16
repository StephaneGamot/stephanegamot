import HeroHomePage from "./../components/heroes/HeroHomePage"
import CardsHome from "@/components/cards/CardsHome";
import Carrousel from "@/components/carrousel/Carrousel";
import WorkProcess from "@/components/workProcess/WorkProcess";
import TestimonialsSection from "@/components/Testimonials/Testimonials"
import AboutSection from "@/components/about/AboutSection"

export default function Home() {
  return (
<main>
    <HeroHomePage />
    <CardsHome />
    <Carrousel />
    <WorkProcess />
    <TestimonialsSection />
    <AboutSection />
</main>
  );
}
