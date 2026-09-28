'use client';

import { Crown, Sparkles, Send, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04050A] text-[#FAF6F0] pt-20 pb-10 border-t border-[#D4AF37]/20 relative overflow-hidden">
      {/* Top Specular Edge */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#D4AF37] flex items-center justify-center bg-[#8B3A2B]/20">
                <span className="font-serif font-bold text-lg gold-text-gradient">R</span>
              </div>
              <span className="font-serif font-semibold text-xl tracking-[0.2em] gold-text-gradient">
                RAJMARU
              </span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed font-sans">
              Royal Marwar Henna Guild & Fine-Line Permanent Body Art Atelier. Preserving heritage linework since 1894.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#D4AF37]">Navigation</h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="#heritage" className="hover:text-[#D4AF37] transition-colors">Our Rajasthan Story</a></li>
              <li><a href="#mehendi" className="hover:text-[#D4AF37] transition-colors">Mehendi Artistry</a></li>
              <li><a href="#tattoos" className="hover:text-[#D4AF37] transition-colors">Fine Line Tattoos</a></li>
              <li><a href="#canvas" className="hover:text-[#D4AF37] transition-colors">Interactive Live Canvas</a></li>
              <li><a href="#portfolio" className="hover:text-[#D4AF37] transition-colors">Curated Portfolio</a></li>
            </ul>
          </div>

          {/* Atelier Studios */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#D4AF37]">Royal Studios</h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>Jaipur Atelier • Civil Lines</li>
              <li>Udaipur Studio • City Palace Enclave</li>
              <li>Mumbai VIP Suite • Juhu</li>
              <li>Worldwide Destination Troupe</li>
            </ul>
          </div>

          {/* Gazette Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#D4AF37]">Atelier Gazette</h4>
            <p className="text-xs text-white/60">
              Subscribe for private bridal showcase invitations & custom tattoo motif drops.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <input
                type="email"
                placeholder="royal@domain.com"
                className="bg-white/5 border border-white/20 rounded-xl px-3 py-2 text-xs text-white focus:border-[#D4AF37] outline-none w-full"
              />
              <button
                onClick={() => alert("Subscribed to Rajmaru Royal Gazette")}
                className="p-2 rounded-xl bg-[#D4AF37] text-black hover:bg-[#FFF6D1] transition-all shadow-gold-glow shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono">
          <p>© {new Date().getFullYear()} RAJMARU ATELIER. All Royal Rights Reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
          >
            <span>Return to Zenith</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
