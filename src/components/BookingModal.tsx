'use client';

import { useState } from 'react';
import { X, Check, ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Special Bridal Dulhan Mehndi');
  const [date, setDate] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send inquiry email directly to rajasthanmahendiandpiercing@gmail.com
      await fetch("https://formsubmit.co/ajax/rajasthanmahendiandpiercing@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Booking Inquiry from ${name} (Rajasthan Mahendi Art)`,
          _captcha: "false",
          "Customer Name": name,
          "Phone / WhatsApp": phone,
          "Requested Service": service,
          "Preferred Date": date,
          "Submitted At": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        })
      });
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#F8C8DC', '#FFF0F5', '#D81B60'],
        });
      } catch (err) {}
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setDate('');
    onClose();
  };

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

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
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
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white border border-[#F8BBD0] rounded-xl p-3 text-sm text-[#4A0E2E] focus:border-[#D81B60] outline-none shadow-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#D81B60] via-[#E91E63] to-[#AD1457] hover:from-[#AD1457] hover:to-[#880E4F] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-75"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Sending Inquiry to Mail...</span>
                </>
              ) : (
                <>
                  <span>Confirm Booking with Vishambar Ji</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#FCE4EC] border border-[#F8BBD0] flex items-center justify-center mx-auto text-[#D81B60] shadow-sm">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="font-serif-heading text-2xl font-bold text-[#4A0E2E]">
              Booking Inquiry Submitted!
            </h3>
            <p className="text-xs text-[#4A0E2E]/80 max-w-xs mx-auto leading-relaxed font-medium">
              Thank you {name}! Your inquiry has been routed to <strong className="text-[#D81B60]">rajasthanmahendiandpiercing@gmail.com</strong>.
            </p>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/919537157153?text=${encodeURIComponent(`Hello Vishambar Ji, I have submitted a booking inquiry on your website:\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Service:* ${service}\n*Preferred Date:* ${date}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform"
              >
                <span>Send Directly via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleReset}
                className="w-full py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#4A0E2E] font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Done / Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
