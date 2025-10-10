"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "/heroimages/image1.jpeg",
  "/heroimages/image2.jpeg",
  "/heroimages/image3.jpeg",
  "/heroimages/image4.jpeg",
  "/heroimages/image5.jpeg",
];

const HERO_CONTENT = [
  {
    title: "Raising Kingdom Warriors\nPraying Boldly",
    subtitle: "Transforming Globally",
    description: "Raising a generation of Kingdom-minded leaders who transform nations through prophetic insight and intercession. We stand as repairers of the breach, restoring paths for future generations."
  },
  {
    title: "Prophetic Vision\nDivine Purpose",
    subtitle: "Divine Transformation",
    description: "Empowering leaders to see prophetically and lead purposefully. Through teaching and leadership development, we equip Kingdom leaders to restore broken systems and influence culture."
  },
  {
    title: "Manifesting Glory\nKingdom Impact",
    subtitle: "Global Influence",
    description: "Manifesting God's glory in every sphere of influence - from governance and business to education, culture, and ministry. Together, we're turning spiritual fire into tangible societal change."
  },
  {
    title: "Destiny Shapers\nProphetic Excellence",
    subtitle: "Strategic Leadership",
    description: "Birthing divine ideas and guiding destinies through revelation. We're committed to raising leaders who embody Kingdom culture and character, standing in the gap for nations and territories."
  },
  {
    title: "Global Reformation\nDivine Movement",
    subtitle: "Spiritual Excellence",
    description: "Equipping believers to discover their divine assignment and cultivate prophetic understanding. Through prayer altars and leadership summits, we inspire excellence in Kingdom service."
  }
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % IMAGES.length), 3000);
    return () => clearInterval(id);
  }, [paused]);

  return (
  <section className="relative w-full h-[80vh] sm:h-screen overflow-hidden z-0" role="region" aria-label="Homepage hero slideshow">
      {/* Slides */}
      {IMAGES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <Image 
            src={src} 
            alt={`Hero ${i + 1}`} 
            fill 
            priority 
            sizes="100vw" 
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }} 
            className="scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-blue-950/95 to-red-950/98 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/80 to-black/95" />
          
        </div>
      ))}

      {/* Hero Content */}
      <AnimatePresence mode="wait">
  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold text-white mb-4 tracking-tight leading-[0.9] whitespace-pre-line"
              initial={{ opacity: 0, y: 40, rotateX: 30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -40, rotateX: -30 }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut",
                opacity: { duration: 0.3 }
              }}
            >
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                className="bg-gradient-to-r from-white via-blue-200 to-red-200 bg-clip-text text-transparent bg-[length:200%_auto] drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
              >
                {HERO_CONTENT[index].title}
              </motion.span>
            </motion.h1>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-red-500 mb-8 tracking-wide"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ 
                duration: 0.5,
                delay: 0.2,
                ease: "easeOut"
              }}
            >
              {HERO_CONTENT[index].subtitle}
            </motion.h2>
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl text-gray-100 max-w-4xl mx-auto font-medium tracking-wide leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.3
                }
              }}
              exit={{ 
                opacity: 0,
                y: -20,
                transition: {
                  duration: 0.3
                }
              }}
            >
              {HERO_CONTENT[index].description}
            </motion.p>
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Dots / controls */}
  <div className="absolute inset-x-0 bottom-12 flex items-center justify-center gap-4 z-30 pointer-events-auto">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-red-500 w-8' : 'bg-white/40 hover:bg-white/60'}`}
          />
        ))}
      </div>

      {/* Pause on hover area */}
      <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="absolute inset-0 z-20 pointer-events-auto" />
    </section>
  );
}

