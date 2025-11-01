"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { outreach } from "../components/OutreachCards";
import { OutreachCard } from "../components/OutreachCards";
import MandateCard from "../components/MandateCard";
import TimelineItem from "../components/TimelineItem";
import DonateForm from "../components/forms/DonateForm";


export default function OutreachPage() {
  const spotlight = outreach[0];

  return (
    <main className="relative overflow-hidden bg-white text-black">
      <div className="relative max-w-4xl mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold mb-6 leading-tight text-black tracking-tight drop-shadow-lg">
              <span className="inline-block pb-2 border-b-6 border-indigo-600">Go Large Outreach</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed mb-8 max-w-3xl mx-auto mb-20">
            Praying Boldly, Transforming Globally. <span className="font-semibold text-indigo-600">
              Empowering Kingdom leaders to see prophetically,</span> lead purposefully, and transform generations.
          </p>
        </motion.div>
      </div>

      <header className="relative pt-16 pb-12">
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-last lg:order-first"
          >
            <div className="relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-black font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                About GoLarge Global Mandate
              </h2>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed mb-4">
              <span className="italic font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                GoLarge Global Mandate</span> is a divine movement dedicated to raising a generation of
              <span className="font-semibold italic">Kingdom minded leaders</span> who transform nations through
              <span className="italic">prophetic insight</span>, strategic leadership, and <span className="italic">
                intercession</span> for the next generation.</p>
          </motion.div>

          <motion.div className="relative w-full h-64 md:h-80 lg:h-[28rem] group order-first lg:order-last" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }}>
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image src="/galleryimages/63.jpeg" alt="GoLarge" fill className="object-cover object-top" />
            </div>
          </motion.div>
        </div>
        <div className="lg:px-80 mx-auto px-4 sm:px-6 md:px-8 mt-8 text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed md:leading-loose space-y-6">

          <p>
            The mandate carries a heavy call to <span className="italic">repair broken cities</span>, <span className="italic">rebuild destinies</span>, and <span className="italic">release God's glory</span> across every sphere — from governance and business to education, culture, and ministry. We equip, train and send leaders through prayer altars, leadership summits, and targeted global missions so they can serve communities with excellence and sacrificial love.
          </p>

          <p>
            In short, <span className="font-semibold italic">GoLarge</span> exists to raise reformers, rebuild nations, and steward God's presence into the public square — manifesting the realities of the Kingdom in tangible ways.
          </p>
        </div>
      </header>

      {/* Outreach Cards Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24 mt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-black tracking-tight mb-10 leading-tight drop-shadow-md">
          <span className="inline-block pb-3 border-b-4 border-indigo-600">Outreach</span>
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {outreach.map((o, i) => (
            <motion.div
              key={o.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: "easeOut",
              }}
              className="group relative"
            >
              {/* subtle hover effect removed (no gradient) */}

              <div className="relative">

                <OutreachCard o={o} i={i} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Mandate: Core Pillars + Scriptural Foundation (red, professional typographic treatment) */}
      <section className="max-w-7xl mx-auto px-6 pb-24 mt-12">
        <div className="p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500">Core Pillars of the Mandate</h2>
              <span className="block h-1 w-28 rounded-md mb-6 mx-0 bg-gradient-to-r from-red-600 to-red-400" aria-hidden="true"></span>
              <p className="text-slate-700 mb-8">These pillars shape our strategy, culture and measurable outcomes — practical, prophetic and prayer-led. Below you'll find a concise, bold expression of each focus area.</p>

              <div className="space-y-10">
                <div className="flex items-start gap-6 md:gap-10">
                  <div className="flex-shrink-0 text-6xl md:text-7xl lg:text-8xl font-extrabold text-red-600 leading-none">1</div>
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500">Vision</h3>
                    <p className="text-slate-700 mt-3 text-lg md:text-xl max-w-2xl">Birthing divine ideas and guiding destinies through revelatory insight that shapes leaders and nations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 md:gap-10">
                  <div className="flex-shrink-0 text-6xl md:text-7xl lg:text-8xl font-extrabold text-red-600 leading-none">2</div>
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500">Transformation</h3>
                    <p className="text-slate-700 mt-3 text-lg md:text-xl max-w-2xl">Raising leaders who embody Kingdom culture, influence systems, and steward lasting change.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 md:gap-10">
                  <div className="flex-shrink-0 text-6xl md:text-7xl lg:text-8xl font-extrabold text-red-600 leading-none">3</div>
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500">Intercession</h3>
                    <p className="text-slate-700 mt-3 text-lg md:text-xl max-w-2xl">Standing in the gap for cities and nations — prayer that precedes every strategic move.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 md:gap-10">
                  <div className="flex-shrink-0 text-6xl md:text-7xl lg:text-8xl font-extrabold text-red-600 leading-none">4</div>
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500">Leadership</h3>
                    <p className="text-slate-700 mt-3 text-lg md:text-xl max-w-2xl">Equipping men and women to lead with integrity, strategic clarity and excellence in every sphere.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 md:gap-10">
                  <div className="flex-shrink-0 text-6xl md:text-7xl lg:text-8xl font-extrabold text-red-600 leading-none">5</div>
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500">Impact</h3>
                    <p className="text-slate-700 mt-3 text-lg md:text-xl max-w-2xl">Turning spiritual fire into measurable societal change across education, governance, and culture.</p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="md:col-span-1">
              <div className="rounded-lg bg-red-50 border border-red-100 p-6 h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-red-700">Scriptural Foundation</h4>
                  <blockquote className="mt-4 text-slate-800 italic">“You shall be called the repairer of the breach, the restorer of streets to dwell in.”</blockquote>
                  <p className="mt-2 text-sm text-slate-600">— Isaiah 58:12</p>

                  <blockquote className="mt-6 text-slate-800 italic">“The earth shall be filled with the knowledge of the glory of the Lord as the waters cover the sea.”</blockquote>
                  <p className="mt-2 text-sm text-slate-600">— Habakkuk 2:14</p>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-slate-700">These scriptures are the theological heartbeat of GoLarge — calling us to repair, restore, and see the fullness of God’s glory fill the earth through faithful ministry and strategic action.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <div className="mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              

              {/* Content (text) full width above; form + image are in the grid below on large screens */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-3 leading-tight">
                  <span className="block">
                    <span className="font-serif italic" style={{ fontFamily: "'Playfair Display', serif" }}>Become a</span>
                    <span className="block text-4xl md:text-5xl lg:text-6xl text-red-600 tracking-tight font-extrabold">Monthly Partner</span>
                  </span>
                </h2>

                <span className="inline-block h-1 w-28 rounded bg-red-600 mb-6" aria-hidden="true" />

                <p className="text-lg md:text-xl text-slate-800 mb-6 leading-relaxed italic">Join a faith-driven movement restoring cities and shaping leaders. Your monthly partnership fuels long-term initiatives — <strong>prophetic training</strong>, <strong>leadership summits</strong>, targeted deployments, and community transformation. Month by month, your regular gift repairs broken places, raises catalytic leaders, and releases God’s glory into education, government and culture.</p>

                <p className="text-base md:text-lg text-slate-700 mb-6">Partner with us and see generational fruit: sustained impact, multiplied leaders, and renewed communities. Every monthly partner helps turn <span className="font-semibold">vision into strategy</span> and <span className="font-semibold italic">prayer into measurable change</span>.</p>
              </div>
            </div>

            {/* New row: form and image side-by-side on lg */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-6">
              <div className="order-2 lg:order-1">
                <DonateForm />
              </div>
              <div className="order-1 lg:order-2 flex items-center justify-center -mt-12 lg:mt-0">
                <div className="w-full max-w-md lg:max-w-lg">
                  <Image
                    src="/giveimg/163.jpeg"
                    alt="Giving Platforms"
                    width={980}
                    height={680}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
