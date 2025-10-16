"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function VisionSchoolCard(){
  return (
    <div className="px-5 mx-auto">
      {/* Title outside the card */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl md:text-4xl text-black lg:text-5xl font-extrabold tracking-tight">The Vision School</h2>
        <p className="mt-2 text-gray-300">See Clearly. Think Deeply. Build Boldly.</p>
      </div>

  <Link href="/vision-school" className="group block rounded-4xl overflow-hidden shadow-2xl transition-transform transform hover:-translate-y-4" aria-label="Visit The Vision School page">
        <div className="relative grid grid-cols-1 lg:grid-cols-3 bg-gradient-to-br from-[#071233] to-[#0b274a] p-1 rounded-4xl ring-1 ring-white/5 hover:shadow-[0_20px_40px_rgba(2,6,23,0.6)]">
          {/* Decorative corner ribbon */}
          <div className="absolute -top-6 -right-10 rotate-12 opacity-80 pointer-events-none">
            <div className="px-6 py-2 bg-red-600 text-white font-semibold rounded-full shadow-lg transform rotate-12">Vision School</div>
          </div>

          {/* Image / visual column */}
          <div className="col-span-1 bg-white/5 p-4 flex items-center justify-center">
            <div className="w-full h-[560px] rounded-2xl overflow-hidden relative bg-gray-100 shadow-inner transform transition-transform group-hover:scale-105">
              <Image src="/heroimages/image5.jpeg" alt="The Vision School graphic" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              <div className="absolute left-4 bottom-4 bg-white/10 px-3 py-1 rounded-full text-sm text-white backdrop-blur">See Clearly • Build Boldly</div>
              {/* subtle animated accent */}
              <div className="absolute -top-8 left-6 w-40 h-40 rounded-full bg-gradient-to-br from-red-600/30 to-transparent blur-3xl animate-blob opacity-60 pointer-events-none" />
            </div>
          </div>

          {/* Main content */}
          <div className="col-span-2 p-8 bg-gradient-to-br from-[#071233] via-[#082b48] to-[#0b274a] rounded-tr-2xl rounded-br-2xl">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 min-h-[560px] flex flex-col justify-between">
                <div>
                  {/* keep small heading inside for accessibility, primary title is outside */}
                  <h3 className="sr-only">The Vision School</h3>
                  <p className="mt-3 text-gray-200 text-lg italic">See Clearly. Think Deeply. Build Boldly.</p>

                  <div className="mt-6 text-gray-100 space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold">Vision</h4>
                      <p className="mt-2 text-sm">Raising conceptual thinkers who see possibilities through the lens of purpose.</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold">Mission</h4>
                      <p className="mt-2 text-sm">Equipping believers to carry divine vision, think strategically, and create lasting impact in every sphere of influence.</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Icon-led feature cards */}
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition transform hover:-translate-y-1">
                      <div className="flex-none w-10 h-10 rounded-lg bg-red-600/20 text-red-400 grid place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Clarity</div>
                        <div className="text-xs text-gray-300 mt-1">Learn to spot the core idea quickly and craft a clear plan.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition transform hover:-translate-y-1">
                      <div className="flex-none w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 grid place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Integrity</div>
                        <div className="text-xs text-gray-300 mt-1">Build consistent habits that align vision with character.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition transform hover:-translate-y-1">
                      <div className="flex-none w-10 h-10 rounded-lg bg-sky-500/20 text-sky-400 grid place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Creativity</div>
                        <div className="text-xs text-gray-300 mt-1">Practical templates and exercises to spark new ideas.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition transform hover:-translate-y-1">
                      <div className="flex-none w-10 h-10 rounded-lg bg-violet-500/20 text-violet-400 grid place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Action</div>
                        <div className="text-xs text-gray-300 mt-1">Turn ideas into short practical projects you can ship.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <span className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition-transform">Join / Sign Up</span>
                  <span className="text-sm text-gray-300">or <span className="underline">learn more</span></span>
                </div>
              </div>

              {/* Right column replaced with single Join CTA */}
              <aside className="w-full lg:w-64 bg-gradient-to-tr from-white/5 to-white/3 rounded-xl p-6 text-gray-200 flex flex-col gap-4 items-stretch justify-between">
                <div>
                  <div className="text-sm text-gray-300">Ready to start?</div>
                  <div className="text-2xl font-bold text-white mt-2">Join / Sign Up</div>
                  <div className="text-sm text-gray-300 mt-2">One-click sign up — secure your spot and get access to materials.</div>
                </div>

                <div className="mt-4">
                  {/* Use a button to avoid nested anchor tags (outer Link wraps the card) */}
                  <JoinButton />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

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
  )
}
