import { GraduationCap, ScrollText, Rocket, HeartPulse } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    { icon: <GraduationCap className="w-6 h-6 text-accent" />, title: "VIT Vellore", description: "Integrated M.Tech in Software Engineering · CGPA 8.91" },
    { icon: <ScrollText className="w-6 h-6 text-accent" />, title: "Patent Co-inventor", description: "Published Indian patent application IN202641127062 A1" },
    { icon: <Rocket className="w-6 h-6 text-accent" />, title: "Shipped Product", description: "Smart Autofill live on Microsoft Edge with 68 users" },
    { icon: <HeartPulse className="w-6 h-6 text-accent" />, title: "Health-a-thon 2026", description: "Top 150 teams with RoundsAI, an oncology ward copilot" }
  ];

  return (
    <section id="about" className="py-14 sm:py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-primary mb-3 text-balance">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Software Engineering student at VIT Vellore and co-inventor on a published patent application. I build full-stack apps, AI tools and browser extensions with clean, tested code.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="h-full shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] group"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl mb-4 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;