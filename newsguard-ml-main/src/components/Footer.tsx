
import { Link } from 'react-router-dom';
import { Github, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-12 px-4 md:px-6 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link 
            to="/" 
            className="text-foreground font-medium text-xl tracking-tight flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white font-bold">FD</span>
            <span>FakeDetector</span>
          </Link>
          <p className="mt-4 text-muted-foreground max-w-md">
            An advanced machine learning system designed to detect and classify
            fake news with high accuracy by analyzing textual content and metadata.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-4">Navigation</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/detector" className="hover:text-foreground transition-colors">
                Detector
              </Link>
            </li>
            <li>
              <Link to="/api" className="hover:text-foreground transition-colors">
                API
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium mb-4">Legal</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border text-sm text-muted-foreground">
        <p>© {currentYear} FakeDetector. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
