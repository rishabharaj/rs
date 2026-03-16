import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Reveal from '@/components/ui/Reveal';
// Bundle certificate images so they work after deployment (instead of relying on public/)
import certFrontend from '../../images/certificates/CourseraFrontend.png';
import certAppian from '../../images/certificates/appianAIML.png';
import certGenAI from '../../images/certificates/Coursera-GenAI.png';
import certKali from '../../images/certificates/kali-linux.png';
import certIlove from '../../images/certificates/IloveHackthon.jpg';
import certSupervised from '../../images/certificates/Coursera 0TJJCYCMJH7S_page-0001.png';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<{
    image: string;
    title: string;
    issuer: string;
    date: string;
    description: string;
  } | null>(null);

  // Lock scroll when certificate modal open
  useEffect(() => {
    if (selectedCert) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }, [selectedCert]);

  const certifications = [
    {
      id: 1,
      title: "Introduction to Front-End Development",
      issuer: "Meta (Coursera)",
      date: "JAN-2025",
  image: certFrontend,
      description: "Meta Front-End Development Professional Certificate program",
      credentialUrl: "#"
    },
    {
      id: 2,
      title: "Appian AI Application Challenge",
      issuer: "IIT Madras",
      date: "JAN-2025",
  image: certAppian,
      description: "Finalist certification from Shaastra 2025 hackathon",
      credentialUrl: "#"
    },
    {
      id: 3,
      title: "Generative AI",
      issuer: "Coursera-Deeplearning.AI",
      date: "FEB-2025",
  image: certGenAI,
      description: "Comprehensive course on Generative AI and machine learning",
      credentialUrl: "#"
    },
    {
      id: 4,
      title: "Kali Linux Tools",
      issuer: "Udemy",
      date: "MAY-2025",
  image: certKali,
      description: "Cybersecurity and penetration testing with Kali Linux",
      credentialUrl: "#"
    },
    {
      id: 5,
      title: "ilovehackathon Web3 Blockchain",
      issuer: "ilovehackathon",
      date: "DEC-2024",
  image: certIlove,
      description: "winner certification in Web3 & Blockchain hackathon",
      credentialUrl: "#"
    },
    {
      id: 6,
      title: "Supervised ML: Regression and Classification",
      issuer: "Coursera-Deeplearning.AI",
      date: "JUN-2025",
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

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
          {certifications.map((cert) => (
            <Reveal key={cert.id} direction="up" y={16}>
              <div
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-card"
                onClick={() => setSelectedCert({
                  image: cert.image,
                  title: cert.title,
                  issuer: cert.issuer,
                  date: cert.date,
                  description: cert.description,
                })}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-sm font-semibold text-white leading-tight">{cert.title}</h3>
                    <p className="mt-0.5 text-xs text-zinc-200">{cert.issuer}</p>
                  </div>
                </div>

                <div className="absolute top-3 right-3 h-2.5 w-2.5 rounded-full bg-coral opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Modal via portal */}
        {selectedCert && typeof document !== 'undefined' && createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 sm:p-8 md:p-10 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative w-[600px] max-w-[92vw] md:max-w-[58vw] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 animate-in fade-in zoom-in duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[4/3] bg-[#111]">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-contain select-none"
                  draggable={false}
                />
              </div>
              <div className="border-t border-white/10 bg-zinc-950/90 px-5 py-4">
                <h3 className="text-base font-semibold text-white">{selectedCert.title}</h3>
                <p className="mt-1 text-sm text-zinc-300">{selectedCert.issuer} • {selectedCert.date}</p>
                <p className="mt-2 text-sm text-zinc-400">{selectedCert.description}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white text-xl leading-none backdrop-blur hover:bg-black/80 transition-colors"
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
};

export default Certifications;
