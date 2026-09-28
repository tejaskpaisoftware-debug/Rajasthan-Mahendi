'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Crown, Sparkles, Scroll, ShieldCheck, Feather } from 'lucide-react';

interface RoyalDecreeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function RoyalDecreeModal({ isOpen, onClose, onOpenBooking }: RoyalDecreeModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#04050A]/90 backdrop-blur-2xl"
        />

        {/* Scroll Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl liquid-glass-gold p-8 md:p-12 rounded-3xl z-10 border-2 border-[#D4AF37] shadow-gold-glow-lg overflow-hidden bg-royal-parchment text-[#FAF6F0]"
        >
          {/* Top & Bottom Antique Wooden Roller Visual Accents */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-[#581812] via-[#D4AF37] to-[#581812] border-b border-[#D4AF37]" />
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-[#581812] via-[#D4AF37] to-[#581812] border-t border-[#D4AF37]" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-9 h-9 rounded-full bg-[#8B3A2B]/40 border border-[#D4AF37] flex items-center justify-center text-[#FFF6D1] hover:bg-[#D4AF37] hover:text-black transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Imperial Wax Seal Stamp Watermark */}
          <div className="absolute -bottom-10 -right-10 opacity-15 pointer-events-none">
            <svg width="250" height="250" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="90" fill="#8B3A2B" stroke="#D4AF37" strokeWidth="4" />
              <circle cx="100" cy="100" r="75" stroke="#D4AF37" strokeWidth="2" strokeDasharray="6 6" />
              <text x="100" y="95" textAnchor="middle" fill="#D4AF37" fontSize="18" fontFamily="serif" fontWeight="bold">शाही मुहर</text>
              <text x="100" y="120" textAnchor="middle" fill="#FFF6D1" fontSize="11" fontFamily="serif">EST. 1894 • JODHPUR</text>
            </svg>
          </div>

          <div className="text-center space-y-6 max-w-2xl mx-auto py-4">
            
            {/* Header Devanagari Imperial Title */}
            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#D4AF37] flex items-center justify-center gap-2">
                <Crown className="w-4 h-4 text-[#D4AF37]" /> SHAHI FARMAN • IMPERIAL DECREE OF MARWAR
              </span>
              <h2 className="font-serif text-2xl md:text-4xl font-bold gold-text-gradient">
                श्री 108 राजमारू शाही घराना
              </h2>
              <p className="font-script text-2xl text-[#F3E9C6] italic">
                “His Highness Imperial Court Decree of Adornment & Sacred Geometry”
              </p>
            </div>

            {/* Decree Body Text */}
            <div className="p-6 rounded-2xl bg-[#06070E]/70 border border-[#D4AF37]/30 text-xs md:text-sm text-white/90 leading-relaxed font-sans space-y-4 text-justify">
              <p>
                Be it known to all royal patrons, brides of noble lineage, and art connoisseurs that by imperial tradition established in 1894 within the royal courts of Jodhpur & Udaipur, the house of <strong className="text-[#D4AF37]">RAJMARU</strong> is ordained to execute authentic Marwari Henna linework and sacred Rajputana fine-line tattoos.
              </p>
              <p>
                Every stroke drawn upon the royal bride or patron uses 100% triple-sifted organic Sojat Henna leaves infused with Nilgiri eucalyptus and clove oil, yielding deep burgundy mahogany darkness guaranteed to endure for three fortnights.
              </p>
            </div>

            {/* Imperial Wax Seal Credentials */}
            <div className="flex flex-wrap items-center justify-around gap-4 pt-2 text-xs font-mono text-[#D4AF37]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> Certified Royal Court Guild
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Scroll className="w-4 h-4 text-[#D4AF37]" /> Sojat Organic Botanical Seal
              </span>
            </div>

            {/* Action Trigger */}
            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FFF6D1] via-[#D4AF37] to-[#8B3A2B] text-black font-bold text-xs uppercase tracking-[0.2em] shadow-gold-glow hover:scale-105 transition-all flex items-center gap-2"
              >
                <Feather className="w-4 h-4" />
                <span>Petition Royal Atelier Appointment</span>
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
