
import { Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 md:p-12">
          <div className="text-center">
            <h2 className="heading-md text-white mb-2">Need Help? Contact Us</h2>
            <div className="flex items-center justify-center text-white/70">
              <Mail className="h-5 w-5 mr-2" />
              <a href="mailto:support@realityspiral.com" className="hover:text-white transition-colors">
                support@realityspiral.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
