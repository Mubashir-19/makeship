// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-[#0f1115]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-sm font-semibold text-primary tracking-wide uppercase mb-4 block">Key Innovations</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-light dark:text-text-dark">
            Our areas of expertise
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3 space-y-2">
            <button className="w-full text-left px-4 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold text-sm flex justify-between items-center shadow-lg">
              SaaS <span className="material-icons-outlined text-sm">chevron_right</span>
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-sm transition-colors">
              Market Network
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-sm transition-colors">
              E-commerce
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-sm transition-colors">
              Healthcare
            </button>
          </div>
          <div className="lg:col-span-9 bg-white dark:bg-surface-dark rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="text-2xl font-display font-bold text-text-light dark:text-text-dark mb-6">Scalable platforms for growth-focused teams</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Highlights</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary mr-3"></div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">High churn from poor user experience/UX</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary mr-3"></div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Scaling product features without complicating the stack</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary mr-3"></div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Low performance from users with massive data tables</p>
                  </li>
                </ul>
                <a href="#services" className="inline-block mt-8 bg-primary hover:bg-orange-600 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors">
                  Explore SaaS
                </a>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Our Solutions</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="material-icons-outlined text-green-500 text-sm mr-2 mt-0.5">check</span>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Design First: Focus on intuitive user flows and dashboards</p>
                  </li>
                  <li className="flex items-start">
                    <span className="material-icons-outlined text-green-500 text-sm mr-2 mt-0.5">check</span>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Modular backend architecture for sustainable scale</p>
                  </li>
                  <li className="flex items-start">
                    <span className="material-icons-outlined text-green-500 text-sm mr-2 mt-0.5">check</span>
                    <p className="text-sm text-gray-600 dark:text-gray-300">High-performance data management for real-time interactions</p>
                  </li>
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
