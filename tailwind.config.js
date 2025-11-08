/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ["'Inter Variable'", "system-ui", "sans-serif"],
      mono: ["'IBM Plex Mono'", "ui-monospace", "SFMono-Regular", "monospace"]
    },
    extend: {
      colors: {
        night: "#101218",
        slate: "#1A1C24",
        ash: "#F2F4F8",
        accent: "#3346FF",
        accentMuted: "#5B6BFF",
        crypto: "#00C896",
        fiat: "#FF8A00"
      },
      boxShadow: {
        layer: "0 12px 30px rgba(9, 11, 17, 0.18)",
        inset: "inset 0 0 0 1px rgba(16, 18, 24, 0.12)"
      }
    }
  },
  corePlugins: {
    borderRadius: false
  }
};

module.exports = config;
