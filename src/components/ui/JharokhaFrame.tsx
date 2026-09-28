'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface JharokhaFrameProps {
  children: ReactNode;
  className?: string;
  variant?: 'gold' | 'terracotta' | 'dark';
  title?: string;
}

export default function JharokhaFrame({
  children,
  className,
  variant = 'gold',
  title,
}: JharokhaFrameProps) {
  return (
    <div className={cn("relative p-6 md:p-8 rounded-3xl overflow-hidden transition-all duration-500", className)}>
      {/* Historical Rajasthani Jharokha Arch Border Overlay (SVG) */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top Multi-Foil Jharokha Crown Arch */}
          <path
            d="M 0 40 C 80 40, 120 0, 200 0 C 280 0, 320 40, 400 40 L 400 500 L 0 500 Z"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            opacity="0.6"
          />
          {/* Corner Filigree Flourishes */}
          <path d="M 15 15 Q 40 15, 40 40" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
          <path d="M 385 15 Q 360 15, 360 40" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
          <path d="M 15 485 Q 40 485, 40 460" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
          <path d="M 385 485 Q 360 485, 360 460" stroke="#D4AF37" strokeWidth="1.5" fill="none" />

          {/* Gradients */}
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F3E9C6" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8B3A2B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Royal Seal Top Ornament */}
      {title && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 px-4 py-1 rounded-b-xl bg-gradient-to-r from-[#8B3A2B] via-[#D4AF37] to-[#8B3A2B] text-[#06070E] font-serif text-[10px] font-bold uppercase tracking-[0.25em] shadow-gold-glow flex items-center gap-1.5 border-b border-[#D4AF37]">
          <span>◆</span>
          <span>{title}</span>
          <span>◆</span>
        </div>
      )}

      {/* Background Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
