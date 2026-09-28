'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'standard' | 'gold' | 'terracotta';
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className,
  variant = 'standard',
  hoverEffect = true,
}: GlassCardProps) {
  const variantClasses = {
    standard: 'liquid-glass',
    gold: 'liquid-glass-gold',
    terracotta: 'bg-gradient-to-br from-[#8B3A2B]/20 to-[#06070E]/80 backdrop-blur-xl border border-[#8B3A2B]/30 shadow-2xl',
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6, scale: 1.01 } : undefined}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-300',
        variantClasses[variant],
        className
      )}
    >
      {/* Specular Highlight Line top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
      {children}
    </motion.div>
  );
}
