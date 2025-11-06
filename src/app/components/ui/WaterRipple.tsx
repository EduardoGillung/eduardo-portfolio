'use client';

import { useRef } from 'react';
import './ThreeRipple.css';

export default function WaterRipple() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef} 
      className="golden-orb-container"
    >
      <div className="golden-orb">
        <div className="orb-core"></div>
        <div className="ripple-ring ring-1"></div>
        <div className="ripple-ring ring-2"></div>
        <div className="ripple-ring ring-3"></div>
        <div className="ripple-ring ring-4"></div>
      </div>
    </div>
  );
}