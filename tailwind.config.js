/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
          colors: {
              primary: "#FF6B00", // Extracted orange from screenshot
              secondary: "#1A1A1A",
              "background-light": "#F9FAFB",
              "background-dark": "#0B0C0E",
              "surface-light": "#FFFFFF",
              "surface-dark": "#15171B",
              "text-light": "#1F2937",
              "text-dark": "#F3F4F6",
              "accent-gray": "#9CA3AF",
          },
          fontFamily: {
              sans: ['Inter', 'sans-serif'],
              display: ['Space Grotesk', 'sans-serif'],
          },
          borderRadius: {
              DEFAULT: "0.5rem",
              'xl': '1rem',
              '2xl': '1.5rem',
          },
      },
  },
  plugins: [],
}
