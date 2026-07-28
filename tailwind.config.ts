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
        background: "var(--color-background)",
        surface: {
          DEFAULT: "var(--color-surface)",
          elevated: "var(--color-surface-elevated)",
          hover: "var(--color-surface-hover)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
          blue: "#3B82F6",
          cyan: "#06B6D4",
          glow: "var(--color-accent-glow)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          bright: "var(--color-border-bright)",
          glow: "var(--color-border-glow)",
        },
        text: {
          primary: "var(--color-text-primary)",
          muted: "var(--color-text-muted)",
          dim: "var(--color-text-dim)",
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
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "ping-slow": "pingSlow 3s cubic-bezier(0, 0, 0.2, 1) infinite",
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
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        pingSlow: {
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
