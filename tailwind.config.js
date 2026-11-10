/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alarm: {
          red: '#ff1a40',
          neon: '#ff003c',
          darkRed: '#4a000d',
          glow: '#ff3366',
        },
        cyber: {
          purple: '#120b22',
          deep: '#0a0515',
          neonBlue: '#00f0ff',
          neonYellow: '#ffe600',
        },
        celebration: {
          gold: '#ffd700',
          pink: '#ff69b4',
          lavender: '#e6e6fa',
          softGold: '#fff2a3',
          warmGlow: '#ffeedd',
        }
      },
      animation: {
        'pulse-fast': 'pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wiggle': 'wiggle 0.3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'siren': 'siren 1s ease-in-out infinite alternate',
        'shake': 'shake 0.5s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        siren: {
          '0%': { opacity: '0.3', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1.02)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-4px)' },
          '40%, 80%': { transform: 'translateX(4px)' },
        }
      }
    },
  },
  plugins: [],
}

