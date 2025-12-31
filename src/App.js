import { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ClientLogos from './components/ClientLogos';
import Hero from './components/Hero';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';

const App = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : true
  );

  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  const sections = [
    { id: 'hero', label: 'Welcome', color: 'bg-amber-500', text: 'text-amber-500' },
    { id: 'services', label: 'Our Craft', color: 'bg-amber-500', text: 'text-amber-500' },
    { id: 'philosophy', label: 'Why Us', color: 'bg-amber-500', text: 'text-amber-500' },
    { id: 'contact', label: 'Start Now', color: 'bg-amber-500', text: 'text-amber-500' },
  ];

  // Initialize refs array
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, sections.length);
  }, [sections.length]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setIsDarkMode(e.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

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

  return (
    <div className={`relative h-screen w-full overflow-hidden font-sans selection:bg-amber-500/30 transition-colors duration-500 bg-[var(--bg-main)] text-[var(--text-main)]`}>

      {/* Dynamic Theme Styles */}
      <style>{`
        :root {
          /* Color Palette Variables */
          --bg-main: ${isDarkMode ? '#020617' : '#fffbeb'};      /* slate-950 vs amber-50 */
          --bg-card: ${isDarkMode ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.7)'}; 
          --bg-card-solid: ${isDarkMode ? '#0f172a' : '#ffffff'};
          --bg-input: ${isDarkMode ? '#020617' : '#fff7ed'};     /* slate-950 vs amber-50 */
          
          --text-main: ${isDarkMode ? '#f8fafc' : '#451a03'};    /* slate-50 vs amber-950 */
          --text-muted: ${isDarkMode ? '#94a3b8' : '#78350f'};   /* slate-400 vs amber-900 */
          
          --border: ${isDarkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(251, 191, 36, 0.3)'}; 
          --border-hover: ${isDarkMode ? 'rgba(71, 85, 105, 0.8)' : 'rgba(245, 158, 11, 0.5)'};

          /* Accents - Monochrome Amber Theme */
          --accent-cyan: ${isDarkMode ? '#fbbf24' : '#d97706'};    /* Mapped to Amber */
          --accent-violet: ${isDarkMode ? '#fbbf24' : '#d97706'};  /* Mapped to Amber */
          --accent-emerald: ${isDarkMode ? '#fbbf24' : '#d97706'}; /* Mapped to Amber */
          --accent-amber: ${isDarkMode ? '#fbbf24' : '#d97706'};   /* Amber-400 vs Amber-600 */
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