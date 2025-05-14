"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, AlertTriangle, Eye, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface AttentionEconomyProps {
  onNext: () => void
}

export function AttentionEconomy({ onNext }: AttentionEconomyProps) {
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
            <Brain className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-glow-red">THE ATTENTION ECONOMY</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <Card className="section-card bg-black/50 backdrop-blur-sm border-red-500/20">
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-semibold">Attention as Commodity</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                Every second of awareness is auctioned to the highest bidder—algorithms engineered to hijack our nervous
                system.
              </p>
            </CardContent>
          </Card>

          <Card className="section-card bg-black/50 backdrop-blur-sm border-red-500/20">
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-semibold">Psychopolitics</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                Control no longer enforced through external violence, but through internalized optimization and
                self-surveillance.
              </p>
            </CardContent>
          </Card>

          <Card className="section-card bg-black/50 backdrop-blur-sm border-red-500/20">
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-emerald-500" />
                <h3 className="text-2xl font-semibold">Take What Is Ours</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                Reclaiming agency over attention becomes an act of resistance. Carving out analog sanctuaries: Temporary
                Autonomous Zones.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-emerald-500/20 text-center">
          <p className="text-2xl text-emerald-400">"Freedom becomes self-exploitation."</p>
          <p className="text-sm text-gray-400 mt-2">— Byung-Chul Han</p>
        </div>
      </motion.div>
    </div>
  )
}
