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
    <div ref={ref} className="min-h-full flex flex-col justify-center digital-noise">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <AlertTriangle className="w-10 h-10 text-red-500" />
          <h2 className="text-4xl md:text-5xl font-bold text-glow-red">FINAL REMINDER</h2>
          <AlertTriangle className="w-10 h-10 text-red-500" />
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-4xl md:text-5xl font-bold text-red-400 mb-10 glitch">
            Every meme you share reprograms you.
          </p>

          <p className="text-3xl text-emerald-400 mb-10">If you don't compile your mind, someone else will.</p>

          <div className="p-8 bg-black/30 backdrop-blur-sm rounded-xl border border-emerald-500/20 mb-10">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Brain className="w-8 h-8 text-emerald-500" />
              <h3 className="text-2xl font-semibold text-emerald-400">Social Structure Defines Knowledge Structure</h3>
            </div>
            <p className="text-2xl text-muted-foreground">Your next decision—is it yours, or just a delayed retweet?</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Shield className="w-8 h-8 text-emerald-500" />
            <p className="text-2xl text-emerald-400">
              Whether you like, ignore, or share this, "they" have already measured your reaction. It's time you start
              measuring it too.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
