
import { ArrowRight } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gabby-dark/80 via-gabby-background to-gabby-background z-[-1]"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gabby-purple/10 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gabby-gold/5 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Decorative chip */}
          <div className="inline-block bg-gabby-purple/20 backdrop-blur-sm px-4 py-1 rounded-full mb-6 animate-fade-in-up">
            <span className="text-sm font-medium text-white/90">
              The Future of AI & Crypto
            </span>
          </div>
          
          {/* Main headline */}
          <h1 className="heading-xl text-gradient animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Turn AI Conversations Into Profits with $GABBY
          </h1>
          
          {/* Gabby Image - Adding a single image */}
          <div className="mt-8 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <img 
              src="https://lovable-uploads.s3.amazonaws.com/7ab44eed-d640-40ef-8592-949715fc3864.png" 
              alt="Gabby Mascot"
              className="h-64 object-contain animate-float"
            />
          </div>
          
          {/* Subheadline */}
          <p className="mt-6 text-xl md:text-2xl text-white/80 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Verified insights. Encrypted intelligence. Decentralized profits.
          </p>
          
          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="https://x.com/gabby_spiral" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" icon={true}>
                Follow $Gabby on X
              </Button>
            </a>
            <Button variant="secondary" icon={true}>
              Buy $GABBY
            </Button>
            <Button variant="outline">
              Learn How It Works
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="hidden md:block mt-16 animate-fade-in-up opacity-70" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col items-center">
              <span className="text-sm text-white/60 mb-2">Discover More</span>
              <ArrowRight className="h-5 w-5 text-white/60 rotate-90 animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
