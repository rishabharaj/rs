import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, MessageSquare } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import Reveal from '@/components/ui/Reveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <Reveal direction="left" x={40}>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="section-headline">Have a project?</h2>
              <h3 className="text-3xl font-bold text-coral" style={{textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)"}}>Let's talk!</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a specific project in mind or just want to connect, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Reveal direction="up" y={24}>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-coral/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Indore, India</p>
                </div>
              </div>
              </Reveal>

              <Reveal direction="up" y={24} delay={80}>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-coral/10 rounded-lg">
                  <Mail className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a 
                    href="mailto:rishabharaj4you@gmail.com" 
                    className="text-muted-foreground hover:text-coral transition-colors"
                  >
                    rishabharaj4you@gmail.com
                  </a>
                </div>
              </div>
              </Reveal>

              <Reveal direction="up" y={24} delay={160}>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-coral/10 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Discord</h4>
                  <a 
                    href="https://discord.com/users/rishabharaj" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-coral transition-colors"
                  >
                    rishabharaj
                  </a>
                </div>
              </div>
              </Reveal>
            </div>

            {/* Social Links */}
            <Reveal direction="up" y={24} delay={240}>
            <div className="flex gap-4">
              <a 
                href="https://github.com/rishabharaj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-coral hover:text-white rounded-lg transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/rishabharaj-sharma-57a7a8256" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-coral hover:text-white rounded-lg transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            </Reveal>
          </div>
          </Reveal>

          {/* Right Content - Contact Form */}
          <Reveal direction="right" x={40}>
          <div className="bg-card border border-border rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button type="submit" className="w-full btn-coral">
                Send Message
              </button>
            </form>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;