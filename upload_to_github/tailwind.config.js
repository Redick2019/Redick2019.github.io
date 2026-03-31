/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#070e17",
        surface: "#0d1825",
        surface2: "#111f30",
        "c-border": "#1a2d42",
        "c-blue": "#00b4ff",
        "c-amber": "#f5a623",
        "c-green": "#00e5a0",
        "c-muted": "#5d7a96",
        "c-text": "#dde4ed",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
        sans: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
