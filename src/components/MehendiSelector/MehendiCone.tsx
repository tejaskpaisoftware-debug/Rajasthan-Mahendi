'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MehendiConeProps {
  x: number;
  y: number;
  visible: boolean;
}

export default function MehendiCone({ x, y, visible }: MehendiConeProps) {
  if (!visible) return null;

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: x,
        y: y,
      }}
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 25 },
        y: { type: 'spring', stiffness: 300, damping: 25 },
        opacity: { duration: 0.2 },
      }}
      style={{ pointerEvents: 'none' }}
    >
      {/* Traditional Henna Cone Graphic (Rotated ~45deg pointing to stroke tip) */}
      <g transform="rotate(-40) translate(-3, -40)">
        {/* Main Foil Cone Body */}
        <polygon
          points="0,40 -12,0 12,0"
          fill="url(#coneFoilGradient)"
          stroke="#C5A059"
          strokeWidth="1"
        />

        {/* Gold Tape Band Accent */}
        <polygon points="-8,10 8,10 6,18 -6,18" fill="#D4AF37" />
        <polygon points="-5,24 5,24 3,30 -3,30" fill="#8B3A2B" />

        {/* Dark Henna Paste Tip */}
        <circle cx="0" cy="40" r="2" fill="#3D2612" />

        {/* Small Active Henna Paste Drop at Tip */}
        <circle cx="0" cy="42" r="1.5" fill="#2C1F17" />
      </g>

      {/* SVG Foil Gradient */}
      <defs>
        <linearGradient id="coneFoilGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C5A059" />
          <stop offset="40%" stopColor="#E2C799" />
          <stop offset="70%" stopColor="#8B3A2B" />
          <stop offset="100%" stopColor="#3D2612" />
        </linearGradient>
      </defs>
    </motion.g>
  );
}
