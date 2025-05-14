"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AlertTriangle, Smartphone, ShoppingCart, MessageCircle, Repeat } from "lucide-react"

interface MemeticSaturationProps {
  onNext: () => void
}

export function MemeticSaturation({ onNext }: MemeticSaturationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <div ref={ref} className="min-h-full flex flex-col justify-center digital-noise">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-black/50 p-2 rounded-full border border-red-500/50">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-glow-red">SATURATION: YOU BREATHE PROPAGANDA</h2>
        </div>

        <div className="p-8 bg-black/30 backdrop-blur-sm rounded-xl border border-red-500/20 mb-10">
          <p className="text-2xl text-center text-muted-foreground">
            The same message repeated on every screen, car, banner. Day 3: you don't know if you're thinking or being
            thought. You enter <span className="text-red-400 font-semibold">cognitive anoxia</span>—the mind gasps,
            unable to synthesize meaning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-red-400 mb-4">Familiar Symptoms:</h3>

            <div className="flex items-start gap-4">
              <div className="bg-black/50 p-2 rounded-full border border-red-500/20 mt-1">
                <ShoppingCart className="w-6 h-6 text-red-500" />
              </div>
              <p className="text-xl text-muted-foreground">Fake economic crises emptying supermarkets in hours</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-black/50 p-2 rounded-full border border-red-500/20 mt-1">
                <Smartphone className="w-6 h-6 text-red-500" />
              </div>
              <p className="text-xl text-muted-foreground">Ten-second TikTok loops echoing in your head at 3 a.m.</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-black/50 p-2 rounded-full border border-red-500/20 mt-1">
                <MessageCircle className="w-6 h-6 text-red-500" />
              </div>
              <p className="text-xl text-muted-foreground">Social media fights that feel urgent but mean nothing</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-black/50 p-2 rounded-full border border-red-500/20 mt-1">
                <Repeat className="w-6 h-6 text-red-500" />
              </div>
              <p className="text-xl text-muted-foreground">Endless shifting fronts of emotional manipulation</p>
            </div>
          </div>

          <div className="cyber-box h-full flex items-center justify-center p-8 bg-black/50">
            <div className="text-center">
              <p className="text-3xl text-red-400 mb-6 glitch">Look at your thumb</p>
              <p className="text-2xl text-muted-foreground mb-8">
                It scrolls without your permission. You slide over 90 meters of content daily without consciously
                choosing to.
              </p>
              <p className="text-xl text-emerald-400">
                "They don't need your password. They enter through your pupil."
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
