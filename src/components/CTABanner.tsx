'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface CTABannerProps {
  onOpenBooking: () => void;
}

export default function CTABanner({ onOpenBooking }: CTABannerProps) {
  return (
    <section className="py-12 bg-[#FFF0F3]">
      <div className="container-center-lock">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl bg-gradient-to-r from-[#FCE4EC] via-[#FFF0F3] to-[#FCE4EC] p-8 md:p-14 overflow-hidden border border-[#F8BBD0] shadow-xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D81B60]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Left Text */}
          <div className="space-y-3 z-10 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D81B60] font-semibold inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D81B60]" />
              READY FOR YOUR NEXT PIECE?
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#4A0E2E]">
              Book Your Appointment With <span className="text-[#D81B60] font-serif-heading">Vishambar Ji</span>
            </h2>
            <p className="text-sm text-[#4A0E2E]/80 font-sans font-medium">
              Special Dulhan Mehndi, Rajwadi Motifs & Body Piercing. Free Home Service Available.
            </p>
          </div>

          {/* Right Button */}
          <div className="z-10 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D81B60] via-[#E91E63] to-[#AD1457] hover:from-[#AD1457] hover:to-[#880E4F] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-xl hover:scale-105"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
