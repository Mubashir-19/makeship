// src/components/Phases.js
import React from 'react';

const Phases = () => {
  return (
    <section id="process" className="relative bg-background-dark text-white rounded-[3rem] lg:rounded-[5rem] overflow-hidden  pt-24 pb-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-12 bg-background-light dark:bg-background-dark rounded-b-full"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <div className="inline-flex items-center space-x-2 mb-6">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">Services &amp; Expertise</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight mb-6">
              Tailored support from first prototype to long-term scale
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Great products don&apos;t happen by accident. Our digital product design agency drives change and through smart strategy, solid UX, and scalable development from day one.
            </p>
            <a className="inline-flex items-center text-primary font-medium hover:text-white transition-colors" href="#services">
              Explore all services <span className="material-icons-outlined ml-1 text-sm">arrow_forward</span>
            </a>
          </div>
          <div className="lg:col-span-8 space-y-24">
            <div className="group">
              <div className="flex items-baseline justify-between border-b border-gray-800 pb-6 mb-8">
                <h3 className="text-2xl font-display font-medium">Validate your idea &amp; attract early investors</h3>
                <span className="text-gray-600 font-mono text-sm">01</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Design prototypes
                  </h4>
                  <p className="text-sm text-gray-500">
                    High-fidelity interactive mockups that help you pitch to investors confidently.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Product discovery
                  </h4>
                  <p className="text-sm text-gray-500">
                    Map out user journeys, define features, and minimize risk before writing code.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Website development
                  </h4>
                  <p className="text-sm text-gray-500">
                    Conversion-driven landing pages that capture early interest and leads.
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex items-baseline justify-between border-b border-gray-800 pb-6 mb-8">
                <h3 className="text-2xl font-display font-medium">Build your product &amp; gain market traction</h3>
                <span className="text-gray-600 font-mono text-sm">02</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Branding
                  </h4>
                  <p className="text-sm text-gray-500">
                    Building a memorable brand identity that resonates with your customers.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Technical workshops
                  </h4>
                  <p className="text-sm text-gray-500">
                    Deep dives into architecture, performance, and scalability planning.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Custom app development
                  </h4>
                  <p className="text-sm text-gray-500">
                    Robust, scalable applications built with modern frameworks and best practices.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Rapid mvp development
                  </h4>
                  <p className="text-sm text-gray-500">
                    Get your MVP to market in weeks, not months, to start gathering feedback.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Cloud solutions
                  </h4>
                  <p className="text-sm text-gray-500">
                    AWS/GCP infrastructure setup for maximum reliability and uptime.
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex items-baseline justify-between border-b border-gray-800 pb-6 mb-8">
                <h3 className="text-2xl font-display font-medium">Scale, optimize &amp; reach more users</h3>
                <span className="text-gray-600 font-mono text-sm">03</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    UX audit
                  </h4>
                  <p className="text-sm text-gray-500">
                    Identify friction points and optimize user flows for better retention.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Product redesign
                  </h4>
                  <p className="text-sm text-gray-500">
                    Revitalize legacy products with modern UI and improved user experience.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Team extension
                  </h4>
                  <p className="text-sm text-gray-500">
                    Augment your team with specialized developers and designers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Phases;
