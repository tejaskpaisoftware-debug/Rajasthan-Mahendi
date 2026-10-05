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
      image: '/images/mehndi/gal-1.jpg',
      description: 'Elaborate wedding henna featuring ceremonial palanquin, baraat procession, Radha-Krishna portraits, and royal peacocks.',
    },
    {
      id: 'g3',
      title: 'Ear Lobe, Tragus & Helix Piercing',
      category: 'Body Piercing',
      artist: 'Vishambar Ji',
      time: '30 Mins',
      image: '/images/piercing/ear-piercing.jpg',
      description: '100% painless sterile gun ear piercing with traditional Indian gold studs and modern gold cartilage hoops.',
    },
    {
      id: 'g4',
      title: 'Architectural Haveli Mandap Henna',
      category: 'Bridal Mehndi',
      artist: 'Vishambar Ji',
      time: '4.5 Hours',
      image: '/images/mehndi/gal-3.jpg',
      description: 'Palace architectural arch motifs inspired by Rajasthani Haveli Jharokhas, dancing peacocks, and fine wrist medallion bands.',
    },
    {
      id: 'g5',
      title: 'Delicate Diamond Nose Pin & Ring',
      category: 'Body Piercing',
      artist: 'Vishambar Ji',
      time: '20 Mins',
      image: '/images/piercing/nose-piercing.jpg',
      description: 'Painless precision nostril piercing featuring sparkling diamond stud and gold ring on Indian bride.',
    },
    {
      id: 'g6',
      title: 'Sacred Vivah Story Ceremony Henna',
      category: 'Bridal Mehndi',
      artist: 'Vishambar Ji',
      time: '6 Hours',
      image: '/images/mehndi/gal-13.jpg',
      description: 'Comprehensive wedding story mehendi depicting the Sangeet dance, Varmala garland exchange, and sacred Pheras.',
    },
    {
      id: 'g7',
      title: 'Stomach & Navel Belly Button Piercing',
      category: 'Body Piercing',
      artist: 'Vishambar Ji',
      time: '30 Mins',
      image: '/images/piercing/navel-piercing.jpg',
      description: 'Medical-grade surgical titanium and crystal navel piercing styled gracefully with traditional Indian lehenga.',
    },
    {
      id: 'g8',
      title: 'Royal Bridal Nath & Jhumka Set',
      category: 'Body Piercing',
      artist: 'Vishambar Ji',
      time: '45 Mins',
      image: '/images/piercing/bridal-piercing.jpg',
      description: 'Royal Rajasthani bridal makeover featuring ornate gold nath nose ring with pearl chain and matching heavy bridal jhumkas.',
    },
    {
      id: 'g9',
      title: 'Backhand Lotus Medallion & Jaal Net',
      category: 'Bridal Mehndi',
      artist: 'Senior Henna Stylist',
      time: '2.5 Hours',
      image: '/images/mehndi/gal-10.jpg',
      description: 'Symmetrical lotus medallion, delicate knuckle jaal net, and geometric wrist bracelet on Indian bride.',
    },
    {
      id: 'g10',
      title: 'Lotus Bloom Bridal Feet & Payal Anklet',
      category: 'Bridal Mehndi',
      artist: 'Vishambar Ji',
      time: '3.5 Hours',
      image: '/images/mehndi/gal-5.jpg',
      description: 'Traditional Indian bridal feet mehendi featuring delicate lotus flower dome, payal anklet lattice net, and toe ring detailing.',
    },
    {
      id: 'g11',
      title: 'Shubh Vivah Havan Kund Mandap Henna',
      category: 'Bridal Mehndi',
      artist: 'Vishambar Ji',
      time: '5 Hours',
      image: '/images/mehndi/gal-15.jpg',
      description: 'Holy Havan Kund agni ceremony, Shubh Vivah inscriptions, palace domes, and royal Dulha-Dulhan under the mandap.',
    },
    {
      id: 'g12',
      title: 'Personalized Couple Date & Nazar Henna',
      category: 'Bridal Mehndi',
      artist: 'Senior Henna Stylist',
      time: '4.5 Hours',
      image: '/images/mehndi/gal-16.jpg',
      description: 'Contemporary personalized bridal mehendi with the couple wedding date, Ferris wheel skyline, and evil-eye nazar amulet.',
    },
    {
      id: 'g13',
      title: 'Tragus & Conch Cartilage Piercing',
      category: 'Body Piercing',
      artist: 'Vishambar Ji',
      time: '25 Mins',
      image: '/images/piercing/tragus-piercing.jpg',
      description: 'Diamond cartilage studs and matching traditional Indian jhumka earrings performed with 100% painless sterile equipment.',
    },
    {
      id: 'g14',
      title: 'Traditional Gold Septum Piercing',
      category: 'Body Piercing',
      artist: 'Vishambar Ji',
      time: '20 Mins',
      image: '/images/piercing/septum-piercing.jpg',
      description: 'Classic Rajasthani style gold septum ring and nostril piercing with surgical precision and soothing antiseptic aftercare.',
    },
    {
      id: 'g15',
      title: 'Designer Saree Belly Button Piercing',
      category: 'Body Piercing',
      artist: 'Vishambar Ji',
      time: '30 Mins',
      image: '/images/piercing/belly-piercing.jpg',
      description: 'Sparkling floral navel crystal jewelry tailored to enhance silk sarees and wedding lehengas with complete hospital sterilization.',
    },
    {
      id: 'g16',
      title: "Men's Traditional Bali & Earlobe Piercing",
      category: 'Body Piercing',
      artist: 'Vishambar Ji',
      time: '20 Mins',
      image: '/images/piercing/men-ear-piercing.jpg',
      description: "Traditional Indian men's ear piercing featuring 22k gold bali hoop and diamond stud with zero pain guarantee.",
    },
    {
      id: 'g17',
      title: 'Destination Wedding Canada & India Monogram',
      category: 'Bridal Mehndi',
      artist: 'Vishambar Ji',
      time: '5 Hours',
      image: '/images/mehndi/gal-18.jpg',
      description: 'Custom NRI destination wedding henna with couple monogram initials, Toronto & Indian skylines, and Ganpati blessings.',
    },
    {
      id: 'g18',
      title: 'Royal Chhatri & Peacock Bridal Feet Set',
      category: 'Bridal Mehndi',
      artist: 'Vishambar Ji',
      time: '4 Hours',
      image: '/images/mehndi/gal-19.jpg',
      description: 'Intricate bridal feet henna featuring palace chhatri domes, dancing peacocks, payal lace borders, and toe ring motifs.',
    },
    {
      id: 'g19',
      title: 'Marwari Lotus Jharokha Bridal Pair',
      category: 'Bridal Mehndi',
      artist: 'Vishambar Ji',
      time: '5.5 Hours',
      image: '/images/mehndi/gal-20.jpg',
      description: 'Symmetrical Marwari bridal forearm set with blooming lotus domes, haveli window arches, and royal swan portraits.',
    },
  ];

  const filters = ['All', 'Bridal Mehndi', 'Body Piercing'];

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
