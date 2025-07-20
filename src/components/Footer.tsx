import { Github, Linkedin, Mail, Heart } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    label: 'Home',
    href: '#hero'
  }, {
    label: 'About',
    href: '#about'
  }, {
    label: 'Skills',
    href: '#skills'
  }, {
    label: 'Projects',
    href: '#projects'
  }, {
    label: 'Contact',
    href: '#contact'
  }];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand & Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Santhosh</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Software Developer & CSE Student passionate about creating 
                innovative solutions and building meaningful digital experiences.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-smooth">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-smooth">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:your.email@example.com" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-smooth">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="space-y-2">
                {quickLinks.map((link, index) => <button key={index} onClick={() => scrollToSection(link.href)} className="block text-primary-foreground/80 hover:text-accent transition-smooth">
                    {link.label}
                  </button>)}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Let's Connect</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>saisanthosh05012006@gmail.com</p>
                <p>+91 7569532243</p>
                <p>Anantapur, Andhrapradesh </p>
              </div>
              <div className="pt-4">
                <p className="text-sm text-primary-foreground/60">
                  Available for freelance work and full-time opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <span>© {currentYear} Santhosh. Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>using React & TypeScript</span>
              </div>
              <div className="text-sm text-primary-foreground/60">
                Designed with passion, built with precision
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;