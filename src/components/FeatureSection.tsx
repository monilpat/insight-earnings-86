
import { Zap, DollarSign, Lock } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const FeatureSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const featureSectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.3 });

    if (featureSectionRef.current) {
      observer.observe(featureSectionRef.current);
    }

    return () => {
      if (featureSectionRef.current) {
        observer.unobserve(featureSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
      }, 5000);
      
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section id="features" className="section-container bg-gabby-dark/30" ref={featureSectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-white mb-4 animate-fade-in-up">
            Meet $GABBY — Your Web3 AI Partner
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            With $Gabby, you gain immediate access to:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Feature tabs */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`glass-card p-6 cursor-pointer transition-all duration-300 border-l-4 ${
                  activeFeature === index 
                    ? 'border-l-gabby-purple bg-white/10' 
                    : 'border-l-transparent hover:border-l-gabby-purple/50'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-colors ${
                    activeFeature === index ? 'bg-gabby-purple text-white' : 'bg-white/10 text-white/70'
                  }`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right side - Feature visuals */}
          <div className="relative h-[400px] glass-card rounded-2xl p-6 overflow-hidden">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                  activeFeature === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img 
                  src={`/lovable-uploads/${gabbyImages[index]}`} 
                  alt={feature.title}
                  className="max-h-full object-contain animate-float"
                />
              </div>
            ))}
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-gabby-purple/20 to-transparent z-0"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gabby-dark/50 to-transparent z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const features: Feature[] = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Actionable Intelligence",
    description: "Tap into exclusive, encrypted insights unavailable elsewhere."
  },
  {
    icon: <DollarSign className="h-5 w-5" />,
    title: "Earnings Through Engagement",
    description: "Validate, share, and earn from credible market rumors and signals."
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Secure Monetization",
    description: "Stake, earn, and transact with full transparency via the blockchain."
  }
];

// Updated Gabby image URLs
const gabbyImages = [
  "7ab44eed-d640-40ef-8592-949715fc3864.png", // Gabby with coin
  "032f900e-b22c-4522-8081-c1e3657c3798.png", // Gabby with cash
  "fc37ab26-3bcf-42eb-af92-343db6eeb828.png"  // Gabby thinking
];

export default FeatureSection;
