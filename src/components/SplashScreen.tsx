'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter animation from 0% to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FFF0F3] text-[#4A0E2E] select-none overflow-hidden"
        >
          {/* Ambient Background Soft Rose Spotlights */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#F8BBD0]/30 via-[#FCE4EC]/40 to-[#F48FB1]/30 rounded-full blur-[120px] pointer-events-none" />

          {/* Skip Button Top Right */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-6 right-6 z-20 px-4 py-1.5 rounded-full bg-white/90 hover:bg-[#FCE4EC] text-[#4A0E2E] border border-[#FCE4EC] text-xs font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-1.5 shadow-sm font-semibold"
          >
            <span>Skip</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D81B60]" />
          </button>

          {/* Main Tattoo Inking & Artwork Container */}
          <div className="relative flex flex-col items-center justify-center px-6 text-center z-10">

            {/* Glowing Brand Emblem Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-20 h-20 mb-6 flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D81B60]/30 to-[#AD1457]/30 blur-md animate-pulse" />
              <div className="w-16 h-16 rounded-full bg-white border-2 border-[#D81B60] flex items-center justify-center font-serif-heading font-bold text-[#D81B60] text-xl shadow-md">
                RM
              </div>
            </motion.div>

            {/* SVG Animated Tattoo & Henna Drawing Canvas */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 my-2 flex items-center justify-center">
              
              {/* Outer Spinning Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-[#D81B60]/30 border-dashed"
              />

              {/* Animated SVG Path Drawing Peacock & Lotus Tattoo Motif */}
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full text-[#D81B60] drop-shadow-[0_0_8px_rgba(216,27,96,0.3)]"
              >
                {/* Central Mandala Circle */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="535"
                  strokeDashoffset={535 - (535 * progress) / 100}
                  strokeLinecap="round"
                />

                <motion.circle
                  cx="100"
                  cy="100"
                  r="65"
                  fill="none"
                  stroke="#E91E63"
                  strokeWidth="1"
                  strokeDasharray="408"
                  strokeDashoffset={408 - (408 * progress) / 100}
                />

                {/* Tattoo Needle Line Drawing - Peacock Arch */}
                <motion.path
                  d="M100,35 C125,35 145,55 145,80 C145,115 100,165 100,165 C100,165 55,115 55,80 C55,55 75,35 100,35 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="400"
                  strokeDashoffset={400 - (400 * progress) / 100}
                  strokeLinecap="round"
                />

                {/* Inner Peacock Feather Details */}
                <motion.path
                  d="M100,55 C115,55 125,68 125,82 C125,105 100,140 100,140 C100,140 75,105 75,82 C75,68 85,55 100,55 Z"
                  fill="none"
                  stroke="#E91E63"
                  strokeWidth="1.5"
                  strokeDasharray="300"
                  strokeDashoffset={300 - (300 * progress) / 100}
                />

                {/* Peacock Eye Feather Center Motif */}
                <motion.path
                  d="M100,75 Q112,90 100,105 Q88,90 100,75 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="150"
                  strokeDashoffset={150 - (150 * progress) / 100}
                />

                {/* Decorative Sunburst Rays */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x1 = 100 + 72 * Math.cos(rad);
                  const y1 = 100 + 72 * Math.sin(rad);
                  const x2 = 100 + 82 * Math.cos(rad);
                  const y2 = 100 + 82 * Math.sin(rad);
                  return (
                    <motion.line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#D81B60"
                      strokeWidth="1.5"
                      strokeDasharray="20"
                      strokeDashoffset={20 - (20 * progress) / 100}
                      strokeLinecap="round"
                    />
                  );
                })}
              </svg>

              {/* Glowing Laser Inking Tip Dot following progression */}
              <div
                className="absolute w-3 h-3 rounded-full bg-[#D81B60] shadow-[0_0_15px_#D81B60,0_0_25px_#F48FB1] pointer-events-none transition-all duration-75"
                style={{
                  top: `${50 - 35 * Math.cos((progress * 3.6 * Math.PI) / 180)}%`,
                  left: `${50 + 35 * Math.sin((progress * 3.6 * Math.PI) / 180)}%`,
                }}
              />
            </div>

            {/* Brand Title & Subtext */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 space-y-1"
            >
              <span className="text-[10px] uppercase font-mono tracking-[0.35em] text-[#D81B60] inline-flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-3 h-3 text-[#D81B60]" />
                INKING ROYAL MAHENDI & TATTOO ART
              </span>

              <h1 className="font-serif-heading text-2xl sm:text-4xl font-bold tracking-tight text-[#4A0E2E] uppercase pt-1">
                Rajasthan Mahendi Art
              </h1>
              
              <p className="font-script-accent text-xl sm:text-2xl text-[#D81B60] font-semibold">
                By Master Artist Vishambar Ji • Vadodara
              </p>
            </motion.div>

            {/* Progress Bar & Counter */}
            <div className="mt-8 w-64 sm:w-80 space-y-2">
              <div className="h-1.5 w-full bg-white rounded-full overflow-hidden p-0.5 border border-[#FCE4EC] shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#D81B60] via-[#E91E63] to-[#AD1457] rounded-full shadow-sm"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[#D81B60] uppercase tracking-wider font-semibold">
                <span>{progress < 40 ? "Drawing Stencil..." : progress < 80 ? "Inking Peacock Motif..." : "Finalizing Stain..."}</span>
                <span className="font-bold text-[#4A0E2E]">{progress}%</span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
