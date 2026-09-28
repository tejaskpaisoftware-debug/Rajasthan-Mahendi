'use client';

import { Phone, Mail, MapPin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0B0E] text-[#FAF8F5] pt-16 pb-8 border-t border-white/10">
      <div className="container-center-lock">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#E2C799]/20 border border-[#E2C799] flex items-center justify-center font-serif-heading font-bold text-[#E2C799] text-xs">
                RM
              </div>
              <div>
                <span className="font-serif-heading font-bold text-xl tracking-wider text-white block leading-none">
                  Rajasthan Mahendi Art
                </span>
                <span className="text-[9px] uppercase font-mono text-[#E2C799] tracking-widest mt-1 block">
                  SINCE 2007 • VISHAMBAR JI
                </span>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed font-sans max-w-sm">
              Special Dulhan Mehndi, Marwari, Rajwadi, Afghani, Arabic, Bombay Style & Ear/Nose Body Piercing. Colour & Design Full Guarantee with Free Home Service.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#E2C799] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="/" className="hover:text-[#E2C799] transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-[#E2C799] transition-colors">About Vishambar Ji</a></li>
              <li><a href="/mehndi" className="hover:text-[#E2C799] transition-colors">Mehndi Styles</a></li>
              <li><a href="/gallery" className="hover:text-[#E2C799] transition-colors">Gallery</a></li>
              <li><a href="/contact" className="hover:text-[#E2C799] transition-colors">Contact Studio</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#E2C799] font-semibold">
              Our Specialties
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><span className="hover:text-[#E2C799]">Special Dulhan Mehndi</span></li>
              <li><span className="hover:text-[#E2C799]">Marwari & Rajwadi Design</span></li>
              <li><span className="hover:text-[#E2C799]">Afghani & Arabic Style</span></li>
              <li><span className="hover:text-[#E2C799]">Ear & Nose Piercing</span></li>
              <li><span className="hover:text-[#E2C799]">Free Home Service</span></li>
            </ul>
          </div>

          {/* Col 4: Get In Touch */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#E2C799] font-semibold">
              Studio Location
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E2C799] shrink-0" />
                <a href="tel:9537157153" className="hover:text-[#E2C799] font-bold text-white">
                  Vishambar ji: 95371 57153
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E2C799] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Reliance Smart Bazaar, Gangam Plaza, Canal Road, Opp. McDonalds, Sama Savli Road, Vemali, Vadodara - 390024
                </span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#E2C799] hover:border-[#E2C799] transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40 font-mono">
          <p>© 2026 Rajasthan Mahendi Art & Piercing. All Rights Reserved.</p>
          <p className="text-[#E2C799]">Since 2007 • Master Artist Vishambar Ji (Vadodara)</p>
        </div>

      </div>
    </footer>
  );
}
