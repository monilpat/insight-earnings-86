import { ArrowRight } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  const scrollToCtaSection = () => {
    // Find and scroll to the CTA section with ID "join-launch"
    const ctaSection = document.getElementById('join-launch');
    if (ctaSection) {
      ctaSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gabby-dark/80 via-gabby-background to-gabby-background z-[-1]"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gabby-purple/10 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gabby-gold/5 rounded-full blur-3xl animate-pulse-subtle" style={{
        animationDelay: '1s'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          {/* Image on the left - larger display of Gabby */}
          <div className="w-full md:w-2/5">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/20 to-[#6D249C]/20 rounded-2xl blur-md opacity-70 group-hover:opacity-90 transition-all duration-700"></div>
              <div className="relative w-full h-auto rounded-2xl border border-[#9b87f5]/20 overflow-hidden">
                <img
                  src="/lovable-uploads/d12f0ad4-803b-40a9-a8d9-15e15c73d632.png"
                  alt="Gabby - AI Assistant"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9b87f5]/30 to-transparent rounded-2xl blur-sm opacity-50 group-hover:opacity-70 transition-all duration-700"></div>
            </div>
          </div>

          {/* Content on the right */}
          <div className="w-full md:w-3/5 text-left space-y-6 mt-8 md:mt-0">
            {/* Decorative chip */}
            <div className="inline-block bg-gabby-purple/20 backdrop-blur-sm px-4 py-1 rounded-full mb-6 animate-fade-in-up">
              <span className="text-sm font-medium text-white/90">
                The Future of AI & Crypto
              </span>
            </div>
            
            {/* Main headline */}
            <h1 className="heading-xl text-gradient animate-fade-in-up" style={{
              animationDelay: '0.1s'
            }}>Turn AI Conversations Into Profits with GABBY</h1>
            
            {/* Updated content structure */}
            <div className="mt-6 space-y-4 animate-fade-in-up" style={{
              animationDelay: '0.2s'
            }}>
              <div className="flex flex-col space-y-1">
                <span className="text-xl font-medium text-[#F5AF19]">Talk to Gabby for free</span>
              </div>
              
              <div className="flex flex-col space-y-1">
                <span className="text-xl font-medium text-[#F5AF19]">Pay Gabby for deeper insight</span>
                <span className="text-sm text-white/70">Consults vetted experts and AI agents on your behalf</span>
              </div>
              
              <div className="mt-6 py-3 px-4 border border-[#9b87f5]/30 bg-[#1A0D2C]/50 rounded-lg backdrop-blur-sm">
                <p className="text-sm font-medium text-white">
                  <span className="text-[#9b87f5]">Trusted knowledge.</span>{" "}
                  <span className="text-[#F5AF19]">Secure connections.</span>{" "}
                  <span className="text-white">Web3 earnings.</span>
                </p>
              </div>
            </div>
            
            {/* CTA buttons - keeping these the same */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-start gap-4 animate-fade-in-up" style={{
              animationDelay: '0.3s'
            }}>
              <a href="https://x.com/gabby_spiral" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" icon={true}>
                  Follow Gabby on X
                </Button>
              </a>
              <Button variant="secondary" icon={true} onClick={scrollToCtaSection}>Buy $GABBY token</Button>
              <a href="https://docs.google.com/document/d/1g03fNEoXCUqKewYlLLMb3hGLXDezu-dRb0-xNewmixc/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  Download Whitepaper
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
