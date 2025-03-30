
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
        
        {/* Networks display - First two networks side by side */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Human Network - Updated image */}
          <div className="glass-card rounded-2xl p-6 md:p-8 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-6">
              <h3 className="text-xl font-medium text-white mb-3">Human Experts</h3>
              <p className="text-white/70">A curated network of industry veterans and specialists</p>
            </div>
            
            <div className="relative aspect-square flex items-center justify-center">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-gabby-purple/20 to-transparent z-0 rounded-full blur-sm"></div>
              
              <img 
                src="/lovable-uploads/07dd1461-87bf-4b50-8249-e30a744d34a2.png" 
                alt="Highly Vetted Human Network" 
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
                src="/lovable-uploads/9bad5563-af28-4ca6-abed-43d89bf09053.png" 
                alt="Highly Vetted AI Agent Network" 
                className="relative z-10 w-full h-full object-contain"
              />
              
              {/* Subtle glow effect */}
              <div className="absolute -inset-2 bg-gabby-gold/10 blur-2xl rounded-full z-0 opacity-50 animate-pulse-subtle" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Third image - Directory of experts full width */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass-card rounded-2xl p-6 md:p-8 overflow-hidden">
            <div className="text-center mb-6">
              <h3 className="text-xl font-medium text-white mb-3">Expert Directory</h3>
              <p className="text-white/70">Access thousands of human and AI experts through Gabby's network</p>
            </div>
            
            <div className="relative flex items-center justify-center">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-gabby-purple/20 to-gabby-gold/20 z-0 rounded-lg blur-md"></div>
              
              <img 
                src="/lovable-uploads/feaead0b-587a-498b-8eed-3526fa5927e3.png" 
                alt="Thousands of Human and AI Experts Directory" 
                className="relative z-10 w-full max-w-3xl mx-auto h-auto object-contain"
              />
              
              {/* Subtle glow effect */}
              <div className="absolute -inset-2 bg-gabby-purple/10 bg-gradient-to-r from-gabby-purple/10 to-gabby-gold/10 blur-2xl rounded-lg z-0 opacity-50 animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GabbyNetwork;
