/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'mobile-sm': { min: '360px', max: '540px' },
        'mobile-md': { min: '541px', max: '1000px' },
        'tablet-md': { min: '1001px', max: '1279px' },
        'desktop-lg': { min: '1280px' },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
