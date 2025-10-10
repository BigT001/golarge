"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);
  // navToggleRef removed; menu is now JS-controlled via toggleButtonRef and mobileOpen
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrolled(y > 24);
          if (y > lastY.current && y > 80) {
            // scrolling down -> hide
            setVisible(false);
          } else {
            // scrolling up -> show
            setVisible(true);
          }
          lastY.current = y;
          ticking.current = false;
        });
        ticking.current = true;
      }
    }

    // initialize
    lastY.current = window.scrollY;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const topText = "text-white";
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 backdrop-blur ${
        scrolled ? "bg-black/70 border-b border-black/30 shadow-sm" : "bg-black/30 border-b border-black/10"
      } ${topText} ${visible ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ willChange: 'transform' }}
    >
  <div className="max-w-10xl mx-auto px-4 mt-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 pr-6">
            <div className="relative w-54 h-54 flex items-center justify-center overflow-hidden rounded-md">
              <Image
                src="/logofolder/golargelogo.png"
                alt="Go Large Logo"
                width={250}
                height={250}
                priority={true}
                unoptimized
              />
            </div>
          </Link>

          {/* Mobile menu toggle (JS controlled) */}
          <button
            ref={toggleButtonRef}
            onClick={() => setMobileOpen((s) => !s)}
            className="md:hidden p-3 rounded-lg text-current  ml-4"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {/* Animated icon: hamburger -> X */}
            <svg width="24" height="24" viewBox="0 0 24 24" className="block" aria-hidden="true">
              <g className="transform transition-transform duration-200 ease-in-out" style={{ transformOrigin: 'center' }}>
                {!mobileOpen ? (
                  <>
                    <rect x="4" y="6" width="16" height="2" rx="1" fill="currentColor" />
                    <rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor" />
                    <rect x="4" y="16" width="16" height="2" rx="1" fill="currentColor" />
                  </>
                ) : (
                  <>
                    <path d="M6 6 L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M6 18 L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </>
                )}
              </g>
            </svg>
          </button>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <Link href="/about" className={`${topText} hover:underline`}>About</Link>
            <Link href="/outreach" className={`${topText} hover:underline`}>Outreach</Link>
            <Link href="/events" className={`${topText} hover:underline`}>Events</Link>
            <Link href="/contact" className={`${topText} hover:underline`}>Contact</Link>
            <Link
              href="/donate"
              className="group relative inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-navy-800 text-white shadow-lg overflow-visible transition-all duration-300 hover:bg-navy-900 hover:shadow-xl border border-white/10"
              style={{ background: 'linear-gradient(135deg, #1a2f5f 0%, #0a1836 100%)' }}
              aria-label="Give Online"
            >
              {/* Decorative red accent */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></span>
              {/* Icon container */}
              <span
                className="absolute -left-3 -top-4 w-11 h-11 rounded-full bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center shadow-lg overflow-visible border border-white/10 transition-transform duration-300 group-hover:scale-110"
                aria-hidden={true}
                style={{ background: 'linear-gradient(135deg, #233876 0%, #1a2f5f 100%)' }}
              >
                <svg className="transform transition-transform duration-300 group-hover:scale-105" width={22} height={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden={true}>
                  <rect x="2.5" y="6" width="19" height="12" rx="2" stroke="white" strokeWidth="1.6" />
                  <line x1="2.5" y1="9" x2="21.5" y2="9" stroke="white" strokeWidth="1" opacity="0.9" />
                  <line x1="2.5" y1="15" x2="21.5" y2="15" stroke="white" strokeWidth="1" opacity="0.9" />
                  <path d="M11.2 8.8c-.4.6.2 1.2.9 1.2s1.3-.4 1.3-1c0-.7-.6-1.1-1.3-1.1-.6 0-1.2.4-1.1.9" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 7v10" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-sm font-medium ml-7 tracking-wide">Give Online</span>
            </Link>
          </nav>

          {/* legacy checkbox label removed; using JS button (above) for mobile toggle */}
          <div
            id="mobile-menu"
            ref={menuRef}
            className={`absolute left-0 top-full w-full md:hidden border-t ${scrolled ? 'bg-black/80' : 'bg-black/70'} transition-transform duration-200`}
            role="menu"
            aria-hidden={!mobileOpen}
            style={{ display: mobileOpen ? 'block' : 'none' }}
            onKeyDown={(e) => {
              // handle Escape and focus trap
              if (e.key === 'Escape') {
                setMobileOpen(false);
                toggleButtonRef.current?.focus();
              }
              if (e.key === 'Tab') {
                const container = menuRef.current;
                if (!container) return;
                const focusable = container.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
                if (focusable.length === 0) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey) {
                  if (document.activeElement === first) {
                    e.preventDefault();
                    (last as HTMLElement).focus();
                  }
                } else {
                  if (document.activeElement === last) {
                    e.preventDefault();
                    (first as HTMLElement).focus();
                  }
                }
              }
            }}
          >
            <div className={`px-6 py-4 flex flex-col gap-3 text-white`}>
              <Link href="/about" onClick={() => { setMobileOpen(false); toggleButtonRef.current?.focus(); }}>About</Link>
              <Link href="/outreach" onClick={() => { setMobileOpen(false); toggleButtonRef.current?.focus(); }}>Outreach</Link>
              <Link href="/events" onClick={() => { setMobileOpen(false); toggleButtonRef.current?.focus(); }}>Events</Link>
              <Link href="/contact" onClick={() => { setMobileOpen(false); toggleButtonRef.current?.focus(); }}>Contact</Link>
              <Link
                href="/mission"
                onClick={() => { setMobileOpen(false); toggleButtonRef.current?.focus(); }}
                className={`w-full text-center rounded-full px-4 py-3 text-sm inline-block font-medium shadow-lg transition-all duration-300 border border-white/10`}
                style={{ background: 'linear-gradient(135deg, #1a2f5f 0%, #0a1836 100%)' }}
                role="menuitem"
              >
                <span className="relative inline-flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2.5" y="6" width="19" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M11.2 8.8c-.4.6.2 1.2.9 1.2s1.3-.4 1.3-1c0-.7-.6-1.1-1.3-1.1-.6 0-1.2.4-1.1.9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 7v10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  Give Online
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
