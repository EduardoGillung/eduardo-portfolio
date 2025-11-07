"use client"

import React, { useEffect, useRef, useState } from 'react';
import './LiquidSwitcher.css';

interface LiquidSwitcherProps {
  className?: string;
}

const LiquidSwitcher: React.FC<LiquidSwitcherProps> = ({ className = '' }) => {
  const switcherRef = useRef<HTMLFieldSetElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const switcher = switcherRef.current;
    if (!switcher) return;

    const trackPrevious = (el: HTMLElement) => {
      const radios = el.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>;
      let previousValue: string | null = null;

      const initiallyChecked = el.querySelector('input[type="radio"]:checked') as HTMLInputElement;
      if (initiallyChecked) {
        previousValue = initiallyChecked.getAttribute("c-option");
        el.setAttribute('c-previous', previousValue || '');
      }

      radios.forEach(radio => {
        radio.addEventListener('change', () => {
          if (radio.checked) {
            el.setAttribute('c-previous', previousValue ?? '');
            previousValue = radio.getAttribute("c-option");
          }
        });
      });
    };

    // Get theme with proper browser check
    let savedTheme = 'light';
    
    if (typeof window !== 'undefined') {
      savedTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    
    // Apply theme immediately
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
    
    // Set correct radio button
    const themeRadio = switcher.querySelector(`input[value="${savedTheme}"]`) as HTMLInputElement;
    if (themeRadio) {
      themeRadio.checked = true;
    }

    trackPrevious(switcher);

    // Theme change handler
    const handleThemeChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.type === 'radio' && target.name === 'theme') {
        const theme = target.value;
        
        document.documentElement.setAttribute('data-theme', theme);
        document.body.setAttribute('data-theme', theme);
        
        if (typeof window !== 'undefined') {
          localStorage.setItem('theme', theme);
        }
        
        // Smooth transition
        document.documentElement.style.transition = 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)';
        setTimeout(() => {
          document.documentElement.style.transition = '';
        }, 300);
      }
    };

    switcher.addEventListener('change', handleThemeChange);

    // Mark as ready after setup
    const readyTimer = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => {
      clearTimeout(readyTimer);
      switcher.removeEventListener('change', handleThemeChange);
    };
  }, []);

  return (
    <fieldset 
      ref={switcherRef} 
      className={`switcher ${isReady ? 'switcher-ready' : 'switcher-loading'} ${className}`}
    >
      <legend className="switcher__legend">Choose theme</legend>
      
      <label className="switcher__option">
        <input 
          className="switcher__input" 
          type="radio" 
          name="theme" 
          value="light" 
          c-option="1" 
          defaultChecked
        />
        <svg className="switcher__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36">
          <path fill="var(--c)" fillRule="evenodd" d="M18 12a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" clipRule="evenodd"/>
          <path fill="var(--c)" d="M17 6.038a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0v-3ZM24.245 7.666a1 1 0 0 1 1.618 1.176L24.1 11.269a1 1 0 1 1-1.618-1.176l1.763-2.427ZM29.104 13.379a1 1 0 0 1 .618 1.902l-2.854.927a1 1 0 1 1-.618-1.902l2.854-.927ZM29.722 20.795a1 1 0 0 1-.619 1.902l-2.853-.927a1 1 0 1 1 .618-1.902l2.854.927ZM25.862 27.159a1 1 0 0 1-1.618 1.175l-1.763-2.427a1 1 0 1 1 1.618-1.175l1.763 2.427ZM19 30.038a1 1 0 0 1-2 0v-3a1 1 0 1 1 2 0v3ZM11.755 28.334a1 1 0 0 1-1.618-1.175l1.764-2.427a1 1 0 1 1 1.618 1.175l-1.764 2.427ZM6.896 22.697a1 1 0 1 1-.618-1.902l2.853-.927a1 1 0 1 1 .618 1.902l-2.853.927ZM6.278 15.28a1 1 0 1 1 .618-1.901l2.853.927a1 1 0 1 1-.618 1.902l-2.853-.927ZM10.137 8.918a1 1 0 0 1 1.618-1.176l1.764 2.427a1 1 0 0 1-1.618 1.176l-1.764-2.427Z"/>
        </svg>
      </label>

      <label className="switcher__option">
        <input 
          className="switcher__input" 
          type="radio" 
          name="theme" 
          value="dark" 
          c-option="2" 
        />
        <svg className="switcher__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36">
          <path fill="var(--c)" d="M12.5 8.473a10.968 10.968 0 0 1 8.785-.97 7.435 7.435 0 0 0-3.737 4.672l-.09.373A7.454 7.454 0 0 0 28.732 20.4a10.97 10.97 0 0 1-5.232 7.125l-.497.27c-5.014 2.566-11.175.916-14.234-3.813l-.295-.483C5.53 18.403 7.13 11.93 12.017 8.77l.483-.297Zm4.234.616a8.946 8.946 0 0 0-2.805.883l-.429.234A9 9 0 0 0 10.206 22.5l.241.395A9 9 0 0 0 22.5 25.794l.416-.255a8.94 8.94 0 0 0 2.167-1.99 9.433 9.433 0 0 1 2.782-.313c-5.043-1.352-8.036-6.535-6.686-11.578l.147-.491c.242-.745.573-1.44.972-2.078Z"/>
        </svg>
      </label>
    </fieldset>
  );
};

export default LiquidSwitcher;