import React from 'react';

const ScrollToSection = ({ sectionId, children }) => {
  const scrollToSection = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div onClick={scrollToSection}>
      {children}
    </div>
  );
};

export default ScrollToSection;