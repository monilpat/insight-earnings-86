
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
                      <h3 className="text-xl font-semibold text-white mb-2">Gabby White Paper</h3>
                      <p className="text-white/70">Complete technical details and tokenomics</p>
                    </div>
                  </div>
                  <a 
                    href="/whitepaper.pdf"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Button variant="primary" size="md" className="group">
                      <span>Download</span>
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

          <section>
            <h2 className="heading-md text-white mb-8">Research</h2>

            <div className="overflow-x-auto rounded-lg border border-white/10">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gabby-dark/40">
                    <TableHead className="text-white">Platform</TableHead>
                    <TableHead className="text-white">Category</TableHead>
                    <TableHead className="text-white">Interaction Model</TableHead>
                    <TableHead className="text-white">Monetization</TableHead>
                    <TableHead className="text-white">Tokenization/Speculation</TableHead>
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
                    <TableCell className="font-medium text-white">Cameo</TableCell>
                    <TableCell className="text-white/80">Web2 Paid Celebrity</TableCell>
                    <TableCell className="text-white/80">Asynchronous video messages with celebrities.</TableCell>
                    <TableCell className="text-white/80">One-off payment per video; platform takes ~25% cut.</TableCell>
                    <TableCell className="text-white/80">None (fiat payments only).</TableCell>
                    <TableCell className="text-white/80">Not scalable (human fulfillment); novelty fading; no micro-interactions (each purchase is sizable).</TableCell>
                  </TableRow>
                  
                  <TableRow className="border-white/5">
                    <TableCell className="font-medium text-white">MentorCruise</TableCell>
                    <TableCell className="text-white/80">Web2 Mentorship</TableCell>
                    <TableCell className="text-white/80">Ongoing 1:1 mentorship via chat/video calls.</TableCell>
                    <TableCell className="text-white/80">Monthly subscriptions ($200–$400/mo) or one-off sessions; platform commission.</TableCell>
                    <TableCell className="text-white/80">None (fiat payments).</TableCell>
                    <TableCell className="text-white/80">Limited by mentor availability; cannot scale beyond small mentee loads; relatively high commitment for users.</TableCell>
                  </TableRow>
                  
                  <TableRow className="border-white/5">
                    <TableCell className="font-medium text-white">Intro.co</TableCell>
                    <TableCell className="text-white/80">Web2 Expert Access</TableCell>
                    <TableCell className="text-white/80">Live video calls (15–60 min) with experts.</TableCell>
                    <TableCell className="text-white/80">One-time booking fee per session (hundreds to thousands of $).</TableCell>
                    <TableCell className="text-white/80">None.</TableCell>
                    <TableCell className="text-white/80">Very high cost for brief access; scheduling friction; zero continuity (pay each time).</TableCell>
                  </TableRow>
                  
                  <TableRow className="border-white/5">
                    <TableCell className="font-medium text-white">friend.tech</TableCell>
                    <TableCell className="text-white/80">Web3 SocialFi</TableCell>
                    <TableCell className="text-white/80">Private chat with influencers (manual texting).</TableCell>
                    <TableCell className="text-white/80">Purchase of "keys" (social tokens) to join chat; 10% fee on trades (5% to creator).</TableCell>
                    <TableCell className="text-white/80">Yes – keys trade on bonding curve; highly speculative market value.</TableCell>
                    <TableCell className="text-white/80">Human influencer must engage; no guarantee of responses; value of keys purely speculative without added utility.</TableCell>
                  </TableRow>
                  
                  <TableRow className="border-white/5">
                    <TableCell className="font-medium text-white">time.fun</TableCell>
                    <TableCell className="text-white/80">Web3 SocialFi</TableCell>
                    <TableCell className="text-white/80">Token-gated group chats, DMs, calls with creators.</TableCell>
                    <TableCell className="text-white/80">Fans buy creator's time tokens; spend tokens for interactions (text or voice/video).</TableCell>
                    <TableCell className="text-white/80">Yes – personal tokens per creator; can trade on DEX once popular.</TableCell>
                    <TableCell className="text-white/80">Requires creator to honor interactions; multiple token economies to manage; possible hoarding of tokens instead of use.</TableCell>
                  </TableRow>
                  
                  <TableRow className="border-white/5">
                    <TableCell className="font-medium text-white">Orb Land</TableCell>
                    <TableCell className="text-white/80">Web3 NFT Utility</TableCell>
                    <TableCell className="text-white/80">"Orb" NFT grants ability to ask questions (consulting).</TableCell>
                    <TableCell className="text-white/80">Orb holders pay continuous Harberger tax to creator (Orb Land); one holder at a time controls access.</TableCell>
                    <TableCell className="text-white/80">Yes – NFT tradable; price set by holder under tax pressure.</TableCell>
                    <TableCell className="text-white/80">Extremely niche & complex model; basically failed to attract users; not granular (one user at a time).</TableCell>
                  </TableRow>

                  <TableRow className="border-white/5">
                    <TableCell className="font-medium text-white">Character.AI</TableCell>
                    <TableCell className="text-white/80">AI-native Consumer</TableCell>
                    <TableCell className="text-white/80">Chat with AI characters (text, some voice features).</TableCell>
                    <TableCell className="text-white/80">Freemium: free usage with limits; ~$10/mo subscription for faster/unlimited access.</TableCell>
                    <TableCell className="text-white/80">None (closed platform, no user-owned assets).</TableCell>
                    <TableCell className="text-white/80">No user monetization or ownership; content moderation limits some use cases; pay tier is subscription only (no per-use payment).</TableCell>
                  </TableRow>
                  
                  <TableRow className="border-white/5">
                    <TableCell className="font-medium text-white">Auren (Elysian)</TableCell>
                    <TableCell className="text-white/80">AI-native Companion</TableCell>
                    <TableCell className="text-white/80">Personal AI friend/coach via mobile app (text/voice).</TableCell>
                    <TableCell className="text-white/80">Paid app: ~$20/month subscription (no free tier).</TableCell>
                    <TableCell className="text-white/80">None.</TableCell>
                    <TableCell className="text-white/80">High monthly cost; no community/content sharing; scalability mostly on AI side, but user adoption gating due to price.</TableCell>
                  </TableRow>
                  
                  <TableRow className="border-white/5">
                    <TableCell className="font-medium text-white">Xiaoice</TableCell>
                    <TableCell className="text-white/80">AI Companion (China)</TableCell>
                    <TableCell className="text-white/80">Multiplatform chatbot (text & voice) with long-term memory and emotional engagement.</TableCell>
                    <TableCell className="text-white/80">Largely free for users; monetized via B2B and content (indirect revenue).</TableCell>
                    <TableCell className="text-white/80">None (no personal tokens; though has created virtual idols/products).</TableCell>
                    <TableCell className="text-white/80">Difficult to directly monetize huge user base; no direct user ownership; primarily specific to certain markets (China).</TableCell>
                  </TableRow>
                  
                  <TableRow className="border-white/5">
                    <TableCell className="font-medium text-white">Delphi.ai</TableCell>
                    <TableCell className="text-white/80">AI Clone Platform</TableCell>
                    <TableCell className="text-white/80">AI "clones" of real people, chatting with fans/users.</TableCell>
                    <TableCell className="text-white/80">Creators charge per message, per minute, or monthly membership for access (fiat payments via platform).</TableCell>
                    <TableCell className="text-white/80">None (Web2 payments, though concept of clone itself is an asset to creator).</TableCell>
                    <TableCell className="text-white/80">Platform-dependent (centralized control); no secondary market for access; quality varies by clone training.</TableCell>
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
