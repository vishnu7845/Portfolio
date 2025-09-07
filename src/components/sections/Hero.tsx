import { useState } from 'react';
import { Button } from '@/components/ui/button';
import TypingText from '@/components/TypingText';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Hero() {
  const [showSubline, setShowSubline] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const handleNameComplete = () => {
    setTimeout(() => setShowSubline(true), 500);
  };

  const handleSublineComplete = () => {
    setTimeout(() => setShowButtons(true), 500);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Jellyfish Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-lg animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Photo and Name Container */}
        <div className="flex items-center justify-center mb-8">
          {/* Photo */}
          <div className="w-22 h-22 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-accent shadow-lg mr-6">
            <img 
              src="src/image/vishnu.jpg" // <<< IMPORTANT: Replace with your actual photo path
              alt="Vishnu Vardhan M"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Name with Typing Effect */}
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-2xl">
            <TypingText 
              text="Vishnu Vardhan M" 
              speed={150}
              onComplete={handleNameComplete}
            />
          </h1>
        </div>

        {/* Subline in Jellyfish Bubble */}
        {showSubline && (
          <div className="mb-12 animate-scale-in">
            <div className="glass-card p-6 max-w-2xl mx-auto jellyfish-wobble">
              <div className="text-xl md:text-2xl text-accent font-semibold">
                <TypingText 
                  text="Turning Ideas into Digital Reality | Smart Solutions"
                  speed={80}
                  onComplete={handleSublineComplete}
                />
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        {showButtons && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="treasure" 
                size="xl"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Portfolio
                <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </Button>
              <Button 
                variant="treasure" 
                size="xl"
                onClick={() => window.open('Vishnu_Vardhan_M.pdf', '_blank')}
              >
                Download Resume
                <FileText className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="jellyfish" 
                size="xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-8">
              <a href="https://github.com/vishnu7845" target="_blank" rel="noopener noreferrer">
                <Button variant="seashell" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/vishnu-vardhan-m-50aab4248/" target="_blank" rel="noopener noreferrer">
                <Button variant="seashell" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:vishnuvardhanmnaidu@gmail.com">
                <Button variant="coral" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        )}

        {/* Floating Quote */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center animate-float">
          <div className="text-muted-foreground text-sm italic">
            "I code faster than SpongeBob flips Krabby Patties 🍔💻"
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}