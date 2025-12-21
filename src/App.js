import React, { useState, useEffect, useRef } from 'react';
import { 
  Smartphone, 
  Globe, 
  MessageSquareCode, 
  ShieldCheck, 
  Zap, 
  Infinity, 
  ArrowRight, 
  Code2,
  Send,
  CheckCircle2,
  Linkedin,
  Twitter,
  Mail,
  Facebook,
  User,
  AtSign,
  MessageSquare,
  Clock,
  DollarSign,
  Layers,
  Search,
  Target,
  ChevronDown,
  Lightbulb,
  Rocket,
  PenTool,
  TrendingUp,
  Database,
  Layout,
  HelpCircle,
  Cpu,
  Sun,
  Moon,
  ShoppingCart,
  LayoutGrid,
  Edit3,
  Server,
  Bot
} from 'lucide-react';

// --- Reusable Reveal Component for Scroll Animations ---
const Reveal = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible 
          ? "opacity-100 translate-y-0 filter blur-0" 
          : "opacity-0 translate-y-12 filter blur-sm"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to Dark Mode
  
  // Form States
  const [selectedCategories, setSelectedCategories] = useState(['web']); // Multi-select support
  const [projectTypeMode, setProjectTypeMode] = useState('select'); // 'select' | 'describe'
  
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  const sections = [
    { id: 'hero', label: 'Welcome', color: 'bg-cyan-500', text: 'text-cyan-500' },
    { id: 'services', label: 'Our Craft', color: 'bg-violet-500', text: 'text-violet-500' },
    { id: 'philosophy', label: 'Why Us', color: 'bg-amber-500', text: 'text-amber-500' },
    { id: 'contact', label: 'Start Now', color: 'bg-emerald-500', text: 'text-emerald-500' },
  ];

  // Data for Progressive Disclosure Form
  const projectCategories = [
    { id: 'web', name: 'Web & Cloud', icon: Globe },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'ai', name: 'AI & Data', icon: Cpu },
    { id: 'blockchain', name: 'Blockchain', icon: ShieldCheck },
  ];

  const projectSubtypes = {
    web: [
      { name: "Web Application", icon: Globe, desc: "Scalable React/Next.js SaaS" },
      { name: "API / MCP Server", icon: Database, desc: "Backend & Tooling Infrastructure" },
      { name: "Marketing Website", icon: Layout, desc: "High-conversion Landing Pages" },
      { name: "E-Commerce", icon: ShoppingCart, desc: "Online Stores & Marketplaces" },
      { name: "Admin Dashboard", icon: Server, desc: "Internal Tools & Panels" },
      { name: "Cloud Migration", icon: Layers, desc: "AWS/GCP/Azure Deployment" },
    ],
    mobile: [
      { name: "iOS Native", icon: Smartphone, desc: "Swift & SwiftUI Development" },
      { name: "Android Native", icon: Smartphone, desc: "Kotlin & Jetpack Compose" },
      { name: "Cross-Platform", icon: Layers, desc: "React Native / Flutter Solutions" },
      { name: "PWA", icon: Globe, desc: "Progressive Web Applications" },
      { name: "Watch/TV App", icon: Zap, desc: "Wearables & Smart TV" },
    ],
    ai: [
      { name: "Multimodal Chatbot", icon: MessageSquareCode, desc: "MCP, MOE, RAG, Finetuning" },
      { name: "Agentic Workflow", icon: Bot, desc: "Autonomous Task Execution" },
      { name: "Predictive Analytics", icon: TrendingUp, desc: "Data Modeling & Forecasting" },
      { name: "Vision / Audio", icon: Search, desc: "Processing & Generation" },
      { name: "LLM Integration", icon: Cpu, desc: "Custom Model Implementation" },
    ],
    blockchain: [
      { name: "Smart Contract", icon: Code2, desc: "Solidity / Rust Audited Code" },
      { name: "dApp Interface", icon: Layout, desc: "Web3 Wallet Integration" },
      { name: "DeFi Protocol", icon: ShieldCheck, desc: "Financial Logic & Staking" },
      { name: "NFT Platform", icon: Rocket, desc: "Minting & Marketplaces" },
      { name: "Private Chain", icon: Server, desc: "Hyperledger / Enterprise" },
    ]
  };

  // Initialize refs array
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, sections.length);
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

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const toggleCategory = (id) => {
    setSelectedCategories(prev => 
      prev.includes(id) 
        ? prev.filter(c => c !== id) 
        : [...prev, id]
    );
  };

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

      {/* Navigation - Right Side Joined Lines */}
      <nav className="fixed right-0 top-0 bottom-0 w-8 z-50 flex flex-col items-end justify-center pointer-events-none">
        <div className="flex flex-col h-full w-full pointer-events-auto justify-center">
          {sections.map((section, index) => (
            <div
              key={section.id}
              onClick={() => scrollToSection(index)}
              className={`relative flex-1 max-h-32 group cursor-pointer transition-all duration-300 flex items-center justify-end pr-0 hover:pr-1 border-l-0
                ${activeSection === index ? 'w-3 opacity-100' : 'w-1.5 opacity-20 hover:opacity-50 hover:w-2.5'}
                ${section.color}
              `}
            >
              {/* Tooltip Label */}
              <div className={`absolute right-4 px-3 py-1 rounded bg-[var(--bg-card-solid)] border border-[var(--border)] text-xs font-bold uppercase tracking-wider whitespace-nowrap transform transition-all duration-300 origin-right shadow-xl
                ${activeSection === index ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-4 scale-90 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100'}
                ${section.text}
              `}>
                {section.label}
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* Main Scroll Container */}
      <div 
        ref={containerRef} 
        className="h-full w-full overflow-y-scroll no-scrollbar scroll-smooth"
      >
        
        {/* SECTION 1: HERO */}
        <section 
          id="hero"
          data-index="0"
          ref={el => sectionRefs.current[0] = el}
          className="min-h-screen w-full relative flex items-center justify-center py-20 px-6 md:px-20 overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.1),transparent_40%)] animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.08),transparent_40%)] animate-pulse" style={{ animationDuration: '7s' }} />
          
          <div className="max-w-7xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-8">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[var(--accent-cyan)] text-xs font-medium uppercase tracking-widest">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${isDarkMode ? 'bg-cyan-500' : 'bg-cyan-600'}`}></span>
                  </span>
                  Now Accepting New Projects
                </div>
              </Reveal>
              
              <Reveal delay={200}>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-[var(--text-main)]">
                  Build the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                    Impossible.
                  </span>
                </h1>
              </Reveal>
              
              <Reveal delay={400}>
                <p className="text-[var(--text-muted)] text-lg md:text-xl max-w-lg leading-relaxed">
                  makeship.dev is your elite engineering partner. We craft scalable Blockchain apps, Agentic AI, and high-performance SaaS platforms.
                </p>
              </Reveal>

              <Reveal delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={() => scrollToSection(3)}
                    className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2"
                  >
                    Start a Project <ArrowRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => scrollToSection(1)}
                    className="px-8 py-4 bg-[var(--bg-card-solid)] hover:bg-opacity-80 text-[var(--text-main)] font-medium rounded-lg border border-[var(--border)] transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                  >
                    Explore Services
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Abstract visual representation of code/structure */}
            <div className="hidden lg:block relative h-[500px] w-full">
               <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-2xl blur-3xl animate-float" />
               <div className="relative h-full w-full bg-[var(--bg-card)] backdrop-blur-sm border border-[var(--border)] rounded-2xl p-8 shadow-2xl flex flex-col gap-6 animate-float-delayed">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                  </div>
                  <div className="space-y-4 font-mono text-sm md:text-base opacity-70">
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <span className="text-[var(--accent-violet)]">const</span>
                      <span className="text-[var(--accent-cyan)]">future</span>
                      <span className="text-[var(--text-main)]">=</span>
                      <span className="text-[var(--accent-amber)]">await</span>
                      <span className="text-blue-400">makeship</span>
                      <span className="text-[var(--text-main)]">.</span>
                      <span className="text-yellow-200">build</span>
                      <span className="text-[var(--text-main)]">({'{'}</span>
                    </div>
                    <div className="pl-8 text-[var(--text-muted)]">scale: <span className="text-[var(--accent-emerald)]">'unlimited'</span>,</div>
                    <div className="pl-8 text-[var(--text-muted)]">ai: <span className="text-[var(--accent-emerald)]">true</span>,</div>
                    <div className="pl-8 text-[var(--text-muted)]">security: <span className="text-[var(--accent-emerald)]">'max'</span>,</div>
                    <div className="pl-8 text-[var(--text-muted)]">blockchain: <span className="text-[var(--accent-emerald)]">'integrated'</span>,</div>
                    <div className="pl-8 text-[var(--text-muted)]">support: <span className="text-[var(--accent-emerald)]">'lifetime'</span></div>
                    <div className="text-[var(--text-main)]">{'}'});</div>
                    <div className="text-[var(--text-muted)] mt-6">// Production ready in record time</div>
                    <div className="h-2 w-32 bg-cyan-500/50 animate-pulse rounded mt-2" />
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: SERVICES (BENTO BOX) */}
        <section 
          id="services"
          data-index="1"
          ref={el => sectionRefs.current[1] = el}
          className="min-h-screen w-full flex items-center justify-center py-24 px-4 md:px-12 relative bg-[var(--bg-main)]"
        >
          <div className="max-w-6xl w-full flex flex-col justify-center">
            <Reveal>
              <div className="mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-main)]">Our Expertise</h2>
                <p className="text-[var(--text-muted)] mt-2 text-lg">Comprehensive solutions for the modern web.</p>
              </div>
            </Reveal>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[minmax(180px,auto)] gap-4 lg:gap-6">
              
              {/* Box 1: AI (Large) */}
              <div className="md:col-span-2 md:row-span-2">
                <Reveal delay={100} className="h-full">
                  <div className={`h-full min-h-[300px] bg-gradient-to-br ${isDarkMode ? 'from-violet-900/40 to-slate-900' : 'from-violet-100 to-white'} border border-[var(--border)] rounded-3xl p-8 relative overflow-hidden hover:border-violet-500/50 hover:scale-[1.01] transition-all duration-300 group shadow-lg`}>
                    <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                      <MessageSquareCode className={`w-32 h-32 text-[var(--accent-violet)]`} />
                    </div>
                    <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4 text-[var(--accent-violet)]">
                          <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-main)] mb-2">Agentic AI & Chatbots</h3>
                        <p className="text-[var(--text-muted)] max-w-sm text-sm md:text-base">Fully integrated with MCP servers. We build intelligent agents that understand context, execute tasks, and integrate deeply with your existing infrastructure.</p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-4">
                        <span className="text-xs font-mono px-2 py-1 rounded bg-violet-500/10 border border-violet-500/20 text-[var(--accent-violet)]">LLM Integration</span>
                        <span className="text-xs font-mono px-2 py-1 rounded bg-violet-500/10 border border-violet-500/20 text-[var(--accent-violet)]">RAG Pipelines</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Box 2: Blockchain */}
              <div className="md:col-span-1 md:row-span-1">
                <Reveal delay={200} className="h-full">
                  <div className="h-full min-h-[200px] bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl p-6 hover:bg-opacity-80 hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <ShieldCheck className="w-8 h-8 text-[var(--accent-cyan)]" />
                      <ArrowRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] transition-colors -rotate-45 group-hover:rotate-0" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-main)]">Blockchain</h3>
                      <p className="text-sm text-[var(--text-muted)] mt-2">Smart contracts, dApps, and secure decentralized systems.</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Box 3: SaaS */}
              <div className="md:col-span-1 md:row-span-2">
                <Reveal delay={300} className="h-full">
                  <div className="h-full min-h-[300px] bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl p-6 flex flex-col justify-end hover:bg-opacity-80 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-md">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
                    <div className="relative z-10">
                      <Globe className="w-10 h-10 text-[var(--accent-cyan)] mb-4" />
                      <h3 className="text-xl font-bold text-[var(--text-main)]">SaaS Platforms</h3>
                      <p className="text-sm text-[var(--text-muted)] mt-2">Scalable multi-tenant architectures built for growth and recurring revenue.</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Box 4: Mobile */}
              <div className="md:col-span-1 md:row-span-1">
                <Reveal delay={400} className="h-full">
                  <div className="h-full min-h-[150px] bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl p-6 flex flex-col justify-center gap-4 hover:bg-opacity-80 hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--bg-input)] flex items-center justify-center flex-shrink-0">
                        <Smartphone className="w-5 h-5 text-[var(--text-main)]" />
                      </div>
                      <h3 className="text-lg font-bold text-[var(--text-main)]">Mobile Apps</h3>
                    </div>
                    <p className="text-xs text-[var(--text-muted)]">React Native & Native solutions.</p>
                  </div>
                </Reveal>
              </div>

               {/* Box 5: Custom Dev */}
               <div className="md:col-span-1 md:row-span-1">
                  <Reveal delay={500} className="h-full">
                    <div className="h-full min-h-[150px] bg-gradient-to-r from-[var(--bg-card-solid)] to-[var(--bg-input)] border border-[var(--border)] rounded-3xl p-6 flex items-center justify-center text-center cursor-pointer hover:border-[var(--accent-cyan)] hover:scale-[1.02] transition-all duration-300 shadow-sm" onClick={() => scrollToSection(3)}>
                        <div className="group">
                          <h3 className="text-lg font-bold text-[var(--text-main)] group-hover:text-[var(--accent-cyan)] transition-colors">View More</h3>
                          <p className="text-xs text-[var(--text-muted)]">Explore full catalog</p>
                        </div>
                    </div>
                  </Reveal>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: PHILOSOPHY/WHY US */}
        <section 
          id="philosophy"
          data-index="2"
          ref={el => sectionRefs.current[2] = el}
          className="min-h-screen w-full flex items-center justify-center py-24 px-6 bg-[var(--bg-main)] relative overflow-hidden"
        >
           {/* Grid Background */}
           <div className={`absolute inset-0 bg-[linear-gradient(to_right,${isDarkMode ? '#80808012' : '#00000008'}_1px,transparent_1px),linear-gradient(to_bottom,${isDarkMode ? '#80808012' : '#00000008'}_1px,transparent_1px)] bg-[size:24px_24px]`} />
           
           <div className="max-w-6xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <Reveal>
                  <h4 className="text-[var(--accent-amber)] font-bold uppercase tracking-widest mb-4">The Makeship Standard</h4>
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--text-main)]">
                    Stability meets <br />
                    <span className="text-[var(--text-muted)] line-through decoration-[var(--accent-amber)] decoration-4">Legacy Code</span> 
                    <span className="text-[var(--text-main)] ml-3">Innovation.</span>
                  </h2>
                </Reveal>
                
                <Reveal delay={200}>
                  <p className="text-lg text-[var(--text-muted)] mb-8 leading-relaxed">
                    We don't just ship code; we ship business value. Our systems are designed for high availability and zero downtime updates.
                  </p>
                </Reveal>
                
                <div className="space-y-6">
                  {[
                    { title: "Unlimited Post-Production Support", desc: "We stand by our code. Forever.", icon: Infinity },
                    { title: "Easy Integrations", desc: "Plug-and-play architecture for modern stacks.", icon: Code2 },
                    { title: "Highly Scalable", desc: "From 100 to 10M users without rewriting core logic.", icon: Zap }
                  ].map((item, i) => (
                    <Reveal key={i} delay={300 + (i * 100)}>
                      <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300">
                        <div className="mt-1 p-2 bg-amber-500/10 rounded-lg shrink-0 group-hover:bg-amber-500/20 transition-colors">
                          <item.icon className="w-6 h-6 text-[var(--accent-amber)]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[var(--text-main)]">{item.title}</h3>
                          <p className="text-[var(--text-muted)]">{item.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
             </div>

             <div className="relative mt-8 lg:mt-0">
                {/* Visualizing Stability */}
                <Reveal delay={500}>
                  <div className="relative z-10 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 md:p-8 shadow-2xl hover:border-amber-500/30 transition-colors duration-500">
                    <div className="flex justify-between items-center mb-8">
                        <div className="text-sm font-mono text-[var(--text-muted)]">System Status</div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-xs font-bold text-[var(--accent-emerald)] uppercase">Operational</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {['API Latency', 'Database Health', 'Server Load', 'Error Rate'].map((metric, i) => (
                          <div key={i} className="space-y-2">
                            <div className="flex justify-between text-xs font-bold text-[var(--text-muted)] uppercase">
                                <span>{metric}</span>
                                <span className="text-[var(--accent-emerald)]">{i === 3 ? '0.00%' : '99.9%'}</span>
                            </div>
                            <div className="h-2 w-full bg-[var(--bg-input)] rounded-full overflow-hidden">
                                <div 
                                  className={`h-full rounded-full transition-all duration-1000 ${i === 2 ? 'bg-[var(--accent-amber)]' : 'bg-[var(--accent-emerald)]'}`} 
                                  style={{ width: i === 3 ? '1%' : `${85 + Math.random() * 10}%` }}
                                />
                            </div>
                          </div>
                        ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-[var(--border)]">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-full bg-[var(--bg-input)] flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-6 h-6 text-[var(--accent-amber)]" />
                          </div>
                          <div>
                            <div className="text-[var(--text-main)] font-bold">Guaranteed Uptime</div>
                            <div className="text-xs text-[var(--text-muted)]">Service Level Agreement included</div>
                          </div>
                        </div>
                    </div>
                  </div>
                </Reveal>
                
                {/* Decorative background blur */}
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-amber-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />
             </div>
           </div>
        </section>

        {/* SECTION 4: CONTACT / LEADS (INTERACTIVE BENTO FORM) */}
        <section 
          id="contact"
          data-index="3"
          ref={el => sectionRefs.current[3] = el}
          className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 relative bg-[var(--bg-main)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.05),transparent_50%)]" />
          
          <div className="max-w-7xl w-full z-10 mb-20">
            <Reveal>
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-6xl font-bold text-[var(--text-main)] mb-4">Let's build something <span className="text-[var(--accent-emerald)]">legendary.</span></h2>
                <p className="text-[var(--text-muted)] text-lg">Tell us about your project to get a free consultation within 24 hours.</p>
              </div>
            </Reveal>

            {/* BENTO FORM CONTAINER */}
            <form onSubmit={(e) => e.preventDefault()} className="glass-panel p-6 md:p-10 rounded-3xl relative">
              {/* <div className="absolute top-0 right-0 p-6 hidden md:flex items-center gap-2 text-xs font-mono text-[var(--accent-emerald)] opacity-60">
                 <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                 SYSTEM READY
              </div> */}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* LEFT COLUMN */}
                <div className="space-y-6">
                  
                  {/* Identity Box */}
                  <div className="bg-[var(--bg-card-solid)] p-6 rounded-2xl border border-[var(--border)] transition-all hover:border-[var(--border-hover)]">
                     <h3 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-widest mb-4 flex items-center gap-2">
                       <User className="w-4 h-4 text-[var(--accent-cyan)]" /> Who are you?
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative group/input">
                           <input type="text" placeholder="Name" className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-main)] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all outline-none" required />
                        </div>
                        <div className="relative group/input">
                           <input type="email" placeholder="Email" className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-main)] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all outline-none" required />
                        </div>
                     </div>
                  </div>

                  {/* Project Type Grid (Multi-Select & Describe Mode) */}
                  <div className="bg-[var(--bg-card-solid)] p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--border-hover)] transition-all min-h-[300px]">
                    
                    {/* Header with Mode Toggle */}
                    <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                      <h3 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-widest flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[var(--accent-violet)]" /> Project Type
                      </h3>
                      
                      <div className="flex bg-[var(--bg-input)] p-1 rounded-lg border border-[var(--border)]">
                        <button
                          type="button"
                          onClick={() => setProjectTypeMode('select')}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all
                            ${projectTypeMode === 'select' 
                              ? 'bg-[var(--accent-violet)] text-white shadow-sm' 
                              : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                            }
                          `}
                        >
                          <LayoutGrid className="w-3 h-3" /> Select
                        </button>
                        <button
                          type="button"
                          onClick={() => setProjectTypeMode('describe')}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all
                            ${projectTypeMode === 'describe' 
                              ? 'bg-[var(--accent-violet)] text-white shadow-sm' 
                              : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                            }
                          `}
                        >
                          <Edit3 className="w-3 h-3" /> Describe
                        </button>
                      </div>
                    </div>

                    {projectTypeMode === 'select' ? (
                      <>
                        {/* Step 1: Broad Category Multi-Selection */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {projectCategories.map(cat => (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => toggleCategory(cat.id)}
                              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all
                                ${selectedCategories.includes(cat.id) 
                                  ? 'bg-[var(--accent-violet)] text-white border-[var(--accent-violet)] shadow-md' 
                                  : 'bg-[var(--bg-input)] text-[var(--text-muted)] border-[var(--border)] hover:border-[var(--accent-violet)]'
                                }
                              `}
                            >
                              <cat.icon className="w-4 h-4" />
                              <span className="text-xs font-bold">{cat.name}</span>
                            </button>
                          ))}
                        </div>

                        {/* Step 2: Specific Subtypes Stacked */}
                        <div className="space-y-6">
                           {selectedCategories.length === 0 && (
                              <div className="text-center py-8 text-[var(--text-muted)] opacity-60 flex flex-col items-center">
                                 <LayoutGrid className="w-8 h-8 mb-2 opacity-50" />
                                 <p className="text-xs">Select a category above to see options</p>
                              </div>
                           )}

                           {selectedCategories.map(catId => (
                             <div key={catId} className="animate-float" style={{ animation: 'none' }}>
                               <h4 className="text-xs font-bold text-[var(--text-main)] opacity-70 mb-3 px-1 border-l-2 border-[var(--accent-violet)] pl-2">
                                 {projectCategories.find(c => c.id === catId)?.name}
                               </h4>
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                 {projectSubtypes[catId].map((item) => (
                                   <label key={item.name} className="cursor-pointer group relative">
                                     <input type="checkbox" name="project_type" className="card-radio hidden" />
                                     <div className="h-full p-4 rounded-xl bg-[var(--bg-input)] border border-[var(--border)] flex items-start gap-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--border-hover)] group-hover:shadow-lg">
                                        <div className="icon-box p-2 rounded-lg bg-[var(--bg-card-solid)] text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors shrink-0 mt-1">
                                           <item.icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                          <span className="text-sm font-bold text-[var(--text-main)] leading-tight">{item.name}</span>
                                          <span className="text-xs text-[var(--text-muted)] leading-relaxed opacity-80">{item.desc}</span>
                                        </div>
                                        
                                        {/* Selected Indicator */}
                                        <div className="check-indicator absolute top-3 right-3 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center opacity-0 scale-50 transition-all duration-300 shadow-md">
                                           <CheckCircle2 className="w-3.5 h-3.5" />
                                        </div>
                                     </div>
                                   </label>
                                 ))}
                               </div>
                             </div>
                           ))}
                        </div>
                      </>
                    ) : (
                      /* Describe Mode View */
                      <div className="h-full flex flex-col animate-float" style={{ animation: 'none' }}>
                         <div className="bg-[var(--bg-input)] rounded-xl border border-[var(--border)] p-4 flex-1">
                            <label className="block text-xs font-bold text-[var(--text-muted)] uppercase mb-3">
                               What exactly do you need?
                            </label>
                            <textarea 
                              className="w-full h-40 bg-transparent border-0 focus:ring-0 text-[var(--text-main)] placeholder-slate-500/50 resize-none"
                              placeholder="e.g. I need a Tinder-style app but for adopting shelter dogs, with a subscription model for shelters..."
                            />
                         </div>
                         <p className="text-[10px] text-[var(--text-muted)] mt-3 flex items-center gap-2">
                            <Lightbulb className="w-3 h-3 text-[var(--accent-amber)]" />
                            Tip: Be as specific as possible about features and goals.
                         </p>
                      </div>
                    )}
                  </div>

                </div>

                {/* RIGHT COLUMN */}
                <div className="space-y-6">
                  
                   {/* Project Stage */}
                   <div className="bg-[var(--bg-card-solid)] p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--border-hover)] transition-all">
                    <h3 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-widest mb-4 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-[var(--accent-amber)]" /> Current Stage
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { label: "Just an idea", icon: Lightbulb },
                        { label: "Prototype", icon: PenTool },
                        { label: "MVP Needed", icon: Rocket },
                        { label: "Scaling", icon: TrendingUp }
                      ].map((stage) => (
                        <label key={stage.label} className="cursor-pointer flex-1 min-w-[140px]">
                           <input type="radio" name="stage" className="card-radio hidden" />
                           <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border)] transition-all hover:border-[var(--border-hover)]">
                              <stage.icon className="w-4 h-4 text-[var(--text-muted)] icon-box" />
                              <span className="text-sm font-medium text-[var(--text-muted)]">{stage.label}</span>
                           </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Description Box */}
                  <div className="bg-[var(--bg-card-solid)] p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--border-hover)] transition-all">
                     <h3 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-widest mb-4 flex items-center gap-2">
                       <MessageSquare className="w-4 h-4 text-[var(--accent-emerald)]" /> Additional Details
                     </h3>
                     <textarea rows="4" placeholder="Any specific requirements, competitors, or questions?" className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-main)] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all outline-none resize-none placeholder-slate-500/50"></textarea>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {/* Timeline */}
                     <div className="bg-[var(--bg-card-solid)] p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--border-hover)] transition-all">
                        <h3 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-widest mb-4 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-400" /> Timeline
                        </h3>
                        <div className="relative group">
                           <select className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-main)] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all outline-none appearance-none cursor-pointer group-hover:border-[var(--border-hover)]">
                              <option>ASAP (1-2 weeks)</option>
                              <option>1 month</option>
                              <option>2-3 months</option>
                              <option>Flexible / Not sure</option>
                           </select>
                           <ChevronDown className="absolute right-4 top-3.5 w-4 h-4 text-[var(--text-muted)] pointer-events-none group-hover:text-[var(--accent-emerald)] transition-colors" />
                        </div>
                     </div>

                     {/* Budget */}
                     <div className="bg-[var(--bg-card-solid)] p-6 rounded-2xl border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:shadow-[0_0_25px_rgba(16,185,129,0.1)] transition-all">
                        <h3 className="text-sm font-bold text-[var(--accent-emerald)] uppercase tracking-widest mb-4 flex items-center gap-2">
                          <DollarSign className="w-4 h-4" /> Budget Range
                        </h3>
                        <div className="relative group">
                           <select className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-main)] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all outline-none appearance-none cursor-pointer group-hover:border-emerald-500/50">
                              <option>Not sure / Need guidance</option>
                              <option>Under $1,000</option>
                              <option>$1,000 - $3,000</option>
                              <option>$3,000 - $10,000</option>
                              <option>$10,000+</option>
                           </select>
                           <ChevronDown className="absolute right-4 top-3.5 w-4 h-4 text-[var(--text-muted)] pointer-events-none group-hover:text-[var(--accent-emerald)] transition-colors" />
                        </div>
                     </div>
                  </div>

                </div>
              </div>

              {/* Submit Action */}
              <div className="mt-8 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-6">
                 <p className="text-xs text-[var(--text-muted)] max-w-sm text-center md:text-left">
                    By submitting this form, you agree to our privacy policy. We typically reply within 24 hours.
                 </p>
                 <button className="w-full md:w-auto px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 transform hover:-translate-y-1 group">
                    Request Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>

            </form>

          </div>

          {/* Footer */}
          <div className="absolute bottom-4 w-full max-w-6xl px-6 border-t border-[var(--border)] pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-[var(--text-muted)] text-xs">
             <div>
                Made by <span className="text-[var(--text-muted)] font-bold hover:text-[var(--accent-emerald)] cursor-pointer transition-colors">makeship.dev</span> team with love.
             </div>
             <div className="flex items-center gap-6">
                <a href="#" className="hover:text-[var(--accent-emerald)] transition-colors"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="hover:text-[var(--accent-emerald)] transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="hover:text-[var(--accent-emerald)] transition-colors"><Mail className="w-4 h-4" /></a>
                <a href="#" className="hover:text-[var(--accent-emerald)] transition-colors"><Facebook className="w-4 h-4" /></a>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default App;