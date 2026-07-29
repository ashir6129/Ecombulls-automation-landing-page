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
        background: "#FAF8F5",
        accent: {
          DEFAULT: "#C84B31",
          hover: "#B03D25",
          light: "#FDF2F0",
        },
        gold: "#CCA25A",
        dark: "#1C1917",
        surface: {
          DEFAULT: "#FFFFFF",
          warm: "#F5F2EC",
          dark: "#1C1917",
        },
        border: {
          DEFAULT: "#E7E5E4",
          accent: "#C84B31",
        },
        text: {
          primary: "#1C1917",
          muted: "#57534E",
          dim: "#78716C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "sans-serif"],
        display: ["var(--font-outfit)", "var(--font-plus-jakarta)", "sans-serif"],
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
