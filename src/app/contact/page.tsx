'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { Sparkles, MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Custom Tattoo',
    location: 'Vadodara Flagship Studio',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F8C8DC', '#FFF0F5', '#1F0712'],
      });
    } catch (err) {}
  };

  const faqs = [
    {
      q: 'Do I need an advance appointment for tattoos or mehendi?',
      a: 'While walk-ins are welcomed subject to artist availability, we highly recommend booking at least 2 to 3 days in advance for custom tattoos and 2 to 4 weeks in advance for full bridal mehendi packages.',
    },
    {
      q: 'Is your henna paste 100% natural and chemical-free?',
      a: 'Yes, absolutely. We use 100% pure organic Rajasthani Sojat henna leaves freshly ground and mixed with natural eucalyptus and tea tree essential oils. Zero chemicals, synthetic dyes, or PPD.',
    },
    {
      q: 'How long does a full bridal mehendi session take?',
      a: 'A complete bridal mehendi package covering full arms and feet usually takes between 4 to 6 hours depending on the density of figures and marwari motifs requested.',
    },
    {
      q: 'Can I bring my own custom tattoo reference or sketch?',
      a: 'Yes! You can bring photos, sketches, or ideas. Our artists will collaborate with you to create a customized, high-resolution stencil tailored specifically to your body contour.',
    },
    {
      q: 'What is your studio hygiene and sterilization policy?',
      a: 'We strictly follow medical-grade single-use disposable needle cartridges, hospital-grade surface disinfectants, autoclaved equipment, and fresh sterile gloves for every single client.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#1F0712] text-[#FFF0F5] pt-24">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#2B0B1D] to-[#1F0712] border-b border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8C8DC]/10 border border-[#F8C8DC]/30 text-[#F8C8DC] text-xs font-mono uppercase tracking-[0.3em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Connect With Rajasthan Mahendi Art
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Have questions about a tattoo design or bridal mehendi booking? Visit our luxury studio or reach out to Vishambar Ji directly.
          </p>
        </div>
      </section>

      {/* Studios Info + Contact Form Grid */}
      <section className="py-20 bg-[#FFF0F3] text-[#1F0712]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Studio Locations */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D81B60] font-bold block mb-2">
                OUR STUDIOS
              </span>
              <h2 className="font-serif-heading text-3xl font-bold text-[#1F0712]">
                Visit Us In Person
              </h2>
            </div>

            {/* Studio 1: Vadodara Main Studio */}
            <div className="bg-white p-8 rounded-3xl border border-[#1F0712]/10 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif-heading text-xl font-bold text-[#1F0712]">
                    Rajasthan Mahendi & Piercing
                  </h3>
                  <span className="text-xs text-[#D81B60] font-mono font-bold block mt-0.5">
                    Vishambar ji: +91 95371 57153 (Since 2007)
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#1F0712] text-[#F8C8DC] text-[10px] uppercase font-mono font-bold tracking-wider">
                  Vadodara
                </span>
              </div>
              <p className="text-xs text-[#1F0712]/75 flex items-start gap-2 leading-relaxed font-sans">
                <MapPin className="w-4 h-4 text-[#D81B60] shrink-0 mt-0.5" />
                <span>Reliance Smart Bazaar, Gangam Plaza, Canal Road, Opp. McDonalds, Sama Savli Road, Vemali, Vadodara - 390024</span>
              </p>
              <div className="pt-3 border-t border-[#1F0712]/10 grid grid-cols-2 gap-3 text-xs font-mono text-[#1F0712]/80">
                <a href="tel:9537157153" className="flex items-center gap-2 hover:text-[#D81B60]">
                  <Phone className="w-3.5 h-3.5 text-[#D81B60]" />
                  <strong className="text-[#1F0712]">95371 57153</strong>
                </a>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#D81B60]" />
                  <span>9 AM - 10 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="p-6 rounded-3xl bg-[#1F0712] text-white flex items-center justify-between">
              <div>
                <h4 className="font-serif-heading text-lg font-bold text-white">Free Home Service Available</h4>
                <p className="text-xs text-white/60">Special arrangements for marriage parties & sangeet functions.</p>
              </div>
              <a
                href="https://wa.me/919537157153"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#F8C8DC] text-[#1F0712] font-bold text-xs uppercase tracking-wider hover:bg-[#FFF0F5] transition-colors shrink-0 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl border border-[#1F0712]/10 shadow-xl">
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D81B60] font-bold block mb-1">
                    APPOINTMENT & INQUIRY
                  </span>
                  <h2 className="font-serif-heading text-3xl font-bold text-[#1F0712]">
                    Send Us A Message
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-[#1F0712]/70 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full bg-[#FFF0F3] border border-[#1F0712]/15 rounded-xl p-3 text-sm text-[#1F0712] outline-none focus:border-[#D81B60]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-[#1F0712]/70 block mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#FFF0F3] border border-[#1F0712]/15 rounded-xl p-3 text-sm text-[#1F0712] outline-none focus:border-[#D81B60]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-[#1F0712]/70 block mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full bg-[#FFF0F3] border border-[#1F0712]/15 rounded-xl p-3 text-sm text-[#1F0712] outline-none focus:border-[#D81B60]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-[#1F0712]/70 block mb-1">Service Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#FFF0F3] border border-[#1F0712]/15 rounded-xl p-3 text-sm text-[#1F0712] outline-none focus:border-[#D81B60]"
                    >
                      <option value="Custom Tattoo">Custom Tattoo</option>
                      <option value="Bridal Mehndi Package">Bridal Mehndi Package</option>
                      <option value="Event Henna">Event / Group Mehndi</option>
                      <option value="Tattoo Cover Up">Tattoo Cover Up</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-[#1F0712]/70 block mb-1">Preferred Location</label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-[#FFF0F3] border border-[#1F0712]/15 rounded-xl p-3 text-sm text-[#1F0712] outline-none focus:border-[#D81B60]"
                    >
                      <option value="Vadodara Flagship Studio">Vadodara Flagship Studio</option>
                      <option value="Jaipur Royal Studio">Jaipur Royal Studio</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-[#1F0712]/70 block mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#FFF0F3] border border-[#1F0712]/15 rounded-xl p-3 text-sm text-[#1F0712] outline-none focus:border-[#D81B60]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-[#1F0712]/70 block mb-1">Design Notes / Specific Requests</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your design placement, tattoo size, or event requirements..."
                    className="w-full bg-[#FFF0F3] border border-[#1F0712]/15 rounded-xl p-3 text-sm text-[#1F0712] outline-none focus:border-[#D81B60]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#1F0712] hover:bg-[#D81B60] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#1F0712] text-[#F8C8DC] flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-heading text-3xl font-bold text-[#1F0712]">
                  Thank You!
                </h3>
                <p className="text-sm text-[#1F0712]/70 max-w-md mx-auto leading-relaxed">
                  Your inquiry has been received. Vishambar Ji will reach out to you via WhatsApp within 2 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#1F0712] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Interactive Map Showcase Card */}
      <section className="py-16 bg-[#2B0B1D] text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-6">
          <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#F8C8DC]">
            VISIT OUR STUDIO IN VADODARA
          </span>
          <div className="relative w-full h-80 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-[#1F0712] via-[#2B0B1D] to-[#1F0712] flex flex-col items-center justify-center p-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#F8C8DC]/10 border border-[#F8C8DC]/40 flex items-center justify-center text-[#F8C8DC]">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="font-serif-heading text-2xl font-bold text-white">
              Rajasthan Mahendi Art & Body Piercing Studio
            </h3>
            <p className="text-xs text-white/70 max-w-lg leading-relaxed">
              Reliance Smart Bazaar, Gangam Plaza, Canal Road, Opp. McDonalds, Sama Savli Road, Vemali, Vadodara - 390024
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="https://maps.google.com/?q=Reliance+Smart+Bazaar+Gangam+Plaza+Vemali+Vadodara"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#F8C8DC] text-[#1F0712] text-xs font-bold uppercase tracking-wider hover:bg-[#FFF0F5] transition-colors"
              >
                Open Studio Location in Google Maps
              </a>
              <a
                href="tel:9537157153"
                className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Call Vishambar Ji: 95371 57153
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-[#FFF0F3] text-[#1F0712]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D81B60] font-bold block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#1F0712]">
              Everything You Need To Know
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#1F0712]/10 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif-heading text-lg font-bold text-[#1F0712]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D81B60] transition-transform duration-300 shrink-0 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-[#1F0712]/75 leading-relaxed font-sans border-t border-[#1F0712]/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Booking Modal */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
