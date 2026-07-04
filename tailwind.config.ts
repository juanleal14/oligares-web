import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm)', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: '#a3af74',
        'gold-light': '#b8c28a',
        olive: '#4A5240',
        cream: '#F5F0E8',
        charcoal: '#1C1C1A',
        sand: '#E8DEC8',
      },
    },
  },
  plugins: [],
};
export default config;
