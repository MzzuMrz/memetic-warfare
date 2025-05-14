"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FileText, Code, Dna, Network } from "lucide-react"

interface MemeDefinitionProps {
  onNext: () => void
}

export function MemeDefinition({ onNext }: MemeDefinitionProps) {
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
            <FileText className="w-8 h-8 text-emerald-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-glow">BEYOND FUNNY IMAGES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="space-y-8">
            <div className="cyber-box p-6 bg-black/50 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Minimal Units of Cultural Transmission</h3>
              <p className="text-xl text-muted-foreground">
                Memes are not just funny images with text. In the most elemental sense, a meme is a replicable packet of
                information that carries behavior, style, or belief across individuals.
              </p>
            </div>

            <div className="cyber-box p-6 bg-black/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Dna className="w-6 h-6 text-emerald-500" />
                <h3 className="text-2xl font-semibold text-emerald-400">Dawkins' Cultural Replicators</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                As Dawkins framed it: memes are cultural replicators. Brutal translation: semiotic viruses engineered to
                colonize your attention.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="cyber-box p-6 bg-black/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-emerald-500" />
                <h3 className="text-2xl font-semibold text-emerald-400">Structural Memetics</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                As Chuck Pezeshki's structural memetics points out, reducing memes to entertainment erases their deeper
                function: they encode and propagate knowledge structures tied to our social and empathetic architecture.
              </p>
            </div>

            <div className="cyber-box p-6 bg-black/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Network className="w-6 h-6 text-emerald-500" />
                <h3 className="text-2xl font-semibold text-emerald-400">Cognitive Networks</h3>
              </div>
              <p className="text-xl text-muted-foreground">
                Like genes, memes express themselves differently depending on the host environment—what varies is not
                just the content, but how it replicates, why it resonates, and where it roots itself in a cognitive
                network.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-red-500/20 text-center">
          <p className="text-2xl text-red-400">
            "When we ignore this, we miss the symbolic war playing out in our feeds."
          </p>
        </div>
      </motion.div>
    </div>
  )
}
