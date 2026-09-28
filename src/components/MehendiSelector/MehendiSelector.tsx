'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, RefreshCcw } from 'lucide-react';
import Hand from './Hand';
import MehendiPattern from './MehendiPattern';
import MehendiCone from './MehendiCone';
import MehendiOptions from './MehendiOptions';
import { MehendiType, MEHNDI_DESIGNS, MehendiDesign } from './designs';

export default function MehendiSelector() {
  const [activeType, setActiveType] = useState<MehendiType | null>(null);
  const [conePos, setConePos] = useState({ x: 0, y: 0, visible: false });
  const [isDrawing, setIsDrawing] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleSelectType = (type: MehendiType) => {
    if (activeType === type && isDrawing) return;

    setIsDrawing(false);
    setConePos({ x: 0, y: 0, visible: false });

    setTimeout(() => {
      setActiveType(type);
      setIsDrawing(true);
    }, 50);
  };

  const handleClear = () => {
    setActiveType(null);
    setIsDrawing(false);
    setConePos({ x: 0, y: 0, visible: false });
  };

  const activeDesign: MehendiDesign | null = activeType ? MEHNDI_DESIGNS[activeType] : null;

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] text-[#2C1F17] relative overflow-hidden border-t border-b border-[#D2B48C]/30">
      {/* Decorative Background Watermark */}
      <div className="absolute top-10 left-10 opacity-5 pointer-events-none">
        <svg width="250" height="250" viewBox="0 0 200 200">
          <path d="M 100 20 C 40 20, 20 80, 60 140 C 100 200, 180 180, 160 100 C 140 20, 100 20, 100 20 Z" fill="#3D2612" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-8 space-y-2"
        >
          <div className="inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#C5A059] font-bold">
              INTERACTIVE ARTISAN SIMULATOR
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#2C1F17]">
            Choose Your Mehendi
          </h2>

          <p className="font-script text-2xl text-[#C5A059] font-normal">
            “Watch your design come to life stroke by stroke.”
          </p>
        </motion.div>

        {/* Hand Canvas Viewport Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-md mx-auto mb-8"
        >
          {/* Canvas Box */}
          <div className="relative w-full aspect-[5/6] bg-white rounded-3xl p-4 shadow-2xl border border-[#D2B48C]/40 flex flex-col items-center justify-between overflow-hidden">
            
            {/* SVG Canvas Renderer */}
            <div className="relative w-full h-[420px] flex items-center justify-center">
              <svg
                viewBox="0 0 500 700"
                className="w-full h-full touch-none select-none"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* 3D Shaded Realistic Female Hand */}
                <Hand />

                {/* Animated Mehendi Pattern */}
                <MehendiPattern
                  design={activeDesign}
                  onUpdateConePos={(x, y, visible) => setConePos({ x, y, visible })}
                  onComplete={() => setIsDrawing(false)}
                  reducedMotion={reducedMotion}
                />

                {/* Tracking Cone Tip */}
                <MehendiCone
                  x={conePos.x}
                  y={conePos.y}
                  visible={conePos.visible && !reducedMotion}
                />
              </svg>
            </div>

            {/* Clear Button */}
            {activeType && (
              <button
                onClick={handleClear}
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/95 border border-[#D2B48C]/50 text-xs font-mono text-[#2C1F17] hover:bg-[#2C3E2B] hover:text-white transition-all shadow-md flex items-center gap-1.5 z-20"
              >
                <RefreshCcw className="w-3.5 h-3.5" />
                <span>Reset Hand</span>
              </button>
            )}

            {/* Design Info Tag Bar */}
            {activeDesign && (
              <div className="w-full p-3 rounded-2xl bg-[#FAF8F5] border border-[#D2B48C]/30 text-center shadow-xs mt-2">
                <span className="font-serif text-sm font-bold text-[#2C1F17] block">
                  {activeDesign.name}
                </span>
                <span className="text-[11px] text-[#C5A059] font-mono">
                  {activeDesign.subtitle}
                </span>
              </div>
            )}

          </div>
        </motion.div>

        {/* 5 Mehendi Selection Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <MehendiOptions
            activeType={activeType}
            onSelectType={handleSelectType}
            isDrawing={isDrawing}
          />
        </motion.div>

      </div>
    </section>
  );
}
