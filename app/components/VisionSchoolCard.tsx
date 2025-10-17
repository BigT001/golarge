"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function VisionSchoolCard() {
  const router = useRouter();
  return (
    <div className="relative py-12 px-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/90"></div>
      <div className="absolute inset-0 bg-grid-slate-200/30 [mask-image:linear-gradient(0deg,transparent,black,transparent)]"></div>

      {/* Main container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              The Vision School
            </span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Where purpose meets preparation — transform your divine vision into earthly impact.
          </p>
        </div>
        
        {/* Professional two-column layout with refined pillar rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12">
          {/* Left: copy + pillar rows */}
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold text-slate-800">Transform Your Vision with Purpose</h3>
            <p className="mt-4 text-slate-600 max-w-xl">The Vision School helps leaders translate spiritual insight into strategic action. Below are the five pillars that guide our curriculum and cohorts.</p>

            <div className="mt-8 space-y-4">
              {/* Pillar item */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:shadow-md transition-shadow bg-white">
                <div className="flex-none w-10 h-10 rounded-full bg-blue-600 text-white grid place-items-center shadow"> 
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3"/></svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">Clarity</div>
                  <div className="text-sm text-slate-600 mt-1">Precise frameworks and practices that turn revelation into a practical roadmap.</div>
                  <div className="text-xs text-slate-400 mt-2">Outcomes: clear vision statements; prioritized objectives; testable next steps.</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg hover:shadow-md transition-shadow bg-white">
                <div className="flex-none w-10 h-10 rounded-full bg-amber-600 text-white grid place-items-center shadow"> 
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11s1.343 3 3 3 3-1.343 3-3zM21 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2"/></svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">Integrity</div>
                  <div className="text-sm text-slate-600 mt-1">Character-anchored leadership and sustainable practices that protect long-term influence.</div>
                  <div className="text-xs text-slate-400 mt-2">Outcomes: trust-building habits; transparent governance; values-led decisions.</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg hover:shadow-md transition-shadow bg-white">
                <div className="flex-none w-10 h-10 rounded-full bg-indigo-600 text-white grid place-items-center shadow"> 
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"/></svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">Faith</div>
                  <div className="text-sm text-slate-600 mt-1">Courageous, disciplined steps that steward revelation while producing learning.</div>
                  <div className="text-xs text-slate-400 mt-2">Outcomes: pilot initiatives; stewardship practices; spiritual rhythms in strategy.</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg hover:shadow-md transition-shadow bg-white">
                <div className="flex-none w-10 h-10 rounded-full bg-emerald-600 text-white grid place-items-center shadow"> 
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">Innovation</div>
                  <div className="text-sm text-slate-600 mt-1">Disciplined creativity: rapid prototyping, community testing, and refinement.</div>
                  <div className="text-xs text-slate-400 mt-2">Outcomes: prototypes; community-validated models; scalable practices.</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg hover:shadow-md transition-shadow bg-white">
                <div className="flex-none w-10 h-10 rounded-full bg-pink-600 text-white grid place-items-center shadow"> 
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zM21 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2"/></svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">Impact</div>
                  <div className="text-sm text-slate-600 mt-1">We prioritize measurable transformation that improves lives and communities.</div>
                  <div className="text-xs text-slate-400 mt-2">Outcomes: roadmap-driven projects; tracking dashboards; generational change.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: visual card + CTA */}
          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
              <div className="relative h-56 md:h-72">
                <Image src="/heroimages/image5.jpeg" alt="Vision School" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold">Join a Cohort</h4>
                <p className="mt-2 text-slate-600">Cohorts combine teaching, mentorship, and hands-on labs to help you move from vision to impact.</p>
                <div className="mt-6 flex gap-3">
                  <Link href="/vision-school" className="inline-block px-4 py-2 rounded-md border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition">Learn more</Link>
                  <button onClick={() => router.push('/vision-school#join')} className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold shadow hover:bg-blue-700 transition">Join Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-600 italic mb-4">
            "The Vision School provided me with the clarity and tools I needed to bring my ministry's vision to life."
          </p>
          <p className="text-slate-500">- Vision School Graduate</p>
        </div>
      </div>
    </div>
  );
}
// Join button component
function JoinButton(){
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push('/vision-school')}
      className="w-full text-center bg-red-600 text-white rounded-full px-4 py-3 font-semibold shadow hover:scale-105 transition-transform"
    >
      Join Now
    </button>
  );
}
