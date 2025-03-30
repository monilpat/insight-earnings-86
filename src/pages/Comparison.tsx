
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download } from 'lucide-react';
import Button from '@/components/Button';

const Comparison = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gabby-background">
      <Header />
      
      <main className="pt-24 pb-16 px-4 md:pt-32 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="heading-xl text-gradient mb-6">Research</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              See how Gabby stacks up against other platforms in the conversational AI and tokenized interaction space
            </p>
          </div>

          {/* Whitepaper Download Section */}
          <section className="mb-12">
            <Card className="bg-gabby-dark/30 border-white/10">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gabby-purple/20 p-4 rounded-full">
                      <FileText className="h-8 w-8 text-gabby-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Gabby Whitepaper</h3>
                      <p className="text-white/70">Complete technical details and tokenomics</p>
                    </div>
                  </div>
                  <a 
                    href="/whitepaper.pdf" 
                    download="whitepaper.pdf"
                    className="flex items-center"
                  >
                    <Button variant="primary" size="md" className="group">
                      <span>Download Whitepaper</span>
                      <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Market Overview Section */}
          <section className="mb-16">
            <div className="bg-gabby-dark/30 border border-white/10 rounded-lg p-8">
              <h2 className="heading-md text-white mb-6">Market Overview: Monetized Conversations Are Evolving</h2>
              
              <div className="space-y-6 text-white/90">
                <p className="leading-relaxed">
                  Over the past decade, billions of dollars have flowed into monetized conversation platforms — from celebrity shoutouts on Cameo to expert mentorship on Intro and MentorCruise. Monetized conversations have expanded to customized agents like Character.AI, Delphi.ai. and China's Xiaoice. which have exploded in user numbers, proving the public's appetite for scalable, interactive dialogue.
                </p>
                
                <p className="leading-relaxed">
                  Yet across this landscape, critical limitations persist: human time doesn't scale, microtransactions are rare, and user ownership is nonexistent. Web3 social apps like friend.tech and time.fun added speculation and token dynamics but are not designed for AI agent-focused experiences.
                </p>
                
                <p className="font-semibold text-gabby-gold text-xl mt-8 mb-4">
                  Gabby enters the scene as the first conversational agent to fill that gap.
                </p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Gabby's Positioning</h3>
                  
                  <p className="leading-relaxed">
                    Gabby is not just another chatbot. She is a fully tokenized, agent-driven AI that operates autonomously across voice, video, and text. Users can get basic insights from her underlying LLM for free or pay per message or session in $GABBY for her to consult from among her thousands of human and AI contacts for highly customized results.  These contacts include human industry veterans as well as cutting edge agents like Manus, the entire ElizaOS org, and more!  See <a href="/#network" className="text-gabby-purple underline hover:text-gabby-gold transition-colors">our network</a> for just how far her network reaches!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="heading-md text-white mb-8">Research</h2>

            <div className="overflow-x-auto mt-8 rounded-lg border border-white/10">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gabby-dark/40">
                    <TableHead className="text-white">Platform</TableHead>
                    <TableHead className="text-white">Category</TableHead>
                    <TableHead className="text-white">Interaction Model</TableHead>
                    <TableHead className="text-white">Monetization</TableHead>
                    <TableHead className="text-white">Tokenization</TableHead>
                    <TableHead className="text-white">Key Limitations</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg-gradient-to-r from-gabby-purple/30 to-gabby-gold/20 border-b border-white/10">
                    <TableCell className="font-medium text-white">Gabby</TableCell>
                    <TableCell className="text-white/90">Web3 AI Platform</TableCell>
                    <TableCell className="text-white/90">AI-powered conversations with best in class humans and agents</TableCell>
                    <TableCell className="text-white/90">Pay-per-message; pay-per-task; staking rewards</TableCell>
                    <TableCell className="text-white/90">GABBY token with utility and governance rights</TableCell>
                    <TableCell className="text-white/90">Early stage of development; evolving AI capability</TableCell>
                  </TableRow>
                  
                  <TableRow className="border-white/5">
                    <TableCell className="font-medium text-white">time.fun</TableCell>
                    <TableCell className="text-white/80">Web3 SocialFi</TableCell>
                    <TableCell className="text-white/80">Token-gated DMs, calls with creators</TableCell>
                    <TableCell className="text-white/80">Buy/sell creator time tokens</TableCell>
                    <TableCell className="text-white/80">Token per creator</TableCell>
                    <TableCell className="text-white/80">Requires creator availability</TableCell>
                  </TableRow>
                  
                  <TableRow className="border-white/5">
                    <TableCell className="font-medium text-white">Cameo</TableCell>
                    <TableCell className="text-white/80">Web2 Paid Celebrity</TableCell>
                    <TableCell className="text-white/80">Asynchronous video messages with celebrities</TableCell>
                    <TableCell className="text-white/80">One-off payment per video; platform takes ~25% cut</TableCell>
                    <TableCell className="text-white/80">None (fiat payments only)</TableCell>
                    <TableCell className="text-white/80">Not scalable (human fulfillment); novelty fading; no micro-interactions</TableCell>
                  </TableRow>
                  
                  <TableRow className="border-white/5">
                    <TableCell className="font-medium text-white">MentorCruise</TableCell>
                    <TableCell className="text-white/80">Web2 Mentorship</TableCell>
                    <TableCell className="text-white/80">Ongoing 1:1 mentorship via chat/video calls</TableCell>
                    <TableCell className="text-white/80">Monthly subscriptions ($200–$400/mo)</TableCell>
                    <TableCell className="text-white/80">None (fiat payments)</TableCell>
                    <TableCell className="text-white/80">Limited by mentor availability; cannot scale beyond small mentee loads</TableCell>
                  </TableRow>
                  
                  <TableRow className="border-white/5">
                    <TableCell className="font-medium text-white">friend.tech</TableCell>
                    <TableCell className="text-white/80">Web3 SocialFi</TableCell>
                    <TableCell className="text-white/80">Private chat with influencers (manual texting)</TableCell>
                    <TableCell className="text-white/80">Purchase of "keys" (social tokens) to join chat</TableCell>
                    <TableCell className="text-white/80">Keys trade on bonding curve; highly speculative market value</TableCell>
                    <TableCell className="text-white/80">Human influencer must engage; no guarantee of responses</TableCell>
                  </TableRow>
                  
                  <TableRow className="border-white/5">
                    <TableCell className="font-medium text-white">Character.AI</TableCell>
                    <TableCell className="text-white/80">AI-native Consumer</TableCell>
                    <TableCell className="text-white/80">Chat with AI characters (text, some voice)</TableCell>
                    <TableCell className="text-white/80">Freemium: free with limits; ~$10/mo subscription</TableCell>
                    <TableCell className="text-white/80">None (closed platform)</TableCell>
                    <TableCell className="text-white/80">No user monetization or ownership; content moderation limits</TableCell>
                  </TableRow>
                  
                  <TableRow className="border-white/5">
                    <TableCell className="font-medium text-white">Delphi.ai</TableCell>
                    <TableCell className="text-white/80">AI Clone Platform</TableCell>
                    <TableCell className="text-white/80">AI "clones" of real people chatting with fans</TableCell>
                    <TableCell className="text-white/80">Creators charge per message, per minute, or monthly</TableCell>
                    <TableCell className="text-white/80">None (Web2 payments)</TableCell>
                    <TableCell className="text-white/80">Platform-dependent; no secondary market for access</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Comparison;
