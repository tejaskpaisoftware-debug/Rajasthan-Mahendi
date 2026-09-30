'use client';

import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Special Bridal Dulhan Mehndi');
  const [date, setDate] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Light Blur Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#4A0E2E]/50 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Container Box */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white text-[#3D0C20] p-6 sm:p-8 rounded-2xl sm:rounded-3xl z-10 border border-[#D81B60]/20 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white border border-[#F8BBD0] flex items-center justify-center text-[#880E4F] hover:bg-[#FCE4EC]"
        >
          <X className="w-4 h-4" />
        </button>

        <form
          action="https://formsubmit.co/rajasthanmahendiandpiercing@gmail.com"
          method="POST"
          className="space-y-5"
        >
          {/* FormSubmit Configuration Hidden Fields */}
          <input type="hidden" name="_subject" value={`New Booking Inquiry - Rajasthan Mahendi Art`} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://rajasthanmahendiartvadodara.com/contact?success=true" />

          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#D81B60] font-semibold block mb-1">
              RAJASTHAN MAHENDI ART • VISHAMBAR JI
            </span>
            <h3 className="font-serif-heading text-2xl font-bold text-[#4A0E2E]">
              Book Session / Home Service
            </h3>
            <p className="text-xs text-[#4A0E2E]/80 font-sans mt-1 font-medium">
              Call/WhatsApp: <strong className="text-[#880E4F]">+91 95371 57153</strong> | Free Home Service Available.
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-[11px] uppercase font-mono text-[#880E4F] font-semibold block mb-1">Full Name *</label>
              <input
                type="text"
                name="Customer Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full bg-white border border-[#F8BBD0] rounded-xl p-3 text-sm text-[#4A0E2E] focus:border-[#D81B60] outline-none shadow-sm"
              />
            </div>

            <div>
              <label className="text-[11px] uppercase font-mono text-[#880E4F] font-semibold block mb-1">Phone / WhatsApp Number *</label>
              <input
                type="tel"
                name="Phone / WhatsApp Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 95371 57153"
                className="w-full bg-white border border-[#F8BBD0] rounded-xl p-3 text-sm text-[#4A0E2E] focus:border-[#D81B60] outline-none shadow-sm"
              />
            </div>

            <div>
              <label className="text-[11px] uppercase font-mono text-[#880E4F] font-semibold block mb-1">Select Service</label>
              <select
                name="Selected Service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-white border border-[#F8BBD0] rounded-xl p-3 text-sm text-[#4A0E2E] focus:border-[#D81B60] outline-none shadow-sm"
              >
                <option value="Special Bridal Dulhan Mehndi">Special Bridal Dulhan Mehndi</option>
                <option value="Marwari & Rajwadi Mehndi">Marwari & Rajwadi Mehndi</option>
                <option value="Afghani & Arabic Style">Afghani & Arabic Style</option>
                <option value="Bombay Style & Colourful Henna">Bombay Style & Colourful Henna</option>
                <option value="Ear Body Piercing (Sterile Gun)">Ear Body Piercing (Lobe, Helix, Tragus)</option>
                <option value="Nose & Septum Piercing">Nose Pin & Septum Piercing</option>
                <option value="Stomach & Navel Piercing">Stomach / Navel Belly Button Piercing</option>
                <option value="Marriage Party & Sangeet (Free Home Service)">Marriage Party & Sangeet (Free Home Service)</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] uppercase font-mono text-[#880E4F] font-semibold block mb-1">Preferred Date *</label>
              <input
                type="date"
                name="Preferred Date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-white border border-[#F8BBD0] rounded-xl p-3 text-sm text-[#4A0E2E] focus:border-[#D81B60] outline-none shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#D81B60] via-[#E91E63] to-[#AD1457] hover:from-[#AD1457] hover:to-[#880E4F] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <span>Submit Inquiry to Email</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/919537157153?text=${encodeURIComponent(`Hello Vishambar Ji, I would like to book an appointment:\n\n*Name:* ${name || 'Customer'}\n*Phone:* ${phone || 'N/A'}\n*Service:* ${service}\n*Preferred Date:* ${date || 'N/A'}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:scale-105 transition-transform"
            >
              <span>Instant Chat on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </form>

      </div>
    </div>
  );
}
