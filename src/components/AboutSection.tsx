import { GraduationCap, Code, Target, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6 text-accent" />,
      title: "Education",
      description: "Computer Science & Engineering student with a passion for learning and innovation."
    },
    {
      icon: <Code className="w-6 h-6 text-accent" />,
      title: "Development",
      description: "Full-stack developer with experience in modern web technologies and frameworks."
    },
    {
      icon: <Target className="w-6 h-6 text-accent" />,
      title: "Goals",
      description: "Aiming to create impactful software solutions that solve real-world problems."
    },
    {
      icon: <Heart className="w-6 h-6 text-accent" />,
      title: "Passion",
      description: "Driven by curiosity and the desire to continuously grow and improve."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate software developer with a strong foundation in computer science
              and a drive to create meaningful digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently pursuing my Bachelor's degree in Computer Science & Engineering, 
                where I've developed a strong foundation in programming, algorithms, and software design. 
                My journey in tech started with curiosity about how things work and has evolved into 
                a passionate pursuit of creating solutions that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond academics, I've been actively working on personal projects, contributing to 
                open-source initiatives, and staying up-to-date with the latest technologies. 
                I believe in continuous learning and am always excited to take on new challenges 
                that push me out of my comfort zone.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to become a well-rounded software engineer who can bridge the gap 
                between technical excellence and user-centered design, creating applications 
                that are not only functional but also intuitive and impactful.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth transform hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Personal Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">3.8</div>
              <div className="text-sm text-muted-foreground">Current GPA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;