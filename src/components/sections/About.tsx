import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Gift, Code, Brain, Rocket } from 'lucide-react';
import treasureChestImg from '@/assets/treasure-chest.png';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-4 animate-float">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Treasure Chest Card */}
          <div className="relative group">
            <div 
              className={`glass-card p-8 cursor-pointer transition-all duration-700 ${
                isOpen ? 'scale-105 shadow-glow-primary' : 'hover:scale-102'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* Treasure Chest Image */}
              <div className="text-center mb-6">
                <img 
                  src={treasureChestImg} 
                  alt="Treasure Chest" 
                  className={`w-32 h-32 mx-auto transition-transform duration-700 ${
                    isOpen ? 'rotate-12 scale-110' : 'animate-float'
                  }`}
                />
              </div>

              <div className="text-center">
                <Button 
                  variant={isOpen ? "treasure" : "outline"} 
                  size="lg"
                  className="mb-6"
                >
                  <Gift className="mr-2 h-5 w-5" />
                  {isOpen ? "Treasure Opened!" : "Open Treasure Chest"}
                </Button>
              </div>

              {/* Content that appears when opened */}
              <div className={`transition-all duration-700 overflow-hidden ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="space-y-4 pt-4 border-t border-accent/30">
                  <p className="text-lg text-foreground leading-relaxed">
                    Hey there! I'm Vishnu Vardhan, a passionate developer who swims through code 
                    like SpongeBob through the ocean! 🌊
                  </p>
                  <p className="text-muted-foreground">
                    With expertise spanning from IoT innovations to AI-powered solutions, 
                    I bring ideas to life faster than you can say "Krabby Patty"!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Highlights */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center bubble">
                <Code className="h-12 w-12 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary">1+</div>
                <div className="text-sm text-muted-foreground">Years Coding</div>
              </div>
              <div className="glass-card p-6 text-center bubble-delayed">
                <Brain className="h-12 w-12 text-secondary mx-auto mb-3" />
                <div className="text-2xl font-bold text-secondary">Full Stack</div>
                <div className="text-sm text-muted-foreground">developer</div>
              </div>
            </div>

            <div className="glass-card p-6 float-delayed">
              <div className="flex items-center mb-4">
                <Rocket className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-xl font-semibold text-accent">Current Focus</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>🚀 Building next-gen IoT solutions</li>
                <li>🤖 Developing AI-powered applications</li>
                <li>🌊 Swimming in the MERN stack ocean</li>
                <li>💡 Creating innovative user experiences</li>
              </ul>
            </div>

            <div className="text-center">
              <Button 
                variant="jellyfish" 
                size="lg"
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore My Skills
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}