'use client';

import { useState, useEffect } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function ScrollFooter() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      setShowFooter(isAtBottom);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer 
      className={`fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border transition-transform duration-300 ease-in-out ${
        showFooter ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col items-center gap-2">
        <div className="flex flex-row gap-4 justify-center mb-1">
          <a href="mailto:hello@agentstr.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="hover:text-primary transition-colors">
            <EnvelopeIcon className="h-5 w-5" />
          </a>
          <a href="https://twitter.com/AgentstrSDK" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-primary transition-colors">
            {/* X (formerly Twitter) logo SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.29 20c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.522A8.18 8.18 0 0022 5.92a8.19 8.19 0 01-2.357.637 4.077 4.077 0 001.804-2.246 8.19 8.19 0 01-2.605.981A4.102 4.102 0 0016.616 4c-2.266 0-4.102 1.818-4.102 4.062 0 .319.036.63.106.927C8.728 8.87 5.857 7.38 3.905 5.1a4.025 4.025 0 00-.555 2.044c0 1.41.721 2.655 1.823 3.385a4.093 4.093 0 01-1.858-.51v.052c0 1.97 1.417 3.616 3.293 3.991a4.1 4.1 0 01-1.853.07c.522 1.612 2.037 2.787 3.833 2.82A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
</svg>
          </a>
          <a href="https://primal.net/p/npub1zlrrpny3lvnqpcge6j8hxd55zdxakvl08nfcnjvl4z5shq79jxzq59plfn" target="_blank" rel="noopener noreferrer" aria-label="Nostr" className="hover:text-primary transition-colors">
            {/* Placeholder icon for Nostr */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-label="Nostr">
  <circle cx="12" cy="12" r="9" />
  <path d="M8 16V8l8 8V8" />
</svg>
          
          </a>
          <a href="https://www.youtube.com/@Agentstr" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-primary transition-colors">
            {/* YouTube icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-label="YouTube">
  <rect x="2" y="2" width="20" height="20" rx="6" />
  <polygon points="10,7 16,12 10,17 10,7" />
</svg>
          </a>
        </div>
        <div className="text-center text-sm text-foreground/70">
          © {new Date().getFullYear()} Agentstr. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
