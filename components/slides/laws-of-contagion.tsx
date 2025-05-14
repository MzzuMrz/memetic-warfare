"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Dna, Zap, Flame, Volume2, Brain } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface LawsOfContagionProps {
  onNext: () => void
}

export function LawsOfContagion({ onNext }: LawsOfContagionProps) {
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
            <Dna className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-glow-red">THE 4 RUTHLESS LAWS OF CONTAGION</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <Card className="section-card bg-black/50 backdrop-blur-sm border-red-500/20">
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-semibold">1. Speed Beats Truth</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                The meme reaches your amygdala in 140 milliseconds. Your reasoning always arrives late. You're already a
                transmission vector.
              </p>
            </CardContent>
          </Card>

          <Card className="section-card bg-black/50 backdrop-blur-sm border-red-500/20">
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Flame className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-semibold">2. Outrage Fuels Virality</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                You get mad, you share. You become an emotional bot without knowing it.
              </p>
            </CardContent>
          </Card>

          <Card className="section-card bg-black/50 backdrop-blur-sm border-red-500/20">
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Volume2 className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-semibold">3. Noise is the Weapon</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                Overload the channel. Mix anxiety with half-truths. Nobody will notice the difference. (From the Roman
                Empire to TikTok.)
              </p>
            </CardContent>
          </Card>

          <Card className="section-card bg-black/50 backdrop-blur-sm border-red-500/20">
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-semibold">4. Emotional Conditioning</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                They don't want you to think—they want you to feel on command. You are the viral antenna.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-red-500/20 text-center">
          <p className="text-2xl text-red-400">
            "The next war will be memetic: information projectiles targeting your moral core."
          </p>
          <p className="text-sm text-gray-400 mt-2">— Michael Prosser, Military Analyst (2006)</p>
        </div>
      </motion.div>
    </div>
  )
}
