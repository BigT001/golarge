"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Faq from "../components/Faq";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-blue-500 via-red-500 to-blue-600 opacity-10 blur-3xl" />

      {/* Hero Section */}
      <header className="relative py-24 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-red-50 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600 leading-tight">
              About GoLarge Global Mandate
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              GoLarge Global Mandate is a divine movement dedicated to raising a
              generation of{" "}
              <span className="font-semibold text-blue-700">
                Kingdom-minded leaders
              </span>{" "}
              who transform nations through prophetic insight, strategic
              leadership, and intercession for the next generation. It carries a
              burden to repair broken cities, rebuild destinies, and reveal God’s
              glory across every sphere of influence — from governance and
              business to education, culture, and ministry.
            </p>
          </motion.div>

          <motion.div
            className="relative w-full h-80 rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/pastor2.png"
              alt="GoLarge Global Mandate"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
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
          <Card
            title="Our Mission"
            text="To empower believers to discover their divine assignment, cultivate prophetic understanding, and intercede for generational transformation."
          />
          <Card
            title="Our Vision"
            gradient
            text="To raise a generation of Kingdom-minded leaders who transform nations through prophetic insight and intercession for future generations."
          />
          <Card
            title="Our Mandate"
            text="To raise reformers, rebuild nations, and release God’s glory in every sphere — empowering believers to live with vision, lead with purpose, and impact generations."
          />
        </motion.div>

        {/* Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <Image
              src="/pastor1.png"
              alt="Pastor Dipo Obisesan"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-700">
              About the Founder
            </h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Pastor Dipo Obisesan
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A life called to awaken purpose and rebuild spiritual foundations
              across nations. Dipo Obisesan is a prophetic voice, teacher, and
              leader with a passion for awakening purpose and rebuilding
              spiritual foundations in nations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Through his ministry, Dipo has inspired many to pursue divine
              wisdom and transformation. His message blends revelation with
              practicality—calling believers to walk in their God-given dominion.
            </p>
            <p className="text-blue-700 italic font-medium">
              “He believes that when the manna stops, it is not the end — it is
              the beginning of a greater harvest.”
            </p>
          </motion.div>
        </div>

        {/* Journey Timeline + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-semibold mb-8 text-center text-blue-700">
              Our Journey
            </h2>
            <ol className="border-l-4 border-gradient pl-6 space-y-8 max-w-3xl mx-auto relative">
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
          </div>

          <motion.aside
            className="rounded-3xl p-8 bg-gradient-to-br from-blue-100 to-red-100 shadow-xl border border-white/60 backdrop-blur"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-blue-700">
              Get Involved
            </h3>
            <p className="text-gray-700 mb-5">
              Be part of what God is doing through GoLarge Global Mandate —
              join a program, volunteer, or partner with us to extend our reach
              and impact.
            </p>
            <div className="flex gap-4">
              <a
                href="/ministries"
                className="px-5 py-3 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition-all shadow-lg hover:shadow-red-300/40"
              >
                Join a Program
              </a>
              <a
                href="/contact"
                className="px-5 py-3 rounded-xl border border-blue-500 text-blue-600 hover:bg-blue-50 font-medium transition"
              >
                Partner With Us
              </a>
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
}

/* === Supporting Components === */

function Card({
  title,
  text,
  gradient,
}: {
  title: string;
  text: string;
  gradient?: boolean;
}) {
  return (
    <motion.article
      className={`p-8 rounded-3xl border transition-all hover:shadow-xl ${
        gradient
          ? "bg-gradient-to-br from-blue-50 via-white to-red-50 border-blue-100"
          : "bg-white border-gray-100"
      }`}
      whileHover={{ scale: 1.03 }}
    >
      <h3 className="text-2xl font-semibold mb-3 text-blue-700">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </motion.article>
  );
}

function TimelineItem({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) {
  return (
    <motion.li
      className="relative pl-6"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute -left-[13px] w-6 h-6 bg-gradient-to-br from-blue-600 to-red-600 rounded-full border-4 border-white shadow-md" />
      <div className="text-sm text-blue-600 font-semibold">{year}</div>
      <div className="text-lg font-semibold text-gray-800">{title}</div>
      <div className="text-gray-700">{description}</div>
    </motion.li>
  );
}


