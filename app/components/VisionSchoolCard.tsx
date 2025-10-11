"use client";

import Link from "next/link";

export default function VisionSchoolCard(){
  return (
    <div className="max-w-xl mx-auto sm:mx-0">
      <Link href="/vision-school" className="group block rounded-3xl p-6 shadow-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-[#071233] to-[#0b274a] border border-white/5 overflow-hidden">
        <div className="flex items-start gap-5">
          <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center text-white font-extrabold text-2xl shadow-lg">
            {/* decorative icon */}
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M3 12 L9 6 L15 12 L21 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
              <path d="M3 18 L9 12 L15 18 L21 12" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
            </svg>
          </div>

          <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-extrabold text-white">The Vision School</h3>
            <p className="text-sm text-gray-300 mt-2">See Clearly. Think Deeply. Build Boldly — a leadership track that equips believers to translate revelation into real-world strategy and impact.</p>

            <ul className="mt-4 text-sm text-gray-300 space-y-2">
              <li>• Conceptual leadership and strategic thinking</li>
              <li>• Mentorship, practical frameworks, and real projects</li>
              <li>• Network with leaders across ministry and marketplace</li>
            </ul>

            <div className="mt-5 flex items-center gap-3">
              <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 text-sm font-semibold text-red-300">Join the next cohort</span>
              <span className="text-sm font-medium text-red-400 group-hover:text-red-300">Learn more →</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
