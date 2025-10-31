"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-white text-black mb-20">

      {/* Big dramatic page title */}
      <div className="w-full bg-white mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-[8rem] font-extrabold tracking-tight leading-tight md:leading-none bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">
            Dipo Obisesan
          </h1>
        </div>
      </div>

      {/* Hero */}
      <header className="relative pt-6 pb-6">
        {/* Load a stylish serif for the name */}
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row items-start lg:items-stretch gap-8">
          {/* Image column (full width on small, left half on lg) */}
          <motion.div className="w-full lg:w-1/2 rounded-2xl overflow-hidden relative bg-white h-96 sm:h-[36rem] md:h-[42rem] lg:h-auto lg:max-h-[80vh]" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }}>
            <Image src="/galleryimages/pststanding.jpeg" alt="Dipo Obisesan" fill className="object-cover object-top md:object-contain" priority />
          </motion.div>

          {/* Text/content column (full width on small, right half on lg) */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-8 text-base sm:text-lg md:text-xl lg:text-2xl">
           

            <p className="leading-relaxed mb-4 text-black">
              <span className="italic font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>Dipo Obisesan</span> is a <span className="italic">prophetic voice, teacher, and leader</span> with a passion for awakening purpose and rebuilding spiritual foundations in nations. Through his ministry, Dipo has inspired many to pursue transformation, divine wisdom, and spiritual maturity.
            </p>

            <p className="max-w-xl text-black">
              As the visionary founder of <span className="italic">GoLarge Global Mandate</span>, Dipo carries a <span className="italic font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>divine assignment</span> to raise kingdom builders who influence culture, systems, and generations. His message blends revelation with practical steps for spiritual maturity and societal impact.
            </p>

            <p className="leading-relaxed mb-4 text-black">
              His message blends revelation with practicality, calling believers to rise above survival and walk in their God-given dominion. He believes that when the manna stops, it is not the end—it is the beginning of a greater harvest.
            </p>

            <p className="leading-relaxed text-black">
              Dipo has invested in leadership development, prayer movements, and strategic partnerships that equip leaders and catalyze transformation across communities and nations.
            </p>
          </motion.div>
        </div>
      </header>
    </main>
  );
}
