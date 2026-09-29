'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import BookingModal from '@/components/BookingModal';
import LightboxModal from '@/components/LightboxModal';
import { Sparkles, Eye, Filter } from 'lucide-react';

export default function GalleryPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const galleryData = [
    {
      id: 'g1',
      title: 'Lion Geometric Forearm Sleeve',
      category: 'Custom Tattoos',
      artist: 'Vishambar Ji',
      time: '6 Hours',
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1000&q=80',
      description: 'Intricate hyperrealistic lion face blended with sacred geometry stenciling on upper arm.',
    },
    {
      id: 'g2',
      title: 'Royal Marwari Bridal Dulhan Set',
      category: 'Bridal Mehndi',
      artist: 'Vishambar Ji',
      time: '5.5 Hours',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80',
      description: 'Elaborate wedding henna featuring ceremonial palanquin, baraat procession, and royal peacocks.',
    },
    {
      id: 'g3',
      title: 'Compass & Forest Forearm Piece',
      category: 'Custom Tattoos',
      artist: 'Karan Verma',
      time: '4 Hours',
      image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1000&q=80',
      description: 'Fine-line shading compass with realistic pine forest silhouette and geometric dotwork.',
    },
    {
      id: 'g4',
      title: 'Flowing Arabic Floral Wrist Vine',
      category: 'Arabic Mehndi',
      artist: 'Meera Joshi',
      time: '1.5 Hours',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
      description: 'Bold diagonal floral vines starting from index finger with shading and negative space leaves.',
    },
    {
      id: 'g5',
      title: 'Fine Line Lion & Botanical Chest Tattoo',
      category: 'Fine Line',
      artist: 'Vishambar Ji',
      time: '5 Hours',
      image: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=1000&q=80',
      description: 'Micro-needle fine line artwork with delicate floral framing and organic curves.',
    },
    {
      id: 'g6',
      title: 'Sacred Lotus Spine Tattoo',
      category: 'Fine Line',
      artist: 'Karan Verma',
      time: '3.5 Hours',
      image: 'https://images.unsplash.com/photo-1590246814884-570aafd05eef?auto=format&fit=crop&w=1000&q=80',
      description: 'Vertical spine lotus alignment featuring delicate stippling and Sanskrit shloka detail.',
    },
    {
      id: 'g7',
      title: 'Rajasthani Elephant & Jharokha Palm',
      category: 'Rajasthani Mehndi',
      artist: 'Vishambar Ji',
      time: '3 Hours',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      description: 'Heritage Rajasthani architectural arch motifs, royal elephants, and detailed lattice filler.',
    },
    {
      id: 'g8',
      title: 'Dark Surrealism Sleeve Cover Up',
      category: 'Cover Ups',
      artist: 'Vishambar Ji',
      time: '8 Hours',
      image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1000&q=80',
      description: 'High-contrast black & grey cover up transforming legacy work into a dramatic artistic sleeve.',
    },
    {
      id: 'g9',
      title: 'Contemporary Mandala Cuff',
      category: 'Arabic Mehndi',
      artist: 'Meera Joshi',
      time: '2 Hours',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80',
      description: 'Geometric mandala medallion centered on back of palm with matching finger bands.',
    },
    {
      id: 'g10',
      title: 'Minimalist Constellation Ankle Tattoo',
      category: 'Fine Line',
      artist: 'Karan Verma',
      time: '1 Hour',
      image: 'https://images.unsplash.com/photo-1510519138161-584459ed1995?auto=format&fit=crop&w=1000&q=80',
      description: 'Ultra-thin single needle star map tattoo placed gracefully above inner ankle.',
    },
    {
      id: 'g11',
      title: 'Grand Royal Sangeet Mehndi Pair',
      category: 'Bridal Mehndi',
      artist: 'Vishambar Ji',
      time: '4.5 Hours',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80',
      description: 'Full wrist-to-elbow henna with rich organic stain, traditional kalash, and doli motifs.',
    },
    {
      id: 'g12',
      title: 'Japanese Dragon Forearm Tattoo',
      category: 'Custom Tattoos',
      artist: 'Vishambar Ji',
      time: '7 Hours',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
      description: 'Dynamic Irezumi dragon with atmospheric smoke clouds and deep obsidian linework.',
    },
  ];

  const filters = ['All', 'Custom Tattoos', 'Bridal Mehndi', 'Arabic Mehndi', 'Rajasthani Mehndi', 'Fine Line', 'Cover Ups'];

  const filteredItems = activeFilter === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#FFF0F3] text-[#4A0E2E] pt-24">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-[#FFF0F3] border-b border-[#FCE4EC] relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCE4EC] border border-[#F8BBD0] text-[#D81B60] text-xs font-mono uppercase tracking-[0.3em] mb-4 font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D81B60]" />
            Curated Masterpiece Portfolio
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold tracking-tight text-[#4A0E2E] mb-6">
            Rajasthan Mahendi Art Gallery
          </h1>
          <p className="text-base sm:text-lg text-[#4A0E2E]/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Explore our curated showcase of custom ink tattoos and authentic organic henna creations crafted by Vishambar Ji and master artisans.
          </p>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-16 bg-white text-[#4A0E2E]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === f
                    ? 'bg-gradient-to-r from-[#D81B60] to-[#AD1457] text-white shadow-lg scale-105'
                    : 'bg-[#FFF0F3] text-[#4A0E2E]/80 hover:bg-[#FCE4EC] border border-[#FCE4EC]'
                }`}
              >
                {activeFilter === f && <Filter className="w-3 h-3 text-white" />}
                {f}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative bg-[#FFF0F3] rounded-3xl overflow-hidden border border-[#FCE4EC] shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FCE4EC]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#D81B60] text-white text-[10px] uppercase font-mono tracking-widest font-semibold shadow-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#4A0E2E]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D81B60] to-[#AD1457] text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1 bg-[#FFF0F3]">
                  <div>
                    <h3 className="font-serif-heading text-xl font-bold text-[#4A0E2E] group-hover:text-[#D81B60] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#4A0E2E]/80 font-sans mt-2 line-clamp-2 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#FCE4EC] flex items-center justify-between text-xs text-[#4A0E2E]/70 font-mono">
                    <span>Artist: <strong className="text-[#880E4F]">{item.artist}</strong></span>
                    <span>Session: <strong className="text-[#880E4F]">{item.time}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner onOpenBooking={() => setBookingOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onOpenBooking={() => setBookingOpen(true)}
      />
    </main>
  );
}
