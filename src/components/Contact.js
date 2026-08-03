import React, { useState } from 'react';
import {
    User,
    Layers,
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
    Code2,
    ArrowRight,
    ArrowLeft
} from 'lucide-react';
import Reveal from './Reveal';

const STEPS = [
    { id: 1, label: 'You' },
    { id: 2, label: 'Project' },
    { id: 3, label: 'Stage' },
    { id: 4, label: 'Details' },
];

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

const stages = [
    { label: "Just an idea", icon: Lightbulb },
    { label: "Prototype", icon: PenTool },
    { label: "MVP Needed", icon: Rocket },
    { label: "Scaling", icon: TrendingUp },
];

const Contact = ({ variant = 'page', onSubmitted }) => {
    const isModal = variant === 'modal';
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedSubtypes, setSelectedSubtypes] = useState([]);
    const [projectDescription, setProjectDescription] = useState('');
    const [stage, setStage] = useState('');
    const [additionalDetails, setAdditionalDetails] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const toggleCategory = (id) => {
        setSelectedCategories(prev =>
            prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
        );
    };

    const toggleSubtype = (name) => {
        setSelectedSubtypes(prev =>
            prev.includes(name) ? prev.filter(s => s !== name) : [...prev, name]
        );
    };

    const canAdvance = () => {
        if (step === 1) return name.trim() !== '' && email.trim() !== '';
        return true;
    };

    const goNext = () => canAdvance() && setStep(s => Math.min(s + 1, STEPS.length));
    const goBack = () => setStep(s => Math.max(s - 1, 1));

    const handleSubmit = async () => {
        setSubmitting(true);

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        selectedSubtypes.forEach(s => formData.append('project_type', s));
        if (projectDescription.trim()) formData.append('project_description', projectDescription);
        if (stage) formData.append('stage', stage);
        if (additionalDetails.trim()) formData.append('additional_details', additionalDetails);
        formData.append('security_token', 'makeship_secure_2024_xyz'); // Matches Apps Script SHARED_SECRET

        const scriptUrl = 'https://script.google.com/macros/s/AKfycbzoBjgeRM9mv-miCWd2VBrLNPRsxpXXawJtrpq0Z4NF1WTw2SATy_Fj5tfer6EMrMz0Rw/exec';

        try {
            await fetch(scriptUrl, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });
            setSubmitted(true);
            sessionStorage.setItem('makeship_lead_submitted', '1');
            onSubmitted?.();
        } catch (error) {
            console.error('Error!', error.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section
            id={isModal ? undefined : "contact"}
            className={isModal ? "w-full" : "min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 relative bg-background-dark"}
        >
            {!isModal && <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,107,0,0.05),transparent_70%)]" />}

            <div className={isModal ? "w-full" : "max-w-2xl w-full z-10"}>
                <Reveal>
                    <div className={isModal ? "text-center mb-8" : "text-center mb-12"}>
                        {!isModal && <span className="text-sm font-semibold text-primary tracking-wide uppercase mb-4 block font-sans">Contact Us</span>}
                        <h2 className={isModal ? "text-2xl md:text-3xl font-display font-bold text-text-dark mb-3 tracking-tight" : "text-4xl lg:text-6xl font-display font-bold text-text-dark mb-6 tracking-tight"}>
                            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">legendary.</span>
                        </h2>
                        {!isModal && (
                            <p className="text-gray-400 text-lg max-w-xl mx-auto font-sans">
                                A few quick questions to get you a free consultation within 24 hours.
                            </p>
                        )}
                    </div>
                </Reveal>

                <form onSubmit={(e) => e.preventDefault()} className={isModal ? "bg-surface-dark border border-white/10 p-6 rounded-[2rem] relative overflow-hidden" : "bg-surface-dark border border-white/10 p-6 md:p-10 rounded-[2.5rem] relative overflow-hidden backdrop-blur-sm shadow-2xl"}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

                    {!submitted ? (
                        <div className="relative z-10">
                            {/* Progress */}
                            <div className="flex items-center justify-center gap-3 mb-10">
                                {STEPS.map((s, i) => (
                                    <React.Fragment key={s.id}>
                                        <div className="flex flex-col items-center gap-2">
                                            <div className={`w-3 h-3 rounded-full transition-all ${step >= s.id ? 'bg-primary' : 'bg-white/10'}`} />
                                            <span className={`text-[10px] font-bold uppercase tracking-widest ${step >= s.id ? 'text-primary' : 'text-gray-600'}`}>{s.label}</span>
                                        </div>
                                        {i < STEPS.length - 1 && (
                                            <div className={`w-10 h-[1px] mb-5 ${step > s.id ? 'bg-primary' : 'bg-white/10'}`} />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>

                            {/* Step 1: Identity */}
                            {step === 1 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                        <User className="w-4 h-4 text-primary" /> Who are you?
                                    </h3>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-text-dark focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all outline-none placeholder-gray-600"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-text-dark focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all outline-none placeholder-gray-600"
                                    />
                                </div>
                            )}

                            {/* Step 2: Project Type */}
                            {step === 2 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                        <Layers className="w-4 h-4 text-primary" /> What do you need?
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {projectCategories.map(cat => (
                                            <button
                                                key={cat.id}
                                                type="button"
                                                onClick={() => toggleCategory(cat.id)}
                                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all
                                                ${selectedCategories.includes(cat.id)
                                                        ? 'bg-primary/20 text-primary border-primary/50'
                                                        : 'bg-white/5 text-gray-400 border-white/10 hover:border-primary/50'
                                                    }`}
                                            >
                                                <cat.icon className="w-4 h-4" />
                                                {cat.name}
                                            </button>
                                        ))}
                                    </div>

                                    {selectedCategories.length > 0 ? (
                                        <div className="space-y-6 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
                                            {selectedCategories.map(catId => (
                                                <div key={catId}>
                                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 px-1 flex items-center gap-3">
                                                        <span className="w-2 h-[1px] bg-primary/50"></span>
                                                        {projectCategories.find(c => c.id === catId)?.name}
                                                    </h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        {projectSubtypes[catId].map((item) => (
                                                            <label key={item.name} className="cursor-pointer group relative">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedSubtypes.includes(item.name)}
                                                                    onChange={() => toggleSubtype(item.name)}
                                                                    className="peer hidden"
                                                                />
                                                                <div className="h-full p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 transition-all duration-300 peer-checked:bg-primary/5 peer-checked:border-primary/40 group-hover:border-white/20">
                                                                    <div className="p-2 rounded-lg bg-surface-dark border border-white/5 text-gray-500 group-hover:text-primary transition-colors shrink-0">
                                                                        <item.icon className="w-4 h-4" />
                                                                    </div>
                                                                    <div className="flex flex-col gap-0.5">
                                                                        <span className="text-sm font-bold text-text-dark leading-tight">{item.name}</span>
                                                                        <span className="text-[11px] text-gray-500 leading-relaxed font-sans">{item.desc}</span>
                                                                    </div>
                                                                    <div className="absolute top-3 right-3 w-4 h-4 rounded-full border border-white/20 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-all opacity-0 peer-checked:opacity-100">
                                                                        <CheckCircle2 className="w-3 h-3 text-white" />
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-sm text-gray-500 px-1">Pick a category above, or just tell us in your own words below.</p>
                                    )}

                                    <textarea
                                        value={projectDescription}
                                        onChange={(e) => setProjectDescription(e.target.value)}
                                        rows="3"
                                        placeholder="Or describe your project in your own words..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-text-dark focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all outline-none resize-none placeholder-gray-600 font-sans text-sm"
                                    />
                                </div>
                            )}

                            {/* Step 3: Stage */}
                            {step === 3 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4 text-primary" /> What stage are you at?
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {stages.map((s) => (
                                            <label key={s.label} className="cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="stage"
                                                    checked={stage === s.label}
                                                    onChange={() => setStage(s.label)}
                                                    className="peer hidden"
                                                />
                                                <div className="flex items-center gap-3 p-5 rounded-xl bg-white/5 border border-white/10 transition-all hover:bg-white/10 peer-checked:bg-primary/10 peer-checked:border-primary/50">
                                                    <s.icon className="w-4 h-4 text-gray-500 peer-checked:text-primary transition-colors" />
                                                    <span className="text-sm font-medium text-gray-400 peer-checked:text-white transition-colors">{s.label}</span>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Details */}
                            {step === 4 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                        <MessageSquare className="w-4 h-4 text-primary" /> Anything else?
                                    </h3>
                                    <textarea
                                        value={additionalDetails}
                                        onChange={(e) => setAdditionalDetails(e.target.value)}
                                        rows="6"
                                        placeholder="Specific requirements, budget range, or timeline expectations? (optional)"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-text-dark focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all outline-none resize-none placeholder-gray-600 font-sans"
                                    />
                                </div>
                            )}

                            {/* Nav */}
                            <div className="flex items-center justify-between mt-10">
                                <button
                                    type="button"
                                    onClick={goBack}
                                    disabled={step === 1}
                                    className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-gray-400 hover:text-white'}`}
                                >
                                    <ArrowLeft className="w-4 h-4" /> Back
                                </button>

                                {step < STEPS.length ? (
                                    <button
                                        type="button"
                                        onClick={goNext}
                                        disabled={!canAdvance()}
                                        className="flex items-center gap-2 px-8 py-4 rounded-xl font-display font-bold text-white bg-primary hover:shadow-xl hover:shadow-primary/30 transition-all disabled:opacity-40 disabled:pointer-events-none"
                                    >
                                        Next <ArrowRight className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        disabled={submitting}
                                        className="flex items-center gap-3 px-8 py-4 rounded-xl font-display font-bold text-xl text-white bg-primary shadow-xl shadow-primary/30 hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-60"
                                    >
                                        <Rocket className={`w-5 h-5 ${submitting ? 'animate-bounce' : ''}`} />
                                        {submitting ? 'Sending...' : 'Launch Project'}
                                    </button>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="relative z-10 text-center py-12">
                            <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-6" />
                            <h3 className="text-2xl font-display font-bold text-text-dark mb-3">Mission Received!</h3>
                            <p className="text-gray-400">We'll be in touch within 24 hours. Get ready.</p>
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
