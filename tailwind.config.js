/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          900: "#1e3a8a",
        },
        "neon-glow": {
          DEFAULT: "#00f5ff",
        },
        "neon-purple": {
          DEFAULT: "#a855f7",
        },
      },

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },

      boxShadow: {
        "neon-glow": "0 0 20px rgba(0, 245, 255, 0.5)",
        glass: "0 8px 32px rgba(31, 38, 135, 0.37)",
      },

      borderRadius: {
        "4xl": "2rem",
      },

      backdropBlur: {
        xs: "2px",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 10px #00f5ff" },
          "100%": { boxShadow: "0 0 30px #00f5ff" },
        },
      },
    },
  },

  plugins: [],
};