import { useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ?? 'saisanthosh05012006@gmail.com';

const HeroSection = () => {
  useEffect(() => {
    const canvas = document.getElementById('hero-particles') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      baseVx: number;
      baseVy: number;
      life: number;
      decay: number;
      isBurst: boolean;

      constructor(clickX?: number, clickY?: number, isBurst = false) {
        this.isBurst = isBurst;
        
        if (isBurst && clickX !== undefined && clickY !== undefined) {
          this.x = clickX;
          this.y = clickY;
          // Spawn moving outward in all directions
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 3 + 1.8;
          this.vx = Math.cos(angle) * speed;
          this.vy = Math.sin(angle) * speed;
          this.baseVx = Math.cos(angle) * 0.3;
          this.baseVy = Math.sin(angle) * 0.3;
          this.radius = Math.random() * 1.5 + 1.0;
          this.life = 1.0;
          this.decay = Math.random() * 0.015 + 0.01; // fades out in ~1 to 2 seconds
          this.color = Math.random() > 0.4 ? 'rgba(56, 189, 248, 1)' : 'rgba(255, 255, 255, 0.95)';
        } else {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.vx = (Math.random() - 0.5) * 0.5;
          this.vy = (Math.random() - 0.5) * 0.5;
          this.baseVx = this.vx;
          this.baseVy = this.vy;
          this.radius = Math.random() * 2 + 1.2;
          this.life = 1.0;
          this.decay = 0;
          this.color = Math.random() > 0.4 ? 'rgba(56, 189, 248, 0.8)' : 'rgba(255, 255, 255, 0.65)';
        }
      }

      update(mouse: { x: number; y: number }) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.isBurst) {
          this.life -= this.decay;
        }

        // Boundaries with bounce behavior
        if (this.x < 0) {
          this.x = 0;
          this.vx = -this.vx;
        } else if (this.x > width) {
          this.x = width;
          this.vx = -this.vx;
        }
        if (this.y < 0) {
          this.y = 0;
          this.vy = -this.vy;
        } else if (this.y > height) {
          this.y = height;
          this.vy = -this.vy;
        }

        // Smooth mouse push interaction (only apply to baseline particles)
        if (!this.isBurst) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 160;

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            const angle = Math.atan2(dy, dx);
            const targetVx = this.baseVx + Math.cos(angle) * force * 2.2;
            const targetVy = this.baseVy + Math.sin(angle) * force * 2.2;
            this.vx += (targetVx - this.vx) * 0.15;
            this.vy += (targetVy - this.vy) * 0.15;
          } else {
            this.vx += (this.baseVx - this.vx) * 0.08;
            this.vy += (this.baseVy - this.vy) * 0.08;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        if (this.isBurst) {
          // Adjust opacity for fade out
          const match = this.color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([0-9.]+)\)/);
          if (match) {
            const [, r, g, b, a] = match;
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${parseFloat(a) * this.life})`;
          } else {
            ctx.fillStyle = this.color;
          }
          ctx.shadowBlur = 4 * this.life;
        } else {
          ctx.fillStyle = this.color;
          ctx.shadowBlur = 3;
        }
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Dynamic density scaling based on window dimensions
    const getParticleCount = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      return Math.min(130, Math.max(30, Math.floor((w * h) / 15000)));
    };

    let particles: Particle[] = Array.from({ length: getParticleCount() }, () => new Particle());
    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleMouseClick = (e: MouseEvent) => {
      if (!isVisible) return;
      const clickX = e.clientX;
      const clickY = e.clientY;

      // 1. Spawn 14 tiny burst particles that scatter outwards
      const burstCount = 14;
      for (let i = 0; i < burstCount; i++) {
        particles.push(new Particle(clickX, clickY, true));
      }

      // 2. Push existing (non-burst) particles away from the click point
      const shockwaveRadius = 220;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.isBurst) continue;

        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < shockwaveRadius) {
          const force = (shockwaveRadius - dist) / shockwaveRadius;
          const angle = Math.atan2(dy, dx);
          // Apply a sudden impulse to velocity
          p.vx += Math.cos(angle) * force * 6.5;
          p.vy += Math.sin(angle) * force * 6.5;
        }
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particles = Array.from({ length: getParticleCount() }, () => new Particle());
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleMouseClick);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Filter out dead particles
      particles = particles.filter(p => !p.isBurst || p.life > 0);

      // 1. Draw web links between particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouse);
        particles[i].draw();

        if (particles[i].isBurst) continue;

        for (let j = i + 1; j < particles.length; j++) {
          if (particles[j].isBurst) continue;

          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.2 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // 2. Draw connections to mouse
      if (mouse.x > -1000 && mouse.y > -1000) {
        for (let i = 0; i < particles.length; i++) {
          if (particles[i].isBurst) continue;

          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(particles[i].x, particles[i].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.35 * (1 - dist / 160)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      if (isVisible && !prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // Only run the animation loop while the hero is on screen, and draw a
    // single static frame for visitors who prefer reduced motion.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let isVisible = true;
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      const wasVisible = isVisible;
      isVisible = entry.isIntersecting;
      if (isVisible && !wasVisible && !prefersReducedMotion) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(animate);
      }
    });
    visibilityObserver.observe(canvas);

    animate();

    return () => {
      visibilityObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleMouseClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-[100svh] flex items-center relative overflow-hidden pt-24 sm:pt-28">
      {/* Animated gradient background with canvas particles */}
      <div className="absolute inset-0 gradient-hero">
        <canvas id="hero-particles" className="absolute inset-0 w-full h-full opacity-85 mix-blend-screen" />
        <div className="absolute inset-0 bg-black/35"></div>
      </div>

      {/* Subtle animated glow orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-float opacity-60"></div>
      <div
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-float opacity-60"
        style={{ animationDelay: '3s' }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Circular Profile Avatar */}
          <div className="relative mx-auto mb-6 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-accent via-teal-400 to-blue-400 shadow-glow animate-fade-in group">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-background/80 bg-card">
              <img
                src="/profile.jpg"
                alt="Sai Santhosh"
                width={160}
                height={160}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="inline-flex items-center justify-center text-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-teal-300 text-[10.5px] sm:text-xs md:text-sm font-semibold tracking-normal sm:tracking-wider uppercase mb-5 animate-fade-in backdrop-blur-md shadow-sm max-w-full">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" aria-hidden="true" />
            FULL-STACK DEVELOPER · APPLIED AI · VIT VELLORE
          </div>
          <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-bold mb-5 animate-fade-in leading-tight text-balance">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-accent to-blue-300 bg-clip-text text-transparent">
              Santhosh
            </span>
          </h1>

          <p className="text-base md:text-lg mb-5 text-gray-200 max-w-2xl mx-auto animate-fade-in animate-fade-in-delay-1 leading-relaxed">
            I build full stack web apps, browser extensions and applied AI tools with React, TypeScript and Python. My Smart Autofill extension is live on Microsoft Edge Add-ons.
          </p>

          {/* Availability Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium mb-8 animate-fade-in animate-fade-in-delay-1 backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            <span>Open to Software Engineering Internships</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mb-10 animate-fade-in animate-fade-in-delay-2">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 min-w-[180px]"
            >
              <Code2 className="mr-2 w-4 h-4" />
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto border-white/50 text-white bg-white/5 hover:bg-white/15 hover:border-white/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 min-w-[180px]"
            >
              <Mail className="mr-2 w-4 h-4" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-5 sm:gap-6 mb-8 animate-fade-in animate-fade-in-delay-2">
            <a
              href="https://github.com/santhoshh005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub"
              className="text-white/70 hover:text-accent transition-transform duration-300 hover:scale-110 focus-visible:scale-110"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/sai-santhosh-07603828b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              className="text-white/70 hover:text-accent transition-transform duration-300 hover:scale-110 focus-visible:scale-110"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label="Send Email"
              title="Email"
              className="text-white/70 hover:text-accent transition-transform duration-300 hover:scale-110 focus-visible:scale-110"
            >
              <Mail size={22} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to About"
            className="mx-auto mb-6 flex text-white/70 hover:text-accent transition-smooth animate-bounce motion-reduce:animate-none"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
