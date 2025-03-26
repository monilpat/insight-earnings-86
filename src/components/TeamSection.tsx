import { AnimatePresence, motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
const TeamSection = () => {
  return <section className="section-container">
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
              <Avatar className="w-20 h-20 border-2 border-white/20 mb-4">
                <AvatarImage src="/lovable-uploads/b42d20aa-6112-43f5-a9a2-8ade203ba7fe.png" alt="Eliza AI" />
                <AvatarFallback className="bg-gradient-to-br from-gabby-purple to-gabby-dark">E</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-white mb-1">Eliza</h3>
              <p className="text-white/60 text-sm mb-4">Partner & Maintainer</p>
              <div className="flex gap-3 mt-1">
                <Button variant="link" size="sm" className="text-gabby-purple hover:text-gabby-gold" asChild>
                  <a href="https://x.com/reality_spiral/status/1863029356832199032" target="_blank" rel="noopener noreferrer">
                    Learn more <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </Button>
                <Button variant="link" size="sm" className="text-gabby-purple hover:text-gabby-gold" asChild>
                  <a href="https://github.com/elizaOS/eliza" target="_blank" rel="noopener noreferrer">
                    Visit Eliza AI <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Avatar className="w-20 h-20 border-2 border-white/20 mb-4">
                <AvatarFallback className="bg-gradient-to-br from-gabby-gold to-gabby-purple">RS</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-white mb-1">Reality Spiral</h3>
              <p className="text-white/60 text-sm mb-4">Agent Ecosystem</p>
              <div className="flex gap-3 mt-1">
                <Button variant="link" size="sm" className="text-gabby-purple hover:text-gabby-gold" asChild>
                  <a href="https://x.com/reality_spiral/status/1863029356832199032" target="_blank" rel="noopener noreferrer">
                    Learn more <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </Button>
                <Button variant="link" size="sm" className="text-gabby-purple hover:text-gabby-gold" asChild>
                  <a href="https://github.com/elizaOS/eliza" target="_blank" rel="noopener noreferrer">
                    Visit Reality Spiral <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TeamSection;