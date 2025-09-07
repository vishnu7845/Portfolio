import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code2, Brain, Zap, FileText } from 'lucide-react';
import seashellsImg from '@/assets/seashells.png';

const projects = [
  {
    id: 'iot-gate',
    title: 'IoT Gate Control',
    description: 'IoT Gate Control: A smart system using IoT sensors and a Java backend to automate gate access. It processes sensor data, manages authentication, logs events, and provides APIs for frontend interaction. Users can access via RFID, QR code, or mobile app, while admins monitor activity in real time. The system supports real-time notifications and alerts for unauthorized access. It also stores historical access data for analytics and reporting. The backend is scalable to handle multiple gates and users efficiently.',
    tech: ['Java', 'IoT', 'Sensors', 'Backend'],
    theme: 'pearl',
    icon: Zap,
    gradient: 'from-primary to-primary-glow',
    delay: '0s'
  },
  {
    id: 'cognimatch',
    title: 'Cognimatch',
    description: 'Cognimatch: An intelligent skill-matching platform that connects employees with projects based on their skills and experience. The backend handles user profiles, project postings, and skill requirements, and provides APIs to fetch recommended matches. Managers can assign projects efficiently while employees discover suitable opportunities. It also maintains historical matching data and analytics to improve recommendations over time. The system ensures secure authentication, data storage, and seamless integration with frontend applications.',
    tech: ['Symphony', 'Sql', 'Html', 'css', 'JavaScript', 'Tailwind CSS'],
    theme: 'jellyfish',
    icon: Brain,
    gradient: 'from-secondary to-secondary-glow',
    delay: '0.2s'
  },
  {
    id: 'pose-correction',
    title: 'Pose Correction Using Computer Vision',
    description: 'Pose Correction: A backend system for analyzing yoga or exercise poses using body keypoints. It receives pose data from the frontend, calculates angles and deviations, and provides corrective feedback. The system stores user sessions, tracks progress over time, and ensures secure data handling. It also supports real-time feedback APIs for immediate guidance and integrates with analytics to monitor performance improvements.',
    tech: ['Computer Vision', 'Python', 'TensorFlow', 'OpenCV'],
    theme: 'seaweed',
    icon: Code2,
    gradient: 'from-accent to-accent-glow',
    delay: '0.4s'
  },
  {
    id: 'stream-notes',
    title: 'StreamNotes',
    description: 'Stream Notes: A backend system for automating note-taking from video lectures. It handles uploading and processing of lecture videos, extracting key points, and storing structured summaries. Users can retrieve, search, and manage notes efficiently through APIs. The system ensures secure storage, handles user authentication, and supports integration with the frontend for a seamless learning experience. Additionally, it maintains performance optimizations for faster processing and reliable data access.',
    tech: ['NLP', 'React', 'Python', 'FastAPI'],
    theme: 'krabby-patty',
    icon: FileText,
    gradient: 'from-coral to-coral-glow',
    delay: '0.6s'
  }
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-4 animate-float">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Dive into my treasure trove of innovative solutions! 🏴‍☠️
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className={`glass-card p-8 transition-all duration-700 cursor-pointer group relative overflow-hidden
                  ${hoveredProject === project.id ? 'scale-105 shadow-glow-accent' : ''}
                `}
                style={{ animationDelay: project.delay }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Seashell Background */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <img src={seashellsImg} alt="Seashell" className="w-16 h-16 animate-float" />
                </div>

                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} shadow-glow-primary`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-card-glass border border-accent/30 rounded-full text-accent bubble-delayed"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="seashell" 
                    size="sm" 
                    className="flex-1"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    variant="coral" 
                    size="sm" 
                    className="flex-1"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>

                {/* Floating Bubble */}
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-accent rounded-full animate-bubble opacity-60"></div>
              </div>
            );
          })}
        </div>

        {/* More Projects Button */}
        <div className="text-center mt-12">
          <Button variant="treasure" size="xl" className="group">
            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>

        {/* Underwater Decorations */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-secondary/5 rounded-full blur-xl animate-float"></div>
      </div>
    </section>
  );
}