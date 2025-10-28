"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const outreach = [
  {
    id: "ng",
    title: "Golarge Nigeria",
    desc: "Nigeria is one of our largest and most active networks. We run community development projects, vocational training, youth mentorship and emergency relief programs in urban and rural communities. Our focus is sustainable impact and local leadership.",
    href: "/outreach",
    image: "/galleryimages/126.jpeg",
  },
  {
    id: "ca",
    title: "Golarge Canada",
    desc: "The Canadian chapters are focused on youth, education and cross-cultural exchange. We partner with schools, community centers and local nonprofits to provide mentoring and scholarship initiatives.",
    href: "/outreach",
    image: "/galleryimages/WhatsApp3.jpeg",
  },
  {
    id: "uk",
    title: "Golarge London",
    desc: "In the UK we run regular community events, training sessions, and volunteer programs that support integration, employment readiness and local community projects.",
    href: "/outreach",
    image: "/golargelondonimg/46.jpeg",
  },
  {
    id: "us",
    title: "Golarge USA",
    desc: "Our North American outreach focuses on building partnerships, supporting churches and community groups, and delivering large-scale events and conferences that equip leaders and volunteers.",
    href: "/outreach",
    image: "/galleryimages/06.jpeg",
  },
  {
    id: "de",
    title: "Golarge Germany",
    desc: "The European hub coordinates regional partnerships, training programs and exchange initiatives designed to foster collaboration across neighboring countries.",
    href: "/outreach",
    image: "/golargegermanyimg/36.jpeg",
  },
  {
    id: "Pa",
    title: "Paris",
    desc: "Paris hosts a vibrant chapter that focuses on community engagement, creative arts, and local outreach events that bring people together across diverse neighborhoods.",
    href: "/outreach",
    image: "/golargeparisimg/43.jpeg",
  },
];

export const colorAccents = [
  "from-indigo-600 to-red-600",
  "from-red-600 to-indigo-600",
  "from-blue-600 to-red-600",
  "from-red-600 to-blue-600",
  "from-indigo-600 to-blue-600",
  "from-blue-600 to-indigo-600",
];

export function OutreachCard({ o, i }: { o: any; i: number }) {
  const accent = colorAccents[i % colorAccents.length];
  const cardBg = `bg-gradient-to-br ${accent} bg-opacity-10`;
  const textColor = "text-white";

  return (
    <motion.article
      role="article"
      aria-labelledby={`outreach-${o.id}-title`}
      className="group relative w-full max-w-[420px] sm:max-w-[480px] md:max-w-[500px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Link
        href={o.href}
        className={`block rounded-3xl overflow-hidden shadow-[0_0_35px_rgba(59,130,246,0.15)] backdrop-blur-sm bg-indigo-950/30 border border-indigo-500/10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(239,68,68,0.3)] hover:-translate-y-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-red-500/50 ${cardBg}`}
        aria-label={`Visit ${o.title} outreach page`}
      >
        {/* Image Section */}
        <div className="relative w-full h-64 md:h-72 lg:h-64">
          <Image
            src={o.image}
            alt={o.title}
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            className="group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div
            className="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold text-white/90 bg-white/5 border-white/10 backdrop-blur-sm border rotate-6 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
          >
            {o.id.toUpperCase()}
          </div>

          <div className="absolute left-4 bottom-4">
            <span
              id={`outreach-${o.id}-title`}
              className={`text-lg md:text-xl font-semibold drop-shadow ${textColor}`}
            >
              {o.title}
            </span>
          </div>
        </div>

        {/* Text Section */}
        <div className="p-6 bg-gradient-to-b from-black/0 via-black/20 to-black/40">
          <h3
            className="text-xl md:text-2xl font-semibold mb-3 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent"
          >
            {o.title}
          </h3>
          <p
            className="text-sm md:text-base mb-5 leading-relaxed text-slate-300"
          >
            {o.desc}
          </p>
          <div className="flex items-center justify-between">
            <span
              className="text-sm font-medium text-slate-300 group-hover:text-white/90 transition-colors duration-300"
            >
              Learn more
            </span>
            <span
              className="inline-flex items-center gap-2 text-sm font-medium text-red-500 group-hover:text-red-400 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function OutreachCards() {
  return (
    <section className="w-full relative py-20 bg-transparent overflow-hidden">
      {/* Animated Glow Behind Title */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/20 via-red-500/20 to-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: ["-10%", "10%", "-10%"],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-[95%] md:max-w-[90%] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold mb-5 bg-gradient-to-r from-red-500 via-white to-blue-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg"
          >
            Go Large Outreach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto font-medium"
          >
            Expanding Kingdom impact across the globe — empowering communities,
            transforming lives, and building lasting change.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {outreach.map((o, i) => (
            <OutreachCard key={o.id} o={o} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
