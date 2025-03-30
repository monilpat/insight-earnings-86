
import { useState } from 'react';
import Button from './Button';

const CtaSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <section className="section-container" id="join-launch">
      <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl">
        {/* Enhanced background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gabby-purple/90 to-gabby-dark/90 animate-gradient-shift"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gabby-gold/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        
        <div className="relative z-10 px-6 py-16 md:py-20 text-center">
          <h2 className="heading-md text-white mb-6">JOIN $GABBY TOKEN LAUNCH</h2>
          <div 
            className="flex flex-col items-center relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Button 
              variant="secondary" 
              size="lg" 
              disabled={true} 
              className="opacity-75 cursor-not-allowed"
            >
              Join Launch
            </Button>
            {isHovering && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gabby-dark/90 text-white px-4 py-2 rounded-lg z-20 text-sm font-medium animate-fade-in">
                Coming Soon
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
