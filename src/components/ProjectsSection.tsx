import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React and Node.js, featuring user authentication, payment integration, and real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://your-ecommerce-demo.com",
      date: "2024",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://your-taskmanager-demo.com",
      date: "2024"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "An interactive dashboard that visualizes weather data with charts, maps, and predictive analytics using machine learning models.",
      technologies: ["Python", "Django", "D3.js", "TensorFlow", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://your-weather-demo.com",
      date: "2023"
    },
    {
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for tracking workouts, setting goals, and monitoring progress with social features and gamification.",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      githubUrl: "https://github.com/yourusername/fitness-tracker",
      date: "2023"
    },
    {
      title: "Open Source Library",
      description: "A lightweight JavaScript library for form validation with zero dependencies, used by 1000+ developers worldwide.",
      technologies: ["JavaScript", "TypeScript", "Jest", "Rollup"],
      githubUrl: "https://github.com/yourusername/form-validator",
      date: "2023"
    },
    {
      title: "AI Chatbot Interface",
      description: "Modern chat interface for AI assistants with message history, file uploads, and customizable themes.",
      technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Prisma"],
      githubUrl: "https://github.com/yourusername/ai-chatbot",
      liveUrl: "https://your-chatbot-demo.com",
      date: "2024"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating my ability to build 
              full-stack applications, solve complex problems, and create user-friendly experiences.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Featured Project */}
            {projects.filter(p => p.featured).map((project, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-smooth border-l-4 border-l-accent">
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                      <Badge className="bg-accent text-white">Featured</Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>
                    <div className="space-y-3">
                      {project.liveUrl && (
                        <Button asChild className="w-full bg-accent hover:bg-accent/90">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      <Button asChild variant="outline" className="w-full">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Other Projects */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => !p.featured).map((project, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth group">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-primary group-hover:text-accent transition-smooth">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-2">
                      {project.liveUrl && (
                        <Button asChild size="sm" className="flex-1 bg-accent hover:bg-accent/90">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Demo
                          </a>
                        </Button>
                      )}
                      <Button asChild variant="outline" size="sm" className="flex-1">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
