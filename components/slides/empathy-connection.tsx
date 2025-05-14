"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AlertTriangle, Brain, ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface EmpathyConnectionProps {
  onNext: () => void
}

export function EmpathyConnection({ onNext }: EmpathyConnectionProps) {
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
            <AlertTriangle className="w-6 h-6 text-red-500" />
          </div>
          <h2 className="text-3xl font-bold text-glow-red">Signs of Advanced Infection</h2>
        </div>

        <div className="mt-8">
          <Card className="section-card bg-black/50 backdrop-blur-sm border-red-500/20 mb-8">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-5 h-5 text-red-500" />
                <h3 className="text-xl font-semibold">Symptoms of Memetic Saturation</h3>
              </div>
              <p className="text-muted-foreground">
                Imagine the same message repeated on every screen, car, banner. By day 3, you don't know if you're
                thinking or being thought. You enter cognitive anoxia—the mind gasps, unable to synthesize meaning.
              </p>
              <div className="mt-4 p-3 bg-black/30 rounded-md border border-red-500/20">
                <p className="text-sm italic text-red-400">
                  "You breathe propaganda. Your prefrontal cortex shuts down—overstimulated and starved."
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="section-card bg-black/50 backdrop-blur-sm border-red-500/20">
              <CardContent className="pt-6">
                <h4 className="font-medium mb-3 text-lg">Cognitive Symptoms</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 mt-1 text-red-500" />
                    <span>Chronic digital fatigue, existential numbness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 mt-1 text-red-500" />
                    <span>Memory burn: you remember the meme but never the source</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 mt-1 text-red-500" />
                    <span>Paralysis of meaning: you consume more but know less</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="section-card bg-black/50 backdrop-blur-sm border-red-500/20">
              <CardContent className="pt-6">
                <h4 className="font-medium mb-3 text-lg">Emotional Symptoms</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 mt-1 text-red-500" />
                    <span>Emotional whiplash: spikes of joy followed by a deep void</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 mt-1 text-red-500" />
                    <span>Phantom dopamine: you keep scrolling, but nothing satisfies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 mt-1 text-red-500" />
                    <span>Fake economic crises emptying supermarkets in hours</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
