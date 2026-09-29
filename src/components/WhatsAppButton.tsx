'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/919537157153?text=Hello%20Vishambar%20Ji%2C%20I%20would%20like%20to%20inquire%20about%20Mehndi%20%2F%20Tattoo%20booking.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
      {/* Tooltip Label on Hover / Mobile */}
      <span className="hidden sm:inline-block px-3.5 py-1.5 rounded-full bg-[#1F0712]/90 backdrop-blur-md text-[#FFF0F5] text-xs font-mono font-medium border border-[#25D366]/40 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Chat with Vishambar Ji: +91 95371 57153
      </span>

      {/* Floating Animated WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Vishambar Ji"
        className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        {/* Pulsing Ripple Aura Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />

        {/* Official SVG WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-current relative z-10 drop-shadow-md"
          viewBox="0 0 24 24"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.98 9.98 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.038-5.176-2.925-7.062A9.925 9.925 0 0012.012 2zm5.841 14.288c-.247.69-1.428 1.328-1.97 1.391-.502.059-1.157.086-1.859-.138-.426-.136-.975-.316-1.688-.624-2.996-1.298-4.945-4.321-5.096-4.521-.15-.2-1.226-1.631-1.226-3.11 0-1.479.774-2.208 1.05-2.508.275-.3.601-.375.801-.375.2 0 .401.002.576.01.188.008.438-.071.687.525.25.599.851 2.077.926 2.227.075.15.125.325.025.525-.1.2-.15.325-.3.5-.15.175-.315.391-.45.525-.15.15-.306.314-.131.614.175.3.778 1.284 1.67 2.08 1.147 1.022 2.115 1.338 2.415 1.488.3.15.476.125.651-.075.175-.2.751-.874.951-1.174.2-.3.4-.25.675-.15.275.1 1.75.825 2.05 1.025.3.2.5.3.575.425.075.125.075.725-.172 1.415z" />
        </svg>
      </a>
    </div>
  );
}
