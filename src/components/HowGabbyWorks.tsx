
import React from "react";
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

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
          {/* Flow diagram with improved image rendering */}
          <div className="w-full glass-card rounded-2xl p-6 md:p-10 overflow-hidden">
            <div className="relative flex justify-center">
              <img 
                src="/lovable-uploads/550a71f7-27b3-4cee-b5a2-6dc4ccc98386.png" 
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
          
          {/* Interactive elements - Improved card layout */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass-card border-none animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <h3 className="text-white font-medium text-lg mb-2">Free Question and Response</h3>
                <p className="text-white/70">Start with basic conversations at no cost</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-none animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6">
                <h3 className="text-white font-medium text-lg mb-2">Premium Question and Response</h3>
                <p className="text-white/70">Unlock deeper insights with premium queries</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-none animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6">
                <h3 className="text-white font-medium text-lg mb-2">Pay Human/AI for Guidance</h3>
                <p className="text-white/70">Vetted experts and AI agents provide specialized knowledge</p>
                <p className="text-gabby-gold/90 text-sm mt-2 font-medium">Payments occur in $GABBY (optionally swapped from USDC)</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-none animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <CardContent className="p-6">
                <h3 className="text-white font-medium text-lg mb-2">Increase Treasury</h3>
                <p className="text-white/70">Premium interactions build the Gabby ecosystem</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowGabbyWorks;
