
import React from "react";

const GabbyHero = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-[#1A1F2C] to-[#221F26] text-white overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-4 order-2 md:order-1 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              <span className="block text-[#9b87f5]">
                A billion dollars
              </span>{" "}
              has been spent on monetized conversations in Web2.
              <span className="block mt-2">None of it reached Web3.</span>
              <span className="block mt-2 text-[#9b87f5]">Until Gabby.</span>
            </h1>
            <div className="pt-4">
              <button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end order-1 md:order-2 animate-scale-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full border-4 border-[#9b87f5] shadow-2xl">
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
