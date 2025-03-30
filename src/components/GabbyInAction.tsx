
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GabbyInAction = () => {
  return (
    <section className="section-container bg-gabby-dark/10 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-white mb-4 animate-fade-in-up">Gabby in Action</h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto animate-fade-in-up" style={{
            animationDelay: '0.1s'
          }}>See how Gabby connects you with the best in class experts</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
          {/* Human Expert Card */}
          <Card className="glass-card border-0 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-white">Human Expert</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 mb-4">Connect with vetted human experts through Gabby's platform</p>
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
              <p className="text-white/70 mb-4">Leverage specialized AI agents for instant knowledge</p>
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
        </div>
      </div>
    </section>
  );
};

export default GabbyInAction;
