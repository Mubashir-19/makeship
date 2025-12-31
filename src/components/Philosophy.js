import React from 'react';
import {
    Infinity,
    Code2,
    Zap,
    CheckCircle2
} from 'lucide-react';
import Reveal from './Reveal';

const Philosophy = ({ isDarkMode }) => {
    return (
        <section
            id="philosophy"
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
                                <div className="flex items-center gap-2 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">
                                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                                    <span className="text-xs font-bold text-[var(--accent-amber)] uppercase">Operational</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {['Database Health', 'Server Load', 'Error Rate'].map((metric, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex justify-between text-xs font-bold text-[var(--text-muted)] uppercase">
                                            <span>{metric}</span>
                                            <span className="text-[var(--accent-amber)]">{i === 2 ? '0.00%' : '99.9%'}</span>
                                        </div>
                                        <div className="h-2 w-full bg-[var(--bg-input)] rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full transition-all duration-1000 ${i === 2 ? 'bg-[var(--accent-amber)]' : 'bg-[var(--accent-amber)]'}`}
                                                style={{ width: i === 2 ? '1%' : `${85 + Math.random() * 10}%` }}
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
    );
};

export default Philosophy;
