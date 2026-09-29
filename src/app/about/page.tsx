'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import BookingModal from '@/components/BookingModal';
import { ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FFF0F3] text-[#4A0E2E]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-[#FFF0F3] border-b border-[#FCE4EC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D81B60] font-semibold">
            ABOUT RAJASTHAN MAHENDI ART
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold tracking-tight text-[#4A0E2E] uppercase">
            More Than Just Art
          </h1>
          <p className="text-sm md:text-base text-[#4A0E2E]/80 max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            Founded with a passion for precision body art and traditional mehendi by Vishambar Ji, Rajasthan Mahendi Art is a space where personal stories turn into timeless living masterpieces.
          </p>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-20 bg-white text-[#4A0E2E]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D81B60] font-semibold block">
                OUR PHILOSOPHY
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#4A0E2E]">
                A Sanctum for Creative Expression
              </h2>
              <p className="text-xs sm:text-sm text-[#4A0E2E]/85 leading-relaxed font-sans font-medium">
                At Rajasthan Mahendi Art, every tattoo needle stroke and every mehendi line is treated with reverence. We combine modern hospital-grade sterilization standards with traditional Indian motif artistry, providing a comfortable, welcoming studio environment.
              </p>
              <p className="text-xs sm:text-sm text-[#4A0E2E]/85 leading-relaxed font-sans font-medium">
                Whether you are seeking your first fine-line tattoo talisman, a cover-up piece, or royal bridal mehendi for your wedding day, Vishambar Ji and our master artists work closely with you from consultation to final aftercare.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#FCE4EC] shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Studio Workstation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#FCE4EC] shadow-md mt-6">
                <img
                  src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80"
                  alt="Tattoo Crafting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 bg-[#FFF0F3] text-[#4A0E2E]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#FCE4EC] shadow-sm space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#D81B60]" />
              <h3 className="font-serif-heading text-lg font-bold text-[#4A0E2E]">100% Sterile & Safe</h3>
              <p className="text-xs text-[#4A0E2E]/75 leading-relaxed font-sans font-medium">
                Hospital-grade autoclaves, single-use needle cartridges, and medical protective films.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#FCE4EC] shadow-sm space-y-3">
              <Sparkles className="w-8 h-8 text-[#D81B60]" />
              <h3 className="font-serif-heading text-lg font-bold text-[#4A0E2E]">Organic Sojat Henna</h3>
              <p className="text-xs text-[#4A0E2E]/75 leading-relaxed font-sans font-medium">
                Triple-filtered natural henna leaves infused with Nilgiri eucalyptus essential oil.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#FCE4EC] shadow-sm space-y-3">
              <Heart className="w-8 h-8 text-[#D81B60]" />
              <h3 className="font-serif-heading text-lg font-bold text-[#4A0E2E]">Bespoke Consultations</h3>
              <p className="text-xs text-[#4A0E2E]/75 leading-relaxed font-sans font-medium">
                Every design is custom-mapped to your body anatomy, memories, and style preferences.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#FCE4EC] shadow-sm space-y-3">
              <Award className="w-8 h-8 text-[#D81B60]" />
              <h3 className="font-serif-heading text-lg font-bold text-[#4A0E2E]">Master Artisans</h3>
              <p className="text-xs text-[#4A0E2E]/75 leading-relaxed font-sans font-medium">
                Over 17 years of specialized experience in fine-line tattoos & royal bridal mehendi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner onOpenBooking={() => setIsBookingOpen(true)} />
      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
