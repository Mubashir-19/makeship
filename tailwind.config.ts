import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        makeship: {
          navy: '#0D2A4D',      // Primary Navy
          teal: '#2EC4A7',      // Teal Green (Innovation)
          'sky-teal': '#67D1C4', // Sky Teal (Soft Neutral)
          orange: '#FF6F3C',    // Orange Burst (CTA)
        },
      },
    },
  },
  plugins: [],
};

export default config;
