import { useState } from 'react';
import { Code, Database, Globe, Wrench, GitBranch } from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Globe,
    color: 'primary',
    skills: ['React', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript']
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Database,
    color: 'secondary',
    skills: ['Java', 'PHP', 'Python', 'C++', 'C', 'Symfony']
  },
  {
    id: 'fullstack',
    title: 'Full Stack',
    icon: Code,
    color: 'coral',
    skills: ['MERN Stack', 'Drupal', 'REST APIs']
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: Wrench,
    color: 'primary',
    skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Linux']
  },
  {
    id: 'database',
    title: 'Database',
    icon: GitBranch,
    color: 'secondary',
    skills: ['SQL', 'MySQL','MongoDB']
  }
];

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            My technical arsenal - bubbling with expertise! 🫧
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-coral mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className={`
                  glass-card p-6 rounded-xl transition-all duration-300 cursor-pointer
                  ${hoveredCategory === category.id ? 'transform -translate-y-2 shadow-glow-xl' : 'shadow-md'}
                `}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Category Header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-full bg-${category.color}/20 mb-4`}>
                    <IconComponent className={`h-8 w-8 text-${category.color}`} />
                  </div>
                  <h3 className={`text-xl font-semibold text-${category.color}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className={`flex items-center justify-between p-3 rounded-xl bg-card-glass border border-accent/20 transition-colors duration-300
                        ${hoveredCategory === category.id ? 'bg-accent/10 border-accent/30' : ''}
                      `}
                    >
                      <span className="text-foreground font-medium">{skill}</span>
                      <div className={`w-2 h-2 rounded-full bg-${category.color} animate-pulse`}></div>
                    </div>
                  ))}
                </div>

                {/* Subtle Bubble */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent/20 rounded-full opacity-50"></div>
              </div>
            );
          })}
        </div>

        {/* Underwater Scene Enhancement */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 glass-card p-6">
            <div className="text-2xl">🌊</div>
            <div className="text-lg text-accent font-semibold">
              Always learning, always swimming forward!
            </div>
            <div className="text-2xl">🐠</div>
          </div>
        </div>

        {/* Optional Static Floating Elements */}
        <div className="absolute top-20 right-10 w-16 h-16 bg-secondary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-coral/10 rounded-full blur-lg"></div>
      </div>
    </section>
  );
}
