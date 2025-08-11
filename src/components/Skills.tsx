import Reveal from '@/components/ui/Reveal';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["JavaScript", "HTML", "CSS", "Bootstrap", "React", "WordPress"]
    },
    {
      title: "Backend", 
      skills: ["C#", "Java", "Python", "Docker", "Redis", "Microservices"]
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB", "Supabase", "SQL Basics", "Database Design"]
    },
    {
      title: "Linux & Networking",
      skills: ["Linux Fundamentals", "Bash Scripting", "Nmap", "Wireshark", "System Administration"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-headline mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technical skills acquired through academic learning, 
            practical projects, and hands-on experience across multiple domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Reveal key={index} direction="up" y={24}>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <Reveal key={idx} direction="up" y={16} delay={idx * 40}>
                    <div className="skill-badge w-full text-center">
                      {skill}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;