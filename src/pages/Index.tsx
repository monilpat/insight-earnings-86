
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import ProblemSection from "../components/ProblemSection";
import CtaSection from "../components/CtaSection";
import TeamSection from "../components/TeamSection";
import FaqSection from "../components/FaqSection";
import CommunitySection from "../components/CommunitySection";
import ContactSection from "../components/ContactSection";
import GabbyHero from "../components/GabbyHero";
import HowGabbyWorks from "../components/HowGabbyWorks";
import GabbyNetwork from "../components/GabbyNetwork";

export default function Index() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <GabbyHero />
        <Hero />
        <HowGabbyWorks />
        <GabbyNetwork />
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
