
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import CtaSection from "../components/CtaSection";
import TeamSection from "../components/TeamSection";
import CommunitySection from "../components/CommunitySection";
import GabbyHero from "../components/GabbyHero";
import GabbyNetwork from "../components/GabbyNetwork";
import Footer from "../components/Footer";
import ProblemSection from "../components/ProblemSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <GabbyHero />
        
        {/* Hero section with moved text */}
        <section className="relative pt-16 pb-16 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gabby-dark/80 via-gabby-background to-gabby-background z-[-1]"></div>
          
          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-gabby-purple/10 rounded-full blur-3xl animate-pulse-subtle"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gabby-gold/5 rounded-full blur-3xl animate-pulse-subtle" style={{
            animationDelay: '1s'
          }}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              {/* Main headline - Added more bottom padding */}
              <h1 className="heading-xl text-gradient animate-fade-in-up mb-12 pb-4">Unlock Industry Leading Insights</h1>
              
              {/* Updated copy */}
              <div className="mt-6 space-y-4 animate-fade-in-up" style={{
                animationDelay: '0.2s'
              }}>
                <p className="text-xl md:text-2xl text-white/90 font-medium">
                  Talk to Gabby for free. Pay for cutting edge human and AI insights from her network of vetted experts
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* New consolidated interaction section */}
        <section className="section-container bg-gabby-dark/10 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-16 px-4 md:px-0 max-w-5xl mx-auto">
              {/* Combined Interactive Card */}
              <Card className="glass-card border-0 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-white">Choose your insights source</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-6">Gabby connects you with different levels of insights based on your needs</p>
                  
                  {/* Initial Query - Made smaller */}
                  <div className="relative rounded-lg overflow-hidden border border-[#9b87f5]/30 shadow-lg shadow-[#6D249C]/20 mb-8 max-w-3xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/10 to-[#6D249C]/10 blur-md"></div>
                    <img 
                      src="/lovable-uploads/1df7e8b6-e4a8-4b95-b593-9176fc9de991.png" 
                      alt="Query Interface"
                      className="w-full h-auto relative z-10"
                    />
                  </div>
                  
                  {/* Three options section with arrows - Made larger */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-10">
                    {/* Human Expert Option */}
                    <div className="flex flex-col items-center">
                      <div className="mb-4 flex justify-center">
                        <ArrowDown className="h-10 w-10 text-gabby-gold animate-bounce" />
                      </div>
                      <p className="text-xl text-gabby-gold font-semibold text-center mb-4">Human</p>
                      <div className="relative rounded-lg overflow-hidden border border-[#9b87f5]/30 shadow-lg shadow-[#6D249C]/20 h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/10 to-[#6D249C]/10 blur-md"></div>
                        <img 
                          src="/lovable-uploads/1271692c-1130-4a5d-a150-4837cc951fb7.png" 
                          alt="Human Expert Response"
                          className="w-full h-auto relative z-10"
                        />
                      </div>
                    </div>
                    
                    {/* Free Option */}
                    <div className="flex flex-col items-center">
                      <div className="mb-4 flex justify-center">
                        <ArrowDown className="h-10 w-10 text-gabby-gold animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                      <p className="text-xl text-gabby-gold font-semibold text-center mb-4">Free</p>
                      <div className="relative rounded-lg overflow-hidden border border-[#9b87f5]/30 shadow-lg shadow-[#6D249C]/20 h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/10 to-[#6D249C]/10 blur-md"></div>
                        <img 
                          src="/lovable-uploads/f986288f-0d6d-4d57-a232-4f5eaa35ac58.png" 
                          alt="Free Response"
                          className="w-full h-auto relative z-10"
                        />
                      </div>
                    </div>
                    
                    {/* AI Expert Option */}
                    <div className="flex flex-col items-center">
                      <div className="mb-4 flex justify-center">
                        <ArrowDown className="h-10 w-10 text-gabby-gold animate-bounce" style={{ animationDelay: '0.4s' }} />
                      </div>
                      <p className="text-xl text-gabby-gold font-semibold text-center mb-4">AI Assistant</p>
                      <div className="relative rounded-lg overflow-hidden border border-[#9b87f5]/30 shadow-lg shadow-[#6D249C]/20 h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/10 to-[#6D249C]/10 blur-md"></div>
                        <img 
                          src="/lovable-uploads/8fe1c243-f606-4eda-8aaa-504d3352e0b9.png" 
                          alt="AI Expert Response"
                          className="w-full h-auto relative z-10"
                        />
                      </div>
                    </div>
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
        
        <GabbyNetwork />
        <FeatureSection />
        <CtaSection />
        <TeamSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
