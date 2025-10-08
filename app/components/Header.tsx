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

  const topText = scrolled ? "text-gray-800" : "text-white";
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "backdrop-blur bg-white/90 border-b border-gray-200 shadow-sm" : "bg-black/40"
      } ${topText}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className={`relative w-10 h-10 rounded-full overflow-hidden flex items-center justify-center ${scrolled ? "bg-white/20" : "bg-white/10"}`}>
              <Image src="/file.svg" alt="Logo" width={36} height={36} />
            </div>
            <span className={`font-semibold text-lg ${topText}`}>Golarge</span>
          </Link>

          <input id="nav-toggle" type="checkbox" className="peer hidden" />

          <nav className="hidden md:flex gap-8 items-center text-sm">
            <Link href="/about" className={`hover:text-foreground ${topText}`}>About</Link>
            <Link href="/ministries" className={`hover:text-foreground ${topText}`}>Ministries</Link>
            <Link href="/events" className={`hover:text-foreground ${topText}`}>Events</Link>
            <Link href="/outreach" className={`hover:text-foreground ${topText}`}>Outreach</Link>
            <Link href="/contact" className={`hover:text-foreground ${topText}`}>Contact</Link>
            <Link href="/mission" className={`${scrolled ? 'px-4 py-2 rounded-full bg-foreground text-background' : 'px-4 py-2 rounded-full border border-white/40 text-white bg-white/10'}`}>
              Give
            </Link>
          </nav>

          <label htmlFor="nav-toggle" className="md:hidden p-2 rounded border border-white/30 text-current">
            <span className="block w-5 h-0.5 bg-current my-[6px]"></span>
            <span className="block w-5 h-0.5 bg-current my-[6px]"></span>
            <span className="block w-5 h-0.5 bg-current my-[6px]"></span>
          </label>
          <div className={`peer-checked:block hidden absolute left-0 top-full w-full md:hidden border-t ${scrolled ? 'bg-white/95' : 'bg-black/60'}`}>
            <div className={`px-6 py-4 flex flex-col gap-3 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              <Link href="/about">About</Link>
              <Link href="/ministries">Ministries</Link>
              <Link href="/events">Events</Link>
              <Link href="/outreach">Outreach</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/mission" className={`${scrolled ? 'rounded-full bg-foreground text-background px-4 py-2 text-sm inline-block w-max' : 'rounded-full border border-white/40 px-4 py-2 text-sm inline-block'}`}>Give</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
