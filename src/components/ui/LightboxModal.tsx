'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Compass, Feather } from 'lucide-react';
import Image from 'next/image';

interface LightboxItem {
  id: string;
  title: string;
  category: string;
  image: string;
  symbolism: string;
  technique: string;
  artist: string;
}

interface LightboxModalProps {
  item: LightboxItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function LightboxModal({ item, onClose, onOpenBooking }: LightboxModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#06070E]/85 backdrop-blur-2xl"
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl liquid-glass-gold p-6 md:p-8 rounded-3xl z-10 border border-[#D4AF37]/40 shadow-gold-glow-lg overflow-hidden flex flex-col md:flex-row gap-6 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full liquid-glass flex items-center justify-center text-white/70 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Image Display */}
          <div className="relative w-full md:w-1/2 h-[320px] md:h-[450px] rounded-2xl overflow-hidden border border-white/10 group">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06070E] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest bg-[#D4AF37] text-black font-semibold">
                {item.category}
              </span>
            </div>
          </div>

          {/* Details & Symbolism Breakdown */}
          <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-script text-[#F3E9C6]/90">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Royal Heritage Motif Analysis
              </div>
              <h3 className="font-serif text-2xl font-bold gold-text-gradient tracking-wide">
                {item.title}
              </h3>
              <p className="text-xs text-[#FAF6F0]/60 font-mono">Artisan Master: {item.artist}</p>

              <div className="pt-2 border-t border-white/10 space-y-3">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-1 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" /> Cultural Symbolism & Meaning
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/10">
                    {item.symbolism}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-1 flex items-center gap-1.5">
                    <Feather className="w-3.5 h-3.5" /> Execution Technique
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {item.technique}
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#8B3A2B] text-black font-semibold text-xs uppercase tracking-widest shadow-gold-glow hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                Request Similar Custom Motif
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
