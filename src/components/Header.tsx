import { useState, useEffect } from 'react';
import Reveal from '@/components/ui/Reveal';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 h-16 flex items-center ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 w-full">
        <div className="flex items-center justify-between">
          <Reveal direction="down" y={16}>
            <div className="text-xl font-bold text-foreground">
              Rishabharaj Sharma
            </div>
          </Reveal>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, idx) => (
              <Reveal key={item.name} direction="down" y={12} delay={idx * 40}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-coral transition-colors duration-300"
                >
                  {item.name}
                </button>
              </Reveal>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border supports-[backdrop-filter]:bg-background/75">
            <div className="container mx-auto px-6 py-4 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground hover:text-coral transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;