import HeroHomePage from "./../components/heroes/HeroHomePage"
import CardsHome from "@/components/cards/CardsHome";
import Carrousel from "@/components/carrousel/Carrousel";

export default function Home() {
  return (
<main>
    <HeroHomePage />
    <CardsHome />
    <Carrousel />
</main>
  );
}
