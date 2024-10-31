/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#007693",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        accent: "#FFA600",
      },
      animation: {
        "ping-fast": "ping 600ms linear infinite",
        "spin-fast": "spin 300ms linear infinite",
        "splash-circle": "splash-circle 3s linear 1 both",
      },
      keyframes: {
        "splash-circle": {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(10)" },
        },
      },
    },
  },
  plugins: [],
};
