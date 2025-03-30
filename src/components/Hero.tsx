
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:py-40 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gabby-dark/80 via-gabby-background to-gabby-background z-[-1]"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gabby-purple/10 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gabby-gold/5 rounded-full blur-3xl animate-pulse-subtle" style={{
        animationDelay: '1s'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main headline - Added more bottom padding */}
          <h1 className="heading-xl text-gradient animate-fade-in-up mb-12 pb-4">Unlock Industry Leading Insights</h1>
          
          {/* Updated copy */}
          <div className="mt-6 space-y-4 animate-fade-in-up" style={{
            animationDelay: '0.2s'
          }}>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Talk to Gabby for free. Pay for cutting edge human and AI insights from her network of vetted experts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
