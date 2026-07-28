import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0E08",
        cream: "#FDFBD4",
        sage: "#D9D7B6",
        taupe: "#878672",
        olive: {
          DEFAULT: "#545333",
          dark: "#373621",
          hover: "#6B6A43",
        },
        surface: {
          DEFAULT: "#16170E",
          elevated: "#202215",
          hover: "#2A2D1C",
        },
        accent: {
          DEFAULT: "#545333",
          hover: "#6B6A43",
          bright: "#D9D7B6",
          blue: "#545333",
          cyan: "#878672",
          glow: "rgba(84, 83, 51, 0.3)",
        },
        border: {
          DEFAULT: "#545333",
          bright: "#878672",
          glow: "#545333",
        },
        text: {
          primary: "#FDFBD4",
          muted: "#D9D7B6",
          dim: "#878672",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "sans-serif"],
        mono: ["monospace"],
      },
      animation: {
        "marquee-slow": "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
