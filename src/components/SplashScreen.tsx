'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Phone, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only show splash screen once per browser session to prevent navigation lag
    if (typeof window !== 'undefined') {
      const hasSeen = sessionStorage.getItem('rs_splash_shown');
      if (hasSeen) {
        setIsVisible(false);
        return;
      }
      setIsVisible(true);
      sessionStorage.setItem('rs_splash_shown', 'true');
    }

    // Smooth lightweight 2-step progress animation (~1.2s duration)
    const t1 = setTimeout(() => setProgress(55), 300);
    const t2 = setTimeout(() => setProgress(100), 1000);
    const t3 = setTimeout(() => setIsVisible(false), 1350);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const dismissSplash = () => {
    setIsVisible(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('rs_splash_shown', 'true');
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
          onClick={dismissSplash}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#D81B60] text-white select-none overflow-hidden p-4 cursor-pointer"
        >
          {/* Soft Lightweight Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-r from-[#FFD700]/20 via-white/15 to-[#FFD700]/20 rounded-full blur-2xl opacity-50 pointer-events-none" />

          {/* Skip Button Top Right */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              dismissSplash();
            }}
            className="absolute top-5 right-5 sm:top-8 sm:right-8 z-30 px-4 py-2 rounded-full bg-white hover:bg-[#FFF0F5] text-[#D81B60] text-xs font-mono tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-lg font-bold"
          >
            <span>Skip To Studio</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D81B60]" />
          </button>

          {/* Center Digital Visiting Card Showcase */}
          <div className="relative z-10 w-full max-w-lg">
            
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative w-full bg-gradient-to-br from-[#E91E63] via-[#D81B60] to-[#AD1457] rounded-3xl p-6 sm:p-8 border-2 border-[#FFD700]/70 shadow-2xl overflow-hidden transform-gpu"
            >
              
              {/* Top Row: RSR Emblem, Since 2007 & Contact */}
              <div className="flex items-center justify-between gap-3 border-b border-white/20 pb-4 mb-4">
                
                {/* RSR Logo Emblem */}
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
                  href="tel:+919537157153"
                  itemProp="telephone"
                  onClick={(e) => e.stopPropagation()}
                  className="px-3.5 py-1.5 rounded-full bg-white/20 border border-white/30 text-white font-mono text-[11px] font-bold flex items-center gap-1.5 shadow-sm"
                >
                  <Phone className="w-3 h-3 text-[#FFE082]" />
                  <span>+91 95371 57153</span>
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

              {/* Specialty Badges Grid */}
              <div className="my-5 grid grid-cols-3 gap-1.5 text-center">
                {['Bridal Dulhan', 'Marwari', 'Rajwadi', 'Afghani', 'Arabic', 'Ear/Nose Piercing'].map((item) => (
                  <div
                    key={item}
                    className="px-2 py-1.5 rounded-xl bg-white/20 border border-white/25 text-[10px] sm:text-[11px] font-semibold text-white truncate shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Guarantee Banner Box */}
              <div className="bg-white/15 rounded-2xl p-3 border border-white/20 flex items-center justify-between text-left gap-2 mb-4">
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
          <div className="relative z-10 mt-6 w-full max-w-md space-y-2">
            <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden p-0.5 border border-white/30 shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-[#FFE082] via-white to-[#FFE082] rounded-full transition-all duration-700 ease-out shadow-md"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-white tracking-wider font-semibold">
              <span className="inline-flex items-center gap-1.5 text-[#FFE082]">
                <Sparkles className="w-3.5 h-3.5 text-[#FFE082]" />
                {progress < 50 ? "Loading Studio Info..." : "Welcome to Studio!"}
              </span>
              <span className="font-bold text-white text-xs">{progress}%</span>
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
