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
          className="relative rounded-3xl bg-[#2B0B1D] p-8 md:p-14 overflow-hidden border border-[#F8C8DC]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F8C8DC]/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Left Text */}
          <div className="space-y-3 z-10 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#F8C8DC] font-medium inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F8C8DC]" />
              READY FOR YOUR NEXT PIECE?
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Book Your Appointment With <span className="gold-gradient-text font-serif-heading">Vishambar Ji</span>
            </h2>
            <p className="text-sm text-white/70 font-sans font-light">
              Special Dulhan Mehndi, Rajwadi Motifs & Body Piercing. Free Home Service Available.
            </p>
          </div>

          {/* Right Button */}
          <div className="z-10 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F8C8DC] via-[#F48FB1] to-[#D81B60] hover:from-[#FFF0F5] hover:to-[#F8C8DC] text-[#1F0712] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-3 shadow-[0_0_25px_rgba(248,200,220,0.4)] hover:scale-105"
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
