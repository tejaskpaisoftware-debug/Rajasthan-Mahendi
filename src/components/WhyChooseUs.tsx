'use client';

import { UserCheck, ShieldCheck, Palette, Heart, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const features = [
    {
      icon: UserCheck,
      title: 'Master Artist Vishambar Ji',
      desc: '17+ years of experience in royal Rajasthani dulhan mehendi & gentle body piercing.',
    },
    {
      icon: ShieldCheck,
      title: '100% Organic & Sterile',
      desc: 'Pure Sojat henna with Nilgiri eucalyptus oil and medical grade sterilization.',
    },
    {
      icon: Palette,
      title: 'Custom Rajasthani Motifs',
      desc: 'Bespoke Doli, Baraat, Radha-Krishna portraits & ear, nose, stomach body piercing.',
    },
    {
      icon: Heart,
      title: 'Free Home Service',
      desc: 'Doorstep home service for wedding parties & sangeet ceremonies across Vadodara.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#D81B60] text-white relative overflow-hidden">
      {/* Liquid Background Spotlights */}
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-white/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-center-lock relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Artist Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[360px] sm:h-[480px] w-full rounded-3xl overflow-hidden border-4 border-white/60 shadow-2xl group ring-4 ring-white/30">
              <Image
                src="/images/home/bridal-mehndi.jpg"
                alt="Royal Bridal Dulhan Mehndi"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#880E4F]/60 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

          {/* Right Column Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D81B60] font-bold block mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-pill shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#D81B60]" />
                WHY CHOOSE RAJASTHAN MAHENDI ART
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                A Premium Experience <span className="text-[#F8C8DC] font-serif-heading">—</span>
              </h2>
            </div>

            {/* 4 iOS Liquid Glass Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="p-6 rounded-3xl liquid-glass-card text-[#3D0C20] space-y-3 group"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#D81B60] to-[#E91E63] text-white flex items-center justify-center shadow-lg border border-white/60">
                      <IconComp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif-heading text-base font-bold text-[#3D0C20] mb-1 group-hover:text-[#D81B60] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#6B4C5E] leading-relaxed font-sans font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
