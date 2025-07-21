import { ArrowDown, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <img src={heroImage} alt="Professional workspace" className="w-full h-full object-cover mix-blend-overlay opacity-30" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-white/20 rounded-lg animate-float opacity-50"></div>
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{
      animationDelay: '2s'
    }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-accent/30 rotate-45 animate-float" style={{
      animationDelay: '4s'
    }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent"> 👋 Santhosh</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in animate-fade-in-delay-1">
            💻 Software Developer & 🎓 Computer Science Student
          </p>
          
          <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto animate-fade-in animate-fade-in-delay-2">
            🚀 Passionate about creating innovative solutions and building scalable applications. 
            Currently pursuing my CSE degree while working on exciting projects that make a difference. ✨
          </p>

          <div className="flex justify-center mb-12 animate-fade-in animate-fade-in-delay-3">
            <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')} className="border-white/30 text-white hover:bg-white/10 transition-smooth">
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in animate-fade-in-delay-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-smooth transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sai-santhosh-07603828b" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-smooth transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-smooth transform hover:scale-110">
              <Instagram size={24} />
            </a>
            <a href="mailto:saisanthosh05012006@gmail.com" className="text-white/70 hover:text-accent transition-smooth transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll indicator */}
          <button onClick={() => scrollToSection('about')} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-accent transition-smooth animate-bounce">
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>;
};
export default HeroSection;