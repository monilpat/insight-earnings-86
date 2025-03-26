
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

const GabbyGallery = () => {
  return (
    <section className="section-container">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card p-10 md:p-16">
          <div className="text-center mb-10">
            <h2 className="heading-md text-white mb-4">Meet $GABBY</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              The future of AI conversations and web3 integration, bringing you verified insights, encrypted intelligence, and decentralized profits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden border-2 border-white/10 shadow-xl hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/fa5a5c06-f7ee-4435-a00e-ac5824e706e8.png" 
                  alt="Gabby Tech" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-white mb-1">AI + Blockchain Integration</h3>
                <p className="text-white/60">Bringing technology together for the future</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden border-2 border-white/10 shadow-xl hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/d3e041d0-1c5a-48b2-a093-af339a1cc8b0.png" 
                  alt="Gabby AI Character" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-white mb-1">Your AI Assistant</h3>
                <p className="text-white/60">Helping you navigate the crypto world</p>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-10 text-center">
            <Button variant="primary">
              Learn More About Gabby
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GabbyGallery;
