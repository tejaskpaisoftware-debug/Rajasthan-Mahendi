'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import RoyalHennaBackground from '@/components/ui/RoyalHennaBackground';

interface GalleryProps {
  onSelectItem: (item: any) => void;
}

export default function Gallery({ onSelectItem }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  const galleryItems = [
    {
      id: 'g1',
      title: 'Ear Lobe & Helix Piercing',
      category: 'Ear Piercing',
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
      title: 'Delicate Nose Pin Piercing',
      category: 'Nose Piercing',
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
      title: 'Stomach & Belly Button Piercing',
      category: 'Stomach Piercing',
      image: '/images/home/studio-craft.jpg',
    },
    {
      id: 'g6',
      title: 'Rajwadi Dulhan Henna Art',
      category: 'Bridal Mehndi',
      image: '/images/tattoos/cover-up.jpg',
    },
  ];

  const filters = ['All', 'Bridal Mehndi', 'Ear Piercing', 'Nose Piercing', 'Stomach Piercing', 'Arabic Mehndi'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#C2185B] text-white relative overflow-hidden">
      {/* Royal Animated Henna Background */}
      <RoyalHennaBackground variant="gallery" />

      <div className="container-center-lock relative z-10">
        
        {/* Header Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#F8C8DC] font-semibold block mb-2">
              OUR GALLERY
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Recent Masterpieces
            </h2>
          </div>

          {/* Filter Pills in White Boxes */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeFilter === f
                    ? 'bg-white text-[#D81B60] shadow-lg scale-105 font-bold'
                    : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* View Full Gallery Link */}
          <a
            href="/gallery"
            className="text-xs font-bold uppercase tracking-wider text-[#F8C8DC] hover:text-white transition-colors flex items-center gap-2 shrink-0"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F8C8DC]" />
          </a>
        </motion.div>

        {/* 6-Column Cards Grid with White Card Frames */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => onSelectItem(item)}
              className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden group cursor-pointer border-2 border-white shadow-xl bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#880E4F]/90 via-[#880E4F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#F8C8DC] font-semibold">
                  {item.category}
                </span>
                <h4 className="font-serif-heading text-xs font-bold leading-tight mt-0.5 text-white">
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
