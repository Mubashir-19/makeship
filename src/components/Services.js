import React from 'react';
import {
    MessageSquareCode,
    Zap,
    ShieldCheck,
    ArrowRight,
    Globe,
    Smartphone
} from 'lucide-react';
import Reveal from './Reveal';

const Services = ({ scrollToSection, isDarkMode }) => {
    return (
        <section
            id="services"
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
    );
};

export default Services;
