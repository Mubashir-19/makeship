import React, { useEffect } from 'react';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { resetScroll } from '../utils/scroll';

const CaseStudiesPage = () => {
  useEffect(() => {
    resetScroll();
  }, []);

  return (
    <div className="pt-20">
      <Projects />
      <Contact />
    </div>
  );
};

export default CaseStudiesPage;
