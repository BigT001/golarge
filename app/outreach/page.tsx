"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { outreach } from "../components/OutreachCards";
import { OutreachCard } from "../components/OutreachCards";
import MandateCard from "../components/MandateCard";
import TimelineItem from "../components/TimelineItem";

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


    </main>
  );
}
