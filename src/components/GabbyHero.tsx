
import React from "react";

const GabbyHero = () => {
  return (
    <section className="w-full py-8 md:py-12 bg-gradient-to-b from-[#1A1F2C]/90 to-[#221F26]/90 text-white overflow-hidden backdrop-blur-sm">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-5xl mx-auto">
          <div className="flex flex-col space-y-3 order-2 md:order-1 animate-fade-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-tight">
              <span className="block text-[#9b87f5]/90 font-semibold">
                A billion dollars
              </span>
              <span className="block text-white/80 font-light">
                has been spent on monetized conversations in Web2.
              </span>
              <span className="block text-white/80 font-light">None of it reached Web3.</span>
              <span className="block text-[#9b87f5]/90 font-semibold">Until Gabby.</span>
            </h2>
          </div>
          <div className="flex justify-center md:justify-end order-1 md:order-2 animate-scale-in">
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 overflow-hidden rounded-full border-2 border-[#9b87f5]/60 shadow-lg">
              <img
                src="/lovable-uploads/d12f0ad4-803b-40a9-a8d9-15e15c73d632.png"
                alt="Gabby - AI Assistant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GabbyHero;
