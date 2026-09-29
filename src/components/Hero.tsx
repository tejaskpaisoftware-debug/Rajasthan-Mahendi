'use client';

import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="home" className="relative pt-32 sm:pt-36 md:pt-44 pb-12 sm:pb-16 md:pb-24 bg-[#D81B60] text-white overflow-hidden">
      {/* iOS Liquid Ambient Glow Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-gradient-to-br from-white/30 via-[#F8C8DC]/20 to-transparent rounded-full blur-[140px] pointer-events-none" />

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
              className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-mono text-[#D81B60] font-bold inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-pill shadow-lg"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D81B60] animate-spin-slow" />
              RAJASTHAN MAHENDI & PIERCING • SINCE 2007
            </motion.span>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="font-serif-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[1.08]">
                MEHNDI & BODY PIERCING
              </h1>
              <p className="font-script-accent text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F8C8DC] font-normal pt-1 drop-shadow-md">
                Ear, Nose & Navel Piercing • Since 2007
              </p>
            </div>

            {/* Subtext */}
            <p className="text-xs sm:text-sm md:text-base text-white/95 max-w-lg leading-relaxed font-sans font-medium">
              Special Dulhan Mehndi, Marwari, Rajwadi, Afghani, Arabic, and 100% sterile gun body piercing (Ear, Nose & Stomach/Belly Button) by Vishambar Ji in Vadodara.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 pt-1 sm:pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full bg-white hover:bg-[#FFF0F5] text-[#D81B60] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:scale-105 ring-2 ring-white/60"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 text-[#D81B60]" />
              </button>

              <a
                href="tel:9537157153"
                className="flex items-center justify-center gap-3 text-xs uppercase tracking-wider text-white hover:text-[#F8C8DC] transition-colors py-2 group font-semibold"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full liquid-glass-pill flex items-center justify-center transition-colors shrink-0 shadow-md">
                  <Play className="w-3.5 h-3.5 text-[#D81B60] fill-[#D81B60] ml-0.5" />
                </div>
                <span className="font-bold">Call Vishambar Ji</span>
              </a>
            </div>

            {/* iOS Liquid Glass Stats Cards */}
            <div className="pt-6 sm:pt-8 border-t border-white/25 grid grid-cols-3 gap-2 sm:gap-4">
              <div className="liquid-glass-card p-4 rounded-3xl text-center">
                <h3 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#3D0C20]">1000+</h3>
                <p className="text-[9px] sm:text-[11px] text-[#D81B60] uppercase tracking-wider font-extrabold">Happy Clients</p>
              </div>
              <div className="liquid-glass-card p-4 rounded-3xl text-center">
                <h3 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#3D0C20]">17+</h3>
                <p className="text-[9px] sm:text-[11px] text-[#D81B60] uppercase tracking-wider font-extrabold">Years Exp.</p>
              </div>
              <div className="liquid-glass-card p-4 rounded-3xl text-center">
                <h3 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#3D0C20]">100%</h3>
                <p className="text-[9px] sm:text-[11px] text-[#D81B60] uppercase tracking-wider font-extrabold">Stain Guarantee</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column Liquid Glass Frame Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative mt-4 lg:mt-0"
          >
            
            {/* Soft Ambient Backlight Aura Behind Box */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-white/40 via-[#F8C8DC]/50 to-white/40 rounded-[3.5rem] blur-2xl opacity-80 animate-soft-backlight pointer-events-none z-0" />

            {/* Main Outer Box with Dynamic Rotating White Glass Border */}
            <div className="relative z-10 animated-white-border-wrapper shadow-2xl rounded-[2.5rem]">
              <div className="animated-white-border-content relative h-[360px] sm:h-[480px] md:h-[580px] w-full group rounded-[2.2rem] overflow-hidden bg-white">
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
