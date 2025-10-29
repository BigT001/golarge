"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MandateCard from "../components/MandateCard";
import VisionSignupForm from "../components/forms/VisionSignupForm";

export default function VisionSchoolPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-black to-black text-white">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('/logofolder/golargelogo.png')] bg-center bg-no-repeat opacity-[0.02] bg-fixed"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0,rgba(255,255,255,0.03),transparent_50%)]"></div>

      {/* Top orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-24 right-1/4 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl"></div>

      {/* Hero */}
      <header className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/50 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-indigo-200 to-rose-200 bg-clip-text text-transparent leading-tight">
                The Vision School
              </h1>
            </div>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6 max-w-2xl">
              Practical training that helps believers translate revelation into real-world impact — think conceptually, build strategically, lead with purpose.
            </p>
            <div className="flex gap-4">
              <a href="#signup" className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-medium hover:brightness-110 transition-all shadow-lg">
                Apply Now
              </a>
              <a href="/contact" className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 text-white font-medium transition-colors">
                Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative w-full h-[420px] md:h-[520px] group rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-rose-500/20 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-all duration-700"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/visionschoolimg/12.jpeg"
                alt="Vision School"
                fill
                className="object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </motion.div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MandateCard
            title="Program Focus"
            text="Raising conceptual thinkers who see possibilities through the lens of purpose. We focus on revelation-to-implementation growth, leadership formation, and marketplace impact."
            gradient
          />
          <MandateCard
            title="Who It's For"
            text="Believers who want to turn prophetic insight into strategy — ministers, marketplace leaders, innovators, and cultural shapers."
          />
          <MandateCard
            title="Outcomes"
            text="Graduates will be equipped to interpret vision, build teams, launch projects, and steward influence with integrity and excellence."
            gradient
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-indigo-200 to-rose-200 bg-clip-text text-transparent">About the School</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              The Vision School is a transformative learning platform dedicated to equipping believers to receive, interpret, and implement divine ideas. Through teaching, mentorship, and practical projects, students learn to build with clarity and lead with purpose.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Our curriculum blends prophetic training with strategic planning and hands-on mentorship — preparing leaders who can influence culture, ministry, and the marketplace.
            </p>
          </div>

          <div className="relative group rounded-2xl overflow-hidden">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-rose-500/20 rounded-2xl blur-xl opacity-40 group-hover:opacity-75 transition-all duration-700"></div>
            <div className="relative p-8 bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-indigo-200 to-rose-200 bg-clip-text text-transparent mb-4">Begin Your Journey</h3>
              <p className="text-slate-300 mb-6">Ready to translate vision into action? Sign up below and we'll be in touch with next steps.</p>
              <div id="signup">
                <VisionSignupForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
