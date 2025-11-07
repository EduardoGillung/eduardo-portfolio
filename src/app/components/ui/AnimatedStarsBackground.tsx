'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import './AnimatedStarsBackground.css';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  animationDuration: number;
  layer: 1 | 2 | 3;
  animationDelay: number;
}

export default function AnimatedStarsBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [mounted, setMounted] = useState(false);

  const generateStars = useCallback(() => {
    const newStars: Star[] = [];
    
    // Small stars (layer 1) - fastest, smallest, most numerous
    for (let i = 0; i < 150; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        animationDuration: Math.random() * 20 + 15,
        animationDelay: Math.random() * 10,
        layer: 1
      });
    }

    // Medium stars (layer 2) - medium speed and size
    for (let i = 150; i < 225; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        animationDuration: Math.random() * 30 + 20,
        animationDelay: Math.random() * 15,
        layer: 2
      });
    }

    // Large stars (layer 3) - slowest, largest, least numerous
    for (let i = 225; i < 275; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 2,
        animationDuration: Math.random() * 40 + 25,
        animationDelay: Math.random() * 20,
        layer: 3
      });
    }

    return newStars;
  }, []);

  useEffect(() => {
    setMounted(true);
    setStars(generateStars());
  }, [generateStars]);

  const starsByLayer = useMemo(() => {
    return {
      layer1: stars.filter(star => star.layer === 1),
      layer2: stars.filter(star => star.layer === 2),
      layer3: stars.filter(star => star.layer === 3)
    };
  }, [stars]);

  if (!mounted) return null;

  return (
    <div className="animated-stars-background">
      {/* Layer 1 - Small, fast stars */}
      <div className="stars-layer stars-layer-1">
        {starsByLayer.layer1.map(star => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.animationDuration}s`,
              animationDelay: `${star.animationDelay}s`,
            }}
          />
        ))}
      </div>

      {/* Layer 2 - Medium stars */}
      <div className="stars-layer stars-layer-2">
        {starsByLayer.layer2.map(star => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.animationDuration}s`,
              animationDelay: `${star.animationDelay}s`,
            }}
          />
        ))}
      </div>

      {/* Layer 3 - Large, slow stars */}
      <div className="stars-layer stars-layer-3">
        {starsByLayer.layer3.map(star => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.animationDuration}s`,
              animationDelay: `${star.animationDelay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}