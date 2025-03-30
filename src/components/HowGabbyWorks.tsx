
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const HowGabbyWorks = () => {
  return (
    <section className="section-container bg-gabby-dark/20 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-white mb-4 animate-fade-in-up">How Gabby Works</h2>
        </div>
        
        {/* Expert info - Now without double card */}
        <div className="relative px-4 md:px-0 mb-10">
          <div className="bg-gabby-purple/10 p-6 rounded-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-white font-medium text-xl mb-3">Pay Human/AI for Expertise</h3>
            <p className="text-white/80 mb-4">
              Start with basic conversations at no cost, or unlock deeper insights with premium queries with vetted experts and AI agents provide specialized expertise
            </p>
            <p className="text-gabby-gold/90 text-sm font-medium inline-block bg-gabby-gold/10 px-3 py-1 rounded-full">
              Payments occur in $GABBY (optionally swapped from USDC)
            </p>
          </div>
        </div>
        
        <div className="relative px-4 md:px-0">
          {/* Flow diagram with improved image rendering */}
          <div className="w-full glass-card rounded-2xl p-6 md:p-10 overflow-hidden">
            <div className="relative flex justify-center">
              {/* Using placeholder image since the original image had loading issues */}
              <img 
                src="/lovable-uploads/91089426-7545-4c5f-b950-e2e0faefe78f.png" 
                alt="How Gabby Works - Flow Diagram" 
                className="w-full h-auto object-contain max-w-4xl"
              />
              
              {/* Gradient overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gabby-dark/30 pointer-events-none"></div>
            </div>
            
            {/* Animated elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-gabby-purple/10 rounded-full blur-3xl animate-pulse-subtle"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-gabby-gold/5 rounded-full blur-3xl animate-pulse-subtle" style={{
              animationDelay: '1.5s'
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowGabbyWorks;
