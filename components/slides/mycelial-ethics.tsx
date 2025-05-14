"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Network, Recycle, Lock, Sprout, Brain, Leaf } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface MycelialEthicsProps {
  onNext: () => void
}

export function MycelialEthics({ onNext }: MycelialEthicsProps) {
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
          <div className="bg-black/50 p-2 rounded-full border border-emerald-500/50">
            <Shield className="w-6 h-6 text-emerald-500" />
          </div>
          <h2 className="text-3xl font-bold text-glow">Memetic Countermeasures</h2>
        </div>

        <div className="mt-8">
          <div className="p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-emerald-500/20 mb-8 cyber-box">
            <p className="text-center text-lg font-medium text-emerald-400">
              "Every meme you share reprograms you. If you don't compile your mind, someone else will."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="section-card bg-black/50 backdrop-blur-sm border-emerald-500/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Network className="w-5 h-5 text-emerald-500" />
                  <h3 className="text-xl font-semibold">Memetic Vaccines</h3>
                </div>
                <p className="text-muted-foreground">
                  Trace the opinions you hate most. Follow their roots. The algorithm gets confused. Your mind expands.
                </p>
              </CardContent>
            </Card>

            <Card className="section-card bg-black/50 backdrop-blur-sm border-emerald-500/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Recycle className="w-5 h-5 text-emerald-500" />
                  <h3 className="text-xl font-semibold">Triple-Impact Law</h3>
                </div>
                <p className="text-muted-foreground">
                  If you receive the same meme from 3 separate sources → MUTE. It's informational triage: drain the
                  toxic overflow.
                </p>
              </CardContent>
            </Card>

            <Card className="section-card bg-black/50 backdrop-blur-sm border-emerald-500/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-5 h-5 text-emerald-500" />
                  <h3 className="text-xl font-semibold">Lethal Memetic Parody</h3>
                </div>
                <p className="text-muted-foreground">
                  Weaponize humor. Satirize the meme until it collapses. Solemnity feeds virality. Ridicule starves it.
                </p>
              </CardContent>
            </Card>

            <Card className="section-card bg-black/50 backdrop-blur-sm border-emerald-500/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Sprout className="w-5 h-5 text-emerald-500" />
                  <h3 className="text-xl font-semibold">Structural Empathy</h3>
                </div>
                <p className="text-muted-foreground">
                  Decode intent: who wants what reaction from you and why? Empathic cognition disarms manipulative
                  triggers.
                </p>
              </CardContent>
            </Card>

            <Card className="section-card bg-black/50 backdrop-blur-sm border-emerald-500/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-5 h-5 text-emerald-500" />
                  <h3 className="text-xl font-semibold">Conway's Awareness</h3>
                </div>
                <p className="text-muted-foreground">
                  "The way we relate determines how we think." Your communication network is your cognitive
                  architecture. Examine who's behind the meme—and what structure it mirrors.
                </p>
              </CardContent>
            </Card>

            <Card className="section-card bg-black/50 backdrop-blur-sm border-emerald-500/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="w-5 h-5 text-emerald-500" />
                  <h3 className="text-xl font-semibold">Digital Sabbaths</h3>
                </div>
                <p className="text-muted-foreground">
                  Touch grass. Disconnect by design. Strategic silence is not withdrawal—it's recalibration. Rituals,
                  breathwork, handcrafts—anchoring practices recompile your symbolic OS.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
