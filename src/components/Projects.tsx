import { ExternalLink, Github } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
// Bundle project images
import imgCGPAHelper from '../../images/projects/cgpahelper.png';
import imgAgentSync from '../../images/projects/Agentsync.png';
import imgArchitectAI from '../../images/projects/ArchitectAI.png';

const Projects = () => {
  const projects = [
    {
      title: "Architect AI",
      description: "An AI-powered platform that transforms startup ideas into complete technical blueprints, from stack selection to deployment guidance.",
      tags: ["Next.js 14", "Supabase", "Gemini API", "TypeScript"],
  image: imgArchitectAI,
      demo: "https://architectai.qzz.io",
      github: "https://github.com/rishabharaj/your-architect-ai",
      featured: true
    },
    {
      title: "CGPA Helper",
      description: "A privacy-first CGPA/SGPA calculator and percentage converter supporting standard 10-point, 4.0, and 5.0 scales with real-time, credit-weighted computations.",
      tags: ["Astro", "Tailwind CSS", "TypeScript", "React"],
  image: imgCGPAHelper,
      demo: "https://cgpahelper.com",
      github: "https://github.com/rishabharaj/cgpa-helper",
      featured: true
    },
    {
      title: "AgentSync",
      description: "A modern AI agent management platform that allows users to interact with various specialized AI agents for different tasks.",
      tags: ["AI/ML", "React", "TypeScript", "API Integration"],
  image: imgAgentSync,
      demo: "https://v0-full-stack-ai-website.vercel.app/",
      github: "https://github.com/rishabharaj/AgentSync",
      featured: true
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-headline mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects ranging from Web3 applications to AI-powered solutions, 
            demonstrating expertise across multiple technologies and domains.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Featured Projects</h3>
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <Reveal key={index} direction={index % 2 === 0 ? 'left' : 'right'} x={40}>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Project Preview */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-xl overflow-hidden bg-card border border-border group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover aspect-[16/10] transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h4 className="text-2xl font-bold text-foreground mb-4">{project.title}</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="skill-badge text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-coral inline-flex items-center gap-2 whitespace-nowrap"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-outline inline-flex items-center gap-2 whitespace-nowrap"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </a>
                  </div>
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

export default Projects;
