"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';
import VisionSignupForm from "./forms/VisionSignupForm";

export default function VisionSchoolCard() {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const pillarVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.985 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.48 } },
    hover: { y: -4, scale: 1.02, transition: { duration: 0.25 } },
  };

  const visualCardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, #002a5c 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, #e11d48 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, #002a5c 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute inset-0 backdrop-blur-3xl bg-white/80" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#002a5c] via-[#1e3a8a] to-[#e11d48] bg-clip-text text-transparent drop-shadow-sm"
          >
            Vision School
          </motion.h3>

          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-3xl md:text-4xl font-bold leading-snug text-slate-900"
          >
            Transform Your Vision into <br />{" "}
            <span className="text-[#e11d48]">Lasting Impact</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            A practical, spiritually grounded program that equips leaders to
            think strategically, lead faithfully, and execute their God-given
            vision with excellence.
          </motion.p>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Pillars Section */}
          <div className="order-2 lg:order-last lg:col-span-7">
            <div className="rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow border border-slate-100 p-8">
              <h3 className="text-2xl font-semibold text-slate-900">
                What you'll gain
              </h3>
              <p className="mt-3 text-slate-600">
                The Vision School provides frameworks, mentorship, and hands-on
                practice to help you clarify purpose, build teams, and launch
                sustainable initiatives.
              </p>

              <motion.div
                className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {PILLARS.map((p) => (
                  <motion.article
                    key={p.title}
                    className="relative p-4 rounded-xl bg-slate-50 hover:bg-white transition-shadow border border-slate-200 hover:shadow-md transform-gpu flow-root"
                    variants={pillarVariants}
                    whileHover="hover"
                  >
                    <div className="float-left mr-4 mb-3 w-14 h-14 rounded-xl bg-gradient-to-br from-[#002a5c] to-[#e11d48] text-white grid place-items-center shadow-md">
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg md:text-xl mt-0">
                        {p.title}
                      </h4>
                      <p className="mt-1 text-sm text-slate-600 leading-snug">
                        {p.description}
                        {p.outcomes ? (
                          <span className="inline-block ml-2 text-xs text-slate-500">
                            — {p.outcomes}
                          </span>
                        ) : null}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Visual Card */}
          <aside className="order-1 lg:order-first lg:col-span-5">
            <motion.div
              className="sticky top-20"
              variants={visualCardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white hover:shadow-xl transition-transform">
                <div className="relative h-64 md:h-80">
                  <Image
                    src="/schoolimg.jpeg"
                    alt="Vision School"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="p-7">
                  {/* Vision & Mission Section */}
                  <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-extrabold bg-gradient-to-r from-[#002a5c] via-[#1e3a8a] to-[#e11d48] bg-clip-text text-transparent"
                  >
                    Vision & Mission
                  </motion.h4>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mt-3 text-base text-slate-700 leading-relaxed"
                  >
                    Empowering <span className="font-semibold text-[#002a5c]">Kingdom leaders</span> 
                    to see prophetically, lead purposefully, and transform generations. 
                    We’re building a movement of visionaries who merge <span className="text-[#e11d48] font-semibold">faith, strategy,</span> 
                    and <span className="text-[#1e3a8a] font-semibold">innovation</span> to advance lasting change.
                  </motion.p>

                  <div className="mt-6">
                    <Link href="/vision-school" className="group inline-flex items-center gap-2">
                      <motion.span
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.25 }}
                        className="text-lg font-semibold bg-gradient-to-r from-[#002a5c] via-[#1e3a8a] to-[#e11d48] bg-clip-text text-transparent group-hover:underline decoration-2 decoration-[#e11d48]"
                      >
                        Learn More
                      </motion.span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#e11d48] group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M12 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>

                  <p className="mt-4 text-sm text-slate-600 italic">
                    Open enrollment — join a vibrant global community of leaders
                    passionate about Kingdom impact.
                  </p>
                </div>
              </div>
            </motion.div>
          </aside>
        </div>

        {/* Testimonial */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <blockquote className="text-lg text-slate-700 italic">
            “The Vision School gave me the clarity and structure to move from
            dream to deliverable — and a community that sustained the work.”
          </blockquote>
          <cite className="block mt-4 text-sm text-slate-500">
            — Vision School Graduate
          </cite>
        </div>
      </div> 
    </section>
  );
}

const PILLARS = [
  {
    title: "Clarity",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3" />
      </svg>
    ),
    description: "Precise frameworks that translate revelation into a clear, actionable plan.",
    outcomes: "Clear vision statements • Prioritized objectives",
  },
  {
    title: "Integrity",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11s1.343 3 3 3 3-1.343 3-3zM21 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
      </svg>
    ),
    description: "Character-anchored leadership and sustainable practices.",
    outcomes: "Trust-building habits • Values-led decisions",
  },
  {
    title: "Faith",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
      </svg>
    ),
    description: "Courageous, disciplined steps that steward revelation into practice.",
    outcomes: "Pilot initiatives • Spiritual rhythms in strategy",
  },
  {
    title: "Innovation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: "Rapid prototyping, community testing, and refinement.",
    outcomes: "Prototypes • Community-validated models",
  },
  {
    title: "Impact",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zM21 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
      </svg>
    ),
    description: "Measurable transformation that improves lives and communities.",
    outcomes: "Roadmap-driven projects • Tracking dashboards",
  },
];
