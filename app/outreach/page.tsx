"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { outreach } from "../components/OutreachCards";
import { OutreachCard } from "../components/OutreachCards";

export default function OutreachPage() {
  const spotlight = outreach[0];

  return (
    <main className="relative overflow-hidden">
      {/* === Animated Background === */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-amber-100 via-white to-amber-50"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Soft floating orbs */}
        <motion.div
          className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-amber-300/30 blur-[120px] rounded-full"
          animate={{ y: [0, 20, -20, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-amber-400/25 blur-[100px] rounded-full"
          animate={{ y: [0, -30, 30, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* === Hero Section === */}
      <section className="relative py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-amber-600 via-amber-800 to-amber-700 bg-clip-text text-transparent">
            Go Large Outreach
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Empowering local leaders and communities across nations to ignite
            Kingdom transformation. Explore our chapters and see how we’re
            impacting lives globally.
          </p>
        </motion.div>
      </section>

      {/* === Outreach Cards Section === */}
      <section className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
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
              whileHover={{ scale: 1.02, y: -5 }}
              className="transition-transform"
            >
              <OutreachCard o={o} i={i} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* === Sidebar (Moved to Bottom for Mobile) === */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Spotlight Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl overflow-hidden shadow-lg p-8 bg-white/80 backdrop-blur-md border border-amber-100 transition-all duration-500"
          >
            <h3 className="font-bold text-2xl mb-3 bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
              Spotlight
            </h3>
            <p className="text-gray-700">
              Featured Chapter:{" "}
              <strong className="text-amber-700">{spotlight.title}</strong>
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              {spotlight.desc.slice(0, 180)}...
            </p>
            <Link
              href={spotlight.href}
              className="inline-block mt-4 text-amber-700 font-semibold hover:underline"
            >
              Learn more →
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl overflow-hidden shadow-lg p-8 bg-white/80 backdrop-blur-md border border-amber-100 transition-all duration-500"
          >
            <h4 className="font-bold text-2xl mb-4 bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {outreach.map((o) => (
                <Link
                  key={o.id}
                  href={o.href}
                  className="text-base text-gray-700 hover:text-amber-600 transition-colors"
                >
                  {o.title}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
