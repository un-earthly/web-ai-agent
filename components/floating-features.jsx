"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FileText, Mic, Image, Music, Brain } from "lucide-react"

const features = [
  { icon: FileText, color: "text-blue-400/50", name: "Text Analysis" },
  { icon: Mic, color: "text-green-400/50", name: "Text to Speech" },
  { icon: Image, color: "text-yellow-400/50", name: "Image Generation" },
  { icon: Music, color: "text-purple-400/50", name: "Text to Audio" },
  { icon: Brain, color: "text-pink-400/50", name: "AI Insights" },
]

export function FloatingFeatures({ count = 5 }) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions);
  }, [])

  return (
    (<div className="relative w-full h-full">
      {Array.from({ length: count }).map((_, i) => {
        const Feature = features[i % features.length]
        return (
          (<motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            animate={{
              x: [Math.random() * dimensions.width, Math.random() * dimensions.width, Math.random() * dimensions.width],
              y: [
                Math.random() * dimensions.height,
                Math.random() * dimensions.height,
                Math.random() * dimensions.height,
              ],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 60 + Math.random() * 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}>
            <div
              className="relative w-20 h-24 bg-white/5 backdrop-blur-sm rounded-lg border border-stone-200 border-white/10 flex flex-col items-center justify-center transform hover:scale-110 transition-transform duration-300 dark:border-stone-800">
              <Feature.icon className={`w-10 h-10 ${Feature.color}`} />
              <span className="text-xs text-white/70 text-center mt-2">{Feature.name}</span>
            </div>
          </motion.div>)
        );
      })}
    </div>)
  );
}

