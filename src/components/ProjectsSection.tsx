import { useMemo, useState, useEffect } from 'react';
import { ExternalLink, Sparkles, X } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Category = 'All' | 'Web Development' | 'AI Projects' | 'Full Stack';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  demo?: string;
  github?: string;
  categories: Category[];
}

const projects: Project[] = [
  {
    title: 'SmartFill Browser Extension',
    description:
      'AI-powered form autofill extension that detects online forms, suggests field matches from local profiles, and fills fields only on user request. Profile data is stored encrypted in the browser and sensitive fields are blocked from autofill by default.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    tech: ['TypeScript', 'React', 'Vite', 'Manifest V3', 'Web Crypto', 'PDF.js'],
    features: [
      'Smart form field detection',
      'Local encrypted profile storage',
      'User-triggered autofill (privacy-first)',
      'Sensitive fields blocked by default',
    ],
    demo: 'https://microsoftedge.microsoft.com/addons/detail/aelekoeomibgicicopockedkjdcdlmoo',
    github: 'https://github.com/santhoshh005/Smart-Autofill-Assistant',
    categories: ['Web Development', 'Full Stack'],
  },
  {
    title: 'E-commerce Web Application',
    description:
      'A full-featured e-commerce platform offering a seamless shopping experience, interactive product catalog with search & filter, cart management, and a streamlined checkout flow.',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
    tech: ['React', 'Vite', 'Tailwind CSS', 'State Management', 'Web APIs'],
    features: [
      'Dynamic product catalog with filtering',
      'Real-time cart adding/removing and quantity updates',
      'Fully responsive e-commerce checkout flow',
      'Clean and modern design with smooth UI transitions',
    ],
    demo: 'https://e-commerce-web-application-sbmi.vercel.app/',
    github: 'https://github.com/santhoshh005/E-commerce-Web-Application',
    categories: ['Web Development', 'Full Stack'],
  },
  {
    title: 'Virtual Fitness Trainer (AI Fit Coach)',
    description:
      'An AI-first web app using computer vision for real-time exercise form tracking and posture analysis, featuring a motivational AI coach chatbot for custom workout plans.',
    image:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Firebase Auth', 'Firestore', 'Recharts'],
    features: [
      'Developed an AI-first web app using computer vision for real-time exercise form tracking and posture analysis.',
      'Built a motivational AI coach chatbot using GPT API to provide nutrition guidance and custom workout plans.',
      'Implemented session analytics dashboard with Firestore database persistence, charting user metrics over time.',
    ],
    demo: 'https://ai-fit-coach-hc8m.vercel.app/',
    github: 'https://github.com/santhoshh005/AI-Fit-Coach',
    categories: ['Web Development', 'Full Stack'],
  },
  {
    title: 'Blog Platform',
    description:
      'A content publishing platform where users can read, write, edit, and categorize blog posts, featuring a distraction-free editing layout and categorization tools.',
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'Markdown-style rich text post writing & editing',
      'Dynamic blog search and category sorting',
      'User authorship indicators and posting dashboard',
      'Responsive design for optimal readability',
    ],
    github: 'https://github.com/santhoshh005/Blog-platform-',
    categories: ['Web Development', 'Full Stack'],
  },
  {
    title: 'Task Management Platform',
    description:
      'A productivity app for organizing work, tracking milestones, and categorization using a Kanban board style layout, priority indicators, and persistent local storage.',
    image:
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1200&q=80',
    tech: ['React', 'Tailwind CSS', 'TypeScript', 'Context API', 'Local Storage'],
    features: [
      'Interactive Kanban board with status columns',
      'Task creation, prioritization, and editing tools',
      'Task details view and checklists support',
      'Data persistence using browser localStorage',
    ],
    github: 'https://github.com/santhoshh005/Task-Management-',
    categories: ['Web Development', 'Full Stack'],
  },

  {
    title: 'AI Flood Prediction Model',
    description:
      'An AI-based flood prediction model that analyzes rainfall, river level, and historical weather patterns to estimate flood risk and support early warning decisions.',
    image:
      'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1200&q=80',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'LightGBM', 'Jupyter Notebook'],
    features: [
      'Predicts flood risk from environmental data',
      'Uses historical weather trend analysis',
      'Supports early warning insights',
      'Designed for real-time decision support',
    ],
    github: 'https://github.com/ethical0101/AI-Based-Flood-Prediction-System',
    categories: ['AI Projects', 'Full Stack'],
  },
];

const filters: Category[] = ['All', 'Web Development', 'AI Projects', 'Full Stack'];

const stats = [
  { value: '6', label: 'Projects Completed' },
  { value: '2', label: 'Internships' },
  { value: 'Active', label: 'Status' },
  { value: '100%', label: 'Passion For Development' },
];

const ProjectsSection = () => {
  const [active, setActive] = useState<Category>('All');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  useEffect(() => {
    const handleFilterEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setSelectedTech(customEvent.detail);
        setActive('All'); // Reset category filter when specific tech clicked
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
      const techLower = selectedTech.toLowerCase();
      list = list.filter((project) => 
        project.tech.some(t => t.toLowerCase() === techLower || t.toLowerCase().includes(techLower)) ||
        project.title.toLowerCase().includes(techLower)
      );
    }
    return list;
  }, [active, selectedTech]);

  return (
    <section id="projects" className="py-20 sm:py-24 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              Portfolio
            </div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-primary mb-3 text-balance">Featured Projects</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              A selection of projects I've designed and built - focused on clean code,
              real-world utility, and great user experience.
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
                  setSelectedTech(null); // Clear tech filter on category switch
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

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.length === 0 ? (
              <div className="col-span-full rounded-2xl border border-border/60 bg-card/60 p-8 text-center text-muted-foreground">
                No projects match the selected filter.
              </div>
            ) : (
              filtered.map((project, index) => (
              <Card
                key={project.title}
                className="group h-full overflow-hidden border-border/60 bg-card/70 backdrop-blur-sm shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary/40">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-full w-full object-contain p-5 sm:p-6 transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent"></div>
                </div>
                <CardContent className="flex flex-1 flex-col p-6 space-y-4">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                  <div>
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

                  <div>
                    <p className="text-xs font-semibold uppercase text-primary/70 mb-2">
                      Key Features
                    </p>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1" aria-hidden="true">-</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {(project.demo || project.github) && (
                    <div className="flex flex-col sm:flex-row gap-2 pt-2">
                      {project.demo && (
                        <Button asChild size="sm" className="flex-1 bg-accent hover:bg-accent/90">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          {project.demo.includes('microsoftedge') ? 'Edge Add-ons' : 'Live Demo'}
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button asChild size="sm" variant="outline" className="flex-1">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            GitHub
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
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
