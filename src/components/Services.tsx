'use client';

import { ArrowRight, Sparkles, Feather, Shield, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesProps {
  onOpenBooking: () => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  const servicesList = [
    {
      id: 'custom-tattoos',
      title: 'Custom Tattoos',
      desc: 'Unique and meaningful single-needle and geometric designs.',
      image: '/images/tattoos/fine-line.jpg',
      icon: Feather,
    },
    {
      id: 'bridal-mehndi',
      title: 'Bridal Dulhan Mehndi',
      desc: 'Traditional Marwari and Rajwadi royal dulhan wedding henna.',
      image: '/images/home/bridal-mehndi.jpg',
      icon: Sparkles,
    },
    {
      id: 'cover-up-tattoos',
      title: 'Cover Up Tattoos',
      desc: 'Transform old tattoos with bold black-and-grey creative art.',
      image: '/images/tattoos/cover-up.jpg',
      icon: Shield,
    },
    {
      id: 'mehndi-events',
      title: 'Mehndi for Events',
      desc: 'Afghani & Arabic floral henna for weddings and celebrations.',
      image: '/images/home/event-mehndi.jpg',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FFF0F3] text-[#4A0E2E]">
      <div className="container-center-lock">
        
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D81B60] font-semibold block mb-2">
              OUR SERVICES
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#4A0E2E] flex items-center gap-3">
              What We Do <span className="text-[#D81B60] font-light">—</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-xs md:text-sm text-[#4A0E2E]/80 max-w-md font-sans font-medium">
              From bold tattoos to elegant mehendi, we create designs that match your style and story.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-10 h-10 rounded-full border border-[#D81B60]/30 bg-[#FCE4EC] flex items-center justify-center text-[#880E4F] hover:bg-[#D81B60] hover:text-white transition-colors shrink-0 hidden sm:flex shadow-sm"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* 4 Cards Grid */}
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
                className="bg-white rounded-2xl overflow-hidden border border-[#FCE4EC] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Fixed Aspect Ratio & Floating Icon Badge */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#FCE4EC]/50 image-zoom-container">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Floating Circular Icon Badge on Bottom Left */}
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#880E4F] group-hover:bg-[#D81B60] group-hover:text-white transition-colors border border-[#FCE4EC]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif-heading text-lg font-bold text-[#4A0E2E] group-hover:text-[#D81B60] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#4A0E2E]/75 leading-relaxed font-sans font-medium">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Explore Button */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-bold uppercase tracking-wider text-[#D81B60] hover:text-[#880E4F] transition-colors flex items-center gap-2"
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
