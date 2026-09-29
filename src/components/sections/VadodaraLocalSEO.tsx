'use client';

import { MapPin, Phone, Star, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';
import RoyalHennaBackground from '@/components/ui/RoyalHennaBackground';

export default function VadodaraLocalSEO() {
  const vadodaraAreas = [
    { name: 'Sama Savli Road (Studio Location)', landmark: 'Gangam Plaza, Opp. McDonalds' },
    { name: 'Vemali & Dumad Chokdi', landmark: 'Canal Road / Highway Junction' },
    { name: 'Alkapuri', landmark: 'Free Home Service Available' },
    { name: 'Gotri & Sevasi', landmark: 'Free Home Service Available' },
    { name: 'Karelibaug & Subhanpura', landmark: 'Free Home Service Available' },
    { name: 'Manjalpur & Makarpura', landmark: 'Free Home Service Available' },
    { name: 'Chhani & TP 13', landmark: 'Free Home Service Available' },
    { name: 'Fatehgunj & MSU Campus', landmark: 'Free Home Service Available' },
    { name: 'Waghodia Road & Ajwa Road', landmark: 'Free Home Service Available' },
    { name: 'Raopura & Mandvi City', landmark: 'Free Home Service Available' },
  ];

  const highlights = [
    '#1 Ranked Dulhan Mehndi & Piercing Studio in Vadodara',
    'Special Marwari, Rajwadi, Afghani & Arabic Bridal Designs',
    'Pain-Free Gun Piercing (Ear, Nose & Stomach/Navel)',
    '100% Organic Sojat Henna — Dark Color Guarantee',
    'Master Artist Vishambar Ji (Since 2007 • 17+ Yrs Experience)',
    'Free Home Service Anywhere in Vadodara City & Suburbs'
  ];

  return (
    <section id="vadodara-locations" className="py-20 relative overflow-hidden bg-[#3D0C20] text-white">
      {/* Royal Background Ornamentation */}
      <RoyalHennaBackground variant="why" />

      <div className="container-center-lock relative z-10 space-y-12">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-pill text-[#FFE082] text-xs font-mono font-bold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5 text-[#FFE082]" />
            <span>TOP RATED IN VADODARA, GUJARAT</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white leading-tight">
            Rajasthan Mahendi Art Vadodara
          </h2>
          <p className="text-xs sm:text-sm text-white/80 font-sans max-w-2xl mx-auto leading-relaxed">
            Looking for the best <strong className="text-[#FFE082]">Mehndi Artist near me</strong> or safe <strong className="text-[#FFE082]">Body Piercing in Vadodara</strong>? Master Vishambar Ji offers authentic Rajasthani heritage designs & gentle ear, nose, stomach piercing with 100% natural stain guarantee.
          </p>

          {/* Google Business Profile Verified Badge */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <div className="flex items-center gap-1 text-[#FFD700]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
              ))}
            </div>
            <span className="text-xs font-mono font-bold text-white/90">
              4.0 Rating • Verified Google Business Profile (Vadodara)
            </span>
          </div>
        </div>

        {/* Highlights & Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Local Areas Covered */}
          <div className="liquid-glass-card rounded-[2rem] p-6 sm:p-8 space-y-5 border border-white/40 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#FFE082]" />
              </div>
              <div>
                <h3 className="font-serif-heading text-lg font-bold text-white">
                  Serving All Locations Across Vadodara
                </h3>
                <span className="text-[10px] font-mono text-white/70 uppercase">FREE HOME SERVICE INCLUDED</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {vadodaraAreas.map((area, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md">
                  <span className="text-xs font-bold text-[#FFE082] block">{area.name}</span>
                  <span className="text-[10px] text-white/80 block mt-0.5">{area.landmark}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Why Choose Rajasthan Mahendi Vadodara */}
          <div className="liquid-glass-card rounded-[2rem] p-6 sm:p-8 space-y-5 border border-white/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#FFE082]" />
                </div>
                <div>
                  <h3 className="font-serif-heading text-lg font-bold text-white">
                    #1 Rated Studio Guarantee
                  </h3>
                  <span className="text-[10px] font-mono text-white/70 uppercase">VISHAMBAR JI • SINCE 2007</span>
                </div>
              </div>

              <ul className="space-y-3">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-white/90 font-medium">
                    <CheckCircle className="w-4 h-4 text-[#FFE082] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Google Map Directions Button */}
            <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://maps.google.com/?q=Reliance+Smart+Bazaar+Gangam+Plaza+Vemali+Vadodara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-[#3D0C20] hover:bg-[#FFE082] font-bold text-xs uppercase tracking-wider transition-all shadow-lg text-center flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#D81B60]" />
                <span>Get Google Maps Directions</span>
              </a>
              <a
                href="tel:+919537157153"
                className="w-full sm:w-auto px-6 py-3 rounded-full liquid-glass-pill text-white font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#FFE082]" />
                <span>Call: +91 95371 57153</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
