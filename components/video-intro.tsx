// Este archivo ya no se usa, la lógica se ha movido directamente a page.tsx
"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoIntroProps {
  onEnded: () => void
  onSkip: () => void
}

export function VideoIntro({ onEnded, onSkip }: VideoIntroProps) {
  useEffect(() => {
    // Configurar el temporizador para pasar a la página principal exactamente a los 1:19 (79 segundos)
    const timer = setTimeout(() => {
      // Pasar directamente a la página principal sin fade out
      onEnded()
    }, 79000) // 1:19 en milisegundos

    return () => {
      clearTimeout(timer)
    }
  }, [onEnded])

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Video de YouTube */}
      <iframe
        src="https://www.youtube.com/embed/e6USefh4A4A?start=42&autoplay=0&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0"
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Botón para saltar (sin texto de ESC) */}
      <Button
        onClick={onSkip}
        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm z-[1001]"
        size="icon"
        variant="ghost"
      >
        <X className="w-6 h-6" />
        <span className="sr-only">Skip intro</span>
      </Button>
    </div>
  )
}
