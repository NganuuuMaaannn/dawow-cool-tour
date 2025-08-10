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
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        'bounce-left': 'bounce-left 1s ease-out',
        'bounce-left2': 'bounce-left2 1s ease-out infinite'
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
        bgTour: "#508D4E",
        hoverTour: "#1A5319"
      },
    },
  },
  plugins: [],
};
export default config;