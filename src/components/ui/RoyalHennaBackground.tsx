'use client';

import { motion } from 'framer-motion';

interface RoyalHennaBackgroundProps {
  variant?: 'hero' | 'services' | 'about' | 'why' | 'gallery' | 'cta' | 'footer' | 'default';
  className?: string;
}

export default function RoyalHennaBackground({ variant = 'hero', className = '' }: RoyalHennaBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      
      {/* Ambient Radial Soft Glow */}
      <div className="absolute top-1/4 left-1/4 w-[650px] h-[650px] bg-gradient-to-tr from-[#FFE082]/25 via-white/20 to-transparent rounded-full blur-[140px] opacity-75 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gradient-to-tr from-[#FFF0F5]/25 via-white/20 to-transparent rounded-full blur-[130px] opacity-60" />

      {/* VARIANT 1: HERO / DEFAULT - 16-Petal Lotus & Peacock Star Mandala */}
      {(variant === 'hero' || variant === 'default') && (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 65, ease: 'linear' }}
            className="absolute -top-32 -left-32 w-[520px] h-[520px] sm:w-[680px] sm:h-[680px] text-[#FFE082]/30 opacity-90"
          >
            <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_20px_rgba(255,224,130,0.35)]">
              <circle cx="200" cy="200" r="185" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
              <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="200" cy="200" r="80" fill="none" stroke="currentColor" strokeWidth="2" />

              {[...Array(16)].map((_, i) => (
                <g key={i} transform={`rotate(${(i * 360) / 16} 200 200)`}>
                  <path d="M200,75 Q215,105 200,130 Q185,105 200,75 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="200" cy="60" r="4.5" fill="currentColor" />
                  <line x1="200" y1="130" x2="200" y2="180" stroke="currentColor" strokeWidth="1" />
                </g>
              ))}

              {[...Array(8)].map((_, i) => (
                <g key={i} transform={`rotate(${(i * 360) / 8 + 22.5} 200 200)`}>
                  <path d="M200,135 C212,150 212,165 200,180 C188,165 188,150 200,135 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </g>
              ))}
            </svg>
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 80, ease: 'linear' }}
            className="absolute -bottom-40 -right-40 w-[550px] h-[550px] sm:w-[720px] sm:h-[720px] text-[#FFE082]/25 opacity-80"
          >
            <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_20px_rgba(255,224,130,0.3)]">
              <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" />
              <circle cx="200" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="2" />
              {[...Array(12)].map((_, i) => (
                <g key={i} transform={`rotate(${(i * 360) / 12} 200 200)`}>
                  <path d="M200,35 C230,35 240,70 220,105 C200,125 180,95 200,35 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="200" cy="20" r="3.5" fill="currentColor" />
                </g>
              ))}
            </svg>
          </motion.div>
        </>
      )}

      {/* VARIANT 2: SERVICES - Kalka Paisley & Dual Counter-Rotating Henna Wheels */}
      {variant === 'services' && (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 70, ease: 'linear' }}
            className="absolute -top-24 right-10 w-[500px] h-[500px] text-white/20 opacity-80"
          >
            <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-md">
              <circle cx="200" cy="200" r="170" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
              <circle cx="200" cy="200" r="130" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {[...Array(12)].map((_, i) => (
                <g key={i} transform={`rotate(${(i * 360) / 12} 200 200)`}>
                  <path d="M200,70 C220,90 220,120 200,140 C180,120 180,90 200,70 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="200" cy="55" r="4" fill="currentColor" />
                </g>
              ))}
            </svg>
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 85, ease: 'linear' }}
            className="absolute -bottom-24 -left-20 w-[520px] h-[520px] text-white/20 opacity-75"
          >
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {[...Array(16)].map((_, i) => (
                <g key={i} transform={`rotate(${(i * 360) / 16} 200 200)`}>
                  <line x1="200" y1="50" x2="200" y2="100" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="200" cy="40" r="3" fill="currentColor" />
                </g>
              ))}
            </svg>
          </motion.div>
        </>
      )}

      {/* VARIANT 3: ABOUT US - Royal Sunburst Jharokha Mandala */}
      {variant === 'about' && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 90, ease: 'linear' }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] text-white/25 opacity-80"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="185" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="2" />
            {[...Array(24)].map((_, i) => (
              <line
                key={i}
                x1="200"
                y1="60"
                x2="200"
                y2="90"
                transform={`rotate(${(i * 360) / 24} 200 200)`}
                stroke="currentColor"
                strokeWidth="1.5"
              />
            ))}
          </svg>
        </motion.div>
      )}

      {/* VARIANT 4: WHY CHOOSE US - Peacock Feather Mandala */}
      {variant === 'why' && (
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 65, ease: 'linear' }}
          className="absolute -bottom-28 right-0 w-[550px] h-[550px] text-white/25 opacity-85"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="175" fill="none" stroke="currentColor" strokeWidth="2" />
            {[...Array(12)].map((_, i) => (
              <g key={i} transform={`rotate(${(i * 360) / 12} 200 200)`}>
                <path d="M200,60 Q225,95 200,130 Q175,95 200,60 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="200" cy="95" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </g>
            ))}
          </svg>
        </motion.div>
      )}

      {/* VARIANT 5: GALLERY - Floating Lotus Bloom Mandala */}
      {variant === 'gallery' && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 80, ease: 'linear' }}
          className="absolute top-10 left-10 w-[450px] h-[450px] text-white/20 opacity-75"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
            {[...Array(8)].map((_, i) => (
              <g key={i} transform={`rotate(${(i * 360) / 8} 200 200)`}>
                <circle cx="200" cy="80" r="25" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </g>
            ))}
          </svg>
        </motion.div>
      )}

      {/* VARIANT 6: CTA BANNER - Royal Crown & Lotus Mandala */}
      {variant === 'cta' && (
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 55, ease: 'linear' }}
          className="absolute -right-20 -top-20 w-[400px] h-[400px] text-[#D81B60]/20 opacity-80"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="170" fill="none" stroke="currentColor" strokeWidth="2" />
            {[...Array(16)].map((_, i) => (
              <circle key={i} cx="200" cy="50" r="10" transform={`rotate(${(i * 360) / 16} 200 200)`} fill="none" stroke="currentColor" strokeWidth="1.5" />
            ))}
          </svg>
        </motion.div>
      )}

      {/* VARIANT 7: FOOTER - Concentric Marwari Ring Mandala */}
      {variant === 'footer' && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 90, ease: 'linear' }}
          className="absolute -left-20 -bottom-20 w-[450px] h-[450px] text-white/20 opacity-75"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </motion.div>
      )}

      {/* Floating Sparkle Dust Particle Stream */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 1000 - 300,
            y: Math.random() * 800 - 100,
            scale: Math.random() * 0.6 + 0.4,
            opacity: Math.random() * 0.4 + 0.2,
          }}
          animate={{
            y: [0, -35, 0],
            opacity: [0.2, 0.75, 0.2],
            scale: [1, 1.25, 1],
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

      {/* Delicate Henna Mesh Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#FFE082_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-20" />

    </div>
  );
}
