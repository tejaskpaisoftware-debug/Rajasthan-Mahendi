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
      desc: 'Bespoke Doli, Baraat, Radha-Krishna portraits & fine-line tattoos mapped to you.',
    },
    {
      icon: Heart,
      title: 'Free Home Service',
      desc: 'Doorstep home service for wedding parties & sangeet ceremonies across Vadodara.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFF0F3] text-[#4A0E2E] relative overflow-hidden">
      <div className="container-center-lock">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Artist Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[360px] sm:h-[480px] w-full rounded-3xl overflow-hidden border border-[#FCE4EC] shadow-xl group">
              <Image
                src="/images/home/bridal-mehndi.jpg"
                alt="Royal Bridal Dulhan Mehndi"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A0E2E]/40 via-transparent to-transparent opacity-60" />
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
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D81B60] font-semibold block mb-2 inline-flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D81B60]" />
                WHY CHOOSE RAJASTHAN MAHENDI ART
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#4A0E2E] leading-tight">
                A Premium Experience <span className="text-[#D81B60] font-serif-heading">—</span>
              </h2>
            </div>

            {/* 4 Feature Boxes Grid */}
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
                    className="p-6 rounded-2xl bg-white border border-[#FCE4EC] hover:border-[#D81B60]/40 transition-all duration-300 space-y-3 group shadow-sm hover:shadow-md"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FCE4EC] border border-[#F8BBD0] flex items-center justify-center text-[#880E4F] group-hover:bg-[#D81B60] group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif-heading text-base font-bold text-[#4A0E2E] mb-1 group-hover:text-[#D81B60] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#4A0E2E]/75 leading-relaxed font-sans font-medium">
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
