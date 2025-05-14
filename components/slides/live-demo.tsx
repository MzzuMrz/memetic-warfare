"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Skull, Send, ArrowRight, AlertTriangle, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface LiveDemoProps {
  onNext: () => void
}

export function LiveDemo({ onNext }: LiveDemoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [phrase, setPhrase] = useState("")
  const [analysis, setAnalysis] = useState<null | {
    virality: number
    manipulation: number
    targets: string[]
    warnings: string[]
  }>(null)

  const handleAnalyze = () => {
    if (!phrase.trim()) return

    // Simulate analysis with predefined responses
    if (phrase.toLowerCase().includes("freedom") || phrase.toLowerCase().includes("rights")) {
      setAnalysis({
        virality: 85,
        manipulation: 78,
        targets: ["Emotional Core", "Identity", "Tribal Belonging"],
        warnings: ["Appeals to in-group loyalty", "Creates artificial urgency", "Exploits fear of loss"],
      })
    } else if (phrase.toLowerCase().includes("they") || phrase.toLowerCase().includes("them")) {
      setAnalysis({
        virality: 92,
        manipulation: 88,
        targets: ["Outgroup Hostility", "Tribal Identity", "Fear Response"],
        warnings: ["Creates artificial enemy", "Simplifies complex issues", "Bypasses critical thinking"],
      })
    } else {
      // Default analysis for any other phrase
      setAnalysis({
        virality: 65,
        manipulation: 59,
        targets: ["Attention", "Emotional Response", "Social Validation"],
        warnings: ["Moderate emotional manipulation", "Potential context collapse", "Check source credibility"],
      })
    }
  }

  return (
    <div ref={ref} className="min-h-full flex flex-col justify-center digital-noise">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-black/50 p-2 rounded-full border border-red-500/50">
            <Skull className="w-6 h-6 text-red-500" />
          </div>
          <h2 className="text-3xl font-bold text-glow-red">Memetic Threat Analysis</h2>
        </div>

        <div className="mt-8">
          <Card className="section-card bg-black/50 backdrop-blur-sm border-red-500/20 mb-8">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Propaganda Detection System</h3>
              <p className="text-muted-foreground mb-6">
                Enter a phrase or slogan to analyze its memetic manipulation potential. Our system will evaluate its
                virality, manipulation tactics, and provide warnings.
              </p>

              <div className="flex gap-2 mb-8">
                <Input
                  placeholder="Enter a phrase (e.g., 'They are coming for your freedom')"
                  value={phrase}
                  onChange={(e) => setPhrase(e.target.value)}
                  className="bg-black/30 border-emerald-500/30"
                />
                <Button onClick={handleAnalyze} className="bg-emerald-600 hover:bg-emerald-700">
                  <Send className="w-4 h-4 mr-2" />
                  Analyze
                </Button>
              </div>

              {analysis && (
                <div className="p-6 bg-black/30 rounded-xl border border-red-500/30 cyber-box">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <h4 className="font-medium text-lg text-red-400">Threat Assessment</h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground mb-1">Virality Potential</p>
                        <div className="w-full h-3 bg-black/50 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-emerald-500 to-red-500"
                            style={{ width: `${analysis.virality}%` }}
                          ></div>
                        </div>
                        <p className="text-right text-xs text-muted-foreground mt-1">{analysis.virality}%</p>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground mb-1">Manipulation Index</p>
                        <div className="w-full h-3 bg-black/50 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-emerald-500 to-red-500"
                            style={{ width: `${analysis.manipulation}%` }}
                          ></div>
                        </div>
                        <p className="text-right text-xs text-muted-foreground mt-1">{analysis.manipulation}%</p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Cognitive Targets</p>
                        <div className="flex flex-wrap gap-2">
                          {analysis.targets.map((target, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-black/30 text-red-400 rounded-full text-xs border border-red-500/30"
                            >
                              {target}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Manipulation Warnings</p>
                      <ul className="space-y-2">
                        {analysis.warnings.map((warning, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 text-red-500 mt-0.5" />
                            <span className="text-sm">{warning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-sm italic text-muted-foreground">
                      "Your next decision—is it yours, or just a delayed retweet?"
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-emerald-500/20 text-center cyber-box">
            <h3 className="text-xl font-semibold mb-4 text-emerald-400">Final Reminder</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              "Every meme you share reprograms you. Whether you like, ignore, or share this, 'they' have already
              measured your reaction. It's time you start measuring it too."
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Shield className="w-4 h-4 mr-2" />
              Reclaim Your Cognition
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
