"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

type AboutCardProps = {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function AboutCard({
  title = "Dipo Obisesan",
  subtitle = `Dipo Obisesan is a prophetic voice, teacher, and leader with a passion for awakening purpose and rebuilding spiritual foundations in nations. As the visionary founder of GoLarge Global Mandate, he carries a divine assignment to raise kingdom builders who influence culture, systems, and generations.
Through his ministry, Dipo has inspired many to pursue transformation, divine wisdom, and spiritual maturity. His message blends revelation with practicality, calling believers to rise above survival and walk in their God-given dominion.
He believes that when the manna stops, it is not the end—it is the beginning of a greater harvest.`,
  imageSrc = "/galleryimages/aboutpic.jpeg",
  imageAlt = "Portrait of Dipo Obisesan",
}: AboutCardProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-12 md:py-20">
      {/* Mobile header */}
      <div className="md:hidden text-center mb-6 px-4">
        <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-1">
          About the Founder
        </h3>
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-slate-800 to-red-600 bg-clip-text text-transparent">
          {title}
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 mx-auto px-3 sm:px-5 md:px-6 max-w-[95rem]">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group w-full md:w-1/2 lg:w-[45%]"
        >
          {/* Mobile Image - Rounded and half-height */}
          <div className="relative md:hidden w-full h-[50vh] overflow-hidden rounded-2xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>

          {/* Desktop Image */}
          <div className="hidden md:block relative w-full h-[600px] rounded-3xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 lg:w-[55%] px-2 sm:px-4"
        >
          <div className="hidden md:block mb-6">
            <h3 className="text-sm uppercase tracking-widest text-slate-500 mb-2">
              About the Founder
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-slate-900 to-red-600 bg-clip-text text-transparent">
              {title}
            </h2>
          </div>

          <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
            A life called to awaken purpose and rebuild spiritual foundations
            across nations.
          </p>

          <p className="whitespace-pre-line text-slate-800/90 leading-relaxed md:text-lg">
            {subtitle}
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">
                Ministry Focus
              </h4>
              <p className="text-slate-600">
                Inspiring transformation, divine wisdom, and spiritual maturity.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Highlights</h4>
              <ul className="text-slate-600 space-y-1">
                <li>• Global ministry initiatives</li>
                <li>• Teaching & mentorship</li>
                <li>• Cultural influence work</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
