'use client';

import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface GalleryProps {
  onSelectItem: (item: any) => void;
}

export default function Gallery({ onSelectItem }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  const galleryItems = [
    {
      id: 'g1',
      title: 'Fine Line Floral Tattoo',
      category: 'Tattoos',
      image: '/images/tattoos/fine-line.jpg',
    },
    {
      id: 'g2',
      title: 'Royal Bridal Dulhan Mehndi',
      category: 'Bridal Mehndi',
      image: '/images/home/bridal-mehndi.jpg',
    },
    {
      id: 'g3',
      title: 'Sacred Geometry Mandala',
      category: 'Minimal',
      image: '/images/tattoos/geometry.jpg',
    },
    {
      id: 'g4',
      title: 'Arabic Floral Vine Mehndi',
      category: 'Arabic Mehndi',
      image: '/images/home/event-mehndi.jpg',
    },
    {
      id: 'g5',
      title: 'Master Tattoo Stencil Craft',
      category: 'Tattoos',
      image: '/images/home/studio-craft.jpg',
    },
    {
      id: 'g6',
      title: 'Flawless Lion Cover-Up Tattoo',
      category: 'Cover Up',
      image: '/images/tattoos/cover-up.jpg',
    },
  ];

  const filters = ['All', 'Tattoos', 'Bridal Mehndi', 'Arabic Mehndi', 'Minimal', 'Cover Up'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FFF0F3] text-[#4A0E2E]">
      <div className="container-center-lock">
        
        {/* Header Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D81B60] font-semibold block mb-2">
              OUR GALLERY
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#4A0E2E]">
              Recent Masterpieces
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeFilter === f
                    ? 'bg-gradient-to-r from-[#D81B60] to-[#AD1457] text-white shadow-md scale-105'
                    : 'bg-white text-[#4A0E2E]/80 hover:bg-[#FCE4EC] border border-[#FCE4EC]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* View Full Gallery Link */}
          <a
            href="/gallery"
            className="text-xs font-bold uppercase tracking-wider text-[#D81B60] hover:text-[#880E4F] transition-colors flex items-center gap-2 shrink-0"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* 6-Column Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => onSelectItem(item)}
              className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden group cursor-pointer border border-[#FCE4EC] shadow-sm bg-[#FCE4EC]/50"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A0E2E]/90 via-[#4A0E2E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#F8MB1] text-[#F48FB1] font-semibold">
                  {item.category}
                </span>
                <h4 className="font-serif-heading text-xs font-bold leading-tight mt-0.5">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
