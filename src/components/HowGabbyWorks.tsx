
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const HowGabbyWorks = () => {
  return (
    <section className="section-container bg-gabby-dark/20 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-white mb-4 animate-fade-in-up">How Gabby Works</h2>
        </div>
        
        {/* Expert info */}
        <div className="relative px-4 md:px-0 mb-10">
          <div className="bg-gabby-purple/10 p-6 rounded-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-white font-medium text-xl mb-3">Pay Human/AI for Expertise</h3>
            <p className="text-white/80 mb-4">
              Start with basic conversations at no cost, or unlock deeper insights with premium queries with vetted experts and AI agents for specialized expertise
            </p>
            <p className="text-gabby-gold/90 text-sm font-medium inline-block bg-gabby-gold/10 px-3 py-1 rounded-full">
              Payments occur in $GABBY (optionally swapped from USDC)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowGabbyWorks;
