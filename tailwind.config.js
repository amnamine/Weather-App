/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',  // Indigo
        secondary: '#3B82F6', // Sky Blue
        accent: '#FBBF24',    // Amber
        background: '#1E3A8A', // Dark Blue
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
