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

  // Calcula altura do header dinamicamente
  const getHeaderOffset = useCallback(() => {
    return navRef.current?.offsetHeight || 64;
  }, []);

  // Detecção de seção ativa via scroll
  const updateActiveSection = useCallback(() => {
    if (isScrollingRef.current) return;

    const offset = getHeaderOffset();
    const scrollPosition = window.scrollY + offset;

    // Encontra a seção mais próxima do topo da viewport
    let currentSection = 'hero'; // Default para hero

    for (let i = SECTIONS.length - 1; i >= 0; i--) {
      const section = SECTIONS[i];
      const element = document.getElementById(section.id);
      if (!element) continue;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;

      // Se o topo da seção está acima ou próximo do scroll atual
      if (elementTop <= scrollPosition + offset + 100) {
        currentSection = section.id;
        break;
      }
    }

    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
  }, [activeSection, getHeaderOffset]);

  // Scroll suave com offset dinâmico
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const offset = getHeaderOffset();
    const elementPosition = element.offsetTop - offset;

    // Feedback imediato - atualiza o estado ANTES do scroll
    setActiveSection(sectionId);
    isScrollingRef.current = true;

    // Limpa timeout anterior
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Pequeno delay para garantir que a animação CSS seja aplicada
    requestAnimationFrame(() => {
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    });

    // Marca como "scroll induzido" por 800ms para evitar conflito
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      updateActiveSection(); // Verifica a posição final
    }, 800);
  }, [getHeaderOffset, updateActiveSection]);

  // Otimização: throttle no scroll
  const handleScroll = useCallback(() => {
    if (!mounted) return;
    if (isScrollingRef.current) return;

    requestAnimationFrame(updateActiveSection);
  }, [mounted, updateActiveSection]);

  // Montagem e listeners
  useEffect(() => {
    const mountTimer = setTimeout(() => setMounted(true), 100);

    // Listener único
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Verificação inicial
    const checkInitial = () => {
      if (mounted) updateActiveSection();
    };
    const initialTimer = setTimeout(checkInitial, 150);

    return () => {
      clearTimeout(mountTimer);
      clearTimeout(initialTimer);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, updateActiveSection, mounted]);

  // Atualiza seção ativa ao redimensionar (header pode mudar de altura)
  useEffect(() => {
    const handleResize = () => {
      updateActiveSection();
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