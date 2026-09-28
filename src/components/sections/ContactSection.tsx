'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, Compass, Send } from 'lucide-react';

export default function ContactSection() {
  const studios = [
    {
      city: 'Jaipur Royal Atelier',
      address: '24 Rajmaru Haveli, Civil Lines, Jaipur 302006, Rajasthan',
      phone: '+91 141 238 9000',
      hours: 'Mon - Sun: 10:00 AM - 8:00 PM',
      highlight: 'Main Craft Guild & Henna Aging Vaults',
    },
    {
      city: 'Udaipur City Palace Suite',
      address: 'Suite 9, Lake Palace Road, Old City, Udaipur 313001, Rajasthan',
      phone: '+91 294 242 1111',
      hours: 'By Appointment Only',
      highlight: 'Bridal Troupe Headquarters',
    },
    {
      city: 'Mumbai Private Studio',
      address: '88 Juhu Tara Road, Juhu, Mumbai 400049, Maharashtra',
      phone: '+91 22 2610 4400',
      hours: 'Thu - Sun: 11:00 AM - 7:00 PM',
      highlight: 'Fine Line Tattoo & Celebrity Suite',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#06070E] border-t border-white/5">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D4AF37] flex items-center justify-center gap-2">
            <MapPin className="w-3.5 h-3.5" /> ATELIER LOCATIONS & CONTACT
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient">
            VISIT OUR ROYAL STUDIOS
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF6F0]/70 font-sans leading-relaxed">
            Experience our private liquid glass atelier suites in person or request an on-location palatial visit.
          </p>
        </div>

        {/* Studio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {studios.map((st) => (
            <motion.div
              key={st.city}
              whileHover={{ y: -6 }}
              className="liquid-glass-card rounded-3xl p-6 liquid-glass-gold border border-[#D4AF37]/30 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30">
                  {st.highlight}
                </span>
                <h3 className="font-serif text-xl font-bold text-white">{st.city}</h3>
                
                <p className="text-xs text-white/70 flex items-start gap-2 leading-relaxed">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{st.address}</span>
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-white/80 font-mono">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{st.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{st.hours}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Inquiry Glass Form */}
        <div className="max-w-3xl mx-auto liquid-glass p-8 md:p-12 rounded-3xl border border-white/15 space-y-6">
          <h3 className="font-serif text-2xl font-bold text-center gold-text-gradient">
            SEND AN ATELIER INQUIRY
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono text-[#D4AF37] block mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Her Royal Highness / Client Name"
                className="w-full bg-[#06070E] border border-white/20 rounded-xl p-3 text-sm text-white focus:border-[#D4AF37] outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-[#D4AF37] block mb-1">Email Address</label>
              <input
                type="email"
                placeholder="concierge@domain.com"
                className="w-full bg-[#06070E] border border-white/20 rounded-xl p-3 text-sm text-white focus:border-[#D4AF37] outline-none"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-mono text-[#D4AF37] block mb-1">Message / Event Details</label>
            <textarea
              rows={4}
              placeholder="Describe your event date, wedding location, or custom tattoo placement..."
              className="w-full bg-[#06070E] border border-white/20 rounded-xl p-3 text-sm text-white focus:border-[#D4AF37] outline-none"
            />
          </div>
          <button
            onClick={() => alert("Thank you! Your inquiry has been sent to the Rajmaru Concierge.")}
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#8B3A2B] text-black font-semibold text-xs uppercase tracking-widest shadow-gold-glow hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Transmit Royal Inquiry</span>
          </button>
        </div>

      </div>
    </section>
  );
}
