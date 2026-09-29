'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Tattoos', href: '/tattoos' },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1F0712]/90 backdrop-blur-md border-b border-white/5 py-3 sm:py-4 transition-all">
      <div className="container-center-lock flex items-center justify-between gap-2">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F8C8DC]/15 border border-[#F8C8DC] flex items-center justify-center font-serif-heading text-[#F8C8DC] font-bold text-xs sm:text-sm shadow-md shrink-0">
            RM
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-serif-heading font-bold text-sm sm:text-lg md:text-xl tracking-wide text-white leading-none truncate max-w-[170px] sm:max-w-none">
              Rajasthan Mahendi Art
            </span>
            <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#F8C8DC] font-mono mt-0.5 sm:mt-1 truncate max-w-[170px] sm:max-w-none">
              SINCE 2007 • VISHAMBAR JI: 9537157153
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links to Sub-pages */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-white/80 hover:text-[#F8C8DC] transition-colors py-1 relative group font-medium"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F8C8DC] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right CTA Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="tel:9537157153"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold uppercase tracking-wider transition-all"
          >
            <span>Call: 95371 57153</span>
          </a>

          <button
            onClick={handleBookingClick}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F8C8DC] hover:bg-[#FFF0F5] text-[#1F0712] font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center text-white hover:text-[#F8C8DC] rounded-lg border border-white/10 bg-white/5"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#1F0712]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-white/90 hover:text-[#F8C8DC] py-2.5 border-b border-white/5 flex items-center justify-between"
            >
              <span>{link.name}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F8C8DC]/50" />
            </Link>
          ))}

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="tel:9537157153"
              className="w-full py-3 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 border border-white/20"
            >
              <span>Call Vishambar Ji: 95371 57153</span>
            </a>

            <button
              onClick={() => {
                setMobileOpen(false);
                handleBookingClick();
              }}
              className="w-full py-3.5 rounded-full bg-[#F8C8DC] text-[#1F0712] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
