'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, Calendar, Compass, Feather, Globe } from 'lucide-react';

interface GlassNavbarProps {
  onOpenBooking: () => void;
}

export default function GlassNavbar({ onOpenBooking }: GlassNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '3D Spatial Explorer', href: '#spatial-3d' },
    { name: 'Historical Heritage', href: '#heritage' },
    { name: 'Court Mehendi', href: '#mehendi' },
    { name: 'Rajputana Tattoos', href: '#tattoos' },
    { name: 'Live Canvas', href: '#canvas' },
    { name: 'Royal Portfolio', href: '#portfolio' },
    { name: 'Court Artisans', href: '#artists' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-4 px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto transition-all duration-500 rounded-full flex items-center justify-between px-5 md:px-8 py-3 w-full max-w-6xl ${
            scrolled
              ? 'liquid-glass-gold shadow-gold-glow border-[#D4AF37]/40 bg-[#06070E]/85 backdrop-blur-2xl'
              : 'liquid-glass bg-[#121624]/60 backdrop-blur-xl border-[#D4AF37]/25'
          }`}
        >
          {/* Brand Logo & Devanagari Royal Crest */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center bg-gradient-to-br from-[#8B3A2B] to-[#06070E] group-hover:border-[#FFF6D1] transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <span className="font-serif font-bold text-base gold-text-gradient">राज</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base md:text-lg tracking-[0.2em] gold-text-gradient">
                RAJMARU
              </span>
              <span className="text-[9px] tracking-widest text-[#F3E9C6]/80 font-mono -mt-1 uppercase">
                Jodhpur • Jaipur • Udaipur
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] font-semibold uppercase tracking-widest transition-all relative py-1 group ${
                  link.href === '#spatial-3d'
                    ? 'text-[#D4AF37] font-bold flex items-center gap-1'
                    : 'text-[#FAF6F0]/80 hover:text-[#D4AF37]'
                }`}
              >
                {link.href === '#spatial-3d' && <Globe className="w-3 h-3 text-[#D4AF37] animate-pulse" />}
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden px-4 md:px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-[#06070E] bg-gradient-to-r from-[#FFF6D1] via-[#D4AF37] to-[#8B3A2B] shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-[#06070E]" />
              <span className="relative z-10">Reserve Atelier</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-full liquid-glass flex items-center justify-center text-[#FAF6F0] hover:text-[#D4AF37]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-30 lg:hidden liquid-glass-gold p-6 rounded-3xl backdrop-blur-3xl border border-[#D4AF37]/40 shadow-2xl flex flex-col gap-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-serif text-sm tracking-widest gold-text-gradient uppercase">Historical Atelier Menu</span>
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div className="flex flex-col gap-3 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium tracking-wider text-[#FAF6F0] hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#8B3A2B] text-black font-bold text-xs uppercase tracking-widest shadow-gold-glow flex items-center justify-center gap-2"
            >
              <Feather className="w-4 h-4" />
              Book Concierge Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
