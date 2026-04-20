import type { Config } from "tailwindcss";

const config: Config = {
  // নিশ্চিত হোন এটি "class" দেওয়া আছে কিনা
  darkMode: "class", 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4", // Cyan color from your design
        background: "#0b1120", // Deep dark blue background
      },
    },
  },
  plugins: [],
};
export default config;