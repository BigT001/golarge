"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  title: string;
  subtitle?: string;
  image: string;
  ctaText?: string;
  ctaHref?: string;
};

export default function HeroCarousel() {
  const slides: Slide[] = [
    {
      title: "Welcome to Golarge",
      subtitle: "Connecting people, empowering growth.",
      image: "/pastor1.png",
      ctaText: "Get Involved",
      ctaHref: "/ministries",
    },
    {
      title: "Events & Community",
      subtitle: "Join our upcoming events and gatherings.",
      image: "/pastor2.png",
      ctaText: "View Events",
      ctaHref: "/events",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }

  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }

  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 h-screen overflow-hidden" role="region" aria-label="Homepage hero carousel">
      <div className="relative w-full h-full">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={i === index ? "false" : "true"}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-3xl px-6 md:px-12 lg:px-20 text-white">
                <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md">
                  {s.title}
                </h2>
                {s.subtitle && (
                  <p className="mt-2 text-sm md:text-base text-white/90">
                    {s.subtitle}
                  </p>
                )}

                {s.ctaText && (
                  <a
                    href={s.ctaHref}
                    className="inline-block mt-4 bg-white text-foreground px-4 py-2 rounded shadow-sm font-medium"
                  >
                    {s.ctaText}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-10 flex items-center justify-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* prev/next controls removed as requested */}
    </section>
  );
}
