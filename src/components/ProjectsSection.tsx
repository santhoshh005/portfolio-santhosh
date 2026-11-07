import { useMemo, useState, useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { projects, projectMatchesTech, type Category } from '@/data/projects';

const filters: Category[] = ['All', 'AI Projects', 'Web Development', 'Full Stack'];

const stats = [
  { value: '6', label: 'Featured Projects' },
  { value: '1', label: 'Published Patent' },
  { value: '8.91', label: 'CGPA at VIT' },
  { value: '68', label: 'Extension Users' },
];

const ProjectsSection = () => {
  const [active, setActive] = useState<Category>('All');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  useEffect(() => {
    const handleFilterEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setSelectedTech(customEvent.detail);
        setActive('All');
      }
    };
    window.addEventListener('filter-projects-by-tech', handleFilterEvent);
    return () => window.removeEventListener('filter-projects-by-tech', handleFilterEvent);
  }, []);

  const filtered = useMemo(() => {
    let list = projects;
    if (active !== 'All') {
      list = list.filter((project) => project.categories.includes(active));
    }
    if (selectedTech) {
      list = list.filter((project) => projectMatchesTech(project, selectedTech));
    }
    return list;
  }, [active, selectedTech]);

  return (
    <section id="projects" className="py-14 sm:py-16 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-primary mb-3 text-balance">Featured Projects</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              A curated selection of patented, published and deployed work: security systems, AI tools and full-stack apps.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-6 animate-fade-in" role="tablist" aria-label="Project filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={active === filter}
                onClick={() => {
                  setActive(filter);
                  setSelectedTech(null);
                }}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300',
                  active === filter
                    ? 'bg-accent text-accent-foreground border-accent shadow-glow scale-105'
                    : 'bg-card/50 text-muted-foreground border-border hover:border-accent/60 hover:text-accent'
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          {selectedTech && (
            <div className="flex justify-center items-center gap-2 mb-10 animate-fade-in">
              <span className="text-sm text-muted-foreground">
                Showing projects matching <span className="font-semibold text-accent">{selectedTech}</span>
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 px-2 text-xs text-accent hover:text-accent/90 hover:bg-accent/10 border border-accent/20 rounded-lg flex items-center gap-1 cursor-pointer"
                onClick={() => setSelectedTech(null)}
              >
                <X className="w-3 h-3" />
                Clear
              </Button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
            {filtered.length === 0 ? (
              <div className="col-span-full rounded-2xl border border-border/60 bg-card/60 p-8 text-center text-muted-foreground">
                No projects match the selected filter.
              </div>
            ) : (
              filtered.map((project, index) => (
              <Card
                key={project.title}
                className="group h-full overflow-hidden border-border/60 bg-card/70 backdrop-blur-sm shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-in flex flex-col justify-between"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary/40 shrink-0">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent"></div>
                  {project.badge && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold shadow-md">
                      {project.badge}
                    </div>
                  )}
                </div>

                <CardContent className="flex flex-1 flex-col p-6 gap-4">
                  {/* Title with standardized min-height */}
                  <h3 className="text-lg sm:text-xl font-bold text-primary group-hover:text-accent transition-colors line-clamp-2 min-h-[3.25rem] flex items-center">
                    {project.title}
                  </h3>

                  {/* Description with standardized 2-3 lines height */}
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 min-h-[4.25rem]">
                    {project.description}
                  </p>

                  {/* Tech Stack with uniform min-height */}
                  <div className="min-h-[4.25rem] flex flex-col justify-start">
                    <p className="text-xs font-semibold uppercase text-primary/70 mb-2">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights with flex-1 to push footer evenly */}
                  <div className="flex-1 flex flex-col justify-start min-h-[6.5rem]">
                    <p className="text-xs font-semibold uppercase text-primary/70 mb-2">
                      Key Highlights
                    </p>
                    <ul className="space-y-1.5">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-xs text-muted-foreground flex items-start gap-2 leading-relaxed">
                          <span className="text-accent mt-0.5" aria-hidden="true">•</span>
                          <span className="line-clamp-2">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons row - pinned to the exact bottom */}
                  <div className="flex items-center gap-2 pt-4 mt-auto border-t border-border/40">
                    {project.demo && (
                      <Button asChild size="sm" className="flex-1 h-9 bg-accent hover:bg-accent/90 text-white min-w-0">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1.5 shrink-0" />
                          <span className="truncate">{project.demo.includes('microsoftedge') ? 'Edge Store' : 'Live Demo'}</span>
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button asChild size="sm" variant="outline" className="flex-1 h-9 min-w-0">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1.5 shrink-0" />
                          <span className="truncate">GitHub</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
              ))
            )}
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {stats.map((stat, index) => (
                <Card
                  key={stat.label}
                  className="text-center bg-gradient-to-br from-card to-secondary/40 border-border/60 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground font-medium uppercase">
                      {stat.label}
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
