import React from 'react';

const ScrollToSection = ({ sectionId, children }) => {
  const scrollToSection = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={scrollToSection}>
      {children}
    </button>
  );
};

export default ScrollToSection;