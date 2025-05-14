"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Dna, Share2, Lightbulb, Zap, Brain } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface StructuralMemeticsProps {
  onNext: () => void
}

export function StructuralMemetics({ onNext }: StructuralMemeticsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <div ref={ref} className="min-h-full flex flex-col justify-center digital-noise">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-black/50 p-2 rounded-full border border-red-500/50">
            <Dna className="w-6 h-6 text-red-500" />
          </div>
          <h2 className="text-3xl font-bold text-glow-red">The 4 Ruthless Laws of Contagion</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="section-card bg-black/50 backdrop-blur-sm border-red-500/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-red-500" />
                <h3 className="text-xl font-semibold">1. Speed Beats Truth</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                The meme reaches your amygdala in 140 milliseconds. Your reasoning always arrives late. You're already a
                transmission vector.
              </p>
              <div className="p-3 bg-black/30 rounded-md border border-red-500/20">
                <p className="text-sm italic text-red-400">
                  "As military analyst Michael Prosser warned in 2006: The next war will be memetic: information
                  projectiles targeting your moral core."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="section-card bg-black/50 backdrop-blur-sm border-red-500/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Share2 className="w-5 h-5 text-red-500" />
                <h3 className="text-xl font-semibold">2. Outrage Fuels Virality</h3>
              </div>
              <p className="text-muted-foreground">
                You get mad, you share. You become an emotional bot without knowing it.
              </p>
            </CardContent>
          </Card>

          <Card className="section-card bg-black/50 backdrop-blur-sm border-red-500/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-5 h-5 text-red-500" />
                <h3 className="text-xl font-semibold">3. Noise is the Weapon</h3>
              </div>
              <p className="text-muted-foreground">
                Overload the channel. Mix anxiety with half-truths. Nobody will notice the difference. (From the Roman
                Empire to TikTok.)
              </p>
            </CardContent>
          </Card>

          <Card className="section-card bg-black/50 backdrop-blur-sm border-red-500/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-5 h-5 text-red-500" />
                <h3 className="text-xl font-semibold">4. Emotional Conditioning</h3>
              </div>
              <p className="text-muted-foreground">
                They don't want you to think—they want you to feel on command. You are the viral antenna. Welcome to the
                Memedrome, where memes murder each other to control your cognition.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}
