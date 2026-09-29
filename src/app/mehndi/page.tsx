'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import BookingModal from '@/components/BookingModal';
import LightboxModal from '@/components/LightboxModal';
import { Sparkles, Eye, Filter, ArrowRight, ShieldCheck, Clock, Heart } from 'lucide-react';

export default function MehndiPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const mehendiCollection = [
    {
      id: 'm1',
      title: 'Special Royal Dulhan Bridal Set',
      category: 'Bridal Dulhan',
      artist: 'Vishambar Ji',
      time: '5.5 Hours',
      image: '/images/home/bridal-mehndi.jpg',
      description: 'Elaborate wedding dulhan henna featuring ceremonial palanquin Doli, Baraat procession, Radha-Krishna court portraits, and royal peacock Mayur lattice.',
      highlights: ['100% Natural Organic Stain', 'Doli & Baraat Figures', 'Full Arm & Feet Coverage'],
    },
    {
      id: 'm2',
      title: 'Traditional Marwari Full-Hand Pair',
      category: 'Marwari & Rajwadi',
      artist: 'Vishambar Ji',
      time: '4.5 Hours',
      image: '/images/mehndi/marwari-duo.jpg',
      description: 'Authentic Marwari heritage design with dense kalash motifs, paisley swirls, kaliganj filler, and 0.15mm precision cone flow.',
      highlights: ['Deep Reddish Brown Stain', 'Kalash & Paisley Swirls', 'Dense Heritage Filler'],
    },
    {
      id: 'm3',
      title: 'Flowing Arabic Floral Scroll',
      category: 'Afghani & Arabic',
      artist: 'Master Henna Artist',
      time: '2 Hours',
      image: '/images/home/event-mehndi.jpg',
      description: 'Bold diagonal floral vines starting from index finger extending into a dramatic wrist cuff with high-contrast negative space leaves.',
      highlights: ['High Contrast Negative Space', 'Modern Wrist Cuff', 'Quick Drying Nilgiri Oil'],
    },
    {
      id: 'm4',
      title: 'Rajwadi Architectural Jharokha Arch',
      category: 'Marwari & Rajwadi',
      artist: 'Vishambar Ji',
      time: '4 Hours',
      image: '/images/mehndi/jharokha-arch.jpg',
      description: 'Palace architectural arch motifs inspired by Rajasthani Haveli Jharokhas, dancing peacocks, and fine wrist medallion bands.',
      highlights: ['Jharokha Window Motifs', 'Dancing Peacocks', 'Fine Wrist Medallions'],
    },
    {
      id: 'm5',
      title: 'Lotus Solar Mandala Wrist Cuff',
      category: 'Mandala & Minimalist',
      artist: 'Master Henna Artist',
      time: '1.5 Hours',
      image: '/images/mehndi/minimal-mandala.jpg',
      description: 'Central sacred lotus mandala medallion centered on back of palm with geometric wrist cuff and matching finger bands.',
      highlights: ['Sacred Lotus Central Focus', 'Geometric Wrist Cuff', 'Symmetrical Linework'],
    },
    {
      id: 'm6',
      title: 'Royal Sangeet & Marriage Party Set',
      category: 'Sangeet & Party',
      artist: 'Vishambar Ji',
      time: '3 Hours',
      image: '/images/mehndi/sangeet-party.jpg',
      description: 'Rich festival sangeet party henna with floral wrist garlands, intricate palm circles, and deep reddish-brown organic stain.',
      highlights: ['Ideal for Marriage Guests', 'Free Home Service Eligible', 'Color & Design Guaranteed'],
    },
    {
      id: 'm7',
      title: 'Bridal Feet & Payal Anklet Henna',
      category: 'Feet & Anklet',
      artist: 'Vishambar Ji',
      time: '3.5 Hours',
      image: '/images/mehndi/feet-payal.jpg',
      description: 'Traditional Indian feet bridal mehendi with intricate payal anklet lattice net, toe ring motifs, and royal peacock borders.',
      highlights: ['Payal Anklet Net Pattern', 'Toe Ring Detailing', 'Full Feet & Ankle Coverage'],
    },
    {
      id: 'm8',
      title: 'Bombay Style Multi-Shade Fusion',
      category: 'Bombay & Colourful',
      artist: 'Senior Henna Stylist',
      time: '2.5 Hours',
      image: '/images/home/event-mehndi.jpg',
      description: '3D dimensional multi-shade henna featuring dark chocolate outline with golden henna filler and glitter highlights.',
      highlights: ['3D Multi-Shade Depth', 'Modern Festival Fusion', 'Glitter Accent Option'],
    },
    {
      id: 'm9',
      title: 'Afghani Criss-Cross Lace Net',
      category: 'Afghani & Arabic',
      artist: 'Senior Henna Stylist',
      time: '2 Hours',
      image: '/images/mehndi/marwari-duo.jpg',
      description: 'Intricate criss-cross net mesh with delicate lotus studs on knuckles, palm center, and geometric wrist bracelet.',
      highlights: ['Criss-Cross Net Mesh', 'Knuckle Lotus Studs', 'High Contrast Flow'],
    },
    {
      id: 'm10',
      title: 'Contemporary Minimalist Finger Garland',
      category: 'Mandala & Minimalist',
      artist: 'Senior Henna Stylist',
      time: '1 Hour',
      image: '/images/mehndi/minimal-mandala.jpg',
      description: 'Ultra-delicate single-finger vine garlands with a single wrist ring band for fashion shoots and engagement parties.',
      highlights: ['Quick 1-Hour Application', 'Delicate Finger Garlands', 'Subtle Aesthetic'],
    },
    ];

  const filters = ['All', 'Bridal Dulhan', 'Marwari & Rajwadi', 'Afghani & Arabic', 'Bombay & Colourful', 'Sangeet & Party', 'Feet & Anklet', 'Mandala & Minimalist'];

  const filteredItems = activeFilter === 'All'
    ? mehendiCollection
    : mehendiCollection.filter((item) => item.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#1F0712] text-[#FFF0F5]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#2B0B1D] to-[#1F0712] border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8C8DC]/10 border border-[#F8C8DC]/30 text-[#F8C8DC] text-xs font-mono uppercase tracking-[0.3em]">
            <Sparkles className="w-3.5 h-3.5" />
            SINCE 2007 • VISHAMBAR JI MAHENDI ART
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase">
            Rajasthan Mahendi Collection
          </h1>
          <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed font-sans font-light">
            100% pure organic Sojat henna leaf powder freshly mixed with Nilgiri eucalyptus essential oils. Color & design full guarantee with free home service across Vadodara.
          </p>
        </div>
      </section>

      {/* Mehndi Collection Catalog Section */}
      <section className="py-20 bg-[#FFF0F3] text-[#1F0712]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D81B60] font-semibold block mb-2">
                100% REALISTIC MEHNDI COLLECTION
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#1F0712]">
                Our Signature Designs (10+ Styles)
              </h2>
            </div>
            
            <div className="flex items-center gap-2 text-xs font-mono text-[#1F0712]/70 bg-white px-4 py-2 rounded-full border border-[#1F0712]/10 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#D81B60]" />
              <span>Color & Stain Full Guarantee</span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === f
                    ? 'bg-[#1F0712] text-[#F8C8DC] shadow-lg scale-105'
                    : 'bg-white text-[#1F0712]/80 hover:bg-[#1F0712]/10 border border-[#1F0712]/15'
                }`}
              >
                {activeFilter === f && <Filter className="w-3 h-3 text-[#F8C8DC]" />}
                {f}
              </button>
            ))}
          </div>

          {/* 10-Item Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group bg-white rounded-3xl overflow-hidden border border-[#1F0712]/10 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-rose-50 image-zoom-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3.5 left-3.5 px-3.5 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest bg-[#1F0712]/90 backdrop-blur-md text-[#F8C8DC] border border-[#F8C8DC]/40 font-semibold shadow-lg">
                    {item.category}
                  </span>

                  {/* Hover Eye Overlay */}
                  <div className="absolute inset-0 bg-[#1F0712]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#F8C8DC] text-[#1F0712] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <h3 className="font-serif-heading text-xl font-bold text-[#1F0712] group-hover:text-[#D81B60] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#1F0712]/75 leading-relaxed font-sans mt-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlights Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.highlights.map((h) => (
                      <span key={h} className="px-2.5 py-0.5 rounded-md bg-[#FFF0F3] border border-[#1F0712]/10 text-[10px] text-[#1F0712]/80 font-mono">
                        ✓ {h}
                      </span>
                    ))}
                  </div>

                  {/* Footer Meta */}
                  <div className="pt-4 border-t border-[#1F0712]/10 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-[#1F0712]/70">
                      <Clock className="w-3.5 h-3.5 text-[#D81B60]" />
                      <span>{item.time}</span>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsBookingOpen(true);
                      }}
                      className="px-4 py-1.5 rounded-full bg-[#1F0712] text-[#F8C8DC] group-hover:bg-[#D81B60] group-hover:text-[#1F0712] font-bold text-[10px] uppercase tracking-wider transition-colors flex items-center gap-1"
                    >
                      <span>Book Design</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
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
