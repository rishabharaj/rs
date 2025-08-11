import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import { Award, ExternalLink } from 'lucide-react';
// Bundle certificate images so they work after deployment (instead of relying on public/)
import certFrontend from '../../images/certificates/CourseraFrontend.png';
import certAppian from '../../images/certificates/appianAIML.png';
import certGenAI from '../../images/certificates/Coursera-GenAI.png';
import certKali from '../../images/certificates/kali-linux.png';
import certIlove from '../../images/certificates/IloveHackthon.jpg';
import certSupervised from '../../images/certificates/Coursera 0TJJCYCMJH7S_page-0001.png';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const certifications = [
    {
      id: 1,
      title: "Introduction to Front-End Development",
      issuer: "Meta (Coursera)",
      date: "2024",
  image: certFrontend,
      description: "Meta Front-End Development Professional Certificate program",
      credentialUrl: "#"
    },
    {
      id: 2,
      title: "Appian AI Application Challenge",
      issuer: "IIT Madras",
      date: "2025",
  image: certAppian,
      description: "Finalist certification from Shaastra 2025 hackathon",
      credentialUrl: "#"
    },
    {
      id: 3,
      title: "Generative AI",
      issuer: "Coursera-Deeplearning.AI",
      date: "2024",
  image: certGenAI,
      description: "Comprehensive course on Generative AI and machine learning",
      credentialUrl: "#"
    },
    {
      id: 4,
      title: "Kali Linux Tools",
      issuer: "Udemy",
      date: "2024",
  image: certKali,
      description: "Cybersecurity and penetration testing with Kali Linux",
      credentialUrl: "#"
    },
    {
      id: 5,
      title: "ilovehackathon Web3 Blockchain",
      issuer: "ilovehackathon",
      date: "2024",
  image: certIlove,
      description: "1st place winner certification in Web3 & Blockchain hackathon",
      credentialUrl: "#"
    },
    {
      id: 6,
      title: "Supervised ML: Regression and Classification",
      issuer: "Coursera-Deeplearning.AI",
      date: "2024",
  image: certSupervised,
      description: "Machine learning specialization focusing on supervised learning",
      credentialUrl: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-headline mb-4">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that validate my technical expertise and continuous learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Reveal key={cert.id} direction="up" y={24}>
            <div 
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-coral/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => setSelectedCert(cert.image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transition-all duration-300 filter grayscale blur-[2px] brightness-[0.75] group-hover:grayscale-0 group-hover:blur-0 group-hover:brightness-100 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Award className="text-coral mt-1 flex-shrink-0" size={20} />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm leading-tight mb-1">{cert.title}</h3>
                    <p className="text-muted-foreground text-xs">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">{cert.description}</p>
                
                <button className="flex items-center gap-2 text-coral hover:text-coral-hover text-xs transition-colors">
                  <ExternalLink size={14} />
                  <span>View Certificate</span>
                </button>
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        {/* Modal */}
        {selectedCert && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={selectedCert} 
                alt="Certificate"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-coral transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;