/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this to ensure Tailwind scans your files for class usage
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
