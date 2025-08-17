import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['A Developer', 'A Learner', 'An Explorer', 'A Creator'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1BJigN4UgJ340bJsA2SYXiGG5QrqPfTm3/view?usp=sharing', '_blank');
  };

  return (
  <section id="home" className="min-h-[90vh] flex flex-col pt-1">
      {/* Reduce vertical centering so total hero height (including tech strip) fits in first viewport */}
      <div className="flex-1 flex items-start md:items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <Reveal direction="left" x={40} duration={1500}>
            <div className="space-y-5">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Hello world<span className="text-coral">.</span></h2>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-0.5 bg-coral"></div>
                  <h3 className="text-4xl text-muted-foreground">I'm Rishabharaj</h3>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Software Developer
                </h1>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={handleContactClick}
                  className="btn-coral"
                >
                  Got a project?
                </button>
                <button 
                  onClick={handleResumeClick}
                  className="btn-outline flex items-center gap-2"
                >
                  My resume <ExternalLink size={16} />
                </button>
              </div>

              {/* Social Links */}
            <div className="flex gap-6">
              <a 
                href="https://github.com/rishabharaj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-coral transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/rishabharaj-sharma-57a7a8256" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-coral transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:rishabharaj4you@gmail.com"
                className="text-muted-foreground hover:text-coral transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
            </div>
            </Reveal>

            {/* Right Content - Profile Image */}
            <Reveal direction="right" x={40} duration={1500}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Profile Image Container (responsive) */}
                <div className="relative w-[320px] h-[380px] sm:w-[300px] sm:h-[380px] md:w-[330px] md:h-[430px] lg:w-[400px] lg:h-[500px] flex items-end justify-center">
                  {/* Dark radial background (mobile enlarged 1.3x) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[330px] sm:h-[330px] md:w-[390px] md:h-[390px] lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-b from-[#181b20] via-[#181b20] to-transparent z-0"></div>
                  {/* Outer Ring (mobile enlarged 1.3x) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[325px] h-[325px] sm:w-[290px] sm:h-[290px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full border-[8px] md:border-[9px] lg:border-[10px] border-[#ff5a36] opacity-50 z-10 shadow-[0_0_60px_12px_rgba(255,90,54,0.28)]"></div>
                  {/* Inner Ring (mobile enlarged 1.3x) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[255px] h-[255px] sm:w-[220px] sm:h-[220px] md:w-[265px] md:h-[265px] lg:w-[305px] lg:h-[305px] rounded-full border-[4px] md:border-[5px] border-[#ff5a36] opacity-40 z-10"></div>
                  {/* Profile Image (responsive) */}
                  <img
                    src={profilePhoto}
                    alt="Rishabharaj Sharma - Software Developer"
                    className="relative -top-[20px] z-20 w-[260px] h-[335px] sm:w-[248px] sm:h-[330px] md:w-[286px] md:h-[380px] lg:w-[330px] lg:h-[435px] object-cover rounded-2xl shadow-xl mb-4 sm:mb-6 md:mb-8 mt-1 sm:mt-2 md:mt-4 lg:mt-10"
                  />
                </div>

                {/* Side chevrons (hidden on very small screens to save space) */}
                <div className="absolute -left-[30px] sm:-left-8 top-1/2 -translate-y-1/2 text-coral text-5xl sm:text-6xl font-bold opacity-30 sm:opacity-40 select-none pointer-events-none">&lt;</div>
                <div className="absolute -right-[30px] sm:-right-8 top-1/2 -translate-y-1/2 text-coral text-5xl sm:text-6xl font-bold opacity-30 sm:opacity-40 select-none pointer-events-none">&gt;</div>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </div>

  {/* Tech Strip - moved slightly upward from absolute bottom */}
  <div className="w-full mt-2 md:mt-3 lg:mt-4">
        <div className="bg-[#0e1116]/90 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.04),inset_0_-1px_0_rgba(0,0,0,0.35)]">
            <div className="max-w-6xl mx-auto px-6" style={{ height: '60px' }}>
            <ul className="flex items-center justify-between gap-8 overflow-x-auto py-4 text-[20px] sm:text-sm uppercase tracking-wide text-white/55">
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Python</li>
              <li>Java</li>
              <li>MongoDB</li>
              <li>Git</li>
              <li>Docker</li>
              <li>Linux</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;