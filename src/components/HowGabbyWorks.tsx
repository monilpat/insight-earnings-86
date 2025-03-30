
import React from "react";
import { ArrowDown, ArrowRight } from 'lucide-react';

const HowGabbyWorks = () => {
  return (
    <section className="section-container bg-gabby-dark/20 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-white mb-4 animate-fade-in-up">How Gabby Works</h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto animate-fade-in-up" style={{
            animationDelay: '0.1s'
          }}>A simple process that transforms conversations into value</p>
        </div>
        
        <div className="relative px-4 md:px-0">
          {/* Flow diagram with image */}
          <div className="w-full glass-card rounded-2xl p-6 md:p-10 overflow-hidden">
            <div className="relative">
              <img 
                src="/lovable-uploads/550a71f7-27b3-4cee-b5a2-6dc4ccc98386.png" 
                alt="How Gabby Works - Flow Diagram" 
                className="w-full h-auto object-contain mx-auto"
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
          
          {/* Interactive elements - Mobile optimized description */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center md:text-left">
            <div className="glass-card p-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-white font-medium mb-2">Free Question and Response</h3>
              <p className="text-white/70 text-sm">Start with basic conversations at no cost</p>
            </div>
            
            <div className="glass-card p-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-white font-medium mb-2">Premium Question and Response</h3>
              <p className="text-white/70 text-sm">Unlock deeper insights with premium queries</p>
            </div>
            
            <div className="glass-card p-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-white font-medium mb-2">Pay Human/AI for Guidance</h3>
              <p className="text-white/70 text-sm">Vetted experts and AI agents provide specialized knowledge</p>
              <p className="text-gabby-gold/90 text-xs mt-1 font-medium">Payments occur in $GABBY (optionally swapped from USDC)</p>
            </div>
            
            <div className="glass-card p-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-white font-medium mb-2">Increase Treasury</h3>
              <p className="text-white/70 text-sm">Premium interactions build the Gabby ecosystem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowGabbyWorks;
