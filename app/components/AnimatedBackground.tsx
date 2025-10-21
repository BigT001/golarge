"use client"

import { motion } from "framer-motion"
import type React from "react"

interface AnimatedBackgroundProps {
  children: React.ReactNode
  className?: string
  variant?: "bold" | "subtle" | "accent"
}

export default function AnimatedBackground({ children, className = "", variant = "bold" }: AnimatedBackgroundProps) {
  const colorVariants = {
    bold: {
      shapes: [
        { color: "from-blue-600 to-blue-900", size: "w-96 h-96" },
        { color: "from-red-500 to-red-700", size: "w-80 h-80" },
        { color: "from-slate-900 to-black", size: "w-96 h-96" },
      ],
    },
    subtle: {
      shapes: [
        { color: "from-blue-400 to-blue-600", size: "w-80 h-80" },
        { color: "from-red-400 to-red-500", size: "w-72 h-72" },
        { color: "from-slate-700 to-slate-900", size: "w-80 h-80" },
      ],
    },
    accent: {
      shapes: [
        { color: "from-blue-500 to-blue-700", size: "w-88 h-88" },
        { color: "from-red-600 to-red-800", size: "w-84 h-84" },
        { color: "from-slate-800 to-black", size: "w-88 h-88" },
      ],
    },
  }

  const config = colorVariants[variant]

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Animated background container */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Shape 1 - Flowing top-left */}
        <motion.div
          className={`absolute ${config.shapes[0].size} bg-gradient-to-br ${config.shapes[0].color} rounded-full blur-3xl opacity-40`}
          animate={{
            x: [0, 150, 50, 0],
            y: [0, 80, -50, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            top: "-20%",
            left: "-10%",
            filter: "blur(60px)",
          }}
        />

        {/* Shape 2 - Flowing right side */}
        <motion.div
          className={`absolute ${config.shapes[1].size} bg-gradient-to-br ${config.shapes[1].color} rounded-full blur-3xl opacity-35`}
          animate={{
            x: [0, -120, -40, 0],
            y: [0, 120, 60, 0],
            scale: [1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            top: "10%",
            right: "-15%",
            filter: "blur(60px)",
          }}
        />

        {/* Shape 3 - Flowing bottom */}
        <motion.div
          className={`absolute ${config.shapes[2].size} bg-gradient-to-br ${config.shapes[2].color} rounded-full blur-3xl opacity-30`}
          animate={{
            x: [0, 100, -80, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
          style={{
            bottom: "-25%",
            left: "5%",
            filter: "blur(60px)",
          }}
        />

        {/* Additional accent shape for depth */}
        <motion.div
          className={`absolute w-72 h-72 bg-gradient-to-br ${config.shapes[1].color} rounded-full blur-3xl opacity-25`}
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 60, -100, 0],
            scale: [1, 0.85, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            bottom: "5%",
            right: "10%",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
