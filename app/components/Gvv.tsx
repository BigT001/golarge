"use client";

import Link from "next/link";
import Image from "next/image";

export default function Gvv() {
  const cards = [
    {
      key: "golarge",
      title: "GoLarge",
      subtitle: "Community outreach & empowerment",
      img: "/golargegermanyimg/36.jpeg",
      href: "/outreach",
    },
    {
      key: "visionschool",
      title: "Vision School",
      subtitle: "Leader training & discipleship",
       img: "/visionschoolimg/12.jpeg",
      href: "/vision-school",
    },
    {
      key: "vision2020",
      title: "Vision2020",
      subtitle: "A movement to rebuild spiritual foundations",
      img: "/galleryimages/pststanding.jpeg",
      href: "/vision2020page",
    },
  ];

  return (
    <section className="text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-7xl text-black font-extrabold mb-10">Mandates</h2>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {cards.map((c) => (
            <article
              key={c.key}
              className="relative group rounded-2xl overflow-hidden shadow-2xl h-[28rem] md:h-[36rem] lg:h-[44rem] bg-black"
            >
              <div className="absolute inset-0">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center"
                />
                {/* subtle overlay to darken the whole image for legibility */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-opacity" />
                {/* subtle bottom gradient to darken image base (above the overlay for emphasis) */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
                <div className="mb-4">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                    {c.title.split(" ").map((w, i) => (
                      <span key={i} className="block">
                        {w}
                      </span>
                    ))}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-white/90 max-w-[85%]">{c.subtitle}</p>
                </div>

                {/* circular CTA button bottom-right */}
                <Link
                  href={c.href}
                  className="absolute right-6 bottom-6 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg"
                  aria-label={`Learn more about ${c.title}`}
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
