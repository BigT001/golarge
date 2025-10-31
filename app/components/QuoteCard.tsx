"use client";

import Image from "next/image";

type Props = {
  // path to image in public/ (e.g. /galleryimages/quote.jpg)
  imageSrc?: string;
  quote?: string;
  author?: string;
};

export default function QuoteCard({
  imageSrc = "/galleryimages/158.jpeg",
  quote = "when the manna stops, it is not the end it is the beginning of a greater harvest.",
  author,
}: Props) {
  return (
    <figure className="mx-auto bg-white dark:bg-[#0b0b0b] border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl overflow-hidden flex flex-col sm:flex-row items-stretch">
  <div className="w-full sm:w-2/3 lg:w-1/2 h-80 lg:h-[28rem] sm:h-auto relative flex-shrink-0">
        {/* replace /galleryimages/quote-attachment.jpg with the image you attached (place it under public/) */}
        <Image
          src={imageSrc}
          alt={author ? `${author} photo` : "Quote image"}
          fill
          sizes="(max-width: 640px) 100vw, 55vw"
          className="object-cover object-top translate-y-0 sm:-translate-y-8 lg:translate-y-0 scale-105 scale-x-[-1]"
        />
      </div>

      <figcaption className="relative p-8 sm:p-10 lg:p-14 text-center sm:text-left">
        {/* large decorative quote mark behind the text (visible on all sizes, dramatic red) */}
        <span className="absolute left-3 top-1 text-[6rem] sm:text-[7rem] lg:text-[9rem] text-red-500 dark:text-red-400 opacity-100 select-none pointer-events-none drop-shadow-[0_10px_40px_rgba(0,0,0,0.28)] -z-0">
          “
        </span>

        <blockquote className="relative z-10 text-2xl sm:text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight sm:ml-10 tracking-tight">
          {quote}
        </blockquote>

        {author ? (
          <cite className="mt-4 block text-base lg:text-lg text-slate-600 dark:text-slate-400">— {author}</cite>
        ) : null}
      </figcaption>
    </figure>
  );
}
