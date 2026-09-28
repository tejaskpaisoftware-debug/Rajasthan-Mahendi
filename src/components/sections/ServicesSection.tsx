'use client';

import { motion } from 'framer-motion';
import { Crown, Sparkles, Check, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

export default function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  const packages = [
    {
      title: 'Royal Bridal Troupe',
      price: '₹45,000',
      period: 'per bride session',
      popular: true,
      desc: 'Complete traditional Marwari & Mewari bridal arms & feet motifs with gold-infused organic henna.',
      features: [
        'Full arms (elbow to palm) & feet application',
        'Customized Radha-Krishna court miniature storytelling',
        'Bridal family consultation & trial swatch',
        '24-Hour gold shimmer seal & organic oil aftercare kit',
        '2 Senior Master Artisans deployed',
      ],
    },
    {
      title: 'Bespoke Fine Line Tattoo',
      price: '₹18,000',
      period: 'starting price',
      popular: false,
      desc: 'Surgical single-needle permanent body art for sacred geometry & Rajputana heraldry.',
      features: [
        'Custom vector design mapping & 3D placement stencil',
        '100% Hospital-grade autoclave sterilization',
        'Single-pass 3RL needle execution',
        'Organic vegan obsidian black tattoo ink',
        'Medical film patch & luxury aftercare ointment',
      ],
    },
    {
      title: 'Destination Wedding Troupe',
      price: '₹1,50,000',
      period: 'full event (2-3 days)',
      popular: false,
      desc: 'Complete palatial troupe deployment for luxury destination weddings in Udaipur, Dubai, & Europe.',
      features: [
        'Deployment of 5-8 Senior Master Artisans',
        'Bridal session + unlimited guest henna booth',
        'Customized royal seal stencils & gold glitter stations',
        'Dedicated Event Concierge Lead',
        'Global travel & venue logistics managed',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#06070E]">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D4AF37] flex items-center justify-center gap-2">
            <Crown className="w-3.5 h-3.5" /> LUXURY ATELIER EXPERIENCES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient">
            SERVICES & EXPERIENCES
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF6F0]/70 font-sans leading-relaxed">
            Transparent luxury tiering designed for royal brides, art collectors, and grand palatial weddings.
          </p>
        </div>

        {/* Pricing Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.title}
              whileHover={{ y: -8 }}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.popular
                  ? 'liquid-glass-gold border-2 border-[#D4AF37] shadow-gold-glow-lg scale-105'
                  : 'liquid-glass border border-white/10 hover:border-[#D4AF37]/40'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-gradient-to-r from-[#FFF6D1] via-[#D4AF37] to-[#8B3A2B] text-black shadow-gold-glow">
                  MOST REQUESTED BRIDAL TIER
                </span>
              )}

              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                <p className="text-xs text-white/60 mb-6 leading-relaxed">{pkg.desc}</p>

                <div className="mb-6 flex items-baseline gap-2 pb-6 border-b border-white/10">
                  <span className="font-serif text-3xl font-bold gold-text-gradient">{pkg.price}</span>
                  <span className="text-xs text-white/50 font-mono">{pkg.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-white/80">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenBooking}
                className={`w-full py-3.5 rounded-full font-semibold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-[#FFF6D1] via-[#D4AF37] to-[#8B3A2B] text-black shadow-gold-glow hover:scale-102'
                    : 'liquid-glass text-white hover:text-[#D4AF37] hover:border-[#D4AF37]'
                }`}
              >
                <span>Reserve Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
