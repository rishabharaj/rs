import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Reveal from '@/components/ui/Reveal';

const Index = () => {
  // Ensure always start at top when page mounts (avoids browser restoring scroll)
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior }); }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
  <main className="pt-0">
  <Reveal y={32} direction="up"><Hero /></Reveal>
  <Reveal y={32} direction="up" delay={60}><About /></Reveal>
  <Reveal y={32} direction="up" delay={80}><Experience /></Reveal>
  <Reveal y={32} direction="up" delay={100}><Projects /></Reveal>
  <Reveal y={32} direction="up" delay={120}><Certifications /></Reveal>
  <Reveal y={32} direction="up" delay={140}><Gallery /></Reveal>
  <Reveal y={32} direction="up" delay={160}><Contact /></Reveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
