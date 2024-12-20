import type { Config } from "tailwindcss";
import COLORS from "./tailwind/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "link-hover": {
          "0%": {
            width: "0",
          },
          "100%": {
            width: "100%",
          },
        },
        timeline: {
          "0%": {
            height: "0",
          },
          "100%": {
            height: "100%",
          },
        },
        "waving-hand": {
          "0%": { transform: "rotate(0deg)" },
          "10%": {
            transform: "rotate(14deg)",
          },
          "20%": {
            transform: "rotate(-8deg)",
          },
          "30%": {
            transform: "rotate(14deg)",
          },
          "40%": {
            transform: "rotate(-4deg)",
          },
          "50%": {
            transform: "rotate(10deg)",
          },
          "60%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        "image-float": {
          "30%": {
            transform: "translateY(10px)",
            borderRadius: "50% 55% 65% 55%",
          },
          "70%": {
            transform: "translateY(-10px)",
            borderRadius: "40% 65% 55% 65%",
          },
        },
      },
      animation: {
        "header-link-hover": "link-hover 0.3s ease-in-out forwards",
        "waving-hand-emoji": "waving-hand 1.5s infinite",
        "hero-image": "image-float 5s ease-in-out infinite",
        "timeline-border": "timeline 5s ease-in-out forwards",
      },
      boxShadow: {
        skillPill: "0 0px 20px 0px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        // Lato font
        lato: ["var(--font-lato)"],
        // Montserrat Font
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        background: "var(--background)",
        "secondary-background-dark": "#FDFBF0",
        "secondary-background-light": "#F5F5EF",
        foreground: "var(--foreground)",
        grey: {
          dark: "#1e293c",
          light: "#76869c",
          lighter: "#96A6BC",
          DEFAULT: "#3B4B61",
        },
        primary: {
          light: "#FFAF42",
          DEFAULT: "#FE6E00",
        },
        error: {
          DEFAULT: "#EF4444",
          light: "#FDE5F0",
        },
        success: {
          DEFAULT: "#00B09B",
          light: "#E5F7F5",
        },
        footer: "#252525",
        javascript: COLORS.javascript,
        typescript: COLORS.typescript,
        react: COLORS.react,
        next: COLORS.next,
        html5: COLORS.html5,
        css3: COLORS.css3,
        "tailwind-css": COLORS["tailwind-css"],
        redux: COLORS.redux,
        "react-query": COLORS["react-query"],
        "framer-motion": COLORS["framer-motion"],
        "react-native": COLORS["react-native"],
        python: COLORS.python,
        sql: COLORS.sql,
        git: COLORS.git,
        docker: COLORS.docker,

        X: "#0F1419",
        github: "#24292E",
        "linked-in": "#0177B5",
        "FE-Mentor": "#6ABFCD",
      },
    },
  },
  plugins: [],
};
export default config;
