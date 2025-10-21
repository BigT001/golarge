"use client";

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Vision2020() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 rounded-3xl">
      <div className="flex flex-col gap-8 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-[#dc2626] bg-clip-text text-transparent">Vision 2020</h2>
          <p className="mt-2 text-base bg-gradient-to-r from-slate-700 to-slate-600 bg-clip-text text-transparent font-medium">20 Years of Prayer Investment</p>
        </motion.div>

        {/* Three cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Graph card */}
          <Link href="/vision2020" className="block group">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-2xl shadow-sm h-full hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="mb-3 text-center">
                <div className="text-sm text-slate-500">Prayer Investment Program</div>
                <div className="text-base font-semibold mt-1">20 Years of Return</div>
              </div>

              <div className="w-full aspect-[2/1] relative rounded-md overflow-hidden mb-3">
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

                  <g transform="translate(0,0)">
                    <path d="M50 170 L80 150 L110 140 L140 120 L170 110 L200 95 L230 82 L260 70 L290 60 L320 50 L350 40" stroke="url(#strokeG)" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M50 170 L80 150 L110 140 L140 120 L170 110 L200 95 L230 82 L260 70 L290 60 L320 50 L350 40 L350 170 Z" fill="url(#g)" opacity="0.9" />
                  </g>

                  <text x="40" y="195" fontSize="10" fill="#64748b">2020</text>
                  <text x="340" y="195" fontSize="10" fill="#64748b">2040</text>
                  <text x="200" y="45" fontSize="12" fill="#0f172a" fontWeight="700">Total Expected Return</text>
                </svg>
              </div>

              <p className="text-sm text-slate-500">When investment in prayer is consistent over time, spiritual returns compound and expand across generations.</p>
              <div className="mt-4 text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Visit Page →
              </div>
            </motion.div>
          </Link>

          {/* Why commit card */}
          <Link href="/vision2020" className="block group">
            <motion.div 
              initial={{ opacity: 0, y: 8 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-2xl shadow-sm h-full hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h4 className="text-lg font-semibold">Why commit for 20 years?</h4>
              <p className="mt-3 text-slate-600">Consistent prayer creates compounding spiritual fruit. Our program supports families with rhythms and mentorship for long-term transformation.</p>
              <ul className="mt-3 grid gap-2 text-slate-600">
                <li>• Generational change is sustained over seasons of prayer.</li>
                <li>• Families grow in unity and resilience through consistent rhythms.</li>
                <li>• We provide mentors and practical milestones for progress.</li>
              </ul>
              <div className="mt-4 text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Visit Page →
              </div>
            </motion.div>
          </Link>

          {/* How it works card */}
          <Link href="/vision2020" className="block group">
            <motion.div 
              initial={{ opacity: 0, y: 8 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-2xl shadow-sm h-full hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h4 className="text-lg font-semibold">How it works</h4>
              <ol className="mt-3 list-decimal ml-5 text-slate-600">
                <li>Commit to focused family prayer and spiritual habits.</li>
                <li>Join a cohort for teaching and mentorship.</li>
                <li>Track outcomes and steward growth together.</li>
              </ol>
              <div className="mt-4 text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Visit Page →
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}