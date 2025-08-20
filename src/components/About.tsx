import { Code, Globe, Server, Database } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const About = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-coral" />,
      title: "Frontend Development",
      description: "Modern web applications with React, JavaScript, and responsive design"
    },
    {
      icon: <Server className="w-12 h-12 text-coral" />,
      title: "Backend Development", 
      description: "Scalable APIs and microservices using Python, Java, and Docker"
    },
    {
      icon: <Database className="w-12 h-12 text-coral" />,
      title: "Database Design",
      description: "Efficient database solutions with MySQL, MongoDB, and Supabase"
    },
    {
      icon: <Code className="w-12 h-12 text-coral" />,
      title: "AI/ML & Trading",
      description: "Machine learning applications and automated trading systems"
    }
  ];

  const stats = [
    { number: "4+", label: "Hackathon Achievements" },
    { number: "15+", label: "Open Source Contributions" },
    { number: "2+", label: "Years Learning & Building" }
  ];

  return (
  <section id="about" className="py-20 bg-dark-surface min-h-[calc(100vh-64px)]">
      <div className="container mx-auto px-6">
        {/* Services */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="section-headline">About me</h2>
              <p className="text-muted-foreground leading-relaxed">
                I am Rishabharaj Sharma, currently pursuing a Bachelor of Engineering in Information Technology at IET DAVV, Indore. 
                I am a self-driven and curious individual with a strong passion for technology, trading, software development, and real-time systems integration.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in technology began with a keen interest in programming and systems thinking. I thrive on solving real-world problems 
                and have achieved recognition in hackathons, including a first prize in a Web3 & Blockchain hackathon and being a finalist in an AI application challenge.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Reveal key={index} direction="left" x={40}>
              <div className="bg-card border border-border rounded-xl p-6 hover:border-coral transition-all duration-300">
                <div className="flex flex-col items-start space-y-4">
                  {service.icon}
                  <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;