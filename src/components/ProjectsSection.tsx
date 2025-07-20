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
  return;
};
export default ProjectsSection;