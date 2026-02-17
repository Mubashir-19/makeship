import React, { useEffect } from 'react';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const CaseStudiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <Projects />
      <Contact />
    </div>
  );
};

export default CaseStudiesPage;
