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

  const navItemClass = (href: string) =>
    `px-3 py-2 rounded-full transition text-base lg:text-lg font-semibold tracking-wide ${
      isActive(href)
        ? "bg-black text-white shadow-sm"
        : "text-slate-700 hover:text-slate-900"
    }`;

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
            <ul className="flex items-center gap-6 lg:gap-10">
              <li>
                <Link href="/about" className={navItemClass("/about")}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/outreach" className={navItemClass("/outreach")}>
                  GoLarge
                </Link>
              </li>    
              <li>
                <Link href="/vision-school" className={navItemClass("/vision-school")}>
                  VisionSchool
                </Link>
              </li>
              <li>
                <Link href="/vision2020page" className={navItemClass("/vision2020page")}>
                  Vision2020
                </Link>
              </li>
               <li>
                <Link href="/events" className={navItemClass("/events")}>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className={navItemClass("/contact")}>
                  Contact
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
              className="lg:hidden inline-flex items-center justify-center p-3 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-black/10"
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
            <Link href="/about" onClick={() => setOpen(false)} className="block text-slate-800 font-medium text-lg">About</Link>
            <Link href="/outreach" onClick={() => setOpen(false)} className="block text-slate-800 font-medium text-lg">GoLarge</Link>
            <Link href="/vision-school" onClick={() => setOpen(false)} className="block text-slate-800 font-medium text-lg">VisionSchool</Link>
            <Link href="/vision2020page" onClick={() => setOpen(false)} className="block text-slate-800 font-medium text-lg">Vision2020</Link>
            <Link href="/events" onClick={() => setOpen(false)} className="block text-slate-800 font-medium text-lg">Events</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block text-slate-800 font-medium text-lg">Contact</Link>

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
