import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

interface TimelineItem {
  role?: string;
  degree?: string;
  company?: string;
  institution?: string;
  duration: string;
  location: string;
  description?: string;
  bullets?: string[];
}

const experience: TimelineItem[] = [
  {
    role: "Web Development Intern",
    company: "InAmigos Foundation (IAF)",
    duration: "Jun 2026 – Jul 2026",
    location: "India",
    bullets: [
      "Audited live website UI/UX workflows, suggesting structural usability and layout improvements.",
      "Designed page redesign mockups in Figma and collected structured data across partner NGOs."
    ]
  },
  {
    role: "Full-Stack Web Development Intern",
    company: "Thiranex",
    duration: "May 2026 – Jun 2026",
    location: "India",
    bullets: [
      "Completed project-driven full-stack internship, delivering assigned milestones in React and Node.js.",
      "Built and hosted full-stack applications including an e-commerce platform and live portfolio."
    ]
  }
];

const education: TimelineItem[] = [
  {
    degree: "Integrated M.Tech in Software Engineering",
    institution: "Vellore Institute of Technology (VIT)",
    duration: "2023 – 2028 (Expected)",
    location: "Vellore, Tamil Nadu, India",
    bullets: [
      "CGPA: 8.91/10",
      "Specialization: Software Engineering, Computer Science fundamentals, Object-Oriented Programming (OOP), and Data Structures."
    ]
  },
  {
    degree: "Intermediate (Class XII) – MPC",
    institution: "Narayana Junior College (BIEAP)",
    duration: "Sep 2021 – Mar 2023",
    location: "Anantapur, Andhra Pradesh, India",
    bullets: [
      "Board of Intermediate Education, AP — Secured a score of 97.30%."
    ]
  }
];

const ResumeSection = () => {
  return (
    <section id="resume" className="py-14 sm:py-16 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 -left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-10 sm:mb-12 animate-fade-in">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-primary mb-3 text-balance">
              Education &amp; Experience
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              My professional journey and academic background.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience Column */}
            <div className="space-y-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-accent" />
                Work Experience
              </h3>
              <div className="relative border-l-2 border-border/70 ml-3 pl-6 space-y-8">
                {experience.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline dot */}
                    <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border-2 border-accent transition-all duration-300 group-hover:scale-125 group-hover:bg-accent"></span>

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300">
                          {item.role}
                        </h4>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground border border-border/50">
                          <Calendar className="w-3 h-3" />
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-accent/80">{item.company}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </p>
                      {item.bullets ? (
                        <ul className="list-disc pl-4 space-y-1.5 mt-2 text-sm text-muted-foreground leading-relaxed">
                          {item.bullets.map((b, bi) => (
                            <li key={bi} className="hover:text-foreground transition-colors duration-200">
                              {b}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-accent" />
                Education
              </h3>
              <div className="relative border-l-2 border-border/70 ml-3 pl-6 space-y-8">
                {education.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline dot */}
                    <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border-2 border-accent transition-all duration-300 group-hover:scale-125 group-hover:bg-accent"></span>

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300">
                          {item.degree}
                        </h4>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground border border-border/50">
                          <Calendar className="w-3 h-3" />
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-accent/80">{item.institution}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </p>
                      {item.bullets ? (
                        <ul className="list-disc pl-4 space-y-1.5 mt-2 text-sm text-muted-foreground leading-relaxed">
                          {item.bullets.map((b, bi) => (
                            <li key={bi} className="hover:text-foreground transition-colors duration-200">
                              {b}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
