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
            className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 relative bg-background-dark"
        >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,107,0,0.05),transparent_70%)]" />

            <div className="max-w-7xl w-full z-10 mb-20">
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-primary tracking-wide uppercase mb-4 block font-sans">Contact Us</span>
                        <h2 className="text-4xl lg:text-7xl font-display font-bold text-text-dark mb-6 tracking-tight">
                            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">legendary.</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
                            Tell us about your project to get a free consultation within 24 hours.
                        </p>
                    </div>
                </Reveal>

                {/* BENTO FORM CONTAINER */}
                <form onSubmit={handleSubmit} className="bg-surface-dark border border-white/10 p-6 md:p-12 rounded-[2.5rem] relative overflow-hidden backdrop-blur-sm shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">

                        {/* LEFT COLUMN */}
                        <div className="space-y-8">

                            {/* Identity Box */}
                            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 transition-all hover:border-white/10">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                    <User className="w-4 h-4 text-primary" /> Who are you?
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative group/input">
                                        <input name="name" type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-text-dark focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all outline-none placeholder-gray-600" required />
                                    </div>
                                    <div className="relative group/input">
                                        <input name="email" type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-text-dark focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all outline-none placeholder-gray-600" required />
                                    </div>
                                </div>
                            </div>

                            {/* Project Type Grid (Multi-Select & Describe Mode) */}
                            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all min-h-[400px]">

                                {/* Header with Mode Toggle */}
                                <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                        <Layers className="w-4 h-4 text-primary" /> Project Type
                                    </h3>

                                    <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
                                        <button
                                            type="button"
                                            onClick={() => setProjectTypeMode('select')}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all
                        ${projectTypeMode === 'select'
                                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                                    : 'text-gray-500 hover:text-white'
                                                }
                      `}
                                        >
                                            <LayoutGrid className="w-3 h-3" /> Select
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setProjectTypeMode('describe')}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all
                        ${projectTypeMode === 'describe'
                                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                                    : 'text-gray-500 hover:text-white'
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
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {projectCategories.map(cat => (
                                                <button
                                                    key={cat.id}
                                                    type="button"
                                                    onClick={() => toggleCategory(cat.id)}
                                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all
                            ${selectedCategories.includes(cat.id)
                                                            ? 'bg-primary/20 text-primary border-primary/50 shadow-lg shadow-primary/5'
                                                            : 'bg-white/5 text-gray-400 border-white/10 hover:border-primary/50'
                                                        }
                          `}
                                                >
                                                    <cat.icon className="w-4 h-4" />
                                                    {cat.name}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Step 2: Specific Subtypes Stacked */}
                                        <div className="space-y-8 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                            {selectedCategories.length === 0 && (
                                                <div className="text-center py-12 text-gray-600 flex flex-col items-center">
                                                    <LayoutGrid className="w-12 h-12 mb-4 opacity-20" />
                                                    <p className="text-sm">Select a category above to explore our specialties</p>
                                                </div>
                                            )}

                                            {selectedCategories.map(catId => (
                                                <div key={catId} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 px-1 flex items-center gap-3">
                                                        <span className="w-2 h-[1px] bg-primary/50"></span>
                                                        {projectCategories.find(c => c.id === catId)?.name}
                                                    </h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        {projectSubtypes[catId].map((item) => (
                                                            <label key={item.name} className="cursor-pointer group relative">
                                                                <input type="checkbox" name="project_type" value={item.name} className="peer hidden" />
                                                                <div className="h-full p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 transition-all duration-300 peer-checked:bg-primary/5 peer-checked:border-primary/40 group-hover:border-white/20 group-hover:translate-x-1">
                                                                    <div className="p-2.5 rounded-lg bg-surface-dark border border-white/5 text-gray-500 group-hover:text-primary transition-colors shrink-0">
                                                                        <item.icon className="w-5 h-5" />
                                                                    </div>
                                                                    <div className="flex flex-col gap-1">
                                                                        <span className="text-sm font-bold text-text-dark leading-tight group-hover:text-white transition-colors">{item.name}</span>
                                                                        <span className="text-[11px] text-gray-500 leading-relaxed font-sans">{item.desc}</span>
                                                                    </div>

                                                                    <div className="absolute top-4 right-4 w-4 h-4 rounded-full border border-white/20 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-all opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100">
                                                                        <CheckCircle2 className="w-3 h-3 text-white" />
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
                                    <div className="h-full flex flex-col animate-in fade-in duration-500">
                                        <div className="bg-white/5 rounded-3xl border border-white/10 p-6 flex-1 flex flex-col">
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                                                What exactly do you need?
                                            </label>
                                            <textarea
                                                name="project_description"
                                                className="w-full flex-1 bg-transparent border-0 focus:ring-0 text-text-dark placeholder-gray-600 resize-none font-sans text-lg"
                                                placeholder="Tell us about your mission, features, and target audience..."
                                            />
                                        </div>
                                        <p className="text-[11px] text-gray-500 mt-4 flex items-center gap-2 px-2">
                                            <Lightbulb className="w-3.5 h-3.5 text-primary" />
                                            Tip: Describe your goals and we'll handle the technical blueprint.
                                        </p>
                                    </div>
                                )}
                            </div>

                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="space-y-8">

                            {/* Project Stage */}
                            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-primary" /> Current Stage
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { label: "Just an idea", icon: Lightbulb },
                                        { label: "Prototype", icon: PenTool },
                                        { label: "MVP Needed", icon: Rocket },
                                        { label: "Scaling", icon: TrendingUp }
                                    ].map((stage) => (
                                        <label key={stage.label} className="cursor-pointer">
                                            <input type="radio" name="stage" value={stage.label} className="peer hidden" />
                                            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 transition-all hover:bg-white/10 peer-checked:bg-primary/10 peer-checked:border-primary/50">
                                                <stage.icon className="w-4 h-4 text-gray-500 peer-checked:text-primary transition-colors" />
                                                <span className="text-sm font-medium text-gray-400 peer-checked:text-white transition-colors">{stage.label}</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Additional Details */}
                            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4 text-primary" /> Additional Details
                                </h3>
                                <textarea 
                                    name="additional_details" 
                                    rows="6" 
                                    placeholder="Any specific requirements, budget range, or timeline expectations?" 
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-text-dark focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all outline-none resize-none placeholder-gray-600 font-sans"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={submitting || submitted}
                                className={`w-full py-6 rounded-2xl font-display font-bold text-xl transition-all transform hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-3 relative overflow-hidden group ${submitted
                                    ? 'bg-green-500 text-white shadow-xl shadow-green-500/20'
                                    : 'bg-primary text-white shadow-xl shadow-primary/30 hover:shadow-primary/40'
                                    }`}
                            >
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                <Rocket className={`w-6 h-6 ${submitting ? 'animate-bounce' : ''}`} />
                                <span className="relative">
                                    {submitting ? 'Preparing Launch...' : submitted ? 'Mission Received!' : 'Launch Project'}
                                </span>
                            </button>
                            
                            {submitted && (
                                <p className="text-center text-sm text-green-500 font-medium animate-in fade-in slide-in-from-top-2">
                                    We'll be in touch within 24 hours. Get ready.
                                </p>
                            )}

                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
