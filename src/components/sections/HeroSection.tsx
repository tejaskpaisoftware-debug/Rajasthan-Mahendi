'use client';

import { motion } from 'framer-motion';
import { Crown, Sparkles, ArrowRight, ShieldCheck, Feather, Star } from 'lucide-react';
import Image from 'next/image';
import JharokhaFrame from '@/components/ui/JharokhaFrame';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden bg-[#06070E] bg-royal-parchment">
      {/* Historical Rajasthani Jaali Background Overlay */}
      <div className="absolute inset-0 bg-rajasthan-jaali opacity-30 pointer-events-none" />

      {/* Devanagari Royalty Background Watermark */}
      <div className="absolute text-[140px] md:text-[220px] font-bold devanagari-watermark text-[#D4AF37] tracking-widest whitespace-nowrap top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        शाही मारवाड़ी मेहँदी
      </div>

      {/* Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(139,58,43,0.25)_0%,rgba(212,175,55,0.15)_40%,transparent_70%)] rounded-full blur-[130px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Royal Seal Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full liquid-glass-gold shadow-gold-glow border border-[#D4AF37]/50 text-xs uppercase tracking-[0.25em] text-[#FFF6D1]"
          >
            <Crown className="w-4 h-4 text-[#D4AF37]" />
            <span>EST. 1894 • ROYAL MARWAR & MEWAR COURT GUILD</span>
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          </motion.div>

          {/* Main Royal Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="space-y-4 max-w-5xl"
          >
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-[#FAF6F0]">
              HISTORICAL <span className="gold-text-gradient font-serif italic">RAJASTHAN</span> ROYAL COURT <span className="terracotta-text-gradient">HENNA</span> & TATTOO ATELIER
            </h1>
            <p className="font-script text-2xl sm:text-4xl text-[#F3E9C6] font-normal pt-2">
              “जोधपुर एवम् उदयपुर के शाही दरबारों की पावन मेहँदी कला परम्परा”
            </p>
          </motion.div>

          {/* Subtext description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl text-sm md:text-base text-[#FAF6F0]/85 leading-relaxed font-sans font-light"
          >
            Immerse yourself in centuries of royal court heritage. From imperial Jharokha palatial arches and Radha-Krishna mini-portraits to single-needle Rajputana talismans—crafted with 100% triple-sifted organic Sojat Henna and hospital-grade permanent tattoo mastery.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-2"
          >
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FFF6D1] via-[#D4AF37] to-[#8B3A2B] text-[#06070E] font-bold text-xs uppercase tracking-[0.2em] shadow-gold-glow-lg hover:scale-105 transition-all flex items-center gap-3 group"
            >
              <span>Reserve Royal Concierge Session</span>
              <ArrowRight className="w-4 h-4 text-[#06070E] group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#mehendi"
              className="px-8 py-4 rounded-full liquid-glass-gold text-xs uppercase tracking-[0.2em] text-[#FAF6F0] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all flex items-center gap-2 border border-[#D4AF37]/40 shadow-gold-glow"
            >
              <Feather className="w-4 h-4 text-[#D4AF37]" />
              <span>Explore Historical Portfolio</span>
            </a>
          </motion.div>

          {/* Historical Jharokha Bento Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-full mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
          >
            {/* Card 1: Royal Dulhan Henna */}
            <JharokhaFrame title="ROYAL BRIDAL DULHAN" className="liquid-glass-gold">
              <div className="relative h-52 rounded-2xl overflow-hidden mb-4 border border-[#D4AF37]/30">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                  alt="Royal Rajasthani Bridal Henna"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06070E] via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest bg-black/70 text-[#D4AF37] border border-[#D4AF37]/50">
                  MARWAR DULHAN
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-1">Palace Baraat Linework</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Miniature Radha-Krishna court storytelling, royal palanquins, & Jharokha window lattice mesh.
              </p>
            </JharokhaFrame>

            {/* Card 2: Rajputana Fine Line Tattoo */}
            <JharokhaFrame title="RAJPUT HERALDRY" className="liquid-glass-gold">
              <div className="relative h-52 rounded-2xl overflow-hidden mb-4 border border-[#D4AF37]/30">
                <Image
                  src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80"
                  alt="Fine Line Rajputana Tattoo"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06070E] via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest bg-[#D4AF37] text-black font-bold">
                  RAJPUTANA TATTOO
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold gold-text-gradient mb-1">Sacred Talismans & Swords</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Single-needle ancestral talismans, royal Mewar shield heraldry, & Sanskrit devanagari slokas.
              </p>
            </JharokhaFrame>

            {/* Card 3: Royal Court Trust */}
            <JharokhaFrame title="ROYAL HERITAGE GUILD" className="liquid-glass-gold">
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <h3 className="font-serif text-lg font-bold text-white">Consistently Voted #1 Royal Atelier</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Trusted across palatial weddings at Umaid Bhawan Jodhpur, City Palace Udaipur, & Oberoi Udaivilas.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[11px] font-mono text-[#D4AF37]">100% Organic Sojat Henna</span>
                </div>
                <span className="text-[11px] font-mono text-white/60">Jaipur • Udaipur • Jodhpur</span>
              </div>
            </JharokhaFrame>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
