
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import CtaSection from "../components/CtaSection";
import TeamSection from "../components/TeamSection";
import CommunitySection from "../components/CommunitySection";
import GabbyHero from "../components/GabbyHero";
import GabbyInAction from "../components/GabbyInAction";
import GabbyNetwork from "../components/GabbyNetwork";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <GabbyHero />
        <Hero />
        <GabbyInAction />
        <GabbyNetwork />
        <FeatureSection />
        <CtaSection />
        <TeamSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
