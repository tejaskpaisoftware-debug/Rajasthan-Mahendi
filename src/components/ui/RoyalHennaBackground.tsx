'use client';

import { motion } from 'framer-motion';

export default function RoyalHennaBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* 1. Ambient Radial Royal Glow Spots */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#FFE082]/30 via-[#FFD54F]/20 to-transparent rounded-full blur-[140px] opacity-70 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-gradient-to-tr from-[#FFF0F5]/30 via-white/20 to-transparent rounded-full blur-[130px] opacity-60" />

      {/* 2. Top-Left Giant Rotating Royal Henna Mandala Wheel */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
        className="absolute -top-32 -left-32 w-[480px] h-[480px] sm:w-[600px] sm:h-[600px] text-[#FFE082]/25 opacity-80"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,224,130,0.3)]">
          {/* Concentric Decorative Rings */}
          <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="80" fill="none" stroke="currentColor" strokeWidth="2" />

          {/* 16 Petals Lotus Motif */}
          {[...Array(16)].map((_, i) => {
            const angle = (i * 360) / 16;
            return (
              <g key={i} transform={`rotate(${angle} 200 200)`}>
                <path
                  d="M200,80 Q215,110 200,130 Q185,110 200,80 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="200" cy="65" r="4" fill="currentColor" />
                <line x1="200" y1="130" x2="200" y2="180" stroke="currentColor" strokeWidth="1" />
              </g>
            );
          })}

          {/* Inner Peacock Feather Star Core */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 360) / 8 + 22.5;
            return (
              <g key={i} transform={`rotate(${angle} 200 200)`}>
                <path
                  d="M200,140 C210,155 210,165 200,175 C190,165 190,155 200,140 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* 3. Bottom-Right Rotating Royal Paisley & Henna Mandala */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 75, ease: 'linear' }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] text-[#FFE082]/20 opacity-75"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,224,130,0.25)]">
          <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" />
          <circle cx="200" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="200" cy="200" r="110" fill="none" stroke="currentColor" strokeWidth="1.5" />

          {/* 12 Outer Rajasthani Kalka/Mango Paisley Curves */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 360) / 12;
            return (
              <g key={i} transform={`rotate(${angle} 200 200)`}>
                <path
                  d="M200,40 C230,40 240,70 220,100 C200,120 180,90 200,40 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="200" cy="25" r="3" fill="currentColor" />
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* 4. Center Background Floating Lotus Petals & Gold Sparkle Dust */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 1000 - 300,
            y: Math.random() * 800 - 100,
            scale: Math.random() * 0.6 + 0.4,
            opacity: Math.random() * 0.4 + 0.2,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + Math.random() * 4,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
          className="absolute w-3 h-3 rounded-full bg-[#FFE082] shadow-[0_0_12px_#FFE082,0_0_20px_#FFD54F]"
        />
      ))}

      {/* 5. Delicate Henna Grid Pattern Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#FFE082_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-20" />

    </div>
  );
}
