'use client';

import { useState } from 'react';
import { X, Check, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState('Custom Tattoos');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F8C8DC', '#FFF0F5', '#1F0712'],
      });
    } catch (err) {}
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1F0712]/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#2B0B1D] text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl z-10 border border-white/10 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#F8C8DC] font-medium block mb-1">
                RAJASTHAN MAHENDI ART • VISHAMBAR JI
              </span>
              <h3 className="font-serif-heading text-2xl font-bold text-white">
                Book Session / Home Service
              </h3>
              <p className="text-xs text-white/60 font-sans mt-1">
                Call/WhatsApp: <strong>+91 95371 57153</strong> | Free Home Service Available.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-[11px] uppercase font-mono text-white/70 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full bg-[#1F0712] border border-white/15 rounded-xl p-3 text-sm text-white focus:border-[#F8C8DC] outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase font-mono text-white/70 block mb-1">Phone / WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 95371 57153"
                  className="w-full bg-[#1F0712] border border-white/15 rounded-xl p-3 text-sm text-white focus:border-[#F8C8DC] outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase font-mono text-white/70 block mb-1">Select Service</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#1F0712] border border-white/15 rounded-xl p-3 text-sm text-white focus:border-[#F8C8DC] outline-none"
                >
                  <option value="Special Bridal Dulhan Mehndi">Special Bridal Dulhan Mehndi</option>
                  <option value="Marwari & Rajwadi Mehndi">Marwari & Rajwadi Mehndi</option>
                  <option value="Afghani & Arabic Style">Afghani & Arabic Style</option>
                  <option value="Bombay Style & Colourful Henna">Bombay Style & Colourful Henna</option>
                  <option value="Ear & Nose Body Piercing">Ear & Nose Body Piercing (Gun Piercing)</option>
                  <option value="Marriage Party & Sangeet (Free Home Service)">Marriage Party & Sangeet (Free Home Service)</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] uppercase font-mono text-white/70 block mb-1">Preferred Date</label>
                <input
                  type="date"
                  required
                  className="w-full bg-[#1F0712] border border-white/15 rounded-xl p-3 text-sm text-white focus:border-[#F8C8DC] outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#F8C8DC] hover:bg-[#FFF0F5] text-[#1F0712] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Confirm Booking with Vishambar Ji</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#F8C8DC]/20 border border-[#F8C8DC] flex items-center justify-center mx-auto text-[#F8C8DC]">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="font-serif-heading text-2xl font-bold text-white">
              Booking Request Received!
            </h3>
            <p className="text-xs text-white/70 max-w-xs mx-auto leading-relaxed">
              Thank you! Vishambar Ji will call or WhatsApp you at your number shortly to confirm time and design details.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#F8C8DC] text-[#1F0712] font-bold text-xs uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
