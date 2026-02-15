// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Philosophy from './components/Philosophy';
import Phases from './components/Phases';
import Projects from './components/Projects';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans transition-colors duration-300">
      <Navbar />
      <Hero />
      <ClientLogos />
      <Philosophy />
      <Phases />
      <Projects />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
