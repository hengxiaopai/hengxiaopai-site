import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#0A0D12",
        surface: "#10151C",
        line: "rgba(255,255,255,0.10)",
        ink: "#F5F7FA",
        muted: "#AAB3C2",
        cool: "#5D88FF",
        warm: "#C6A06A",
        signal: "#8EF0C7"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        halo: "0 0 80px rgba(93, 136, 255, 0.18)",
        warm: "0 0 80px rgba(198, 160, 106, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
