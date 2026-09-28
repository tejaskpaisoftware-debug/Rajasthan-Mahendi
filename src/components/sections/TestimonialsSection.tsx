'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Crown } from 'lucide-react';
import Image from 'next/image';

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const reviews = [
    {
      name: 'Princess Gayatri Kumari',
      event: 'Royal Palace Wedding, Jodhpur',
      quote: 'Rajmaru transformed my bridal Mehendi into a living royal masterpiece. Master Mahendra spent 7 meticulous hours creating Radha-Krishna court portraits on my palms. The stain was deep mahogany perfection for three weeks.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Eleanor Vance-Smythe',
      event: 'Destination Wedding, Lake Palace Udaipur',
      quote: 'Flown in from London for our Udaipur destination wedding, the Rajmaru troupe handled 120 guests with absolute poise. The liquid glass atelier experience & natural henna stain exceeded every high-fashion expectation!',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Devraj Singh Solanki',
      event: 'Fine-Line Tattoo Commission, Jaipur',
      quote: 'Vikramaditya’s single-needle Rajputana talismans are unlike any tattoo work in India. Clean, surgical line weight, zero blowout, and incredible ancestral symbolism.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const handleNext = () => setActive((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-24 relative overflow-hidden bg-[#06070E]">
      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D4AF37] flex items-center justify-center gap-2">
            <Crown className="w-3.5 h-3.5" /> ROYAL CLIENT TESTIMONIALS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient">
            CLIENT EXPERIENCE & REVIEWS
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF6F0]/70 font-sans leading-relaxed">
            Read reflections from brides, royal families, and art patrons across the globe.
          </p>
        </div>

        {/* Testimonial Card Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="liquid-glass-gold p-8 md:p-12 rounded-3xl border border-[#D4AF37]/40 shadow-gold-glow-lg flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Client Photo */}
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shrink-0 border-2 border-[#D4AF37] shadow-gold-glow">
                <Image
                  src={reviews[active].image}
                  alt={reviews[active].name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quote & Details */}
              <div className="space-y-4 text-center md:text-left flex-grow">
                <div className="flex justify-center md:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#D4AF37]/30 mx-auto md:mx-0" />
                <p className="font-serif text-base md:text-lg text-white/90 italic leading-relaxed">
                  "{reviews[active].quote}"
                </p>

                <div className="pt-2">
                  <h4 className="font-serif font-bold text-lg gold-text-gradient">
                    {reviews[active].name}
                  </h4>
                  <p className="text-xs font-mono text-white/60">{reviews[active].event}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full liquid-glass border border-white/20 flex items-center justify-center text-white/70 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    active === idx ? 'bg-[#D4AF37] w-6 shadow-gold-glow' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full liquid-glass border border-white/20 flex items-center justify-center text-white/70 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
