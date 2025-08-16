import { ExternalLink, Github } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
// Bundle project images
import imgDrishti from '../../images/projects/Drishti.png';
import imgAgentSync from '../../images/projects/Agentsync.png';
import imgStockSaarthi from '../../images/projects/stocksaarthi.png';
import imgIndoreConnect from '../../images/projects/indoreconnect2.png';
import imgBasicProjects from '../../images/projects/Basicproject.png';

const Projects = () => {
  const projects = [
    {
      title: "Cortex",
      description: "Cortex : An AI-driven second brain that turns your scattered thoughts into connected insights",
      tags: ["AI/ML", "Neural Networks", "Deep Learning", "Computer Vision"],
  image: imgDrishti,
      demo: "https://cortex-personal-ai-engine.vercel.app/",
      github: "https://github.com/rishabharaj/Cortex-Personal-AI-Engine",
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
    },
    {
      title: "Stock Saarthi",
      description: "A project focused on converting stocks into tokenized stocks & integrated with MetaMask crypto-wallet.",
      tags: ["React", "Web3", "MetaMask", "Blockchain"],
  image: imgStockSaarthi,
      demo: "https://rishabharaj.github.io/tokenized-stock-saarthi-/",
      github: "https://github.com/rishabharaj/tokenized-stock-saarthi-",
      featured: true
    },
    {
      title: "Indore Connect 2.0",
      description: "A modern civic tech platform designed to streamline grievance redressal for Indore city.",
      tags: ["Civic Tech", "React", "Government", "Public Service"],
  image: imgIndoreConnect,
      demo: "https://indore-connect-2-0-jansunwai.vercel.app/",
      github: "https://github.com/rishabharaj/Indore-Connect-2.0---Jansunwai",
      featured: false
    },
    {
      title: "Basic Projects Collection",
      description: "A collection of small and simple projects built using JavaScript, HTML, CSS, and Python.",
      tags: ["JavaScript", "HTML", "CSS", "Python"],
  image: imgBasicProjects,
      demo: "https://rishabharaj.github.io/basic-projects/",
      github: "https://github.com/rishabharaj/basic-projects",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

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
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-coral flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-outline flex items-center gap-2"
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

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <Reveal key={index} direction="up" y={24}>
              <div className="project-card">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-foreground mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="skill-badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-coral hover:text-coral-hover transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
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
