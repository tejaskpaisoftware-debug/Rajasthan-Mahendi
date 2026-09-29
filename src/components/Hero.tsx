'use client';

import { ArrowRight, Play, Sparkles, Crown, ShieldCheck, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import RoyalHennaBackground from '@/components/ui/RoyalHennaBackground';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="home" className="relative pt-36 sm:pt-40 md:pt-48 pb-16 sm:pb-20 md:pb-28 bg-gradient-to-b from-[#C2185B] via-[#D81B60] to-[#AD1457] text-white overflow-hidden">
      
      {/* Royal Animated Henna Mandalas & Sparkles Background */}
      <RoyalHennaBackground />

      <div className="container-center-lock relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column Royal Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6 sm:space-y-8 z-10 text-left"
          >
            
            {/* Royal Tagline Badge */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-mono text-[#3D0C20] font-extrabold inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FFE082] via-[#FFD54F] to-[#FFE082] shadow-xl border border-white/60"
            >
              <Crown className="w-4 h-4 text-[#D81B60]" />
              HERITAGE OF RAJASTHAN • ROYAL ATELIER SINCE 2007
            </motion.span>

            {/* Royal Main Headline */}
            <div className="space-y-1.5">
              <h1 className="font-serif-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.05] drop-shadow-md">
                ROYAL MEHNDI <br />
                <span className="text-white">& BODY PIERCING</span>
              </h1>
              <p className="font-script-accent text-3.5xl sm:text-5xl md:text-6xl text-[#FFE082] font-normal pt-1 drop-shadow-lg">
                Ear, Nose & Navel Piercing • By Vishambar Ji
              </p>
            </div>

            {/* Subtext */}
            <p className="text-xs sm:text-sm md:text-base text-white/95 max-w-lg leading-relaxed font-sans font-medium">
              Official royal atelier in Vadodara. Specializing in authentic Marwari & Rajwadi Dulhan Henna, Afghani, Arabic, and 100% sterile gun body piercing (Ear, Nose & Stomach/Belly Button).
            </p>

            {/* Royal Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FFE082] via-[#FFD54F] to-[#FFC107] hover:from-[#FFD54F] hover:to-[#FFA000] text-[#3D0C20] font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-[#FFD54F]/40 hover:scale-105 ring-4 ring-white/40"
              >
                <span>Book Royal Appointment</span>
                <ArrowRight className="w-4 h-4 text-[#3D0C20]" />
              </button>

              <a
                href="tel:9537157153"
                className="flex items-center justify-center gap-3 text-xs uppercase tracking-wider text-white hover:text-[#FFE082] transition-colors py-2 group font-bold"
              >
                <div className="w-10 h-10 rounded-full liquid-glass-pill flex items-center justify-center transition-colors shrink-0 shadow-lg border border-white/60">
                  <Play className="w-4 h-4 text-[#FFE082] fill-[#FFE082] ml-0.5" />
                </div>
                <span>Call Vishambar Ji</span>
              </a>
            </div>

            {/* Royal iOS Liquid Glass Stats Capsules */}
            <div className="pt-6 sm:pt-8 border-t border-white/25 grid grid-cols-3 gap-2 sm:gap-4">
              <div className="liquid-glass-card p-4 rounded-3xl text-center border-2 border-white/80">
                <h3 className="font-serif-heading text-lg sm:text-2xl font-black text-[#3D0C20]">1000+</h3>
                <p className="text-[9px] sm:text-[11px] text-[#D81B60] uppercase tracking-wider font-black">Royal Brides</p>
              </div>
              <div className="liquid-glass-card p-4 rounded-3xl text-center border-2 border-white/80">
                <h3 className="font-serif-heading text-lg sm:text-2xl font-black text-[#3D0C20]">17+</h3>
                <p className="text-[9px] sm:text-[11px] text-[#D81B60] uppercase tracking-wider font-black">Years Court Legacy</p>
              </div>
              <div className="liquid-glass-card p-4 rounded-3xl text-center border-2 border-white/80">
                <h3 className="font-serif-heading text-lg sm:text-2xl font-black text-[#3D0C20]">100%</h3>
                <p className="text-[9px] sm:text-[11px] text-[#D81B60] uppercase tracking-wider font-black">Stain Guarantee</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Royal Rajasthani Jharokha Palatial Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative mt-4 lg:mt-0"
          >
            
            {/* Royal Gold Backlight Aura */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#FFE082]/60 via-[#FFD54F]/40 to-[#FFE082]/60 rounded-t-[10rem] rounded-b-[3rem] blur-3xl opacity-85 animate-soft-backlight pointer-events-none z-0" />

            {/* Jharokha Royal Arch Outer Frame */}
            <div className="relative z-10 p-2 sm:p-3 bg-gradient-to-b from-[#FFE082] via-[#FFD54F] to-[#FFC107] rounded-t-[9rem] rounded-b-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.5),0_0_40px_rgba(255,224,130,0.4)] border-4 border-white">
              
              <div className="relative h-[380px] sm:h-[500px] md:h-[600px] w-full group rounded-t-[8.2rem] rounded-b-[2rem] overflow-hidden bg-[#3D0C20]">
                <img
                  src="/images/home/hero-mehndi.jpg"
                  alt="Rajasthan Mahendi Royal Henna Art"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out"
                />
                
                {/* Subtle Bottom Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D0C20]/80 via-transparent to-transparent" />

                {/* Floating Royal Seal Badge on Bottom Left */}
                <div className="absolute bottom-5 left-5 z-20 liquid-glass-card rounded-2xl p-3 max-w-[220px] sm:max-w-[260px] border-2 border-white/80 flex items-center gap-3 shadow-2xl">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#D81B60] to-[#E91E63] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Award className="w-5 h-5 text-[#FFE082]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D81B60] font-black block">
                      OFFICIAL ROYAL SEAL
                    </span>
                    <span className="text-xs font-serif-heading font-bold text-[#3D0C20] leading-tight block">
                      Vishambar Ji • Since 2007
                    </span>
                  </div>
                </div>

                {/* Vertical Side Gold Filigree Accent */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center opacity-95">
                  <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-[#FFE082] font-black rotate-90 whitespace-nowrap drop-shadow-md">
                    ROYAL • HERITAGE • MEHNDI • PIERCING
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
