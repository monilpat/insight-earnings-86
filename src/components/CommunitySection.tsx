
import { MessageCircle, Twitter } from 'lucide-react';
import Button from './Button';

const CommunitySection = () => {
  return (
    <section id="community" className="section-container">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-white mb-4">Join our Community</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6">
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
  }
];

export default CommunitySection;
