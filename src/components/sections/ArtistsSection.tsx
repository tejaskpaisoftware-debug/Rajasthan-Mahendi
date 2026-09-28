'use client';

import { motion } from 'framer-motion';
import { Crown, Sparkles, Award, Instagram, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function ArtistsSection() {
  const artists = [
    {
      name: 'Master Mahendra Marwari',
      role: 'Grandmaster Henna Artisan',
      experience: '28 Years Royal Court Lineage',
      bio: '5th Generation master of Marwari dulhan linework. Specializes in Radha-Krishna court portraits, Jharokha arches, and organic gold-infused henna formulation.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      awards: 'National Rajasthan Heritage Guild Award 2018',
      specialty: 'Palatial Bridal Troupe',
    },
    {
      name: 'Rukmini Devi',
      role: 'Royal Miniature Specialist',
      experience: '18 Years Heritage Craftsmanship',
      bio: 'Pioneer of micro-detail henna miniature art. Renowned across luxury weddings in Udaipur and Dubai for ultra-fine Mayur peacocks and ancestral mandalas.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      awards: 'Udaipur Palatial Craft Honor 2021',
      specialty: 'Baraat & Court Miniatures',
    },
    {
      name: 'Vikramaditya Singh',
      role: 'Fine Line Tattoo Director',
      experience: '14 Years Permanent Body Art',
      bio: 'Master of single-needle permanent tattoos, Rajputana heraldry, and Devanagari calligraphy. Trained in Tokyo & Jaipur to bring surgical precision to sacred talismans.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      awards: 'International Fine Line Excellence 2023',
      specialty: 'Rajput Iconography & Geometry',
    },
  ];

  return (
    <section id="artists" className="py-24 relative overflow-hidden bg-[#06070E] border-t border-white/5">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D4AF37] flex items-center justify-center gap-2">
            <Crown className="w-3.5 h-3.5" /> MASTER ARTISANS & DIRECTORS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient">
            HERITAGE ARTISANS & MASTERS
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF6F0]/70 font-sans leading-relaxed">
            Meet the visionary masters who bring decades of ancestral court craftsmanship and modern tattoo innovation to your bespoke atelier experience.
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <motion.div
              key={artist.name}
              whileHover={{ y: -8 }}
              className="liquid-glass-card rounded-3xl p-6 liquid-glass-gold border border-[#D4AF37]/30 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-64 rounded-2xl overflow-hidden mb-5 border border-white/10">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06070E] via-transparent to-transparent opacity-70" />
                  
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest bg-black/60 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                    {artist.experience}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                  {artist.name}
                </h3>
                <p className="text-xs font-mono text-[#D4AF37] mb-3">{artist.role}</p>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  {artist.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[11px] font-mono text-white/60">
                  <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{artist.awards}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#D4AF37] pt-1">
                  <span>Specialty: {artist.specialty}</span>
                  <Instagram className="w-4 h-4 text-white/50 hover:text-[#D4AF37] cursor-pointer" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
