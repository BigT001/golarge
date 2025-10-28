"use client";

import { motion } from "framer-motion";

type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
};

export default function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <motion.li
      className="relative pl-6"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute -left-[13px] w-6 h-6 bg-gradient-to-br from-indigo-500 to-rose-500 rounded-full border-4 border-white/10 shadow-md" />
      <div className="text-sm text-indigo-300 font-semibold">{year}</div>
      <div className="text-lg font-semibold text-slate-200">{title}</div>
      <div className="text-slate-400">{description}</div>
    </motion.li>
  );
}