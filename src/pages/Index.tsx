
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import FeatureSection from '@/components/FeatureSection';
import TeamSection from '@/components/TeamSection';
import GabbyGallery from '@/components/GabbyGallery';
import CtaSection from '@/components/CtaSection';
import FaqSection from '@/components/FaqSection';
import CommunitySection from '@/components/CommunitySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gabby-background">
      <Header />
      
      <main>
        <Hero />
        <ProblemSection />
        <FeatureSection />
        <GabbyGallery />
        <TeamSection />
        <CtaSection />
        <FaqSection />
        <CommunitySection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
