
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronRight, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Track scroll position for transparent header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-6',
        isScrolled 
          ? 'py-3 glass-card shadow-sm'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-foreground font-medium text-xl tracking-tight flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white font-bold">FD</span>
          <span className="hidden sm:inline-block">FakeDetector</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link 
            to="/api" 
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            API
          </Link>
          <Button asChild>
            <Link to="/detector" className="flex items-center gap-1">
              Try Detector
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-40 animate-fade-in">
            <nav className="flex flex-col gap-4 p-6">
              <Link 
                to="/" 
                className="text-lg py-2 border-b border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-lg py-2 border-b border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/api" 
                className="text-lg py-2 border-b border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                API
              </Link>
              <Button 
                className="mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
                asChild
              >
                <Link to="/detector" className="flex items-center justify-center gap-1">
                  Try Detector
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
