import { Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const certifications = [
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata",
    date: "2026"
  },
  {
    title: "Java Spring Boot",
    issuer: "Infosys Springboard",
    date: "2026"
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    date: "2026"
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "2026"
  },
  {
    title: "Building with GitHub Copilot Agent Mode",
    issuer: "Microsoft",
    date: "2026"
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "JPMorganChase",
    date: "2026"
  },
  {
    title: "AI For Beginners",
    issuer: "HP LIFE",
    date: "2025"
  },
  {
    title: "Fusion 360 Workshop",
    issuer: "Autodesk",
    date: "2024"
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 sm:py-24 bg-secondary relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-primary mb-3 text-balance">
              Professional Certifications
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Industry credentials and project simulation completions.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {certifications.map((cert, idx) => (
              <Card 
                key={idx} 
                className="border-border/60 bg-card/65 backdrop-blur-sm shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                  <div className="space-y-3">
                    <div className="inline-flex p-3 bg-accent/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Award className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base text-primary group-hover:text-accent transition-colors duration-300 leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground border-t border-border/40 pt-3">
                    <span className="font-semibold text-primary/70">{cert.issuer}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.date}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
