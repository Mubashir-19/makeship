// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="work" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="h-px w-6 bg-primary"></span>
            <span className="text-gray-500 dark:text-gray-400 text-xs font-bold tracking-widest uppercase">Case Studies</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Discover how we're driving change through innovative projects and measurable outcomes.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-6 shadow-lg">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <img alt="Isora Dashboard" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLxU-kgsmvQWxiOt3YKGgSKlZ8DGyjj_hQB8zmecUQ5Ji4Wu_CVI46fFVBZhmTlAvhHLkp0hEKBoq3SpIQh7_VdRrq6COghu-e5erwkA2SpMNRnHiutiy-KcLtkk51uaVeco_iFIjck20L9BQD2VmQs_KMgZlYXJ_m7MxLeKs-VuSc1ZbhZqehI7__9KcVJt3_xrm_a3dEJEdnCAwrUoERogAW5aUOHkEl_FzKZtZeGi83ASDidviHwzx0XxSRTzoUkPCt5eCpqg" />
              <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-semibold rounded-full text-gray-900 dark:text-white uppercase tracking-wider">Fintech</span>
                <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-semibold rounded-full text-gray-900 dark:text-white uppercase tracking-wider">React</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">Isora — Optimizing governance, risk &amp; compliance</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm max-w-lg">
                    Reimagining how institutions handle complex compliance workflows with a modern, intuitive dashboard interface.
                  </p>
                </div>
                <button className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                  <span className="material-icons-outlined">arrow_forward</span>
                </button>
              </div>
              <div className="flex gap-8 border-t border-gray-100 dark:border-gray-800 pt-4">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Users</div>
                  <div className="font-display font-bold text-gray-900 dark:text-white">100k+ Active</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Time to Market</div>
                  <div className="font-display font-bold text-gray-900 dark:text-white">-40% Faster</div>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer flex flex-col h-full">
            <div className="relative rounded-2xl overflow-hidden flex-grow min-h-[400px] mb-6 shadow-lg bg-gray-100 dark:bg-gray-800">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <img alt="HealthTech App" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFKUS0YAECrakCK1sls2fLrr8mlar40OU9-1agA6U0HFROlSS1zt09D37M4dLqj9gFsNNcN8fKjKHz-7SDYsWljcG3bZBSKyyrrGoM5ogl9pEa7W73qDeOGc5Twf3yFT96NA4DYkhrZIdyxhiVZwHlMh_BqH0k1-eFaYMHhQymNNlt6fj8m846qgbAtejtjGUQxXp42FEy5c7c_F0COAd4u7pVoBa5Xt0zUKe6w0NUtLVAhwJ5OIdPmZQwTfMV3cvx_9UANSg_UA" />
              <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-semibold rounded-full text-gray-900 dark:text-white uppercase tracking-wider">HealthTech</span>
              </div>
            </div>
            <div className="space-y-4 mt-auto">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">VitalCheck Mobile</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Patient monitoring made simple and accessible.</p>
                </div>
                <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all flex-shrink-0">
                  <span className="material-icons-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6 shadow-lg">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <img alt="E-commerce Platform" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuuyIh5PM7fMInDz7npcpU8UKPpoV0YjL07WoffMJ3g_aIPslVYd4HMCDTb_9XIldwDHzNAYKVGGmfQYEEr-R5jGDls_tM17KV-T5Afv-pG49hU_LZR7n8L2NP0APxFw-kPgpx_EQcak82wE04m8K_OzgKwt4gGpoQuFTHDjnh3M0erQcqgWQh4V1_0cVYFr8D8yG29qFONjqyGcrCeiz61Bxd4NlzZ8HG2-se490uPqarTVnsvhL0HYIWzbTwZnFPR_MmgsL7zA" />
              <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-semibold rounded-full text-gray-900 dark:text-white uppercase tracking-wider">E-commerce</span>
                <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-semibold rounded-full text-gray-900 dark:text-white uppercase tracking-wider">Shopify</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">LuxeMarket Growth</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Scaling a boutique brand to international markets.</p>
                </div>
                <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all flex-shrink-0">
                  <span className="material-icons-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              <div className="flex gap-6 border-t border-gray-100 dark:border-gray-800 pt-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-xs text-gray-500 font-medium">+240% Revenue</span>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6 shadow-lg">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <img alt="SaaS Platform" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJVHv3osLgsjJ9AE2L8msoT5_eafKuVUGWkHMwSuPwobjdsoGd3xxzMcgECF1BIzpFP07Gwv9NnwtF39-M87IEnMTjBj_qLBRvYhXmJt7FBhEuWKOPMRrdSHenTm9Z2AIiK5JZvyY4YwwfNScdaAE7t-c-9McVdDicXWCmGmpxmxBBXsdWbpwG8azzsHE3Stn4MGW0z1NqOFFssaPLKMmmgJeZlq8edzd5tYaikju6Sqk9dxwIR6qc1dvsgDxkUoPpaZ44GRRQyg" />
              <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-semibold rounded-full text-gray-900 dark:text-white uppercase tracking-wider">SaaS</span>
                <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-semibold rounded-full text-gray-900 dark:text-white uppercase tracking-wider">AI</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">Agentic AI Workspace</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Defining the future of work with intelligent agents.</p>
                </div>
                <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all flex-shrink-0">
                  <span className="material-icons-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <a className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-hover transition-colors text-lg group" href="#work">
            View all case studies
            <span className="material-icons-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
