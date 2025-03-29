
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import ProblemSection from "../components/ProblemSection";
import CtaSection from "../components/CtaSection";
import TeamSection from "../components/TeamSection";
import FaqSection from "../components/FaqSection";
import CommunitySection from "../components/CommunitySection";
import ContactSection from "../components/ContactSection";
import GabbyHero from "../components/GabbyHero";

export default function Index() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <GabbyHero />
        <Hero />
        <FeatureSection />
        <ProblemSection />
        <CtaSection />
        <TeamSection />
        <FaqSection />
        <CommunitySection />
        <ContactSection />
      </main>
    </div>
  );
}
