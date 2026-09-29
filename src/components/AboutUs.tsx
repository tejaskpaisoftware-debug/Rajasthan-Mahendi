'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#0F1015] text-[#FAF8F5] relative overflow-hidden">
      <div className="container-center-lock">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#E2C799] font-medium inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E2C799]" />
              ABOUT RAJASTHAN MAHENDI ART
            </span>

            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              More Than <br /><span className="gold-gradient-text font-serif-heading">A Studio</span>
            </h2>

            <p className="text-sm md:text-base text-white/70 max-w-lg leading-relaxed font-sans font-light">
              Founded in 2007 by master artist Vishambar Ji, we believe tattoos and mehendi are more than just art — they are living expressions of your journey, royal heritage, and individuality. We provide a sterile, welcoming, and luxury studio environment across Vadodara.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="px-7 py-3.5 rounded-full border border-[#E2C799]/40 bg-[#E2C799]/10 hover:bg-[#E2C799] text-[#E2C799] hover:text-[#0F1015] text-xs uppercase tracking-wider font-bold transition-all duration-300 inline-flex items-center gap-2 group shadow-lg"
              >
                <span>Read Vishambar Ji's Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column Overlapping Collage */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative flex justify-center mt-6 lg:mt-0"
          >
            
            {/* Background Studio Interior Photo */}
            <div className="relative w-full h-[320px] sm:h-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/home/studio-craft.jpg"
                alt="Studio Craft"
                fill
                className="object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1015] via-transparent to-transparent opacity-80" />
            </div>

            {/* Overlapping Floating Polaroid Cards on the Right */}
            <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 sm:gap-4 z-20">
              
              {/* Card 1: Mehndi Detail */}
              <div className="w-28 sm:w-44 h-36 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#E2C799]/40 shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500 relative">
                <Image
                  src="/images/home/bridal-mehndi.jpg"
                  alt="Bridal Dulhan Mehndi"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card 2: Calligraphy Tattoo */}
              <div className="w-28 sm:w-44 h-36 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#E2C799]/40 shadow-2xl -rotate-6 hover:rotate-0 transition-transform duration-500 relative -mt-12 sm:-mt-20 self-end">
                <Image
                  src="/images/tattoos/calligraphy.jpg"
                  alt="Sanskrit Calligraphy Tattoo"
                  fill
                  className="object-cover"
                />
                
                {/* Script Sticker Accent */}
                <div className="absolute bottom-1.5 right-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#E2C799]/40 text-[8px] sm:text-[10px] font-script-accent text-[#E2C799]">
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
