'use client';

import { motion } from 'framer-motion';
import { Sparkles, Paintbrush, Compass, Crown } from 'lucide-react';
import HennaCanvas from '@/components/ui/HennaCanvas';

export default function SignatureDesignsSection() {
  return (
    <section id="canvas" className="py-24 relative overflow-hidden bg-[#06070E] border-t border-white/5">
      {/* Radial glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D4AF37] flex items-center justify-center gap-2">
            <Crown className="w-3.5 h-3.5" /> BESPOKE INTERACTIVE STUDIO TOOL
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient">
            ROYAL HENNA & MANDALA CANVASES
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF6F0]/70 font-sans leading-relaxed">
            Experience our interactive liquid gold symmetry engine. Click and drag below to weave your custom henna mandala, select custom symmetry levels, and export your bespoke artwork.
          </p>
        </div>

        {/* Live Canvas Tool Integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <HennaCanvas />
        </motion.div>

      </div>
    </section>
  );
}
