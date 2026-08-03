// src/components/Navbar.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { scrollToId, resetScroll } from '../utils/scroll';

const NAV_LINKS = [
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Our Process' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      resetScroll();
    } else {
      navigate('/');
    }
  };

  // Anchor links to sections that live only on the homepage. If we're on
  // another route, navigate home first and let Home's hash effect finish
  // the scroll once the section has actually mounted.
  const goToSection = (id) => (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      scrollToId(id);
    }
  };

  const goToCaseStudies = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === '/case-studies') {
      resetScroll();
    } else {
      navigate('/case-studies');
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-background-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a
              href="/"
              onClick={handleLogoClick}
              className="text-2xl font-display font-bold text-white tracking-tight"
            >
              makeship<span className="text-primary">.dev</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map(({ id, label }) => (
                <a
                  key={id}
                  href={`/#${id}`}
                  onClick={goToSection(id)}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href="/case-studies"
                onClick={goToCaseStudies}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Case Studies
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <a
              href="/#contact"
              onClick={goToSection('contact')}
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
            {NAV_LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={`/#${id}`}
                onClick={goToSection(id)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {label}
              </a>
            ))}
            <a
              href="/case-studies"
              onClick={goToCaseStudies}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Case Studies
            </a>
            <a href="/#contact" onClick={goToSection('contact')} className="text-primary font-bold block px-3 py-2 rounded-md text-base">Get in Touch</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
