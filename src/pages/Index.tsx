import { useEffect, useLayoutEffect } from 'react';
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
  // Hard reset scroll BEFORE paint to avoid a flash of scrolled position
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Redundant safety resets after assets (fonts/images) load which can shift layout
  useEffect(() => {
    const forceTop = () => window.scrollTo(0, 0);
    requestAnimationFrame(forceTop);
    const t1 = setTimeout(forceTop, 60);
    const t2 = setTimeout(forceTop, 300);
    window.addEventListener('load', forceTop, { once: true });
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  return (
    <div className="min-h-screen bg-background overflow-x-clip">
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
