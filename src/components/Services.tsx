'use client';

import { ArrowRight, Sparkles, Feather, Shield, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import RoyalHennaBackground from '@/components/ui/RoyalHennaBackground';

interface ServicesProps {
  onOpenBooking: () => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  const servicesList = [
    {
      id: 'bridal-mehndi',
      title: 'Bridal Dulhan Mehndi',
      desc: 'Traditional Marwari & Rajwadi royal dulhan wedding henna.',
      image: '/images/mehndi/gal-1.jpg',
      icon: Sparkles,
    },
    {
      id: 'ear-piercing',
      title: 'Ear Body Piercing',
      desc: 'Pain-free sterile gun ear lobe, tragus & helix piercing with gold studs.',
      image: '/images/piercing/ear-piercing.jpg',
      icon: Shield,
    },
    {
      id: 'nose-piercing',
      title: 'Nose Pin & Ring Piercing',
      desc: 'Delicate nostril pin, ring & septum piercing with medical grade hygiene.',
      image: '/images/piercing/nose-piercing.jpg',
      icon: Feather,
    },
    {
      id: 'stomach-piercing',
      title: 'Stomach & Navel Piercing',
      desc: 'Belly button body piercing with 100% sterile medical precision.',
      image: '/images/piercing/navel-piercing.jpg',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#E91E63] text-white relative overflow-hidden">
      {/* Royal Animated Henna Background */}
      <RoyalHennaBackground variant="services" />

      <div className="container-center-lock relative z-10">
        
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D81B60] font-black block mb-2 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#D81B60]" />
              OUR SPECIALTIES
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-white flex items-center gap-3">
              What We Do <span className="text-[#F8C8DC] font-light">—</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-xs md:text-sm text-white/90 max-w-md font-sans font-medium">
              From ear, nose & stomach body piercing to royal dulhan mehendi, we craft art that honors your story.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-11 h-11 rounded-full liquid-glass-pill flex items-center justify-center text-[#D81B60] hover:scale-105 transition-all shrink-0 hidden sm:flex shadow-lg"
            >
              <ArrowRight className="w-4 h-4 text-[#D81B60]" />
            </button>
          </div>
        </motion.div>

        {/* 4 iOS Liquid Glass Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="liquid-glass-card text-[#3D0C20] rounded-3xl overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-rose-50 image-zoom-container">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Floating Circular Liquid Icon Badge */}
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#D81B60] to-[#E91E63] text-white shadow-lg flex items-center justify-center border border-white/60">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif-heading text-lg font-bold text-[#3D0C20] group-hover:text-[#D81B60] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#6B4C5E] leading-relaxed font-sans font-medium">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Explore Button */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-bold uppercase tracking-wider text-[#D81B60] hover:text-[#C2185B] transition-colors flex items-center gap-2"
                  >
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
