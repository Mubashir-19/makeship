// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-background-dark text-white pt-24 pb-12 border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <span className="text-2xl font-display font-bold text-white tracking-tight mb-6 block">makeship<span className="text-primary">.dev</span></span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We partner with ambitious startups to design, build, and scale world-class digital products.
            </p>
            <div className="flex gap-4">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <span className="material-icons-outlined text-sm">alternate_email</span>
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <span className="material-icons-outlined text-sm">share</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <li><a href="#" className="hover:text-white transition-colors">Mobile App Development</a></li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <li><a href="#" className="hover:text-white transition-colors">Product Strategy</a></li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <li><a href="#" className="hover:text-white transition-colors">MVP Development</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Let's build something</h4>
            <p className="text-gray-400 text-sm mb-4">Ready to start your project? Get in touch with our team.</p>
            <a href="#contact" className="inline-block bg-primary hover:bg-orange-600 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors w-full text-center">
              Start a Project
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">© 2024 Makeship.dev Agency. All rights reserved.</p>
          <div className="flex gap-6 text-gray-500 text-xs">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
