
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-display font-bold text-gradient">$GABBY</span>
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-8 mb-6 md:mb-0">
            <Link to="/#about" className="text-sm text-white/70 hover:text-white">About</Link>
            <Link to="/#features" className="text-sm text-white/70 hover:text-white">Features</Link>
            <Link to="/#faq" className="text-sm text-white/70 hover:text-white">FAQ</Link>
            <Link to="/#community" className="text-sm text-white/70 hover:text-white">Community</Link>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gabby-purple/20 flex items-center justify-center hover:bg-gabby-purple/40 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-white" />
          </button>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} $GABBY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
