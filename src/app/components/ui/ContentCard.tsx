'use client';

import { Ripple } from './ripple';

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentCard({ children, className = '' }: ContentCardProps) {
  return (
    <div className={`
      relative
      bg-gray-50 
      backdrop-blur-sm 
      rounded-2xl 
      p-8 
      border 
      border-white/20 
      shadow-lg 
      shadow-black/5
      overflow-hidden
      ${className}
    `}>
      <Ripple 
        mainCircleSize={120}
        mainCircleOpacity={0.15}
        numCircles={6}
        className="absolute inset-0 bg-gray"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}