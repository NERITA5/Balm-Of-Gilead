/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#f0f5fa",
          100: "#dbe7f2",
          100: "#dbe7f2",
          200: "#bdcef0",
          300: "#8faad3",
          400: "#5a80b3",
          500: "#0b3160", // Deep Institutional Blue Anchor
          600: "#082548",
          700: "#061a33",
          800: "#041121",
          900: "#020810",
        },
        accent: {
          50:  "#fff5f5",
          100: "#ffe3e4",
          100: "#ffe3e4",
          200: "#ffccd0",
          300: "#ff99a1",
          400: "#ff5263",
          500: "#d91e27", // Crimson Red Anchor
          600: "#b8141b",
          700: "#940d12",
          800: "#70070a",
          900: "#4a0204",
        },
        neutral: {
          50:  "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #061a33 0%, #0b3160 50%, #082548 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #d91e27 0%, #b8141b 100%)",
      },
    },
  },
  plugins: [],
};