import { Trophy, Phone, Monitor, TrendingUp, Brain, Users } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const Experience = () => {
  const experiences = [
    {
      icon: <Users className="w-6 h-6 text-coral" />,
      title: "Core Member – GDG On Campus (IET DAVV)",
      company: "Formerly GDSC",
      period: "Feb 2025 - Present",
      description: "Contributing as part of the technical & operations team: planning and executing tech events, workshops, and community sessions. Assist with technical setups (AV, code/demo environments), coordinate and drive community engagement & onboarding initiatives.",
      achievements: ["Community Events", "Workshops", "Technical Operations", "Engagement"]
    },
    {
      icon: <Trophy className="w-6 h-6 text-coral" />,
      title: "Hackathons & Competitions",
      company: "Winner & Finalist",
      period: "2024-2025",
      description: "1st prize of $300 in ilovehackathon (Web3 & Blockchain) in December 2024. Finalist in Appian AI Application Challenge - Shaastra 2025 at IIT Madras. These experiences honed my skills in rapid prototyping and problem-solving under pressure.",
      achievements: ["$300 Prize Winner", "IIT Madras Finalist", "Web3 & Blockchain", "AI Applications"]
    },
    {
      icon: <Brain className="w-6 h-6 text-coral" />,
      title: "AI/ML Internship ",
      company: "AIML Lab, IET DAVV Indore",
      period: "Sep 2024 - Nov 2024",
      description: "3-month internship at the AIML Lab (IET DAVV) focusing on algorithmic trading research and applied machine learning. Built and evaluated models for options / index movement signals, integrated feature engineering pipelines, and experimented with backtesting frameworks to optimize strategy performance and integrated with multiple trading APIs including KiteConnect, Dhan, and Kotak Neo.",
      achievements: ["Algorithmic Trading", "AI/ML Research", "API Integration", "Model Backtesting", "Python Automation"]
    },

    {
      icon: <Phone className="w-6 h-6 text-coral" />,
      title: "Call Support Assistant",
      company: "Altruist Pvt Ltd & Airtel Broadband",
      period: "Oct 2022 - Mar 2023",
      description: "Worked as a Call Support Assistant, managing inbound calls for Airtel Broadband customers. Enhanced communication, problem-solving, and customer service skills in a fast-paced environment.",
      achievements: ["Customer Service", "Problem Solving", "Communication", "Technical Support"]
    },
    {
      icon: <Monitor className="w-6 h-6 text-coral" />,
      title: "Cyber Cafe Operator",
      company: "Local Cyber Cafe",
      period: "2016 - 2020",
      description: "Long-term part-time role managing cyber cafe operations and various software applications. Developed technical aptitude and understanding of user-facing services through hands-on experience.",
      achievements: ["Software Management", "Operations", "User Support", "Technical Skills"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-headline mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey showcases diverse experiences from hackathons to customer service, 
            each contributing to my growth as a developer and problem solver.
          </p>
        </div>

        <div className="max-w-4xl mx-auto timeline">
          {experiences.map((exp, index) => (
            <Reveal key={index} direction={index % 2 === 0 ? 'left' : 'right'} x={40}>
            <div className="timeline-item">
              <div className="bg-card border border-border rounded-xl p-6 ml-4 hover:border-coral transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex items-start gap-4 mb-4 lg:mb-0">
                    <div className="p-2 bg-muted rounded-lg">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-coral font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map((achievement, idx) => (
                    <span key={idx} className="skill-badge">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;