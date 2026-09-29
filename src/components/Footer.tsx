'use client';

import { Phone, MapPin, Instagram } from 'lucide-react';
import RoyalHennaBackground from '@/components/ui/RoyalHennaBackground';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#D81B60] text-white py-12 relative overflow-hidden">
      {/* Royal Animated Henna Background */}
      <RoyalHennaBackground variant="footer" />

      <div className="container-center-lock relative z-10">
        
        {/* Floating iOS Liquid Glass Footer Container */}
        <div className="liquid-glass-card rounded-[2.5rem] p-8 sm:p-12 text-[#3D0C20] border-2 border-white/80 shadow-2xl">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-10 border-b border-[#D81B60]/15">
            
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#D81B60] via-[#E91E63] to-[#AD1457] text-white flex items-center justify-center font-serif-heading font-bold text-sm shadow-md ring-2 ring-white/60">
                  RM
                </div>
                <div>
                  <span className="font-serif-heading font-bold text-xl tracking-wider text-[#3D0C20] block leading-none">
                    Rajasthan Mahendi Art
                  </span>
                  <span className="text-[9px] uppercase font-mono text-[#D81B60] tracking-widest mt-1 block font-bold">
                    SINCE 2007 • VISHAMBAR JI
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#6B4C5E] leading-relaxed font-sans max-w-sm font-medium">
                Special Dulhan Mehndi, Marwari, Rajwadi, Afghani, Arabic, Bombay Style & Ear, Nose, Stomach Body Piercing. Colour & Design Full Guarantee with Free Home Service.
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#D81B60] font-bold">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs text-[#6B4C5E] font-medium">
                <li><a href="/" className="hover:text-[#D81B60] transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-[#D81B60] transition-colors">About Vishambar Ji</a></li>
                <li><a href="/piercing" className="hover:text-[#D81B60] transition-colors">Body Piercing</a></li>
                <li><a href="/mehndi" className="hover:text-[#D81B60] transition-colors">Mehndi Styles</a></li>
                <li><a href="/gallery" className="hover:text-[#D81B60] transition-colors">Gallery</a></li>
                <li><a href="/contact" className="hover:text-[#D81B60] transition-colors">Contact Studio</a></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#D81B60] font-bold">
                Our Specialties
              </h4>
              <ul className="space-y-2 text-xs text-[#6B4C5E] font-medium">
                <li><span className="hover:text-[#D81B60]">Special Dulhan Mehndi</span></li>
                <li><span className="hover:text-[#D81B60]">Marwari & Rajwadi Design</span></li>
                <li><span className="hover:text-[#D81B60]">Afghani & Arabic Style</span></li>
                <li><span className="hover:text-[#D81B60]">Ear, Nose & Stomach Piercing</span></li>
                <li><span className="hover:text-[#D81B60]">Free Home Service</span></li>
              </ul>
            </div>

            {/* Col 4: Get In Touch */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#D81B60] font-bold">
                Studio Location
              </h4>
              <ul className="space-y-2.5 text-xs text-[#6B4C5E] font-medium">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D81B60] shrink-0" />
                  <a href="tel:9537157153" className="hover:text-[#D81B60] font-bold text-[#3D0C20]">
                    Vishambar ji: 95371 57153
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#D81B60] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Reliance Smart Bazaar, Gangam Plaza, Canal Road, Opp. McDonalds, Sama Savli Road, Vemali, Vadodara - 390024
                  </span>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full liquid-glass-pill flex items-center justify-center text-[#D81B60] hover:scale-105 transition-all shadow-sm">
                  <Instagram className="w-4 h-4 text-[#D81B60]" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6B4C5E] font-mono font-semibold">
            <p>© 2026 Rajasthan Mahendi Art & Piercing. All Rights Reserved.</p>
            <p className="text-[#D81B60] font-bold">Since 2007 • Master Artist Vishambar Ji (Vadodara)</p>
          </div>

        </div>

      </div>
    </footer>
  );
}
