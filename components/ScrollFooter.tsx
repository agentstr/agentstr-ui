'use client';

import { useState, useEffect } from 'react';

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
      <div className="max-w-7xl mx-auto px-4 py-3 text-center text-sm text-foreground/70">
        © {new Date().getFullYear()} Agentstr. All rights reserved.
      </div>
    </footer>
  );
}
