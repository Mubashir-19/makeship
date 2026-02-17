// src/components/Services.js
import React, { useState } from "react";
const Services = () => {
  const [activeCategory, setActiveCategory] = useState("infrastructure");

  const expertise = {
    infrastructure: {
      title: "AI Infrastructure",
      subtitle: "Robust foundations for distributed AI systems",
      highlights: [
        "Remote machine orchestration via unified dashboard",
        "NixOS-based system standardization",
        "Docker-powered deployment pipelines",
        "Secure SSH access and control layer",
      ],
      solutions: [
        "Centralized management for on-premise machines",
        "High-performance infrastructure scaling",
        "Real-time monitoring and management UI",
      ],
      icon: "settings_input_component",
    },
    llm: {
      title: "LLM & Conversational AI",
      subtitle: "Fine-tuned models for domain-specific intelligence",
      highlights: [
        "Reduced research time by 80% (Maritime AI)",
        "+70% parsing accuracy, -50% operational cost",
        "Multi-model support for local and remote systems",
        "Interactive AI study and research companions",
      ],
      solutions: [
        "Domain-specific fine-tuned AI models",
        "High-accuracy data extraction and analysis",
        "Clean conversational UIs with extensible architecture",
      ],
      icon: "chat_bubble",
    },
    generative: {
      title: "Generative Media",
      subtitle: "AI-powered creative and visualization platforms",
      highlights: [
        "AI-assisted scripting, visuals, and rendering",
        "Realistic dental before/after transformations",
        "Scalable backend for heavy media workloads",
        "Controlled video communication for webinars",
      ],
      solutions: [
        "Automated video content creation systems",
        "AI-driven visual marketing for healthcare",
        "High-performance media processing pipelines",
      ],
      icon: "auto_awesome",
    },
    ecosystems: {
      title: "Scalable Ecosystems",
      subtitle: "Enterprise management and social platforms",
      highlights: [
        "Multi-location sales tracking and GHL integration",
        "Cross-platform matchmaking (Android, iOS, Windows)",
        "Geo-location and social integration for events",
        "Modern UI/UX with secure backend architectures",
      ],
      solutions: [
        "Agency-level management and reporting tools",
        "Mobile-first community and event platforms",
        "Optimized database architectures for growth",
      ],
      icon: "hub",
    },
  };

  const current = expertise[activeCategory];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-[#0f1115]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-sm font-semibold text-primary tracking-wide uppercase mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-light dark:text-text-dark">
            Our areas of expertise
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3 space-y-2">
            {Object.keys(expertise).map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-all flex justify-between items-center ${
                  activeCategory === key
                    ? "bg-black text-white dark:bg-white dark:text-black shadow-lg"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {expertise[key].title}
                {activeCategory === key && (
                  <span className="material-icons-outlined text-sm">
                    chevron_right
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="lg:col-span-9">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <span className="material-icons-outlined text-primary text-2xl">
                  {current.icon}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-text-light dark:text-text-dark">
                {current.subtitle}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Highlights
                </h4>
                <ul className="space-y-4">
                  {current.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary mr-3"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {highlight}
                      </p>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-block mt-8 bg-primary hover:bg-orange-600 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors shadow-lg shadow-primary/20"
                >
                  Discuss Projects
                </a>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Our Solutions
                </h4>
                <ul className="space-y-4">
                  {current.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="material-icons-outlined text-green-500 text-sm mr-2 mt-0.5">
                        check
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {solution}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
