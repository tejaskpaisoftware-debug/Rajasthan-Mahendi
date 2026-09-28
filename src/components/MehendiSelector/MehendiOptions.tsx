'use client';

import React from 'react';
import { Feather, Sparkles, Crown, Compass, Flower2 } from 'lucide-react';
import { MehendiType, MEHNDI_DESIGNS } from './designs';

interface MehendiOptionsProps {
  activeType: MehendiType | null;
  onSelectType: (type: MehendiType) => void;
  isDrawing: boolean;
}

export default function MehendiOptions({
  activeType,
  onSelectType,
  isDrawing,
}: MehendiOptionsProps) {
  const options: { id: MehendiType; icon: React.ElementType }[] = [
    { id: 'minimal', icon: Feather },
    { id: 'arabic', icon: Sparkles },
    { id: 'rajasthani', icon: Crown },
    { id: 'mandala', icon: Compass },
    { id: 'floral', icon: Flower2 },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {options.map((opt) => {
          const design = MEHNDI_DESIGNS[opt.id];
          const IconComp = opt.icon;
          const isActive = activeType === opt.id;

          return (
            <button
              key={opt.id}
              onClick={() => onSelectType(opt.id)}
              aria-label={`Select ${design.name}`}
              className={`px-4 py-3.5 rounded-2xl font-serif text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 flex flex-col items-center justify-center gap-2 border text-center relative overflow-hidden group ${
                isActive
                  ? 'bg-[#2C3E2B] text-white border-[#D4AF37] shadow-xl scale-105'
                  : 'bg-white/80 text-[#2C1F17] border-[#D2B48C]/40 hover:bg-[#F4E6D4] hover:border-[#C5A059]'
              }`}
            >
              {/* Subtle Gold Edge Highlight on Active */}
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              )}

              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                isActive ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-[#2C1F17]/5 text-[#2C1F17]'
              }`}>
                <IconComp className="w-4 h-4" />
              </div>

              <span>{design.name}</span>

              {/* Status Indicator */}
              {isActive && isDrawing && (
                <span className="text-[9px] font-mono text-[#D4AF37] uppercase tracking-widest animate-pulse">
                  Drawing...
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
