/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,jsx}",
  "./components/**/*.{js,jsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
  },
};
export const plugins = [];