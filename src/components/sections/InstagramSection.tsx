'use client';

import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function InstagramSection() {
  const posts = [
    {
      id: 'ig1',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
      likes: '4.2k',
      comments: '184',
      caption: 'Royal Marwari bridal Dulhan palms hand-crafted at City Palace Udaipur.',
    },
    {
      id: 'ig2',
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=600&q=80',
      likes: '3.8k',
      comments: '92',
      caption: 'Surgical 3RL single needle fine-line Rajputana sword tattoo.',
    },
    {
      id: 'ig3',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
      likes: '5.1k',
      comments: '240',
      caption: 'Triple-filtered Sojat Henna aging vault process.',
    },
    {
      id: 'ig4',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
      likes: '2.9k',
      comments: '115',
      caption: 'Paris Fashion Week minimalist henna cuff editorial.',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#06070E] border-t border-white/5">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] flex items-center gap-2">
              <Instagram className="w-4 h-4" /> @rajasthan_mahendi_art_vadodara
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold gold-text-gradient">
              INSTAGRAM SOCIAL GALLERY
            </h2>
          </div>

          <a
            href="https://www.instagram.com/rajasthan_mahendi_art_vadodara?utm_source=qr&stkn=MTMwMWNndmdnbGl3NQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full liquid-glass-gold border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#D4AF37] transition-all flex items-center gap-2 shadow-gold-glow"
          >
            <span>Follow Instagram Feed</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
          </a>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.02 }}
              className="relative h-64 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
            >
              <Image
                src={post.image}
                alt="Instagram post"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                <div className="flex items-center justify-between text-xs font-mono text-white/80">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4 fill-red-500 text-red-500" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 text-[#D4AF37]" /> {post.comments}
                  </span>
                </div>
                <p className="text-[11px] text-white/90 line-clamp-2 font-sans">
                  {post.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
