
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
          {/* Main content */}
          <div className="glass-card p-8 rounded-2xl backdrop-blur-sm animate-fade-in-up">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl text-white/90 font-medium">
                Talk to Gabby for free
              </h2>
              
              <h2 className="text-2xl md:text-3xl text-white/90 font-medium">
                Pay Gabby for deeper insight
              </h2>
              
              <p className="text-base text-white/70 italic max-w-2xl mx-auto">
                She consults her network of vetted experts and AI agents on your behalf
              </p>
            </div>
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
          
          {/* Scroll indicator */}
          <div className="hidden md:block mt-16 animate-fade-in-up opacity-70" style={{
          animationDelay: '0.4s'
        }}>
            <div className="flex flex-col items-center">
              <span className="text-sm text-white/60 mb-2">Discover More</span>
              <ArrowRight className="h-5 w-5 text-white/60 rotate-90 animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;
