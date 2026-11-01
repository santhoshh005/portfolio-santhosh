import { useMemo, useState, useEffect } from 'react';
import { ExternalLink, Sparkles, X } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Category = 'All' | 'AI Projects' | 'Web Development' | 'Full Stack';

interface Project {
  title: string;
  badge?: string;
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
    title: 'RoundsAI — Oncology Ward Copilot',
    badge: '🏆 Health-a-thon 2026',
    description:
      'Clinical intelligence copilot built with BMCRI oncologists. Transcribes bedside voice dictation on-device with zero cloud audio leakage and automates CTCAE v5.0 toxicity grading.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tech: ['Next.js 15', 'FastAPI', 'Python', 'Gemini 2.5 Flash', 'Whisper AI', 'Supabase', 'TypeScript'],
    features: [
      'On-device Whisper STT (base-int8) with zero cloud audio leakage and $0 API cost.',
      'Multimodal Gemini Vision OCR extracting bedside lab printouts and CBC reports.',
      'Deterministic phonetic normalizer handling 120+ chemotherapy regimens and abbreviations.',
    ],
    demo: 'https://rounds-ai-umber.vercel.app/',
    github: 'https://github.com/santhoshh005/Rounds_AI',
    categories: ['AI Projects', 'Full Stack', 'Web Development'],
  },
  {
    title: 'PRPilot — Autonomous AI GitHub App',
    badge: 'Production Developer Tool',
    description:
      'Production-ready GitHub App that auto-analyzes pull requests on open/sync, performs unified diff chunking, flags security flaws, and posts structured inline reviews with risk scores.',
    image:
      'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'Gemini 3.8 Flash', 'Octokit', 'Vitest', 'Playwright'],
    features: [
      'Cryptographic HMAC-SHA256 GitHub webhook verification with delivery deduplication.',
      'Hybrid processing with Vercel waitUntil and scheduled GitHub Actions cron fallback.',
      'Robust security model with Supabase Row-Level Security and atomic rate limiters.',
    ],
    github: 'https://github.com/santhoshh005/PR_Pilot',
    categories: ['AI Projects', 'Full Stack', 'Web Development'],
  },
  {
    title: 'Smart Autofill Assistant — Browser Extension',
    badge: '🚀 Edge Store Published',
    description:
      'Privacy-first Chromium browser extension that eliminates repetitive job application forms by detecting fields dynamically and autofilling on demand from a locally encrypted vault.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    tech: ['TypeScript', 'Manifest V3', 'Web Crypto API', 'React', 'Vite', 'PDF.js'],
    features: [
      'Local AES-GCM encrypted vault powered by the browser native Web Crypto API.',
      'Zero server data egress with strict Content Security Policy and no remote code execution.',
      'Built-in security filter blocking passwords, OTPs, identity numbers, and payment inputs.',
    ],
    demo: 'https://microsoftedge.microsoft.com/addons/detail/aelekoeomibgicicopockedkjdcdlmoo',
    github: 'https://github.com/santhoshh005/Smart-Autofill-Assistant',
    categories: ['Web Development', 'Full Stack'],
  },
  {
    title: 'SkyGuard AI — Weather Anomaly Detection',
    badge: '🏆 SIH 2026 · MoES / IMD',
    description:
      'Automated anomaly detection, telemetry correction, and sensor health platform engineered for the Indian Meteorological Department (IMD) Automatic Weather Stations.',
    image:
      'https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?auto=format&fit=crop&w=1200&q=80',
    tech: ['FastAPI', 'Python', 'React 18', 'Scikit-Learn', 'Isolation Forest', 'Autoencoder', 'Docker'],
    features: [
      '3-Channel ML Fusion model (QC + Isolation Forest + Autoencoder) with 94.94% F1-score.',
      'TreeSHAP explainability translating high-dimensional sensor deviations into plain English.',
      'Low-latency real-time WebSocket push stream (<2s) with fault simulation test harness.',
    ],
    github: 'https://github.com/santhoshh005/Sky_Guard_AI',
    categories: ['AI Projects', 'Full Stack'],
  },
  {
    title: 'PayPilot AI — Conversational Commerce',
    badge: 'Agentic AI · Payments',
    description:
      'Autonomous conversational commerce platform where shoppers find products through natural language, compare technical specs side-by-side, and complete checkout through Razorpay.',
    image:
      'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80',
    tech: ['React 18', 'Express', 'TypeScript', 'Prisma ORM', 'Supabase', 'Gemini 2.5 Flash', 'Razorpay'],
    features: [
      'Gemini function calling powering natural language catalog search and comparisons.',
      'Razorpay Standard Checkout with HMAC-SHA256 signature verification and webhooks.',
      'Comprehensive automated test suite with 176/176 tests passing across 13 suites.',
    ],
    demo: 'https://paypilot-ai-two.vercel.app',
    github: 'https://github.com/santhoshh005/PayPilot_AI',
    categories: ['AI Projects', 'Full Stack', 'Web Development'],
  },
  {
    title: 'Santhosh Storefront — Full-Stack E-Commerce',
    badge: 'Full-Stack Web App',
    description:
      'Modern full-stack online shopping platform featuring dynamic product filtering, persistent shopping cart management, customer order tracking, and a role-based admin dashboard.',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
    tech: ['Next.js', 'Tailwind CSS', 'Prisma ORM', 'Supabase PostgreSQL', 'JWT Auth'],
    features: [
      'Modular Next.js API routes with Prisma ORM querying Supabase PostgreSQL database.',
      'Multi-step checkout flow with customer order status monitoring and admin fulfillment.',
      'Clean responsive UI with dynamic catalog filters and persistent shopping cart.',
    ],
    demo: 'https://e-commerce-web-application-sbmi.vercel.app/',
    github: 'https://github.com/santhoshh005/E-commerce-Web-Application',
    categories: ['Web Development', 'Full Stack'],
  },
];

const filters: Category[] = ['All', 'AI Projects', 'Web Development', 'Full Stack'];

const stats = [
  { value: '6', label: 'Featured Projects' },
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
      const searchTerms = selectedTech.toLowerCase().split(/[\/,\s()]+/).filter((term) => term.length > 2);
      list = list.filter((project) => 
        project.tech.some((t) => {
          const tLower = t.toLowerCase();
          return (
            tLower.includes(selectedTech.toLowerCase()) ||
            selectedTech.toLowerCase().includes(tLower) ||
            searchTerms.some((term) => tLower.includes(term))
          );
        }) ||
        project.title.toLowerCase().includes(selectedTech.toLowerCase())
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
              A curated selection of production applications, agentic AI tools, and full-stack solutions built with modern technology.
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
