'use client';

import { MapPin, Phone, Star, ShieldCheck, CheckCircle } from 'lucide-react';
import RoyalHennaBackground from '@/components/ui/RoyalHennaBackground';

export default function VadodaraLocalSEO() {
  const vadodaraAreas = [
    { name: 'Sama Savli Road (Studio)', landmark: 'Gangam Plaza, Opp. McDonalds' },
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
    <section id="vadodara-locations" className="py-20 relative overflow-hidden bg-[#D81B60] text-white">
      {/* Royal Background Ornamentation */}
      <RoyalHennaBackground variant="why" />

      <div className="container-center-lock relative z-10 space-y-12">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-pill text-[#3D0C20] text-xs font-mono font-bold tracking-widest uppercase shadow-md bg-white/90">
            <MapPin className="w-3.5 h-3.5 text-[#D81B60]" />
            <span>TOP RATED IN VADODARA, GUJARAT</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white leading-tight drop-shadow-md">
            Rajasthan Mahendi Art Vadodara
          </h2>
          <p className="text-xs sm:text-sm text-white/95 font-sans max-w-2xl mx-auto leading-relaxed font-medium">
            Looking for the best <strong className="text-[#FFE082] underline decoration-[#FFE082]/60">Mehndi Artist near me</strong> or safe <strong className="text-[#FFE082] underline decoration-[#FFE082]/60">Body Piercing in Vadodara</strong>? Master Vishambar Ji offers authentic Rajasthani heritage designs & gentle ear, nose, stomach piercing with 100% natural stain guarantee.
          </p>

          {/* Google Business Profile Verified Badge */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <div className="flex items-center gap-1 text-[#FFD700]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
              ))}
            </div>
            <span className="text-xs font-mono font-bold text-white drop-shadow-sm">
              4.0 Rating • Verified Google Business Profile (Vadodara)
            </span>
          </div>
        </div>

        {/* Highlights & Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Local Areas Covered */}
          <div className="liquid-glass-card rounded-[2.5rem] p-6 sm:p-8 space-y-5 border-2 border-white/80 shadow-2xl text-[#3D0C20]">
            <div className="flex items-center gap-3 border-b border-[#D81B60]/15 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#D81B60] to-[#AD1457] flex items-center justify-center shadow-md ring-2 ring-white/60">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-serif-heading text-lg font-bold text-[#3D0C20]">
                  Serving All Locations Across Vadodara
                </h3>
                <span className="text-[10px] font-mono font-bold text-[#D81B60] uppercase tracking-wider">FREE HOME SERVICE INCLUDED</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {vadodaraAreas.map((area, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-white/80 border border-[#D81B60]/20 shadow-sm backdrop-blur-md">
                  <span className="text-xs font-bold text-[#3D0C20] block leading-tight">{area.name}</span>
                  <span className="text-[10px] font-medium text-[#D81B60] block mt-1">{area.landmark}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Why Choose Rajasthan Mahendi Vadodara */}
          <div className="liquid-glass-card rounded-[2.5rem] p-6 sm:p-8 space-y-5 border-2 border-white/80 shadow-2xl text-[#3D0C20] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 border-b border-[#D81B60]/15 pb-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#D81B60] to-[#AD1457] flex items-center justify-center shadow-md ring-2 ring-white/60">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-serif-heading text-lg font-bold text-[#3D0C20]">
                    #1 Rated Studio Guarantee
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-[#D81B60] uppercase tracking-wider">VISHAMBAR JI • SINCE 2007</span>
                </div>
              </div>

              <ul className="space-y-3">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#3D0C20] font-semibold">
                    <CheckCircle className="w-4 h-4 text-[#D81B60] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Google Map Directions & Call Buttons */}
            <div className="pt-4 border-t border-[#D81B60]/15 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://maps.google.com/?q=Reliance+Smart+Bazaar+Gangam+Plaza+Vemali+Vadodara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#3D0C20] hover:bg-[#D81B60] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md text-center flex items-center justify-center gap-2 group"
              >
                <MapPin className="w-4 h-4 text-[#FFE082] group-hover:animate-bounce" />
                <span>Get Google Maps Directions</span>
              </a>
              <a
                href="tel:+919537157153"
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-gradient-to-r from-[#D81B60] via-[#E91E63] to-[#AD1457] hover:from-[#AD1457] hover:to-[#880E4F] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md text-center flex items-center justify-center gap-2 hover:scale-105"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call: +91 95371 57153</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
