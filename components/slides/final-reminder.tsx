"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AlertTriangle, Shield, Brain } from "lucide-react"

interface FinalReminderProps {
  onNext: () => void
}

export function FinalReminder({ onNext }: FinalReminderProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <div
      ref={ref}
      className="min-h-screen w-full overflow-hidden flex flex-col justify-between items-center p-4 md:p-8 digital-noise"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl mx-auto flex flex-col items-center"
      >
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-6 mt-8">
          <AlertTriangle className="w-7 h-7 text-red-500" />
          <h2 className="text-3xl font-bold text-glow-red">FINAL REMINDER</h2>
          <AlertTriangle className="w-7 h-7 text-red-500" />
        </div>

        {/* Main Message - Larger and more prominent */}
        <div className="mb-8 text-center">
          <p className="text-2xl md:text-3xl font-bold text-red-400 glitch mb-3">
            Every meme you share reprograms you.
          </p>
          <p className="text-xl md:text-2xl text-emerald-400">If you don't compile your mind, someone else will.</p>
        </div>

        {/* Two-column layout for desktop, stack on mobile */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Insight Box */}
          <div className="p-5 bg-black/30 backdrop-blur-sm rounded-md border border-emerald-500/20 h-full flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <Brain className="w-6 h-6 text-emerald-500" />
              <h3 className="text-xl font-semibold text-emerald-400">Social Structure Defines Knowledge Structure</h3>
            </div>
            <p className="text-base text-muted-foreground">
              Your next decision—is it yours, or just a delayed retweet?
            </p>
          </div>

          {/* Call to Measure */}
          <div className="p-5 bg-black/30 backdrop-blur-sm rounded-md border border-emerald-500/20 h-full flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-6 h-6 text-emerald-500" />
              <h3 className="text-xl font-semibold text-emerald-400">Measure Your Reactions</h3>
            </div>
            <p className="text-base text-muted-foreground">
              Whether you like, ignore, or share this, "they" have already measured your reaction. It's time you start
              measuring it too.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Footer with separated QR and recommendation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
      >
        {/* QR Code Section */}
        <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-emerald-500/20 p-6 flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold text-emerald-400 mb-3">Additional Resources</h3>
          <div className="flex flex-col items-center">
            <img src="/images/qr.png" alt="QR code" className="w-36 h-36 mb-2" />
            <p className="text-sm text-center text-muted-foreground">Scan for various related content and resources</p>
          </div>
        </div>

        {/* Book Recommendation Section */}
        <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-emerald-500/20 p-6">
          <h3 className="text-xl font-bold text-emerald-400 mb-3">Recommended Reading</h3>
          <p className="text-lg md:text-xl font-medium text-white mb-2">
            <em>Democracy in Danger</em> by Juan Ruocco
          </p>
          <p className="text-sm text-muted-foreground">
            Originally published in Spanish as <em>La democracia en peligro</em>. Available in English translation.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
