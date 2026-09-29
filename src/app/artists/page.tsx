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
      instagram: 'https://www.instagram.com/rajasthan_mahendi_art_vadodara?utm_source=qr&stkn=MTMwMWNndmdnbGl3NQ==',
      awards: ['Master Henna Artist Since 2007', 'Color & Design Stain Guarantee', 'Free Home Service Specialist'],
    },
    {
      name: 'Aanya Patel',
      role: 'Master Bridal Mehndi Artist',
      experience: '8+ Years Experience',
      specialty: 'Royal Rajasthani, Marwari Heritage, Bridal Dulhan',
      bio: 'Hailing from Rajasthan, Aanya carries forward generations of royal court henna traditions. Her signature style incorporates intricate portrait figures, baraat scenes, and micro-detailed lattice filler.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
      instagram: 'https://www.instagram.com/rajasthan_mahendi_art_vadodara?utm_source=qr&stkn=MTMwMWNndmdnbGl3NQ==',
      awards: ['Royal Heritage Henna Award 2022', 'Featured in Vogue Weddings'],
    },
    {
      name: 'Karan Verma',
      role: 'Senior Tattoo Artist',
      experience: '7+ Years Experience',
      specialty: 'Fine Line, Micro-realism, Neo-Traditional',
      bio: 'Karan is celebrated for his surgical fine-line precision and botanical dotwork tattoos. His pieces combine delicate aesthetics with long-lasting structural longevity.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80',
      instagram: 'https://www.instagram.com/rajasthan_mahendi_art_vadodara?utm_source=qr&stkn=MTMwMWNndmdnbGl3NQ==',
      awards: ['Fine Line Perfection Award 2024'],
    },
    {
      name: 'Meera Joshi',
      role: 'Contemporary Henna Stylist',
      experience: '6+ Years Experience',
      specialty: 'Indo-Arabic Fusion, Geometric Mandala, Minimalist',
      bio: 'Meera brings a modern luxury touch to classical henna. Known for high-contrast negative space flow and organic eucalyptus oil stain techniques that last up to 3 weeks.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80',
      instagram: 'https://www.instagram.com/rajasthan_mahendi_art_vadodara?utm_source=qr&stkn=MTMwMWNndmdnbGl3NQ==',
      awards: ['Modern Henna Innovator 2023'],
    },
  ];

  return (
    <main className="min-h-screen bg-[#FFF0F3] text-[#4A0E2E] pt-24">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-[#FFF0F3] border-b border-[#FCE4EC] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCE4EC] border border-[#F8BBD0] text-[#D81B60] text-xs font-mono uppercase tracking-[0.3em] mb-4 font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D81B60]" />
            The Craftsmen of Rajasthan Mahendi Art
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold tracking-tight text-[#4A0E2E] mb-6">
            Meet Our Master Artists
          </h1>
          <p className="text-base sm:text-lg text-[#4A0E2E]/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Every line, curve, and shade is executed by seasoned professionals dedicated to hygiene, artistry, and bespoke storytelling.
          </p>
        </div>
      </section>

      {/* Artist Profiles Section */}
      <section className="py-20 bg-white text-[#4A0E2E]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          {artists.map((artist, idx) => (
            <div
              key={artist.name}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 bg-[#FFF0F3] p-8 md:p-12 rounded-3xl border border-[#FCE4EC] shadow-md ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Photo */}
              <div className="w-full lg:w-5/12 aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg bg-[#FCE4EC] shrink-0 border border-[#F8BBD0]">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#D81B60] text-white text-[10px] font-mono uppercase tracking-widest font-semibold shadow-md">
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
                  <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#4A0E2E]">
                    {artist.name}
                  </h2>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#FCE4EC] font-mono text-xs text-[#4A0E2E]/85 space-y-1 shadow-sm">
                  <div><strong className="text-[#880E4F]">Specialty:</strong> {artist.specialty}</div>
                </div>

                <p className="text-sm sm:text-base text-[#4A0E2E]/80 leading-relaxed font-sans font-medium">
                  {artist.bio}
                </p>

                {/* Awards */}
                <div className="space-y-2">
                  <span className="text-xs uppercase font-mono text-[#880E4F] font-bold block">Recognitions & Accolades:</span>
                  <div className="flex flex-wrap gap-2">
                    {artist.awards.map((award) => (
                      <span key={award} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white text-[#4A0E2E] text-xs font-semibold border border-[#FCE4EC] shadow-sm">
                        <Award className="w-3.5 h-3.5 text-[#D81B60]" />
                        {award}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#FCE4EC] flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D81B60] to-[#AD1457] hover:from-[#AD1457] hover:to-[#880E4F] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <span>Book Session With {artist.name.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={artist.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-[#F8BBD0] bg-white flex items-center justify-center text-[#880E4F] hover:bg-[#D81B60] hover:text-white transition-colors shadow-sm"
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
      <section className="py-20 bg-[#FFF0F3] text-[#4A0E2E] border-t border-[#FCE4EC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#D81B60] font-semibold block mb-2">
              UNCOMPROMISING STANDARDS
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#4A0E2E]">
              Studio Safety & Organic Quality
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#FCE4EC] space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#FCE4EC] border border-[#F8BBD0] flex items-center justify-center text-[#D81B60]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-[#4A0E2E]">100% Sterile Medical Grade</h3>
              <p className="text-xs text-[#4A0E2E]/80 leading-relaxed font-medium">
                Single-use disposable needles opened in front of you. Autoclaved grips and hospital-grade surface sanitization before every session.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#FCE4EC] space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#FCE4EC] border border-[#F8BBD0] flex items-center justify-center text-[#D81B60]">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-[#4A0E2E]">100% Organic Rajasthani Henna</h3>
              <p className="text-xs text-[#4A0E2E]/80 leading-relaxed font-medium">
                Zero synthetic dyes, PPD, or chemical add-ins. Freshly hand-mixed daily with pure Sojat henna leaf powder and natural eucalyptus essential oils.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#FCE4EC] space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#FCE4EC] border border-[#F8BBD0] flex items-center justify-center text-[#D81B60]">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-[#4A0E2E]">1-on-1 Artist Consultations</h3>
              <p className="text-xs text-[#4A0E2E]/80 leading-relaxed font-medium">
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
