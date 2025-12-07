import type { LandingData } from "@/src/server/getLandingData";
import { FooterSection } from "@/src/components/organisms/FooterSection";
import { HeroSection } from "@/src/components/organisms/HeroSection";

export const LandingPage = ({ hero, roles, cards }: LandingData) => {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <HeroSection hero={hero} roles={roles} cards={cards} />
      <FooterSection />
    </main>
  );
};

