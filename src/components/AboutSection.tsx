import { BriefcaseBusiness, GraduationCap, Code, Target, Heart } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6 text-accent" />,
      title: "CSE Student",
      description: "Pursuing Computer Science with passion for innovation"
    },
    {
      icon: <Code className="w-6 h-6 text-accent" />,
      title: "Full-Stack Dev",
      description: "Building scalable applications with modern tech"
    },
    {
      icon: <Target className="w-6 h-6 text-accent" />,
      title: "Problem Solver",
      description: "Creating solutions that make a real impact"
    },
    {
      icon: <Heart className="w-6 h-6 text-accent" />,
      title: "Continuous Learner",
      description: "Always curious, always growing"
    },
    {
      icon: <BriefcaseBusiness className="w-6 h-6 text-accent" />,
      title: "Work Experience",
      description: "Fresher with practical experience in Java, Web Development, and Microsoft Edge Extension projects"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-primary mb-3 text-balance">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              CSE student passionate about creating innovative software solutions. 
              I love turning ideas into reality through clean, efficient code.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 sm:gap-5">
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