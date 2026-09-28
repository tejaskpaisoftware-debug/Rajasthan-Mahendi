'use client';

import { motion } from 'framer-motion';
import { Sparkles, Award, CheckCircle2, Crown, Scroll } from 'lucide-react';
import Image from 'next/image';
import JharokhaFrame from '@/components/ui/JharokhaFrame';

export default function HeritageStorySection() {
  const milestones = [
    { year: '1894', title: 'Jodhpur Royal Court Guild', desc: 'Crafting bespoke henna stains for the Ranis & Princesses of Marwar royalty.' },
    { year: '1965', title: 'Jaipur Palace Aging Vaults', desc: 'Formula of Himalayan saffron, Nilgiri eucalyptus, & organic Sojat henna leaves.' },
    { year: '2012', title: 'Rajputana Tattoo Atelier', desc: 'Single-needle permanent tattoo line work reproducing sacred sword & temple geometry.' },
    { year: 'Present', title: 'Global Palatial Concierge', desc: 'Modern iOS Liquid Glass UI digital concierge for royal weddings in Udaipur, Dubai, & London.' },
  ];

  return (
    <section id="heritage" className="py-24 relative overflow-hidden bg-[#06070E] bg-royal-parchment border-t border-[#D4AF37]/20">
      {/* Background Jaali Lattice */}
      <div className="absolute inset-0 bg-rajasthan-jaali opacity-25 pointer-events-none" />

      {/* Devanagari background watermark */}
      <div className="absolute text-[130px] font-bold devanagari-watermark text-[#D4AF37] tracking-widest whitespace-nowrap top-1/2 left-10 -translate-y-1/2">
        इतिहास एवम् परम्परा
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D4AF37] flex items-center justify-center gap-2">
            <Crown className="w-4 h-4 text-[#D4AF37]" /> HISTORICAL COURT CHRONICLES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient">
            THE HISTORICAL RAJASTHAN HERITAGE
          </h2>
          <p className="font-script text-2xl text-[#F3E9C6]">
            “मारवाड़ एवम् मेवाड़ राजघराने की अमर चित्रकला तथा मेहँदी धरोहर”
          </p>
          <p className="text-xs sm:text-sm text-[#FAF6F0]/80 font-sans leading-relaxed pt-2">
            From imperial royal courtyards in Jodhpur to palatial destination weddings in Udaipur, discover how our master court artisans preserve centuries-old Marwari linework while pioneering modern tattoo artistry.
          </p>
        </div>

        {/* 2-Column Grid: Visual Story & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Historical Jharokha Framed Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <JharokhaFrame title="HISTORICAL ROYAL PALACE COURT" className="liquid-glass-gold">
              <div className="relative h-[480px] w-full rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-gold-glow-lg group">
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
                  alt="Historical Rajasthan Craftsmanship"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06070E] via-[#06070E]/30 to-transparent" />

                {/* Liquid Glass Overlay Parchment */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl liquid-glass border border-[#D4AF37]/40 backdrop-blur-xl">
                  <span className="font-serif font-bold text-sm gold-text-gradient uppercase tracking-widest block mb-1">
                    The Sacred Imperial Recipe
                  </span>
                  <p className="text-xs text-white/85 leading-relaxed">
                    Every batch of Sojat Henna is hand-sifted thrice through pure silk mesh, soaked in organic Nilgiri essential oils, and aged for 24 hours to achieve deep mahogany burgundy stain darkness.
                  </p>
                </div>
              </div>
            </JharokhaFrame>
          </motion.div>

          {/* Right Column: Historical Timeline & Court Heritage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-white">
                Preserving <span className="gold-text-gradient italic">Marwar & Mewar</span> Court Linework
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                In historical Rajasthan, Mehendi was a sacred royal ritual of blessing, fertility, and cosmic alignment. Our designs meticulously preserve authentic court motifs: the <strong className="text-[#D4AF37]">Jharokha Arch</strong>, <strong className="text-[#D4AF37]">Mayur Peacock</strong>, <strong className="text-[#D4AF37]">Baraat Processions</strong>, and <strong className="text-[#D4AF37]">Mandala of Eternity</strong>.
              </p>
            </div>

            {/* Heritage Timeline Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {milestones.map((m) => (
                <div
                  key={m.year}
                  className="p-4 rounded-2xl liquid-glass-gold border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all"
                >
                  <span className="font-mono text-sm font-bold text-[#D4AF37]">{m.year}</span>
                  <h4 className="font-serif text-xs font-bold text-white mt-1">{m.title}</h4>
                  <p className="text-[11px] text-white/70 mt-1 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
                <Award className="w-4 h-4 text-[#D4AF37]" /> 130+ Years Royal Lineage
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-white/70">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Rajasthan Heritage Guild Certified
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
