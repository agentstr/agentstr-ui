"use client";

import { ThemeProvider } from "./ThemeProvider";
import Navbar from "./Navbar";
import React from "react";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="bg-background dark:bg-background">
        {children}
      </div>
    </ThemeProvider>
  );
}
