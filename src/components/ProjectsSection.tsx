import { useState } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Category = 'All' | 'Web Development' | 'Mobile Apps' | 'AI Projects' | 'Full Stack';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: { name: string; pct: string }[];
  features: string[];
  github?: string;
  demo?: string;
  categories: Category[];
}

const projects: Project[] = [
  {
    title: 'Smart Autofill Assistant',
    description:
      'A privacy-first Chromium browser extension that detects online forms, suggests field matches from local profiles, and fills fields only on user request. Profile data is stored encrypted in the browser and sensitive fields are blocked from autofill by default.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    tech: [
      { name: 'TypeScript', pct: '89.2%' },
      { name: 'JavaScript', pct: '6.0%' },
      { name: 'CSS', pct: '4.6%' },
      { name: 'HTML', pct: '0.2%' },
    ],
    features: [
      'Smart form field detection',
      'Local encrypted profile storage',
      'User-triggered autofill (privacy-first)',
      'Sensitive fields blocked by default',
    ],
    github: 'https://github.com',
    demo: 'https://microsoftedge.microsoft.com/addons/detail/aelekoeomibgicicopockedkjdcdlmoo',
    categories: ['Web Development', 'Full Stack'],
  },
];

const filters: Category[] = ['All', 'Web Development', 'Mobile Apps', 'AI Projects', 'Full Stack'];

const stats = [
  { value: '5+', label: 'Projects Completed' },
  { value: '2+', label: 'Internships' },
  { value: '1+', label: 'Years Experience' },
  { value: '100%', label: 'Passion For Development' },
];

const ProjectsSection = () => {
  const [active, setActive] = useState<Category>('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* decorative glow */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Featured Projects</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              A selection of projects I've designed and built — focused on clean code,
              real-world utility, and great user experience.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-in">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300',
                  active === f
                    ? 'bg-accent text-accent-foreground border-accent shadow-glow scale-105'
                    : 'bg-card/50 text-muted-foreground border-border hover:border-accent/60 hover:text-accent'
                )}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filtered.map((p, i) => (
              <Card
                key={p.title}
                className="group overflow-hidden border-border/60 bg-card/70 backdrop-blur-sm shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent"></div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary/70 mb-2">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <Badge key={t.name} variant="secondary" className="text-xs font-normal">
                          {t.name} <span className="ml-1 text-muted-foreground">{t.pct}</span>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary/70 mb-2">
                      Key Features
                    </p>
                    <ul className="space-y-1">
                      {p.features.map((f) => (
                        <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">▹</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2 pt-2">
                    {p.github && (
                      <Button asChild variant="outline" size="sm" className="flex-1">
                        <a href={p.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {p.demo && (
                      <Button asChild size="sm" className="flex-1 bg-accent hover:bg-accent/90">
                        <a href={p.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-10">
              No projects in this category yet — more coming soon.
            </p>
          )}

          {/* Stats Section */}
          <div className="mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <Card
                  key={s.label}
                  className="text-center bg-gradient-to-br from-card to-secondary/40 border-border/60 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                      {s.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider">
                      {s.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
