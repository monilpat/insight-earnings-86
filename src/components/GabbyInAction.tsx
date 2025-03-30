
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GabbyInAction = () => {
  return (
    <section className="section-container bg-gabby-dark/10 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-white mb-4 animate-fade-in-up">Gabby in Action</h2>
        </div>
        
        <div className="flex flex-col gap-12 px-4 md:px-0 max-w-4xl mx-auto">
          {/* Human Expert Card */}
          <Card className="glass-card border-0 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-white">Human Expert</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 mb-4">Connect with vetted Human experts through Gabby's exclusive network</p>
              <div className="relative rounded-lg overflow-hidden border border-[#9b87f5]/30 shadow-lg shadow-[#6D249C]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/10 to-[#6D249C]/10 blur-md"></div>
                <img 
                  src="/human-expert.gif" 
                  alt="Human Expert Interaction"
                  className="w-full h-auto relative z-10"
                />
              </div>
            </CardContent>
          </Card>
          
          {/* AI Expert Card */}
          <Card className="glass-card border-0 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-white">AI Expert</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 mb-4">Leverage cutting-edge specialized AI Agents</p>
              <div className="relative rounded-lg overflow-hidden border border-[#9b87f5]/30 shadow-lg shadow-[#6D249C]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/10 to-[#6D249C]/10 blur-md"></div>
                <img 
                  src="/ai-expert.gif" 
                  alt="AI Expert Interaction"
                  className="w-full h-auto relative z-10"
                />
              </div>
            </CardContent>
          </Card>
          
          {/* Enhanced Market Analysis Card */}
          <Card className="glass-card border-0 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <CardContent className="pt-6 pb-8">
              <div className="bg-gradient-to-r from-gabby-purple/20 to-gabby-gold/20 p-6 md:p-8 rounded-xl mb-6">
                <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
                  <span className="text-gabby-gold font-semibold">Character.ai</span> and <span className="text-gabby-gold font-semibold">Delphi</span> alone rake in <span className="underline decoration-gabby-gold/70">millions</span> in monetized conversations with AIs in <span className="font-bold text-blue-400">Web 2</span>. 
                  <br className="hidden md:block" />
                  <span className="text-gabby-gold font-semibold">Friend.tech</span> and <span className="text-gabby-gold font-semibold">time.fun</span> facilitate <span className="underline decoration-gabby-gold/70">millions</span> in volume for monetized conversations in <span className="font-bold text-purple-400">Web 3</span> but for humans, not AIs.
                  <br className="hidden md:block" />
                  <span className="text-2xl font-bold mt-2 block text-gradient">Gabby bridges the gap.</span>
                </p>
              </div>
              
              {/* Market Positioning Image */}
              <div className="relative rounded-lg overflow-hidden border border-[#9b87f5]/30 shadow-lg shadow-[#6D249C]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/10 to-[#6D249C]/10 blur-md"></div>
                <img 
                  src="/lovable-uploads/803e5791-deda-4534-b34f-17b9cd66ee5b.png" 
                  alt="Gabby Market Positioning"
                  className="w-full h-auto relative z-10"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GabbyInAction;
