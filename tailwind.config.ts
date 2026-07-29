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
        background: "#FFF5B8",
        gold: {
          DEFAULT: "#CCA25A",
          dark: "#A8813A",
          hover: "#B8914B",
          light: "#E5C889",
        },
        surface: {
          DEFAULT: "#F7E8A1",
          elevated: "#EFE094",
          light: "#FFF5B8",
        },
        border: {
          DEFAULT: "#CCA25A",
          dark: "#2C200B",
        },
        text: {
          primary: "#2C200B",
          muted: "#3A2A0E",
          dim: "#5C451A",
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
