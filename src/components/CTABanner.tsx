'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface CTABannerProps {
  onOpenBooking: () => void;
}

export default function CTABanner({ onOpenBooking }: CTABannerProps) {
  return (
    <section className="py-12 bg-[#D81B60] text-white">
      <div className="container-center-lock">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl bg-white text-[#3D0C20] p-8 md:p-14 overflow-hidden border border-white/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D81B60]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Left Text */}
          <div className="space-y-3 z-10 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D81B60] font-bold inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D81B60]/10 border border-[#D81B60]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#D81B60]" />
              READY FOR YOUR NEXT PIECE?
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#3D0C20]">
              Book Your Appointment With <span className="text-[#D81B60] font-serif-heading">Vishambar Ji</span>
            </h2>
            <p className="text-sm text-[#6B4C5E] font-sans font-medium">
              Special Dulhan Mehndi, Rajwadi Motifs & Body Piercing. Free Home Service Available.
            </p>
          </div>

          {/* Right Button */}
          <div className="z-10 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-[#D81B60] hover:bg-[#C2185B] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-3 shadow-xl shadow-[#D81B60]/30 hover:scale-105"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
