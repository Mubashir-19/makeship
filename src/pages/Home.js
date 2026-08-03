import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import Philosophy from '../components/Philosophy';
import Phases from '../components/Phases';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { scrollToId } from '../utils/scroll';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    // wait a tick so the page has laid out before measuring scroll position
    requestAnimationFrame(() => scrollToId(id));
  }, [location]);

  return (
    <>
      <Hero />
      <Projects />
      {/* <ClientLogos /> */}
      <Philosophy />
      <Phases />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
