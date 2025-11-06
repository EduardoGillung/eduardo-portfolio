"use client";

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');

  const handleScrollTo = (elementId: string) => {
    setActiveSection(elementId);
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [activeSection]);

  return (
    <nav className="liquid-nav-container" data-active={activeSection}>
      <button
        onClick={() => handleScrollTo('about')}
        className="liquid-nav-option"
        data-section="about"
      >
        Sobre
      </button>

      <button
        onClick={() => handleScrollTo('projects')}
        className="liquid-nav-option"
        data-section="projects"
      >
        Projetos
      </button>

      <button
        onClick={() => handleScrollTo('contact')}
        className="liquid-nav-option"
        data-section="contact"
      >
        Contato
      </button>
    </nav>
  );
}
