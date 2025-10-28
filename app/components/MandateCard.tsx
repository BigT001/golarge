"use client";

import { motion } from "framer-motion";

type CardProps = {
  title: string;
  text: string;
  gradient?: boolean;
};

const MandateCard = ({ title, text, gradient = false }: CardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="group relative"
    >
      {/* Background glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-rose-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* Card content */}
      <div className="relative p-8 rounded-xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-colors">
        <div className="mb-4">
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
          ></motion.span>
          <h3 className={`text-2xl font-bold ${
            gradient 
              ? "bg-gradient-to-r from-indigo-200 to-rose-200 bg-clip-text text-transparent" 
              : "text-white"
          }`}>
            {title}
          </h3>
        </div>
        <p className="text-lg text-slate-300 leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
};

export default MandateCard;