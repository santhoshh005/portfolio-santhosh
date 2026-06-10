import { ArrowDown, Github, Linkedin, Mail, Instagram, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ?? 'saisanthosh05012006@gmail.com';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-[100svh] flex items-center relative overflow-hidden pt-24 sm:pt-28">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Subtle animated glow orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-float opacity-60"></div>
      <div
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-float opacity-60"
        style={{ animationDelay: '3s' }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-accent-foreground/80 mb-4 animate-fade-in">
            Welcome to my portfolio
          </p>
          <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-bold mb-5 animate-fade-in leading-tight text-balance">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-accent to-blue-300 bg-clip-text text-transparent">
              Santhosh
            </span>
          </h1>

          <p className="text-lg md:text-2xl mb-5 text-gray-200 animate-fade-in animate-fade-in-delay-1 font-light">
            Software Developer &amp; Computer Science Student
          </p>

          <p className="text-base md:text-lg mb-10 text-gray-300 max-w-2xl mx-auto animate-fade-in animate-fade-in-delay-2 leading-relaxed">
            Passionate about crafting clean, scalable, and meaningful software.
            I build privacy-first tools, full-stack apps, and developer-focused experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mb-10 animate-fade-in animate-fade-in-delay-3">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 min-w-[180px]"
            >
              <a href={`mailto:${CONTACT_EMAIL}?subject=Resume%20request`}>
                <FileText className="mr-2" />
                Request Resume
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto border-white/50 text-white bg-white/5 hover:bg-white/15 hover:border-white/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 min-w-[180px]"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mb-12 animate-fade-in animate-fade-in-delay-3">
            <a
              href="https://github.com/santhoshh005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/70 hover:text-accent transition-transform duration-300 hover:scale-110 focus-visible:scale-110"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/sai-santhosh-07603828b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/70 hover:text-accent transition-transform duration-300 hover:scale-110 focus-visible:scale-110"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/70 hover:text-accent transition-transform duration-300 hover:scale-110 focus-visible:scale-110"
            >
              <Instagram size={22} />
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label="Email"
              className="text-white/70 hover:text-accent transition-transform duration-300 hover:scale-110 focus-visible:scale-110"
            >
              <Mail size={22} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to About"
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-accent transition-smooth animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
