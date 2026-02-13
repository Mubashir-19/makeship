// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <header className="relative bg-background-dark text-white pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-accent-gray mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              PREMIUM PRODUCT DESIGN & DEVELOPMENT AGENCY
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
              Empowering startups to launch, scale, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">succeed faster</span>
            </h1>
            <div className="flex flex-wrap gap-4 mb-16">
              <a href="#work" className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-primary/25 flex items-center gap-2 group">
                Our Work
                <span className="material-icons-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <a href="#process" className="bg-transparent border border-white/20 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-white/5">
                View Process
              </a>
            </div>
          </div>
          <div className="lg:mt-12 space-y-16">
            <p className="text-xl text-gray-400 font-light leading-relaxed border-l-2 border-primary/50 pl-6">
              From MVP to market domination — your reliable partner in UI/UX design and development. We build digital products that users love.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-4xl font-display font-bold text-white mb-1">98%</div>
                <div className="text-sm text-gray-500">Customer satisfaction rate</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-white mb-1">35%+</div>
                <div className="text-sm text-gray-500">Faster development time</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-white mb-1">70+</div>
                <div className="text-sm text-gray-500">Startups launched</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-white mb-1">500M+</div>
                <div className="text-sm text-gray-500">Funding raised by clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full text-background-light dark:text-background-dark">
        <svg className="w-full h-16 sm:h-24 fill-current" preserveAspectRatio="none" viewBox="0 0 1440 74" xmlns="http://www.w3.org/2000/svg">
          <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
        </svg>
      </div>
    </header>
  );
};

export default Hero;
