"use client";

import { useRef } from "react";

interface PDFViewerProps {
  src: string;
  title?: string;
  className?: string;
}

export default function PDFViewer({ src, title, className = "" }: PDFViewerProps) {
  const pdfContainerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    const container = pdfContainerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className={`relative aspect-[16/9] rounded-lg overflow-hidden ${className}`} ref={pdfContainerRef}>
      <iframe
        src={`${src}`}
        className="w-full h-full"
        title={title || "PDF Viewer"}
        frameBorder="0"
        allowFullScreen
        allow="autoplay"
      />
      <button
        onClick={toggleFullscreen}
        className="absolute top-2 right-2 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 hidden md:block"
        aria-label="Toggle fullscreen"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4h4M4 16v4m0 0h4m0-4h4m-4 4v4m7-8h.01M17 16h.01" />
        </svg>
      </button>
    </div>
  );
}
