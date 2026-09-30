'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { Sparkles, MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, ChevronDown, Loader2 } from 'lucide-react';
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

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F8C8DC', '#FFF0F5', '#D81B60'],
      });
    } catch (err) {}

    const mailtoUrl = `mailto:rajasthanmahendiandpiercing@gmail.com?subject=${encodeURIComponent(`Inquiry from ${formData.name || 'Customer'}`)}&body=${encodeURIComponent(`Hello Vishambar Ji,\n\nI am contacting you from your website:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nLocation: ${formData.location}\nDate: ${formData.date}\nNotes: ${formData.message}`)}`;

    window.location.href = mailtoUrl;
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
    <main className="min-h-screen bg-[#FFF0F3] text-[#4A0E2E] pt-24">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-[#FFF0F3] border-b border-[#FCE4EC] text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCE4EC] border border-[#F8BBD0] text-[#D81B60] text-xs font-mono uppercase tracking-[0.3em] mb-4 font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D81B60]" />
            Connect With Rajasthan Mahendi Art
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold tracking-tight text-[#4A0E2E] mb-6">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg text-[#4A0E2E]/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Have questions about a tattoo design or bridal mehendi booking? Visit our luxury studio or reach out to Vishambar Ji directly.
          </p>
        </div>
      </section>

      {/* Studios Info + Contact Form Grid */}
      <section className="py-20 bg-white text-[#4A0E2E]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Studio Locations */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D81B60] font-bold block mb-2">
                OUR STUDIOS
              </span>
              <h2 className="font-serif-heading text-3xl font-bold text-[#4A0E2E]">
                Visit Us In Person
              </h2>
            </div>

            {/* Studio 1: Vadodara Main Studio */}
            <div className="bg-[#FFF0F3] p-8 rounded-3xl border border-[#FCE4EC] shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif-heading text-xl font-bold text-[#4A0E2E]">
                    Rajasthan Mahendi & Piercing
                  </h3>
                  <span className="text-xs text-[#D81B60] font-mono font-bold block mt-0.5">
                    Vishambar ji: +91 95371 57153 (Since 2007)
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#D81B60] text-white text-[10px] uppercase font-mono font-bold tracking-wider shadow-sm">
                  Vadodara
                </span>
              </div>
              <p className="text-xs text-[#4A0E2E]/80 flex items-start gap-2 leading-relaxed font-sans font-medium">
                <MapPin className="w-4 h-4 text-[#D81B60] shrink-0 mt-0.5" />
                <span>Reliance Smart Bazaar, Gangam Plaza, Canal Road, Opp. McDonalds, Sama Savli Road, Vemali, Vadodara - 390024</span>
              </p>
              <div className="pt-3 border-t border-[#FCE4EC] grid grid-cols-2 gap-3 text-xs font-mono text-[#4A0E2E]/80">
                <a href="tel:+919537157153" itemProp="telephone" className="flex items-center gap-2 hover:text-[#D81B60]">
                  <Phone className="w-3.5 h-3.5 text-[#D81B60]" />
                  <strong className="text-[#880E4F]">+91 95371 57153</strong>
                </a>
                <div className="flex items-center gap-2 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#D81B60]" />
                  <span>9 AM - 10 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-[#D81B60] via-[#E91E63] to-[#AD1457] text-white flex items-center justify-between shadow-lg">
              <div>
                <h4 className="font-serif-heading text-lg font-bold text-white">Free Home Service Available</h4>
                <p className="text-xs text-white/90 font-medium">Special arrangements for marriage parties & sangeet functions.</p>
              </div>
              <a
                href="https://wa.me/919537157153"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white text-[#D81B60] font-bold text-xs uppercase tracking-wider hover:bg-[#FCE4EC] transition-colors shrink-0 flex items-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-[#D81B60]" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#FFF0F3] p-8 md:p-12 rounded-3xl border border-[#FCE4EC] shadow-xl">
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D81B60] font-bold block mb-1">
                    APPOINTMENT & INQUIRY
                  </span>
                  <h2 className="font-serif-heading text-3xl font-bold text-[#4A0E2E]">
                    Send Us A Message
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-[#880E4F] font-semibold block mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="Full Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full bg-white border border-[#F8BBD0] rounded-xl p-3 text-sm text-[#4A0E2E] outline-none focus:border-[#D81B60] shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-[#880E4F] font-semibold block mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      name="Phone / WhatsApp"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white border border-[#F8BBD0] rounded-xl p-3 text-sm text-[#4A0E2E] outline-none focus:border-[#D81B60] shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-[#880E4F] font-semibold block mb-1">Email Address</label>
                    <input
                      type="email"
                      name="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full bg-white border border-[#F8BBD0] rounded-xl p-3 text-sm text-[#4A0E2E] outline-none focus:border-[#D81B60] shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-[#880E4F] font-semibold block mb-1">Service Required</label>
                    <select
                      name="Service Required"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-white border border-[#F8BBD0] rounded-xl p-3 text-sm text-[#4A0E2E] outline-none focus:border-[#D81B60] shadow-sm"
                    >
                      <option value="Special Bridal Dulhan Mehndi">Special Bridal Dulhan Mehndi</option>
                      <option value="Marwari & Rajwadi Mehndi">Marwari & Rajwadi Mehndi</option>
                      <option value="Ear, Nose & Body Piercing">Ear, Nose & Body Piercing</option>
                      <option value="Event Henna & Group Service">Event Henna & Group Service</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-[#880E4F] font-semibold block mb-1">Preferred Location</label>
                    <select
                      name="Preferred Location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-white border border-[#F8BBD0] rounded-xl p-3 text-sm text-[#4A0E2E] outline-none focus:border-[#D81B60] shadow-sm"
                    >
                      <option value="Vadodara Studio (Gangam Plaza)">Vadodara Studio (Gangam Plaza)</option>
                      <option value="Free Home Service (Vadodara)">Free Home Service (Vadodara)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-[#880E4F] font-semibold block mb-1">Preferred Date</label>
                    <input
                      type="date"
                      name="Preferred Date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-white border border-[#F8BBD0] rounded-xl p-3 text-sm text-[#4A0E2E] outline-none focus:border-[#D81B60] shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-[#880E4F] font-semibold block mb-1">Design Notes / Specific Requests</label>
                  <textarea
                    rows={4}
                    name="Design Notes"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your design placement, event requirements..."
                    className="w-full bg-white border border-[#F8BBD0] rounded-xl p-3 text-sm text-[#4A0E2E] outline-none focus:border-[#D81B60] shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#D81B60] via-[#E91E63] to-[#AD1457] hover:from-[#AD1457] hover:to-[#880E4F] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>1. Submit Form Online</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a
                      href={`mailto:rajasthanmahendiandpiercing@gmail.com?subject=${encodeURIComponent(`Inquiry from ${formData.name || 'Customer'}`)}&body=${encodeURIComponent(`Hello Vishambar Ji,\n\nI am contacting you from your website:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nLocation: ${formData.location}\nDate: ${formData.date}\nNotes: ${formData.message}`)}`}
                      className="py-3 px-3 rounded-full bg-[#3D0C20] hover:bg-[#5A1230] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all text-center"
                    >
                      <Mail className="w-4 h-4 text-[#FFE082]" />
                      <span>2. Open Email App</span>
                    </a>

                    <a
                      href={`https://wa.me/919537157153?text=${encodeURIComponent(`Hello Vishambar Ji, I am submitting an inquiry:\n\n*Name:* ${formData.name || 'Customer'}\n*Phone:* ${formData.phone || 'N/A'}\n*Email:* ${formData.email || 'N/A'}\n*Service:* ${formData.service}\n*Location:* ${formData.location}\n*Date:* ${formData.date || 'N/A'}\n*Notes:* ${formData.message || 'None'}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-3 rounded-full bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:scale-105 transition-transform text-center"
                    >
                      <MessageSquare className="w-4 h-4 text-white" />
                      <span>3. Send WhatsApp</span>
                    </a>
                  </div>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FCE4EC] border border-[#F8BBD0] text-[#D81B60] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8 text-[#D81B60]" />
                </div>
                <h3 className="font-serif-heading text-3xl font-bold text-[#4A0E2E]">
                  Inquiry Submitted!
                </h3>
                <p className="text-xs text-[#4A0E2E]/80 max-w-sm mx-auto leading-relaxed font-medium">
                  Your details have been submitted to <strong className="text-[#D81B60]">rajasthanmahendiandpiercing@gmail.com</strong>.
                </p>

                <div className="pt-3 max-w-sm mx-auto flex flex-col gap-3">
                  <a
                    href={`https://wa.me/919537157153?text=${encodeURIComponent(`Hello Vishambar Ji, I submitted an inquiry on your website:\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || 'N/A'}\n*Service:* ${formData.service}\n*Location:* ${formData.location}\n*Date:* ${formData.date || 'N/A'}\n*Notes:* ${formData.message || 'None'}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform"
                  >
                    <span>Send Message via WhatsApp</span>
                    <Send className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="w-full py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-[#4A0E2E] font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Interactive Map Showcase Card */}
      <section className="py-16 bg-[#FFF0F3] text-[#4A0E2E] border-t border-[#FCE4EC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-6">
          <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#D81B60] font-semibold">
            VISIT OUR STUDIO IN VADODARA
          </span>
          <div className="relative w-full h-80 rounded-3xl overflow-hidden border border-[#FCE4EC] shadow-xl bg-white flex flex-col items-center justify-center p-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#FCE4EC] border border-[#F8BBD0] flex items-center justify-center text-[#D81B60] shadow-sm">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="font-serif-heading text-2xl font-bold text-[#4A0E2E]">
              Rajasthan Mahendi Art & Body Piercing Studio
            </h3>
            <p className="text-xs text-[#4A0E2E]/80 max-w-lg leading-relaxed font-medium">
              Reliance Smart Bazaar, Gangam Plaza, Canal Road, Opp. McDonalds, Sama Savli Road, Vemali, Vadodara - 390024
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="https://maps.google.com/?q=Reliance+Smart+Bazaar+Gangam+Plaza+Vemali+Vadodara"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D81B60] to-[#AD1457] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-all"
              >
                Open Studio Location in Google Maps
              </a>
              <a
                href="tel:+919537157153"
                itemProp="telephone"
                className="px-6 py-3 rounded-full bg-[#FCE4EC] border border-[#F8BBD0] text-[#880E4F] hover:bg-[#F8BBD0] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                Call Vishambar Ji: +91 95371 57153
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-white text-[#4A0E2E]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D81B60] font-bold block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#4A0E2E]">
              Everything You Need To Know
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#FFF0F3] rounded-2xl border border-[#FCE4EC] shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif-heading text-lg font-bold text-[#4A0E2E]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D81B60] transition-transform duration-300 shrink-0 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-[#4A0E2E]/80 leading-relaxed font-sans border-t border-[#FCE4EC] pt-4 font-medium">
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
