"use client"

import { motion } from "framer-motion"
import { Bot } from "lucide-react"

export const RoboAnimation = () => {
  return (
    (<motion.div
      animate={{
        y: [0, -10, 0], // Reduced movement range
      }}
      transition={{
        duration: 6, // Slower animation
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <motion.div
          className="absolute -inset-4 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.1, 1], // Reduced scale range
            opacity: [0.5, 0.7, 0.5], // Reduced opacity range
          }}
          transition={{
            duration: 6, // Slower animation
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }} />
        <Bot className="w-32 h-32 text-purple-500" />
      </div>
    </motion.div>)
  );
}

