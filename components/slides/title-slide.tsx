"use client"

import { motion } from "framer-motion"
import { ChevronDown, Skull, Zap } from "lucide-react"

interface TitleSlideProps {
  onNext: () => void
}

export function TitleSlide({ onNext }: TitleSlideProps) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-4 scanline digital-noise">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Skull className="w-10 h-10 text-red-500" />
          <h1 className="font-space-grotesk text-6xl md:text-8xl font-bold mb-0 glitch text-glow">MEMEDROME</h1>
          <Zap className="w-10 h-10 text-red-500" />
        </div>

        <p className="text-2xl md:text-4xl text-emerald-400 font-light mb-8 gradient-text">
          Memetic Warfare in the Attention Economy
        </p>

        <div className="cyber-box p-6 max-w-3xl mx-auto bg-black/30 backdrop-blur-sm">
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            "The retina becomes the screen. The screen becomes the retina."
          </p>
          <p className="text-sm text-emerald-500">— Brian O'Blivion, Videodrome</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="absolute bottom-8 animate-bounce"
      >
        <button
          onClick={onNext}
          className="p-2 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 backdrop-blur-sm transition-colors"
          aria-label="Next slide"
        >
          <ChevronDown className="w-6 h-6 text-emerald-400" />
        </button>
      </motion.div>
    </div>
  )
}
