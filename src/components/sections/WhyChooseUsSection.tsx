'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Sparkles, Crown, Heart, Award } from 'lucide-react';

export default function WhyChooseUsSection() {
  const pillars = [
    {
      icon: Leaf,
      title: '100% Pure Organic Botanical Henna',
      desc: 'Hand-harvested from Sojat, Rajasthan. Triple-filtered through silk mesh and infused with natural eucalyptus, tea tree, & lemon oils for guaranteed deep dark stains without chemical additives.',
    },
    {
      icon: ShieldCheck,
      title: 'Hospital-Grade Tattoo Sterilization',
      desc: 'Surgical single-use needle cartridges, medical autoclave sterilization, and hypo-allergenic vegan obsidian inks that protect skin integrity.',
    },
    {
      icon: Crown,
      title: 'Royal Court Lineage & Master Artisans',
      desc: 'Our artisans hold over 100 years of combined family court lineage, ensuring authentic Marwari and Mewari motifs executed with unparalleled speed and detail.',
    },
    {
      icon: Award,
      title: 'Luxury Concierge Experience',
      desc: 'Private atelier studio suites, royal tea service, on-location destination wedding travel, and dedicated client managers from booking to stain reveal.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#06070E] border-t border-white/5">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D4AF37] flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> UNCOMPROMISING ROYAL STANDARDS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient">
            WHY DISCERNING CLIENTS CHOOSE US
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF6F0]/70 font-sans leading-relaxed">
            The difference between ordinary henna and a luxury artistic legacy lies in the details.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                whileHover={{ scale: 1.01 }}
                className="liquid-glass-card rounded-3xl p-8 liquid-glass border border-white/10 flex items-start gap-6"
              >
                <div className="w-12 h-12 rounded-2xl liquid-glass-gold border border-[#D4AF37]/50 flex items-center justify-center shrink-0 shadow-gold-glow">
                  <Icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-white">{pillar.title}</h3>
                  <p className="text-xs text-white/70 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
