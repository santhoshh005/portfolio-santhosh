import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phone = '+91 7569532243';

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10 py-5 sm:py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-5">
          <div className="space-y-1">
            <p className="text-base sm:text-lg font-semibold tracking-tight">Sai Santhosh</p>
            <p className="text-xs sm:text-sm text-primary-foreground/75 max-w-xl">
              Software developer focused on clean, practical, and scalable software solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-primary-foreground/80">
            <a href="mailto:saisanthosh05012006@gmail.com" className="hover:text-primary-foreground transition-colors">
              Email
            </a>
            <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-primary-foreground transition-colors">
              {phone}
            </a>
            <a href="https://www.linkedin.com/in/sai-santhosh-07603828b" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/santhoshh005" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
              GitHub
            </a>
            <a href="https://www.instagram.com/santhoshh__05?igsh=ZmkxcWV3NGhlb2V3" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-primary-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-primary-foreground/75">
          <div className="flex items-center gap-1.5">
            <span>&copy; {currentYear} Sai Santhosh</span>
            <Heart className="w-3 h-3 text-red-400 fill-current" aria-hidden="true" />
            <span>Designed for performance and clarity</span>
          </div>
          <p>Open to software engineering internships</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
