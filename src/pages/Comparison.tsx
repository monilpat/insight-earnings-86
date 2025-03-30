import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

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
            <h1 className="heading-xl text-gradient mb-6">How Gabby Compares</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              See how Gabby stacks up against other platforms in the conversational AI and tokenized interaction space
            </p>
          </div>

          <section className="mb-20">
            <h2 className="heading-md text-white mb-8">Competitive Analysis</h2>
            <p className="text-white/80 mb-6">
              Comprehensive analysis of existing platforms and market opportunities
            </p>

            <div className="overflow-x-auto mt-8 rounded-lg border border-white/10">
              <Table>
                <TableCaption>Platform Comparison</TableCaption>
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

          <section className="mb-20">
            <h2 className="heading-md text-white mb-8">SWOT Analysis</h2>
            <p className="text-white/80 mb-12">
              Strengths, Weaknesses, Opportunities and Threats of key competitors
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gabby-purple/20 to-gabby-gold/10 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gradient mb-4">Gabby</h3>
                <p className="text-white/60 text-sm mb-4">Web3 AI Platform</p>
                
                <div className="mb-4">
                  <h4 className="text-gabby-gold font-medium mb-2">Strengths</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Combines AI scalability with token economics</li>
                    <li>Microtransaction-based revenue model</li>
                    <li>Decentralized ownership structure</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-red-400 font-medium mb-2">Weaknesses</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Early stage platform in development</li>
                    <li>Building user trust in a new paradigm</li>
                    <li>Market education needs</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-green-400 font-medium mb-2">Opportunities</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>First-mover advantage in tokenized AI interactions</li>
                    <li>Expanding to multi-chain integrations</li>
                    <li>Cross-platform API opportunities</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-orange-400 font-medium mb-2">Threats</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Regulatory uncertainty in crypto space</li>
                    <li>Competition from well-funded Web2 platforms</li>
                    <li>AI technology advancement pace</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gabby-dark/20 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Cameo</h3>
                <p className="text-white/60 text-sm mb-4">Web2 Paid Celebrity</p>
                
                <div className="mb-4">
                  <h4 className="text-gabby-gold font-medium mb-2">Strengths</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Strong brand recognition</li>
                    <li>Proven celebrity-fan monetization model</li>
                    <li>High-profile talent roster</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-red-400 font-medium mb-2">Weaknesses</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Limited by human availability</li>
                    <li>High per-interaction cost</li>
                    <li>No continuity or ongoing engagement</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-green-400 font-medium mb-2">Opportunities</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Could expand to more business-oriented use cases</li>
                    <li>Potential for token model</li>
                    <li>Integration with NFTs</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-orange-400 font-medium mb-2">Threats</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Novelty might wear off</li>
                    <li>Emerging AI celebrity clones</li>
                    <li>Web3 alternatives offering better economics</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gabby-dark/20 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">MentorCruise</h3>
                <p className="text-white/60 text-sm mb-4">Web2 Mentorship Marketplace</p>
                
                <div className="mb-4">
                  <h4 className="text-gabby-gold font-medium mb-2">Strengths</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Quality professional network</li>
                    <li>Proven recurring revenue model</li>
                    <li>Clear value proposition</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-red-400 font-medium mb-2">Weaknesses</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>High barrier to entry (cost)</li>
                    <li>Limited by mentor time</li>
                    <li>No token/ownership aspects</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-green-400 font-medium mb-2">Opportunities</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Adding AI-assisted mentorship options</li>
                    <li>Tokenized mentor equity</li>
                    <li>Community pools</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-orange-400 font-medium mb-2">Threats</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Growing competition in professional learning</li>
                    <li>AI mentors replacing humans</li>
                    <li>Web3 platforms offering token incentives</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gabby-dark/20 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">friend.tech</h3>
                <p className="text-white/60 text-sm mb-4">Web3 SocialFi</p>
                
                <div className="mb-4">
                  <h4 className="text-gabby-gold font-medium mb-2">Strengths</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Novel tokenization model</li>
                    <li>Strong network effects</li>
                    <li>Easy to understand bonding curve mechanics</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-red-400 font-medium mb-2">Weaknesses</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Dependent on influencer activity</li>
                    <li>Purely speculative value</li>
                    <li>High volatility</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-green-400 font-medium mb-2">Opportunities</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Expand to more utility beyond chat</li>
                    <li>Decentralized governance</li>
                    <li>Cross-platform integration</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-orange-400 font-medium mb-2">Threats</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Regulatory concerns</li>
                    <li>Loss of user interest</li>
                    <li>Competing protocols with more utility</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gabby-dark/20 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Character.AI</h3>
                <p className="text-white/60 text-sm mb-4">AI-native Consumer</p>
                
                <div className="mb-4">
                  <h4 className="text-gabby-gold font-medium mb-2">Strengths</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Massive user base</li>
                    <li>High engagement metrics</li>
                    <li>Strong AI character creation tools</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-red-400 font-medium mb-2">Weaknesses</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Limited monetization options</li>
                    <li>No user ownership</li>
                    <li>Centralized control</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-green-400 font-medium mb-2">Opportunities</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Creator monetization features</li>
                    <li>Integration with Web3</li>
                    <li>Premium character marketplaces</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-orange-400 font-medium mb-2">Threats</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Open-source alternatives</li>
                    <li>Content moderation challenges</li>
                    <li>User privacy concerns</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gabby-dark/20 border border-white/10 rounded-lg p-6 md:col-span-2 lg:col-span-1">
                <h3 className="text-xl font-semibold text-white mb-4">Delphi.ai</h3>
                <p className="text-white/60 text-sm mb-4">AI Clone Platform</p>
                
                <div className="mb-4">
                  <h4 className="text-gabby-gold font-medium mb-2">Strengths</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Specialized AI clone technology</li>
                    <li>Multiple monetization options</li>
                    <li>Established expert network</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-red-400 font-medium mb-2">Weaknesses</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Dependency on quality of training data</li>
                    <li>Centralized platform control</li>
                    <li>No secondary markets</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-green-400 font-medium mb-2">Opportunities</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Web3 integration for ownership</li>
                    <li>Creator token economies</li>
                    <li>Cross-platform presence</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-orange-400 font-medium mb-2">Threats</h4>
                  <ul className="text-white/80 space-y-1 list-disc pl-5">
                    <li>Ethical concerns over AI representation</li>
                    <li>Technical barriers to quality</li>
                    <li>Regulatory challenges</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="heading-md text-white mb-8">Market Gap Analysis</h2>
            <div className="bg-gabby-dark/20 border border-white/10 rounded-lg p-8">
              <p className="text-white/80 mb-6">
                Across these analyses, a recurring observation is that no existing solution combines the scalability and consistency of AI with the granular monetization and ownership of Web3.
              </p>
              <p className="text-white/80 mb-4">
                GABBY aims to fill that gap by providing:
              </p>
              <ul className="text-white/80 space-y-4 list-disc pl-5">
                <li>AI-powered conversations without human availability constraints</li>
                <li>True microtransactions through token-based pay-per-message and pay-per-task models</li>
                <li>Decentralized ownership models through the GABBY token</li>
                <li>Exclusive information with community validation mechanisms</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Comparison;
