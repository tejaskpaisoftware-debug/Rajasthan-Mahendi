'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, Grid, Camera } from 'lucide-react';
import Image from 'next/image';

interface PortfolioSectionProps {
  onSelectItem: (item: any) => void;
}

export default function PortfolioSection({ onSelectItem }: PortfolioSectionProps) {
  const [filter, setFilter] = useState('All');

  const galleryItems = [
    {
      id: 'p1',
      title: 'City Palace Udaipur Royal Wedding Set',
      category: 'Bridal',
      size: 'col-span-1 md:col-span-2 row-span-2',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
      symbolism: 'Full bridal arms featuring Jodhpur fort silhouettes, intricate marwari lattice, and customized bride-groom vows.',
      technique: 'Master Mahendra 0.15mm cone technique.',
      artist: 'Master Mahendra Marwari',
    },
    {
      id: 'p2',
      title: 'Sacred Sanskrit Arm Band',
      category: 'Tattoo',
      size: 'col-span-1 row-span-1',
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80',
      symbolism: 'Continuous single-line Sanskrit mantras woven with lotus flower geometry.',
      technique: 'Single-needle permanent tattoo.',
      artist: 'Vikramaditya Singh',
    },
    {
      id: 'p3',
      title: 'Marwar Dulhan Feet Miniature',
      category: 'Bridal',
      size: 'col-span-1 row-span-1',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      symbolism: 'Traditional payal anklet motifs with intricate toe rings and peacock mandalas.',
      technique: 'Organic Sojat henna application.',
      artist: 'Rukmini Devi',
    },
    {
      id: 'p4',
      title: 'Lotus & Sun Chakra Back Piece',
      category: 'Sacred Geometry',
      size: 'col-span-1 row-span-2',
      image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80',
      symbolism: 'Surya solar mandala radiating cosmic vitality down the spinal column.',
      technique: 'Fine needle stipple shading.',
      artist: 'Vikramaditya Singh',
    },
    {
      id: 'p5',
      title: 'Contemporary Luxury Fashion Henna Cuff',
      category: 'Minimalist',
      size: 'col-span-1 md:col-span-2 row-span-1',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
      symbolism: 'Designed for Paris Fashion Week runway model, blending traditional lattice with sleek negative space.',
      technique: 'Organic gold-infused Henna paste.',
      artist: 'Ananya Mewari',
    },
  ];

  const categories = ['All', 'Bridal', 'Tattoo', 'Sacred Geometry', 'Minimalist'];

  const filtered = filter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-[#06070E]">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D4AF37] flex items-center justify-center gap-2">
            <Grid className="w-3.5 h-3.5" /> CURATED GALLERY & BENTO SHOWCASE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient">
            ROYAL PORTFOLIO & COMMISSIONS
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF6F0]/70 font-sans leading-relaxed">
            Explore our archive of high-fashion bridal commissions, royal court designs, and fine-line permanent tattoos.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                filter === c
                  ? 'bg-[#D4AF37] text-black font-semibold shadow-gold-glow'
                  : 'liquid-glass text-white/70 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              onClick={() => onSelectItem(item)}
              className={`relative rounded-3xl overflow-hidden border border-white/10 group cursor-pointer liquid-glass-card ${item.size}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06070E] via-[#06070E]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-end">
                <span className="px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest bg-black/60 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 w-fit mb-2">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg md:text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-white/70 font-mono mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                  <Eye className="w-3.5 h-3.5 text-[#D4AF37]" /> Click to inspect motif details
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
