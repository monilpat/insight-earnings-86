
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Download } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  const scrollToCtaSection = () => {
    const ctaSection = document.getElementById('join-launch');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

        {/* Desktop Navigation with Tabs */}
        <div className="hidden md:flex items-center">
          <Tabs defaultValue={location.pathname === "/comparison" ? "comparison" : "home"} className="w-full">
            <TabsList className="bg-transparent h-auto space-x-4">
              <Link to="/comparison">
                <TabsTrigger 
                  value="comparison" 
                  className="data-[state=active]:bg-gabby-background/40 data-[state=active]:text-white text-white/80"
                >
                  Research
                </TabsTrigger>
              </Link>
              <a href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer">
                <TabsTrigger 
                  value="whitepaper" 
                  className="data-[state=active]:bg-gabby-background/40 data-[state=active]:text-white text-white/80"
                >
                  White Paper
                </TabsTrigger>
              </a>
              <Button variant="secondary" size="sm" onClick={scrollToCtaSection} className="ml-2 mr-2">
                Buy $GABBY
              </Button>
              <a 
                href="https://x.com/gabby_spiral" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="sm" icon={true}>
                  Follow on X
                </Button>
              </a>
            </TabsList>
          </Tabs>
        </div>

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
              Research
            </Link>
            <a 
              href="/whitepaper.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="block py-2 text-lg font-medium text-white/80 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              White Paper
            </a>
            <button 
              onClick={() => {
                scrollToCtaSection();
                setIsMenuOpen(false);
              }}
              className="block py-2 text-lg font-medium text-white/80 hover:text-white w-full text-left"
            >
              Buy $GABBY
            </button>
            <a 
              href="https://x.com/gabby_spiral" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block py-2 text-lg font-medium text-white/80 hover:text-white"
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
