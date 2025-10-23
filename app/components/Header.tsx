"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    function onScroll() {
      const y = window.scrollY;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrolled(y > 24);
          if (y > lastY.current && y > 80) setVisible(false);
          else setVisible(true);
          lastY.current = y;
          ticking.current = false;
        });
        ticking.current = true;
      }
    }
    lastY.current = window.scrollY;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const topText = "text-white";

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-[11000] transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? "bg-gradient-to-r from-black/70 via-blue-950/60 to-red-950/60 shadow-lg border-b border-white/10"
          : "bg-black/40 border-b border-transparent"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}
      style={{ willChange: "transform" }}
    >
      <div className="mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-20 h-20 sm:w-28 sm:h-28 flex overflow-hidden">
              <Image
                src="/logofolder/golargelogo.png"
                alt="Go Large Logo"
                width={160}
                height={160}
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            ref={toggleButtonRef}
            onClick={() => setMobileOpen((s) => !s)}
            className="md:hidden p-3 rounded-lg bg-black/30 backdrop-blur-md text-white hover:bg-black/50 transition-all"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {!mobileOpen ? (
              <motion.div
                key="open"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24">
                  <rect x="4" y="6" width="16" height="2" rx="1" fill="currentColor" />
                  <rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor" />
                  <rect x="4" y="16" width="16" height="2" rx="1" fill="currentColor" />
                </svg>
              </motion.div>
            ) : (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24">
                  <path
                    d="M6 6L18 18M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            )}
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {[
              { href: "/about", label: "About" },
              { href: "/outreach", label: "Outreach" },
              { href: "/vision-school", label: "Vision School" },
              { href: "/vision2020page", label: "Vision 2020" },
              { href: "/events", label: "Events" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${topText} hover:text-blue-400 transition-colors`}
              >
                {item.label}
              </Link>
            ))}

            {/* Modernized “Give Online” button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/donate"
                className="relative inline-flex items-center gap-3 px-7 py-3 rounded-full text-white font-medium shadow-lg overflow-hidden transition-all border border-white/20 bg-gradient-to-r from-blue-800 via-black to-red-800 hover:shadow-blue-500/30"
              >
                {/* Glow Pulse Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-transparent to-red-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-md"></span>

                {/* Animated ring */}
                <span className="absolute inset-0 rounded-full ring-1 ring-white/20 group-hover:ring-blue-400/30 transition-all duration-300"></span>

                {/* Icon */}
                <motion.span
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-red-600"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14" />
                    <path d="M5 12h14" />
                  </svg>
                </motion.span>

                <span className="ml-2">Give Online</span>
              </Link>
            </motion.div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {mounted &&
        ReactDOM.createPortal(
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[900]"
              >
                <div
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                  onClick={() => setMobileOpen(false)}
                />
                <motion.div
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-4 right-4 top-[5.25rem] mx-auto max-w-[720px] rounded-2xl border border-white/10 bg-gradient-to-br from-black/90 via-blue-950/90 to-red-950/90 text-white shadow-2xl"
                >
                  <div className="flex flex-col divide-y divide-white/10 text-center">
                    {[
                      "About",
                      "Outreach",
                      "Vision School",
                      "Vision 2020",
                      "Events",
                      "Contact",
                    ].map((item) => (
                      <Link
                        key={item}
                        href={`/${item.toLowerCase().replace(" ", "-")}`}
                        onClick={() => setMobileOpen(false)}
                        className="py-4 text-lg hover:text-blue-400 transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                    <div className="py-5">
                      <Link
                        href="/donate"
                        onClick={() => setMobileOpen(false)}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-700 via-black to-red-700 text-white shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 5v14" />
                          <path d="M5 12h14" />
                        </svg>
                        <span>Give Online</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </motion.header>
  );
}
