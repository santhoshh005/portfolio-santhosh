import { Code2, Database, Globe, Smartphone, GitBranch, Brain, Users, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
const SkillsSection = () => {
  const skillCategories = [{
    icon: <Code2 className="w-6 h-6" />,
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go"]
  }, {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Technologies",
    skills: ["React", "Next.js", "Vue.js", "Node.js", "Express", "HTML/CSS"]
  }, {
    icon: <Database className="w-6 h-6" />,
    title: "Databases & Tools",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Firebase"]
  }, {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile & Other",
    skills: ["React Native", "Flutter", "REST APIs", "GraphQL", "Tailwind CSS"]
  }];
  const softSkills = [{
    icon: <Brain className="w-5 h-5" />,
    title: "Problem Solving",
    description: "Strong analytical thinking and debugging skills"
  }, {
    icon: <Users className="w-5 h-5" />,
    title: "Team Collaboration",
    description: "Experience working in agile development teams"
  }, {
    icon: <GitBranch className="w-5 h-5" />,
    title: "Version Control",
    description: "Proficient with Git workflows and best practices"
  }, {
    icon: <Clock className="w-5 h-5" />,
    title: "Time Management",
    description: "Efficient at prioritizing tasks and meeting deadlines"
  }];
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-primary">{category.icon}</div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkills.map((skill, index) => (
            <Card key={index} className="text-center h-full">
              <CardHeader>
                <div className="mx-auto mb-2 text-primary">{skill.icon}</div>
                <CardTitle className="text-lg">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;