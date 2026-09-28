'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Compass, Eye, Flame, Award } from 'lucide-react';
import Image from 'next/image';

interface TattooArtSectionProps {
  onSelectItem: (item: any) => void;
}

export default function TattooArtSection({ onSelectItem }: TattooArtSectionProps) {
  const tattooItems = [
    {
      id: 't1',
      title: 'Rajputana Shield & Dual Talwar',
      category: 'Sacred Iconography',
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80',
      symbolism: 'Symbolizes honor, ancestral bravery, and eternal defense. Single-needle 3RL shading with gold micro-accents.',
      technique: 'Single-Pass Micro Needle Tattoo Technique.',
      artist: 'Vikramaditya Singh',
      stain: 'Permanent Medical-Grade Ink',
    },
    {
      id: 't2',
      title: 'Celestial Sri Yantra Geometry',
      category: 'Sacred Geometry',
      image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80',
      symbolism: 'Complex interlocking triangles representing cosmic creation, wealth, and spiritual alignment.',
      technique: 'Vector-calibrated dotwork & fine linework.',
      artist: 'Vikramaditya Singh',
      stain: 'Permanent Obsidian Black Ink',
    },
    {
      id: 't3',
      title: 'Devanagari Royal Calligraphy',
      category: 'Custom Calligraphy',
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
      symbolism: 'Hand-scripted ancient Sanskrit slokas & ancestral family crest mottos in royal liquid ink aesthetic.',
      technique: 'Custom calligraphic needle stroke mapping.',
      artist: 'Ananya Mewari',
      stain: 'Permanent Deep Jet Ink',
    },
    {
      id: 't4',
      title: 'Royal Mewar Tiger & Lotus Shield',
      category: 'Rajput Heritage',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      symbolism: 'The ferocious royal tiger guarding a blooming lotus—representing power wrapped in grace.',
      technique: 'Stipple gradient & fine line contours.',
      artist: 'Master Mahendra Marwari',
      stain: 'Permanent Pure Carbon Ink',
    },
  ];

  return (
    <section id="tattoos" className="py-24 relative overflow-hidden bg-[#06070E] border-t border-white/5">
      {/* Ambient background illumination */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D4AF37] flex items-center justify-center gap-2">
            <Flame className="w-3.5 h-3.5" /> PERMANENT HERITAGE ATELIER
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient">
            FINE-LINE TATTOO ARTISTRY
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF6F0]/70 font-sans leading-relaxed">
            Translating ancient Rajasthani sacred symbols and royal heraldry into modern ultra-fine single-needle permanent tattoos.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl liquid-glass border border-white/10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-white mb-1">Medical Sterilization Standard</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Hospital-grade autoclave sterilization, 100% single-use membrane needles, and organic vegan inks.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl liquid-glass border border-white/10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-white mb-1">Bespoke Motif Consultations</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Every tattoo is custom-designed after an in-depth consultation mapping your spiritual geometry & lineage.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl liquid-glass border border-white/10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-white mb-1">Single-Needle Mastery</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Ultra-delicate micro-linework designed to age gracefully without blowouts or fading.
              </p>
            </div>
          </div>
        </div>

        {/* Tattoo Showcase Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tattooItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              onClick={() => onSelectItem(item)}
              className="liquid-glass-card rounded-3xl p-6 liquid-glass-gold border border-[#D4AF37]/30 flex flex-col sm:flex-row gap-6 items-center cursor-pointer group"
            >
              <div className="relative w-full sm:w-48 h-48 rounded-2xl overflow-hidden shrink-0 border border-white/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06070E] via-transparent to-transparent opacity-60" />
              </div>

              <div className="space-y-2 flex-grow">
                <span className="px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  {item.symbolism}
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#D4AF37]">
                  <span>{item.artist}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Inspect <Eye className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
