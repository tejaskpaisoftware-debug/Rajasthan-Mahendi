'use client';

import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-16 md:pb-24 bg-[#D81B60] text-white overflow-hidden">
      {/* Background Soft Aura Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-white/20 via-[#F8C8DC]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container-center-lock relative z-10">
        
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
              className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-mono text-[#F8C8DC] font-semibold inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F8C8DC] animate-spin-slow" />
              MORE THAN INK • SINCE 2007
            </motion.span>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="font-serif-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[1.08]">
                TATTOOS & MEHNDI
              </h1>
              <p className="font-script-accent text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F8C8DC] font-normal pt-1 drop-shadow-md">
                That Tell Your Story
              </p>
            </div>

            {/* Subtext */}
            <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-lg leading-relaxed font-sans font-medium">
              Custom designs, skilled master artists, and a luxury studio space in Vadodara where body art meets your finest memories.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 pt-1 sm:pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-[#FFF0F5] text-[#D81B60] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:scale-105"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 text-[#D81B60]" />
              </button>

              <a
                href="tel:9537157153"
                className="flex items-center justify-center gap-3 text-xs uppercase tracking-wider text-white hover:text-[#F8C8DC] transition-colors py-2 group font-semibold"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/40 group-hover:border-white bg-white/15 flex items-center justify-center transition-colors shrink-0 shadow-sm">
                  <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                </div>
                <span className="font-bold">Call Vishambar Ji</span>
              </a>
            </div>

            {/* White Stats Boxes */}
            <div className="pt-6 sm:pt-8 border-t border-white/20 grid grid-cols-3 gap-2 sm:gap-4">
              <div className="p-3.5 rounded-2xl bg-white text-[#3D0C20] shadow-xl border border-white/40">
                <h3 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#3D0C20]">1000+</h3>
                <p className="text-[9px] sm:text-[11px] text-[#D81B60] uppercase tracking-wider font-bold">Happy Clients</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white text-[#3D0C20] shadow-xl border border-white/40">
                <h3 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#3D0C20]">17+</h3>
                <p className="text-[9px] sm:text-[11px] text-[#D81B60] uppercase tracking-wider font-bold">Years Exp.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white text-[#3D0C20] shadow-xl border border-white/40">
                <h3 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#3D0C20]">100%</h3>
                <p className="text-[9px] sm:text-[11px] text-[#D81B60] uppercase tracking-wider font-bold">Stain Guarantee</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column Dynamic Animated White Image Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative mt-4 lg:mt-0"
          >
            
            {/* Soft Ambient Backlight Aura Behind Box */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-white/40 via-[#F8C8DC]/50 to-white/40 rounded-[3rem] blur-2xl opacity-70 animate-soft-backlight pointer-events-none z-0" />

            {/* Main Outer Box with Dynamic Rotating White Border */}
            <div className="relative z-10 animated-white-border-wrapper shadow-2xl">
              <div className="animated-white-border-content relative h-[360px] sm:h-[480px] md:h-[580px] w-full group rounded-3xl overflow-hidden bg-white">
                <img
                  src="/images/home/hero-mehndi.jpg"
                  alt="Rajasthan Mahendi Royal Henna Art"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out"
                />
                
                {/* Subtle Bottom Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#880E4F]/70 via-transparent to-transparent" />

                {/* Vertical Side Text Accent */}
                <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center opacity-90">
                  <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-[0.4em] text-white font-bold rotate-90 whitespace-nowrap drop-shadow-md">
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
