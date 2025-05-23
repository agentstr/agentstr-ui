"use client";

import { ThemeProvider } from "./ThemeProvider";
import Navbar from "./Navbar";
import { useTheme } from "next-themes";
import React from "react";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    // Set dark mode immediately to prevent hydration mismatch
    document.documentElement.className = "dark";
  }, []);

  return (
    <ThemeProvider>
      <Navbar />
      <div className="min-h-screen bg-gray-900">
        {children}
      </div>
    </ThemeProvider>
  );
}
