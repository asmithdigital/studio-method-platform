/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        canvas: '#F9F8F5',
        surface: '#F0EEE9',
        border: '#DDD9D2',
        navy: '#0F1729',
        'navy-mid': '#1A2744',
        gold: '#C4964A',
        'gold-light': '#D4A85A',
        jade: '#2A7B5C',
        'jade-light': '#3A9B6C',
        rose: '#C45A5A',
        muted: '#7A7670',
        white: '#FFFFFF',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Instrument Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Instrument Sans', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        countUp: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(196,150,74,0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(196,150,74,0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'pulse-gold': 'pulse-gold 2s infinite',
      },
    },
  },
  plugins: [],
}

