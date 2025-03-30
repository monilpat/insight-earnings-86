
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

  return <section className="relative pt-24 pb-16 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gabby-dark/80 via-gabby-background to-gabby-background z-[-1]"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gabby-purple/10 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gabby-gold/5 rounded-full blur-3xl animate-pulse-subtle" style={{
      animationDelay: '1s'
    }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
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
          
          {/* Updated copy */}
          <div className="mt-6 space-y-4 animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Talk to Gabby for free
            </p>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Pay Gabby for deeper insight
            </p>
            <p className="text-base text-white/70 italic">
              She consults her network of vetted experts and AI agents on your behalf
            </p>
          </div>
          
          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{
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
          
          {/* Scroll indicator section removed */}
        </div>
      </div>
    </section>;
};

export default Hero;
