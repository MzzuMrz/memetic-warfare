"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sparkles, Network, Sprout } from "lucide-react"
import Image from "next/image"

interface LlaoLlaoProjectProps {
  onNext: () => void
}

export function LlaoLlaoProject({ onNext }: LlaoLlaoProjectProps) {
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
          <div className="bg-black/50 p-2 rounded-full border border-emerald-500/50">
            <Sparkles className="w-8 h-8 text-emerald-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-glow">LLAO LLAO PROJECT</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="space-y-8">
            <div className="p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-emerald-500/20">
              <p className="text-2xl text-muted-foreground">
                "That's when I understood: this wasn't discourse. It was ritualized symbolic warfare."
              </p>
            </div>

            <div className="p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-emerald-500/20">
              <p className="text-2xl text-muted-foreground">
                "That experience didn't just hurt—it transformed me. It made me build something."
              </p>
            </div>

            <div className="cyber-box p-6 bg-black/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Network className="w-8 h-8 text-emerald-500" />
                <h3 className="text-2xl font-semibold text-emerald-400">Mycelial Ecosystem</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                Llao Llao is not a platform. It's a living, mycelial ecosystem of agents—each one trained not to win
                arguments, but to diagnose symbolic saturation, detect memetic infections, and cultivate regenerative
                narratives.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full">
            <div className="relative overflow-hidden rounded-xl cyber-box h-64 md:h-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/mushroom-duality.png"
                  alt="Mycelial network of AI agents"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <p className="text-white text-xl font-medium">
                  "A distributed network of AI organisms that process cultural patterns like soil processes decay:
                  composting noise into insight."
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-emerald-500/20 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Sprout className="w-8 h-8 text-emerald-500" />
                <h3 className="text-2xl font-semibold text-emerald-400">Breathing Again</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                "The Memedrome is real. But we don't have to remain inside it passively. With Llao Llao, we begin to map
                the spores. We begin to try to breathe again."
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
