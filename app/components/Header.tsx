"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="w-full bg-transparent sticky top-0 z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-2 lg:grid-cols-3 items-center h-20 md:h-24 lg:h-24">
          {/* Left: logo */}
          <div className="flex items-center">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logofolder/golargelogo.png"
                alt="GoLarge logo"
                width={144}
                height={144}
                className="block w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-28 lg:h-28 object-contain"
                priority
              />
            </Link>
          </div>

          {/* Center: nav (hidden on small screens) */}
          <nav aria-label="Primary" className="hidden lg:flex justify-center">
            <ul className="flex items-center gap-8 text-sm sm:text-base">
              <li>
                <Link href="/about" className={`text-slate-700 hover:text-slate-900 ${isActive('/about') ? 'text-rose-600 font-semibold' : ''}`}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/outreach" className={`text-slate-700 hover:text-slate-900 ${isActive('/') ? 'text-rose-600 font-semibold' : ''}`}>
                  GoLarge
                </Link>
              </li>
              <li>
                <Link href="/vision-school" className={`text-slate-700 hover:text-slate-900 ${isActive('/vision-school') ? 'text-rose-600 font-semibold' : ''}`}>
                  VisionSchool
                </Link>
              </li>
              <li>
                <Link href="/vision2020page" className={`text-slate-700 hover:text-slate-900 ${isActive('/vision2020page') ? 'text-rose-600 font-semibold' : ''}`}>
                  Vision2020
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right: actions */}
          <div className="flex justify-end items-center gap-4">
            <Link
              href="/donate"
              className="hidden lg:inline-flex items-center gap-2 bg-rose-600 text-white px-5 py-2 rounded-none text-sm shadow-lg hover:brightness-110 transform transition focus:outline-none focus:ring-2 focus:ring-rose-300 border-2 border-rose-600"
            >
              <span className="hidden sm:inline font-semibold uppercase">Give Online</span>
            </Link>

            {/* Hamburger for small screens */}
            <button
              className="lg:hidden inline-flex items-center justify-center p-3 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-300"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (small screens) */}
      {open && (
        <div id="mobile-menu" className="lg:hidden absolute inset-x-4 top-full mt-2 bg-white/95 backdrop-blur-md rounded-md shadow-md z-40">
          <div className="px-4 py-4 space-y-3 flex flex-col items-center text-center">
            <Link href="/about" onClick={() => setOpen(false)} className="block text-slate-800 font-medium">About</Link>
            <Link href="/" onClick={() => setOpen(false)} className="block text-slate-800 font-medium">GoLarge</Link>
            <Link href="/vision-school" onClick={() => setOpen(false)} className="block text-slate-800 font-medium">VisionSchool</Link>
            <Link href="/vision2020page" onClick={() => setOpen(false)} className="block text-slate-800 font-medium">Vision2020</Link>

            <div className="pt-2 border-t border-slate-200 w-full flex justify-center">
              <Link
                href="/donate"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 bg-rose-600 text-white px-5 py-2 rounded-none text-sm shadow-lg hover:brightness-110"
              >
                <span className="font-semibold uppercase">Give Online</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
