'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Calendar, Crown, Feather, Sparkles, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [experience, setExperience] = useState('Royal Bridal Henna');
  const [artisan, setArtisan] = useState('Master Mahendra Marwari');
  const [date, setDate] = useState('2026-11-15');
  const [location, setLocation] = useState('Jaipur Atelier Studio');
  const [submitted, setSubmitted] = useState(false);

  const experiences = [
    { title: 'Royal Bridal Henna', duration: '5 - 7 Hours', price: '₹45,000+', desc: 'Complete traditional Marwari & Mewari bridal motifs with organic gold infused henna formulation.' },
    { title: 'Bespoke Fine Line Tattoo', duration: '2 - 4 Hours', price: '₹18,000+', desc: 'Medical-grade custom spiritual geometry, Rajputana iconography, & sacred talismans.' },
    { title: 'Destination Wedding Troupe', duration: 'Full Event (2-3 Days)', price: '₹1,50,000+', desc: 'Master artisans deployed to luxury palatial venues across Udaipur, Jodhpur, & International destinations.' },
    { title: 'VIP Private Studio Session', duration: '3 Hours', price: '₹25,000+', desc: 'Exclusive single-client private atelier experience with royal tea service & custom calligraphy tattoo.' },
  ];

  const artisans = [
    { name: 'Master Mahendra Marwari', role: 'Grandmaster Henna Artisan (28 Years Lineage)' },
    { name: 'Rukmini Devi', role: 'Royal Dulhan Miniature Specialist' },
    { name: 'Vikramaditya Singh', role: 'Fine-Line Tattoo & Rajput Iconography Director' },
  ];

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
    else {
      setSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#FFF6D1', '#8B3A2B'],
        });
      } catch (err) {
        // Fallback if confetti fails
      }
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#06070E]/80 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl liquid-glass-gold p-6 md:p-10 rounded-3xl z-10 border border-[#D4AF37]/40 shadow-gold-glow-lg overflow-hidden"
          >
            {/* Specular Highlight */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center">
                  <Crown className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl gold-text-gradient font-bold tracking-wider">
                    RESERVE ATELIER APPOINTMENT
                  </h3>
                  <p className="text-xs text-[#FAF6F0]/60">Step {step} of 3 • Royal Concierge Booking</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full liquid-glass flex items-center justify-center text-white/70 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Body */}
            {!submitted ? (
              <div className="py-6 space-y-6">
                {step === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <label className="text-xs uppercase tracking-widest text-[#D4AF37]">
                      1. Select Royal Experience:
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {experiences.map((exp) => (
                        <div
                          key={exp.title}
                          onClick={() => setExperience(exp.title)}
                          className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                            experience === exp.title
                              ? 'bg-[#D4AF37]/20 border-[#D4AF37] shadow-gold-glow'
                              : 'bg-white/5 border-white/10 hover:border-white/30'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-serif text-sm font-semibold text-white">{exp.title}</h4>
                            <span className="text-xs font-mono text-[#D4AF37]">{exp.price}</span>
                          </div>
                          <p className="text-[11px] text-white/60 leading-relaxed mb-2">{exp.desc}</p>
                          <span className="text-[10px] text-[#D4AF37]/80 flex items-center gap-1 font-mono">
                            <Clock className="w-3 h-3" /> {exp.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <label className="text-xs uppercase tracking-widest text-[#D4AF37]">
                      2. Choose Lead Artisan & Location:
                    </label>
                    <div className="space-y-3">
                      {artisans.map((art) => (
                        <div
                          key={art.name}
                          onClick={() => setArtisan(art.name)}
                          className={`p-4 rounded-2xl cursor-pointer transition-all border flex items-center justify-between ${
                            artisan === art.name
                              ? 'bg-[#D4AF37]/20 border-[#D4AF37] shadow-gold-glow'
                              : 'bg-white/5 border-white/10 hover:border-white/30'
                          }`}
                        >
                          <div>
                            <h4 className="font-serif text-sm font-semibold text-white">{art.name}</h4>
                            <p className="text-xs text-white/60">{art.role}</p>
                          </div>
                          {artisan === art.name && <Check className="w-5 h-5 text-[#D4AF37]" />}
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <label className="text-xs uppercase tracking-widest text-[#D4AF37] block mb-2">
                        Studio / Event Destination:
                      </label>
                      <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-[#06070E] border border-white/20 rounded-xl p-3 text-sm text-white focus:border-[#D4AF37] outline-none"
                      >
                        <option value="Jaipur Atelier Studio">Jaipur Royal Heritage Studio (Civil Lines)</option>
                        <option value="Udaipur Lake Palace Studio">Udaipur Atelier (City Palace Enclave)</option>
                        <option value="Mumbai VIP Private Suite">Mumbai Private Suite (Juhu)</option>
                        <option value="Destination Luxury Venue">On-Location Destination Wedding Venue</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <label className="text-xs uppercase tracking-widest text-[#D4AF37]">
                      3. Event Date & Contact Details:
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] text-white/60 block mb-1">Preferred Date</label>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full bg-[#06070E] border border-white/20 rounded-xl p-3 text-sm text-white focus:border-[#D4AF37] outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-white/60 block mb-1">Full Name</label>
                        <input
                          type="text"
                          placeholder="Her Royal Highness / Client Name"
                          defaultValue="Rajkumari Gayatri"
                          className="w-full bg-[#06070E] border border-white/20 rounded-xl p-3 text-sm text-white focus:border-[#D4AF37] outline-none"
                        />
                      </div>
                    </div>

                    {/* Summary Card */}
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                      <div className="flex justify-between text-xs text-white/80">
                        <span>Selected Experience:</span>
                        <span className="font-semibold gold-text-gradient">{experience}</span>
                      </div>
                      <div className="flex justify-between text-xs text-white/80">
                        <span>Lead Master Artisan:</span>
                        <span className="font-semibold text-white">{artisan}</span>
                      </div>
                      <div className="flex justify-between text-xs text-white/80">
                        <span>Location:</span>
                        <span className="font-semibold text-white">{location}</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Footer Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  {step > 1 ? (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="text-xs uppercase tracking-wider text-white/70 hover:text-white"
                    >
                      Back
                    </button>
                  ) : <div />}

                  <button
                    onClick={handleNextStep}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FFF6D1] via-[#D4AF37] to-[#8B3A2B] text-black font-semibold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-105 transition-all flex items-center gap-2"
                  >
                    {step === 3 ? 'Confirm Concierge Request' : 'Proceed to Step ' + (step + 1)}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              /* Success Screen */
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center mx-auto shadow-gold-glow">
                  <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif text-2xl gold-text-gradient font-bold">
                  CONCIERGE RESERVATION RECEIVED
                </h3>
                <p className="text-sm text-white/80 max-w-md mx-auto leading-relaxed">
                  Thank you for requesting an exclusive session with <span className="text-[#D4AF37] font-semibold">{artisan}</span> for <span className="text-[#D4AF37] font-semibold">{experience}</span>.
                </p>
                <p className="text-xs text-white/60">
                  Our Atelier Concierge will reach out via phone & WhatsApp within 2 hours to confirm motif details and schedule your preliminary bespoke consultation.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-8 py-3 rounded-full bg-[#D4AF37] text-black text-xs font-semibold uppercase tracking-widest hover:bg-[#FFF6D1] shadow-gold-glow"
                >
                  Return to Atelier Showcase
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
