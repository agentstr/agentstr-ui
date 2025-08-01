"use client";

import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

const navigation = [
  { name: "Usage", href: "/usage" },
  { name: "Demo", href: "/demo" },
  { name: "Contact", href: "/contact" },
  { name: "Documentation", href: "https://docs.agentstr.com", external: true },
  { name: "GitHub", href: "https://github.com/ehallmark/agentstr-sdk", external: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="bg-background shadow-lg" style={{height: "64px"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="flex items-center text-xl font-bold text-foreground">
                  <Image src="/favicon.ico?v=2" alt="Agentstr SDK Favicon" width={24} height={24} className="mr-2" />
                  Agentstr
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) =>
                  item.external ?
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground-light hover:text-foreground"
                    >
                      {item.name} {item.external && <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />}
                    </a>
                  :
                    <Link
                      key={item.name}
                      href={item.href}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground-light hover:text-foreground"
                    >
                      {item.name} {item.external && <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />}
                    </Link>
                )}
              </div>
            </div>
            <div className="flex items-center">
              <ThemeToggle />
              <div className="sm:hidden">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-foreground-light hover:text-foreground hover:bg-background-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown below navbar, pushes content down */}
      <div
        className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isOpen}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background shadow-md">
          {navigation.map((item) =>
            item.external ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-300 hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-between transition-colors"
              >
                {item.name} {item.external && <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-300 hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-between transition-colors"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
}
