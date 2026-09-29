'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#C2185B] text-white relative overflow-hidden">
      <div className="container-center-lock">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#F8C8DC] font-semibold inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F8C8DC]" />
              ABOUT RAJASTHAN MAHENDI ART
            </span>

            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              More Than <br /><span className="text-[#F8C8DC] font-serif-heading">A Studio</span>
            </h2>

            <p className="text-sm md:text-base text-white/90 max-w-lg leading-relaxed font-sans font-medium">
              Founded in 2007 by master artist Vishambar Ji, we believe mehendi art and body piercing (Ear, Nose & Stomach) are sacred expressions of your journey, royal heritage, and elegance. We provide a sterile, welcoming studio with 100% color & design guarantee.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-[#FFF0F5] text-[#D81B60] text-xs uppercase tracking-wider font-bold transition-all duration-300 inline-flex items-center gap-2 group shadow-xl hover:scale-105"
              >
                <span>Read Vishambar Ji's Story</span>
                <ArrowRight className="w-4 h-4 text-[#D81B60] group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column Overlapping Collage in White Boxes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative flex justify-center mt-6 lg:mt-0"
          >
            
            {/* Background Studio Interior Photo */}
            <div className="relative w-full h-[320px] sm:h-[420px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/images/home/studio-craft.jpg"
                alt="Studio Craft"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#880E4F]/70 via-transparent to-transparent opacity-80" />
            </div>

            {/* Overlapping Floating Polaroid White Box Cards on the Right */}
            <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 sm:gap-4 z-20">
              
              {/* Card 1: Mehndi Detail */}
              <div className="w-28 sm:w-44 h-36 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden border-4 border-white shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500 relative">
                <Image
                  src="/images/home/bridal-mehndi.jpg"
                  alt="Bridal Dulhan Mehndi"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card 2: Calligraphy Tattoo */}
              <div className="w-28 sm:w-44 h-36 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden border-4 border-white shadow-2xl -rotate-6 hover:rotate-0 transition-transform duration-500 relative -mt-12 sm:-mt-20 self-end">
                <Image
                  src="/images/tattoos/calligraphy.jpg"
                  alt="Sanskrit Calligraphy Tattoo"
                  fill
                  className="object-cover"
                />
                
                {/* Script Sticker Accent */}
                <div className="absolute bottom-1.5 right-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white text-[#D81B60] text-[8px] sm:text-[10px] font-script-accent font-bold shadow-md">
                  Heritage Art
                </div>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
