"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Candy, Zap, Repeat, Film } from "lucide-react"

interface InformationSnacksProps {
  onNext: () => void
}

export function InformationSnacks({ onNext }: InformationSnacksProps) {
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
            <Candy className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-glow-red">INFORMATION SNACKS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="space-y-8">
            <div className="cyber-box p-6 bg-black/50 backdrop-blur-sm border-red-500/20">
              <h3 className="text-2xl font-semibold text-red-400 mb-4">Dopamine Hits of Meaning</h3>
              <p className="text-xl text-muted-foreground">
                A meme acts like an information snack, a small hit of meaning designed to feel like knowledge. It
                hijacks emotions, short-circuits reason, and thrives on partial context.
              </p>
            </div>

            <div className="cyber-box p-6 bg-black/50 backdrop-blur-sm border-red-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-red-500" />
                <h3 className="text-2xl font-semibold text-red-400">Illusion of Understanding</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                Think of economic memes that make people believe they've grasped macroeconomic forces—when in truth,
                they've simply been manipulated into feeling in control, not understanding.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="cyber-box p-6 bg-black/50 backdrop-blur-sm border-red-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Repeat className="w-6 h-6 text-red-500" />
                <h3 className="text-2xl font-semibold text-red-400">The Recursive Loop</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                Memes are the only form capable of sliding between reality, narrative, and the internet:
              </p>
              <div className="flex justify-center items-center gap-4 mt-4">
                <span className="text-xl font-bold text-white">INTERNET</span>
                <Zap className="w-5 h-5 text-red-500" />
                <span className="text-xl font-bold text-white">MEME</span>
                <Zap className="w-5 h-5 text-red-500" />
                <span className="text-xl font-bold text-white">REALITY</span>
              </div>
            </div>

            <div className="cyber-box p-6 bg-black/50 backdrop-blur-sm border-red-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Film className="w-6 h-6 text-red-500" />
                <h3 className="text-2xl font-semibold text-red-400">The Memedrome</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                It's the recursive media loop described in Videodrome, now lived daily—the Memedrome. This is the
                memification of culture beyond "funny posts." It's not just humor—it's symbolic compression weaponized.
              </p>
              <div className="mt-4 p-3 bg-black/30 rounded-md border border-red-500/20">
                <p className="text-sm italic text-red-400">
                  "The retina becomes the screen. The screen becomes the retina." — Brian O'Blivion, Videodrome
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
