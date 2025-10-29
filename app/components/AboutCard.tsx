"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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
  imageSrc = "/galleryimages/pstabout.png",
  imageAlt = "Portrait of Dipo Obisesan",
}: AboutCardProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // scroll-linked motion values for continuous parallax (viewport-linked)
  // useScroll() without a target reads the global viewport scroll so transforms update
  // continuously whenever the page scrolls.
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imageYSpring = useSpring(imageY, { stiffness: 120, damping: 25 });
  const orbRightX = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const orbRightOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.12, 0.22, 0.1]);
  const orbLeftX = useTransform(scrollYProgress, [0, 1], [0, -24]);
  const orbLeftOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.08, 0.16, 0.06]);

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
  <section ref={ref} className="pt-6 sm:pt-8 pb-12 sm:pb-16 relative overflow-hidden -mt-8 sm:-mt-12">
      {/* Decorative page-level background for this component */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Warm radiant base to overcome white page background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06131a]/70 via-[#2b1606]/20 to-transparent" />

        {/* golden radial light behind the subject (parallax) */}
        <motion.div
          style={{ x: orbRightX, opacity: orbRightOpacity }}
          className="absolute -right-8 top-12 w-96 h-96 rounded-full bg-amber-400/12 blur-4xl mix-blend-screen"
        />

        {/* complementary subtle cool accent (parallax) */}
        <motion.div
          style={{ x: orbLeftX, opacity: orbLeftOpacity }}
          className="absolute -left-12 bottom-16 w-72 h-72 rounded-full bg-indigo-600/8 blur-3xl mix-blend-screen"
        />

        {/* faint logo watermark (very subtle) */}
        <div className="absolute inset-0 bg-[url('/logofolder/golargelogo.png')] bg-center bg-no-repeat opacity-6 blur-xl" />

        {/* light paper/noise texture (CSS grid-like subtle overlay) */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 mix-blend-overlay" />
      </div>

      <div className="mx-auto px-3 sm:px-5 md:px-6 max-w-[95rem] z-10 mt-20">
        <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12">
          {/* Hero Image (left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full md:w-3/5 h-[380px] md:h-[720px] rounded-3xl overflow-hidden"
            style={{ y: imageYSpring }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-[center_12%] transition-transform duration-700 md:group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>

          {/* Glass content panel (right) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.12 }}
            className="w-full md:w-2/5 flex flex-col justify-center p-6 md:p-12 rounded-3xl bg-gradient-to-tr from-[#021025]/90 via-[#002a5c]/60 to-black/20 backdrop-blur-lg border border-white/6 shadow-lg relative overflow-hidden"
          >
            {/* soft warm glow inside panel */}
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-amber-400/8 blur-2xl mix-blend-screen pointer-events-none" />
            <div className="mb-4">
              <h3 className="text-sm uppercase tracking-widest text-slate-300 mb-2">About the Founder</h3>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">{title}</h2>
            </div>

            <p className="text-lg text-slate-200 leading-relaxed mb-4">A life called to awaken purpose and rebuild spiritual foundations across nations.</p>

            <div className="prose prose-invert max-w-none text-slate-200 mb-6 whitespace-pre-line">
              {subtitle}
            </div>

            {/* <div className="mt-4 flex flex-wrap gap-3">
              <a href="/vision-school" className="inline-block rounded-md bg-[#e11d48] text-white px-5 py-3 font-semibold shadow-md hover:brightness-95" aria-label="Join Vision School">Join Vision School</a>
              <a href="/contact" className="inline-block rounded-md border border-white/10 text-white/90 px-4 py-3 font-medium hover:bg-white/5" aria-label="Contact us">Contact</a>
            </div> */}

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-100 mb-1">Ministry Focus</h4>
                <p className="text-slate-300">Inspiring transformation, divine wisdom, and spiritual maturity.</p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-100 mb-1">Highlights</h4>
                <ul className="text-slate-300 space-y-1 list-inside list-disc">
                  <li>Global ministry initiatives</li>
                  <li>Teaching & mentorship</li>
                  <li>Cultural influence work</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}
