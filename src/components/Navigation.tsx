import { useState, useEffect } from 'react';
import { Menu, MoonStar, SunMedium, X, FileText } from 'lucide-react';
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
      { rootMargin: '-25% 0px -45% 0px', threshold: 0.1 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 relative">
        <div className="flex h-full items-center justify-between gap-4">
          <button
            onClick={() => scrollToSection('hero')}
            aria-label="Go to home section"
            className={cn(
              'whitespace-nowrap text-xl sm:text-2xl font-bold transition-colors duration-300',
              isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent-foreground'
            )}
          >
            Sai Santhosh
          </button>

          {/* Desktop Navigation - Centered Menu Links */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => {
              const isActive = activeSection === item.section;
              return (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'inline-flex h-9 items-center px-3 rounded-lg text-sm font-medium transition-all duration-300',
                    isActive
                      ? isScrolled
                        ? 'text-accent bg-accent/10 font-semibold'
                        : 'text-white bg-white/15 font-semibold'
                      : isScrolled
                        ? 'text-foreground hover:text-accent hover:bg-accent/5'
                        : 'text-white/85 hover:text-white hover:bg-white/10'
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Resume button centered in the middle between Contact and the dark/light mode icon */}
          <div className="hidden lg:flex items-center justify-center absolute left-[calc(50%+305px)] right-14 sm:right-16 h-full pointer-events-none">
            <Button
              asChild
              size="sm"
              className={cn(
                'pointer-events-auto h-9 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm',
                isScrolled
                  ? 'bg-accent hover:bg-accent/90 text-white shadow-glow'
                  : 'bg-accent hover:bg-accent/90 text-white shadow-glow'
              )}
            >
              <a href="/Sai_Santhosh_Gaddam_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="w-3.5 h-3.5 mr-1.5" />
                Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className={cn(
                'inline-flex h-10 w-10 transition-colors duration-300',
                isScrolled
                  ? 'text-foreground hover:bg-accent/10 hover:text-accent'
                  : 'text-white hover:bg-white/10 hover:text-white'
              )}
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
              className={cn(
                'lg:hidden h-10 w-10 transition-colors duration-300',
                isScrolled
                  ? 'text-foreground hover:bg-accent/10 hover:text-accent'
                  : 'text-white hover:bg-white/10 hover:text-white'
              )}
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
            className="lg:hidden mt-3 rounded-2xl border border-border/60 bg-background/95 p-3 shadow-elegant backdrop-blur-xl animate-fade-in space-y-1"
          >
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                aria-current={activeSection === item.section ? 'page' : undefined}
                className={cn(
                  'block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300',
                  activeSection === item.section
                    ? 'text-accent bg-accent/10 font-semibold'
                    : 'text-foreground hover:text-accent hover:bg-accent/5'
                )}
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Resume view button */}
            <div className="pt-2 border-t border-border/50">
              <Button
                asChild
                className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl h-10 text-sm font-semibold shadow-glow"
              >
                <a href="/Sai_Santhosh_Gaddam_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2" />
                  View Resume
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
