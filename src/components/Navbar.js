// src/components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-display font-bold text-white tracking-tight cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              makeship<span className="text-primary">.dev</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
              <a href="#process" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Our Process</a>
              <a href="#work" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Work</a>
              <a href="#insights" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Insights</a>
            </div>
          </div>
          <div className="hidden md:block">
            <a 
              href="#contact"
              className="bg-primary hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30"
            >
              Get in Touch
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <span className="material-icons-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background-dark border-b border-white/10 text-center">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Our Process</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Work</a>
            <a href="#insights" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Insights</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-primary font-bold block px-3 py-2 rounded-md text-base">Get in Touch</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
