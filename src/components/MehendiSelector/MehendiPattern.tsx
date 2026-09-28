'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MehendiDesign } from './designs';

interface MehendiPatternProps {
  design: MehendiDesign | null;
  onUpdateConePos: (x: number, y: number, visible: boolean) => void;
  onComplete?: () => void;
  reducedMotion?: boolean;
}

export default function MehendiPattern({
  design,
  onUpdateConePos,
  onComplete,
  reducedMotion = false,
}: MehendiPatternProps) {
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    if (!design) {
      onUpdateConePos(0, 0, false);
      return;
    }

    if (reducedMotion) {
      onUpdateConePos(0, 0, false);
      if (onComplete) onComplete();
      return;
    }

    let isMounted = true;
    let accumulatedDelay = 0;

    design.groups.forEach((group, index) => {
      const duration = (group.duration || 1) * 1000;
      const delay = (group.delay || 0) * 1000;

      setTimeout(() => {
        if (!isMounted) return;
        const pathEl = pathRefs.current[index];
        if (!pathEl) return;

        onUpdateConePos(0, 0, true);
        const totalLen = pathEl.getTotalLength();
        const startTime = performance.now();

        const step = (now: number) => {
          if (!isMounted) return;
          const elapsed = now - startTime;
          const progress = Math.min(1, elapsed / duration);
          const point = pathEl.getPointAtLength(progress * totalLen);

          onUpdateConePos(point.x, point.y, true);

          if (progress < 1) {
            requestAnimationFrame(step);
          } else if (index === design.groups.length - 1) {
            setTimeout(() => {
              if (isMounted) {
                onUpdateConePos(0, 0, false);
                if (onComplete) onComplete();
              }
            }, 300);
          }
        };

        requestAnimationFrame(step);
      }, delay);

      accumulatedDelay = Math.max(accumulatedDelay, delay + duration);
    });

    return () => {
      isMounted = false;
      onUpdateConePos(0, 0, false);
    };
  }, [design, reducedMotion]);

  if (!design) return null;

  return (
    <g id="mehendi-drawing-pattern-realistic">
      <defs>
        {/* Realistic Henna Paste 3D Relief Filter */}
        <filter id="hennaPaste3D" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0.8" dy="1.2" stdDeviation="0.8" floodColor="#1A0A02" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Layer 1: Under-Stain Warm Henna Tint */}
      {design.groups.map((group, idx) => (
        <motion.path
          key={`tint-${design.id}-${group.id}`}
          d={group.d}
          fill="none"
          stroke="#5C2D12"
          strokeWidth={(group.strokeWidth || 2.5) + 1.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.35"
          initial={{ pathLength: reducedMotion ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : {
                  duration: group.duration || 1,
                  delay: group.delay || 0,
                  ease: 'easeInOut',
                }
          }
        />
      ))}

      {/* Layer 2: Main Rich Organic Dark Henna Paste Line */}
      {design.groups.map((group, idx) => (
        <motion.path
          key={`main-${design.id}-${group.id}`}
          ref={(el) => {
            pathRefs.current[idx] = el;
          }}
          d={group.d}
          fill="none"
          stroke="#2C1405" // Dark Organic Henna Paste Mahogany
          strokeWidth={group.strokeWidth || 2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#hennaPaste3D)"
          initial={{ pathLength: reducedMotion ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : {
                  duration: group.duration || 1,
                  delay: group.delay || 0,
                  ease: 'easeInOut',
                }
          }
        />
      ))}
    </g>
  );
}
