import Navigation from '@/components/Navigation';
import FloatingBubbles from '@/components/FloatingBubbles';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Floating Bubbles Background */}
      <FloatingBubbles count={20} />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-accent/20">
        <div className="glass-card inline-block px-6 py-3 mx-6">
          <p className="text-muted-foreground">
            © 2024 Vishnu Vardhan M. Built with 💙
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
