'use client';

import { UserCheck, ShieldCheck, Palette, Heart } from 'lucide-react';
import Image from 'next/image';

export default function WhyChooseUs() {
  const features = [
    {
      icon: UserCheck,
      title: 'Experienced Artists',
      desc: 'Skilled and professional master artists.',
    },
    {
      icon: ShieldCheck,
      title: 'Hygienic & Safe',
      desc: 'Clean and sterile medical-grade environment.',
    },
    {
      icon: Palette,
      title: 'Custom Designs',
      desc: 'Unique artwork crafted just for you.',
    },
    {
      icon: Heart,
      title: 'Comfortable Studio',
      desc: 'Relaxed and friendly luxury studio space.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0F1015] text-[#FAF8F5] relative overflow-hidden">
      <div className="container-center-lock">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Artist Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] sm:h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/home/bridal-mehndi.jpg"
                alt="Royal Bridal Dulhan Mehndi"
                fill
                className="object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1015] via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-7 space-y-8">
            
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#E2C799] font-medium block mb-2">
                WHY CHOOSE US
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                A Premium Experience <span className="text-[#E2C799] font-light">—</span>
              </h2>
            </div>

            {/* 4 Feature Boxes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl bg-[#161820] border border-white/10 hover:border-[#E2C799]/50 transition-all duration-300 space-y-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E2C799] group-hover:bg-[#E2C799] group-hover:text-[#0F1015] transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif-heading text-base font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/60 leading-relaxed font-sans font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
