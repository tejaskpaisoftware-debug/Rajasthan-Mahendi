'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import BookingModal from '@/components/BookingModal';
import { Sparkles, Instagram, Award, ShieldCheck, Calendar, ArrowRight, Heart } from 'lucide-react';

export default function ArtistsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const artists = [
    {
      name: 'Vishambar Ji',
      role: 'Founder & Master Mehndi / Piercing Artist',
      experience: 'Since 2007 (17+ Years Experience)',
      specialty: 'Special Bridal Dulhan, Marwari, Rajwadi, Afghani, Arabic, Body & Ear Piercing',
      bio: 'Master Vishambar Ji founded Rajasthan Mahendi Art & Piercing in 2007 in Vadodara. Renowned across Gujarat and Rajasthan for authentic Dulhan wedding figures, 100% natural stain color guarantees, and gentle gun piercing.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
      instagram: 'https://instagram.com',
      awards: ['Master Henna Artist Since 2007', 'Color & Design Stain Guarantee', 'Free Home Service Specialist'],
    },
    {
      name: 'Aanya Patel',
      role: 'Master Bridal Mehndi Artist',
      experience: '8+ Years Experience',
      specialty: 'Royal Rajasthani, Marwari Heritage, Bridal Dulhan',
      bio: 'Hailing from Rajasthan, Aanya carries forward generations of royal court henna traditions. Her signature style incorporates intricate portrait figures, baraat scenes, and micro-detailed lattice filler.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
      instagram: 'https://instagram.com',
      awards: ['Royal Heritage Henna Award 2022', 'Featured in Vogue Weddings'],
    },
    {
      name: 'Karan Verma',
      role: 'Senior Tattoo Artist',
      experience: '7+ Years Experience',
      specialty: 'Fine Line, Micro-realism, Neo-Traditional',
      bio: 'Karan is celebrated for his surgical fine-line precision and botanical dotwork tattoos. His pieces combine delicate aesthetics with long-lasting structural longevity.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80',
      instagram: 'https://instagram.com',
      awards: ['Fine Line Perfection Award 2024'],
    },
    {
      name: 'Meera Joshi',
      role: 'Contemporary Henna Stylist',
      experience: '6+ Years Experience',
      specialty: 'Indo-Arabic Fusion, Geometric Mandala, Minimalist',
      bio: 'Meera brings a modern luxury touch to classical henna. Known for high-contrast negative space flow and organic eucalyptus oil stain techniques that last up to 3 weeks.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80',
      instagram: 'https://instagram.com',
      awards: ['Modern Henna Innovator 2023'],
    },
  ];

  return (
    <main className="min-h-screen bg-[#1F0712] text-[#FFF0F5] pt-24">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#2B0B1D] to-[#1F0712] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8C8DC]/10 border border-[#F8C8DC]/30 text-[#F8C8DC] text-xs font-mono uppercase tracking-[0.3em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            The Craftsmen of Rajasthan Mahendi Art
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Meet Our Master Artists
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Every line, curve, and shade is executed by seasoned professionals dedicated to hygiene, artistry, and bespoke storytelling.
          </p>
        </div>
      </section>

      {/* Artist Profiles Section */}
      <section className="py-20 bg-[#FFF0F3] text-[#1F0712]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          {artists.map((artist, idx) => (
            <div
              key={artist.name}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 bg-white p-8 md:p-12 rounded-3xl border border-[#1F0712]/10 shadow-lg ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Photo */}
              <div className="w-full lg:w-5/12 aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl bg-rose-50 shrink-0">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#1F0712]/90 backdrop-blur-md text-[#F8C8DC] text-[10px] font-mono uppercase tracking-widest font-semibold">
                    {artist.experience}
                  </span>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="w-full lg:w-7/12 space-y-6">
                <div>
                  <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D81B60] font-bold block mb-1">
                    {artist.role}
                  </span>
                  <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#1F0712]">
                    {artist.name}
                  </h2>
                </div>

                <div className="p-4 rounded-2xl bg-[#FFF0F3] border border-[#1F0712]/10 font-mono text-xs text-[#1F0712]/80 space-y-1">
                  <div><strong className="text-[#1F0712]">Specialty:</strong> {artist.specialty}</div>
                </div>

                <p className="text-sm sm:text-base text-[#1F0712]/75 leading-relaxed font-sans">
                  {artist.bio}
                </p>

                {/* Awards */}
                <div className="space-y-2">
                  <span className="text-xs uppercase font-mono text-[#1F0712]/60 font-semibold block">Recognitions & Accolades:</span>
                  <div className="flex flex-wrap gap-2">
                    {artist.awards.map((award) => (
                      <span key={award} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#1F0712]/5 text-[#1F0712] text-xs font-medium border border-[#1F0712]/10">
                        <Award className="w-3.5 h-3.5 text-[#D81B60]" />
                        {award}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#1F0712]/10 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="px-6 py-3 rounded-full bg-[#1F0712] hover:bg-[#D81B60] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-md"
                  >
                    <span>Book Session With {artist.name.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={artist.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-[#1F0712]/20 flex items-center justify-center text-[#1F0712] hover:bg-[#1F0712] hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety & Hygiene Guarantee Section */}
      <section className="py-20 bg-[#2B0B1D] text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#F8C8DC] font-medium block mb-2">
              UNCOMPROMISING STANDARDS
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-white">
              Studio Safety & Organic Quality
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#1F0712] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F8C8DC]/10 border border-[#F8C8DC]/30 flex items-center justify-center text-[#F8C8DC]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-white">100% Sterile Medical Grade</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Single-use disposable needles opened in front of you. Autoclaved grips and hospital-grade surface sanitization before every session.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#1F0712] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F8C8DC]/10 border border-[#F8C8DC]/30 flex items-center justify-center text-[#F8C8DC]">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-white">100% Organic Rajasthani Henna</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Zero synthetic dyes, PPD, or chemical add-ins. Freshly hand-mixed daily with pure Sojat henna leaf powder and natural eucalyptus essential oils.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#1F0712] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F8C8DC]/10 border border-[#F8C8DC]/30 flex items-center justify-center text-[#F8C8DC]">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-white">1-on-1 Artist Consultations</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Personal stencil trial runs, placement testing, and dedicated aftercare guidance provided for every tattoo and bridal mehendi package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner onOpenBooking={() => setBookingOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Booking Modal */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
