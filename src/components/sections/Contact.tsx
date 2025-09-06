import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/vishnu7845',
    color: 'text-foreground hover:text-primary',
    bg: 'bg-card-glass hover:bg-primary/20'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vishnu-vardhan-m-50aab4248/',
    color: 'text-blue-400 hover:text-blue-300',
    bg: 'bg-card-glass hover:bg-blue-500/20'
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:vishnuvardhanmnaidu@gmail.com',
    color: 'text-coral hover:text-coral-glow',
    bg: 'bg-card-glass hover:bg-coral/20'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(data.error || 'Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      alert('Error sending message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Coral Reef Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-coral/5 to-accent/10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-4 animate-float">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Let's create something amazing together! 🌊✨
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-coral to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <div className="glass-card p-8 float">
              <h3 className="text-2xl font-bold text-accent mb-6 flex items-center">
                <MapPin className="mr-3 h-6 w-6" />
                Let's Connect!
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="mr-3 h-5 w-5 text-coral" />
                  <span>vishnuvardhanmnaidu@gmail.com</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="mr-3 h-5 w-5 text-accent" />
                  <span>+91 7892251149</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-3 h-5 w-5 text-secondary" />
                  <span>Bangalore, Karnataka, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Find me in the digital ocean:
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center p-4 rounded-xl border border-accent/30 transition-all duration-300 hover:scale-105 jellyfish-wobble ${link.bg}`}
                      >
                        <IconComponent className={`h-6 w-6 mr-4 ${link.color}`} />
                        <span className="font-medium text-foreground">{link.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Fun Quote */}
            <div className="glass-card p-6 text-center bubble">
              <div className="text-2xl mb-2">🍔</div>
              <p className="text-lg italic text-accent">
                "Ready to flip some code like Krabby Patties!"
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 float-delayed">
            <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center">
              <Send className="mr-3 h-6 w-6" />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="glass-card border-accent/30 focus:border-accent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="glass-card border-accent/30 focus:border-accent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project ideas..."
                  rows={5}
                  className="glass-card border-accent/30 focus:border-accent resize-none"
                  required
                />
              </div>

              <Button 
                type="submit" 
                variant="treasure" 
                size="lg" 
                className="w-full group"
                disabled={loading}
              >
                {loading ? 'Sending...' : (
                  <>
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Floating Decorations */}
        <div className="absolute top-20 right-10 w-16 h-16 bg-coral/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-secondary/20 rounded-full blur-lg animate-bubble"></div>
      </div>
    </section>
  );
}
