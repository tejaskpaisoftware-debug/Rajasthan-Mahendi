import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FAF6E8',
          100: '#F3E9C6',
          200: '#E6D28C',
          300: '#D9BC52',
          400: '#CCA61A',
          500: '#D4AF37',
          600: '#AA881C',
          700: '#7F6615',
          800: '#55440E',
          900: '#2A2207',
        },
        terracotta: {
          50: '#FBF4F3',
          100: '#F7E9E7',
          500: '#8B3A2B',
          600: '#6F2C20',
          700: '#531F16',
        },
        royalNavy: {
          900: '#0B0D19',
          950: '#06070E',
        },
        sandstone: {
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F0E7D8',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        script: ['Alex Brush', 'cursive'],
      },
      backgroundImage: {
        'liquid-glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 100%)',
        'gold-glass-gradient': 'linear-gradient(135deg, rgba(212, 175, 55, 0.25) 0%, rgba(212, 175, 55, 0.05) 100%)',
        'terracotta-glass-gradient': 'linear-gradient(135deg, rgba(139, 58, 43, 0.3) 0%, rgba(139, 58, 43, 0.05) 100%)',
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15) 0%, rgba(6, 7, 14, 0) 70%)',
      },
      boxShadow: {
        'liquid-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.3)',
        'gold-glow-lg': '0 0 50px rgba(212, 175, 55, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
