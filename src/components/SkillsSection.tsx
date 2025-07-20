import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  GitBranch, 
  Brain,
  Users,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Technologies",
      skills: ["React", "Next.js", "Vue.js", "Node.js", "Express", "HTML/CSS"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases & Tools",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Firebase"]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile & Other",
      skills: ["React Native", "Flutter", "REST APIs", "GraphQL", "Tailwind CSS"]
    }
  ];

  const softSkills = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Problem Solving",
      description: "Strong analytical thinking and debugging skills"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Team Collaboration",
      description: "Experience working in agile development teams"
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      title: "Version Control",
      description: "Proficient with Git workflows and best practices"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Time Management",
      description: "Efficient at prioritizing tasks and meeting deadlines"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and soft skills that enable me 
              to build robust, scalable, and user-friendly applications.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth group">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3 mx-auto group-hover:bg-accent/20 transition-smooth">
                    <div className="text-accent">
                      {category.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-primary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs hover:bg-accent/20 transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-primary text-center mb-8">
              Soft Skills
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth text-center group">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg mb-4 group-hover:bg-accent/20 transition-smooth">
                      <div className="text-accent">
                        {skill.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">{skill.title}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Proficiency Indicators */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-primary mb-8">
              Current Focus Areas
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Full-Stack Development", "Cloud Computing", "Machine Learning", "Mobile Development", "DevOps"].map((focus, index) => (
                <Badge 
                  key={index} 
                  className="bg-accent hover:bg-accent/90 text-white px-4 py-2 text-sm"
                >
                  {focus}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;