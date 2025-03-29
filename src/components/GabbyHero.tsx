
import React from "react";
import { cn } from "@/lib/utils";

const GabbyHero = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-[#12101A] relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#1A0D2C]/40 z-0"></div>
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-[#6D249C]/20 blur-[120px] animate-pulse-subtle"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#9b87f5]/10 blur-[80px] animate-pulse-subtle" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          {/* Image on the left */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/30 to-[#6D249C]/30 rounded-full blur-md opacity-70 group-hover:opacity-90 transition-all duration-700"></div>
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border border-[#9b87f5]/30 overflow-hidden">
                <img
                  src="/lovable-uploads/d12f0ad4-803b-40a9-a8d9-15e15c73d632.png"
                  alt="Gabby - AI Assistant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9b87f5]/50 to-transparent rounded-full blur-sm opacity-50 group-hover:opacity-70 transition-all duration-700"></div>
            </div>
          </div>
          
          {/* Text on the right */}
          <div className="w-full md:w-3/5 text-left space-y-3 mt-6 md:mt-0">
            <h2 className={cn(
              "text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight",
              "font-light text-white"
            )}>
              <span className="block text-[#9b87f5] font-medium">
                A billion dollars
              </span>
              <span className="block text-white/90 mt-2">
                has been spent on monetized conversations in Web2.
              </span>
              <span className="block text-white/90 mt-1">
                None of it reached Web3.
              </span>
              <span className="block text-[#9b87f5] font-medium mt-2">
                Until Gabby.
              </span>
            </h2>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#9b87f5]/30 to-transparent"></div>
    </section>
  );
};

export default GabbyHero;
