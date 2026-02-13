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
      <div className="relative h-24 bg-background-light dark:bg-background-dark overflow-hidden z-20">
        <div className="absolute inset-0 flex items-end text-background-dark dark:text-black">
          <svg className="w-full h-full fill-current" preserveAspectRatio="none" viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 L0,20 C200,20 200,80 400,80 C600,80 600,20 800,20 C1000,20 1000,80 1200,80 C1300,80 1440,20 1440,20 L1440,80 Z" transform="scale(1, -1) translate(0, -100)"></path>
            <path d="M0 80V0C0 0 357.5 70 720 70C1082.5 70 1440 0 1440 0V80H0Z"></path>
          </svg>
        </div>
      </div>
      <Phases />
      <div className="relative h-24 bg-background-light dark:bg-background-dark overflow-hidden -mt-1 z-20">
        <div className="absolute inset-0 flex items-start text-background-dark dark:text-black">
          <svg className="w-full h-full fill-current" preserveAspectRatio="none" viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0V80C0 80 357.5 10 720 10C1082.5 10 1440 80 1440 80V0H0Z"></path>
          </svg>
        </div>
      </div>
      <Projects />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
