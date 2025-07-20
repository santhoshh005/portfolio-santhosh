import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  const navItems = [{
    label: 'Home',
    section: 'hero'
  }, {
    label: 'About',
    section: 'about'
  }, {
    label: 'Contact',
    section: 'contact'
  }];
  return <nav className={`fixed top-0 w-full z-50 transition-smooth ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-card border-b border-border' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Santhosh</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => <button key={item.section} onClick={() => scrollToSection(item.section)} className="text-foreground hover:text-accent transition-smooth font-medium">
                {item.label}
              </button>)}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            {navItems.map(item => <button key={item.section} onClick={() => scrollToSection(item.section)} className="block w-full text-left text-foreground hover:text-accent transition-smooth font-medium py-2">
                {item.label}
              </button>)}
          </div>}
      </div>
    </nav>;
};
export default Navigation;