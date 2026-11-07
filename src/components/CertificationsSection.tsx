import { Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const certifications = [
  { title: "Published Patent Application: IN202641127062 A1", issuer: "Indian Patent Office", date: "2026" },
  { title: "Health-a-thon 2026: Top 150, Shortlisted for Phase 2", issuer: "Health-a-thon", date: "2026" },
  { title: "Smart India Hackathon 2026: Participant (SkyGuard AI)", issuer: "Ministry of Earth Sciences / IMD", date: "2026" },
  { title: "Published Product: Smart Autofill on Edge (68 Users)", issuer: "Microsoft Edge Add-ons", date: "2026" },
  { title: "Advanced Generative AI", issuer: "IBM", date: "2026" },
  { title: "Agentic AI Certified Associate", issuer: "Oracle", date: "2026" },
  { title: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services (AWS)", date: "2026" },
  { title: "Java Spring Boot Certification", issuer: "Infosys Springboard", date: "2026" }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-14 sm:py-16 bg-secondary relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-10 sm:mb-12 animate-fade-in">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-primary mb-3 text-balance">
              Honors &amp; Certifications
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Hackathon achievements, published software, and professional certifications.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
