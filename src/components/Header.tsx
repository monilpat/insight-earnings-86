
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-gabby-background/80 backdrop-blur-lg shadow-lg' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-display font-bold text-gradient">GABBY</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/comparison" className="text-sm font-medium text-white/80 hover:text-white transition-colors">See how Gabby Compares</Link>
          <a 
            href="https://x.com/gabby_spiral" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary text-sm"
          >
            <span className="flex items-center">
              Follow on X
              <ChevronRight className="ml-1 h-4 w-4" />
            </span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gabby-background/95 backdrop-blur-lg border-t border-white/10 animate-fade-in-up">
          <div className="px-4 py-5 space-y-4">
            <Link 
              to="/comparison" 
              className="block py-2 text-lg font-medium text-white/80 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              See how Gabby Compares
            </Link>
            <a 
              href="https://x.com/gabby_spiral" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block py-2 text-lg font-medium text-gradient"
            >
              Follow on X <ChevronRight className="inline ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
