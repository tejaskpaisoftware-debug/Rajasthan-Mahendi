'use client';

import { ArrowLeft, ArrowRight, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Artists() {
  const artistsList = [
    {
      name: 'Vishambar Ji',
      role: 'Founder & Master Artist (Since 2007)',
      image: '/images/home/studio-craft.jpg',
    },
    {
      name: 'Bridal Dulhan Master',
      role: 'Marwari & Rajwadi Specialist',
      image: '/images/home/bridal-mehndi.jpg',
    },
    {
      name: 'Fine Line Specialist',
      role: 'Custom Tattoo Artist',
      image: '/images/tattoos/fine-line.jpg',
    },
    {
      name: 'Arabic Henna Stylist',
      role: 'Afghani & Arabic Specialist',
      image: '/images/home/event-mehndi.jpg',
    },
  ];

  return (
    <section id="artists" className="py-20 md:py-28 bg-[#FAF8F5] text-[#0F1015]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#C5A059] font-semibold block mb-2">
              OUR ARTISTS
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#0F1015]">
              Meet The Creative Minds
            </h2>
          </div>

            <Link
              href="/artists"
              className="w-10 h-10 rounded-full border border-[#0F1015]/20 flex items-center justify-center hover:bg-[#0F1015] hover:text-white transition-colors"
              title="View All Artists"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
        </div>

        {/* 4 Artist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artistsList.map((artist) => (
            <div
              key={artist.name}
              className="bg-white rounded-2xl overflow-hidden border border-[#0F1015]/10 shadow-sm group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-serif-heading text-lg font-bold text-[#0F1015]">
                    {artist.name}
                  </h3>
                  <p className="text-xs text-[#0F1015]/60 font-sans">
                    {artist.role}
                  </p>
                </div>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#0F1015]/10 flex items-center justify-center text-[#0F1015] hover:bg-[#0F1015] hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
