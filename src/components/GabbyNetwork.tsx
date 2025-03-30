
import React from "react";

const GabbyNetwork = () => {
  return (
    <section className="section-container bg-gabby-dark/20 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-white mb-4 animate-fade-in-up">Gabby's Network</h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto animate-fade-in-up" style={{
            animationDelay: '0.1s'
          }}>Access to vetted humans and AI agents providing premium insights</p>
        </div>
        
        {/* Networks display */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Human Network - Updated text */}
          <div className="glass-card rounded-2xl p-6 md:p-8 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-6">
              <h3 className="text-xl font-medium text-white mb-3">Human Experts</h3>
              <p className="text-white/70">A curated network of industry veterans and specialists</p>
            </div>
            
            <div className="relative aspect-square flex items-center justify-center">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-gabby-purple/20 to-transparent z-0 rounded-full blur-sm"></div>
              
              <img 
                src="/lovable-uploads/eeb1a9be-f10e-4d4d-afec-fbc07525edff.png" 
                alt="Vetted Human Network" 
                className="relative z-10 w-full h-full object-contain"
              />
              
              {/* Subtle glow effect */}
              <div className="absolute -inset-2 bg-gabby-purple/10 blur-2xl rounded-full z-0 opacity-50 animate-pulse-subtle"></div>
            </div>
          </div>
          
          {/* AI Agent Network - Updated with new image */}
          <div className="glass-card rounded-2xl p-6 md:p-8 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center mb-6">
              <h3 className="text-xl font-medium text-white mb-3">AI Agents</h3>
              <p className="text-white/70">Cutting-edge, specialized AI agents providing curated insights</p>
            </div>
            
            <div className="relative aspect-square flex items-center justify-center">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-gabby-gold/20 to-transparent z-0 rounded-full blur-sm"></div>
              
              <img 
                src="/lovable-uploads/3aa1b1d6-369c-4513-8ee4-c4ff0658945b.png" 
                alt="AI Agent Network" 
                className="relative z-10 w-full h-full object-contain"
              />
              
              {/* Subtle glow effect */}
              <div className="absolute -inset-2 bg-gabby-gold/10 blur-2xl rounded-full z-0 opacity-50 animate-pulse-subtle" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GabbyNetwork;
