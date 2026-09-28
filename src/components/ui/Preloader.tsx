'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06070E] bg-royal-parchment text-[#FAF6F0]"
        >
          {/* Historical Rajasthani Jaali Lattice Overlay */}
          <div className="absolute inset-0 bg-rajasthan-jaali opacity-30 pointer-events-none" />

          {/* Devanagari Royalty Background Watermark */}
          <div className="absolute text-[120px] md:text-[180px] font-bold devanagari-watermark text-[#D4AF37] tracking-widest whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            राजमारू शाही कला
          </div>

          {/* Ornate Rajasthani Jharokha Mandala Seal Animation */}
          <div className="relative w-44 h-44 flex items-center justify-center mb-8">
            {/* Outer Spinning Gold Mandala */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
              className="absolute inset-0 border-2 border-[#D4AF37]/40 rounded-full"
              style={{ strokeDasharray: '6 6' }}
            />
            {/* Inner Counter-Spinning Terracotta Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="absolute inset-3 border border-[#8B3A2B] rounded-full"
            />
            
            {/* Liquid Glass Center Jharokha Seal */}
            <div className="w-28 h-28 rounded-full liquid-glass-gold flex flex-col items-center justify-center shadow-gold-glow border border-[#D4AF37]/60">
              <span className="font-serif text-2xl font-bold tracking-widest gold-text-gradient">
                राजमारू
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#F3E9C6]/80 -mt-1">
                EST. 1894
              </span>
            </div>
          </div>

          {/* Royal Typography Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 z-10 px-4"
          >
            <h2 className="font-serif text-2xl md:text-4xl tracking-[0.3em] font-bold uppercase gold-text-gradient">
              RAJMARU
            </h2>
            <p className="font-script text-2xl text-[#F3E9C6]/90">
              मारवाड़ एवम् मेवाड़ शाही मेहँदी-अंकन घराना
            </p>
            <p className="text-xs tracking-widest text-[#FAF6F0]/60 uppercase font-mono">
              Historical Marwar & Mewar Court Heritage Atelier
            </p>
          </motion.div>

          {/* Liquid Glass Progress Bar */}
          <div className="mt-8 w-72 h-2 rounded-full bg-white/10 overflow-hidden relative border border-[#D4AF37]/30 p-0.5 shadow-gold-glow">
            <motion.div
              className="h-full bg-gradient-to-r from-[#8B3A2B] via-[#D4AF37] to-[#FFF6D1] rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="mt-3 text-xs tracking-[0.25em] text-[#D4AF37] font-mono">
            REVIVING HISTORICAL RAJASTHAN HERITAGE • {progress}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
