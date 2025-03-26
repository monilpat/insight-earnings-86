
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { motion } from 'framer-motion';

const TeamSection = () => {
  return (
    <section className="section-container">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card p-10 md:p-16">
          <div className="text-center mb-10">
            <h2 className="heading-md text-white mb-4">Built by Experts You Can Trust</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              $Gabby is created by the team behind <strong className="text-white">Eliza V2</strong>, known for successful AI + blockchain integrations. With a proven track record in building Web3 tools, we're creating a future where AI conversations deliver <strong className="text-gradient">real value</strong>.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center">
              <Avatar className="w-20 h-20 rounded-full border-2 border-white/20 mb-4 overflow-hidden">
                <AvatarImage 
                  src="/lovable-uploads/fa5a5c06-f7ee-4435-a00e-ac5824e706e8.png" 
                  alt="Eliza Logo" 
                  className="object-cover"
                />
                <AvatarFallback className="bg-gradient-to-br from-gabby-purple to-gabby-dark text-white">
                  E
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-white mb-1">Eliza</h3>
              <p className="text-white/60 text-sm">AI + Blockchain Integration</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Avatar className="w-20 h-20 rounded-full border-2 border-white/20 mb-4 overflow-hidden">
                <AvatarImage 
                  src="/lovable-uploads/d3e041d0-1c5a-48b2-a093-af339a1cc8b0.png" 
                  alt="Reality Spiral Logo" 
                  className="object-cover"
                />
                <AvatarFallback className="bg-gradient-to-br from-gabby-gold to-gabby-purple text-white">
                  RS
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-white mb-1">Reality Spiral</h3>
              <p className="text-white/60 text-sm">Web3 Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
