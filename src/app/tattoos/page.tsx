'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import BookingModal from '@/components/BookingModal';
import LightboxModal from '@/components/LightboxModal';
import { Feather, Shield, Compass, ArrowRight } from 'lucide-react';

export default function TattoosPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const tattooServices = [
    {
      title: 'Fine-Line Single Needle',
      desc: 'Ultra-delicate 0.15mm micro-linework designed for subtle elegance and crisp longevity.',
      image: '/images/tattoos/fine-line.jpg',
      category: 'Fine-Line',
    },
    {
      title: 'Sacred Geometry & Mandalas',
      desc: 'Symmetrical solar chakras, spiritual talismans, and vector-calibrated stipple shading.',
      image: '/images/tattoos/geometry.jpg',
      category: 'Geometry',
    },
    {
      title: 'Flawless Cover-Up Tattoos',
      desc: 'Expertly transforming faded or old tattoos into vibrant, new creative artwork.',
      image: '/images/tattoos/cover-up.jpg',
      category: 'Cover-Up',
    },
    {
      title: 'Custom Script & Calligraphy',
      desc: 'Hand-lettered Sanskrit slokas, Latin quotes, and personalized family lineage crests.',
      image: '/images/tattoos/calligraphy.jpg',
      category: 'Calligraphy',
    },
  ];

  return (
    <main className="min-h-screen bg-[#1F0712] text-[#FFF0F5]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-[#1F0712] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#F8C8DC] font-medium">
            FINE-LINE & CUSTOM TATTOO ATELIER
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase">
            Tattoos That Tell Your Story
          </h1>
          <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed font-sans font-light">
            Surgical single-needle precision, organic vegan obsidian inks, and hospital-grade autoclave sterilization for permanent body art.
          </p>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 bg-[#FFF0F3] text-[#1F0712]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D81B60] font-semibold block mb-2">
              TATTOO SPECIALTIES
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#1F0712]">
              Custom Tattoo Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tattooServices.map((service) => (
              <div
                key={service.title}
                onClick={() => setSelectedItem(service)}
                className="bg-white rounded-3xl overflow-hidden border border-[#1F0712]/10 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 group cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-rose-50 image-zoom-container">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest bg-[#1F0712]/85 backdrop-blur-md text-[#F8C8DC] border border-[#F8C8DC]/40 font-semibold shadow-lg">
                    {service.category}
                  </span>
                </div>

                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-heading text-lg font-bold text-[#1F0712] group-hover:text-[#D81B60] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#1F0712]/70 leading-relaxed font-sans mt-1">
                      {service.desc}
                    </p>
                  </div>
                  
                  <div className="pt-3 border-t border-[#1F0712]/10 flex items-center justify-between text-[11px] font-mono font-bold uppercase tracking-wider text-[#D81B60] group-hover:text-[#1F0712] transition-colors">
                    <span>Explore Tattoo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CTABanner onOpenBooking={() => setIsBookingOpen(true)} />
      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
    </main>
  );
}
