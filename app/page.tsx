"use client"

import React from "react"
import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ModeToggle } from "@/components/mode-toggle"
import { ViewToggle } from "@/components/view-toggle"
import { SlideNavigation } from "@/components/slide-navigation"
import { BackgroundAnimation } from "@/components/background-animation"
import { useMobile } from "@/hooks/use-mobile"

// Import all slide components
import { TitleSlide } from "@/components/slides/title-slide"
import { AttentionEconomy } from "@/components/slides/attention-economy"
import { MemeDefinition } from "@/components/slides/meme-definition"
import { MemesAsMycelia } from "@/components/slides/memes-as-mycelia"
import { InformationSnacks } from "@/components/slides/information-snacks"
import { LawsOfContagion } from "@/components/slides/laws-of-contagion"
import { MemeticSaturation } from "@/components/slides/memetic-saturation"
import { AdvancedInfection } from "@/components/slides/advanced-infection"
import { MemeticCountermeasures } from "@/components/slides/memetic-countermeasures"
import { PersonalExperience } from "@/components/slides/personal-experience"
import { LlaoLlaoProject } from "@/components/slides/llao-llao-project"
import { FinalReminder } from "@/components/slides/final-reminder"
import { SchemaView } from "@/components/schema-view"

export default function Home() {
  const [activeSection, setActiveSection] = useState(0)
  const [view, setView] = useState<"narrative" | "schema">("narrative")
  const [showIntro, setShowIntro] = useState(true)
  const isMobile = useMobile()
  const containerRef = useRef<HTMLDivElement>(null)

  const slides = [
    { id: "title", component: TitleSlide },
    { id: "attention-economy", component: AttentionEconomy },
    { id: "meme-definition", component: MemeDefinition },
    { id: "memes-as-mycelia", component: MemesAsMycelia },
    { id: "information-snacks", component: InformationSnacks },
    { id: "laws-of-contagion", component: LawsOfContagion },
    { id: "memetic-saturation", component: MemeticSaturation },
    { id: "advanced-infection", component: AdvancedInfection },
    { id: "memetic-countermeasures", component: MemeticCountermeasures },
    { id: "personal-experience", component: PersonalExperience },
    { id: "llao-llao-project", component: LlaoLlaoProject },
    { id: "final-reminder", component: FinalReminder },
  ]

  const handleNext = () => {
    if (activeSection < slides.length - 1) {
      setActiveSection(activeSection + 1)
    }
  }

  const handlePrev = () => {
    if (activeSection > 0) {
      setActiveSection(activeSection - 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        handleNext()
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        handlePrev()
      } else if (e.key === "Escape") {
        setShowIntro(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeSection])

  // Temporizador para mostrar el video por exactamente 1:18 (78 segundos)
  useEffect(() => {
    if (showIntro) {
      console.log("Video iniciado, se detendrá en 1:18 (78 segundos)")

      // Ajustado a exactamente 78 segundos (1:18)
      const timer = setTimeout(() => {
        console.log("Tiempo alcanzado: 1:18 - Cambiando a la presentación")
        setShowIntro(false)
      }, 78000) // 78 segundos = 1:18

      return () => clearTimeout(timer)
    }
  }, [showIntro])

  // Si estamos mostrando la intro, mostrar solo el iframe de YouTube
  if (showIntro) {
    return (
      <div className="fixed inset-0 bg-black z-50">
        <iframe
          src="https://www.youtube.com/embed/e6USefh4A4A?start=42&autoplay=1&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Botón para saltar */}
        <button
          onClick={() => setShowIntro(false)}
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    )
  }

  // Si no estamos mostrando la intro, mostrar la presentación normal
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="matrix-rain"></div>
      <BackgroundAnimation />

      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <ViewToggle view={view} setView={setView} />
        <ModeToggle />
      </div>

      <AnimatePresence mode="wait">
        {view === "narrative" ? (
          <div className="h-screen w-full overflow-hidden" ref={containerRef}>
            <motion.div
              key="narrative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <div className="h-screen w-full flex flex-col">
                <div className="flex-1 overflow-hidden py-8 px-4 md:px-8">
                  <div className="container mx-auto h-full flex items-center justify-center">
                    {React.createElement(slides[activeSection].component, { onNext: handleNext })}
                  </div>
                </div>

                <SlideNavigation
                  currentSlide={activeSection}
                  totalSlides={slides.length}
                  onPrev={handlePrev}
                  onNext={handleNext}
                />
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            key="schema"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-16 h-screen"
          >
            <SchemaView activeSection={activeSection} setActiveSection={setActiveSection} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
