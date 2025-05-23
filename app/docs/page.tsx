"use client";

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <div className="sm:pt-0 pt-16 h-[calc(100vh-4rem)]">
        <iframe
          src="/docs/index.html"
          className="w-full h-full"
          title="API Documentation"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </main>
  );
}
