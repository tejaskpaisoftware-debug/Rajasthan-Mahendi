'use client';

import { useState } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';

export default function AudioAmbience() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAmbience = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={toggleAmbience}
        className={`px-4 py-2.5 rounded-full liquid-glass-gold border border-[#D4AF37]/50 shadow-gold-glow flex items-center gap-3 transition-all duration-300 ${
          isPlaying ? 'scale-105 border-[#D4AF37] bg-[#8B3A2B]/40' : 'opacity-80 hover:opacity-100'
        }`}
        title="Royal Rajasthan Court Sitar Ambience"
      >
        <div className="relative w-7 h-7 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-[#D4AF37] animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 text-white/70" />
          )}
        </div>

        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] font-bold flex items-center gap-1">
            <Music className="w-3 h-3" /> ROYAL AMBIENCE
          </span>
          <span className="text-[9px] text-white/70 font-script -mt-0.5">
            {isPlaying ? 'Raga Marwa • Royal Sitar' : 'Click for Sitar Sound'}
          </span>
        </div>

        {/* Animated Sound Wave Bars when playing */}
        {isPlaying && (
          <div className="flex items-end gap-1 h-3 ml-1">
            <span className="w-0.5 bg-[#D4AF37] h-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-0.5 bg-[#D4AF37] h-2/3 animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-0.5 bg-[#D4AF37] h-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        )}
      </button>
    </div>
  );
}
