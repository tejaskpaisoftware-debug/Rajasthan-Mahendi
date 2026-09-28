'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, Feather, Clock, Crown, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import JharokhaFrame from '@/components/ui/JharokhaFrame';

interface MehendiArtSectionProps {
  onSelectItem: (item: any) => void;
}

export default function MehendiArtSection({ onSelectItem }: MehendiArtSectionProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  const mehendiItems = [
    {
      id: 'm1',
      title: 'Royal Dulhan Miniature Storytelling',
      category: 'Royal Bridal',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      symbolism: 'Features detailed palatial Baraat procession, Radha-Krishna court mini-portraits, and intricate Marwar lattice mesh.',
      technique: 'Triple-sifted Sojat Organics with Nilgiri Eucalyptus essential oil.',
      artist: 'Master Mahendra Marwari (5th Gen)',
      stain: 'Deep Mahogany Burgundy (14-21 Days)',
    },
    {
      id: 'm2',
      title: 'Udaipur Palatial Jharokha Mandala',
      category: 'Marwari Classic',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      symbolism: 'Architectural arches modeled after City Palace Jharokhas representing celestial protection and regal dignity.',
      technique: 'Symmetric court cone flow with 0.15mm precision tip.',
      artist: 'Rukmini Devi',
      stain: 'Rich Chestnut (12-18 Days)',
    },
    {
      id: 'm3',
      title: 'Persian & Arabic Fusion Scroll',
      category: 'Arabic Fusion',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80',
      symbolism: 'Flowing vine scrolls and oversized floral blooms celebrating nature, beauty, and auspicious beginnings.',
      technique: 'Bold shade fill mixed with delicate negative space linework.',
      artist: 'Ananya Mewari',
      stain: 'Deep Auburn (10-14 Days)',
    },
    {
      id: 'm4',
      title: 'Minimalist Fine-Cuff Henna Bracelet',
      category: 'Minimalist Fine',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      symbolism: 'Subtle wrist mandala geometric bands designed for modern luxury fashion editorials and daily elegance.',
      technique: 'Micro-dotting & ultra-fine single line henna application.',
      artist: 'Vikramaditya Singh',
      stain: 'Dark Copper (7-10 Days)',
    },
    {
      id: 'm5',
      title: 'Imperial Mayur Peacock Dulhan Set',
      category: 'Royal Bridal',
      image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80',
      symbolism: 'Dancing peacocks denoting royalty, love, and rain blessing across full arms and feet.',
      technique: '24-hour slow cure formula with golden shimmer dust finish.',
      artist: 'Master Mahendra Marwari',
      stain: 'Deep Royal Mahogany (16-21 Days)',
    },
    {
      id: 'm6',
      title: 'Sacred Lotus Geometry Palms',
      category: 'Marwari Classic',
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80',
      symbolism: 'Concentric lotus mandala on palms symbolizing purity, spiritual awakenings, and prosperity.',
      technique: 'Classic Marwari lattice grid technique.',
      artist: 'Rukmini Devi',
      stain: 'Rich Chestnut (12-16 Days)',
    },
  ];

  const filters = ['All', 'Royal Bridal', 'Marwari Classic', 'Arabic Fusion', 'Minimalist Fine'];

  const filteredItems = activeFilter === 'All'
    ? mehendiItems
    : mehendiItems.filter(item => item.category === activeFilter);

  return (
    <section id="mehendi" className="py-24 relative overflow-hidden bg-[#06070E] bg-royal-parchment">
      {/* Background Jaali Mesh */}
      <div className="absolute inset-0 bg-rajasthan-jaali opacity-30 pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D4AF37] flex items-center justify-center gap-2">
            <Crown className="w-4 h-4 text-[#D4AF37]" /> SACRED MARWAR COURT BOTANICAL ART
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient">
            ROYAL COURT MEHENDI ARTISTRY
          </h2>
          <p className="font-script text-2xl text-[#F3E9C6]">
            “राजपूताना शाही हरियाली मेहँदी तथा चित्रकला”
          </p>
          <p className="text-xs sm:text-sm text-[#FAF6F0]/80 font-sans leading-relaxed pt-1">
            Hand-drawn with surgical court precision using 100% triple-filtered Sojat Henna leaves infused with organic eucalyptus & clove oil.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#8B3A2B] text-black shadow-gold-glow scale-105'
                  : 'liquid-glass text-white/70 hover:text-white hover:border-[#D4AF37]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              onClick={() => onSelectItem(item)}
              className="cursor-pointer"
            >
              <JharokhaFrame title={item.category.toUpperCase()} className="liquid-glass-gold h-full flex flex-col justify-between">
                <div>
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-4 border border-[#D4AF37]/30 group">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06070E] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Imperial Wax Seal Badge */}
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest bg-[#8B3A2B]/80 text-[#FFF6D1] border border-[#D4AF37] shadow-gold-glow flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#D4AF37]" /> शाही मुहर
                    </span>

                    {/* Inspect Overlay Trigger */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-xs">
                      <span className="px-5 py-2 rounded-full bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-gold-glow">
                        <Eye className="w-4 h-4" /> Inspect Motif Symbolism
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#D4AF37]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#D4AF37]" /> {item.stain}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/70 line-clamp-2 leading-relaxed font-sans">
                      {item.symbolism}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
                  <span>Artisan: {item.artist}</span>
                  <span className="text-[#D4AF37] font-bold">Inspect →</span>
                </div>
              </JharokhaFrame>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
