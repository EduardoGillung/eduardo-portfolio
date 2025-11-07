'use client';

import { useRef, useEffect } from 'react';
import './GlowEdgeCard.css';

interface GlowEdgeCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlowEdgeCard({ children, className = '' }: GlowEdgeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let animationId: number;
    let isAnimating = false;

    // Exact functions from CodePen
    const pointerPositionRelativeToElement = (element: HTMLElement, e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      const perx = (px / rect.width) * 100;
      const pery = (py / rect.height) * 100;
      return { pixels: [px, py], percent: [perx, pery] };
    };

    const distanceFromCenter = (element: HTMLElement, px: number, py: number) => {
      const rect = element.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      return [px - cx, py - cy];
    };

    const closenessToEdge = (element: HTMLElement, px: number, py: number) => {
      const rect = element.getBoundingClientRect();
      const distanceToLeft = px;
      const distanceToRight = rect.width - px;
      const distanceToTop = py;
      const distanceToBottom = rect.height - py;
      
      const minDistance = Math.min(distanceToLeft, distanceToRight, distanceToTop, distanceToBottom);
      const maxDistance = Math.max(rect.width, rect.height) / 2;
      return 1 - (minDistance / maxDistance);
    };

    const angleFromPointerEvent = (element: HTMLElement, dx: number, dy: number) => {
      return Math.atan2(dy, dx) * 180 / Math.PI;
    };

    const round = (num: number) => Math.round(num * 100) / 100;

    const updateCardProperties = (e: MouseEvent) => {
      const position = pointerPositionRelativeToElement(card, e);
      const [px, py] = position.pixels;
      const [perx, pery] = position.percent;
      const [dx, dy] = distanceFromCenter(card, px, py);
      const edge = closenessToEdge(card, px, py);
      const angle = angleFromPointerEvent(card, dx, dy);

      card.style.setProperty('--pointer-x', `${round(perx)}%`);
      card.style.setProperty('--pointer-y', `${round(pery)}%`);
      card.style.setProperty('--pointer-deg', `${round(angle)}deg`);
      card.style.setProperty('--pointer-d', `${round(edge * 100)}`);
      
      card.classList.remove('animating');
      isAnimating = false;
    };

    const cardUpdate = (e: MouseEvent) => {
      if (!isAnimating) {
        isAnimating = true;
        animationId = requestAnimationFrame(() => updateCardProperties(e));
      }
    };

    const cardLeave = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      card.style.setProperty('--pointer-d', '0');
      card.classList.add('animating');
      isAnimating = false;
    };

    card.addEventListener('pointermove', cardUpdate);
    card.addEventListener('pointerleave', cardLeave);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      card.removeEventListener('pointermove', cardUpdate);
      card.removeEventListener('pointerleave', cardLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className={`glow-edge-card ${className}`}>
      <span className="glow"></span>
      <div className="inner">
        {children}
      </div>
    </div>
  );
}