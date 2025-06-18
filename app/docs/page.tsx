"use client";

export default function DocsPage() {
  return (
    <div className="h-[calc(100vh-4rem)] w-full">
      <iframe
        src="https://docs.agentstr.com"
        className="w-full h-full"
        title="API Documentation"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}
