import React, { useState } from 'react';
import {
    User,
    Layers,
    LayoutGrid,
    Edit3,
    Globe,
    Smartphone,
    Cpu,
    ShieldCheck,
    Database,
    Layout,
    ShoppingCart,
    Server,
    Zap,
    MessageSquareCode,
    Bot,
    TrendingUp,
    Search,
    Rocket,
    Lightbulb,
    PenTool,
    MessageSquare,
    CheckCircle2,
    Code2
} from 'lucide-react';
import Reveal from './Reveal';

const Contact = () => {
    const [selectedCategories, setSelectedCategories] = useState(['web']); // Multi-select support
    const [projectTypeMode, setProjectTypeMode] = useState('select'); // 'select' | 'describe'
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = new FormData(e.target);
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbzoBjgeRM9mv-miCWd2VBrLNPRsxpXXawJtrpq0Z4NF1WTw2SATy_Fj5tfer6EMrMz0Rw/exec';

        try {
            await fetch(scriptUrl, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // Google Script requires no-cors if not using a redirect
            });
            setSubmitted(true);
        } catch (error) {
            console.error('Error!', error.message);
        } finally {
            setSubmitting(false);
        }
    };

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

    const toggleCategory = (id) => {
        setSelectedCategories(prev =>
            prev.includes(id)
                ? prev.filter(c => c !== id)
                : [...prev, id]
        );
    };

    return (
        <section
            id="contact"
            className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 relative bg-[var(--bg-main)]"
        >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(251,191,36,0.05),transparent_50%)]" />

            <div className="max-w-7xl w-full z-10 mb-20">
                <Reveal>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-6xl font-bold text-[var(--text-main)] mb-4">Let's build something <span className="text-[var(--accent-amber)]">legendary.</span></h2>
                        <p className="text-[var(--text-muted)] text-lg">Tell us about your project to get a free consultation within 24 hours.</p>
                    </div>
                </Reveal>

                {/* BENTO FORM CONTAINER */}
                <form onSubmit={handleSubmit} className="glass-panel p-6 md:p-10 rounded-3xl relative">

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
                                        <input name="name" type="text" placeholder="Name" className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-main)] focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all outline-none" required />
                                    </div>
                                    <div className="relative group/input">
                                        <input name="email" type="email" placeholder="Email" className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-main)] focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all outline-none" required />
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
                                                                <input type="checkbox" name="project_type" value={item.name} className="card-radio hidden" />
                                                                <div className="h-full p-4 rounded-xl bg-[var(--bg-input)] border border-[var(--border)] flex items-start gap-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--border-hover)] group-hover:shadow-lg">
                                                                    <div className="icon-box p-2 rounded-lg bg-[var(--bg-card-solid)] text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors shrink-0 mt-1">
                                                                        <item.icon className="w-5 h-5" />
                                                                    </div>
                                                                    <div className="flex flex-col gap-1">
                                                                        <span className="text-sm font-bold text-[var(--text-main)] leading-tight">{item.name}</span>
                                                                        <span className="text-xs text-[var(--text-muted)] leading-relaxed opacity-80">{item.desc}</span>
                                                                    </div>

                                                                    {/* Selected Indicator */}
                                                                    <div className="check-indicator absolute top-3 right-3 w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center opacity-0 scale-50 transition-all duration-300 shadow-md">
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
                                                name="project_description"
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
                                            <input type="radio" name="stage" value={stage.label} className="card-radio hidden" />
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
                                    <MessageSquare className="w-4 h-4 text-[var(--accent-amber)]" /> Additional Details
                                </h3>
                                <textarea name="additional_details" rows="4" placeholder="Any specific requirements, competitors, or questions?" className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-main)] focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all outline-none resize-none placeholder-slate-500/50"></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={submitting || submitted}
                                className={`w-full py-5 rounded-2xl font-bold text-lg transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 ${submitted
                                    ? 'bg-green-500 shadow-[0_4px_20px_rgba(34,197,94,0.3)]'
                                    : 'bg-[var(--accent-amber)] shadow-[0_4px_20px_rgba(251,191,36,0.3)] hover:shadow-[0_8px_30px_rgba(251,191,36,0.4)] hover:brightness-110'
                                    }`}
                            >
                                <Rocket className="w-6 h-6" />
                                {submitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Launch Project'}
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
