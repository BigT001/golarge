"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function VisionSchoolCard() {
  const router = useRouter();

  return (
    <section className="relative py-16 px-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-sky-50 overflow-hidden">
      {/* Decorative soft shapes */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br from-indigo-200 to-indigo-400 opacity-10 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-br from-amber-200 to-pink-300 opacity-10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <p className="inline-block text-sm font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Vision School</p>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">Transform Your Vision into Impact</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">A practical, spiritually-grounded program that equips leaders to think strategically and act faithfully.</p>
        </header>

        {/* Grid layout: left content & pillars, right visual card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left column: pillars and description */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white shadow-lg p-8 border border-slate-100">
              <h3 className="text-2xl font-semibold text-slate-900">What you'll gain</h3>
              <p className="mt-3 text-slate-600">The Vision School provides frameworks, mentorship, and hands-on practice to help you clarify purpose, build teams, and launch sustainable initiatives.</p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {PILLARS.map((p) => (
                  <article key={p.title} className="flex gap-4 p-4 rounded-lg bg-slate-50 hover:bg-white transition-shadow border border-transparent hover:shadow-md">
                    <div className="flex-none w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 text-white grid place-items-center shadow">
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{p.title}</h4>
                      <p className="mt-1 text-sm text-slate-600">{p.description}</p>
                      <div className="mt-2 text-xs text-slate-500">{p.outcomes}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: visual card + CTA */}
          <aside className="lg:col-span-5">
            <div className="sticky top-20">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-gradient-to-b from-white/60 to-white/40 backdrop-blur-sm">
                <div className="relative h-64 md:h-80">
                  <Image src="/heroimages/image5.jpeg" alt="Vision School" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-slate-900">Join a Cohort</h4>
                  <p className="mt-2 text-slate-600">Cohorts combine expert teaching, peer feedback, and practical labs to accelerate your impact.</p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link href="/vision-school" className="inline-block px-5 py-3 rounded-lg border border-slate-200 text-sm font-medium text-slate-800 bg-white hover:shadow transition">Learn more</Link>
                    <button onClick={() => router.push('/vision-school#join')} className="inline-block px-5 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:scale-[1.02] transition-transform">Apply now</button>
                  </div>

                  <div className="mt-4 text-sm text-slate-500">Limited cohort seats — applications reviewed on a rolling basis.</div>
                </div>
              </div>
            </div>
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
    description: 'Precise frameworks to convert revelation into a strategic plan.',
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
