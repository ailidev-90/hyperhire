import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        hyperhire: {
          blue: "#0CC0FF",
          blueDark: "#0074FF",
          blueMid: "#00A5FF",
          mint: "#73FFE6",
          textPrimary: "#FFFFFF",
          textSecondary: "#E2F6FF",
          footerBg: "#F5F7FB",
          footerText: "#7C8493"
        }
      },
      fontFamily: {
        sans: ["system-ui", "Noto Sans KR", "sans-serif"]
      },
      boxShadow: {
        card: "0 20px 40px rgba(15, 76, 129, 0.35)"
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideLeftLoop: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        slideLeftStep: {
          "0%, 100%": { transform: "translateX(0)" },
          "2%": { transform: "translateX(calc(-100% / var(--total-items)))" }
        }
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-left-loop": "slideLeftLoop 12s linear infinite",
        "slide-left-step": "slideLeftStep 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;

