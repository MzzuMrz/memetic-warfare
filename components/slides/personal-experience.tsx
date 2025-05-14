"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { History, Users, Clock, Axe } from "lucide-react"

interface PersonalExperienceProps {
  onNext: () => void
}

export function PersonalExperience({ onNext }: PersonalExperienceProps) {
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
            <History className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-glow-red">LIVED EXPERIENCE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="space-y-8">
            <div className="cyber-box p-6 bg-black/50 backdrop-blur-sm border-red-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Axe className="w-6 h-6 text-red-500" />
                <h3 className="text-2xl font-semibold text-red-400">The Chainsaw Meme</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                "I didn't study memetics in a library—I lived it. During the election cycle in my country, a single
                meme—a chainsaw—cut through the symbolic tissue of the nation. It wasn't just a campaign prop. It was a
                totem. A trigger. A virus."
              </p>
            </div>

            <div className="cyber-box p-6 bg-black/50 backdrop-blur-sm border-red-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-red-500" />
                <h3 className="text-2xl font-semibold text-red-400">Social Possession</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                "I watched it possess my closest friends. I argued until I lost my voice. I wasn't above it. I was
                inside it."
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="cyber-box p-6 bg-black/50 backdrop-blur-sm border-red-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-red-500" />
                <h3 className="text-2xl font-semibold text-red-400">Time Distortion</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                "I went to bed angry, woke up not to live—but to check if the world had already collapsed. And in the
                darkest moments, part of me even wished for collapse—like someone praying for the fire, just to stop
                feeling the tension of waiting."
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
