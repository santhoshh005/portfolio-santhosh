import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
const ProjectsSection = () => {
  const projects = [{
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application built with React and Node.js, featuring user authentication, payment integration, and real-time inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://your-ecommerce-demo.com",
    date: "2024",
    featured: true
  }, {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://your-taskmanager-demo.com",
    date: "2024"
  }, {
    title: "Weather Analytics Dashboard",
    description: "An interactive dashboard that visualizes weather data with charts, maps, and predictive analytics using machine learning models.",
    technologies: ["Python", "Django", "D3.js", "TensorFlow", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://your-weather-demo.com",
    date: "2023"
  }, {
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for tracking workouts, setting goals, and monitoring progress with social features and gamification.",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    githubUrl: "https://github.com/yourusername/fitness-tracker",
    date: "2023"
  }, {
    title: "Open Source Library",
    description: "A lightweight JavaScript library for form validation with zero dependencies, used by 1000+ developers worldwide.",
    technologies: ["JavaScript", "TypeScript", "Jest", "Rollup"],
    githubUrl: "https://github.com/yourusername/form-validator",
    date: "2023"
  }, {
    title: "AI Chatbot Interface",
    description: "Modern chat interface for AI assistants with message history, file uploads, and customizable themes.",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Prisma"],
    githubUrl: "https://github.com/yourusername/ai-chatbot",
    liveUrl: "https://your-chatbot-demo.com",
    date: "2024"
  }];
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and creativity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`h-full ${project.featured ? 'ring-2 ring-primary' : ''}`}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                </div>
                {project.featured && (
                  <Badge variant="default" className="w-fit">Featured</Badge>
                )}
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;