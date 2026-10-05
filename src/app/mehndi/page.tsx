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
      title: 'Special Royal Dulhan Full-Arm Set',
      category: 'Bridal Dulhan',
      artist: 'Vishambar Ji',
      time: '5.5 Hours',
      image: '/images/mehndi/gal-1.jpg',
      description: 'Elaborate wedding dulhan henna featuring ceremonial palanquin Doli, Baraat procession, Radha-Krishna portraits, royal peacocks, and swastik motifs.',
      highlights: ['100% Natural Organic Sojat Henna', 'Radha-Krishna & Doli Motifs', 'Full Arm & Feet Coverage'],
    },
    {
      id: 'm2',
      title: 'Lord Ganesha Auspicious Wedding Mehndi',
      category: 'Marwari & Rajwadi',
      artist: 'Vishambar Ji',
      time: '5 Hours',
      image: '/images/mehndi/gal-2.jpg',
      description: 'Auspicious Lord Ganesha portrait with dense Rajasthani kaliganj filler, deep reddish-brown stain, and traditional wedding lehenga motifs.',
      highlights: ['Shri Ganesha Auspicious Blessings', 'Deep Reddish Brown Stain', 'Dense Marwari Heritage Filler'],
    },
    {
      id: 'm3',
      title: 'Architectural Haveli & Temple Mandap Pair',
      category: 'Marwari & Rajwadi',
      artist: 'Vishambar Ji',
      time: '4.5 Hours',
      image: '/images/mehndi/gal-3.jpg',
      description: 'Temple dome spires, dancing peacocks, royal elephants, and Rajput Dulha-Dulhan court figures rendered with 0.15mm precision cone flow.',
      highlights: ['Palace Haveli Jharokha Domes', 'Dancing Peacocks & Elephants', 'Royal Rajput Court Figures'],
    },
    {
      id: 'm4',
      title: 'Haldi Ceremony Bridal Mehndi',
      category: 'Sangeet & Party',
      artist: 'Vishambar Ji',
      time: '3.5 Hours',
      image: '/images/mehndi/gal-4.jpg',
      description: 'Celebratory Haldi wedding henna featuring intricate criss-cross jaal mesh, flower vines, and matching wrist bands for the radiant bride.',
      highlights: ['Perfect for Haldi & Sangeet', 'Intricate Jaal Netting', 'Color & Design Full Guarantee'],
    },
    {
      id: 'm5',
      title: 'Lotus Bloom Bridal Feet & Payal Anklet',
      category: 'Feet & Anklet',
      artist: 'Vishambar Ji',
      time: '3.5 Hours',
      image: '/images/mehndi/gal-5.jpg',
      description: 'Traditional Indian bridal feet mehendi featuring delicate lotus flower dome, payal anklet lattice net, and toe ring detailing.',
      highlights: ['Intricate Payal Anklet Netting', 'Sacred Lotus Dome Motif', 'Full Feet & Ankle Coverage'],
    },
    {
      id: 'm6',
      title: 'Traditional Raksha Potli Bridal Duo',
      category: 'Marwari & Rajwadi',
      artist: 'Vishambar Ji',
      time: '4.5 Hours',
      image: '/images/mehndi/gal-6.jpg',
      description: 'Authentic Marwari heritage design with haveli arches, royal elephants, kalash motifs, and traditional wedding raksha potli styling.',
      highlights: ['Heritage Haveli Arches', 'Elephants & Kalash Motifs', 'Dense Marwari Precision Filler'],
    },
    {
      id: 'm7',
      title: 'Wedding Dholak & Skyline Heritage Henna',
      category: 'Sangeet & Party',
      artist: 'Vishambar Ji',
      time: '4 Hours',
      image: '/images/mehndi/gal-7.jpg',
      description: 'Festival celebration henna featuring celebratory wedding dholak, palace minarets, dancing peacocks, and floral wrist vines.',
      highlights: ['Musical Wedding Dholak Motifs', 'Palace Skyline Minarets', 'Vibrant Sangeet Celebration'],
    },
    {
      id: 'm8',
      title: 'Royal Velvet Cushion Bridal Story',
      category: 'Bridal Dulhan',
      artist: 'Vishambar Ji',
      time: '5.5 Hours',
      image: '/images/mehndi/gal-8.jpg',
      description: 'Grand wedding henna featuring Lord Ganesha blessings, Radha-Krishna portraits, peacock crown arches, and deep dark organic stain.',
      highlights: ['Lord Ganesha & Radha Krishna', 'Peacock Crown Arches', 'Darkest Stain Guarantee'],
    },
    {
      id: 'm9',
      title: 'Kalash & Dholak Celebration Henna',
      category: 'Sangeet & Party',
      artist: 'Vishambar Ji',
      time: '3.5 Hours',
      image: '/images/mehndi/gal-9.jpg',
      description: 'Auspicious wedding kalash and musical dholak motifs with peacock wrist cuffs and dense Rajasthani wedding lattice.',
      highlights: ['Auspicious Kalash & Dholak', 'Peacock Wrist Cuffs', 'Free Home Service Eligible'],
    },
    {
      id: 'm10',
      title: 'Backhand Lotus Medallion & Jaal Net',
      category: 'Mandala & Minimalist',
      artist: 'Senior Henna Stylist',
      time: '2.5 Hours',
      image: '/images/mehndi/gal-10.jpg',
      description: 'Modern bridal back-of-hand design with symmetrical lotus medallion, delicate knuckle jaal net, and geometric wrist bracelet.',
      highlights: ['Symmetrical Lotus Medallion', 'Delicate Knuckle Jaal Net', 'Modern Backhand Aesthetic'],
    },
    {
      id: 'm11',
      title: 'Peacock Jharokha Bridal Showcase',
      category: 'Bridal Dulhan',
      artist: 'Vishambar Ji',
      time: '5 Hours',
      image: '/images/mehndi/gal-11.jpg',
      description: 'Palace architectural arches, peacock feather lattice, floral garlands, and royal wrist bands for high-end wedding shoots.',
      highlights: ['Architectural Jharokha Arches', 'Peacock Feather Lattice', 'High-Contrast Linework'],
    },
    {
      id: 'm12',
      title: 'Varmala Jaimala Wedding Ceremony Henna',
      category: 'Bridal Dulhan',
      artist: 'Vishambar Ji',
      time: '5 Hours',
      image: '/images/mehndi/gal-12.jpg',
      description: 'The iconic Varmala ceremony immortalized on bride palms: bride and groom exchanging flower garlands under royal temple umbrellas.',
      highlights: ['Varmala Jaimala Ceremony', 'Temple Umbrellas & Elephants', 'Dense Heritage Detailing'],
    },
    {
      id: 'm13',
      title: 'Complete Shubh Vivah Story Collection',
      category: 'Bridal Dulhan',
      artist: 'Vishambar Ji',
      time: '6 Hours',
      image: '/images/mehndi/gal-13.jpg',
      description: 'Comprehensive wedding story mehendi illustrating the Sangeet dance, Varmala garland exchange, and sacred Pheras around the sacred fire.',
      highlights: ['Entire Wedding Story Depicted', 'Sangeet, Varmala & Pheras', 'Masterpiece Bridal Artwork'],
    },
    {
      id: 'm14',
      title: 'Royal Gathbandhan & Sacred Knot Set',
      category: 'Bridal Dulhan',
      artist: 'Vishambar Ji',
      time: '5 Hours',
      image: '/images/mehndi/gal-14.jpg',
      description: 'Sacred wedding knot (Gathbandhan) ceremony design with royal swans, elephants, and intricate temple jharokha window frames.',
      highlights: ['Sacred Gathbandhan Wedding Knot', 'Royal Swans & Elephants', 'Full Forearm Coverage'],
    },
    {
      id: 'm15',
      title: 'Shubh Vivah Havan Kund Mandap Henna',
      category: 'Bridal Dulhan',
      artist: 'Vishambar Ji',
      time: '5.5 Hours',
      image: '/images/mehndi/gal-15.jpg',
      description: 'Holy Havan Kund agni ceremony, Shubh Vivah inscriptions, palace domes, coconut palm trees, and royal Dulha-Dulhan under the mandap.',
      highlights: ['Holy Havan Kund Agni Ceremony', 'Shubh Vivah Inscription', 'Palace Domes & Palms'],
    },
    {
      id: 'm16',
      title: 'Personalized Wedding Date & Nazar Motif Henna',
      category: 'Bombay & Colourful',
      artist: 'Senior Henna Stylist',
      time: '4.5 Hours',
      image: '/images/mehndi/gal-16.jpg',
      description: 'Contemporary personalized bridal mehendi with the couple wedding date, Ferris wheel skyline, and evil-eye nazar amulet for good luck.',
      highlights: ['Personalized Couple Date & Names', 'Evil-Eye Nazar Protection Motif', 'Ferris Wheel & City Skyline'],
    },
    {
      id: 'm17',
      title: 'Classic Rajasthani Dulha-Dulhan Palm Set',
      category: 'Marwari & Rajwadi',
      artist: 'Vishambar Ji',
      time: '4.5 Hours',
      image: '/images/mehndi/gal-17.jpg',
      description: 'Intricate Rajput royal prince and princess portraits with dense Marwari lattice, dancing peacocks, and floral jharokha frames.',
      highlights: ['Rajput Dulha-Dulhan Figures', 'Dancing Peacock Motifs', '100% Organic Henna Stain'],
    },
  ];

  const filters = ['All', 'Bridal Dulhan', 'Marwari & Rajwadi', 'Afghani & Arabic', 'Bombay & Colourful', 'Sangeet & Party', 'Feet & Anklet', 'Mandala & Minimalist'];

  const filteredItems = activeFilter === 'All'
    ? mehendiCollection
    : mehendiCollection.filter((item) => item.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#FFF0F3] text-[#4A0E2E]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-[#FFF0F3] border-b border-[#FCE4EC] text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCE4EC] border border-[#F8BBD0] text-[#D81B60] text-xs font-mono uppercase tracking-[0.3em] font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D81B60]" />
            SINCE 2007 • VISHAMBAR JI MAHENDI ART
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold tracking-tight text-[#4A0E2E] uppercase">
            Rajasthan Mahendi Collection
          </h1>
          <p className="text-sm md:text-base text-[#4A0E2E]/80 max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            100% pure organic Sojat henna leaf powder freshly mixed with Nilgiri eucalyptus essential oils. Color & design full guarantee with free home service across Vadodara.
          </p>
        </div>
      </section>

      {/* Mehndi Collection Catalog Section */}
      <section className="py-20 bg-white text-[#4A0E2E]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D81B60] font-semibold block mb-2">
                100% REALISTIC MEHNDI COLLECTION
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#4A0E2E]">
                Our Signature Designs (10+ Styles)
              </h2>
            </div>
            
            <div className="flex items-center gap-2 text-xs font-mono text-[#880E4F] bg-[#FCE4EC] px-4 py-2 rounded-full border border-[#F8BBD0] shadow-sm font-semibold">
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
                    ? 'bg-gradient-to-r from-[#D81B60] to-[#AD1457] text-white shadow-lg scale-105'
                    : 'bg-[#FFF0F3] text-[#4A0E2E]/80 hover:bg-[#FCE4EC] border border-[#FCE4EC]'
                }`}
              >
                {activeFilter === f && <Filter className="w-3 h-3 text-white" />}
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
                className="group bg-[#FFF0F3] rounded-3xl overflow-hidden border border-[#FCE4EC] shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FCE4EC] image-zoom-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3.5 left-3.5 px-3.5 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest bg-[#D81B60] text-white border border-[#AD1457] font-semibold shadow-md">
                    {item.category}
                  </span>

                  {/* Hover Eye Overlay */}
                  <div className="absolute inset-0 bg-[#4A0E2E]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D81B60] to-[#AD1457] text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <h3 className="font-serif-heading text-xl font-bold text-[#4A0E2E] group-hover:text-[#D81B60] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#4A0E2E]/80 leading-relaxed font-sans mt-2 font-medium">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlights Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.highlights.map((h) => (
                      <span key={h} className="px-2.5 py-0.5 rounded-md bg-white border border-[#FCE4EC] text-[10px] text-[#880E4F] font-mono font-medium shadow-sm">
                        ✓ {h}
                      </span>
                    ))}
                  </div>

                  {/* Footer Meta */}
                  <div className="pt-4 border-t border-[#FCE4EC] flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-[#4A0E2E]/70 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#D81B60]" />
                      <span>{item.time}</span>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsBookingOpen(true);
                      }}
                      className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D81B60] to-[#AD1457] text-white hover:from-[#AD1457] hover:to-[#880E4F] font-bold text-[10px] uppercase tracking-wider transition-colors flex items-center gap-1 shadow-sm"
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
