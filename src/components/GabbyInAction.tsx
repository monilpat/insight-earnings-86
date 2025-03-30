
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";

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
              
              {/* User Query */}
              <div className="relative rounded-lg overflow-hidden border border-[#9b87f5]/30 shadow-lg shadow-[#6D249C]/20 mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/10 to-[#6D249C]/10 blur-md"></div>
                <img 
                  src="/lovable-uploads/a7a58fbb-f2f6-4d47-b2bb-6de403f91ded.png" 
                  alt="Human Expert Query"
                  className="w-full h-auto relative z-10"
                />
              </div>
              
              {/* Arrow Down */}
              <div className="flex justify-center my-3">
                <ArrowDown className="h-8 w-8 text-gabby-gold animate-bounce" />
              </div>
              
              {/* Expert Response - Placeholder for second image */}
              <div className="relative rounded-lg overflow-hidden border border-[#9b87f5]/30 shadow-lg shadow-[#6D249C]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/10 to-[#6D249C]/10 blur-md"></div>
                <div className="h-64 bg-gabby-dark/30 flex items-center justify-center">
                  <p className="text-white/70 text-center">Expert response image will be added here</p>
                </div>
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
              
              {/* User Query */}
              <div className="relative rounded-lg overflow-hidden border border-[#9b87f5]/30 shadow-lg shadow-[#6D249C]/20 mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/10 to-[#6D249C]/10 blur-md"></div>
                <img 
                  src="/lovable-uploads/7771d85a-903e-41cf-997c-955a21c4f079.png" 
                  alt="AI Expert Query"
                  className="w-full h-auto relative z-10"
                />
              </div>
              
              {/* Arrow Down */}
              <div className="flex justify-center my-3">
                <ArrowDown className="h-8 w-8 text-gabby-gold animate-bounce" />
              </div>
              
              {/* Expert Response - Placeholder for second image */}
              <div className="relative rounded-lg overflow-hidden border border-[#9b87f5]/30 shadow-lg shadow-[#6D249C]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/10 to-[#6D249C]/10 blur-md"></div>
                <div className="h-64 bg-gabby-dark/30 flex items-center justify-center">
                  <p className="text-white/70 text-center">AI response image will be added here</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Free Option Card */}
          <Card className="glass-card border-0 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-white">Free</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 mb-4">Experience Gabby without any subscription</p>
              
              {/* User Query */}
              <div className="relative rounded-lg overflow-hidden border border-[#9b87f5]/30 shadow-lg shadow-[#6D249C]/20 mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/10 to-[#6D249C]/10 blur-md"></div>
                <img 
                  src="/lovable-uploads/92a16b0a-0b95-4369-b6ea-0a953b77dc9f.png" 
                  alt="Free Option Query"
                  className="w-full h-auto relative z-10"
                />
              </div>
              
              {/* Arrow Down */}
              <div className="flex justify-center my-3">
                <ArrowDown className="h-8 w-8 text-gabby-gold animate-bounce" />
              </div>
              
              {/* Free Response - Updated with the provided image */}
              <div className="relative rounded-lg overflow-hidden border border-[#9b87f5]/30 shadow-lg shadow-[#6D249C]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/10 to-[#6D249C]/10 blur-md"></div>
                <img 
                  src="/lovable-uploads/8c7a2857-ddef-48d7-860a-4a3420be0cf5.png" 
                  alt="Free Option Response"
                  className="w-full h-auto relative z-10"
                />
              </div>
            </CardContent>
          </Card>
          
          {/* Enhanced Market Analysis Card */}
          <Card className="glass-card border-0 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <CardContent className="pt-6 pb-8">
              <div className="bg-gradient-to-r from-gabby-purple/20 to-gabby-gold/20 p-6 md:p-8 rounded-xl mb-6">
                <p className="text-white text-lg md:text-2xl font-medium leading-relaxed">
                  <span className="text-gabby-gold font-semibold">Character.ai</span> and <span className="text-gabby-gold font-semibold">Delphi</span> alone rake in 
                  <span className="underline decoration-gabby-gold/70 px-1">millions</span> 
                  in monetized conversations with AIs in <span className="font-bold text-blue-400">Web 2</span>.
                  <br className="hidden md:block" /><br className="hidden sm:block" />
                  <span className="text-gabby-gold font-semibold">Friend.tech</span> and <span className="text-gabby-gold font-semibold">time.fun</span> facilitate 
                  <span className="underline decoration-gabby-gold/70 px-1">millions</span> 
                  in monetized conversations with humans in <span className="font-bold text-purple-400">Web 3</span>.
                  <br className="hidden md:block" /><br className="hidden sm:block" />
                </p>
                
                <div className="relative mt-6 py-4 px-2 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/30 to-[#F5AF19]/30 rounded-lg blur-xl"></div>
                  <div className="absolute inset-0 border-2 border-gabby-gold/50 rounded-lg animate-pulse-subtle"></div>
                  <h3 className="text-4xl md:text-5xl font-bold text-center relative z-10 animate-gradient-shift bg-gradient-to-r from-gabby-gold via-[#9b87f5] to-gabby-gold bg-clip-text text-transparent bg-300% tracking-wide pb-2">
                    Gabby bridges the gap.
                  </h3>
                </div>
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
