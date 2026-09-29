'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import Gallery from '@/components/Gallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import LightboxModal from '@/components/LightboxModal';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<any | null>(null);

  return (
    <main className="relative min-h-screen bg-[#D81B60] text-white selection:bg-white selection:text-[#D81B60]">
      {/* 1. Header Navigation Bar */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 2. Hero Section */}
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 3. Services Section ("What We Do —") */}
      <Services onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 4. About Us Section ("More Than A Studio") */}
      <AboutUs />

      {/* 5. Gallery Section ("Recent Work") */}
      <Gallery onSelectItem={(item) => setSelectedGalleryItem(item)} />

      {/* 6. Why Choose Us Section ("A Premium Experience —") */}
      <WhyChooseUs />

      {/* 7. Call To Action Banner ("Book Your Appointment") */}
      <CTABanner onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 9. Footer */}
      <Footer />

      {/* Appointment Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Gallery Lightbox Inspection Modal */}
      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
    </main>
  );
}
