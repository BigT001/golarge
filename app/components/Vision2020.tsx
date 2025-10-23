"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Vision2020() {
  return (
    <section className="relative max-w-[90rem] mx-auto py-20 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Abstract Shapes */}
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-red-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 1px, transparent 1px)' }}>
          <motion.div
            className="w-full h-full"
            animate={{
              backgroundPosition: ["0px 0px", "100px 100px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Light Beam Effect */}
        <motion.div
          className="absolute -inset-[100px] opacity-50"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-1/2 left-1/2 w-[1000px] h-2 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent blur-xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 w-2 h-[1000px] bg-gradient-to-b from-transparent via-red-400/30 to-transparent blur-xl transform -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
      </div>

      {/* Content Container with Glass Effect */}
      <div className="relative z-10 flex flex-col gap-12 max-w-7xl mx-auto backdrop-blur-sm bg-white/50 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-black to-red-600 bg-clip-text text-transparent">
            Vision 2020
          </h2>
          <p className="mt-3 text-lg text-gray-700 font-medium">
            20 Years of Prayer Investment
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Graph card */}
          <Link href="/vision2020" className="block group">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white p-8 rounded-3xl shadow-md h-full hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="mb-4 text-center">
                <div className="text-sm text-gray-500">Prayer Investment Program</div>
                <div className="text-lg font-semibold mt-1 text-gray-800">
                  20 Years of Return
                </div>
              </div>

              <div className="w-full aspect-[2/1] relative rounded-xl overflow-hidden mb-4">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.9" />
                      <stop offset="60%" stopColor="#60a5fa" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="strokeG" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#dc2626" />
                    </linearGradient>
                  </defs>

                  <line x1="40" y1="10" x2="40" y2="180" stroke="#e6eefc" strokeWidth="1" />
                  <line x1="40" y1="180" x2="380" y2="180" stroke="#e6eefc" strokeWidth="1" />

                  <path
                    d="M50 170 L80 150 L110 140 L140 120 L170 110 L200 95 L230 82 L260 70 L290 60 L320 50 L350 40"
                    stroke="url(#strokeG)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M50 170 L80 150 L110 140 L140 120 L170 110 L200 95 L230 82 L260 70 L290 60 L320 50 L350 40 L350 170 Z"
                    fill="url(#g)"
                    opacity="0.9"
                  />

                  <text x="40" y="195" fontSize="10" fill="#64748b">
                    2020
                  </text>
                  <text x="340" y="195" fontSize="10" fill="#64748b">
                    2040
                  </text>
                  <text
                    x="200"
                    y="45"
                    fontSize="12"
                    fill="#0f172a"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    Total Expected Return
                  </text>
                </svg>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                When investment in prayer is consistent over time, spiritual returns
                compound and expand across generations.
              </p>
              <div className="mt-5 text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Visit Page →
              </div>
            </motion.div>
          </Link>

          {/* Why commit card */}
          <Link href="/vision2020" className="block group">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white p-8 rounded-3xl shadow-md h-full hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <h4 className="text-xl font-semibold text-gray-900">
                Why commit for 20 years?
              </h4>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Consistent prayer creates compounding spiritual fruit. Our program
                supports families with rhythms and mentorship for long-term transformation.
              </p>
              <ul className="mt-4 grid gap-2 text-gray-700">
                <li>• Generational change is sustained through consistent prayer.</li>
                <li>• Families grow in unity and resilience.</li>
                <li>• Mentorship and milestones guide every step.</li>
              </ul>
              <div className="mt-5 text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Visit Page →
              </div>
            </motion.div>
          </Link>

          {/* How it works card */}
          <Link href="/vision2020" className="block group">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white p-8 rounded-3xl shadow-md h-full hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <h4 className="text-xl font-semibold text-gray-900">How it works</h4>
              <ol className="mt-4 list-decimal ml-5 text-gray-700 space-y-1">
                <li>Commit to focused family prayer and spiritual habits.</li>
                <li>Join a cohort for teaching and mentorship.</li>
                <li>Track outcomes and steward growth together.</li>
              </ol>
              <div className="mt-5 text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Visit Page →
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}