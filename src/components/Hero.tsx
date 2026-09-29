'use client';

import { ArrowRight, Play, Sparkles, Crown, ShieldCheck, Award, Heart, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import RoyalHennaBackground from '@/components/ui/RoyalHennaBackground';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="home" className="relative pt-32 sm:pt-36 md:pt-44 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-b from-[#C2185B] via-[#D81B60] to-[#AD1457] text-white overflow-hidden">
      
      {/* Animated Royal Golden Henna Mandalas & Sparkles Background */}
      <RoyalHennaBackground />

      <div className="container-center-lock relative z-10">
        
        {/* Top Centered Royal Atelier Header (Inspired by MehndiDesigner) */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-12">
          
          {/* Top Royal Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#FFE082] via-[#FFD54F] to-[#FFE082] text-[#3D0C20] font-black text-[10px] sm:text-xs uppercase tracking-[0.25em] shadow-xl border border-white/60"
          >
            <Crown className="w-4 h-4 text-[#D81B60]" />
            <span>VISHAMBAR JI • RAJASTHAN MAHENDI & PIERCING (SINCE 2007)</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.06] drop-shadow-md"
          >
            BRIDAL DULHAN MEHNDI <br />
            <span className="text-[#FFE082] font-serif-heading">& BODY PIERCING</span>
          </motion.h1>

          {/* Script Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-script-accent text-3xl sm:text-4xl md:text-5xl text-[#F8C8DC] font-normal drop-shadow-md"
          >
            Marwari • Rajwadi • Afghani • Ear, Nose & Navel Piercing
          </motion.p>

          {/* Subtext */}
          <p className="text-xs sm:text-sm md:text-base text-white/95 max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            Committed to making your special wedding & celebration a memorable one. 100% Organic Sojat Henna, 17+ years legacy, and sterile body piercing with free home service across Vadodara.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#FFE082] via-[#FFD54F] to-[#FFC107] hover:from-[#FFD54F] hover:to-[#FFA000] text-[#3D0C20] font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-[#FFD54F]/40 hover:scale-105 ring-4 ring-white/40"
            >
              <span>Book Royal Appointment</span>
              <ArrowRight className="w-4 h-4 text-[#3D0C20]" />
            </button>

            <a
              href="tel:9537157153"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full liquid-glass-pill text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg hover:scale-105 transition-all"
            >
              <Play className="w-3.5 h-3.5 text-[#FFE082] fill-[#FFE082]" />
              <span>Call Vishambar Ji: 95371 57153</span>
            </a>
          </div>

        </div>

        {/* Dual-Card Royal Feature Showcase Grid (Inspired by MehndiDesigner.com) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Card 1: Royal Dulhan Henna Jharokha Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="p-2.5 bg-gradient-to-b from-[#FFE082] via-[#FFD54F] to-[#FFC107] rounded-t-[8rem] rounded-b-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.4)] border-2 border-white">
              <div className="relative h-[340px] sm:h-[440px] w-full rounded-t-[7.5rem] rounded-b-[1.6rem] overflow-hidden bg-[#3D0C20]">
                <img
                  src="/images/home/bridal-mehndi.jpg"
                  alt="Royal Bridal Dulhan Mehndi"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D0C20]/80 via-transparent to-transparent" />

                {/* Card Tag Overlay */}
                <div className="absolute top-6 left-6 liquid-glass-card rounded-full px-4 py-1.5 border border-white/80 flex items-center gap-2 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-[#D81B60]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#3D0C20] font-black">
                    ROYAL DULHAN HENNA
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <h3 className="font-serif-heading text-lg font-bold text-[#FFE082]">
                    Marwari & Rajwadi Wedding Henna
                  </h3>
                  <p className="text-xs text-white/90 font-medium">
                    Detailed Doli, Baraat & Radha-Krishna portraits with 100% dark stain guarantee.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Sterile Body Piercing Jharokha Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative group"
          >
            <div className="p-2.5 bg-gradient-to-b from-[#FFE082] via-[#FFD54F] to-[#FFC107] rounded-t-[8rem] rounded-b-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.4)] border-2 border-white">
              <div className="relative h-[340px] sm:h-[440px] w-full rounded-t-[7.5rem] rounded-b-[1.6rem] overflow-hidden bg-[#3D0C20]">
                <img
                  src="/images/tattoos/fine-line.jpg"
                  alt="Ear, Nose & Stomach Body Piercing"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D0C20]/80 via-transparent to-transparent" />

                {/* Card Tag Overlay */}
                <div className="absolute top-6 left-6 liquid-glass-card rounded-full px-4 py-1.5 border border-white/80 flex items-center gap-2 shadow-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D81B60]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#3D0C20] font-black">
                    STERILE GUN PIERCING
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <h3 className="font-serif-heading text-lg font-bold text-[#FFE082]">
                    Ear, Nose & Navel Body Piercing
                  </h3>
                  <p className="text-xs text-white/90 font-medium">
                    100% painless sterile gun ear lobe, tragus, nose pin & belly button piercing.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Royal Ribbon of Trust Capsules */}
        <div className="mt-12 pt-8 border-t border-white/25 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-5xl mx-auto">
          <div className="liquid-glass-card p-4 rounded-3xl text-center border-2 border-white/80">
            <h4 className="font-serif-heading text-lg sm:text-2xl font-black text-[#3D0C20]">1000+</h4>
            <p className="text-[9px] sm:text-[11px] text-[#D81B60] uppercase tracking-wider font-black">Royal Brides</p>
          </div>
          <div className="liquid-glass-card p-4 rounded-3xl text-center border-2 border-white/80">
            <h4 className="font-serif-heading text-lg sm:text-2xl font-black text-[#3D0C20]">17+ Yrs</h4>
            <p className="text-[9px] sm:text-[11px] text-[#D81B60] uppercase tracking-wider font-black">Court Legacy</p>
          </div>
          <div className="liquid-glass-card p-4 rounded-3xl text-center border-2 border-white/80">
            <h4 className="font-serif-heading text-lg sm:text-2xl font-black text-[#3D0C20]">100%</h4>
            <p className="text-[9px] sm:text-[11px] text-[#D81B60] uppercase tracking-wider font-black">Stain Guarantee</p>
          </div>
          <div className="liquid-glass-card p-4 rounded-3xl text-center border-2 border-white/80">
            <h4 className="font-serif-heading text-lg sm:text-2xl font-black text-[#3D0C20]">FREE</h4>
            <p className="text-[9px] sm:text-[11px] text-[#D81B60] uppercase tracking-wider font-black">Home Service</p>
          </div>
        </div>

      </div>
    </section>
  );
}
