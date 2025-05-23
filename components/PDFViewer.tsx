"use client";

interface PDFViewerProps {
  src: string;
  title?: string;
  className?: string;
}

export default function PDFViewer({ src, title, className = "" }: PDFViewerProps) {
  return (
    <div className={`relative aspect-[16/9] rounded-lg overflow-hidden ${className}`}>
      <iframe
        src={`${src}`}
        className="w-full h-full"
        title={title || "PDF Viewer"}
        frameBorder="0"
        allowFullScreen
        allow="autoplay"
      />
    </div>
  );
}
