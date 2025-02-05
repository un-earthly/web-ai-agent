"use client"
import { Button } from "./ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, Sparkles } from "lucide-react"
import { FloatingFeatures } from "./floating-features"
import { RoboAnimation } from "./robo-animation"
import { useState, useEffect, memo } from "react"

// Separate animated text component
const AnimatedText = memo(({ text }) => (
  <motion.div
    key={text}
    initial={{ y: "100%" }}
    animate={{ y: "0%" }}
    exit={{ y: "-100%" }}
    transition={{ duration: 1, ease: "easeInOut" }}>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 inline-block">
      {text}
    </span>
  </motion.div>
));

const ActionButtons = memo(() => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
    className="flex flex-col sm:flex-row items-center justify-center gap-4">
    <Button
      size="lg"
      className="bg-purple-600 hover:bg-purple-700 text-white px-8 w-full sm:w-auto">
      <FileText className="mr-2 h-5 w-5" />
      Try It Now
    </Button>
    <Button
      size="lg"
      variant="outline"
      className="text-white border-purple-500 hover:bg-purple-500/20 w-full sm:w-auto">
      <Sparkles className="mr-2 h-5 w-5" />
      See Examples
    </Button>
  </motion.div>
));

// Memoized floating features
const MemoizedFloatingFeatures = memo(() => (
  <div className="absolute inset-0 overflow-hidden">
    <FloatingFeatures count={5} />
  </div>
));

// Memoized robo animation
const MemoizedRoboAnimation = memo(() => (
  <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96">
    <RoboAnimation />
  </div>
));

const changingTexts = [
  "Transform Your Research",
  "Generate Stunning Visuals",
  "Convert Text to Speech",
  "Create AI-Powered Audio",
  "Gain Intelligent Insights",
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % changingTexts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      <MemoizedFloatingFeatures />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
            <div className="h-[1.2em] overflow-hidden">
              <AnimatePresence initial={false} mode="wait">
                <AnimatedText text={changingTexts[textIndex]} />
              </AnimatePresence>
            </div>
            <span className="block mt-2">with AI Power</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Unlock the potential of your content with our AI-powered services. From text analysis to image generation,
            we've got you covered.
          </motion.p>

          <ActionButtons />
        </div>
      </div>

      <MemoizedRoboAnimation />
    </div>
  );
}