// src/components/Hero.js
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className="relative bg-background-dark text-white pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center space-x-2 mb-6">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                PREMIUM PRODUCT DESIGN & DEVELOPMENT AGENCY
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
              Empowering startups to launch, scale, and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
                succeed faster
              </span>
            </h1>
            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                to="/case-studies"
                className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-primary/25 flex items-center gap-2 group"
              >
                Case Studies
                <span className="material-icons-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <a
                href="#process"
                className="bg-transparent border border-white/20 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-white/5"
              >
                View Process
              </a>
            </div>
          </div>
          <div className="lg:mt-12 space-y-16">
            <p className="text-xl text-gray-400 font-light leading-relaxed border-l-2 border-primary/50 pl-6">
              From MVP to market domination — your reliable partner in UI/UX
              design and development. We build digital products that users love.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-4xl font-display font-bold text-white mb-1">
                  99%
                </div>
                <div className="text-sm text-gray-500">
                  Customer satisfaction rate
                </div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-white mb-1">
                  65%+
                </div>
                <div className="text-sm text-gray-500">
                  Faster development time
                </div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-white mb-1">
                  20+
                </div>
                <div className="text-sm text-gray-500">Startups launched</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-white mb-1">
                  10M+
                </div>
                <div className="text-sm text-gray-500">
                  Funding raised by clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-[1px] left-0 w-full text-background-light dark:text-[#0a0b0d]">
        <svg
          className="block w-full h-12 sm:h-20 fill-current"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 100 C 480 0, 960 0, 1440 100 Z"></path>
        </svg>
      </div>
    </header>
  );
};

export default Hero;
