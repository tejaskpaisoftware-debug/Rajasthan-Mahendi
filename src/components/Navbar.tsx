'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Piercing', href: '/piercing' },
    { name: 'Mehndi', href: '/mehndi' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Artists', href: '/artists' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleBookingClick = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 liquid-glass-header rounded-full py-2.5 px-4 sm:px-6 transition-all duration-300">
      <div className="flex items-center justify-between gap-2">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-[#D81B60] via-[#E91E63] to-[#AD1457] text-white flex items-center justify-center font-serif-heading font-bold text-xs sm:text-sm shadow-lg shadow-[#D81B60]/30 ring-2 ring-white/60 shrink-0 group-hover:scale-105 transition-transform">
            RM
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-serif-heading font-bold text-sm sm:text-lg tracking-wide text-[#3D0C20] leading-none truncate max-w-[170px] sm:max-w-none">
              Rajasthan Mahendi Art
            </span>
            <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#D81B60] font-mono mt-0.5 font-bold truncate max-w-[170px] sm:max-w-none">
              SINCE 2007 • VISHAMBAR JI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-[#3D0C20]/90 hover:text-[#D81B60] transition-colors py-1 relative group font-bold"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D81B60] transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Right CTA Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="tel:+919537157153"
            itemProp="telephone"
            title="Call Vishambar Ji Studio"
            aria-label="Call +91 95371 57153"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full liquid-glass-pill text-[#D81B60] text-xs font-bold uppercase tracking-wider transition-all hover:scale-105"
          >
            <Phone className="w-3.5 h-3.5 text-[#D81B60]" />
            <span>+91 95371 57153</span>
          </a>

          <button
            onClick={handleBookingClick}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D81B60] via-[#E91E63] to-[#AD1457] hover:from-[#AD1457] hover:to-[#880E4F] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#D81B60]/30 hover:scale-105 ring-2 ring-white/50"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center text-[#3D0C20] hover:text-[#D81B60] rounded-full border border-white/60 bg-white/80 backdrop-blur-md shadow-sm"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-[#D81B60]" /> : <Menu className="w-5 h-5 text-[#D81B60]" />}
          </button>
        </div>

      </div>

      {/* Mobile Liquid Glass Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-3 rounded-3xl liquid-glass-card p-6 flex flex-col gap-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-bold uppercase tracking-wider text-[#3D0C20] hover:text-[#D81B60] py-2.5 border-b border-[#D81B60]/15 flex items-center justify-between"
            >
              <span>{link.name}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D81B60]" />
            </Link>
          ))}

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="tel:+919537157153"
              itemProp="telephone"
              className="w-full py-3 rounded-full liquid-glass-pill text-[#D81B60] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D81B60]" />
              <span>Call Vishambar Ji: +91 95371 57153</span>
            </a>

            <button
              onClick={() => {
                setMobileOpen(false);
                handleBookingClick();
              }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#D81B60] to-[#AD1457] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-[#D81B60]/30"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
