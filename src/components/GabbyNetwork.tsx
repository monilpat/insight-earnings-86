
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
          {/* Human Network */}
          <div className="glass-card rounded-2xl p-6 md:p-8 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-6">
              <h3 className="text-xl font-medium text-white mb-3">Human Expert Network</h3>
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
          
          {/* AI Agent Network */}
          <div className="glass-card rounded-2xl p-6 md:p-8 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center mb-6">
              <h3 className="text-xl font-medium text-white mb-3">AI Agent Network</h3>
              <p className="text-white/70">Cutting-edge AI models providing specialized knowledge</p>
            </div>
            
            <div className="relative aspect-square flex items-center justify-center">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-gabby-gold/20 to-transparent z-0 rounded-full blur-sm"></div>
              
              <img 
                src="/lovable-uploads/82141925-7f20-4f43-88a5-85a7482e8494.png" 
                alt="AI Agent Network" 
                className="relative z-10 w-full h-full object-contain"
              />
              
              {/* Subtle glow effect */}
              <div className="absolute -inset-2 bg-gabby-gold/10 blur-2xl rounded-full z-0 opacity-50 animate-pulse-subtle" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Additional information */}
        <div className="mt-10 text-center">
          <p className="text-white/80 text-lg max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            When you pay for premium insights, Gabby connects you with the perfect experts for your needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default GabbyNetwork;
