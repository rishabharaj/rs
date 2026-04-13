import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Reveal from '@/components/ui/Reveal';
// Local gallery images
import SIHphoto from '../../images/gallary/SIH_winners.jpg';
import chennaiPhoto from '../../images/gallary/Chennai photo.jpg';
import duaaPhoto from '../../images/gallary/DUAA_PHOTO.jpg';
import iloveHackathon from '../../images/gallary/iloveindoreWinning_photo.png';
import diabloClub from '../../images/gallary/diablo club indore.jpg';
import youthFest from '../../images/gallary/Youthfest.jpg';
import kriyeta from '../../images/gallary/kriyeta4.jpeg';
import devcraftIIT from '../../images/gallary/Devcraft_winners.jpg';
import ihubG from '../../images/gallary/ihub.png';
import treasureInShell from '../../images/gallary/treasure in shell event (linux) coordinating volunteering.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
    description: string;
  } | null>(null);

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
      id: 5,
      src: SIHphoto,
      alt: "SIH 2025 Winners",
      title: "SIH 2025 Winners",
      description: "Smart India Hackathon 2025 — Winner DEC-2025 at MRIIS, Faridabad"
    },

    {
      id: 6,
      src: devcraftIIT,
      alt: "Winner at IIT (Devcraft hackathon)",
      title: "IIT Indore Hackathon Winner",
      description: "Devcraft — Winner at IIT Indore AUG-2025"
    },
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
      description: "Winning the I Love Hackathon with Stock Saarthi project DEC-2024"
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
  // NOTE: previous duplicate id (105) changed to 106 to keep React keys unique
  id: 106,
      src: kriyeta,
      alt: "Krityeta 4.0 certification img",
      title: "Kriyeta 4.0 at Acropolise ,Indore",
      description: "Built a Multiagent system during Kriyeta 4.0, a 48-hour offline hackathon at Acropolis, Indore.  APR-2025"
    },
    {
      id: 107,
      src: diabloClub,
      alt: "Freshers get together at Diablo Club, Indore (Nov 2023)",
      title: "Diablo Club Indore",
      description: "Freshers get together —-  NOV-2023"
    },

    {
      id: 108,
      src: ihubG,
      alt: "IDE Bootcamp ihub visit, Gujarat (Apr 2026)",
      title: "iHub Gujarat",
      description: "iHub Gujarat IDE Bootcamp —-  Apr-2026"
    },
   
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

        <div className="columns-2 gap-3 sm:columns-3 lg:columns-4 xl:columns-5">
          {galleryImages.map((image, index) => (
            <Reveal key={image.id} direction="up" y={16}>
              <div
                className="group relative mb-3 cursor-pointer overflow-hidden rounded-xl bg-gray-800 break-inside-avoid"
                onClick={() => setSelectedImage({
                  src: image.src,
                  alt: image.alt,
                  title: image.title,
                  description: image.description,
                })}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${index % 3 === 0 ? 'aspect-[4/5]' : index % 3 === 1 ? 'aspect-[1/1]' : 'aspect-[5/4]'}`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-sm font-semibold text-white leading-tight">{image.title}</h3>
                  </div>
                </div>

                <div className="absolute top-3 right-3 h-2.5 w-2.5 rounded-full bg-coral opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && typeof document !== 'undefined' && createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 sm:p-8 md:p-10 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-[820px] max-w-[86vw] rounded-xl overflow-hidden bg-zinc-900 shadow-2xl ring-1 ring-white/10 animate-in fade-in zoom-in duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[4/3]">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-cover object-center select-none"
                  draggable={false}
                />
              </div>
              <div className="border-t border-white/10 bg-zinc-950/80 px-5 py-4">
                <h3 className="text-base font-semibold text-white">{selectedImage.title}</h3>
                <p className="mt-1 text-sm text-zinc-300">{selectedImage.description}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
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

export default Gallery;
