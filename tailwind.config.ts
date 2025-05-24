import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0a0a0a',
          light: '#1a1a1a',
        },
        foreground: {
          DEFAULT: '#ffffff',
          light: '#e5e5e5',
        },
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
