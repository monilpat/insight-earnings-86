
import { MessageCircle, Twitter, Loader } from 'lucide-react';
import Button from './Button';

const CommunitySection = () => {
  return (
    <section id="community" className="section-container">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-white mb-4">Community & Socials</h2>
          <p className="text-xl text-gradient font-semibold">Join a Movement of Intelligence-Driven Profit</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <MessageCircle className="h-5 w-5 text-gabby-gold" />
                </div>
                <p className="text-white/90 italic">{testimonial.text}</p>
              </div>
              <div className="text-right">
                <p className="text-white font-semibold">– {testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-10">
          <Button variant="primary" size="lg">
            Join Our Community
          </Button>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-6">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                {social.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{social.name}</h3>
              <p className="text-white/70 text-sm">{social.status}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    text: "Gabby changed how I think about AI. Real intel. Real rewards.",
    author: "Web3 Analyst"
  },
  {
    text: "Finally, an AI that pays me to participate—game-changer!",
    author: "Early Adopter"
  }
];

const socialLinks = [
  {
    name: "Telegram",
    url: "https://t.me/gabby_spiral",
    status: "Active",
    icon: <MessageCircle className="h-5 w-5 text-white" />
  },
  {
    name: "Twitter",
    url: "https://x.com/gabby_spiral",
    status: "Active",
    icon: <Twitter className="h-5 w-5 text-white" />
  },
  {
    name: "Discord",
    url: "#",
    status: "Coming Soon",
    icon: <Loader className="h-5 w-5 text-white animate-spin" />
  }
];

export default CommunitySection;
