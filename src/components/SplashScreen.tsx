'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Phone, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress timer over ~2.5 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 400);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#D81B60] text-white select-none overflow-hidden p-4"
        >
          {/* Soft Luxury Radial Aura Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#FFD700]/20 via-white/25 to-[#FFD700]/20 rounded-full blur-[140px] pointer-events-none" />

          {/* Skip Button Top Right */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-5 right-5 sm:top-8 sm:right-8 z-30 px-5 py-2 rounded-full bg-white hover:bg-[#FFF0F5] text-[#D81B60] border border-white/50 text-xs font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-2 shadow-2xl font-bold hover:scale-105"
          >
            <span>Skip To Studio</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D81B60]" />
          </button>

          {/* Center 3D Digital Visiting Card Showcase */}
          <div className="relative z-10 w-full max-w-lg perspective-[1200px]">
            
            <motion.div
              initial={{ rotateX: 20, rotateY: -15, scale: 0.85, opacity: 0 }}
              animate={{ rotateX: 0, rotateY: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full bg-gradient-to-br from-[#E91E63] via-[#D81B60] to-[#AD1457] rounded-3xl p-6 sm:p-8 border-2 border-[#FFD700]/70 shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_35px_rgba(255,215,0,0.35)] overflow-hidden"
            >
              
              {/* Shimmer Glass Glare Animated Line */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 pointer-events-none"
              />

              {/* Top Row: RSR Emblem, Since 2007 & Contact */}
              <div className="flex items-center justify-between gap-3 border-b border-white/20 pb-4 mb-4">
                
                {/* RSR Yellow Circle Logo Emblem */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FFE082] via-[#FFD54F] to-[#FFC107] text-[#D81B60] flex items-center justify-center font-serif-heading font-black text-base shadow-lg ring-2 ring-white/60 shrink-0">
                    RSR
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#FFE082] font-bold block">
                      SINCE 2007
                    </span>
                    <span className="text-xs font-serif-heading font-bold text-white tracking-wide block">
                      VISHAMBAR JI
                    </span>
                  </div>
                </div>

                {/* Call Badge */}
                <a
                  href="tel:9537157153"
                  className="px-3.5 py-1.5 rounded-full bg-white/15 border border-white/30 text-white font-mono text-[11px] font-bold flex items-center gap-1.5 shadow-sm hover:bg-white hover:text-[#D81B60] transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#FFE082]" />
                  <span>95371 57153</span>
                </a>
              </div>

              {/* Main Brand Title */}
              <div className="space-y-1 text-center py-2">
                <span className="font-script-accent text-4xl sm:text-5xl text-[#FFE082] block drop-shadow-md">
                  Rajasthan
                </span>
                <h1 className="font-serif-heading text-xl sm:text-2xl font-extrabold tracking-wider text-white uppercase leading-none">
                  Mahendi Art & Body Piercing
                </h1>
              </div>

              {/* Specialty Badges Grid from Card */}
              <div className="my-5 grid grid-cols-3 gap-1.5 text-center">
                {['Bridal Dulhan', 'Marwari', 'Rajwadi', 'Afghani', 'Arabic', 'Ear/Nose Piercing'].map((item) => (
                  <div
                    key={item}
                    className="px-2 py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 text-[10px] sm:text-[11px] font-semibold text-white truncate shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Guarantee Banner Box */}
              <div className="bg-white/10 rounded-2xl p-3 border border-white/20 flex items-center justify-between text-left gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FFE082] shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-white leading-tight">
                    Colour & Design Full Guarantee • Free Home Service
                  </span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#FFE082] shrink-0" />
              </div>

              {/* Bottom Yellow Location Strip */}
              <div className="bg-[#FFE082] text-[#3D0C20] rounded-xl px-3.5 py-2 flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-bold text-center leading-tight shadow-md">
                <MapPin className="w-3.5 h-3.5 text-[#D81B60] shrink-0" />
                <span className="truncate">
                  Gangam Plaza, Canal Rd, Opp McDonalds, Vemali, Vadodara
                </span>
              </div>

            </motion.div>

          </div>

          {/* Progress Bar & Inking Counter Below Card */}
          <div className="relative z-10 mt-8 w-full max-w-md space-y-2.5">
            <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden p-0.5 border border-white/30 backdrop-blur-md shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FFE082] via-white to-[#FFE082] rounded-full shadow-md"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-white tracking-wider font-semibold">
              <span className="inline-flex items-center gap-1.5 text-[#FFE082]">
                <Sparkles className="w-3.5 h-3.5 text-[#FFE082] animate-spin-slow" />
                {progress < 40 ? "Loading Vishambar Ji's Card..." : progress < 80 ? "Inking Dulhan Motifs..." : "Welcome to Studio!"}
              </span>
              <span className="font-bold text-white text-xs">{progress}%</span>
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
