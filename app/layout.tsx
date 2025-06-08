import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeWrapper from "../components/ThemeWrapper";
import ScrollFooter from "../components/ScrollFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agentstr",
  description: "Homepage for Agentstr",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="favicon.ico?v=2" />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeWrapper>
          <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
              {children}
            </main>
            <ScrollFooter />
          </div>
        </ThemeWrapper>
      </body>
    </html>
  );
}

