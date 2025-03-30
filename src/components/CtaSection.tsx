
import { useState } from 'react';
import Button from './Button';

const CtaSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <section className="section-container" id="join-launch">
      <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl">
        {/* Improved background with more elegant gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6D249C] via-[#441668] to-[#2D1136] animate-gradient-shift"></div>
        
        {/* Enhanced decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#9b87f5]/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F5AF19]/20 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="1" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")' }}>
        </div>
        
        <div className="relative z-10 px-6 py-16 md:py-20 text-center">
          <h2 className="heading-md text-white mb-8 tracking-wide">JOIN $GABBY TOKEN LAUNCH</h2>
          <div 
            className="flex flex-col items-center relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Button 
              variant="secondary" 
              size="lg" 
              disabled={true} 
              className="opacity-75 cursor-not-allowed shadow-lg hover:shadow-[#F5AF19]/30 backdrop-blur-sm"
            >
              Join Launch
            </Button>
            {isHovering && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#2D1136] text-white px-4 py-2 rounded-lg z-20 text-sm font-medium animate-fade-in shadow-lg border border-[#9b87f5]/30">
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
