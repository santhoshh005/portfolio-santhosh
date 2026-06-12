import { useState, useEffect } from 'react';
import { Menu, MoonStar, SunMedium, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const navItems = [
  { label: 'Home', section: 'hero' },
  { label: 'About', section: 'about' },
  { label: 'Experience', section: 'resume' },
  { label: 'Certifications', section: 'certifications' },
  { label: 'Skills', section: 'skills' },
  { label: 'Projects', section: 'projects' },
  { label: 'Contact', section: 'contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0.1 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 72;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  const currentTheme = resolvedTheme ?? theme;
  const isDarkMode = currentTheme === 'dark';

  return (
    <nav
      aria-label="Primary navigation"
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/85 backdrop-blur-lg shadow-card border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-4">
          <button
            onClick={() => scrollToSection('hero')}
            aria-label="Go to home section"
            className="justify-self-start whitespace-nowrap text-xl sm:text-2xl font-bold text-primary hover:text-accent transition-colors duration-300"
          >
            Sai Santhosh
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-1 justify-self-center">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                aria-current={activeSection === item.section ? 'page' : undefined}
                className={cn(
                  'inline-flex h-10 items-center px-4 rounded-lg text-sm font-medium transition-all duration-300',
                  activeSection === item.section
                    ? 'text-accent bg-accent/10'
                    : 'text-foreground hover:text-accent hover:bg-accent/5'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-end gap-2 justify-self-end">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="hidden md:inline-flex h-10 w-10 hover:bg-accent/10"
              onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
              aria-label={mounted ? `Switch to ${isDarkMode ? 'light' : 'dark'} mode` : 'Toggle theme'}
            >
              {mounted ? (isDarkMode ? <SunMedium /> : <MoonStar />) : <MoonStar />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="md:hidden h-10 w-10 hover:bg-accent/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden mt-3 rounded-2xl border border-border/60 bg-background/95 p-2 shadow-elegant backdrop-blur-xl animate-fade-in"
          >
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                aria-current={activeSection === item.section ? 'page' : undefined}
                className={cn(
                  'block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300',
                  activeSection === item.section
                    ? 'text-accent bg-accent/10'
                    : 'text-foreground hover:text-accent hover:bg-accent/5'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
