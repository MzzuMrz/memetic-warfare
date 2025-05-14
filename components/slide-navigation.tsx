"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SlideNavigationProps {
  currentSlide: number
  totalSlides: number
  onPrev: () => void
  onNext: () => void
}

export function SlideNavigation({ currentSlide, totalSlides, onPrev, onNext }: SlideNavigationProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-black/30 backdrop-blur-sm border-t border-emerald-500/20">
      <Button
        variant="outline"
        size="icon"
        onClick={onPrev}
        disabled={currentSlide === 0}
        className="bg-black/50 border-emerald-500/20 backdrop-blur-sm"
      >
        <ChevronUp className="h-4 w-4 text-emerald-500" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <div className="flex items-center gap-1">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i === currentSlide ? "bg-emerald-500" : "bg-gray-700"}`}
          ></div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="bg-black/50 border-emerald-500/20 backdrop-blur-sm"
      >
        <ChevronDown className="h-4 w-4 text-emerald-500" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  )
}
