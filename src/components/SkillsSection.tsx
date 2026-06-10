import { Code2, Layout, Server, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const skillCategories = [
  {
    icon: <Code2 className="w-5 h-5 text-accent" />,
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C / C++', 'Java', 'SQL'],
  },
  {
    icon: <Layout className="w-5 h-5 text-accent" />,
    title: 'Frontend',
    skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    icon: <Server className="w-5 h-5 text-accent" />,
    title: 'Backend & Tools',
    skills: ['Node.js', 'Git', 'GitHub', 'REST APIs'],
  },
  {
    icon: <Wrench className="w-5 h-5 text-accent" />,
    title: 'Other',
    skills: ['Browser Extensions', 'UI/UX Design', 'Problem Solving'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-primary mb-3 text-balance">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Technologies and tools I work with to build modern, scalable applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {skillCategories.map((cat, i) => (
              <Card
                key={i}
                className="h-full shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
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
                        className="px-3 py-1.5 bg-background rounded-full text-sm text-muted-foreground border border-border/60 hover:border-accent/40 hover:text-accent transition-colors duration-300"
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
