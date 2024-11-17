/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors, // Include default colors
        primary: colors.purple, // Custom primary color
        secondary: colors.pink, // Custom secondary color
        background: "var(--background)", // Custom CSS variable colors
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

