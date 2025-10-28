"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MandateCard from "../components/MandateCard";
import TimelineItem from "../components/TimelineItem";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-black to-black text-white">
      {/* Decorative backgrounds */}
      <div className="absolute inset-0 bg-[url('/logofolder/golargelogo.png')] bg-center bg-no-repeat opacity-[0.02] bg-fixed"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0,rgba(255,255,255,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Top gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-24 right-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl"></div>

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/50 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute -left-4 top-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
              ></motion.span>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-white via-indigo-200 to-rose-200 bg-clip-text text-transparent leading-tight drop-shadow-2xl">
                About GoLarge Global Mandate
              </h1>
            </div>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              GoLarge Global Mandate is a divine movement dedicated to raising a
              generation of{" "}
              <span className="font-semibold text-indigo-300">
                Kingdom-minded leaders
              </span>{" "}
              who transform nations through prophetic insight, strategic
              leadership, and intercession for the next generation.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              It carries a burden to repair broken cities, rebuild destinies, and reveal God's
              glory across every sphere of influence — from governance and
              business to education, culture, and ministry.
            </p>
          </motion.div>

          <motion.div
            className="relative w-full h-[500px] group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-all duration-700"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/galleryimages/63.jpeg"
                alt="GoLarge Global Mandate"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* Mission, Vision, Mandate */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <MandateCard
            title="Our Mission"
            text="To empower believers to discover their divine assignment, cultivate prophetic understanding, and intercede for generational transformation through teaching, leadership development, and apostolic movements."
            gradient
          />
          <MandateCard
            title="Our Vision"
            gradient
            text="To raise a generation of Kingdom-minded leaders who transform nations through prophetic insight and intercession — repairing broken cities, rebuilding destinies, and revealing God's glory in every sphere of influence."
          />
          <MandateCard
            title="Our Mandate"
            text="To raise reformers, rebuild nations, and release God's glory in every sphere — empowering believers to live with vision, lead with purpose, and impact generations through divine wisdom and excellence."
            gradient
          />
        </motion.div>

        {/* Core Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-indigo-200 to-rose-200 bg-clip-text text-transparent">
              Core Pillars of the Mandate
            </h2>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MandateCard
              title="Vision & Revelation"
              text="Birthing divine ideas and guiding destinies through prophetic insight and heavenly revelation. We believe in seeing beyond the natural into God's perfect plan."
            />
            <MandateCard
              title="Transformation & Leadership"
              text="Raising leaders who embody Kingdom culture and character, equipped to transform spheres of influence with integrity, wisdom, and excellence."
            />
            <MandateCard
              title="Intercession & Impact"
              text="Standing in the gap for nations while turning spiritual fire into tangible societal change. Building prayer altars that shape generations."
            />
          </div>
        </motion.div>

        {/* Scripture Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <div className="absolute -inset-x-4 -inset-y-16 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-rose-500/10 rounded-3xl blur-xl"></div>
          <div className="relative space-y-6">
            <blockquote className="text-2xl italic text-slate-300">
              "You shall be called the repairer of the breach, the restorer of streets to dwell in."
            </blockquote>
            <p className="text-lg text-slate-400">— Isaiah 58:12</p>
          </div>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 lg:order-1 relative w-full aspect-[4/3] rounded-2xl overflow-hidden group">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-rose-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-700"></div>
            <div className="relative w-full h-full">
              <Image
                src="/galleryimages/pststanding.jpeg"
                alt="GoLarge Global Founder"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <div className="relative">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute -left-4 top-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
              ></motion.span>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-indigo-200 to-rose-200 bg-clip-text text-transparent">
                Meet Our Founder
              </h2>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed">
              Our founder carries a powerful vision for national transformation and generational impact. Through years of ministry and leadership, they have demonstrated an unwavering commitment to raising Kingdom-minded leaders and establishing prayer altars across nations.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Their prophetic insight and passionate intercession continue to inspire and equip believers worldwide to step into their divine assignments and transform their spheres of influence.
            </p>
          </div>
        </motion.div>

        {/* Journey Timeline + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-indigo-200 to-rose-200 bg-clip-text text-transparent">
                Our Journey
              </h2>
              <div className="mt-4 w-24 h-1 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto rounded-full"></div>
            </div>
            <ol className="border-l-4 border-indigo-500/30 pl-6 space-y-8 max-w-3xl mx-auto relative">
              <TimelineItem
                year="2010"
                title="Birth of the Vision"
                description="What began as a small prayer movement focused on youth mentorship has grown into a global prophetic and leadership initiative impacting thousands."
              />
              <TimelineItem
                year="2016"
                title="Expansion Beyond Borders"
                description="GoLarge established international chapters, connecting believers worldwide with a shared call to intercede, influence, and impact."
              />
              <TimelineItem
                year="2023"
                title="The Global Mandate"
                description="Through leadership summits, global missions, and training hubs, GoLarge scaled its programs to empower reformers across multiple continents."
              />
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group rounded-2xl overflow-hidden"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-rose-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-700"></div>
            <div className="relative p-8 bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-indigo-200 to-rose-200 bg-clip-text text-transparent mb-6">
                Get Involved
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Be part of what God is doing through GoLarge Global Mandate —
                join a program, volunteer, or partner with us to extend our reach
                and impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/ministries"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-medium hover:brightness-110 transition-all shadow-lg"
                >
                  Join a Program
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 text-white font-medium transition-colors"
                >
                  Partner With Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}