// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CaseStudiesPage from './pages/CaseStudiesPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Footer from './components/Footer';
import LeadPopup from './components/LeadPopup';

function App() {
  return (
    <Router>
      <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans transition-colors duration-300">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
        <LeadPopup />
      </div>
    </Router>
  );
}

export default App;
