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

            <div className="max-w-7xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="space-y-8">
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
                            Make it <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                                Ship it.
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

                {/* Abstract visual representation of code/structure */}
                <div className="hidden lg:block relative h-[500px] w-full">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl blur-3xl animate-float" />
                    <div className="relative h-full w-full bg-[var(--bg-card)] backdrop-blur-sm border border-[var(--border)] rounded-2xl p-8 shadow-2xl flex flex-col gap-6 animate-float-delayed">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                            <div className="w-3 h-3 rounded-full bg-orange-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        </div>
                        <div className="space-y-4 font-mono text-sm md:text-base opacity-70">
                            <div className="flex flex-wrap gap-x-3 gap-y-1">
                                <span className="text-[var(--accent-amber)]">const</span>
                                <span className="text-[var(--accent-amber)]">future</span>
                                <span className="text-[var(--text-main)]">=</span>
                                <span className="text-[var(--accent-amber)]">await</span>
                                <span className="text-amber-400">makeship</span>
                                <span className="text-[var(--text-main)]">.</span>
                                <span className="text-orange-300">build</span>
                                <span className="text-[var(--text-main)]">({'{'}</span>
                            </div>
                            <div className="pl-8 text-[var(--text-muted)]">scale: <span className="text-[var(--accent-amber)]">'unlimited'</span>,</div>
                            <div className="pl-8 text-[var(--text-muted)]">ai: <span className="text-[var(--accent-amber)]">true</span>,</div>
                            <div className="pl-8 text-[var(--text-muted)]">security: <span className="text-[var(--accent-amber)]">'max'</span>,</div>
                            <div className="pl-8 text-[var(--text-muted)]">blockchain: <span className="text-[var(--accent-amber)]">'integrated'</span>,</div>
                            <div className="pl-8 text-[var(--text-muted)]">support: <span className="text-[var(--accent-amber)]">'lifetime'</span></div>
                            <div className="text-[var(--text-main)]">{'}'});</div>
                            <div className="text-[var(--text-muted)] mt-6">{'// Production ready in record time'}</div>
                            <div className="h-2 w-32 bg-amber-500/50 animate-pulse rounded mt-2" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
