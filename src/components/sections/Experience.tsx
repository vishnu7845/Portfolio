import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Cognizant Technology Solutions",
      role: "Program Analyst Trainee",
      period: "Jul 2025 - Present",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      description: "Currently working as a Drupal Developer at Cognizant. I specialize in creating secure, high-performance web applications using Drupal and modern web technologies.",
      skills: ["Drupal", "Acquic cloud", "Site studio", "Sql", "Agile","Git", "Github"],
      gradient: "from-primary to-accent",
      delay: "0ms"
    },
    {
      id: 2,
      company: "Cognizant Technology Solutions",
      role: "Software Developer Intern",
      period: "Mar 2025 - Jul 2025",
      location: "Chennai, Tamil Nadu",
      type: "Internship",
      description: "I was trained in Drupal CMS and gained hands-on experience in developing and customizing web applications. During this internship, I enhanced my full-stack skills with PHP, MySQL, HTML, CSS, and JavaScript while working on real-world projects.",
      skills: ["Drupal", "Acquic cloud", "Site studio", "Sql", "Agile","Git", "Github"],
      gradient: "from-secondary to-coral",
      delay: "200ms"
    },
    {
      id: 3,
      company: "Anspro Technologies",
      role: "Java Full Stack Developer",
      period: "2024",
      location: "Bangalore, Karnataka",
      type: "Contract",
      description: "Built scalable web applications using Java backend technologies and modern frontend frameworks.",
      skills: ["Java", "Spring Framework", "Angular", "MySQL", "Docker"],
      gradient: "from-accent to-primary",
      delay: "400ms"
    }
  ];

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-secondary/10 to-coral/10 rounded-full blur-xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-full blur-xl animate-float-slow" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through the tech industry, building innovative solutions and growing as a developer
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative"
              style={{ animationDelay: exp.delay }}
            >
              {/* Timeline Line */}
              <div className="absolute left-6 md:left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-6 top-14 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-background group-hover:scale-125 transition-transform duration-300" />

              {/* Experience Card */}
              <div className="ml-16 md:ml-20 glass-card p-6 hover-lift">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                      <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-accent mb-3">{exp.role}</h4>
                    
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, index) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20 rounded-full hover:scale-105 transition-transform duration-200"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card inline-block p-6">
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Ready to work together?
            </h3>
            <p className="text-muted-foreground mb-4">
              Let's discuss how I can contribute to your next project
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:scale-105 transition-transform duration-200 font-medium"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-40 right-20 opacity-20">
        <div className="w-8 h-8 border-2 border-primary rounded-full animate-pulse" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-20">
        <div className="w-6 h-6 border-2 border-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default Experience;