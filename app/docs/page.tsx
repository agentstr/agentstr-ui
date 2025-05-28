"use client";

export default function DocsPage() {
  return (
      <div className="h-[calc(100vh-4rem)]">
        <iframe
          src="/docs/index.html"
          className="w-full h-full"
          title="API Documentation"
          frameBorder="0"
          allowFullScreen
        />
      </div>
  );
}
