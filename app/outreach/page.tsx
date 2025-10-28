"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { outreach } from "../components/OutreachCards";
import { OutreachCard } from "../components/OutreachCards";

export default function OutreachPage() {
  const spotlight = outreach[0];

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-black to-black text-white">
      {/* Decorative backgrounds */}
      <div className="absolute inset-0 bg-[url('/logofolder/golargelogo.png')] bg-center bg-no-repeat opacity-[0.02] bg-fixed"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0,rgba(255,255,255,0.05),transparent_50%)]"></div>
      
      {/* Top gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-24 right-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl"></div>

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/50 via-transparent to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute -left-4 top-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
              ></motion.span>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-white via-indigo-200 to-rose-200 bg-clip-text text-transparent leading-tight drop-shadow-2xl">
                Go Large Outreach
              </h1>
            </div>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Empowering local leaders and communities across nations to ignite{" "}
              <span className="font-semibold text-indigo-300">
                Kingdom transformation
              </span>
              . Explore our chapters and see how we're impacting lives globally.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Outreach Cards Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
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
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-rose-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative">
                <OutreachCard o={o} i={i} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Spotlight and Quick Links */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Spotlight Card */}
          <motion.div className="group relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-rose-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-700"></div>
            <div className="relative p-8 rounded-xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-colors">
              <div className="relative">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute -left-4 top-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
                ></motion.span>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-indigo-200 to-rose-200 bg-clip-text text-transparent">
                  Spotlight
                </h3>
              </div>
              <p className="text-slate-300">
                Featured Chapter:{" "}
                <strong className="text-indigo-300">{spotlight.title}</strong>
              </p>
              <p className="mt-3 text-slate-400 leading-relaxed">
                {spotlight.desc.slice(0, 180)}...
              </p>
              <Link
                href={spotlight.href}
                className="inline-flex items-center mt-4 text-indigo-300 font-semibold hover:text-indigo-200 transition-colors group"
              >
                Learn more
                <span className="ml-1 transform transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="group relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-rose-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-700"></div>
            <div className="relative p-8 rounded-xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-colors">
              <div className="relative">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute -left-4 top-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
                ></motion.span>
                <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-indigo-200 to-rose-200 bg-clip-text text-transparent">
                  Quick Links
                </h4>
              </div>
              <div className="flex flex-col gap-3">
                {outreach.map((o) => (
                  <Link
                    key={o.id}
                    href={o.href}
                    className="text-slate-300 hover:text-indigo-300 transition-colors group inline-flex items-center"
                  >
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                    <span className="ml-2">{o.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
