'use client';

import { motion } from 'framer-motion';
import { Compass, Sparkles, Globe, ShieldCheck, Crown } from 'lucide-react';
import Rajasthan3DCanvas from '@/components/ui/Rajasthan3DCanvas';

export default function Spatial3DExplorationSection() {
  return (
    <section id="spatial-3d" className="py-24 relative overflow-hidden bg-[#06070E] bg-royal-parchment border-t border-[#D4AF37]/30">
      {/* Background Jaali mesh */}
      <div className="absolute inset-0 bg-rajasthan-jaali opacity-30 pointer-events-none" />

      {/* Devanagari background watermark */}
      <div className="absolute text-[150px] font-bold devanagari-watermark text-[#D4AF37] tracking-widest whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        त्रिमितीय शाही यात्रा
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D4AF37] flex items-center justify-center gap-2">
            <Globe className="w-4 h-4 text-[#D4AF37]" /> GOOGLE ARTS & CULTURE SPATIAL EXPERIENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient">
            3D HISTORICAL RAJASTHAN EXPLORATION
          </h2>
          <p className="font-script text-2xl text-[#F3E9C6]">
            “शाही मेहरानगढ़, सिटी पैलेस एवम् थार मरुस्थल की त्रिमितीय डिजिटल यात्रा”
          </p>
          <p className="text-xs sm:text-sm text-[#FAF6F0]/80 font-sans leading-relaxed pt-1">
            Immerse yourself in our interactive 3D spatial canvas. Drag, rotate, and zoom through historical fort monuments, golden dust particles, and royal court henna artifacts.
          </p>
        </div>

        {/* 3D WebGL Spatial Canvas Engine */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Rajasthan3DCanvas />
        </motion.div>

      </div>
    </section>
  );
}
