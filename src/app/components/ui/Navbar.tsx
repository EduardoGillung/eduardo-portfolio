"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

interface Section {
  id: string;
  label: string;
}

const SECTIONS: Section[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastClickedRef = useRef<string | null>(null);

  // Calcula altura do header dinamicamente
  const getHeaderOffset = useCallback(() => {
    const header = document.querySelector('header');
    return header?.offsetHeight || 80;
  }, []);

  // Detecção de seção ativa via scroll - SEM dependência de activeSection
  const updateActiveSection = useCallback(() => {
    // Se está em scroll programático, não atualiza
    if (isScrollingRef.current) return;

    const offset = getHeaderOffset();
    const scrollPosition = window.scrollY;

    // Encontra a seção visível mais próxima do topo
    let currentSection = 'hero';

    for (let i = SECTIONS.length - 1; i >= 0; i--) {
      const section = SECTIONS[i];
      const element = document.getElementById(section.id);
      if (!element) continue;

      const elementTop = element.offsetTop;
      
      // Se o topo da seção está acima ou no ponto de scroll atual (com margem)
      if (scrollPosition >= elementTop - offset - 50) {
        currentSection = section.id;
        break;
      }
    }

    // Atualiza apenas se mudou
    setActiveSection(prev => {
      if (prev !== currentSection) {
        return currentSection;
      }
      return prev;
    });
  }, [getHeaderOffset]);

  // Scroll suave com offset dinâmico
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // Limpa timeout anterior
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    const offset = getHeaderOffset();
    const elementPosition = element.offsetTop - offset;

    // Marca como clicado e atualiza estado imediatamente
    lastClickedRef.current = sectionId;
    setActiveSection(sectionId);
    isScrollingRef.current = true;

    // Executa o scroll
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });

    // Libera o scroll após animação
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      lastClickedRef.current = null;
      // Verifica a posição real após o scroll
      updateActiveSection();
    }, 1000);
  }, [getHeaderOffset, updateActiveSection]);

  // Handler de scroll com throttle
  const handleScroll = useCallback(() => {
    if (!mounted) return;
    
    // Usa requestAnimationFrame para otimizar
    requestAnimationFrame(() => {
      updateActiveSection();
    });
  }, [mounted, updateActiveSection]);

  // Montagem inicial
  useEffect(() => {
    setMounted(true);
    
    // Verifica posição inicial após montar
    const initialCheck = setTimeout(() => {
      updateActiveSection();
    }, 200);

    return () => {
      clearTimeout(initialCheck);
    };
  }, [updateActiveSection]);

  // Listener de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  // Listener de resize
  useEffect(() => {
    const handleResize = () => {
      if (!isScrollingRef.current) {
        updateActiveSection();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateActiveSection]);

  return (
    <nav
      ref={navRef}
      className={`liquid-nav-container ${mounted ? 'nav-mounted' : 'nav-loading'}`}
      data-active={activeSection}
      style={{ '--nav-ready': mounted ? '1' : '0' } as React.CSSProperties}
    >
      {SECTIONS.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`liquid-nav-option ${activeSection === section.id ? 'active' : ''}`}
          data-section={section.id}
          type="button"
          aria-current={activeSection === section.id ? 'true' : 'false'}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
}
