import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        shineCycle: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "5%": { transform: "translateX(0%)", opacity: "1" },
          "15%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
      },
      animation: {
        'bounce-left': 'bounce-left 1s ease-out',
        'bounce-left2': 'bounce-left2 1s ease-out infinite',
        shineCycle: "shineCycle 6s ease-in-out infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgColor: '#18191a',
        boxColor: '#242526',
        btn: '#0866ff',
        bgLogin: '#f0f2f5',
        baseColor: '#5c2928',
        hoverColor: "#723d3c",
        ecColor1: "#41B3A2",
        ecColor2: "#0D7C66",
        bgTour: "#73141c",
        hoverTour: "#96242e",
        bgBlue:"#377fbc",
        devColor: "#2978c3",
      },
    },
  },
  plugins: [],
};
export default config;