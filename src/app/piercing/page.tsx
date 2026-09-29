'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import BookingModal from '@/components/BookingModal';
import LightboxModal from '@/components/LightboxModal';
import { Shield, Sparkles, Heart, ArrowRight } from 'lucide-react';

export default function PiercingPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const piercingServices = [
    {
      title: 'Ear Body Piercing',
      desc: 'Ear Lobe, Tragus, Helix, Conch & Industrial piercing performed with 100% sterile gun and gold studs.',
      image: '/images/home/event-mehndi.jpg',
      category: 'Ear Piercing',
    },
    {
      title: 'Nose Pin & Ring Piercing',
      desc: 'Delicate nostril pin, nose ring & septum piercing with medical-grade hygiene and painless precision.',
      image: '/images/tattoos/fine-line.jpg',
      category: 'Nose Piercing',
    },
    {
      title: 'Stomach & Navel Piercing',
      desc: 'Stylish belly button / stomach piercing using surgical titanium studs and hospital-grade sterilization.',
      image: '/images/tattoos/cover-up.jpg',
      category: 'Stomach Piercing',
    },
    {
      title: 'Special Dulhan Piercing & Henna',
      desc: 'Complete bridal jewelry piercing set and matching Rajwadi dulhan mehendi packages.',
      image: '/images/home/bridal-mehndi.jpg',
      category: 'Bridal Package',
    },
  ];

  return (
    <main className="min-h-screen bg-[#D81B60] text-white selection:bg-white selection:text-[#D81B60]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-[#D81B60] text-white border-b border-white/20">
        <div className="container-center-lock text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#F8C8DC] font-bold inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-[#F8C8DC]" />
            STERILE BODY PIERCING STUDIO • SINCE 2007
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase">
            Ear, Nose & Stomach Piercing
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            Pain-free sterile gun body piercing by Vishambar Ji. Ear lobe, helix, nose pin, septum, and stomach navel piercing with 100% medical grade hygiene.
          </p>
        </div>
      </section>

      {/* Piercing Services Showcase */}
      <section className="py-20 bg-[#FAF6F0] text-[#3D0C20]">
        <div className="container-center-lock">
          
          <div className="mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D81B60] font-bold block mb-2">
              PIERCING SPECIALTIES
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#3D0C20]">
              Ear, Nose & Navel Piercing Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {piercingServices.map((service) => (
              <div
                key={service.title}
                onClick={() => setSelectedItem(service)}
                className="bg-white rounded-3xl overflow-hidden border border-[#D81B60]/15 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 group cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-rose-50 image-zoom-container">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest bg-[#D81B60] text-white font-bold shadow-md">
                    {service.category}
                  </span>
                </div>

                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-heading text-lg font-bold text-[#3D0C20] group-hover:text-[#D81B60] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#6B4C5E] leading-relaxed font-sans mt-1 font-medium">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#D81B60]/15 flex items-center justify-between text-xs font-bold text-[#D81B60] group-hover:text-[#C2185B]">
                    <span>BOOK PIERCING</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} onOpenBooking={() => setIsBookingOpen(true)} />
    </main>
  );
}
