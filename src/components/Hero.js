import React from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const Hero = ({ scrollToSection, isDarkMode }) => {
    return (
        <section
            id="hero"
            className="min-h-[90vh] w-full relative flex items-center justify-center py-20 px-6 md:px-20 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.1),transparent_40%)] animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(217,119,6,0.08),transparent_40%)] animate-pulse" style={{ animationDuration: '7s' }} />

            <div className="max-w-4xl w-full z-10 flex flex-col items-center justify-center text-center gap-12">
                <div className="space-y-8 flex flex-col items-center">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[var(--accent-amber)] text-xs font-medium uppercase tracking-widest">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className={`relative inline-flex rounded-full h-2 w-2 ${isDarkMode ? 'bg-amber-500' : 'bg-amber-600'}`}></span>
                            </span>
                            Now Accepting New Projects
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-[var(--text-main)]">
                            Make it <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Ship it</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={400}>
                        <p className="text-[var(--text-muted)] text-lg md:text-xl max-w-lg leading-relaxed mx-auto">
                            makeship.dev is your elite engineering partner. We craft scalable Blockchain apps, Agentic AI, and high-performance SaaS platforms.
                        </p>
                    </Reveal>

                    <Reveal delay={600}>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <button
                                onClick={() => scrollToSection(3)}
                                className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.4)] flex items-center justify-center gap-2"
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

                <Reveal delay={800}>
                    <div className="relative w-80 h-80 md:w-[36rem] md:h-[36rem] mx-auto mt-12">
                        <img
                            src={require('../assets/hero-boat.png')}
                            alt="Ship it"
                            className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(251,191,36,0.2)]"
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Hero;
