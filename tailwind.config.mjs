/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0b0b',
        surface: '#141414',
        surface2: '#1b1b1b',
        border: {
          DEFAULT: '#262626',
          light: '#2f2f2f',
        },
        text: {
          primary: '#f0f0f0',
          secondary: '#9a9a9a',
          muted: '#5e5e5e',
        },
        accent: {
          DEFAULT: '#ff5c35',
          blue: '#4f8ef7',
          yellow: '#f5c842',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '20px',
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '400ms',
      },
      maxWidth: {
        content: '860px',
        site: '650px',
      },
      spacing: {
        gutter: 'var(--gutter, 1rem)',
        'nav-h': '56px',
      },
      screens: {
        xs: '480px',
      },
      animation: {
        'mc-heart-pulse': 'mc-heart-pulse 1.5s ease-in-out infinite',
      },
      keyframes: {
        'mc-heart-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.15)', opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
