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
        background: "#0A0A0A",
        surface: {
          DEFAULT: "#121212",
          elevated: "#171717",
          hover: "#1F1F1F",
        },
        accent: {
          DEFAULT: "#0F3D35",
          hover: "#145449",
          bright: "#0F3D35",
          blue: "#0F3D35",
          cyan: "#0F3D35",
          glow: "rgba(15, 61, 53, 0.2)",
        },
        border: {
          DEFAULT: "#0F3D35",
          bright: "#145449",
          glow: "#0F3D35",
        },
        text: {
          primary: "#FFFFFF",
          muted: "#A1A1AA",
          dim: "#71717A",
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
