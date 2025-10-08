"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const topText = "text-white";
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 backdrop-blur ${
        scrolled ? "bg-black/70 border-b border-black/30 shadow-sm" : "bg-black/30"
      } ${topText}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className={`relative w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-black/10`}>
              <Image src="/file.svg" alt="Logo" width={36} height={36} />
            </div>
            <span className={`font-semibold text-lg ${topText}`}>Golarge</span>
          </Link>

          <input id="nav-toggle" type="checkbox" className="peer hidden" />

          <nav className="hidden md:flex gap-8 items-center text-sm">
            <Link href="/about" className={`${topText} hover:underline`}>About</Link>
            <Link href="/outreach" className={`${topText} hover:underline`}>Outreach</Link>
            <Link href="/events" className={`${topText} hover:underline`}>Events</Link>
            <Link href="/contact" className={`${topText} hover:underline`}>Contact</Link>
            <Link
              href="/donate"
              className="relative inline-flex items-center gap-3 px-5 py-2 rounded-full bg-amber-600 text-white shadow-lg overflow-visible hover:scale-[1.02] transition-transform"
              aria-label="Give Online"
            >
              {/* big icon that extrudes above the button - kept static and deterministic */}
              <span
                className="absolute -left-4 -top-5 w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center drop-shadow-lg overflow-visible"
                aria-hidden={true}
              >
                <svg className="animate-pulse-slow" width={26} height={26} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden={true}>
                  <rect x="2.5" y="6" width="19" height="12" rx="2" stroke="white" strokeWidth="1.6" />
                  <line x1="2.5" y1="9" x2="21.5" y2="9" stroke="white" strokeWidth="1" opacity="0.7" />
                  <line x1="2.5" y1="15" x2="21.5" y2="15" stroke="white" strokeWidth="1" opacity="0.7" />
                  <path d="M11.2 8.8c-.4.6.2 1.2.9 1.2s1.3-.4 1.3-1c0-.7-.6-1.1-1.3-1.1-.6 0-1.2.4-1.1.9" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 7v10" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-sm font-medium ml-6">Give Online</span>
            </Link>
          </nav>

          <label htmlFor="nav-toggle" className="md:hidden p-2 rounded border border-white/30 text-current">
            <span className="block w-5 h-0.5 bg-current my-[6px]"></span>
            <span className="block w-5 h-0.5 bg-current my-[6px]"></span>
            <span className="block w-5 h-0.5 bg-current my-[6px]"></span>
          </label>
          <div className={`peer-checked:block hidden absolute left-0 top-full w-full md:hidden border-t ${scrolled ? 'bg-black/80' : 'bg-black/70'}`}>
            <div className={`px-6 py-4 flex flex-col gap-3 text-white`}>
              <Link href="/about">About</Link>
              <Link href="/outreach">Outreach</Link>
              <Link href="/events">Events</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/mission" className={`rounded-full px-4 py-2 text-sm inline-block bg-amber-600 text-white`}>Give</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
