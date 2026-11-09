import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(148, 163, 184, 0.25), 0 18px 60px rgba(15, 23, 42, 0.35)',
      },
      colors: {
        ink: '#0f172a',
        panel: '#111827',
        accent: '#7c3aed',
        mint: '#2dd4bf',
      },
    },
  },
  plugins: [],
};

export default config;
