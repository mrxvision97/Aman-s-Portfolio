/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ff',
          100: '#bae7ff',
          200: '#91d5ff',
          300: '#69c0ff',
          400: '#40a9ff',
          500: '#1890ff',
          600: '#096dd9',
          700: '#0050b3',
          800: '#003a8c',
          900: '#002766',
          950: '#001529'
        },
        electric: {
          blue: '#00d4ff',
          green: '#39ff14',
          purple: '#bf00ff'
        },
        cyber: {
          dark: '#0a0a23',
          darker: '#000000'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'matrix': 'matrix 20s linear infinite',
        'typewriter': 'typewriter 3s steps(30) 1s 1 normal both',
        'blink': 'blink 1s infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff' },
          '100%': { boxShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff' }
        },
        matrix: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        blink: {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: '#39ff14' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff',
            transform: 'scale(1.05)'
          }
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': `
          linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
        `,
        'gradient-animated': 'linear-gradient(-45deg, #00d4ff, #39ff14, #bf00ff, #00d4ff)'
      },
      backgroundSize: {
        'grid': '50px 50px',
        'animated': '400% 400%'
      }
    },
  },
  plugins: [],
}