import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon } from 'lucide-react';
import Navbar from './components/Navbar';
import ClientLogos from './components/ClientLogos';
import Hero from './components/Hero';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';

const App = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to Dark Mode

  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  const sections = [
    { id: 'hero', label: 'Welcome', color: 'bg-cyan-500', text: 'text-cyan-500' },
    { id: 'services', label: 'Our Craft', color: 'bg-violet-500', text: 'text-violet-500' },
    { id: 'philosophy', label: 'Why Us', color: 'bg-amber-500', text: 'text-amber-500' },
    { id: 'contact', label: 'Start Now', color: 'bg-emerald-500', text: 'text-emerald-500' },
  ];

  // Initialize refs array
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, sections.length);
  }, [sections.length]);

  // --- Fixed Scroll Spy Logic ---
  useEffect(() => {
    const options = {
      root: containerRef.current,
      threshold: 0,
      rootMargin: "-45% 0px -45% 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          if (!isNaN(index)) {
            setActiveSection(index);
          }
        }
      });
    }, options);

    const currentRefs = sectionRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const scrollToSection = (index) => {
    const targetRef = sectionRefs.current[index];
    if (targetRef && containerRef.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const targetTop = targetRef.getBoundingClientRect().top;
      const scrollOffset = targetTop - containerTop + containerRef.current.scrollTop;

      containerRef.current.scrollTo({
        top: scrollOffset,
        behavior: 'smooth',
      });
    }
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`relative h-screen w-full overflow-hidden font-sans selection:bg-cyan-500/30 transition-colors duration-500 bg-[var(--bg-main)] text-[var(--text-main)]`}>

      {/* Dynamic Theme Styles */}
      <style>{`
        :root {
          /* Color Palette Variables */
          --bg-main: ${isDarkMode ? '#020617' : '#f8fafc'};      /* slate-950 vs slate-50 */
          --bg-card: ${isDarkMode ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.7)'}; /* slate-900/60 vs white/70 */
          --bg-card-solid: ${isDarkMode ? '#0f172a' : '#ffffff'};
          --bg-input: ${isDarkMode ? '#020617' : '#f1f5f9'};     /* slate-950 vs slate-100 */
          
          --text-main: ${isDarkMode ? '#f8fafc' : '#0f172a'};    /* slate-50 vs slate-900 */
          --text-muted: ${isDarkMode ? '#94a3b8' : '#64748b'};   /* slate-400 vs slate-500 */
          
          --border: ${isDarkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(203, 213, 225, 0.8)'}; /* slate-800/50 vs slate-300/80 */
          --border-hover: ${isDarkMode ? 'rgba(71, 85, 105, 0.8)' : 'rgba(148, 163, 184, 0.8)'};

          /* Accents - Darker in light mode for contrast */
          --accent-cyan: ${isDarkMode ? '#22d3ee' : '#0891b2'};  /* cyan-400 vs cyan-600 */
          --accent-violet: ${isDarkMode ? '#a78bfa' : '#7c3aed'}; /* violet-400 vs violet-600 */
          --accent-emerald: ${isDarkMode ? '#34d399' : '#059669'}; /* emerald-400 vs emerald-600 */
          --accent-amber: ${isDarkMode ? '#fbbf24' : '#d97706'};  /* amber-400 vs amber-600 */
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        .glass-panel {
          background: var(--bg-card);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border);
          box-shadow: ${isDarkMode ? '0 0 0 0 transparent' : '0 10px 40px -10px rgba(0,0,0,0.1)'};
        }
        /* Custom Selection Styles */
        .card-radio:checked + div {
          background-color: ${isDarkMode ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.1)'};
          border-color: var(--accent-emerald);
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.15);
        }
        .card-radio:checked + div .icon-box {
          background-color: ${isDarkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.2)'};
          color: var(--accent-emerald);
        }
        .card-radio:checked + div .check-indicator {
          opacity: 1;
          transform: scale(1);
        }
        /* Inputs */
        input::placeholder, textarea::placeholder, select {
          color: var(--text-muted);
        }
      `}</style>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 left-6 z-50 p-3 rounded-full bg-[var(--bg-card-solid)] border border-[var(--border)] text-[var(--text-main)] shadow-lg hover:scale-110 transition-transform duration-300 group"
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 group-hover:text-amber-400 transition-colors" />
        ) : (
          <Moon className="w-5 h-5 group-hover:text-violet-600 transition-colors" />
        )}
      </button>

      {/* Navigation */}
      <Navbar
        sections={sections}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Main Scroll Container */}
      <div
        ref={containerRef}
        className="h-full w-full overflow-y-scroll no-scrollbar scroll-smooth"
      >

        {/* SECTION 1: HERO */}
        <div ref={el => sectionRefs.current[0] = el} data-index="0">
          <Hero scrollToSection={scrollToSection} isDarkMode={isDarkMode} />
          <ClientLogos isDarkMode={isDarkMode} />
        </div>

        {/* SECTION 2: SERVICES */}
        <div ref={el => sectionRefs.current[1] = el} data-index="1">
          <Services scrollToSection={scrollToSection} isDarkMode={isDarkMode} />
        </div>

        {/* SECTION 3: PHILOSOPHY */}
        <div ref={el => sectionRefs.current[2] = el} data-index="2">
          <Philosophy isDarkMode={isDarkMode} />
        </div>

        {/* SECTION 4: CONTACT */}
        <div ref={el => sectionRefs.current[3] = el} data-index="3">
          <Contact isDarkMode={isDarkMode} />
        </div>

      </div>
    </div>
  );
};

export default App;