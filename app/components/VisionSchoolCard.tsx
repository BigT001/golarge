"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';

export default function VisionSchoolCard() {
  const router = useRouter();

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
  };

  const pillarVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.48 } },
    hover: { y: -6, scale: 1.02, transition: { duration: 0.25 } }
  };

  const visualCardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.995 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
    hover: { scale: 1.02, transition: { duration: 0.25 } }
  };

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Animated colorful background */}
      <div className="absolute inset-0 -z-20">
        <div className="w-full h-full animate-vision-gradient" />
      </div>
      <style>{`
        .animate-vision-gradient{
          background: linear-gradient(45deg,#f0f9ff 0%, #fff5f7 25%, #fff7ed 50%, #f3f0ff 75%, #f0fbff 100%);
          background-size: 400% 400%;
          animation: visionGradient 12s ease-in-out infinite;
          filter: saturate(1.05) contrast(1.02);
        }
        @keyframes visionGradient {
          0%{ background-position: 0% 50%; }
          50%{ background-position: 100% 50%; }
          100%{ background-position: 0% 50%; }
        }
      `}</style>

      {/* Decorative soft shapes */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br from-indigo-200 to-indigo-400 opacity-10 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-br from-amber-200 to-pink-300 opacity-10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h3 className="text-center text-lg md:text-xl font-extrabold text-slate-900 tracking-tight uppercase">Vision School</h3>

          {/* Animated gradient heading */}
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 relative inline-block"
          >
            <span className="heading-gradient block">Transform Your Vision into Impact</span>

            {/* sliding accent underline */}
            <motion.span
              layout
              initial={{ width: 0 }}
              animate={{ width: '72%' }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] h-1 rounded-full bg-gradient-to-r from-red-500 via-[#ff7a7a] to-[#002a5c] opacity-90"
            />
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">A practical, spiritually-grounded program that equips leaders to think strategically and act faithfully.</motion.p>

          <style>{`
            .heading-gradient {
              background: linear-gradient(90deg, #e11d48 0%, #ff7a7a 40%, #002a5c 100%);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
              display: inline-block;
              background-size: 200% 100%;
              animation: headingShift 6s linear infinite;
            }

            @keyframes headingShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
        </header>

        {/* Grid layout: left content & pillars, right visual card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Right column: pillars and description (moved to right) */}
          <div className="order-2 lg:order-last lg:col-span-7">
            <div className="rounded-2xl bg-white shadow-lg p-8 border border-slate-100">
              <h3 className="text-2xl font-semibold text-slate-900">What you'll gain</h3>
              <p className="mt-3 text-slate-600">The Vision School provides frameworks, mentorship, and hands-on practice to help you clarify purpose, build teams, and launch sustainable initiatives.</p>

              <motion.div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
                {PILLARS.map((p, i) => (
                  <motion.article key={p.title} className="relative p-4 rounded-xl bg-white/60 hover:bg-white transition-shadow border border-transparent hover:shadow-lg transform-gpu flow-root" variants={pillarVariants} whileHover="hover">
                    {/* icon floats on md+ so text wraps around it */}
                    <div className="float-left mr-4 mb-3 w-16 h-16 rounded-xl bg-gradient-to-br from-red-600 to-[#002a5c] text-white grid place-items-center shadow-lg">
                      {p.icon}
                    </div>

                    <div>
                      <h4 className="font-extrabold text-slate-900 text-lg md:text-xl mt-0">{p.title}</h4>
                      <p className="mt-1 text-sm text-slate-600 leading-snug">
                        {p.description}
                        {p.outcomes ? <span className="inline-block ml-2 text-xs text-slate-500">— {p.outcomes}</span> : null}
                      </p>
                    </div>

                    {/* decorative accent */}
                    <div className="absolute -left-3 top-4 hidden md:block">
                      <span className={`block w-1.5 h-9 rounded-full bg-gradient-to-b from-red-300 to-[#002a5c] opacity-80`} />
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Left column: visual card + CTA (moved to left) */}
          <aside className="order-1 lg:order-first lg:col-span-5">
            <motion.div className="sticky top-20" variants={visualCardVariants} initial="hidden" whileInView="show" whileHover="hover" viewport={{ once: true, amount: 0.3 }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-gradient-to-b from-white/60 to-white/40 backdrop-blur-sm hover:shadow-2xl transition-transform">
                <div className="relative h-64 md:h-80">
                  <Image src="/schoolimg.jpeg" alt="Vision School" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002a5c]/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-slate-900">Start Your Journey</h4>
                  <p className="mt-2 text-slate-600">Ready to take the next step? Discover practical training, mentorship, and a global network that helps you turn vision into sustainable impact.</p>

                  
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Link href="/vision-school" className="inline-block">
                        <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.18 }} className="inline-block px-5 py-3 rounded-lg border border-slate-200 text-sm font-medium text-slate-800 bg-white hover:shadow transition">Learn more</motion.span>
                      </Link>

                      <motion.button
                        onClick={() => router.push('/vision-school#apply')}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.16 }}
                        className="inline-block px-5 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-red-600 to-[#002a5c] text-white shadow-lg transform"
                      >
                        Get started
                      </motion.button>
                    </div>

                  <div className="mt-4 text-sm text-slate-600">Open enrollment — everyone passionate about Kingdom impact is welcome. Join the community and start building.</div>
                </div>
              </div>
            </motion.div>
          </aside>
        </div>

        {/* Testimonial */}
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <blockquote className="text-lg text-slate-700 italic">“The Vision School gave me the clarity and structure to move from dream to deliverable — and a community that sustained the work.”</blockquote>
          <cite className="block mt-4 text-sm text-slate-500">— Vision School Graduate</cite>
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    title: 'Clarity',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3" />
      </svg>
    ),
    description: 'Precise frameworks that translate revelation into a clear, actionable strategic plan.',
    outcomes: 'Clear vision statements • Prioritized objectives'
  },
  {
    title: 'Integrity',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11s1.343 3 3 3 3-1.343 3-3zM21 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
      </svg>
    ),
    description: 'Character-anchored leadership and sustainable practices.',
    outcomes: 'Trust-building habits • Values-led decisions'
  },
  {
    title: 'Faith',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
      </svg>
    ),
    description: 'Courageous, disciplined steps that steward revelation into practice.',
    outcomes: 'Pilot initiatives • Spiritual rhythms in strategy'
  },
  {
    title: 'Innovation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: 'Rapid prototyping, community testing, and refinement.',
    outcomes: 'Prototypes • Community-validated models'
  },
  {
    title: 'Impact',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zM21 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
      </svg>
    ),
    description: 'Measurable transformation that improves lives and communities.',
    outcomes: 'Roadmap-driven projects • Tracking dashboards'
  }
];
