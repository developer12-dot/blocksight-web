import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#08090b',
        'bg-elevated': '#0c0d10',
        'bg-surface': '#101114',
        heading: '#edeef0',
        body: '#868a95',
        muted: '#44474f',
        accent: '#5b9cf5',
        green: '#4ade80',
        violet: '#a78bfa',
        amber: '#f5a623',
        line: 'rgba(255,255,255,0.045)',
        'line-strong': 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
        serif: ['Newsreader', 'serif'],
        sans: ['IBM Plex Sans', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
