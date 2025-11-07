'use client';

import { useEffect, useRef, useState } from 'react';
import './DropdownDescramble.css';

interface DropdownDescrambleProps {
  text: string;
  delay?: number;
  className?: string;
}

export default function DropdownDescramble({ text, delay = 0, className = '' }: DropdownDescrambleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrambledLetters, setScrambledLetters] = useState<string[]>([]);

  const generateScrambledLetters = (originalText: string) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    return originalText.split('').map(char => {
      if (char === ' ') return ' ';
      return chars[Math.floor(Math.random() * chars.length)];
    });
  };

  useEffect(() => {
    setScrambledLetters(generateScrambledLetters(text));
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const container = containerRef.current;
    const letters = container.querySelectorAll('.letter');

    // Animation sequence
    const animateSequence = () => {
      // Phase 1: Drop down scrambled letters
      letters.forEach((letter, i) => {
        const letterEl = letter as HTMLElement;
        letterEl.style.transform = 'translateY(-103%)';
        
        setTimeout(() => {
          letterEl.style.transition = 'transform 1s cubic-bezier(0.76, 0, 0.24, 1)';
          letterEl.style.transform = 'translateY(0%)';
        }, i * 80);
      });

      // Phase 2: After drop, slide up and reveal correct letters
      setTimeout(() => {
        letters.forEach((letter, i) => {
          const letterEl = letter as HTMLElement;
          const correctChar = text[i];
          
          if (correctChar !== ' ') {
            setTimeout(() => {
              // Slide up scrambled letter
              letterEl.style.transition = 'transform 1s cubic-bezier(0.76, 0, 0.24, 1)';
              letterEl.style.transform = 'translateY(103%)';
              
              // Replace with correct letter and drop down
              setTimeout(() => {
                letterEl.textContent = correctChar;
                letterEl.style.transform = 'translateY(-103%)';
                
                setTimeout(() => {
                  letterEl.style.transform = 'translateY(0%)';
                }, 50);
              }, 600);
            }, i * 120);
          }
        });
      }, letters.length * 80 + 800);
    };

    animateSequence();
  }, [isVisible, text]);

  return (
    <div 
      ref={containerRef}
      className={`dropdown-descramble ${className}`}
      style={{ visibility: isVisible ? 'visible' : 'hidden' }}
    >
      {text.split('').map((char, index) => (
        <div
          key={index}
          className="letter"
          data-correct={char}
        >
          {char === ' ' ? '\u00A0' : scrambledLetters[index] || char}
        </div>
      ))}
    </div>
  );
}