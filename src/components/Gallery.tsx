import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Reveal from '@/components/ui/Reveal';
// Local gallery images
import chennaiPhoto from '../../images/gallary/Chennai photo.jpg';
import duaaPhoto from '../../images/gallary/DUAA_PHOTO.jpg';
import iloveHackathon from '../../images/gallary/iloveindoreWinning_photo.png';
import diabloClub from '../../images/gallary/diablo club indore.jpg';
import youthFest from '../../images/gallary/Youthfest.jpg';
import treasureInShell from '../../images/gallary/treasure in shell event (linux) coordinating volunteering.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Lock scroll without shifting layout; keep modal always centered
  useEffect(() => {
    if (selectedImage) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }, [selectedImage]);

  const galleryImages = [
    // User-provided photos
    {
      id: 101,
      src: chennaiPhoto,
      alt: "Finalist at IIT Madras Hackathon (APPIAN AI CHALLENGE)",
      title: "IIT Madras Hackathon Finalist ",
      description: "APPIAN AI Challenge — Finalist at IIT Madras (Chennai) JAN-2025"
    },
    {
      id: 102,
      src: iloveHackathon,
      alt: "Winning the I Love Hackathon with Stock Saarthi project",
      title: "I Love Hackathon Winner",
      description: "Winning the I Love Hackathon with Stock Saarthi project NOV-2024"
    },
    {
      id: 103,
      src: duaaPhoto,
      alt: "Organizing the DAVV State-Level Youth Fest",
      title: "DAVV State-Level Youth Fest",
      description: "Organizing the DUAA State-Level Youth Fest FEB-2025"
    },
    {
      id: 104,
      src: youthFest,
      title: "Yuvaan at DAVV",
      alt: "Volunteer at MP Youth Festival ",
      description: "Volunteer | MP Youth Festival FEB-2025"
    },
    {
      id: 105,
      src: treasureInShell,
      alt: "Linux terminal game-themed event, coordinating & volunteering",
      title: "GDG Event: Treasure in the Shell",
      description: "Linux terminal game- themed event, coordinating & volunteering AUG-2025"
    },
    {
      id: 106,
      src: diabloClub,
      alt: "Freshers get together at Diablo Club, Indore (Nov 2023)",
      title: "Diablo Club Indore",
      description: "Freshers get together — November 2023"
    },
   
  
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=500&h=400&fit=crop",
      alt: "Coding Workshop",
      title: "Development Workshop",
      description: "Leading coding sessions"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=400&fit=crop",
      alt: "Team Collaboration",
      title: "Team Projects",
      description: "Collaborative development work"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop",
      alt: "Project Presentation",
      title: "Project Demo",
      description: "Showcasing technical solutions"
    }
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-headline mb-4">Event Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A visual journey through hackathons, conferences, and tech events that have shaped my development journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <Reveal key={image.id} direction="up" y={24}>
            <div 
              className="group relative overflow-hidden rounded-xl bg-gray-800 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay: always visible now (previously hidden until hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.description}</p>
                </div>
              </div>

              {/* Corner Accent: faint by default, brighten on hover */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-coral rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            </Reveal>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && typeof document !== 'undefined' && createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-[820px] max-w-[92vw] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 animate-in fade-in zoom-in duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="w-full h-full object-cover object-center select-none"
                draggable={false}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white text-xl leading-none backdrop-blur hover:bg-black/80 transition-colors"
                aria-label="Close"
              >
                ×
              </button>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
};

export default Gallery;