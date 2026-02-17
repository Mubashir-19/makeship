import React from 'react';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import Philosophy from '../components/Philosophy';
import Phases from '../components/Phases';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <ClientLogos />
      <Philosophy />
      <Phases />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
