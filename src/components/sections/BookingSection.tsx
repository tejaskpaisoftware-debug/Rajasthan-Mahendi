'use client';

import { motion } from 'framer-motion';
import { Crown, Sparkles, Calendar, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

interface BookingSectionProps {
  onOpenBooking: () => void;
}

export default function BookingSection({ onOpenBooking }: BookingSectionProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-[#06070E] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="liquid-glass-gold p-10 md:p-16 rounded-3xl border border-[#D4AF37]/50 shadow-gold-glow-lg space-y-6 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass border border-[#D4AF37]/40 text-xs font-mono uppercase tracking-widest text-[#FFF6D1]">
            <Crown className="w-3.5 h-3.5 text-[#D4AF37]" /> RESERVATION CONCIERGE OPEN FOR 2026-2027 BRIDAL SEASON
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient">
            BEGIN YOUR BESPOKE ATELIER EXPERIENCE
          </h2>

          <p className="text-xs sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Securing a date with our Master Court Artisans guarantees undivided personal attention, custom motif stencils, and organic gold-infused henna formulation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FFF6D1] via-[#D4AF37] to-[#8B3A2B] text-black font-semibold text-xs uppercase tracking-[0.2em] shadow-gold-glow hover:scale-105 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Launch Booking Wizard</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full liquid-glass text-xs uppercase tracking-[0.2em] text-white hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
              <span>Instant VIP WhatsApp</span>
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> Guaranteed Booking Privacy
            </span>
            <span>•</span>
            <span>Worldwide Palatial Travel</span>
            <span>•</span>
            <span>Jaipur & Udaipur Studios</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
