'use client';

import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-16 md:pb-24 bg-[#FFF0F3] overflow-hidden">
      <div className="container-center-lock">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6 sm:space-y-8 z-10 text-left"
          >
            
            {/* Tagline */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-mono text-[#D81B60] font-semibold inline-flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D81B60] animate-spin-slow" />
              MORE THAN INK • SINCE 2007
            </motion.span>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="font-serif-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#4A0E2E] uppercase leading-[1.08]">
                TATTOOS & MEHNDI
              </h1>
              <p className="font-script-accent text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#D81B60] font-normal pt-1 drop-shadow-sm">
                That Tell Your Story
              </p>
            </div>

            {/* Subtext */}
            <p className="text-xs sm:text-sm md:text-base text-[#4A0E2E]/80 max-w-lg leading-relaxed font-sans font-medium">
              Custom designs, Skilled master artists, A luxury studio space where body art meets your memories.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 pt-1 sm:pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D81B60] via-[#E91E63] to-[#AD1457] hover:from-[#AD1457] hover:to-[#880E4F] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-xl hover:scale-105"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:9537157153"
                className="flex items-center justify-center gap-3 text-xs uppercase tracking-wider text-[#4A0E2E] hover:text-[#D81B60] transition-colors py-2 group font-semibold"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D81B60]/40 group-hover:border-[#D81B60] bg-[#FCE4EC] flex items-center justify-center transition-colors shrink-0 shadow-sm">
                  <Play className="w-3.5 h-3.5 text-[#D81B60] fill-[#D81B60] ml-0.5" />
                </div>
                <span className="font-semibold">Call Vishambar Ji</span>
              </a>
            </div>

            {/* Stats Bar */}
            <div className="pt-6 sm:pt-8 border-t border-[#FCE4EC] grid grid-cols-3 gap-2 sm:gap-4">
              <div className="p-3 rounded-2xl bg-white/80 border border-[#FCE4EC] shadow-sm backdrop-blur-sm">
                <h3 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#880E4F]">1000+</h3>
                <p className="text-[9px] sm:text-[11px] text-[#4A0E2E]/70 uppercase tracking-wider font-medium">Happy Clients</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 border border-[#FCE4EC] shadow-sm backdrop-blur-sm">
                <h3 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#880E4F]">17+</h3>
                <p className="text-[9px] sm:text-[11px] text-[#4A0E2E]/70 uppercase tracking-wider font-medium">Years Exp.</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 border border-[#FCE4EC] shadow-sm backdrop-blur-sm">
                <h3 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#880E4F]">100%</h3>
                <p className="text-[9px] sm:text-[11px] text-[#4A0E2E]/70 uppercase tracking-wider font-medium">Stain Guarantee</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column Dynamic Animated Mehndi Image Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative mt-4 lg:mt-0"
          >
            
            {/* Soft Ambient Backlight Aura Behind Box */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#F8BBD0]/40 via-[#FCE4EC] to-[#F48FB1]/40 rounded-[3rem] blur-2xl opacity-60 animate-soft-backlight pointer-events-none z-0" />

            {/* Main Outer Box with Metallic Gold Dynamic Rotating Border */}
            <div className="relative z-10 animated-white-border-wrapper shadow-xl">
              <div className="animated-white-border-content relative h-[360px] sm:h-[480px] md:h-[580px] w-full group rounded-3xl overflow-hidden">
                <img
                  src="/images/home/hero-mehndi.jpg"
                  alt="Rajasthan Mahendi Royal Henna Art"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out"
                />
                
                {/* Subtle Bottom Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A0E2E]/40 via-transparent to-transparent" />

                {/* Vertical Side Text Accent */}
                <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center opacity-85">
                  <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-[0.4em] text-white font-semibold rotate-90 whitespace-nowrap drop-shadow-md">
                    HERITAGE • MEHNDI • ART
                  </span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
