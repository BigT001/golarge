"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Gallery({ images, alt = "gallery image" }: { images: string[]; alt?: string }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, images.length]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => { setIndex(i); setOpen(true); }}
            className="rounded-lg overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
            aria-label={`Open image ${i + 1} of ${images.length}`}
          >
            <div className="relative w-full h-32 sm:h-40">
              <Image src={src} alt={`${alt} ${i + 1}`} fill style={{ objectFit: 'cover' }} className="transform transition-transform duration-300 group-hover:scale-105" />
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2 text-white bg-gradient-to-br from-amber-400 to-rose-400 rounded-full p-2 shadow-lg"
              aria-label="Close gallery"
            >
              ✕
            </button>

            <div className="relative w-full h-[60vh] sm:h-[70vh] bg-gradient-to-br from-amber-300 via-amber-100 to-white rounded-lg overflow-hidden p-2">
              <div className="absolute inset-1 rounded-lg overflow-hidden bg-black">
                <Image src={images[index]} alt={`${alt} ${index + 1}`} fill style={{ objectFit: 'contain' }} />
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-white">
              <div className="flex gap-2">
                <button
                  onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
                  className="px-3 py-2 bg-gradient-to-r from-sky-400 to-indigo-500 rounded text-white shadow-md"
                  aria-label="Previous image"
                >
                  ‹ Prev
                </button>
                <button
                  onClick={() => setIndex((i) => (i + 1) % images.length)}
                  className="px-3 py-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded text-white shadow-md"
                  aria-label="Next image"
                >
                  Next ›
                </button>
              </div>
              <div className="text-sm text-white/90">{index + 1} / {images.length}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
