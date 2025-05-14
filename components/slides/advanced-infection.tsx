"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AlertTriangle, Battery, Heart, Brain } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface AdvancedInfectionProps {
  onNext: () => void
}

export function AdvancedInfection({ onNext }: AdvancedInfectionProps) {
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
          <h2 className="text-4xl md:text-5xl font-bold text-glow-red">SIGNS OF ADVANCED INFECTION</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <Card className="section-card bg-black/50 backdrop-blur-sm border-red-500/20">
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Battery className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-semibold">Digital Fatigue</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                Chronic digital fatigue, existential numbness. Your prefrontal cortex shuts down—overstimulated and
                starved.
              </p>
            </CardContent>
          </Card>

          <Card className="section-card bg-black/50 backdrop-blur-sm border-red-500/20">
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-semibold">Emotional Whiplash</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                Spikes of joy followed by a deep void. Phantom dopamine: you keep scrolling, but nothing satisfies.
              </p>
            </CardContent>
          </Card>

          <Card className="section-card bg-black/50 backdrop-blur-sm border-red-500/20">
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-semibold">Memory Burn</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                You remember the meme but never the source. Paralysis of meaning: you consume more but know less.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}
