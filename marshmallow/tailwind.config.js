/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'dark': '0 4px 4px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
}