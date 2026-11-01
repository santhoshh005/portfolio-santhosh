import { Code2, Layout, Server, Wrench, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const skillCategories = [
  {
    icon: <Code2 className="w-5 h-5 text-accent" />,
    title: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C / C++', 'SQL', 'Bash'],
  },
  {
    icon: <Layout className="w-5 h-5 text-accent" />,
    title: 'Frontend & Web',
    skills: ['Next.js 16/15', 'React 19/18', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3', 'WebSockets', 'Context API'],
  },
  {
    icon: <Server className="w-5 h-5 text-accent" />,
    title: 'Backend & Cloud',
    skills: ['FastAPI', 'Node.js', 'Express', 'Supabase (PostgreSQL / RLS)', 'Prisma', 'Docker', 'SSE', 'REST APIs'],
  },
  {
    icon: <Brain className="w-5 h-5 text-accent" />,
    title: 'AI & Machine Learning',
    skills: ['Gemini API (Multimodal)', 'Whisper AI', 'Scikit-learn', 'Autoencoders', 'TreeSHAP', 'Pandas', 'NumPy'],
  },
  {
    icon: <Wrench className="w-5 h-5 text-accent" />,
    title: 'DevTools & Testing',
    skills: ['Git', 'GitHub Actions', 'Octokit', 'Web Crypto API', 'Vitest', 'Playwright', 'Pytest', 'Manifest V3', 'Linux'],
  },
];

const SkillsSection = () => {
  const handleSkillClick = (skill: string) => {
    // Dispatch custom event to filter projects
    const event = new CustomEvent('filter-projects-by-tech', { detail: skill });
    window.dispatchEvent(event);
    
    // Smooth scroll to projects
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const navHeight = 72;
      const elementPosition = projectsSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-primary mb-3 text-balance">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Technologies, tools, and concepts from my projects and developer journey. Click on a skill to see matching projects!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat, i) => (
              <Card
                key={i}
                className="h-full shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${i * 75}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {cat.icon}
                    <h4 className="font-semibold text-primary">{cat.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        onClick={() => handleSkillClick(skill)}
                        className="px-3 py-1.5 bg-background rounded-full text-sm text-muted-foreground border border-border/60 hover:border-accent/40 hover:text-accent hover:bg-accent/5 cursor-pointer select-none transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
