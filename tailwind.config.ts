import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#4f46e5',
          light: '#6056f2',
          dark: '#3730a3',
        },
        accent: {
          DEFAULT: '#10b981',
          light: '#2dd4bf',
          dark: '#059669',
        },
        secondary: {
          DEFAULT: '#f43f5e',
          light: '#fb7185',
          dark: '#dc2626',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
