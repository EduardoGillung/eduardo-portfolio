"use client";

import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.offsetTop - headerHeight;
      
      // Update active section immediately for visual feedback
      setActiveSection(elementId);
      
      // Clear any pending scroll updates
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Mount with delay to prevent initial animation
    const mountTimer = setTimeout(() => {
      setMounted(true);
    }, 200);

    let rafId: number;
    let isScrolling = false;

    const updateActiveSection = () => {
      const sections = ['about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150;
      let newActiveSection = 'about';

      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        
        if (element) {
          const elementTop = element.offsetTop;
          
          if (scrollPosition >= elementTop) {
            newActiveSection = section;
            break;
          }
        }
      }

      // Only update if section actually changed
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }

      isScrolling = false;
    };

    const handleScroll = () => {
      if (!isScrolling && mounted) {
        isScrolling = true;
        rafId = requestAnimationFrame(updateActiveSection);
      }
    };

    // Initial section detection
    const initialCheck = () => {
      if (mounted) {
        updateActiveSection();
      }
    };

    // Wait for mount before attaching scroll listener
    if (mounted) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      initialCheck();
    }

    return () => {
      clearTimeout(mountTimer);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [activeSection, mounted]);

  return (
    <nav 
      ref={navRef}
      className={`liquid-nav-container ${mounted ? 'nav-mounted' : 'nav-loading'}`} 
      data-active={activeSection}
      style={{ '--nav-ready': mounted ? '1' : '0' } as React.CSSProperties}
    >
      <button
        onClick={() => handleScrollTo('about')}
        className={`liquid-nav-option ${activeSection === 'about' ? 'active' : ''}`}
        data-section="about"
        type="button"
      >
        About
      </button>

      <button
        onClick={() => handleScrollTo('projects')}
        className={`liquid-nav-option ${activeSection === 'projects' ? 'active' : ''}`}
        data-section="projects"
        type="button"
      >
        Projects
      </button>

      <button
        onClick={() => handleScrollTo('contact')}
        className={`liquid-nav-option ${activeSection === 'contact' ? 'active' : ''}`}
        data-section="contact"
        type="button"
      >
        Contact
      </button>
    </nav>
  );
}
