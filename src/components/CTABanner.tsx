'use client';

import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  onOpenBooking: () => void;
}

export default function CTABanner({ onOpenBooking }: CTABannerProps) {
  return (
    <section className="py-12 bg-[#FAF8F5]">
      <div className="container-center-lock">
        
        <div className="relative rounded-3xl bg-[#0F1015] p-8 md:p-14 overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E2C799]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Left Text */}
          <div className="space-y-3 z-10 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#E2C799] font-medium block">
              READY FOR YOUR NEXT PIECE?
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Book Your Appointment
            </h2>
            <p className="text-sm text-white/70 font-sans font-light">
              Let's create something meaningful together.
            </p>
          </div>

          {/* Right Button */}
          <div className="z-10 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-[#E2C799] hover:bg-[#F0D8AA] text-[#0F1015] font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-3 shadow-xl hover:scale-105"
            >
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
