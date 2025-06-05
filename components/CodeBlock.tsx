"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { codeBlockThemes } from "./CodeBlockTheme";

interface CodeBlockProps {
  language: string;
  value: string;
}

export default function CodeBlock({ language, value }: CodeBlockProps) {
  const { resolvedTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (!mounted) return null;

  return (
    <div className="relative rounded-lg overflow-hidden">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Copy code"
      >
        {copied ? (
          <ClipboardDocumentCheckIcon className="h-5 w-5" />
        ) : (
          <ClipboardDocumentIcon className="h-5 w-5" />
        )}
      </button>
      <SyntaxHighlighter
        language={language}
        style={resolvedTheme === "dark" ? codeBlockThemes.dark : codeBlockThemes.light}
        className="rounded-lg overflow-x-auto p-4"
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
}
