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
  return;
};
export default SkillsSection;