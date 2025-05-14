"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Network } from "lucide-react"
import Image from "next/image"

interface MemesAsMyceliaProps {
  onNext: () => void
}

export function MemesAsMycelia({ onNext }: MemesAsMyceliaProps) {
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
            <Network className="w-8 h-8 text-emerald-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-glow">MEMES AS MYCELIA</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="space-y-8">
            <div className="cyber-box p-6 bg-black/50 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Symbolic Spores</h3>
              <p className="text-xl text-muted-foreground">
                Memes behave not as isolated jokes but as spores in a vast symbolic mycelium. A meme is never
                understandable in isolation—it must be read within the lore of the network that contains it.
              </p>
            </div>

            <div className="cyber-box p-6 bg-black/50 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Hyperconnected Symbiosis</h3>
              <p className="text-xl text-muted-foreground">
                They adapt to the cognitive-emotional habitat of their host, forming hyperconnected symbioses with us.
                To replicate, they operate in the terrain of high-intensity emotion, playing at the edges of popular
                knowledge—always just beyond the grasp of real understanding.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="relative overflow-hidden rounded-xl cyber-box h-64 md:h-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/cat-mycelium.png"
                  alt="Cat traversing between reality and digital realms"
                  width={500}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <p className="text-white text-xl font-medium">
                  "Like a cat, living between the real world and the spiritual world"
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-red-500/20 text-center">
              <p className="text-2xl text-red-400">"INTERNET → MEME → REALITY"</p>
              <p className="text-lg text-gray-400 mt-2">The recursive media loop of the Memedrome</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
