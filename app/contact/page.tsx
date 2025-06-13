import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-start md:justify-center px-4 pb-32">
      <div className="max-w-xl w-full flex flex-col items-center gap-4">
        <h1 className="text-4xl font-extrabold text-foreground mb-2">Contact Us</h1>
        <p className="text-lg text-foreground/70 text-center mb-4">Connect with us through your favorite platform:</p>
        <div className="flex flex-row gap-8 justify-center mb-8">
          {/* Email */}
          <a
            href="mailto:hello@agentstr.com"
            aria-label="Email"
            className="hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EnvelopeIcon className="h-8 w-8" />
          </a>
          {/* Twitter/X */}
          <a
            href="https://twitter.com/AgentstrSDK"
            aria-label="Twitter"
            className="hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.29 20c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.522A8.18 8.18 0 0022 5.92a8.19 8.19 0 01-2.357.637 4.077 4.077 0 001.804-2.246 8.19 8.19 0 01-2.605.981A4.102 4.102 0 0016.616 4c-2.266 0-4.102 1.818-4.102 4.062 0 .319.036.63.106.927C8.728 8.87 5.857 7.38 3.905 5.1a4.025 4.025 0 00-.555 2.044c0 1.41.721 2.655 1.823 3.385a4.093 4.093 0 01-1.858-.51v.052c0 1.97 1.417 3.616 3.293 3.991a4.1 4.1 0 01-1.853.07c.522 1.612 2.037 2.787 3.833 2.82A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
</svg>
          </a>
          {/* Nostr */}
          <a
            href="https://primal.net/p/npub1zlrrpny3lvnqpcge6j8hxd55zdxakvl08nfcnjvl4z5shq79jxzq59plfn"
            aria-label="Nostr"
            className="hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 16V8l8 8V8" />
            </svg>
          </a>
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@Agentstr"
            aria-label="YouTube"
            className="hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
              <rect x="2" y="2" width="20" height="20" rx="6" />
              <polygon points="10,7 16,12 10,17 10,7" />
            </svg>
          </a>
        </div>
        <div className="text-center text-sm text-foreground/60">
          Or email us directly at <a href="mailto:hello@agentstr.com" className="underline hover:text-primary">hello@agentstr.com</a>
        </div>
      </div>
    </main>
  );
}
