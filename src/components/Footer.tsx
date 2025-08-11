import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Reveal direction="up" y={16}>
          <div className="mb-6 md:mb-0">
            <p className="text-muted-foreground flex items-center gap-2">
              Designed with <Heart className="w-4 h-4 text-coral" fill="currentColor" /> by Rishabharaj Sharma
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>
          </Reveal>

          <Reveal direction="up" y={16} delay={80}>
          <div className="flex gap-6">
            <a 
              href="https://github.com/rishabharaj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-coral transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rishabharaj-sharma-57a7a8256" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-coral transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:rishabharaj4you@gmail.com"
              className="text-muted-foreground hover:text-coral transition-colors duration-300"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;