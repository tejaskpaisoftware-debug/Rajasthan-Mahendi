'use client';

import { X, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface LightboxModalProps {
  item: any | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function LightboxModal({ item, onClose, onOpenBooking }: LightboxModalProps) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Light Blur Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#4A0E2E]/50 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FFF0F3] text-[#4A0E2E] p-5 sm:p-8 rounded-2xl sm:rounded-3xl z-10 border border-[#F8BBD0] shadow-2xl flex flex-col md:flex-row gap-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white border border-[#F8BBD0] flex items-center justify-center text-[#880E4F] hover:bg-[#FCE4EC]"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image Display */}
        <div className="relative w-full md:w-1/2 h-72 md:h-96 rounded-2xl overflow-hidden bg-[#FCE4EC] border border-[#F8BBD0]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4 py-2">
          <div className="space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-widest px-3 py-1 rounded-full bg-[#FCE4EC] text-[#880E4F] border border-[#F8BBD0] font-bold inline-block">
              {item.category}
            </span>
            <h3 className="font-serif-heading text-2xl font-bold text-[#4A0E2E]">
              {item.title}
            </h3>
            <p className="text-xs text-[#4A0E2E]/80 leading-relaxed font-sans font-medium">
              Handcrafted with surgical precision by Rajasthan Mahendi Art master artists. Custom stencils, medical-grade hygiene, and premium organic henna.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#F8BBD0]">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#D81B60] via-[#E91E63] to-[#AD1457] hover:from-[#AD1457] hover:to-[#880E4F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <span>Get Similar Custom Piece</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
