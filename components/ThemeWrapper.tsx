"use client";

import { ThemeProvider } from "./ThemeProvider";
import Navbar from "./Navbar";
import React from "react";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // Set dark mode immediately to prevent hydration mismatch
    document.documentElement.className = "dark";
  }, []);

  return (
    <ThemeProvider>
      <Navbar />
      <div className=" bg-gray-900">
        {children}
      </div>
    </ThemeProvider>
  );
}
