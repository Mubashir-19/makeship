// src/components/Philosophy.js
import React from 'react';

const Philosophy = () => {
  return (
    <section id="process" className="py-20 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-primary tracking-wide uppercase mb-4 block">Product Design and Development Agency</span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-light dark:text-text-dark leading-tight mb-12">
              Building a startup is hard, but finding the right partner shouldn't be
            </h2>
            <div className="flex flex-col gap-8 relative pl-8 border-l border-gray-200 dark:border-gray-800">
              <div className="relative">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-2">How do they tell what to launch as MVP specs?</h3>
                <p className="text-gray-600 dark:text-gray-400">Our discovery process helps you focus on what matters most, and with pre-built development frameworks, we can speed up your MVP development by 50%. With our design agency, you can launch faster without sacrificing quality.</p>
              </div>
              <a href="#contact" className="inline-flex items-center text-primary font-semibold hover:text-orange-600 transition-colors">
                Contact Us Now <span className="material-icons-outlined text-sm ml-1">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwnsAPcIuLm2_qm6Fxw95ES0yp6UZT_f1jqeT9dZf7au9LQGBViViP6f6LqdkoeFNFr3mpVuYO_UlU0TpJIKk-x6HhnGUMgjpfhdk4Bp3nUKrmg4hdF33K7cEuVNlvm9GC873TuC6ay0uXTenk7F94vjxrYG7JSxEr25eQVU40S8LAos_WzxRnkIyPbogcp7k412d3CffdI93VDXW1hX5LTRUheyvF7aKtrE3yjugSoAiBzmN1uEmQr8q1PkY9SJSx_VSH_Fwatw" 
                alt="Professional team" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-white text-sm font-medium">
                Trusted Partner
              </div>
            </div>
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-primary/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
