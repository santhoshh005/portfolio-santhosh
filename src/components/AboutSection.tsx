import { GraduationCap, Code, Target, Heart } from 'lucide-react';
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
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              👨‍💻 About Me
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              CSE student passionate about creating innovative software solutions. 
              I love turning ideas into reality through clean, efficient code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group"
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